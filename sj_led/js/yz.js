$(function(){
				//	验证码
			$(function(){
		var wait=60;  
		function time(o) {  
		        if (wait == 0) {  
		            o.removeAttribute("disabled");            
		            o.value="免费获取验证码";  
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
						
			})
})
