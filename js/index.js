var imgArry = ["塞恩","季中赛","死歌","2016","信用卡"];
$("#main-left ul li").mouseover(function(){
	$(this).css("background","#d52c01").siblings().css("background","black");
	var index = $(this).index();
	$("#main-left").css("background","url(img/"+imgArry[index]+".jpg)");
});

$("#main-right-top li").mouseover(function(){
	$(this).css("background","#2c3241").css("border","none").siblings().css("background","#222532");
	var index = $(this).index();
	$("#main-right > div > div:eq("+index+")").show().siblings().hide();
});

$(".video-nav li a").mouseover(function(){
	$(this).css("color","#00a383").css("borderTopColor","#00a383").css("background","#fff")
	.parent().siblings().children().css("borderTopColor","#d7d7d7").css("color","#666").css("background","#f0f0f0");
	var index = $(this).parent().index();
	$("#video-main > div:eq("+index+")").show().siblings().hide();
});

$("#match-nav a").mouseover(function(){
	$(this).css("color","#00a383").css("borderTopColor","#00a383").css("background","#fff")
	.parent().siblings().children().css("borderTopColor","#d7d7d7").css("color","#666").css("background","#f0f0f0");
	var index = $(this).parent().index();
	$("#match-main > div:eq("+index+")").show().siblings().hide();
});

$("#serve-left a").mouseover(function(){
	$(this).css("fontWeight","bold").css("color","#000").css("borderBottom","none")
	.css("borderRight","1px solid #bbb").parent().siblings().children().css("borderBottom","1px solid #bbb").css("background","#f8f8f8")
	.css("color","#666").css("borderRight","none");
	var index = $(this).parent().index();
	$("#serve-down > div:eq("+index+")").show().siblings().hide();
});