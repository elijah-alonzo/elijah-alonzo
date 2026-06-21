<h1 align="center"> Git </h1>

Git is a version control system that helps track changes in a project. If this isn't what you're looking for, click here to go back to the [previous page](../../NOTEBOOK.md).

To get started, install [Git](https://git-scm.com/downloads). Once installed, open a terminal and make sure the `git` command works before creating or cloning repositories. Don't forget to put it in the System Variables Path. 

| Command                                            | Description                                          |
| -------------------------------------------------- | ---------------------------------------------------- |
| `git -v`                                    | Check the installed Git version.                     |
| `git config --global user.name "Your Name"`        | Set your Git username.                               |
| `git config --global user.email "you@example.com"` | Set your Git email address.                          |
| `git init`                                         | Create a new Git repository.                         |
| `git clone REPOSITORY_URL`                         | Clone an existing repository.                        |
| `git status`                                       | Show the current repository status.                  |
| `git add .`                                        | Stage all modified files.                            |
| `git add filename`                                 | Stage a specific file.                               |
| `git commit -m "message"`                          | Create a new commit.                                 |
| `git log`                                          | Show commit history.                                 |
| `git log --oneline`                                | Show a compact commit history.                       |
| `git branch`                                       | List all local branches.                             |
| `git branch branch-name`                           | Create a new branch.                                 |
| `git switch branch-name`                           | Switch to a branch.                                  |
| `git switch -c branch-name`                        | Create and switch to a new branch.                   |
| `git checkout branch-name`                         | Switch to a branch.                                  |
| `git merge branch-name`                            | Merge a branch into the current branch.              |
| `git fetch`                                        | Download changes from the remote repository.         |
| `git pull`                                         | Download and apply remote changes.                   |
| `git push`                                         | Push commits to the remote repository.               |
| `git remote -v`                                    | Show configured remote repositories.                 |
| `git remote add origin REPOSITORY_URL`             | Add a remote repository.                             |
| `git stash`                                        | Temporarily save uncommitted changes.                |
| `git stash pop`                                    | Restore the most recent stash.                       |
| `git stash list`                                   | Show saved stashes.                                  |
| `git restore filename`                             | Discard changes in a file.                           |
| `git restore .`                                    | Discard all unstaged changes.                        |
| `git reset --soft HEAD~1`                          | Undo the last commit but keep changes staged.        |
| `git reset --hard HEAD~1`                          | Undo the last commit and remove changes.             |
| `git revert COMMIT_ID`                             | Create a new commit that reverses a previous commit. |
| `git tag`                                          | List all tags.                                       |
| `git tag v1.0.0`                                   | Create a new tag.                                    |
| `git push origin v1.0.0`                           | Push a tag to the remote repository.                 |
| `git branch -d branch-name`                        | Delete a local branch.                               |
| `git branch -D branch-name`                        | Force delete a local branch.                         |
| `git diff`                                         | Show unstaged changes.                               |
| `git diff --staged`                                | Show staged changes.                                 |
| `git clean -fd`                                    | Remove untracked files and folders.                  |

