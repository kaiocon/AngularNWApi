
$(document).ready(function () {
  var options = {};
  options.url = "/api/employee";
  options.type = "GET";
  options.dataType = "json";
  options.success = function (data) {
    data.forEach(function (element) {
      $("#employeeid").append("<option>"
        + element.employeeID + "</option>");
    });
  };
  options.error = function () {
    $("#msg").html("Error while calling the Web API!");
  };
  $.ajax(options);



  $("#employeeid").change(function () {
    var options = {};
    options.url = "/api/employee/" +
      $("#employeeid").val();
    options.type = "GET";
    options.dataType = "json";
    options.success = function (data) {
      $("#firstname").val(data.firstName);
      $("#lastname").val(data.lastName);
      $("#city").val(data.city);
    };
    options.error = function () {
      $("#msg").html("Error while calling the Web API!");
    };
    $.ajax(options);
  });



  $("#insert").click(function () {
    var options = {};
    options.url = "/api/employee";
    options.type = "POST";

    var obj = {};
    obj.firstName = $("#firstname").val();
    obj.lastName = $("#lastname").val();
    obj.city = $("#city").val();

    options.data = JSON.stringify(obj);
    options.contentType = "application/json";
    options.dataType = "html";

    options.success = function (msg) {
      $("#msg").html(msg);
    };
    options.error = function () {
      $("#msg").html("Error while calling the Web API!");
    };
    $.ajax(options);
  });



  $("#update").click(function () {
    var options = {};
    options.url = "/api/employee/"
      + $("#employeeid").val();
    options.type = "PUT";

    var obj = {};
    obj.employeeID = $("#employeeid").val();
    obj.firstName = $("#firstname").val();
    obj.lastName = $("#lastname").val();
    obj.city = $("#city").val();

    options.data = JSON.stringify(obj);
    options.contentType = "application/json";
    options.dataType = "html";
    options.success = function (msg) {
      $("#msg").html(msg);
    };
    options.error = function () {
      $("#msg").html("Error while calling the Web API!");
    };
    $.ajax(options);
  });




  $("#delete").click(function () {
    var options = {};
    options.url = "/api/employee/"
      + $("#employeeid").val();
    options.type = "DELETE";
    options.dataType = "html";
    options.success = function (msg) {
      $("#msg").html(msg);
    };
    options.error = function () {
      $("#msg").html("Error while calling the Web API!");
    };
    $.ajax(options);
  });

});

