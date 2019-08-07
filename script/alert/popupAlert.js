(function(){

PopupAlert = function(){
	this.Events();
}

PopupAlert.prototype.ViewDataLoad = function(){
	var obj = this;
	var alertData = [{"Id":"1","Name":"alert"},{"Id":"2","Name":"confirm"},{"Id":"3","Name":"success"},{"Id":"4","Name":"error"}];
	$("#alert-type").InitRadio(alertData,{change:obj.AlertChange,checked:0});
}

PopupAlert.prototype.Events = function(){

	$("body").on("click","#popup-default",function(){
		var t = $("#input-title").val(),
			c = "<div style='padding:30px;text-align:center;'>"+$("#input-con").val()+"</div>";
		Leo.Popup(t,c);
	});

	$("body").on("click","#popup-form",function(){
		var t = "popup form";
		Leo.Html({
			url : "view/popup-form.html",
			success:function(result){
				Leo.Popup(t,result);
			}
		});
		
	});

	$("body").on("click","#btn-alert",function(){
		var t = $("#alert-type").GetRadio().name;
		var con = $("#alert-con").val();
		var time = $("#alert-time").val();
		Leo.Alert(t,con?con:time);
	});


	$("body").on("click",".img-list a",function(){
		var par = $(this).parent(".img-list"), imgArr=par.attr("imgs").split(","), path="resource/image/";
		var ii = $(this).attr("ii") || 0;
		Leo.ImgShow(path,imgArr,ii,this);
	});

}

PopupAlert.prototype.AlertChange = function(v){
	var t = v.name;
	if(t=="alert" || t=="confirm")
	{
		$("#alert-con").removeAttr("disabled");
		$("#alert-time").attr("disabled","disabled");
	}
	else
	{
		$("#alert-con").attr("disabled","disabled");
		$("#alert-time").removeAttr("disabled");
	}
}

})();