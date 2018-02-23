$(function(){
				document.getElementsByTagName("html")[0].style.fontSize=innerWidth/16+"px";
				 	//点击眼睛
				$("#butt_b").click(function(){
					var pas = $(".pass").prop("type");
					if(pas =="password"){
						$(".pass").prop("type","text");
						 $("#butt_b").addClass("but");
					}else{
						$(".pass").prop("type","password")
						$("#butt_b").removeClass("but");
					}
				})	
				$("#sub").click(function(){
					var val1 = $("#nane").val();
					var val2 = $(".pass").val();
					var val3 = $(".yz").val();
					if(val1 ==""){
						$(".pop").text("用户名不能为空")
						$(".pop").stop().show().delay(1000).hide(300);
						return false;
					}else if(val2 ==""){
						$(".pop").text("密码不能为空")
						$(".pop").stop().show().delay(1000).hide(300);	
						return false;
					}else{
						return true;
					}
				})
})
