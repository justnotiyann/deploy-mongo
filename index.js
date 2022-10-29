const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const routerSignUp = require("./dist/routes/index");
const routerAdmin = require("./dist/routes/login");
const routerProduct = require("./dist/routes/ProductRoutes");
app.use("/", routerSignUp);
app.use("/admin", routerAdmin);
app.use("/product", routerProduct);

app.listen(process.env.PORT || 3000, () =>
     console.log("Server up and running")
);
