$(function(){
	$(".head_picture")[0].addEventListener("click",function(){
		$("#head_file").click();
		$("#head_file").addEventListener("change",function(){
			var files=this.files[0],
			fileObj=new FileReader();
			fileObj.readAsDataURL(files);
			alert(files)
			fileObj.onload=function(){
				$(".head_picture").innerHTML = '<img src="'+this.result+'" class="head_picture"/>';
			}
		},false)	
	},false)
	
})