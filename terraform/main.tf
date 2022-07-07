terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }
  backend "s3" {
    bucket = "johnbriceno.com"
    key    = "terra.tfstate"
    region = "ap-southeast-2"
  }
  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "ap-southeast-2"
}

resource "aws_instance" "app_server" {
  ami           = "ami-07620139298af599e"
  instance_type = "t2.micro"

  tags = {
    Name = "TestEC2"
  }
}