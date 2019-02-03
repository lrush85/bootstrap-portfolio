
$("button").hover(
    function() {
        $("i.arrow").css({"transform": "rotate(90deg)"});
    },

    function() {
        $("i.arrow").css({"transform": "rotate(360deg)"});
    });

$(function(){
    $(".intro").typed({
        strings: [
            "<p>Hello, I'm <span>Lance Rush</span>.</p>",
        ],
        showCursor: false
    });

    $(".job-title").typed({
        strings: [
            "I'm a full stack web developer."
        ],
        startDelay: 1300,
        showCursor: false
    });
});