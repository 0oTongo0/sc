$(function(){
				//加的效果
			$(".plus").click(function() {
				var n = $(this).siblings(".input").children(".num").val();
				var num = parseInt(n) + 1;
				if(num == 0) {
					return;
				}
				$(this).siblings(".input").children(".num").val(num);
				if($(this).parents("#list tr").find(".GoodsCheck").is(":checked")) {
					TotalPrice()
				} else {
					var num1 = parseInt($(this).parents("#list tr").find(".am-num-text").val()); //得到商品的数量 
					var price = parseFloat($(this).parents("#list tr").find(".GoodsPrice").text()); //得到商品的单价 
					var nide = num1 * price;
					$(this).parents("#list tr").find(".ShopTotal").text(nide.toFixed(2))
				}
			});
			//减的效果
			$(".minus").click(function() {
				var n = $(this).siblings(".input").children(".num").val();
				var num = parseInt(n) - 1;
				if(num == 0) {
					return
				}
				$(this).siblings(".input").children(".num").val(num);
				if($(this).parents("#list tr").find(".GoodsCheck").is(":checked")) {
					TotalPrice()
				} else {
					var num1 = parseInt($(this).parents("#list tr").find(".am-num-text").val()); //得到商品的数量 
					var price = parseFloat($(this).parents("#list tr").find(".GoodsPrice").text()); //得到商品的单价 
					var nide = num1 * price;
					$(this).parents("#list tr").find(".ShopTotal").text(nide.toFixed(2))
				}
			});
			//点击选中
			$("#list .GoodsCheck:checkbox").click(function() {
				if($(this).is(":checked")) {
					$(this).parents("tr").css("background", "#f3fbfe");
				} else {
					$(this).parents("tr").css("background", "#fff")
				}
				TotalPrice()
				allchk()
			});
			//勾选全选  
			$("#all").change(function() {
				if(this.checked) {
					$("table tr td input[type=checkbox]").prop("checked", true);
					TotalPrice()
				} else {
					$("table tr td input[type=checkbox]").prop("checked", false);
					$("#jianshu").text(0)
					$("#AllTotal").text(0)
				}
			//调用背景函数 下面
				Bg();				
			});
			//是否全选
			var chk = 0; //定义选中的个数chk = 0; //定义选中的个数
			function allchk() {
				chk = 0; //定义选中的个数
				var chknum = $("#list :checkbox").size(); //选项总个数的数量 
				$("#list :checkbox").each(function() {
					if($(this).prop("checked") == true) {
						chk++;
					}
				});
				if(chknum == chk) { //全选
					$("#all").prop("checked", true);
				} else { //不全选
					$("#all").prop("checked", false);
				}
			}
//			点击结算判断是否选中
			$("#bg_link").click(function(){
				if(chk<=0){
					$(".number").text("请选择商品").show().delay(2000).hide(50)
					return false;
				}else{
					return true;
				}
			})
			function TotalPrice() {
				var shul=0;
				var allprice = 0; //总价 
				$("#list tr").each(function() { //循环每个店铺 
					var oprice = 0; //店铺总价 
					$(this).find(".GoodsCheck").each(function() { //循环店铺里面的商品 
						if($(this).is(":checked")) { //如果该商品被选中 
							var num = parseInt($(this).parents("#list tr").find(".am-num-text").val()); //得到商品的数量 
							var price = parseFloat($(this).parents("#list tr").find(".GoodsPrice").text()); //得到商品的单价 
							shul += num;   //总数量个数
							var zs = parseInt(num)+parseInt(shul)
							var total = price * num; //计算单个商品的总价 
							oprice += total; //计算该店铺的总价 
							 $("#jianshu").text(shul)
						}
						$(this).closest("#list tr").find(".ShopTotal").text(oprice.toFixed(2)); //显示被选中商品的店铺总价 						
					});
					var oneprice = parseFloat($(this).find(".ShopTotal").text()); //得到每个店铺的总价 
					allprice += oneprice; //计算所有店铺的总价 
				});
				$("#AllTotal").text(allprice.toFixed(2)); //输出全部总价 				
			}
			//	背景颜色切换函数
			function Bg() {
				$("#list td input:checkbox").each(function() {
					if($(this).prop("checked") == true) {
						$(this).parents("tr").css({
							"background-color": "#f3fbfe"
						});
					} else {
						$(this).parents("tr").css({
							"background-color": "#fff"
						});
					}
				});
			}
			//删除
			$(".delete").each(function(){
				$(this).click(function(){
					$(".pop").show();
					var the = $(this).parents('tr:first');
					var the2 = $(this).parent().parent();
					var num = parseInt($(this).parents("#list tr").find(".am-num-text").val()); //得到商品的数量 
					var price = parseFloat($(this).parents("#list tr").find(".GoodsPrice").text()); //得到商品的单价 
					var total = price * num; //计算单个商品的总价 
					var zs =  parseInt($("#jianshu").text());  //当前总个数
					var qs =  parseInt($("#AllTotal").text()); //当前总钱数
					var chaji;   //定义个数差级
					var chaji2;   //定义钱数差级	
//					if(confirm("您确定该商品移除购物车吗？")){
//						$(this).parents('tr:first').remove();	
//					}else{
//						return false;
//					}
//					if($(this).parent().parent().find("td:eq(0) input").is(":checked")){
//							chaji = zs-num;
//							chaji2 = qs-total;
//						$("#jianshu").text(chaji)
//						$("#AllTotal").text(chaji2)
//					}
//					$(".pop-fot-cik-left").on('click',function(){
//						the.remove();
//						$(".pop").hide()
//					})	
					$(".pop-fot-cik-right").on('click',function(){
						$(".pop").hide()
						the = $(this).parents('tr:first');
						the2 = $(this).parent().parent();
					})	
					$(".pop-fot-cik-left").on('click',function(){
						the.remove();
						$(".pop").hide()
						if(the2.find("td:eq(0) input").is(":checked")){
								chaji = zs-num;
								chaji2 = qs-total;
							$("#jianshu").text(chaji)
							$("#AllTotal").text(chaji2)
						}else{
							return false;
						}
					})				
				})
			})
			$("#del2").on('click',function(){
				$(".pop").hide()
			})

			//全部删除
			$("#del").click(function() {
				if(confirm("是否全部删除!!!!")){
						$("#list").children('tr').remove();							
						$("#jianshu").text(0)
						$("#AllTotal").text(0)
					}else{
						return false;
					}
			})
			//输入时金额的变化
			$(".num").each(function() {
				$(this).bind('input propertychange', function() {
//					alert("wd")
					var count = parseInt($(this).val()) 
					var num = parseInt($(this).parents("#list tr").find(".am-num-text").val()); //得到商品的数量 
					var price = parseFloat($(this).parents("#list tr").find(".GoodsPrice").text()); //得到商品的单价 
					var total = price * num; //计算单个商品的总价 
					$(this).parents("#list tr").find(".ShopTotal").text(total.toFixed(2))
					TotalPrice()
					if( isNaN(count)){
						$(this).val("1")
			            $(".number").text("请输入纯数字").show().delay(2000).hide(50)
			            return false;
			       }else{
			       		return true;
			       }
				})
			})
})
