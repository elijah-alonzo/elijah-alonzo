cat >> ~/.bashrc <<'EOF'

# startup banner
if [[ $- == *i* ]]; then
  c=$'\e[1;38;2;80;180;235m'; b=$'\e[1;97m'; g=$'\e[0;38;5;245m'; r=$'\e[0m'
  printf '\n %s%s%s  %sArch Linux%s %s%s%s\n' "$c" '  ▟▙  ' "$r" "$b" "$r" "$g" "$(uname -r | cut -d- -f1)" "$r"
  printf ' %s%s%s  %sElijah Alonzo · %s%s\n' "$c" ' ▟██▙ ' "$r" "$g" "$(date +%Y.%m.%d)" "$r"
  printf ' %s%s%s  %s%s%s\n\n' "$c" '▟▛▘▝▜▙' "$r" "$g" "$PWD" "$r"
fi
EOF
source ~/.bashrc
