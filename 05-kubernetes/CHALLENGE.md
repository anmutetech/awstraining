# Phase 5 Challenges

These challenges test your skills from this phase. No step-by-step instructions -- use what you've learned.

---

## Challenge 1: PostgreSQL StatefulSet

Deploy a PostgreSQL database as a StatefulSet on Kubernetes that persists data across pod restarts. The deployment should be production-aware with proper storage, credentials management, and health checks.

### Acceptance Criteria

- A StatefulSet runs a single PostgreSQL replica using the official `postgres:15` image.
- A `volumeClaimTemplate` provisions a PersistentVolumeClaim for the database data directory (`/var/lib/postgresql/data`).
- Database credentials (username and password) are stored in a Kubernetes Secret and injected as environment variables.
- A liveness probe and readiness probe are configured (using `pg_isready`).
- Data survives pod deletion: insert a row, delete the pod, wait for the replacement pod, and verify the row still exists.
- A headless Service (ClusterIP: None) is created for stable network identity.

### Hints

- Set the `PGDATA` environment variable to a subdirectory such as `/var/lib/postgresql/data/pgdata` to avoid permission issues with the volume mount.
- Use `exec` probes with the command `pg_isready -U <username>` for both liveness and readiness checks.

---

## Challenge 2: Helm Chart from Scratch

Create a Helm chart from scratch for the calculator app (from `../06-applications/calculator-app/`). The chart should be configurable and follow Helm best practices.

### Acceptance Criteria

- The chart directory structure includes `Chart.yaml`, `values.yaml`, and a `templates/` directory with Deployment, Service, and optionally Ingress templates.
- `values.yaml` includes configurable fields for: `replicaCount`, `image.repository`, `image.tag`, `resources.limits`, `resources.requests`, and `service.type`.
- Resource limits and requests are set in the Deployment template using values from `values.yaml`.
- Liveness and readiness probes are configured in the Deployment template.
- `helm template` renders valid Kubernetes manifests without errors.
- `helm install` deploys the calculator app successfully to a running cluster.
- Overriding values at install time works (e.g., `helm install --set replicaCount=3` creates 3 replicas).

### Hints

- Run `helm create <chart-name>` to scaffold a starting point, then customize the generated templates.
- Use `{{ .Values.fieldName }}` syntax in templates to reference values from `values.yaml`.
