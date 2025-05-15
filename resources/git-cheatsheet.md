
# Git & GitHub Cheatsheet

## Basic Git Setup
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## Initialize & Clone Repositories

- Initialize a new local git repo
```bash
git init
```

- Clone a remote repository to local
```bash
git clone <repo-url>
```

---

## Check Status & Changes

- See current repo status (modified, staged files)
```bash
git status
```

- Show changes made but not yet staged
```bash
git diff
```

- Show changes staged for commit
```bash
git diff --staged
```

---

## Staging & Committing

- Stage files for commit
```bash
git add <filename>      # single file
git add .               # all changed files in current directory
```

- Commit staged changes with message
```bash
git commit -m "Your commit message"
```

- Commit all changes (stage + commit)
```bash
git commit -a -m "Your commit message"
```

---

## Branching & Merging

- List all branches, current branch highlighted
```bash
git branch
```

- Create a new branch
```bash
git branch <branch-name>
```

- Switch to a branch
```bash
git checkout <branch-name>
```

- Create and switch to a new branch (shortcut)
```bash
git checkout -b <branch-name>
```

- Merge branch into current branch
```bash
git merge <branch-name>
```

---

## Remote Repositories (GitHub)

- Show remote URLs
```bash
git remote -v
```

- Add a remote repository
```bash
git remote add origin <repo-url>
```

- Push local branch to remote
```bash
git push origin <branch-name>
```

- Push and set upstream branch (for first push)
```bash
git push -u origin <branch-name>
```

- Pull changes from remote branch and merge
```bash
git pull origin <branch-name>
```

---

## Undo Changes

- Unstage file (keep changes in working directory)
```bash
git reset <file>
```

- Discard changes in working directory (dangerous, unrecoverable)
```bash
git checkout -- <file>
```

- Revert last commit but keep changes staged
```bash
git reset --soft HEAD~1
```

- Revert last commit and discard changes (dangerous)
```bash
git reset --hard HEAD~1
```

---

## Viewing History & Logs

- Show commit history
```bash
git log
```

- Show one-line summary of commits
```bash
git log --oneline
```

- Show commit history for a file
```bash
git log -- <filename>
```

---

## GitHub Specific

- Fork a repo (via GitHub website)
- Clone your forked repo
- Add upstream remote (original repo)
```bash
git remote add upstream <original-repo-url>
```

- Fetch upstream changes
```bash
git fetch upstream
```

- Merge upstream branch into your local branch
```bash
git merge upstream/main
```

- Create a Pull Request (PR) on GitHub (via website after pushing your branch)
- Review and merge PRs via GitHub interface

---

## Useful Tips

- View changes between commits
```bash
git diff <commit1> <commit2>
```

- Show untracked files
```bash
git ls-files --others --exclude-standard
```

- Delete a local branch
```bash
git branch -d <branch-name>
```

- Delete a remote branch
```bash
git push origin --delete <branch-name>
```

- Stash changes (save and clean working directory)
```bash
git stash
```

- Apply stashed changes
```bash
git stash apply
```
