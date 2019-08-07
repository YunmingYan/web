//# sourceURL=leo-table.js
(function(){

LeoTable = function(config){
	this.Init(config);
}

LeoTable.prototype.Init = function(config){
	var obj = this;
	var cf = config || {};
	obj.$id = cf.id ? $(cf.id) : $("#table-paging");	
	
	this.PageSizeArray = [10,20,50];
	this.config = {
		tbody:cf.tbody||"tbody",
		pageSize : 20,
		nowPage : 1
	}
	this.Events();
}

LeoTable.prototype.Events = function(){
	var obj = this;
	obj.$id.on("click",".number a",function(){
		var $a = $(this);
		if($a.hasClass("active") || $a.hasClass("disable") || $a.hasClass("a-omit"))
			return;
		if($a.hasClass("a-num"))
		{
			obj.config.nowPage = parseInt($a.text());
		}
		else
		{
			obj.config.nowPage = $a.hasClass("a-prev") ? (obj.config.nowPage - 1) : (obj.config.nowPage + 1);
		}
		obj.DataDisplay();
		obj.PageNumberDisplay();
	});
	obj.$id.on("click",".ps",function(){
		$(this).find("ul").fadeIn();
	});
	obj.$id.on("blur",".ps",function(){
		$(this).find("ul").fadeOut();
	});
	obj.$id.on("click",".ps li",function(ev){
		ev.stopPropagation();		
		$(this).parents("ul").fadeOut();
		if(!$(this).hasClass("active")){
			$(this).parents(".ps").find("span").text($(this).text());
			$(this).addClass("active").siblings("li").removeClass("active");					
			obj.config.pageSize = parseInt($(this).text());
			obj.config.nowPage = 1;
			obj.DataDisplay();
			obj.PageNumberDisplay();
		}		
	});
}

LeoTable.prototype.DataLoad = function(data,trFn)
{
	if(!data || !trFn)
	{
		console.log("LeoTable -->  DataLoad paramter is error");
		return;	
	}
	this.dataList = data;
	this.trCallFn = trFn;
	this.config.nowPage = 1;

	if(this.$id.find(".table-foot").length==0)
		this.$id.append("<div class='table-foot'></div>");
	this.footer = this.$id.find(".table-foot");	
	this.tbody = this.$id.find(this.config.tbody);

	this.DataDisplay();
}

LeoTable.prototype.DataDisplay = function(){
	var obj = this;
	if(obj.dataList.length>0)
	{
		obj.config.totalQty = obj.dataList.length;
		var si = (obj.config.nowPage - 1)*obj.config.pageSize, ei = obj.config.nowPage * obj.config.pageSize;
		ei = ei <  obj.config.totalQty ? ei : obj.config.totalQty;
		obj.tbody.empty();
		for(var i = si ; i < ei ; i++)
		{
			var tr = obj.trCallFn(obj.dataList[i]);
			var $tr = $(tr);
			$tr.data(obj.dataList[i]);
			obj.tbody.append($tr);
		}	
		obj.FooterDisplay();
		//Leo.ScrollResize();
	}
	else
	{

	}
}

LeoTable.prototype.FooterDisplay = function(){
	var obj = this;
	if(obj.footer.find(".size").length==0)
		obj.footer.append("<div class='size'></div><div class='number'><a class='a-prev'></a><a class='a-next'></a></div>");
	if(obj.dataList.length==0)
	{
		obj.footer.find(".size").prop("innerHTML","<div class='size'><span>共计0条数据</span><span>    每页显示0</span></div>");
		obj.footer.find(".number").hide();
		return;
	}
	obj.footer.find(".number").show();
	var pageSizeStr = "<a class='ps' tabindex=10><span>"+obj.config.pageSize+"</span><ul>";
	for(var i = 0;i<obj.PageSizeArray.length;i++)
	{
		pageSizeStr += "<li class='"+(obj.PageSizeArray[i] == obj.config.pageSize ? "active" : "" )+"'>"+obj.PageSizeArray[i]+"</li>";
	}
	pageSizeStr += "</ul></a>";
	obj.footer.find(".size").prop("innerHTML","<div class='size'><span>共计"+obj.config.totalQty+"条记录</span><span>  每页显示"+pageSizeStr+"</span>条</div>");
	obj.PageNumberDisplay()
}

LeoTable.prototype.PageNumberDisplay = function(){
	var obj = this;	
	obj.config.totalPage = Math.ceil(obj.config.totalQty / obj.config.pageSize);          //总页数
	var c = obj.config.totalPage , i = obj.config.nowPage;
	//上一页按钮显示状态
	i==1 ? obj.footer.find(".a-prev").addClass("disable") : obj.footer.find(".a-prev").removeClass("disable");
	
	//下一页按钮显示状态
	i==c ? obj.footer.find(".a-next").addClass("disable") : obj.footer.find(".a-next").removeClass("disable");

	obj.footer.find(".a-omit").remove();
	obj.footer.find(".a-num").remove();
	if(c<8)
	{		
		for(var ni = 1 ; ni <= c ; ni++){
			obj.footer.find(".a-next").before("<a class='a-num "+(i==ni?"active":"")+"'>"+ni+"</a>");
		}
	}
	else
	{
		if(i<=4)    //前四页
		{
			for(var ni=1;ni<=5;ni++)
			{
				obj.footer.find(".a-next").before("<a class='a-num "+(i==ni?"active":"")+"'>"+ni+"</a>");
			}
			obj.footer.find(".a-next").before("<a class='a-omit'>...</a>");
			obj.footer.find(".a-next").before("<a class='a-num'>"+c+"</a>");			
		}	
		else if(i>c-4) //后四页
		{
			obj.footer.find(".a-next").before("<a class='a-num'>1</a>");
			obj.footer.find(".a-next").before("<a class='a-omit'>...</a>");
			for(var ni=c-4;ni<=c;ni++)
			{
				obj.footer.find(".a-next").before("<a class='a-num "+(i==ni?"active":"")+"'>"+ni+"</a>");
			}
		}
		else          //中间页
		{
			obj.footer.find(".a-next").before("<a class='a-num'>1</a>");
			obj.footer.find(".a-next").before("<a class='a-omit'>...</a>");
			for(var ni=i-1;ni<=i+1;ni++)
			{
				obj.footer.find(".a-next").before("<a class='a-num "+(i==ni?"active":"")+"'>"+ni+"</a>");	
			}
			obj.footer.find(".a-next").before("<a class='a-omit'>...</a>");
			obj.footer.find(".a-next").before("<a class='a-num'>"+c+"</a>");
		}
	}

}


})();