<h1 align="center"> Kubernetes </h1>

Kubernetes helps manage and scale containers across multiple servers. If this isn't what you're looking for, click here to go back to the [previous page](../../NOTEBOOK.md).

```text
project/
│
├── deployment.yaml
├── service.yaml
├── ingress.yaml
├── configmap.yaml
└── secret.yaml
```

To get started, install Kubernetes locally through Docker Desktop or Minikube. Once installed, make sure both the `kubectl` and `minikube` commands work before managing clusters.

| Command                                          | Description                             |
| ------------------------------------------------ | --------------------------------------- |
| `minikube start`                                 | Start a local Kubernetes cluster.       |
| `minikube stop`                                  | Stop the cluster.                       |
| `minikube delete`                                | Delete the cluster.                     |
| `minikube status`                                | Check cluster status.                   |
| `minikube dashboard`                             | Open the Kubernetes dashboard.          |
| `minikube ip`                                    | Show the cluster IP address.            |
| `minikube service SERVICE_NAME`                  | Open a service in the browser.          |
| `minikube addons list`                           | List available addons.                  |
| `minikube addons enable ingress`                 | Enable the Ingress addon.               |
| `minikube addons disable ingress`                | Disable the Ingress addon.              |
| `kubectl version`                                | Check the installed Kubernetes version. |
| `kubectl cluster-info`                           | Show cluster information.               |
| `kubectl get nodes`                              | List cluster nodes.                     |
| `kubectl get pods`                               | List running pods.                      |
| `kubectl get services`                           | List services.                          |
| `kubectl get deployments`                        | List deployments.                       |
| `kubectl get ingress`                            | List ingress resources.                 |
| `kubectl describe pod POD_NAME`                  | Show pod details.                       |
| `kubectl logs POD_NAME`                          | View pod logs.                          |
| `kubectl logs -f POD_NAME`                       | Follow pod logs in real time.           |
| `kubectl exec -it POD_NAME -- sh`                | Open a shell inside a pod.              |
| `kubectl apply -f deployment.yaml`               | Create or update resources.             |
| `kubectl apply -f .`                             | Apply all manifests in a directory.     |
| `kubectl delete -f deployment.yaml`              | Delete resources.                       |
| `kubectl rollout restart deployment APP_NAME`    | Restart a deployment.                   |
| `kubectl rollout status deployment APP_NAME`     | Check rollout progress.                 |
| `kubectl scale deployment APP_NAME --replicas=3` | Scale a deployment.                     |
| `kubectl port-forward POD_NAME 8080:80`          | Forward a local port to a pod.          |
| `kubectl config get-contexts`                    | List available contexts.                |
| `kubectl config use-context NAME`                | Switch contexts.                        |

```yaml
apiVersion: apps/v1
kind: Deployment

metadata:
  name: app

spec:
  replicas: 3

  selector:
    matchLabels:
      app: app

  template:
    metadata:
      labels:
        app: app

    spec:
      containers:
        - name: app
          image: my-app:latest
          ports:
            - containerPort: 3000
```
