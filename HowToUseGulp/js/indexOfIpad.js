$(function () {
    $(".mainPageTitleColor").click(function () {
        console.log($(this).index());
        $(".mainPageTitleColor").removeClass("activeButton");
        $(this).addClass("activeButton");
        //นุมช
        for (var i = 0; i < 3; i++) {
            $(".chartList").index = i;
        }
        $(".chartList").addClass("hide");
        $(".chartList").eq($(this).index()).removeClass("hide");
    })
})