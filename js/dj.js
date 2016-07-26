function dj() {
	$(".not-hidden").hide(333,'swing',function (){
		$(".hidden-default").show(333,'swing');
	});
}

$(document).ready(function(){
	$(".hidden-default").hide();	
});