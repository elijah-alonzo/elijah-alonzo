<h1 align="center"> Docker </h1>

Docker is containerizes your apps so it won't have to deal with the "It works in my machine" problem. If this isn't what you're looking for, click here to go back to the [previous page](../../NOTEBOOK.md).

```text
project/
│
├── Dockerfile          # Instructions for building an image
│
├── docker-compose.yml  # Run multiple containers together
│
├── .dockerignore       # Files Docker should ignore
│
└── app/                # Your application source code
```

To get started, install [Docker Desktop](https://www.docker.com/products/docker-desktop/). Once installed, open a terminal and make sure the `docker` command works before creating or running containers.

| Command                                     | Description                               |
| ------------------------------------------- | ----------------------------------------- |
| `docker --version`                          | Check the installed Docker version.       |
| `docker info`                               | Show Docker system information.           |
| `docker pull image-name`                    | Download an image from Docker Hub.        |
| `docker images`                             | List downloaded images.                   |
| `docker ps`                                 | Show running containers.                  |
| `docker ps -a`                              | Show all containers.                      |
| `docker run image-name`                     | Create and run a container.               |
| `docker run -d image-name`                  | Run a container in the background.        |
| `docker run -p 80:80 image-name`            | Map a container port to the host machine. |
| `docker start container-id`                 | Start a stopped container.                |
| `docker stop container-id`                  | Stop a running container.                 |
| `docker restart container-id`               | Restart a container.                      |
| `docker rm container-id`                    | Remove a container.                       |
| `docker rmi image-name`                     | Remove an image.                          |
| `docker exec -it container-id bash`         | Open a terminal inside a container.       |
| `docker logs container-id`                  | View container logs.                      |
| `docker logs -f container-id`               | Follow logs in real time.                 |
| `docker inspect container-id`               | Show detailed container information.      |
| `docker cp file.txt container-id:/path`     | Copy a file into a container.             |
| `docker build -t app-name .`                | Build an image from a Dockerfile.         |
| `docker tag image-name username/image-name` | Tag an image.                             |
| `docker push username/image-name`           | Push an image to Docker Hub.              |
| `docker network ls`                         | List Docker networks.                     |
| `docker volume ls`                          | List Docker volumes.                      |
| `docker system df`                          | Show Docker disk usage.                   |
| `docker system prune`                       | Remove unused Docker resources.           |
| `docker compose up`                         | Start services from a Compose file.       |
| `docker compose up -d`                      | Start services in the background.         |
| `docker compose down`                       | Stop and remove Compose services.         |
| `docker compose restart`                    | Restart Compose services.                 |
| `docker compose logs`                       | View Compose logs.                        |
| `docker compose logs -f`                    | Follow Compose logs in real time.         |
| `docker compose build`                      | Build services defined in Compose.        |
| `docker compose ps`                         | Show running Compose services.            |

```
```
