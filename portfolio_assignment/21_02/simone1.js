var flag = 0;
$(document).ready(function () {
    $('#burger').click(function () {
        console.log("click")
        $('.navbar').toggleClass('show');
    })

    $('#burger').click(function () {
        $('.la-bars').toggleClass('la-times');
    })
})


$(function () {
    $(".setting").on("click", function () {
      $(this).parent().toggleClass("show");
    });
    $(".side__list__item").on("click", function () {
      $(this).toggleClass("active");
      var value = $(this).attr("data-text");
      $("body").toggleClass(value);
    });
    $(".reset").on("click", function () {
      $(".side__list__item").removeClass("active");
    });
    $("input").on("change", function () {
      $("body").css("--pcolor", $(this).val());
    });
  });
  