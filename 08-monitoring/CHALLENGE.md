# Phase 8 Challenges

These challenges test your skills from this phase. No step-by-step instructions -- use what you've learned.

---

## Challenge 1: RED Metrics Grafana Dashboard

Create a Grafana dashboard that visualizes the RED metrics (Request rate, Error rate, Duration/latency) for any HTTP application instrumented with Prometheus. Export the dashboard as a JSON file.

### Acceptance Criteria

- The dashboard contains at least 3 panels: request rate, error rate, and request latency.
- The request rate panel shows requests per second over time, broken down by endpoint or status code.
- The error rate panel shows the percentage of responses with 5xx status codes relative to total requests.
- The latency panel shows p50, p90, and p99 latency using histogram quantiles.
- All panels use Prometheus as the data source and use PromQL queries.
- The dashboard includes a time range selector and at least one template variable (e.g., namespace or job) to filter metrics.
- The dashboard JSON is exported and saved as a file that can be imported into any Grafana instance.

### Hints

- Use `rate(http_requests_total[5m])` for request rate and `histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))` for latency percentiles.
- In Grafana, use the "Share" or "Export" option on the dashboard to download the JSON model.

---

## Challenge 2: Prometheus Alerting with AlertManager

Set up Prometheus alerting rules that fire when the application error rate exceeds 5%, and configure AlertManager to send notifications to a Slack webhook.

### Acceptance Criteria

- A Prometheus alerting rule fires when the 5xx error rate exceeds 5% of total requests over a 5-minute window.
- A second alerting rule fires when any monitored target has been down for more than 2 minutes.
- The alert rules include appropriate `for` durations to avoid flapping (at least 1 minute).
- Alert annotations include a human-readable `summary` and `description` with template variables (instance, job, error percentage).
- AlertManager is configured with a `slack_configs` receiver that sends notifications to a Slack webhook URL.
- AlertManager routes all critical alerts to the Slack receiver.
- The configuration files are valid and can be verified with `promtool check rules` and `amtool check-config`.

### Hints

- The error rate expression follows this pattern: `sum(rate(http_requests_total{status=~"5.."}[5m])) / sum(rate(http_requests_total[5m])) > 0.05`.
- Store the Slack webhook URL in an AlertManager secret or environment variable rather than hardcoding it.
