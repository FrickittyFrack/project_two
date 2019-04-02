// Get references to page elements

var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/page",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/page",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/page/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.description)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .addClass("post-item")
        .append($a);

      // var $newPost = $("<div>").addClass("dropdown dropping-down");

      // var $insides = $("<a>")
      //   .addClass("btn btn-secondary dropdown-toggle dropdown-color-change")
      //   .attr("href", "#")
      //   .attr("role", "button")
      //   .attr("id", "dropdownMenuLink")
      //   .attr("data-toggle", "dropdown")
      //   .attr("aria-haspopup", "true")
      //   .attr("aria-expanded", "false");

      // var $otherInsides = $("<div>")
      //   .addClass("dropdown-menu")
      //   .attr("aria-labelledby", "dropdownMenuLink");

      // var $delete = $("<a>")
      //   .addClass("dropdown-item delete")
      //   .attr("href", "#")
      //   .text("Delete");

      // $otherInsides.append($delete);
      // $newPost.append($insides);
      // $newPost.append($otherInsides);

      // $li.append($newPost);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("x");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    description: $exampleDescription.val().trim()
  };

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
$(document).ready(refreshExamples());
