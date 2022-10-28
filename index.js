const express = require("express");
const app = express();

app.use(express.json({ extended: true }));

app.listen(process.env.PORT || 3000, () =>
     console.log("Server up and running")
);
