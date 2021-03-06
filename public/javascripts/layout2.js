function RaterLayout2(displayViewId) {
  this.name = "RaterLayout2";
  this.elementId = {
    "displayView": displayViewId
  }
};

RaterLayout2.prototype.init = function(){
  this.createViewGroups();
  this.loadControl();
};

RaterLayout2.prototype.loadControl = function() {
  console.log("Loaded control for:" + this.name);
  var data = {
    "ratings" : {
      "10": "Too Big", 
      "20": "Too Costly",
      "30": "Bad color"
    },
    "type" : "checkbox"
  }
  this.renderControl(data);
};

RaterLayout2.prototype.loadData = function() {
  console.log("Loading data for:" + this.name);
  var data = {
    "title" : "Blue Shoe",
    "imageSrc":  "http://webmaster-deals.com/blog/tutorials/5/blue-sport-shoes-26.jpg"
  };
  this.renderData(data);
};

// Create data and control view groups
RaterLayout2.prototype.createViewGroups = function() {
    // "class": "col-sm-9 col-md-9",
  var dataView = $('<div>').attr({
    "class": "col-sm-7",
    "id": "dataView"
  });
  var controlView = $('<div>').attr({
    "class": "col-sm-5",
    "id": "controlView"
  });
  var mainRow = $('<div>').attr("class", "row")
                .append($(dataView))
                .append($(controlView));
  $(this.elementId.displayView)
    .append($(mainRow));
  this.elementId.dataView = "#dataView";
  this.elementId.controlView = "#controlView";
};

RaterLayout2.prototype.renderControl = function(data) {
  /*
   * data = {"ratings" : {"10": "Like", "20": "dislike"}
   *         "type" : "radio"
   *         }
   */
  var row = this.makeControlRow(data);
  var dataLoad = $('<button>').attr({
    "class": "btn btn-primary"
  }).text("Load data");

  var self = this;
  $(dataLoad).click(function() {
    self.loadData();
  });
  $(this.elementId.controlView).html($(row)).append($(dataLoad));
};

RaterLayout2.prototype.renderData = function(data) {
  var view = this.makeDataView(data);
  $(this.elementId.dataView).html($(view));
};

RaterLayout2.prototype.makeControlRow = function(data) {
  var btnGroup = $('<div>').attr({
    "class": "btn-group",
    "data-toggle": "buttons-checkbox"
  });
  var groupName = "controlButton1";
  for(var key in data.ratings) {
    if(data.ratings.hasOwnProperty(key)) {
      var inbtn = $('<input>').attr({
        "type": data.type,
        "name": groupName,
        "data-toggle": "button",
        "id": "button-" + key
      });
      var label = $('<label>').attr({
        "class": "btn btn-primary",
        "for": "button-" + key
      }).text(data.ratings[key])
      .append($(inbtn));
      $(btnGroup).append($(label));
    }
  }
  var form = $('<form>').append($(btnGroup));

  // Make submit button
  var submitBtn = $('<div>').attr("class", "btn btn-default")
                      .append($('<span>').attr("id", "submit-button").text("Submit Rating"));


  var col = $('<div>').attr("class", "col-sm-9")
                      .append($(form))
                      .append($(submitBtn));

  var row = $('<div>').attr("class", "row").append($(col));

  return row;
};

RaterLayout2.prototype.makeDataView = function(data) {
  var view = $('<div>')
            .attr("class", "jumbotron")
            .append($('<h1>').attr("class", "content-title")
                    .text(data.title))
            .append($('<img>').attr("src", data.imageSrc));
  return view;
};
