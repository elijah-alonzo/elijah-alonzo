<h1 align="center"> Arch Linux Development Environment (Unfinished) </h1>

```bash
# quick install
sudo pacman -Syu                                           # pacman: sync + upgrade
sudo pacman -S --needed base base-devel sudo git openssh   # base tools
sudo pacman -S --needed bat eza yazi tree less nano unzip  # terminal tools
sudo pacman -S --needed mise nginx valkey                  # dev tools
```

**run in order, once per new machine**

```bash
# 1. enable systemd + set default user (run in Arch)
sudo tee /etc/wsl.conf <<'EOF'
[boot]
# needed for systemctl
systemd=true

[user]
# auto log in as this user instead of root
default=
EOF

# 2. restart WSL (run in Windows PowerShell, NOT here), then reopen Arch
wsl --shutdown

# 3. add PATH, ssh-agent and mise to the shell, then reload it
cat >> ~/.bashrc <<'EOF'
export PATH="$HOME/.local/bin:$PATH"
export SSH_AUTH_SOCK="$XDG_RUNTIME_DIR/ssh-agent.socket"
eval "$(mise activate bash)"
EOF
source ~/.bashrc

# 4. startup banner and start valkey
bash banner.sh
sudo systemctl enable --now valkey
```

---

**pacman**

```bash
sudo pacman -Syu                  # sync + upgrade (never -Sy alone)
sudo pacman -S pkg                # install
sudo pacman -R pkg                # remove (avoid -s, it can drop libs mise needs)
pacman -Ss kw                     # search repos
pacman -Qe                        # explicitly installed
sudo pacman -Sc                   # clear cache
sudo pacman -S archlinux-keyring  # fixes keyring errors
```

---

**mise commands** (owns every language runtime and dev tool)

```bash
mise use -g node@lts      # set a personal default
mise use node@22          # pin for this folder (writes .mise.toml)
mise ls                   # active versions here
mise ls-remote node       # available versions
mise install              # install what the repo asks for
mise upgrade              # update tools within their pinned range
mise trust                # trust a repo's .mise.toml (read it first)
type -a node              # first line must be under ~/.local/share/mise/
```

`~/.config/mise/config.toml`

```toml
# reads `.mise.toml`, `.tool-versions`, `.nvmrc`, `.python-version`, etc. repo's file overrides your defaults
[settings]
idiomatic_version_file_enable_tools = ["node", "python", "php", "java", "ruby"]
auto_install = true
not_found_auto_install = true

[tools]
node = "lts"
pnpm = "latest"

# if wrong version or binary after run `source ~/.bashrc && hash -r`
```

