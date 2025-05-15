# Markdown Cheat Sheet

This cheat sheet covers the most commonly used Markdown syntax so you can quickly format your notes, READMEs, and documentation.

---

## Headings

Use `#` to `######` for different heading levels:

```markdown
# H1 (Largest)
## H2
### H3
#### H4
##### H5
###### H6 (Smallest)
```

## Emphasis

Style text with asterisks `*` or underscores `_`:

```markdown
*italic* or _italic_          → *italic*
**bold** or __bold__          → **bold**
***bold italic***             → ***bold italic***
```

## Lists

### Unordered List

```markdown
- Item 1
- Item 2
  - Subitem
* Or use asterisks
```

### Ordered List

```markdown
1. First item
2. Second item
   1. Subitem
```

## Code

### Inline Code

```markdown
Use `backticks` to highlight `inline code`.
```

### Code Block

Use triple backticks and optionally specify the language:

````markdown
```java
int[] nums = {1, 2, 3};
````

````

## Links
```markdown
[Link Text](https://example.com)
````

## Images

```markdown
![Alt Text](https://example.com/image.png)
```

## Blockquotes

```markdown
> This is a quote
>> Nested quote
```

## Horizontal Line

Use three dashes:

```markdown
---
```

## Tables

Align columns using pipes `|` and dashes `-`:

```markdown
| Column 1 | Column 2 |
|----------|----------|
| Value 1  | Value 2  |
| Value 3  | Value 4  |
```

## Task Lists

Create checkboxes:

```markdown
- [x] Completed item
- [ ] Incomplete item
```

---

## Extras

### Escaping Special Characters

Use a backslash `\` to escape characters:

```markdown
\*not italic\* → *not italic*
```

### HTML in Markdown

You can embed raw HTML for more control:

```markdown
<b>Bold Text</b>
```

### Line Breaks

End a line with two spaces or use `<br>` for manual line breaks:

```markdown
Line one.  
Line two.
```

---

## Tips

* Leave a blank line between blocks (like paragraphs and headers) for best results.
* Use `.md` extension for Markdown files.
* Preview your Markdown in VS Code or GitHub to verify formatting.
