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