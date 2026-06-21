<h1 align="center"> Terraform </h1>

Terraform lets you define infrastructure using code instead of manually clicking around cloud dashboards. If this isn't what you're looking for, click here to go back to the [previous page](../../NOTEBOOK.md).

```text
project/
│
├── main.tf
├── variables.tf
├── outputs.tf
├── terraform.tfvars
├── providers.tf
└── .terraform/
```

To get started, install [Terraform](https://developer.hashicorp.com/terraform/downloads). Once installed, open a terminal and make sure the `terraform` command works before creating or managing infrastructure.

| Command | Description |
|----------|------------|
| `terraform version` | Check the installed Terraform version. |
| `terraform init` | Initialize a Terraform project. |
| `terraform validate` | Validate configuration files. |
| `terraform fmt` | Format Terraform files. |
| `terraform plan` | Preview infrastructure changes. |
| `terraform apply` | Apply infrastructure changes. |
| `terraform destroy` | Remove managed infrastructure. |
| `terraform show` | Show the current state. |
| `terraform output` | View output values. |
| `terraform refresh` | Refresh the state from real infrastructure. |
| `terraform state list` | List tracked resources. |
| `terraform state show RESOURCE` | Show details about a resource. |
| `terraform state rm RESOURCE` | Remove a resource from state. |
| `terraform import RESOURCE ID` | Import an existing resource. |
| `terraform workspace list` | List workspaces. |
| `terraform workspace new NAME` | Create a workspace. |
| `terraform workspace select NAME` | Switch workspaces. |
| `terraform providers` | Show configured providers. |
| `terraform graph` | Generate a dependency graph. |
| `terraform taint RESOURCE` | Mark a resource for recreation. |

```hcl
provider "aws" {
  region = "ap-southeast-1"
}

resource "aws_instance" "server" {
  ami           = "ami-xxxxxxxx"
  instance_type = "t2.micro"
}
```