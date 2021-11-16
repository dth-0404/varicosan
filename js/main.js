$(".text-ques").eq(0).slideDown("slow"), $(".text-ques").eq(0).attr("data-status", "block"), $(".list-ques li").each(function (t) {
    $(this).click(function () {
        var t = $(this).attr("data-ques");
        $(".text-ques").each(function () {
            if ($(this).attr("id") == t) {
                var a = $(this).attr("data-status");
                "block" == a ? ($(this).slideUp("slow"), $(this).attr("data-status", "none")) : "none" == a && ($(".text-ques").slideUp("slow"), $(this).slideDown("slow"), $(".text-ques").each(function () {
                    $(this).attr("data-status", "none")
                }), $(this).attr("data-status", "block"))
            }
        })
    })
});
var btn = $("#button_scroll_top");
function validate(evt) {
    var theEvent = evt || window.event; if (theEvent.type === 'paste') { key = event.clipboardData.getData('text/plain'); } else { var key = theEvent.keyCode || theEvent.which; key = String.fromCharCode(key); }
    var regex = /[0-9()]|\+/; if (!regex.test(key)) { theEvent.returnValue = false; if (theEvent.preventDefault) theEvent.preventDefault(); }
};
$(window).scroll(function () {
  $(window).scrollTop() > 500 ? btn.addClass("show") : btn.removeClass("show")
}), btn.on("click", function (t) {
  t.preventDefault(), $("html, body").animate({
    scrollTop: 0
  }, "300")
});
$(window).scroll(function () { var e = $("footer").offset().top, o = ($("footer").outerHeight(), $(".box-banner-sidebar").offset().top), r = $(".box-banner-sidebar").outerHeight(), a = $(window).height(), s = $(this).scrollTop(); console.log("wS: " + s), console.log(o + r - a + 90), s > o + r - a + 90 ? $(".banner-sidebar").addClass("active-sidebar") : $(".banner-sidebar").removeClass("active-sidebar"), s > e - a && $(".banner-sidebar").removeClass("active-sidebar") });
$(".btn-blog").click(function () {
	$(".btn-blog").removeClass("active-btn"), $(this).addClass("active-btn");
	var t = $(this).attr("data-sidebar");
	$(".single-sidebar-widget").hide(), $("html").find(".single-sidebar-widget#" + t).show()
})
function initAccordion(accordionElem) {

    function handlePanelClick(event) {
       showPanel(event.currentTarget);
    }

    function showPanel(panel) {
       var expandedPanel = accordionElem.querySelector(".active");
       if (expandedPanel) {
          expandedPanel.classList.remove("active");
       }
       panel.classList.add("active");
    }
    var allPanelElems = accordionElem.querySelectorAll(".panel");
    for (var i = 0, len = allPanelElems.length; i < len; i++) {
       allPanelElems[i].addEventListener("click", handlePanelClick);
    }
    showPanel(allPanelElems[-1])
 }
 initAccordion(document.getElementById("accordion"));

 var accordionHeader = document.g