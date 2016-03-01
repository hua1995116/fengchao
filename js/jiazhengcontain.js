/*window.onload=function(){
	var time=$("time");
	var timecontain=$('timecontain');
	time.onclick=function(){
		timecontain.style.display='blcok';
	}
	timecontain.
}
function $(indent){
	return document.getElementById(indent);
}*/
$(document).ready(function(){
	$("#time").click(function(){
		$('#timecontain').fadeIn();
	});
	$('#timecontain').click(function(){
		$('#timecontain').fadeOut();	
	});
	$('.name_contain').click(function(event){
		$('.name_contain').css("display","blcok");
		event.stopPropagation();
	});
	$('#ccc').click(function(){
		var time1=$('.time_contain input:nth-child(1)').val();
		var time2=$('.time_contain input:nth-child(2)').val();
		$("#time").html(time1+'-'+time2);
		$('#timecontain').fadeOut();
	});
	//sex选择
	$(".pic_sex1").click(function(){
		$(".pic_sex1 div:nth-child(2)").css({
			"background-image":"url(icon/家政选中/icon_yes.png)",
		});
		$(".pic_sex2 div:nth-child(2)").css({
			"background-image":"url(icon/家政选中/icon_no.png)",
		});
	});
	$(".pic_sex2").click(function(){
		$(".pic_sex2 div:nth-child(2)").css({
			"background-image":"url(icon/家政选中/icon_yes.png)",
		});
		$(".pic_sex1 div:nth-child(2)").css({
			"background-image":"url(icon/家政选中/icon_no.png)",
		});
	});
});