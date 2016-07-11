function dj() {
	$(".not-hidden").hide(1000,'swing',function (){
		$(".hidden-default").show(1000,'swing');
	});
}

$(document).ready(function(){
	$(".hidden-default").hide();	
});