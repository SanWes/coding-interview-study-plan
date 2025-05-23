### 📄 CONVENTIONAL\_COMMITS.md

# Conventional Commit Format

Conventional Commits are a standardized way to structure your Git commit messages, making your project history easier to read and automate (e.g., changelogs, versioning).

---

## 📌 Format

```
<type>(<scope>): <short summary>
<BLANK LINE>
<optional body>
<BLANK LINE>
<optional footer>
```

---

## 🔠 Types

| Type       | Purpose                                                              |
| ---------- | -------------------------------------------------------------------- |
| `feat`     | A new feature                                                        |
| `fix`      | A bug fix                                                            |
| `docs`     | Documentation-only changes                                           |
| `style`    | Changes that do not affect the meaning of the code (e.g. formatting) |
| `refactor` | A code change that neither fixes a bug nor adds a feature            |
| `perf`     | A code change that improves performance                              |
| `test`     | Adding missing tests or correcting existing tests                    |
| `build`    | Changes that affect the build system or external dependencies        |
| `ci`       | Changes to CI configuration files and scripts                        |
| `chore`    | Other changes that don't modify src or test files                    |
| `revert`   | Reverts a previous commit                                            |

---

## 🔍 Scope (optional but recommended)

The scope refers to the section of the codebase the commit affects. Examples:

* `checkout`
* `cart`
* `api`
* `review`
* `form`
* `firebase`

---

## ✍️ Examples

### Adding a Feature

```
feat(cart): add quantity control buttons
```

### Fixing a Bug

```
fix(review): display correct subtotal in order summary
```

### Updating Documentation

```
docs(readme): update project setup instructions
```

### Styling Changes

```
style(form): format spacing and indentations
```

### Refactoring Code

```
refactor(firebase): clean up Firestore query logic
```

---

## ✅ Best Practices

* Use the imperative mood in the summary line (e.g., "fix", not "fixed" or "fixes").
* Keep the summary under 72 characters.
* Use the body to explain **what** and **why**, not **how**, if needed.
* Use the footer for breaking changes or issue references (e.g., `BREAKING CHANGE:` or `Closes #123`).

---

## 🔁 Footer Example

```
BREAKING CHANGE: cart API now requires user authentication

Closes #42
```

---

## 🧠 Resources

* [conventionalcommits.org](https://www.conventionalcommits.org)
* [Semantic Versioning](https://semver.org/)
* [Commitizen](https://commitizen-tools.github.io/commitizen/)
