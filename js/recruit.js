//点击伸缩
function click_height () {
	var $main3 = $(".main3 li");
	var li_main = $(".li_main");
	var bol = true;
	
	$main3.on("click",function () {
		var  othis = $(this).index(".main3 li");	
		

		li_main.animate({

				height:0+"px"			
		},0)
		li_main.eq(othis).animate({
			
				height:442+"px"		
		},0)
		

		li_main.css("display","none")
		li_main.eq(othis).css("display","block");



	})
	
}
click_height () 