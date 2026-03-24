variable "region" {
default = "us-west-2"
}
variable "instance_type" {
default = "t2.micro"
}
variable "instance_key" {
default = "<replace with your existing key pair"
}
variable "vpc_cidr" {
default = "178.0.0.0/16"
}
variable "public_subnet_cidr" {
default = "178.0.10.0/24"
}
