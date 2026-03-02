const express = require("express");
const os = require("os");
const client = require("prom-client");

const app = express();
const port = 3000;

// --------------------
// Prometheus Metrics
// --------------------
const register = new client.Registry();
client.collectDefaultMetrics({ register });

const httpRequests = new client.Counter({
  name: "http_requests_total",
  help: "Total HTTP Requests",
  labelNames: ["method", "route", "status"]
});

register.registerMetric(httpRequests);

// --------------------
// Middleware
// --------------------
app.use(express.json());
app.use(express.static("public"));

// --------------------
// Health Check
// --------------------
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// --------------------
// Metrics Endpoint
// --------------------
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

// --------------------
// Loan Calculation
// --------------------
app.post("/calculate", (req, res) => {
  const amount = parseFloat(req.body.amount);
  const rate = parseFloat(req.body.rate);
  const years = parseFloat(req.body.years);

  if (!amount || !rate || !years) {
    httpRequests.inc({ method: "POST", route: "/calculate", status: "400" });
    return res.status(400).json({ error: "Invalid input" });
  }

  const monthlyRate = rate / 100 / 12;
  const months = years * 12;

  const monthlyPayment =
    (amount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -months));

  // Simulate heavy computation
  setTimeout(() => {
    httpRequests.inc({ method: "POST", route: "/calculate", status: "200" });

    res.json({
      monthlyPayment: monthlyPayment.toFixed(2),
      servedBy: os.hostname()
    });
  }, 200);
});

// --------------------
// Start Server
// --------------------
app.listen(port, () => {
  console.log(`Loan App running on port ${port}`);
});