<h1 align="center"> Nginx </h1>

Nginx is a web server and reverse proxy that sits in front of your applications. If this isn't what you're looking for, click here to go back to the [previous page](../../NOTEBOOK.md).

```text
/etc/nginx/
│
├── nginx.conf
│
├── sites-available/
│
└── sites-enabled/
```

To get started, install Nginx on your server and make sure the `nginx` command works before creating configurations.

| Command | Description |
|----------|------------|
| `nginx -v` | Check the installed Nginx version. |
| `nginx -t` | Test the Nginx configuration. |
| `systemctl start nginx` | Start Nginx. |
| `systemctl stop nginx` | Stop Nginx. |
| `systemctl restart nginx` | Restart Nginx. |
| `systemctl reload nginx` | Reload configuration without downtime. |
| `systemctl status nginx` | Check Nginx status. |
| `systemctl enable nginx` | Start Nginx automatically on boot. |
| `systemctl disable nginx` | Disable automatic startup. |
| `journalctl -u nginx` | View Nginx logs. |
| `journalctl -u nginx -f` | Follow Nginx logs in real time. |
| `nginx -s reload` | Reload Nginx manually. |
| `nginx -s stop` | Stop Nginx manually. |
| `nginx -s quit` | Gracefully stop Nginx. |
| `sudo ln -s /etc/nginx/sites-available/site.conf /etc/nginx/sites-enabled/` | Enable a site configuration. |
| `sudo rm /etc/nginx/sites-enabled/site.conf` | Disable a site configuration. |
| `sudo nano /etc/nginx/sites-available/site.conf` | Edit a site configuration. |
| `sudo certbot --nginx` | Generate and configure an SSL certificate. |
| `sudo certbot renew --dry-run` | Test SSL certificate renewal. |

```
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://localhost:3000;
    }
}
```