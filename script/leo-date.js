//# sourceURL=leo-date.js
(function(){
	
DateTime = function(){
	
	this.Init();
}

DateTime.prototype.Init = function(){
	
	var obj = this;	
	
	this.Events();
	
	$("body").on("click",".date-sel input",function(){
		obj.input = $(this) , obj.div = $(this).parents(".date-sel");
		if(!obj.div.data("date"))		{
			if(obj.div.attr("dt")=="range")
			{
				obj.Range();
			}
			else if(obj.div.attr("dt")=="time")
			{
				obj.Time();
			}
			else
			{
				obj.Single();
			}			
			obj.div.data({"date":true});
		}		
	});
	
	$("body").on("blur",".date-sel .date",function(){
		$(this).remove();
		obj.div.data({"date":false});
	});
	
	$("body").on("click",".date .day a",function(ev){
		var day = $(this).text();
		var output = obj.year +"-"+ (obj.month<9 ? ("0"+(obj.month+1)):obj.month+1) +"-"+ (day < 10 ? "0"+day : day);
		obj.input.val(output);
		$(this).parents(".date").blur();
	});
	
}

DateTime.prototype.Events = function(){
	var obj = this;
	
	$("body").on("click",".date .year-prev",function(){
		obj.year --;
		obj.YMDispaly();
	});
	
	$("body").on("click",".date .year-next",function(){
		obj.year ++;
		obj.YMDispaly();
	});
	
	$("body").on("click",".date .month-prev",function(){
		obj.month --;
		if(obj.month==-1)
		{
			obj.year --;
			obj.month = 11
		}
		obj.YMDispaly();
	});
	
	$("body").on("click",".date .month-next",function(){
		obj.month ++;
		if(obj.month==12)
		{
			obj.year ++;
			obj.month = 0
		}
		obj.YMDispaly();
	});
}

//日期选择
DateTime.prototype.Single = function(){
	var obj = this;
	var date = new Date(obj.input.val());
	if(date== "Invalid Date")
		date = new Date();
		
	obj.defaultY = obj.year = date.getFullYear();
	obj.defaultM = obj.month = date.getMonth();
	obj.defaultD = date.getDate();

	if(!this.datetimeHtml)
	{
		var html = this.DateTimeHtml(1);
		var day = "";
		for(var i=1;i<32;i++){
			day += "<a>"+i+"</a>";
		}	
		this.datetimeHtml = html.replace("{{days}}",day);
	}
	
	obj.div.append(this.datetimeHtml);	
	
	obj.div.find(".date").focus();
	
	obj.YMDispaly();	
}

//日期范围
DateTime.prototype.Range = function(){
	var obj = this;
	
	if(!this.rangeHtml)
	{
		var html = this.DateTimeHtml(2);
		var day = "";
		for(var i=1;i<32;i++){
			day += "<a>"+i+"</a>";
		}	
		html = html.replace("{{start-days}}",day);
		this.rangeHtml = html.replace("{{edn-days}}",day);
	}
	obj.div.append(this.rangeHtml);
}

//日期+时分秒
DateTime.prototype.Time = function(){
	var obj = this;
	
	if(!this.rangeHtml)
	{
		var html = this.DateTimeHtml(3);
		var day = "";
		for(var i=1;i<32;i++){
			day += "<a>"+i+"</a>";
		}	
		this.rangeHtml = html.replace("{{days}}",day);
	}
	obj.div.append(this.rangeHtml);
}

DateTime.prototype.YMDispaly = function(){
	
	$(".year").text(this.year);
	var m = this.month + 1;
	$(".month").text(m<10?"0"+m:m);	
	
	this.DayDisplay();
}

DateTime.prototype.DayDisplay = function(){
	var obj = this;
	
	var df = new Date(obj.year,obj.month,1);
	$(".day").removeClass("fir1 fir2 fir3 fir4 fir5 fir6 fir0").addClass("fir"+df.getDay());
	
	if(obj.month==0 || obj.month==2 || obj.month==4 || obj.month==6 || obj.month==7 || obj.month==9 || obj.month==11)
	{
		$(".day a").show();
	}
	else if(obj.month==3 || obj.month==5 || obj.month==8 || obj.month==10)
	{
		$(".day a:eq(28)").show();
		$(".day a:eq(29)").show();
		$(".day a:eq(30)").hide();
	}
	else{
		if(obj.year%4  == 0)
		{
			$(".day a:eq(28)").show();
			$(".day a:eq(29)").hide();
			$(".day a:eq(30)").hide();
		}
		else
		{
			$(".day a:eq(28)").hide();
			$(".day a:eq(29)").hide();
			$(".day a:eq(30)").hide();
		}
	}
	
	$(".day a").removeClass("active");
	if(obj.defaultY == obj.year && obj.defaultM == obj.month)
	{
		$(".day a:eq("+(obj.defaultD-1)+")").addClass("active");
	}
	
};

DateTime.prototype.DateTimeHtml = function(t){
	var re = "";
	Leo.Html({
		url:"view/datetime.html",
		success:function(result){
			var $temp = $(result);
			if(t==1)
				re = $temp.find(".single")[0].outerHTML;
			else if(t==2)
				re = $temp.find(".range")[0].outerHTML;
			else if(t==3)
				re = $temp.find(".time")[0].outerHTML;
		}
	});
	return re;
}
	
})();

