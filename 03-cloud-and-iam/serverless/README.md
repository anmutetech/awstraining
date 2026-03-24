# Serverless

This module covers AWS serverless patterns using Lambda functions and supporting services. Students learn to automate EC2 lifecycle management, process S3 events, retrieve secrets from AWS Secrets Manager, and connect a Flask web app to an RDS database.

## What This Module Covers

- Writing AWS Lambda functions in Python using boto3
- Starting and stopping EC2 instances on a schedule with Lambda
- Compressing S3 objects automatically using S3 event triggers
- Retrieving database credentials from AWS Secrets Manager
- Configuring IAM trust policies for Lambda and EventBridge Scheduler
- Building a Flask web application that connects to an RDS MySQL database

## Prerequisites

- AWS account with permissions for Lambda, EC2, S3, Secrets Manager, and IAM
- AWS CLI configured with valid credentials
- Python 3.x
- pip
- Flask and pymysql (listed in requirements.txt)

See [../../PREREQUISITES.md](../../PREREQUISITES.md) for install instructions.

## Step-by-Step Instructions

### 1. EC2 Start/Stop Lambda Functions

**startEC2.py** -- Launches a new EC2 instance tagged with `AutoSchedule=True`.

1. Create a Lambda function in the AWS Console (Python 3.x runtime).
2. Copy the contents of `startEC2.py` into the function code.
3. Update the `region_name`, `ImageId`, and `KeyName` values to match your environment.
4. Attach an IAM role with EC2 `RunInstances` and `CreateTags` permissions.
5. Test the function using a test event (empty JSON `{}` is sufficient).

**StopStartEC2.py** -- Toggles EC2 instances tagged `AutoSchedule=True` between running and stopped states.

1. Create a second Lambda function.
2. Copy `StopStartEC2.py` into the function code.
3. Attach an IAM role with EC2 `DescribeInstances`, `StopInstances`, and `StartInstances` permissions.
4. To automate scheduling, create an EventBridge rule with a cron expression that triggers this Lambda.

### 2. S3 File Compression Lambda

**lambda_function.py** -- Automatically compresses files uploaded to an S3 bucket into a `zip/` prefix.

1. Create a Lambda function and paste the contents of `lambda_function.py`.
2. Attach an IAM role with `s3:GetObject` and `s3:PutObject` permissions on the target bucket.
3. Add an S3 trigger on the bucket for `ObjectCreated` events.
4. Upload a test file to the bucket and verify a `.zip` version appears under the `zip/` prefix.

### 3. IAM Trust Policy

**trustPolicy.py** -- A JSON trust policy document that allows both `lambda.amazonaws.com` and `scheduler.amazonaws.com` to assume the role. Use this when creating IAM roles for the Lambda functions above.

1. In the IAM Console, create a new role.
2. Select "Custom trust policy" and paste the contents of `trustPolicy.py`.
3. Attach the required permissions policies for your Lambda use case.

### 4. Secrets Manager Integration

**secrets_manager.py** -- Retrieves a secret by name from AWS Secrets Manager and returns it as a parsed JSON dictionary.

1. Create a secret in AWS Secrets Manager with key/value pairs for your database credentials.
2. Update the `region_name` in `secrets_manager.py` if needed.
3. Call `get_secret("your-secret-name")` from your application code to retrieve credentials at runtime instead of hardcoding them.

### 5. Flask Database Connection App

**app.py** -- A Flask web application that connects to a MySQL RDS instance and reports the connection status.

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
2. Open `app.py` and replace the placeholder values in `hardcoded_credentials()` with your actual RDS endpoint, username, and password (or integrate with `secrets_manager.py` for production use).
3. Run the app:
   ```
   python app.py
   ```
4. Open `http://localhost:5000` in a browser. The page displays `CONNECTED` or `DISCONNECTED` with error details.

## Project Structure

```
serverless/
├── startEC2.py          # Lambda: launch a new EC2 instance
├── StopStartEC2.py      # Lambda: toggle start/stop on tagged EC2 instances
├── lambda_function.py   # Lambda: compress S3 objects into zip files
├── trustPolicy.py       # IAM trust policy for Lambda and Scheduler
├── secrets_manager.py   # Retrieve secrets from AWS Secrets Manager
├── app.py               # Flask app to test RDS database connectivity
├── requirements.txt     # Python dependencies (flask, pymysql, boto3)
├── test.txt             # Test data file
└── tolu.test            # Test data file
```
