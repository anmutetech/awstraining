# Phase 1 Challenges

These challenges test your skills from this phase. No step-by-step instructions -- use what you've learned.

---

## Challenge 1: Port Scanner Script

Write a bash script called `port-check.sh` that accepts a port number as a command-line argument, checks whether that port is currently in use on the local machine, and prints the name and PID of the process using it. If the port is not in use, print an appropriate message.

### Acceptance Criteria

- The script accepts a port number as a positional parameter.
- If no argument is provided, the script prints a usage message and exits with a non-zero status.
- If the port is in use, the script prints the process name, PID, and protocol (TCP/UDP).
- If the port is free, the script prints a message confirming the port is available.
- The script exits with status 0 on success and non-zero on errors.

### Hints

- Look into `lsof -i` or `ss -tlnp` for finding processes on specific ports.
- Use conditionals to handle the case where no process is found.

---

## Challenge 2: S3 Backup Script

Write a bash script called `s3-backup.sh` that compresses a given directory into a `.tar.gz` archive with a timestamped filename and uploads it to a specified S3 bucket. The script should accept the directory path and S3 bucket name as arguments.

### Acceptance Criteria

- The script accepts two arguments: the directory to back up and the S3 bucket name.
- The archive filename includes a timestamp in the format `backup-YYYYMMDD-HHMMSS.tar.gz`.
- The script validates that the directory exists before attempting to compress it.
- The script uses the AWS CLI to upload the archive to the specified S3 bucket.
- After a successful upload, the script removes the local archive file and prints a confirmation message.
- The script exits with a non-zero status if any step fails.

### Hints

- Use `date +%Y%m%d-%H%M%S` to generate the timestamp portion of the filename.
- Use `tar -czf` to create a compressed archive and `aws s3 cp` to upload it.
