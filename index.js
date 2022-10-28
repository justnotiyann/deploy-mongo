const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json({ extended: true }));

app.listen(process.env.PORT || 3000, () =>
     console.log("Server up and running")
);
