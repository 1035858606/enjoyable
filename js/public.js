//计算 fixed
	function fixed () {
		var mian = $("#mian");
		var mian_h = mian.height()+$("#head").height();
		var scrolls = $(window).scrollTop();

		if (scrolls >= mian_h) {
			
				mian.addClass("fixeds")
				
	
		}
		else{
			
			
			mian.removeClass("fixeds")
			
		}
	}

$(window).scroll(function() {
	fixed ()

});

//回到顶部
function Top () {
	var barright = $('.barright');
	barright.on("click",function  () {
	$("body").animate({
		     scrollTop:0
	    },500)
	})

}
Top()

//导航栏


function nav () {
	var $navimg =  $(".navimg");
	var $navimg_ol =  $(".navimg ol");
	var bol = true;
	$navimg.on("click",function  () {
		if(bol){
			$navimg_ol.css("display","block");
			bol = false
		}else{
			$navimg_ol.css("display","none");
			bol = true			
		}

	})
}

nav()
//导航栏2
function nav2 () {
	var $bar2 =  $(".bar2");
	var $bar_li2_ul =  $(".bar2 ul");
	var bol = true;
	
	$bar2.on("click",function  () {
		if(bol){
			$bar_li2_ul.css("display","block");
			bol = false;
		}else{
			$bar_li2_ul.css("display","none");
			bol = true;
		}
		
	})
	
}
 nav2()
//计算 滚动
function move () {
	var btn = $(".btn");
	var h = $("#head").height();

	btn.on("click",function () {
		$("body").animate({
			scrollTop:h
		},500)
	})

}
move ()