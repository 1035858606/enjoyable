
//mian2 动画
 function mian2 () {
	var $hoverLi = $(".m2main li");
	$hoverLi.hover(
	  function () {
	    $(this).children(".hover").addClass("hover2");
	    	var tThis = $(this);
	    var imgsrc =  $(this).children(".h1").attr("imgsrc")
			setTimeout(function  () {
	    	 tThis.children(".h1").children("img").attr({
						src:"images/"+imgsrc+".png"
	   		 })
	    	 tThis.children("em").css({
	    			color:"white",
	    			zIndex:9
	   		 })
	     	 tThis.children("span").css({
	    			color:"white",
	    			zIndex:9
	   		 })
	     	 tThis.children(".h1").css({
	    			zIndex:9
	   		 })
			},300)
	
	  },
	  function () {
	    $(this).children(".hover").removeClass("hover2");
	        	var tThis = $(this);
	      var imgsrc =  $(this).children(".h1").attr("imgsrc2")
	    setTimeout(function  () {
	    	 tThis.children(".h1").children("img").attr({
	    			src:"images/"+imgsrc+".png"
	   		 })
			tThis.children("em").css({
	    			color:"black",
	    			zIndex:0
	   		 })
	     tThis.children(".h1").css({
	    			zIndex:0
	   		 })
	     	tThis.children("span").css({
	    			color:"black",
	    			zIndex:0
	   		 })
	
	    },300)
	    }
	);
}
mian2()

//m3 动画
function main3 () {
	var $m3main_li = $(".m3main li");
	var $block = $(".block");
	
	$m3main_li.hover(function  () {
			var othis = $(this).index()
		$block.eq(othis).css({
			opacity:"0",
	
		})
		$(this).css({
			"border":"1px solid #d2d2d2",
			"padding": "0"	
		})
	},
		function  () {
				$block.css("opacity","1")
			$(this).css({
				"border":"0px solid #d2d2d2",
				"padding": "1"	
			})
		}
	)
	
}
main3 ()

//m4动画
function main4 () {
	$ml3_lv = $(".ml3_lv");
	$ml3_span = $(".ml3_span");
	$main4mian_li  = $(".main4mian li");
	$main4mian_img = $(".main4mian img");
	$main4mian_li.hover(function function_name () {
		var othis = $(this).index();
		$ml3_lv.eq(othis).css("display","block")
		$ml3_span.eq(othis).css("display","block")
		$main4mian_img.eq(othis).addClass("m4_img")
	},function  () {
			$ml3_lv.css("display","none")
			$ml3_span.css("display","none")
			$main4mian_img.removeClass("m4_img")
	})

}
main4 ()
// 计算满屏
//var $head = $("#head");
//$head.css("height",$("body").height())