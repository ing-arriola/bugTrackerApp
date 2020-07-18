const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ msg: "Hello from express" }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Hello Express started on ${PORT} port`));
