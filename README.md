# Select Until Pattern

A Visual Studio Code extension that allows you to extend your text selection until a specified regex pattern is found.

## Features

This extension provides two powerful commands for text selection:

### Select Until

Extends the current selection forward from the cursor position until the specified pattern is found.

**Command:** `Select Until`

**Usage:**
1. Place your cursor at the starting position
2. Run the command (via Command Palette: `Ctrl+Shift+P` / `Cmd+Shift+P`)
3. Enter a regex pattern to search for
4. Your selection will extend from the cursor to the pattern match

### Select Backwards Until

Extends the current selection backward from the cursor position until the specified pattern is found.

**Command:** `Select Backwards Until`

**Usage:**
1. Place your cursor at the starting position
2. Run the command (via Command Palette: `Ctrl+Shift+P` / `Cmd+Shift+P`)
3. Enter a regex pattern to search for
4. Your selection will extend backward from the cursor to the pattern match

## Use Cases

- Quickly select text between delimiters (parentheses, brackets, quotes)
- Select code blocks or sections based on patterns
- Navigate and select text in structured documents
- Bulk editing with multi-cursor support

## Examples

### Example 1: Select until closing bracket
```
const obj = { foo: 'bar', baz: 'qux' };
           ^cursor
```
Pattern: `}`
Result: Selects `foo: 'bar', baz: 'qux'`

### Example 2: Select backwards to opening bracket
```
const obj = { foo: 'bar', baz: 'qux' };
                              ^cursor
```
Pattern: `\{`
Result: Selects backward to include `{ foo: 'bar', baz: 'qux'`

## Regex Support

Both commands support full JavaScript regex patterns, allowing for powerful and flexible text selection:

- Literal strings: `hello`
- Special characters (escaped): `\(`, `\)`, `\[`, `\]`, `\{`, `\}`
- Character classes: `[a-z]`, `[0-9]`, `\w`, `\s`
- Quantifiers: `+`, `*`, `?`, `{n,m}`
- Anchors and more: `^`, `$`, `\.`

## Requirements

- Visual Studio Code version 1.106.0 or higher

## Commands

| Command | Command ID | Description |
|---------|------------|-------------|
| Select Until | `select-until-pattern.select-until` | Extend selection forward until pattern |
| Select Backwards Until | `select-until-pattern.select-backwards-until` | Extend selection backward until pattern |

## Recommended Keybindings

You can add custom keybindings in your `keybindings.json`:

```json
[
  {
    "key": "ctrl+shift+.",
    "command": "select-until-pattern.select-until"
  },
  {
    "key": "ctrl+shift+,",
    "command": "select-until-pattern.select-backwards-until"
  }
]
```

## Known Issues

None at this time. Please report issues on the [GitHub repository](https://github.com/nafkhanzam/select-until-pattern/issues).

## Release Notes

### 0.0.1

Initial release of Select Until Pattern
- Select text forward until a regex pattern
- Select text backward until a regex pattern
- Multi-cursor support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

See LICENSE file for details.
