<h1 align="center"> GitHub Actions </h1>

GitHub Actions automates tasks for you, such as testing, building, and deploying applications. I mostly use GitHub Actions to automatically deploy projects whenever code is pushed to a repository. If this isn't what you're looking for, click here to go back to the [previous page](../../NOTEBOOK.md).

```text
.github/
│
└── workflows/
    ├── deploy.yml
    ├── build.yml
    └── test.yml
```

Create a `.github/workflows` directory in repository and add a workflow file. GitHub Actions is built into GitHub, so there's nothing to install locally.

| Action | Description |
|----------|------------|
| `on: push` | Run when code is pushed. |
| `on: pull_request` | Run when a pull request is opened or updated. |
| `actions/checkout@v4` | Download repository code. |
| `actions/setup-node@v4` | Setup Node.js. |
| `actions/setup-dotnet@v4` | Setup .NET. |
| `actions/cache@v4` | Cache dependencies between runs. |
| `npm install` | Install dependencies. |
| `npm run build` | Build the application. |
| `npm test` | Run tests. |
| `appleboy/ssh-action` | Run commands on a remote server through SSH. |
| `secrets.*` | Access repository secrets. |

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Deploy
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /var/www/app
            git pull
            npm install
            npm run build
            pm2 restart app
```