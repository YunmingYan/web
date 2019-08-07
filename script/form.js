var main = null;
(function(){

$body = $("body");
Index = function(){
	var obj = this;
	this.leo = new Leo();
	this.Init();
}

Index.prototype.Init = function(){

	this.MenuConfigInit();

	//默认加载index页面
	this.DefaultLoad("index");	

	this.MenuFn();
}

Index.prototype.DefaultLoad = function(n){
	var obj = this;
	var mso = obj.scriptObject[n];
	Leo.Html({
		url:obj.path.html+mso.html,
		success:function(result){
			mso.view = result;
			obj.ViewLoad(n);
		}
	});	
}

Index.prototype.ViewDataLoad = function(){
	var obj = this;

	if(!obj.pie)   //折线图
	{
		$.getScript(obj.path.script+"default/d3-pie.js",function(){
			obj.pie = new Pie();	
			obj.pie.Init();		
		});
	} 
	else
		obj.pie.Init();	

	if(!obj.polyline)   //折线图
	{
		$.getScript(obj.path.script+"default/d3-polyline.js",function(){
			obj.polyline = new Polyline();	
			obj.polyline.Init("#polyline");		
		});
	} 
	else
		obj.polyline.Init("#polyline");

	if(!obj.radar)  //雷达图
	{
		$.getScript(obj.path.script+"default/d3-radar.js",function(){
			obj.radar = new Radar();	
			obj.radar.Init();		
		});
	} 
	else
		obj.radar.Init();


	if(!obj.bar)  //柱状图
	{
		$.getScript(obj.path.script+"default/d3-bar.js",function(){
			obj.bar = new Bar();	
			obj.bar.Init();		
		});
	} 
	else
		obj.bar.Init();

	/*if(!obj.annular)  //环形图
	{
		$.getScript(obj.path.script+"default/d3-annular.js",function(){
			obj.annular = new Annular();	
			obj.annular.Init();		
		});
	} 
	else
		obj.annular.Init();*/

	if(!obj.board)  //环形图
	{
		$.getScript(obj.path.script+"default/d3-board.js",function(){
			obj.board = new Board();	
			obj.board.Init();		
		});
	} 
	else
		obj.board.Init();
}


Index.prototype.MenuConfigInit = function(){

	this.scriptObject = {
		index:{
			html:"default.html",
		},
		"table":{
			html:"table.html",
			script:"table/table.js",
		},
		form:{
			html:"form.html",
			script:"form/formStyle.js",
		},
		alert:{
			html:"alert.html",
			script:"alert/popupAlert.js",
		}
	};

	this.path={
		html:"view/",
		script:"script/",
		data:"resource/data/"
	};
}

Index.prototype.MenuFn = function(){

	$body.on("click",".menu>a",function(){

		if($(this).hasClass("active"))
			return false;

		$(this).addClass("active").siblings("a").removeClass("active");
		$(".title .text").text($(this).text());

		$(".page-body").addClass("changing");

		var n = $(this).attr("href");

		var mso = main.scriptObject[n];
		if(!mso.view)
		{			
			Leo.Html({
				url:main.path.html+mso.html,
				success:function(result){
					mso.view = result;
					$.getScript(main.path.script+mso.script,function(){
						main.ScriptInstance(n);
						setTimeout(function(){main.ViewLoad(n);},200);
					});
				}
			});			
		}
		else
		{
			setTimeout(function(){main.ViewLoad(n);},500);
		}
		return false;
	});

	$("#about").click(function(){
		Leo.Html({
			url:main.path.html+"about.html",
			success:function(result){
				Leo.Popup("about me",result);
			}
		});
	});
}

Index.prototype.ViewLoad = function(view){
	var obj = this;

	var $html = $(obj.scriptObject[view].view);

	$(".changing").remove();
	$html.appendTo("#main-box");	
	setTimeout(function(){$(".page-body").addClass("shown")},10);
	var cur = view=="index" ? this : main.scriptObject[view].controll;
	if(cur.ViewDataLoad)
		cur.ViewDataLoad();
}

Index.prototype.ScriptInstance = function(view){

	if(view=="table")
		this.scriptObject[view].controll = new Table();
	else if(view == "form")
		this.scriptObject[view].controll = new FormStyle();	
	else if(view == "popup")
		this.scriptObject[view].controll = new Popup();
	else if(view == "alert")
		this.scriptObject[view].controll = new PopupAlert();
}

})();

main = new Index();