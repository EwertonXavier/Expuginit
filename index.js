//import modules
const express = require("express");
const path = require("path");

//create express app
const app = express();
const port = process.env.port || 8888;

//set up path for files and folders
//set express views to use <app_directory>/views
app.set("views", path.join(__dirname, "views"));
//set PUG as the engine to build HTML pages
app.set("view engine", "pug");

//set up path for static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

//****Routes *********//
//Route for home.
app.get("/", (req, res) => {
  console.log("Home Requested");
  res.render("index");
});

