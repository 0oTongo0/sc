$(function(){
	$(".del").on('click',function(){
		if(confirm("是否删除该商品!!!!")){
			$(this).parents("tr").remove();
		}else{
			return false;
		}
		
	})
})
