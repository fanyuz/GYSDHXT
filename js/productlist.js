window.onload = function(){
	var look = document.getElementsByClassName("lower_redact");
	var zhez_pro = document.getElementsByClassName("product_shade_box")[0];
	var shut_pro = document.getElementById('shade_span_end');
	var remov = document.getElementsByClassName("lower_remove");
	var zhez_rem = document.getElementsByClassName("product_remove_box")[0];
	var shut_rem = document.getElementById("shade_span_remove");
	for (var i=0;i<look.length;i++) {
		look[i].onclick = function(){
			zhez_pro.style.display = "block";
		};
		
	}
	for (var i=0;i<remov.length;i++) {
		remov[i].onclick = function(){
			zhez_rem.style.display = "block";
		};
		
	}
	shut_pro.onclick = function(){
		zhez_pro.style.display = "none";
	}
	shut_rem.onclick = function(){
		zhez_rem.style.display = "none";
	}
}