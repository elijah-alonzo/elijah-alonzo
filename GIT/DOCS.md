<h1 align="center"> Git Commands (Unfinished) </h1>

```bash
# switches http to ssh
git remote set-url origin git@github.com:elijah-alonzo/elijah-alonzo.git

# unstage a file (keeps your changes)
git restore --staged <file>

# discard changes to a file (cannot be undone)
git restore <file>

# amend file to the last commit
git add <file>
git commit --amend --no-edit

# rename the last commit message
git commit --amend -m "new message"

# undo the last commit, keep changes staged
git reset --soft HEAD~1

# push the current local branch (shorthand, no need to type the name)
git push -u origin HEAD

# push after amending (rewrites history, safer than --force)
git push --force-with-lease

# wipe all commit history, keep files as one fresh commit (rewrites remote!)
git checkout --orphan fresh-main
git add -A
git commit -m "message"
git branch -M main
git push -f origin main
```
