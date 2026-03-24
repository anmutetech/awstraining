const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/calculate", (req, res) => {
    const { a, b, operation } = req.body;

    let result;

    switch (operation) {
        case "add":
            result = Number(a) + Number(b);
            break;
        case "multiply":
            result = Number(a) * Number(b);
            break;
        default:
            result = "Invalid Operation";
    }

    res.json({ result });
});

app.get("/health", (req, res) => {
    res.json({ status: "healthy" });
});

app.listen(port, () => {
    console.log(`MathCorp Calculator running on port ${port}`);
});