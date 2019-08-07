/**
* name: leojs
* creator: leo(Yin Long)
* date: 2018-09-01
* version: 1.0(2018-09-08)
**/

(function(){

Leo = function(){
	this.Init();
}

/*私用变量*/
var privateVar={
	scrollClass:".scroll",                  	//滚动条默认class
	searchSelect:".searchSelect input"			//下拉框筛选class
}

/*实例函数*/
Leo.prototype.Init = function(){
	this.ScrollEventsInit();
	this.FormEventsInit();
	this.DateTimeInit();
	this.PopupEvents();
	this.ImgShowEvents();
}
//滚动条
Leo.prototype.ScrollEventsInit = function(cla){
	var obj = this;
	var _sMouseWheel = "mousewheel" ;
	if(!("onmousewheel" in document)){						
		_sMouseWheel = "DOMMouseScroll";
	}
	$("body").on(_sMouseWheel,privateVar.scrollClass,function(ev){

		var $scoll = $(this), $scon = $(this).children(".scroll-con");

		if($scoll.children(".scroll-bar").is(":visible"))
			ev.stopPropagation();

		ev = ev.originalEvent;		
			
		if(ev.wheelDelta){
			iWheelDelta = ev.wheelDelta/120;
		}else{
			iWheelDelta = -ev.detail/3;
		}		
		
		if($scoll.children(".scroll-bar").is(":visible"))
		{			
			$scon[0].scrollTop += -1*30*iWheelDelta;
			var bt = $scon.height() * $scon[0].scrollTop / $scon[0].scrollHeight;
			$scoll.children(".scroll-bar").css({'top':bt});
		}	
	});
	$("body").on("mousedown",".scroll .scroll-bar",function(ev){
		obj.bar = $(this);
		obj.bar.addClass("active");
		obj.scroll = $(this).parent(".scroll");
		obj.barMove = true;
		obj.mouseY =  ev.pageY;
		obj.barOT = this.offsetTop;
		obj.maxMove = obj.scroll.height() - $(this).height();
	});
	$(document).on("mousemove",function(ev){
		if(obj.barMove)
		{
			var rate = ev.pageY - obj.mouseY;
			var ot = obj.barOT + rate;
			ot = ot < 0 ? 0 : ot;
			ot = ot > obj.maxMove ? obj.maxMove : ot;
			var sjRate =  ot + obj.bar[0].offsetTop;
			obj.bar.css({"top":ot});
			var st = ot * obj.scroll.find(".scroll-con")[0].scrollHeight / obj.scroll[0].clientHeight;
			obj.scroll.find(".scroll-con")[0].scrollTop = st;

		}
	});
	$(document).on("mouseup",function(){
		if(obj.barMove)
		{
			obj.barMove = false;
			obj.bar.removeClass("active");
		}		
	});

	Leo.scrollWatch = setInterval(Leo.ScrollResize,167);
}
//表单
Leo.prototype.FormEventsInit = function(){
	//checkbox
	$("body").on("mousedown",".checkbox",function(){
		$(this).toggleClass("checked");
	});

	//radio
	$("body").on("mousedown",".radio-group .radio",function(){
		var $group = $(this).parent(".radio-group");
		var cf = $group.data();		
		if($(this).hasClass("checked"))
		{
			if($group.attr("isNull")==1)
				$(this).removeClass("checked");
			else
				return;
		}
		else			
			$(this).addClass("checked").siblings(".radio").removeClass("checked");
		if(cf.change)   //radio change events
			cf.change($group.GetRadio());
	});

	//switch
	$("body").on("mousedown",".switch",function(){
		$(this).toggleClass("on");
		$(this).toggleClass("off");
	});

	//select
	$("body").on("mousedown",".select",function(){
		var $sel = $(this);
		if($sel.find(".sel-list").is(":hidden"))
		{
			Leo.ScrollWatch(0);
			$sel.find(".sel-list").slideDown(function(){
				Leo.ScrollWatch(1);
			}).find("li").show();			
		}
	});
	$("body").on("blur",".select",function(){
		if($(this).data("focus"))
		{
			$(this).data({"focus":false});
		}
		else
		{
			$(this).find(".sel-list").slideUp();
			if($(this).data("searching"))                //如果被筛选过，未选择，关闭时恢复默认值
			{
				$(this).find("input").val($(this).find("li.active").attr("sname") || "");
				$(this).data("searching",false);
				$(".select-search-null").remove();
			}			
		}
	});
	$("body").on("mousedown",".select .sc",function(){
		var $sel = $(this).parents(".select");
		$sel.data({"focus":true});
		setTimeout(function(){$sel.data({"focus":false})},100)
	});
	$("body").on("mousedown",privateVar.searchSelect,function(){		
		var $sel = $(this).parents(".select");
		$sel.data({"focus":true});
		setTimeout(function(){$sel.data({"focus":false})},100)
	});
	$("body").on("click",".sel-list li",function(){
		var $sel = $(this).parents(".select") , $li = $(this);
		if(!$li.hasClass("active")){
			$li.addClass("active").siblings("li").removeClass("active");	
			$sel.find("input").val($li.attr("sname"));
			var cf = $sel.data();
			if(cf.change)                                                     //选择改变事件
				cf.change($sel.GetSelect());
		}		
		$sel.find(".sel-list").slideUp().blur();
	});	
	$("body").on("input propertychange",privateVar.searchSelect,function(){    //筛选下拉项
		var v = $(this).val(), $sel = $(this).parents(".select"), sn=0;
		$sel.data({searching:true});
		$(".select-search-null").remove();
		if(v){
			$sel.find("li").each(function(i,o){
				var ft = $(o).attr("search") || $(o).attr("sname");
				if(ft.indexOf(v)>=0){
					$(o).show();
					sn ++;
				}
				else
					$(o).hide();				
			});
			if(sn==0)
				$sel.find("ul").append("<li lid='-2' class='select-search-null'>没有找到匹配项</li>")
		}
		else
			$sel.find("li").show();
	});
}
//日期时间
Leo.prototype.DateTimeInit = function(){
	var obj = this;
	$.getScript("script/leo-date.js",function(){
		obj.dateTime = new DateTime();			
	});
}
//弹出层
Leo.prototype.PopupEvents = function(){
	$("body").on("click",".popup-close",function(){
		$("#popup").removeClass("show");
		setTimeout(function(){$("#popup").remove();},500)
		$("body").removeClass("readonly");
	});

	$("body").on("click",".alert-btn",function(){
		$("#alert").removeClass("show");
		setTimeout(function(){$("#alert").remove();},500)
		$("body").removeClass("readonly");
		if($(this).attr("bt")=="1")
			Leo.AlertOkFn();
		else if($(this).attr("bt")=="0")
			Leo.AlertCancleFn();
	});
}
//查看大图
Leo.prototype.ImgShowEvents = function(){
	$("body").on("click","#img-show-close",function(){
		$("#img-show").removeClass("show");
		setTimeout(function(){$("#img-show").remove();},600);
		$("body").removeClass("readonly");
	});

	$("body").on("click",".img-ope",function(){
		var ii = parseInt($("#img-show").data("imgIndex")), imgArr = $("#img-show").data("imgs"), path = $("#img-show").data("path");		
		ii = $(this).hasClass("prev") ? ii-1 : ii+1;
		if(ii<0)
			ii = imgArr.length-1;
		if(ii>=imgArr.length)
			ii = 0;
		$("#img-show img").attr("src",path+imgArr[ii]);
		$(".dot-box a").eq(ii).addClass("active").siblings("a").removeClass("active");
		$("#img-show").data("imgIndex",ii);
	});

	$("body").on("click",".dot-box a",function(){
		if($(this).hasClass("active"))
			return;
		var ii = parseInt($(this).attr("ai")), imgArr = $("#img-show").data("imgs"), path = $("#img-show").data("path");
		$("#img-show img").attr("src",path+imgArr[ii]);
		$(this).addClass("active").siblings("a").removeClass("active");
		$("#img-show").data("imgIndex",ii);
	});
}


/**************************************************************************************************************************/


/*静态函数*/
//db属性绑定、获取数据（json）
Leo.SetData = function(){
	if(!data)
	{
		console.log("error: set data - data is error ")
		return;
	}		
	var $o = $(this) , t = Object.prototype.toString.call(data);
	if(t=="[object Number]" || t=="[object String]" || t=="[object Boolean]")      //值类型-直接绑定值
	{
		ObjectBind($o,data);
	}
	else if(t=="[object Object]")      //对象类型-查找子孙级属性为db的绑定数据
	{
		$o.data(data);
		$o.find("*[db]").each(function(i,o){
			ObjectBind(o,data[$(o).attr("db")]);
		});
	}
	else if(t=="[object Array]")      //数组类型-待定
	{
		
	}
}
Leo.GetData = function(){
	var data = {} , $o = $(this) , result = {error:[]}; //error后续添加
	$o.find("*[db]").each(function(i,o){
		if($(o).attr("not-get") != "1")    //拥有db属性，但不取值设置not-get属性 1
		{
			if($(o).is(":visible"))
				data[$(o).attr("db")] = GetVal(o);
			else   //如果需要取值的元素隐藏的，直接赋值空
				data[$(o).attr("db")] = "";
		}					
	});
	result.data = data;
	return result;
}
//异步Get请求
Leo.Get = function(){RequestFn(0,cf);}
//异步Post请求
Leo.Post = function(){	RequestFn(1,cf);}
//同步HTML请求
Leo.Html = function(cf){
	$.ajax({
		url:cf.url,
		type:"get",
		dataType: "html",
		async:false,
		success:function(result){
			cf.success.call(this,result);	
		},
		error:function(result){
			var text = result.status +" :  "+ result.statusText;
			console.log(text);
		}
	});
}
//scroll 监控
Leo.ScrollWatch = function(w){
	if(w)
		Leo.scrollWatch = setInterval(Leo.ScrollResize,167);
	else
		clearInterval(Leo.scrollWatch);
}
//scroll刷新（默认167毫秒刷新，可关闭监控自行刷新）
Leo.ScrollResize = function(elem){
	var $scrollList = elem || $(privateVar.scrollClass);
	$scrollList.each(function(i,o){
		var $scroll = $(o);

		if($scroll.find(".scroll-bar").length==0)
			$scroll.append("<div class='scroll-bar'></div>");
		var $bar = $scroll.find(".scroll-bar")

		var psh = $scroll.find(".scroll-con")[0].scrollHeight , pch = $scroll.find(".scroll-con")[0].clientHeight;
		
		if(psh > pch){
			var barH = pch * pch / psh;		

			var st = $scroll.find(".scroll-con")[0].scrollTop; 
	        var bt = pch * st / psh;

			$bar.show().css({'height':barH,"top":bt});
		}
		else{
			$bar.hide();
		}
	});	
}
//popup
Leo.Popup = function(title,con,popupIn){
	CreatePopup(title,con);
	setTimeout(function(){$("#popup").addClass("show");},100);		
}
//alert(alert/confirm/success/error)
Leo.Alert = function(t,p2,okFn,cancleFn){
	CreateAlert(t,p2);
	Leo.AlertOkFn = okFn;
	Leo.AlertCancleFn = cancleFn;
}
//Look at the big picture
Leo.ImgShow = function(path,imgArr,i,elem){
	CreateImgShow(path,imgArr,i);
	var ot = "50%" , ol="50%";
	if(elem){
		ot = $(elem).offset().top + 61 + "px";
		ol = $(elem).offset().left + 61 + "px";	
	}
	$(".img-box").css({"left":ol,"top":ot});
	setTimeout(function(){$("#img-show").addClass("show");},10);
}
//验证英文
//n表示是否可为空，默认不可为空，传入1表示可为空
Leo.VerifyEn = function(str,n){
	var isNull = n || 0 ,str = str.trim() , re = true;
	if(!isNull && !str)
		re = false;
	if(str){
		var reg=/^[a-zA-Z]+$/;     
        if(!reg.test(str)){    
            re = false;   
        }    
	}
	return re;
}
//验证字符串（英文+数字）
Leo.VerifyString = function(str,n){
	var isNull = n || 0 ,str = str.trim() , re = true;
	if(!isNull && !str)
		re = false;
	if(str){
		var reg=/^[a-zA-Z0-9_]+$/;     
        if(!reg.test(str)){    
            re = false;   
        }    
	}
	return re;
}
//验证中文
Leo.VerifyCn = function(str,n){
	var isNull = n || 0 ,str = str.trim() , re = true;
	if(!isNull && !str)
		re = false;
	if(str){
		var reg=/^[\u0391-\uFFE5]+$/;      
        if(!reg.test(str)){    
            re = false;   
        }    
	}
	return re;
}
//验证邮箱
Leo.VerifyEmail = function(str,n){
	var isNull = n || 0 ,str = str.trim() , re = true;
	if(!isNull && !str)
		re = false;
	if(str){
		var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;       
        if(!reg.test(str)){    
            re = false;   
        }    
	}
	return re;
}
//t表示时间类型，1:yyyy-MM-dd,2：yyyy-MM-dd hh:mm:ss1
Leo.VerifyDate = function(str,t,n){
	var dt = t || 1 , isNull = n || 0, str = str.trim() , re = true;
	if(!isNull && !str)
		re = false;
	if(str){
		var reg=null;
		if(dt==1)
			reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
		else if(dt==2)     
			reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
		var r = str.match(reg);
        if(r==null){    
            re = false;   
        }    
	}
	return re;
}
//当前日期
Leo.DateNow = function(){
	var date = new Date();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	return date.getFullYear() + "-" + (month<10?"0"+month:month) + "-" + (day<10?"0"+day:day);
}
//比较日期大小
Leo.CompareDate = function(d1,d2){
	var date2 = d2 || Leo.DateNow();
	var cd1 = d1.replace(/-/g,"");
	var cd2 = d2.replace(/-/g,"");
	var cpare = parseInt(cd1) - parseInt(cd2);
	return cpare<0 ? -1 : (cpare > 0 ? 1 : 0);
}


/**************************************************************************************************************************/


/* $自定义函数（select、radio、checkbox）
* 3 init, 3 update, 3 get, 3 set
* 共12个
*/
//init
$.fn.InitSelect = function(data,config){
	var $elem = $(this);
	if(!$elem.hasClass("select"))
		$elem.addClass("select");
	$elem.attr("tabindex",10).empty().append("<input type='text' class='sc' readonly=''><div class='sel-list scroll sc'><ul class='scroll-con'></ul><div class='scroll-bar'></div></div>");	
	
	if(!data || data.length==0){
		var nodata = config&&config.nodata ?  config.nodata : "无数据";               //no data text
		$elem.find("ul").append("<li sid='-1'>"+nodata+"</li>");
	}
	else{		
		if(config){
			$elem.data(config);			
			if(config.itemFn){                                  //self create li function
				$.each(data,function(i,o){
					$elem.find("ul").append(config.itemFn(o));
				});
			}
			else{											  //default create li function
				var lid = config.id || "Id", lname=config.name || "Name";
				$.each(data,function(i,o){
					$elem.find("ul").append("<li sid='"+o[lid]+"' sname='"+o[lname]+"'>"+o[lname]+"</li>");
				});
			}
			if(config.search)
				$elem.addClass("select-search").find("input").removeAttr("readonly")
		}
		else{
			$.each(data,function(i,o){
				$elem.find("ul").append("<li sid='"+o["Id"]+"' sname='"+o["Name"]+"'>"+o["Name"]+"</li>");
			});
		}
	}
}
$.fn.InitRadio = function(data,config){
	var $elem = $(this);
	if(!$elem.hasClass("radio-group"))
		$elem.addClass("radio-group");
	$elem.empty();
	if(!data || data.length==0){
		var nodata = config.nodata || "无数据";               
		$elem.append(nodata);
	}
	else{
		if(config){
			$elem.data(config);
			if(config.itemFn){                                  //self create li function
				$.each(data,function(i,o){
					$elem.append(config.itemFn(o));
				});
			}
			else{											  //default create li function
				var rid = config.id || "Id", rname=config.name || "Name";
				$.each(data,function(i,o){
					$elem.append("<a class='radio' rid='"+o[rid]+"' rname='"+o[rname]+"'></a>"+o[rname]);
				});
			}
			if(config.checked>=0)
			{
				$elem.find(".radio").eq(config.checked).addClass("checked");
				if(config.change)
					config.change($elem.GetRadio());
			}
		}
		else{
			$.each(data,function(i,o){
				$elem.append("<a class='radio' rid='"+o["Id"]+"' rname='"+o["Name"]+"'></a>"+o["Name"]);
			});
		}
	}
}
$.fn.InitCheckbox = function(data,config){
	var $elem = $(this);
	if(!$elem.hasClass("radio-group"))
		$elem.addClass("radio-group");
	if(!data || data.length==0){
		var nodata = config.nodata || "无数据";               
		$elem.append(nodata);
	}
	else{
		if(config){
			$elem.data(config);
			if(config.itemFn){                                  //self create li function
				$.each(data,function(i,o){
					$elem.append(config.itemFn(o));
				});
			}
			else{											  //default create li function
				var cid = config.id || "Id", cname=config.name || "Name";
				$.each(data,function(i,o){
					$elem.append("<a class='checkbox' cid='"+o[cid]+"' cname='"+o[cname]+"'></a>"+o[cname]);
				});
			}
		}
		else{
			$.each(data,function(i,o){
				$elem.append("<a class='checkbox' cid='"+o["Id"]+"' cname='"+o["Name"]+"'></a>"+o["Name"]);
			});
		}
	}
}
//update
$.fn.UpdateSelect = function(data,ut,config){
	var $elem = $(this);
	$elem.find("ul").empty();
	$elem.find("input").val("");
	var newConfig = $.extend({},$elem.data(),config);
	$elem.data(newConfig);
	if(!data || data.length==0)
	{
		var nodata = newConfig.nodata || "无数据";
		$elem.find("ul").append("<li sid='-1'>"+nodata+"</li>");
	}
	else
	{
		if(newConfig.itemFn){                                  
			$.each(data,function(i,o){
				$elem.find("ul").append(newConfig.itemFn(o));
			});
		}
		else{											 
			var lid = newConfig.id || "Id", lname=newConfig.name || "Name";
			$.each(data,function(i,o){
				$elem.find("ul").append("<li sid='"+o[lid]+"' sname='"+o[lname]+"'>"+o[lname]+"</li>");
			});
		}
	}	
}
$.fn.UpdateRadio = function(data,config){
	var $elem = $(this),
		newConfig = $.extend({},$elem.data(),config);
	$elem.InitRadio(data,newConfig);
}
$.fn.UpdateCheckbox = function(data,config){
	var $elem = $(this),
		newConfig = $.extend({},$elem.data(),config);
	$elem.InitCheckbox(data,newConfig);
}
//get
$.fn.GetSelect = function(){
	var $elem = $(this), 
		result={id:"",name:""};
	if($elem.find(".active").length==1)
	{
		var $item = $elem.find(".active");
		result.id = $item.attr("sid");
		result.name = $item.attr("sname");
	}
	return result;
}
$.fn.GetRadio = function(){
	var $elem = $(this), 
		result={id:"",name:""};
	if($elem.find(".checked").length==1)
	{
		var $item = $elem.find(".checked");
		result.id = $item.attr("rid");
		result.name = $item.attr("rname");
	}
	return result;
}
$.fn.GetCheckbox = function(){
	var $elem = $(this), 
		result={idArr:[],nameArr:[],itemArr:[]};
	if($elem.find(".checked").length==1)
	{
		var $item = $elem.find(".checked"),
			itemObj = {};
		itemObj.id = $item.attr("cid");
		itemObj.name = $item.attr("cname");
		result.itemArr.push(itemObj);
		result.idArr.push(itemObj.id);
		result.nameArr.push(itemObj.name);
	}
	return result;
}
//set
//select t:1--id,2--name,3--user-defined
$.fn.SetSelect = function(v,t){
	var $elem = $(this);
	$elem.find("input").val("");
	$elem.find("li").removeClass("active");
	if(v)
	{
		var st = t || 1;
		$elem.find("li").each(function(i,o){
			if(st==3)
			{
				var arr = $(o).attr("lf").split(",");
				if(arr.indexOf(v)>=0)
				{
					$(o).addClass("active");
					$elem.find("input").val($(o).attr("lname"));
					return false;
				}
			}
			else
			{
				var fv =  st == 1 ? $(o).attr("sid") : $(o).attr("sname");
				if(fv == v)
				{
					$(o).addClass("active");
					$elem.find("input").val($(o).attr("sname"));
					return false;
				}
			}			
		});
	}
}
//radio t:1--id,2--name; v:hasClass(def-first) null set first 
$.fn.SetRadio = function(v,t){
	var $elem = $(this);
	$elem.removeClass("disable").find(".radio").removeClass("checked");
	v += "";
	if(v)
	{
		var fil = t == 2 ? "rname" : "rid";
		$elem.find(".radio").each(function(i,o){
			if($(o).attr(fil) == v)
			{
				$(o).addClass("checked");
				return false;
			}
		});
	}
	else
	{
		if(!$elem.hasClass("def-first"))
			$elem.find(".radio").eq(0).addClass("checked");
	}
}
$.fn.SetCheckbox = function(v,t){
	var dt = Object.prototype.toString.call(v)
	if(dt!="[object Array]")
	{
		console.log("error: set checkbox - data is error");
		return;
	}
	$elem.find(".checkbox").removeClass("checked");
	var vf = t == 2 ? "cname" : "cid";
	$elem.find(".checkbox").each(function(i,o){
		if(v.indexOf($(o).attr(fil))>=0)
			$(o).addClass("checked");
	});
}


/**************************************************************************************************************************/


/*私有函数，仅供内部使用*/
//ajax请求，封装是为了好统一处理请求的状态
function  RequestFn(t,cf){
	$.ajax({
		url:cf.url,
		type: (t ? "post" : "get"),
		data:(cf.data ? cf.data : {}),
		success:function(result){
			if(result)
			{
				
			}
			else
				console.log("return result is error");				
								
		},
		error:function(result){			
			var text = result.status +" :  "+ result.statusText;
			console.log(text);
		}
	});
}
//生成popup弹出层
function CreatePopup(t,con){
	var str = "<div class='popup' id='popup'>";
	str += "<div class='popup-title'><a class='popup-close'></a><span class='title-text'>"+t+"</span></div>";
	str += "<div class='popup-body'>"+con+"</div>";
	str += "</div>";
	$('body').addClass("readonly").append(str);
}
//生成alert弹出框
function CreateAlert(t,p2){
	var con = "",foot="";
	if(t=="alert" || t=="confirm")
	{
		con = p2
		foot = "<div class='alert-foot'><a class='btn bd blue alert-ok alert-btn' bt='1'>ok</a>"+(t=="confirm"?"<a class='btn bd yellow alert-cancle alert-btn' bt='0'>cancle</a>":"")+"</div>";
	}
	else if(t=="success")
		con = "success";
	else
		con = "error";
	var str = "<div class='alert' id='alert'><i></i><div class='alert-box'><div class='alert-title'>提示</div>";
		str +="<div class='alert-body scroll'><div class='alert-con scroll-con'>";
		str += con;
		str += "</div><div class='scroll-bar'></div></div>";
		str += foot;
		str +="</div></div>";
	$('body').addClass("readonly").append(str);
	setTimeout(function(){$("#alert").addClass("show");},100)

	if(t=="success" || t=="error")
	{
		var time =  parseInt(p2) || 1000;
		setTimeout(function(){
			$("#alert").removeClass("show");
			$("body").removeClass("readonly");
			setTimeout(function(){$("#alert").remove();},500)
		},time+500);
	}
}
//生成img查看元素
function CreateImgShow(path,imgArr,ii){
	console.log(ii);
	var url = path + imgArr[parseInt(ii)] , dotStr="", opeStr="";
	if(imgArr.length>1)
	{
		opeStr = "<a class='img-ope prev'><i class='icon-arrow_left'></i></a><a class='img-ope next'><i class='icon-arrow_right'></i></a>";
		dotStr = "<div class='dot-box'>";
		$.each(imgArr,function(i,o){
			dotStr += "<a class='"+(i==ii?"active":"")+"' ai='"+i+"'></a>"
		});
		dotStr += "</div>";
	}
	var str = "<div class='img-show' id='img-show'>";
	str += "<a class='img-close' id='img-show-close'><i class='icon icon-close'></i></a>";	
	str += opeStr;
	str += "<div class='img-box'><i></i><img src='"+url+"'></img>";
	str += dotStr;
	str += "</div>";
	$('body').addClass("readonly").append(str);
	$("#img-show").data("path",path);
	$("#img-show").data("imgs",imgArr);
	$("#img-show").data("imgIndex",ii);
}
//绑定数据
function ObjectBind(o,d){
	var $o = $(o) , tag = $(o)[0].tagName;
	if(tag == "INPUT" || tag == "TEXTAREA")
	{
		$o.val(d?d:"");
	}
	else if(tag == "SPAN" || tag == "A")
	{
		$o.text(d?d:"--");
	}
	else if(tag == "DIV")
	{
		if($o.hasClass("select"))
		{			
			var t = $o.attr("sv-t") || 1;
			$o.SetSelect(d,t)			
		}
		else if($o.hasClass("radio-group"))
		{
			var t = $o.attr("sv-t") || 1;
			$o.SetRadio(d,t);
		}	
		else if($o.hasClass("checkbox-group"))
		{
			var t = $o.attr("sv-t") || 1;
			$o.SetCheckbox(d,t)
		}	
	}
}
function GetVal(o){
	var $o = $(o) , tag = $(o)[0].tagName;
	if(tag == "INPUT" || tag == "TEXTAREA")
	{
		return $o.val();
	}	
	else if(tag == "SPAN" || tag == "A")
	{
		if($o.attr("val"))
			return $o.attr($o.attr("val"))
		else
			return $o.text();
	}
	else if(tag == "DIV")
	{
		if($o.hasClass("select"))
		{
			return $o.GetSelect().id;
		}
		else if($o.hasClass("radio-group"))
		{
			return $o.GetRadio().id;
		}
		else if($o.hasClass("checkbox-group"))
		{
			return $o.GetCheckbox().idArr;
		}
	}	
}


})();

