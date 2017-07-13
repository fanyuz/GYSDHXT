$(document).ready(function(){
	//刷新页面
	(function location(){
		var _this = $('.itme-remove');
		_this.on('click',function(){
			parent.location.reload();
		})
	})();
	//清空当前input值
/*	(function removeInput(){
		var _this = $('.itme-remove');
		_this.on('click',function(){
			var _this = $('.upload-input'),
				_this = _this.find('.remove-text'),
				_thisname = '';
				_this.val(_thisname);
		})
	})();*/
})