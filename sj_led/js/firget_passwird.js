
			 $(function(){
				document.getElementsByTagName("html")[0].style.fontSize=innerWidth/16+"px";			 	
			 	//点击眼睛
				$(".but_b").click(function(){
					var pas = $(".pass").prop("type");
					if(pas =="password"){
						$(".pass").prop("type","text");
						 $("#butt_b").addClass("but");
					}else{
						$(".pass").prop("type","password")
						$("#butt_b").removeClass("but");
					}
				})
				//	验证码
					var wait=60;  
					function time(o) {  
					        if (wait == 0) {  
					            o.removeAttribute("disabled");            
					            o.value="获取验证码";  
					            wait = 60;  
					        } else {  
					            o.setAttribute("disabled", true);  
					            o.value="重新发送(" + wait + ")";  
					            wait--;  
					            setTimeout(function() {  
					                time(o)  
					            },  
					            1000)  
					        }  
					    }  
					$("#btn").click(function(){
						time(this)
					})	
//				验证码end
//					表单验证开始↓
					$("#sub").click(function(){
						var val1 = $("#name").val();
						var val2 = $(".pass").val();
						var val3 = $(".yz").val();
						var val4 = $(".phone").val();
						var val5 = $("#pass2").val();
						var myreg = /^(((13[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
						if(val1 ==""){
							$(".pop").text("用户名不能为空")
							$(".pop").stop().show().delay(1000).hide(300);
							return false;
						}else if(val2 ==""){
							$(".pop").text("密码不能为空")
							$(".pop").stop().show().delay(1000).hide(300);	
							return false;
						}else if(val5 ==""){
							$(".pop").text("再次密码不能为空")
							$(".pop").stop().show().delay(1000).hide(300);	
							return false;
						}else if(val4 ==""){
							$(".pop").text("手机号不能为空")
							$(".pop").stop().show().delay(1000).hide(300);	
							return false;	
						}else if(val3 ==""){
							$(".pop").text("验证码不能为空")
							$(".pop").stop().show().delay(1000).hide(300);	
							return false;	
						}else if(!myreg.test(val4)){
							$(".pop").text("手机号格式不对")
							$(".pop").stop().show().delay(1000).hide(300);	
							return false;	
						}else if(val5 != val2){
							$(".pop").text("2次密码不正确")
							$(".pop").stop().show().delay(1000).hide(300);	
							return false;	
						}else{
							return true;
						}
					})					
		     })