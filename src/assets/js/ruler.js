/**
 * Created by yqiu on 16-7-23.
 */
var wRuler = $(".ruler").width();
var scale = "<span>0</span>";
var $ruler = $(".ruler");
var $rulerV = $(".rulerV");


function ruler(w) {
    wRuler = w;
    $ruler.children("span").remove();
    scale = "";
    for (var i = 0; i < wRuler; i += 50) {
        scale += "<span style='left:" + i + "px;'>" + i + "</span>"
    }
    $ruler.append(scale);
}

ruler(wRuler);

$ruler.click(function (e) {
    $rulerV.css({"left": e.clientX});
});

$rulerV.click(function () {
    $(this).css({"left": "-1px"});
});

$(window).resize(function () {
    setTimeout(function () {
        ruler($(this).width());
    }, 500);
});