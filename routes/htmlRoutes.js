var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
<<<<<<< HEAD
<<<<<<< HEAD
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/home.html"));
  });

  app.get("/page", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/page.html"));
=======
=======
>>>>>>> d4064fc3c0d915fe8bedee82c25cbff96bba7cd6
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("page", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
>>>>>>> d4064fc3c0d915fe8bedee82c25cbff96bba7cd6
  });

  // Load example page and pass in an example by id
  app.get("/page/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
