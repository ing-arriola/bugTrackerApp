const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ msg: "Hello from express" }));
// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Hello Express started on ${PORT} port`));
