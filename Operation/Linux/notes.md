<h1 align="center"> Linux </h1>

Linux is the operating system behind most servers and cloud environments. If this isn't what you're looking for, click here to go back to the [previous page](../../NOTEBOOK.md).

To get started, install a distro such as [Ubuntu](https://ubuntu.com/download) or use [WSL](https://learn.microsoft.com/windows/wsl/install) if you're on Windows. Once installed, open a terminal and make sure basic commands such as `pwd`, `ls`, and `cd` work correctly.

| Command                          | Description                           |
| -------------------------------- | ------------------------------------- |
| `pwd`                            | Show the current directory.           |
| `ls`                             | List files and folders.               |
| `ls -la`                         | List files with detailed information. |
| `cd folder-name`                 | Move into a directory.                |
| `cd ..`                          | Move up one directory.                |
| `mkdir folder-name`              | Create a new directory.               |
| `rmdir folder-name`              | Remove an empty directory.            |
| `rm file-name`                   | Delete a file.                        |
| `rm -rf folder-name`             | Delete a directory and its contents.  |
| `cp file.txt backup.txt`         | Copy a file.                          |
| `cp -r source destination`       | Copy a directory.                     |
| `mv old-name new-name`           | Rename a file or folder.              |
| `mv file.txt folder/`            | Move a file.                          |
| `touch file.txt`                 | Create an empty file.                 |
| `cat file.txt`                   | Display file contents.                |
| `less file.txt`                  | View file contents page by page.      |
| `head file.txt`                  | Show the first lines of a file.       |
| `tail file.txt`                  | Show the last lines of a file.        |
| `tail -f file.txt`               | Monitor a file in real time.          |
| `find . -name "*.php"`           | Search for files.                     |
| `grep "text" file.txt`           | Search for text in a file.            |
| `chmod 755 file.sh`              | Change file permissions.              |
| `chown user:user file.txt`       | Change file ownership.                |
| `whoami`                         | Show the current user.                |
| `id`                             | Show user and group information.      |
| `sudo command`                   | Run a command as administrator.       |
| `ps aux`                         | Show running processes.               |
| `kill PID`                       | Stop a process.                       |
| `kill -9 PID`                    | Force stop a process.                 |
| `top`                            | Monitor system processes.             |
| `htop`                           | Interactive process monitor.          |
| `df -h`                          | Show disk usage.                      |
| `du -sh folder-name`             | Show folder size.                     |
| `free -h`                        | Show memory usage.                    |
| `uname -a`                       | Show system information.              |
| `hostname`                       | Show the system hostname.             |
| `ip a`                           | Show network interfaces.              |
| `ping google.com`                | Test network connectivity.            |
| `curl URL`                       | Make an HTTP request.                 |
| `wget URL`                       | Download a file.                      |
| `ssh user@server-ip`             | Connect to a remote server.           |
| `scp file.txt user@server:/path` | Copy a file to a remote server.       |
| `history`                        | Show command history.                 |
| `clear`                          | Clear the terminal screen.            |

```
```
