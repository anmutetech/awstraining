# Phase 3 Challenges

These challenges test your skills from this phase. No step-by-step instructions -- use what you've learned.

---

## Challenge 1: Conditional IAM Policy

Create an IAM policy (as a JSON document) that grants read-only access to all S3 buckets in the account but explicitly denies all access to a specific bucket named `confidential-data-bucket`. Attach this policy to a new IAM group called `limited-s3-readers`.

### Acceptance Criteria

- The policy allows `s3:Get*` and `s3:List*` actions on all S3 resources.
- The policy includes an explicit Deny statement for all S3 actions on `arn:aws:s3:::confidential-data-bucket` and `arn:aws:s3:::confidential-data-bucket/*`.
- A user in the `limited-s3-readers` group can list and read objects in any bucket except `confidential-data-bucket`.
- Attempting to access `confidential-data-bucket` returns an "Access Denied" error.
- The policy is valid JSON and can be created using the AWS CLI or Console.

### Hints

- Remember that an explicit Deny always overrides an Allow in IAM policy evaluation.
- You need to deny access to both the bucket itself (`arn:aws:s3:::bucket-name`) and its contents (`arn:aws:s3:::bucket-name/*`).

---

## Challenge 2: Scheduled EC2 Age Checker

Create a Lambda function that runs on a schedule (daily) to check whether any EC2 instances in the account have been running continuously for more than 7 days. If any long-running instances are found, the function sends a notification to an SNS topic with the instance IDs and their launch times.

### Acceptance Criteria

- The Lambda function is written in Python (using `boto3`).
- The function queries all running EC2 instances and compares their `LaunchTime` to the current time.
- Instances running for more than 7 days are included in the notification.
- The function publishes a message to an SNS topic that includes the instance IDs and how many days each has been running.
- An EventBridge (CloudWatch Events) rule triggers the function once per day.
- The Lambda execution role has the minimum required permissions: `ec2:DescribeInstances` and `sns:Publish`.

### Hints

- Use `ec2.describe_instances(Filters=[{'Name': 'instance-state-name', 'Values': ['running']}])` to get only running instances.
- Compare `LaunchTime` (a datetime object) with `datetime.now(timezone.utc)` to calculate the age in days.
