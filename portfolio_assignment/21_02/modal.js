$(function () {
    $("#openModal").click(function () {
      $(".modal").addClass("show");
    });
    $(".btn--close").click(function () {
      $(".modal").removeClass("show");
    });
  });
  