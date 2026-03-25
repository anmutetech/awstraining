# Phase 6 Challenges

These challenges test your skills from this phase. No step-by-step instructions -- use what you've learned.

---

## Challenge 1: Prometheus Metrics Endpoint

Add a `/metrics` endpoint to the flask-api application that exposes Prometheus metrics, then deploy it to Kubernetes with a ServiceMonitor so Prometheus automatically scrapes the metrics.

### Acceptance Criteria

- The flask-api application exposes a `/metrics` endpoint that returns metrics in Prometheus exposition format.
- Metrics include at least: total request count (labeled by endpoint and HTTP method), request duration histogram, and active request gauge.
- The existing application endpoints continue to work as before.
- A Kubernetes Deployment manifest deploys the updated application with Prometheus scrape annotations (`prometheus.io/scrape: "true"`, `prometheus.io/port`).
- A ServiceMonitor custom resource is defined that targets the flask-api Service.
- After deploying, the metrics appear as targets in the Prometheus UI.

### Hints

- The `prometheus_flask_instrumentator` or `prometheus_client` Python library can auto-instrument Flask apps with minimal code changes.
- The ServiceMonitor `selector.matchLabels` must match the labels on your Service.

---

## Challenge 2: Blue-Green Deployment

Set up a blue-green deployment for the springboot-app using two separate Kubernetes Deployments and a single Service that you can switch between by updating the Service selector.

### Acceptance Criteria

- Two Deployments exist: `springboot-blue` and `springboot-green`, each running a different version (or configuration) of the springboot-app.
- Both Deployments are running simultaneously in the cluster.
- A single Service named `springboot-app` routes traffic to one deployment at a time, controlled by a label selector (e.g., `version: blue` or `version: green`).
- Switching traffic from blue to green is accomplished by updating the Service selector label (a single `kubectl patch` or `kubectl apply` command).
- Zero downtime during the switch: the new version is already running before traffic is redirected.
- You can verify which version is receiving traffic by checking the response or pod logs.

### Hints

- Give each Deployment a unique label such as `version: blue` and `version: green`, and set the Service selector to match one of them.
- Use `kubectl patch svc springboot-app -p '{"spec":{"selector":{"version":"green"}}}'` to switch traffic.
