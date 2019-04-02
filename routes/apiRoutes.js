var db = require("../models");
var request = require("superagent");

var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/page.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/home.html"));
  });

  // Get all examples
  app.get("/api/page", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/page", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
      console.log("this is the new post!", dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/page/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  app.get("/api/streams", function(req, response) {
    request
      .get("https://api.twitch.tv/helix/streams?first=10")
      .set("Client-ID", "7s8focd6za4eodq2al6ugvgrrqhjur")
      .then(function(res) {
        var info = res.body.data;
        var results = {
          thumbnail: info.map(function(d) {
            return d.thumbnail_url
              .replace("{width}", "1280")
              .replace("{height}", "720");
          }),
          streamer: info.map(function(d) {
            return d.user_name;
          }),
          title: info.map(function(d) {
            return d.title;
          }),
          live: info.map(function(d) {
            return d.type;
          })
        };

        response.json(results);
      });
  });
};
