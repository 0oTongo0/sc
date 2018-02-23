$(function() {
	$("#top").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 200);
		return false;
	})
	$("#sx").click(function() {
		window.location.reload()
	})
	$("#fenl").click(function(e) {
		$(".herder-top-nav").toggleClass("on");
		e.stopPropagation();
	})
	$(document).click(function() {
		$(".herder-top-nav").removeClass("on");
	});

})