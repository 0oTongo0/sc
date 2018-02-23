$(function(){
//	背景切换
		$(".centre-main-radio>.bg").click(function() {
				$(this).addClass("on").siblings().removeClass("on")
		})
		$(".text").blur(function(){
				if($("#name").val() == ""){
					$("#name-text").text("请输入会员名");
					$("#name-text").css("color","red");
				}else{
					$("#name-text").text("")
				}
			})
			$("#name").blur(function(){
				if($("#name").val() != ""){
					$("#name-s").text("")
				}
			})		
})
