require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

var RainbowSixApi = require('rainbowsix-api-node');
var R6 = new RainbowSixApi();
 
var username = "";
var platform = "uplay";
 
//Get stats on the user on that platform
R6.stats(username, platform).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error)
});
 
//For getting details about a user on R6 depending on platform
R6.profile(username, platform).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
