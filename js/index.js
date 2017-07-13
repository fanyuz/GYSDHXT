//window.onload = function(){
//	var shade_toggle = document.getElementsByClassName("shade_box")[0];
//	withdraw_deposit.onclick = function(){
//		shade_toggle.style.display = "block";
//	}
//}
$(function(){
	$("#withdraw_deposit").click(function(){
		$(".shade_box").show()
	})
	$("#shade_span_end").click(function(){
		$(".shade_box").hide()
	})
})
