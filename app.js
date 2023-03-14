const express = require("express");
require("dotenv").config();
require("colors");
require("ejs");

const app = express();
const port = process.env.PORT || 4000;

app.set("view engine", "ejs");

// middleware
app.use(express.static("public"));
app.use("/", require("./backend/routes/mainRoutes"));

app.listen(port, () => console.log(`Server has started at port ${port}`.cyan.underline));
