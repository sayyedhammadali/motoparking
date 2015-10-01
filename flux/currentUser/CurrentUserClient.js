var $ = require("jquery");

var OpinionClient = {
  loadCurrentUser: function(success, failure) {
    $.ajax({
      type: "POST",
      // dataType: "json",
      contentType: "application/json",
      url: "/api/me/",
      data: {},
      success: success,
      error: failure
    });
  }
};

module.exports = OpinionClient;
