# Phase 4 Challenges

These challenges test your skills from this phase. No step-by-step instructions -- use what you've learned.

---

## Challenge 1: Database Module

Add a new "database" module to the `terraform-modules` project that provisions an RDS PostgreSQL instance in a private subnet. The module should be reusable and accept configuration through input variables.

### Acceptance Criteria

- A new `modules/database/` directory contains `main.tf`, `variables.tf`, and `outputs.tf`.
- The module creates an RDS PostgreSQL instance (engine version 14 or later, `db.t3.micro` instance class).
- The database is placed in private subnets (accepts subnet IDs as a variable) with a DB subnet group.
- A dedicated security group allows inbound PostgreSQL traffic (port 5432) only from a specified CIDR block or security group.
- Input variables include: `db_name`, `db_username`, `db_password` (marked sensitive), `subnet_ids`, `vpc_id`, and `allowed_cidr_blocks`.
- Outputs include: `db_endpoint`, `db_port`, and `db_instance_id`.
- The root module calls the database module and passes appropriate values.
- `terraform plan` runs without errors.

### Hints

- Use `aws_db_subnet_group` to place the RDS instance in private subnets.
- Set `skip_final_snapshot = true` for lab environments to allow clean `terraform destroy`.

---

## Challenge 2: Auto-Scaling with CloudWatch Alarms

Modify the three-tier architecture (in `terraform-three-tier/`) to add CPU-based auto-scaling for the frontend tier using CloudWatch alarms. The system should automatically scale out when CPU usage is high and scale in when it drops.

### Acceptance Criteria

- A CloudWatch alarm triggers a scale-out action when average CPU utilization exceeds 70% for 2 consecutive 60-second periods.
- A second CloudWatch alarm triggers a scale-in action when average CPU utilization drops below 30% for 2 consecutive 60-second periods.
- The Auto Scaling Group scales between a minimum of 2 and a maximum of 6 instances.
- The scaling policies use `ChangeInCapacity` with an adjustment of +1 for scale-out and -1 for scale-in.
- A cooldown period of 300 seconds is configured to prevent rapid scaling oscillation.
- `terraform plan` shows the new resources without errors.

### Hints

- Use `aws_cloudwatch_metric_alarm` with `metric_name = "CPUUtilization"` and `namespace = "AWS/EC2"`.
- Link the alarm to the scaling policy using the `alarm_actions` attribute and the scaling policy ARN.
