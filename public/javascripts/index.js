function ImageRater() {
  this.elementId = {
    "layoutSelector": "#selectedLayout",
    "dataview": "#dataview"
  };

  // Cache loaded layouts
  this.layouts = {};

};

ImageRater.prototype.init = function() {
  this.bindAll();
  console.log("Initiated image rater");
};

ImageRater.prototype.resetPage = function() {
  // Clear display view
  $(this.elementId.dataview).html("");
};

ImageRater.prototype.loadLayout = function(layout) {
  if(layout === "none") {
    // Reset page. User doesn't want anything
    this.resetPage();
    return;
  }
  var url = "/javascripts/" + layout + ".js";
  console.debug("Trying to load layout:" + url);
  var self = this;
  $.getScript(url)
    .done(function(script, status) {
      self.onScriptLoad(layout);
    });
};

ImageRater.prototype.onScriptLoad = function(layout) {
  // RaterLayout takes in element id of display pane
  if(layout === "layout1") {
    this.rater = new RaterLayout1(this.elementId.dataview);
  } else if(layout === "layout2") {
    this.rater = new RaterLayout2(this.elementId.dataview);
  } else {
    console.error("Unknown layout. Can't handle");
    // show erro
    return;
  }
  this.resetPage();
  this.rater.init();
};

ImageRater.prototype.bindAll = function() {
  var self = this;
  $(this.elementId.layoutSelector).change(function() {
    self.loadLayout($(this).val());
  });
};

$(document).ready(function() {
  rater = new ImageRater();
  rater.init();
});
