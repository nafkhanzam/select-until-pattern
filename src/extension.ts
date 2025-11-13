// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { commands, ExtensionContext, Selection, window } from "vscode";

type IndexProvider = (active: number, pattern: string, text: string) => number;

const selectUntil = async (indexProvider: IndexProvider) => {
  const editor = window.activeTextEditor;
  if (!editor) {
    return window.showErrorMessage("Select Until: No active editor");
  }

  const pattern = await window.showInputBox({
    title: "String to select until",
  });

  if (pattern === undefined) {
    return; // User cancelled the selection.
  }

  const text = editor.document.getText();
  editor.selections = editor.selections.map((selection): Selection => {
    const result = indexProvider(
      editor.document.offsetAt(selection.active),
      pattern,
      text
    );
    if (result > 0) {
      return new Selection(
        selection.anchor,
        editor.document.positionAt(result)
      );
    }
    return selection;
  });
};

export const activate = (context: ExtensionContext) => {
  context.subscriptions.push(
    commands.registerCommand("select-until-pattern.select-until", () =>
      selectUntil((cur, S, txt) => {
        const match = txt.slice(cur).search(new RegExp(S));
        return match >= 0 ? cur + match : -1;
      })
    ),
    commands.registerCommand(
      "select-until-pattern.select-backwards-until",
      () => selectUntil((cur, S, txt) => {
        const regex = new RegExp(S, 'g');
        const textBefore = txt.slice(0, cur);
        let lastMatch = -1;
        let match;
        while ((match = regex.exec(textBefore)) !== null) {
          lastMatch = match.index;
        }
        return lastMatch;
      })
    )
  );
};

export const deactivate = () => {};
