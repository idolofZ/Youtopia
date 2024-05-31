$(function () {
    $(".js-modalWindow").click(function() {
        $("body").append("<div class=overlay></div>");
        $(".overlay").fadeIn(300);
        var target = $(this).attr("href");

        var textId = $(this).data("text-id");
        
        var largeImage = "<img class='modalContent' src='" + target + "'>";
        $(".overlay").append(largeImage);

        var textContent = $("#" + textId).html();
        $(".overlay").append("<div class='modalText'>" + textContent + "</div>");

        $("body").addClass("is-active");

        $('html, body').css('overflow', 'hidden');
        return false;
    });
    $("body").on("click",".overlay",function() {
        $(this).fadeOut(300,function() {
            $(this).remove();
            $('html, body').removeAttr('style');
　　　　　　　//body要素に追加したclass属性を削除
　　　　　　　$("body").removeClass("is-active");
        });
    });
});



