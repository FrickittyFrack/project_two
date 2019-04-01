var db = require("../models");

var path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/page.html"));
  });

  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/home.html"));
  });

  // Get all examples
  app.get("/api/page", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/page", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
      console.log("this is the new post!", dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/page/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
