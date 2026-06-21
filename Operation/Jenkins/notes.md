<h1 align="center"> Jenkins </h1>

Jenkins is a CI/CD tool. If this isn't what you're looking for, click here to go back to the [previous page](../../NOTEBOOK.md).

```text
Jenkins
│
├── Dashboard
│
├── Jobs/
│
├── Pipelines/
│
├── Nodes/
│
└── Plugins/
```

To get started, install Jenkins on a server or locally using Docker. Once installed, open the Jenkins dashboard in your browser and complete the initial setup wizard.

| Command | Description |
|----------|------------|
| `systemctl start jenkins` | Start Jenkins. |
| `systemctl stop jenkins` | Stop Jenkins. |
| `systemctl restart jenkins` | Restart Jenkins. |
| `systemctl status jenkins` | Check Jenkins status. |
| `systemctl enable jenkins` | Start Jenkins on boot. |
| `journalctl -u jenkins` | View Jenkins logs. |
| `journalctl -u jenkins -f` | Follow Jenkins logs in real time. |
| `docker pull jenkins/jenkins:lts` | Download the Jenkins image. |
| `docker run -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts` | Run Jenkins in Docker. |
| `jenkins-plugin-cli --list` | List installed plugins. |
| `java -jar jenkins-cli.jar -s http://localhost:8080 help` | Show Jenkins CLI commands. |

```groovy
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'pm2 restart app'
            }
        }
    }
}
```