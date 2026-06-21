<h1 align="center"> PM2 </h1>

PM2 is a process manager for Node.js applications. If this isn't what you're looking for, click here to go back to the [previous page](../../NOTEBOOK.md).

```text
server/
│
├── app/
│
├── ecosystem.config.js
│
└── logs/
```

To get started, install PM2 globally with npm. Once installed, make sure the `pm2` command works before managing applications.

| Command | Description |
|----------|------------|
| `npm install -g pm2` | Install PM2 globally. |
| `pm2 --version` | Check the installed PM2 version. |
| `pm2 start app.js` | Start an application. |
| `pm2 start npm --name app -- run start` | Start an application using an npm script. |
| `pm2 list` | Show all managed applications. |
| `pm2 status` | Show application status. |
| `pm2 logs` | View logs for all applications. |
| `pm2 logs app` | View logs for a specific application. |
| `pm2 restart app` | Restart an application. |
| `pm2 reload app` | Reload an application with zero downtime. |
| `pm2 stop app` | Stop an application. |
| `pm2 delete app` | Remove an application from PM2. |
| `pm2 monit` | Open the monitoring dashboard. |
| `pm2 show app` | Show detailed information about an application. |
| `pm2 save` | Save the current process list. |
| `pm2 resurrect` | Restore previously saved processes. |
| `pm2 startup` | Generate startup configuration. |
| `pm2 flush` | Clear all logs. |
| `pm2 kill` | Stop all PM2 processes and the daemon. |

```javascript
module.exports = {
  apps: [
    {
      name: "my-app",
      script: "npm",
      args: "run start"
    }
  ]
}
```

```
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```