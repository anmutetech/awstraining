# Jenkins -- Pipeline with Docker Agent

This module introduces Jenkins declarative pipelines using a Docker-based agent. Students learn how to define a simple CI pipeline that runs inside a container.

## What This Module Covers

- Jenkins declarative pipeline syntax
- Using a Docker image as a pipeline agent
- Running build steps inside a containerized environment
- Basic pipeline stage and step structure

## Prerequisites

- Jenkins installed and running
- Docker installed on the Jenkins host
- Docker Pipeline plugin installed in Jenkins

See [../PREREQUISITES.md](../PREREQUISITES.md) for install instructions.

## Step-by-Step Instructions

1. **Review the pipeline definition.** Open `test-pipeline` and study the structure:
   - The `agent` block specifies a Docker image (`python:3.12.1-alpine3.19`)
   - The `build` stage runs `python --version` to verify the container environment

2. **Create a new Jenkins pipeline job:**
   - In Jenkins, click "New Item"
   - Enter a name (e.g., `test-pipeline`) and select "Pipeline"
   - Click OK

3. **Configure the pipeline:**
   - Scroll to the "Pipeline" section
   - Set "Definition" to "Pipeline script"
   - Copy and paste the contents of `test-pipeline` into the script box
   - Click Save

4. **Run the pipeline:**
   - Click "Build Now"
   - Jenkins will pull the `python:3.12.1-alpine3.19` Docker image, start a container, and run `python --version` inside it

5. **Check the output:**
   - Click on the build number, then "Console Output"
   - Verify that the Python version is printed successfully

6. **Experiment further:**
   - Add more stages to the pipeline (e.g., a `test` stage that runs `pip install pytest && pytest`)
   - Try changing the Docker image to a different Python version or a different language entirely

## Project Structure

```
Jenkins/
├── README.md
└── test-pipeline    # Declarative Jenkins pipeline using a Python Docker agent
```
