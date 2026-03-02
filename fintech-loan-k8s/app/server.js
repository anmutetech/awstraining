const express = require("express");
const os = require("os");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.post("/calculate", (req, res) => {
  const { amount, rate, years } = req.body;

  const monthlyRate = rate / 100 / 12;
  const months = years * 12;

  const monthlyPayment =
    (amount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -months));

  // Simulate heavy computation
  setTimeout(() => {
    res.json({
      monthlyPayment: monthlyPayment.toFixed(2),
      pod: os.hostname()
    });
  }, 200);
});

app.listen(port, () => {
  console.log(`Loan App running on port ${port}`);
});