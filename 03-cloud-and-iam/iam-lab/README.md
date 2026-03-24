# AWS IAM Lab

This module provides a hands-on lab for configuring AWS Identity and Access Management (IAM). You will create IAM users, groups, custom policies, and roles, then test permissions to understand how AWS access control works in practice.

## What This Module Covers

- Creating IAM users and assigning console access
- Creating IAM groups and adding users to groups
- Writing custom IAM policies in JSON (e.g., S3 bucket-specific access)
- Attaching policies to groups
- Testing IAM user permissions by logging in with restricted accounts
- Creating IAM roles for EC2 instances
- IAM best practices (least privilege, MFA, avoid root account usage)

## Prerequisites

- AWS Console access (sandbox or training account)
- Administrator-level permissions to create IAM resources
- AWS CLI installed (for the EC2 role verification step)

See [../../PREREQUISITES.md](../../PREREQUISITES.md) for installation instructions.

## Lab Materials

This directory contains two documents that walk through the same lab exercise:

- **[iam_lab.md](iam_lab.md)** -- The full lab walkthrough in Markdown format with detailed instructions, JSON policy examples, and verification steps.
- **[iam_lab_walkthrough](iam_lab_walkthrough)** -- An alternate copy of the walkthrough for reference.

## Step-by-Step Overview

The lab is organized into seven steps. Refer to `iam_lab.md` for complete details.

1. **Create IAM Users** -- Create two users (e.g., DevUser1, DevUser2) with console access
2. **Create an IAM Group** -- Create a "Developers" group and add the users to it
3. **Create a Custom IAM Policy** -- Write a JSON policy granting `s3:ListBucket` on a specific bucket
4. **Attach the Policy to the Group** -- Apply the custom policy to the Developers group
5. **Test IAM User Permissions** -- Log in as an IAM user and verify restricted S3 access
6. **Create an IAM Role for EC2** -- Create a role with S3 read-only access for EC2 instances
7. **Verify the IAM Role (Optional)** -- Launch an EC2 instance with the role and test with `aws s3 ls`

## Cleanup

After completing the lab, delete all created IAM users, groups, policies, roles, and any EC2 instances to avoid unnecessary charges or security risks.

## Project Structure

```
iam_lab/
├── README.md               # This file (entry point)
├── iam_lab.md              # Full lab walkthrough with instructions and code
└── iam_lab_walkthrough     # Alternate copy of the walkthrough
```
