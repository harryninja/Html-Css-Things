$(".search-icon").click(function() {
    $(this).toggleClass("fa-times");
    $(".search-screen").toggleClass("active");
});

$(".search-txt").keyup(function() {
    if ($(this).val() != "") {
        $(".search-btn").css("opacity", 1);
        $(".search-btn").css("transform", "rotate(0deg)");
    } else {
        $(".search-btn").css("opacity", 0);
        $(".search-btn").css("transform", "rotate(45deg)");
    }
});