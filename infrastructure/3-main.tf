tterraform {
  backend "s3" {
    bucket = "fanfizzle-app-terraform-state"
    key = "develop/fanfizzle-frontend.tfstate"
    region = "us-east-1"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"

  common_tags = {
    Environment = terraform.workspace
    Prject      = var.project
    ManagedBy   = "Terraform"
    Owner       = "Giovanni Reid"
  }
}
