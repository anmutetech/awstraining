# Contributing Guide for Instructors

How to add new training modules to this repository.

## Directory Naming Convention

- Use lowercase letters with hyphens (e.g., `docker-compose`, `terraform-basics`).
- Place the module inside the appropriate numbered phase folder (e.g., `02-docker/`, `04-terraform/`).
- Never use spaces, underscores, or uppercase letters in directory or file names.

## README Template

Every module must include a `README.md` with the following sections:

```
# Module Title

Brief description of what this module covers and what the learner will build.

## Prerequisites

List required knowledge and tools. Link to [PREREQUISITES.md](../PREREQUISITES.md)
for global setup instructions.

## Step-by-Step Instructions

1. First step
2. Second step
3. ...

## Project Structure

Describe the key files and directories in the module.
```

## File Conventions

- No spaces in file or directory paths.
- No emojis in README files or documentation.
- Use `.md` for documentation, `.yaml` or `.yml` for configuration files.
- Keep file names descriptive and concise.

## Adding a Module to This Repository

1. Create a directory under the correct phase folder following the naming convention.
2. Add a `README.md` using the template above.
3. Include all necessary source code, configuration files, and Dockerfiles.
4. Update `LEARNING_PATH.md` to include the new module in the correct phase table.
5. If the module has specific tool requirements, add them to `PREREQUISITES.md`.

## Standalone Repositories

For advanced labs hosted in their own repositories:

- Repository naming convention: lowercase with hyphens (e.g., `cloud-migration-infra`, `container-security-lab`).
- Required files:
  - `README.md` following the template above.
  - `.github/workflows/` directory with CI/CD pipeline definitions, if the lab involves CI/CD.
  - `kubernetes/` directory with manifests, if the lab involves Kubernetes deployments.
- Add an entry to the Advanced Labs table in `LEARNING_PATH.md`.

## Review Checklist

Before submitting a pull request for a new module:

- [ ] Directory follows the naming convention.
- [ ] README includes all required sections.
- [ ] No spaces in file paths.
- [ ] No emojis in documentation.
- [ ] `LEARNING_PATH.md` is updated.
- [ ] All commands in the instructions have been tested.
