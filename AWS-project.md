OPTION 1
Task: Building a Three-Tier Architecture with EC2, RDS, ALB, ACM, and Route 53
Guide: https://www.youtube.com/watch?v=lh5f69t7L9A 

Overview: In this project, you will design, deploy, and secure a robust three-tier web architecture on AWS using core services including EC2, RDS, 
Application Load Balancer (ALB), ACM (AWS Certificate Manager), and Route 53. You’ll begin by creating the presentation tier, 
which handles incoming user traffic via an ALB in public subnets. Next, you’ll build the application tier, 
using EC2 instances in private subnets to handle business logic and backend communication. 

Finally, you’ll establish the data tier, deploying a managed RDS database in private subnet(s) for persistent storage and high availability.

You will also configure secure traffic routing using ACM to issue SSL/TLS certificates for HTTPS, 
and map a custom domain in Route 53 so users can access the application via a professional, 
branded web address rather than the raw ALB DNS. The architecture will emphasize network segmentation, 
with separate subnet layers (public, private), security groups, and NAT/internet gateways to ensure each tier is isolated and protected.

Throughout the project, you’ll learn how the three layers interact: traffic flows from the user to the ALB to the web tier, 
then to the app tier, and finally to the data tier. 

You’ll design Auto Scaling groups for the web and application tiers to support high availability, 
distribute load across availability zones, and ensure the system is fault-tolerant. 

You will configure Route 53 hosted zones, issue ACM certificates, attach them to the ALB, 
and verify secure HTTPS access across your custom domain. 

By the end of this project, you will have deployed a production-style, scalable, secure, three-tier application architecture on AWS ready for real-world use.



OPTION 2
Task: Build an Automated ETL Pipeline on AWS (S3, Lambda, Glue, EventBridge, SNS)
Guide:  https://www.youtube.com/watch?v=3NgSj7dlt1g 

Overview:
In this project, you will build a serverless, event-driven ETL (Extract, Transform, Load) pipeline on AWS that automates data ingestion, processing, 
and notification workflows. 

The pipeline uses Amazon S3 as the data dump location, AWS Lambda to trigger the process when new files arrive, 
AWS Glue for transformation and cataloging, Amazon EventBridge to orchestrate events and state changes, 
and Amazon SNS to deliver notifications once the pipeline completes or fails. 

You will configure S3 buckets to receive data files, set up event notifications to invoke Lambda functions, 
and create Glue jobs to transform and load the data into a target store (e.g., S3 or a data warehouse). 

EventBridge would be used to schedule or chain pipeline steps and react to job statuses, 
while SNS would send alerts to email or messaging channels, ensuring the pipeline is observable and reliable. 

By the end of this project, you’ll have an ETL workflow that responds automatically to data arrivals, processes them without manual intervention, 
and alerts you of the outcome, all using fully managed AWS services, making this experience ideal for modern cloud-native data engineering roles.


