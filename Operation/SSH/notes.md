<h1 align="center"> SSH </h1>

SSH lets you connect to remote machines directly from your terminal. I mostly use it for accessing servers, deployments, and transferring files. If this isn't what you're looking for, click here to go back to the [previous page](../../NOTEBOOK.md).

```text
~/.ssh/
│
├── id_rsa
├── id_rsa.pub
├── known_hosts
└── config
```

SSH is already included in Linux, macOS, and modern versions of Windows, so there's usually nothing to install. Just make sure the `ssh` command works in your terminal.

| Command | Description |
|----------|------------|
| `ssh user@server-ip` | Connect to a server. |
| `ssh -p 2222 user@server-ip` | Connect using a custom port. |
| `ssh-keygen` | Generate a key pair. |
| `ssh-copy-id user@server-ip` | Copy your public key to a server. |
| `ssh-add ~/.ssh/id_rsa` | Add a key to the SSH agent. |
| `ssh -i ~/.ssh/id_rsa user@server-ip` | Connect using a specific key. |
| `scp file.txt user@server-ip:/path` | Upload a file. |
| `scp user@server-ip:/path/file.txt .` | Download a file. |
| `scp -r folder user@server-ip:/path` | Upload a folder. |
| `sftp user@server-ip` | Start an SFTP session. |
| `ssh-keyscan server-ip` | Get a server's public key. |
| `ssh -v user@server-ip` | Connect with debug output. |
| `ssh -T git@github.com` | Test GitHub authentication. |
| `cat ~/.ssh/id_rsa.pub` | View your public key. |
| `chmod 600 ~/.ssh/id_rsa` | Secure a private key. |
| `chmod 700 ~/.ssh` | Secure the SSH directory. |
| `ssh-add -l` | Show loaded keys. |
| `ssh user@server-ip "command"` | Run a command on a remote server. |
