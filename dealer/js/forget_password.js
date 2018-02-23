$(function(){
		$('#name').focus(function(){
		if($(this).val().length==0){
			$("#name-text").text("支持中文，字母，数字，'-'，'_'的多种组合");
			$("#name-text").css("color","#999");
			}else{
				$("#name-text").text("");	
			}
		})
		
		$('#new_password').focus(function(){
		if($(this).val().length==0){
		    $("#new_password-text").text("字母、数字和符号两种以上的组合，6-20个字符");
		    $("#new_password-text").css("color","#999");
			}
		})
		$('#phone').focus(function(){
		if($(this).val().length==0){
			$("#phone-text").text("验证完后，你可以使用该手机登陆和找回密码");
			$("#phone-text").css("color","#999");
			}
		})
//		手机验证码查询
		$('#phone').blur(function(){
			var myreg = /^(((13[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
			if($(this).val().length==0){
				$("#phone-text").text("");
				$("#phone-text").css("color",'#999');
			}else if(!myreg.test($("#phone").val())){
				$("#phone-text").text("手机号格式不正确");
				$("#phone-text").css("color",'red');
			}else{
				$("#phone-text").text("");
			}		
		})
//		用户名
		$('#name').blur(function(){
			if($(this).val().length==0){
				$("#name-text").text("");
				$("#name-text").css("color",'#999');
			}else if($(this).val().length>0 && $(this).val().length<4){
				$("#name-text").text("长度只能在4-20个字符之间");
				$("#name-text").css("color",'red');
			}else if($(this).val().length>=4&& !isNaN($(this).val())){
				$("#name-text").text("用户名不能为纯数字");
				$("#name-text").css("color",'red');
			}else{
				$(this).parent().next("div").text("");
			}		
		})
//		密码
	$('#new_password').blur(function(){
		if($(this).val().length==0){
			$("#new_password-text").text("");
			$("#new_password-text").css("color",'#999');
		}else if($(this).val().length>0 && $(this).val().length<6){
			$("#new_password-text").text("长度只能在6-20个字符之间");
			$("#new_password-text").css("color",'red');
		}else{
			$("#new_password-text").text("");
		}		
	})
})