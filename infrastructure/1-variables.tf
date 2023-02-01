variable "global_region" {
  type = string
  description = "AWS Global Region"
  default = "us-east-1"
}

variable "prefix" {
  type = string
  description = "Prefix to be added to the AWS resources tags"
  default = "fanfizzle-client"
}

variable "project" {
  type = string
  description = "Prefix to be added to the AWS resources tags"
  default = "fanfizzle-client"
}

variable "Main_client_app_domain" {
  type = string
  description = "Main client app domain"
  default = "fanfizzle.space"
}

variable "custom error response" {
  type = list(object({
    error_caching_min_ttl = string
    error_code = string
    response_code = string
    response_page_path = string
  }))
  description = "List of one or more custom error repsonse element maps"
  default = [
    {
    error_caching_min_ttl = "10"
    error_code = "400"
    response_code = "400"
    response_page_path = "/index.html"
  },
    {
    error_caching_min_ttl = "10"
    error_code = "403"
    response_code = "403"
    response_page_path = "/index.html"
  },
    {
    error_caching_min_ttl = "10"
    error_code = "404"
    response_code = "404"
    response_page_path = "/index.html"
  },
  ]
}
