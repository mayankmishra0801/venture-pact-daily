$(function () {
    $("[data-toggle=tab]").click(function () {
      $(".tab_content").hide();
      $("[data-toggle=tab]").removeClass("active");
      $(this).addClass("active");
      var tabVlaue = $(this).attr("data-target");
      $(tabVlaue).show();
    });
  });
  