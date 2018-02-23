	//放大镜部分
	$.fn.magnifying = function(){
		var that = $(this),
		$imgCon = that.find(".magnifier-ImgEnlarge"),//正常图片的容器
		$Img = $imgCon.find("img"),//正常图片，还有放大图片他们的集合
		$Drag = that.find(".magnifier-mask"),//滑块
		$show = that.find(".magnifier-Big"),//放大镜显示区域
		$showImg = $show.find("img"),//放大镜图片
		$ImgList = that.find(".magnifier-ImgList >li > img"),//小图片列表
		multiple = $show.width() / $Drag.width();
		
		$imgCon.mousemove(function(e){
			$Drag.css("display", "block");
			$show.css("display", "block");
			
			var iX = e.pageX - $(this).offset().left - $Drag.width()/2,
			iY = e.pageY - $(this).offset().top - $Drag.height()/2,
			MaxX = $imgCon.width() - $Drag.width(),
			MaxY = $imgCon.height() - $Drag.height();
			
			iX = iX > 0 ? iX:0;
			iX = iX < MaxX ? iX : MaxX;
			iY = iY > 0 ? iY:0;
			iY = iY < MaxY ? iY : MaxY;
			$Drag.css({left:iX+"px", top:iY+"px"});
			$showImg.css({marginLeft:-multiple*iX + "px", marginTop:-multiple * iY + "px"});
		});
		
		$imgCon.mouseout(function(){
			$Drag.css("display", "none");
			$show.css("display", "none");
		});
		
		$ImgList.mouseover(function(){
			var NowSrc = $(this).data('bigimg');
			$Img.attr("src", NowSrc);
			$(this).parent().addClass("active").siblings().removeClass("active");
		});
	}
	$(".magnifier").magnifying();
