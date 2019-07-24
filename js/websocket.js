var dataPower = [];
var dataPh = [];
var dataTemp = [];
var dataDepth = [];
var dataOrp = [];
var dataCon = [];
var dataOo = [];
var userId = cookieUtil.get("userId")
//alert(userId)
var websocket = null;

    //判断当前浏览器是否支持WebSocket
    if('WebSocket' in window){
//        websocket = new WebSocket("ws://192.168.31.8:8888/getServer");
        websocket = new WebSocket("ws://" + A + "/getServer/"+userId);
    }
    else{
        alert('Not support websocket')
    }

    //连接发生错误的回调方法
    websocket.onerror = function(){
//        setMessageInnerHTML("error");
    };

    //连接成功建立的回调方法
    websocket.onopen = function(event){
//        setMessageInnerHTML("open");
    };
//$('#websocketData').html('');
    //接收到消息的回调方法
    websocket.onmessage = function(event){
//        setMessageInnerHTML(event.data);
//		console.log(event.data)
//		console.log(JSON.parse(event.data))
		var apr = JSON.parse(event.data);
//		var apr = JSON.stringify(event.data);
//		console.log(apr)
		$('#websocketData').html('');
		var time = apr.time;
//		console.log(time)
		var unixTimestamp = new Date(time) ;
		commonTime = unixTimestamp.toLocaleString();
//		console.log(commonTime)
		
		
		var apr2 = commonTime + '<br/>' + '电量：' + apr.Power + '%' + '<br/>' + 'PH：' + apr.PH + '<br/>' + '温度：' + apr.Temp + '℃' + '<br/>' + '深度：' + apr.Depth + '（米）' + '<br/>' + '电导率：' + apr.CON + '（S/M）' + '<br/>' + '氧化还原电位：' + apr.ORP + '（MV）' + '<br/>' + '溶解氧：' + apr.OO + '（Mg/L）' + '<br/>' 
//		console.log(apr)
		$('#websocketData').html(apr2);

		
//		var data = [];
		var Siper_ph = apr.PH;
//		console.log(Siper_ph);
		dataPh.push(Siper_ph);
//		console.log(data)
		var Siper_power = apr.Power;
		dataPower.push(Siper_power);
		var Siper_temp = apr.Temp;
		dataTemp.push(Siper_temp);
		var Siper_depth = apr.Depth;
		dataDepth.push(Siper_depth);
		var Siper_con = apr.CON;
		dataCon.push(Siper_con);
		var Siper_orp = apr.ORP;
		dataOrp.push(Siper_orp);
		var Siper_oo = apr.OO;
		dataOo.push(Siper_oo);
		$('#ph_pu').html(Siper_ph);
		$('#power_pu').html(Siper_power);
		$('#temp_pu').html(Siper_temp);
		$('#depth_pu').html(Siper_depth);
		$('#con_pu').html(Siper_con);
		$('#orp_pu').html(Siper_orp);
		$('#oo_pu').html(Siper_oo);
		
		$('#power_pu').click(function(){
			data = [];
			var highChartContainerPower=document.getElementById('highChartContainerPower');
			highChartContainerPower.style.cssText="position: fixed;top: 100px;left: 100px;display:block;";
		});
		$('#ph_pu').click(function(){
			data = [];
			var highChartContainerPh=document.getElementById('highChartContainerPh');
			highChartContainerPh.style.cssText="position: fixed;top: 100px;left: 100px;display:block;";
		});
		$('#temp_pu').click(function(){
			data = [];
			var highChartContainerTemp=document.getElementById('highChartContainerTemp');
			highChartContainerTemp.style.cssText="position: fixed;top: 100px;left: 100px;display:block;";
		});
		$('#depth_pu').click(function(){
			data = [];
			var highChartContainerDepth=document.getElementById('highChartContainerDepth');
			highChartContainerDepth.style.cssText="position: fixed;top: 100px;left: 100px;display:block;";
		});
		$('#con_pu').click(function(){
			data = [];
			var highChartContainerCon=document.getElementById('highChartContainerCon');
			highChartContainerCon.style.cssText="position: fixed;top: 100px;left: 100px;display:block;";
		});
		$('#orp_pu').click(function(){
			data = [];
			data.push(Siper_orp);
			var highChartContainerOrp=document.getElementById('highChartContainerOrp');
			highChartContainerOrp.style.cssText="position: fixed;top: 100px;left: 100px;display:block;";
		});
		$('#oo_pu').click(function(){
			data = [];			
			var highChartContainerOo=document.getElementById('highChartContainerOo');
			highChartContainerOo.style.cssText="position: fixed;top: 100px;left: 100px;display:block;";
		});
		
		
//		data.push(Siper_ph);
//		console.log(data);
	
	};

    //连接关闭的回调方法
    websocket.onclose = function(){
//        setMessageInnerHTML("close");
    }

    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function(){
        websocket.close();
    }

    //将消息显示在网页上
    function setMessageInnerHTML(innerHTML){
//        document.getElementById('data').innerHTML += innerHTML + '<br/>';
    }

    //关闭连接
    function closeWebSocket(){
        websocket.close();
    }

//    //发送消息
//    function send(){
//        var message = document.getElementById('text').value;
//        websocket.send(message);
//    }

	window.onload=function(){
		var massage = "websocketId";
		websocket.send(massage);
	};
	//mo ni shuju 视频
//	var vidi = {"code":200,"msg":"成功获取","data":"rtmp://rtmp.open.ys7.com/openlive/e0f4707fa92c484cbd4e4ad31c074bd3"};
//	console.log(vidi);
//	$('#video-src')[0].src=vidi.data;
//	console.log($('#video-src')[0].src)


setInterval(function (){
var chart = null;
//$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/usdeur.json&callback=?', function (data) {

	chart = Highcharts.chart('highChartPower', {
		chart: {
			zoomType: 'x'
		},
		title: {
			text: '当前传感器数值'
		},
		subtitle: {
			text: document.ontouchstart === undefined ?
			'鼠标拖动可以进行缩放' : '手势操作进行缩放'
		},
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		tooltip: {
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%Y-%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		yAxis: {
			title: {
				text: '数据'
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			area: {
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0, Highcharts.getOptions().colors[0]],
						[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
				},
				marker: {
					radius: 2
				},
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				threshold: null
			}
		},
		series: [{
			type: 'area',
			name: '数值',
			data: dataPower,
		}]
	});
},5000);

setInterval(function (){
var chart = null;
//$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/usdeur.json&callback=?', function (data) {

	chart = Highcharts.chart('highChartPh', {
		chart: {
			zoomType: 'x'
		},
		title: {
			text: '当前传感器数值'
		},
		subtitle: {
			text: document.ontouchstart === undefined ?
			'鼠标拖动可以进行缩放' : '手势操作进行缩放'
		},
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		tooltip: {
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%Y-%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		yAxis: {
			title: {
				text: '数据'
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			area: {
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0, Highcharts.getOptions().colors[0]],
						[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
				},
				marker: {
					radius: 2
				},
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				threshold: null
			}
		},
		series: [{
			type: 'area',
			name: '数值',
			data: dataPh,
		}]
	});
},5000);

setInterval(function (){
var chart = null;
//$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/usdeur.json&callback=?', function (data) {

	chart = Highcharts.chart('highChartTemp', {
		chart: {
			zoomType: 'x'
		},
		title: {
			text: '当前传感器数值'
		},
		subtitle: {
			text: document.ontouchstart === undefined ?
			'鼠标拖动可以进行缩放' : '手势操作进行缩放'
		},
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		tooltip: {
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%Y-%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		yAxis: {
			title: {
				text: '数据'
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			area: {
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0, Highcharts.getOptions().colors[0]],
						[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
				},
				marker: {
					radius: 2
				},
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				threshold: null
			}
		},
		series: [{
			type: 'area',
			name: '数值',
			data: dataTemp,
		}]
	});
},5000);

setInterval(function (){
var chart = null;
//$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/usdeur.json&callback=?', function (data) {

	chart = Highcharts.chart('highChartDepth', {
		chart: {
			zoomType: 'x'
		},
		title: {
			text: '当前传感器数值'
		},
		subtitle: {
			text: document.ontouchstart === undefined ?
			'鼠标拖动可以进行缩放' : '手势操作进行缩放'
		},
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		tooltip: {
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%Y-%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		yAxis: {
			title: {
				text: '数据'
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			area: {
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0, Highcharts.getOptions().colors[0]],
						[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
				},
				marker: {
					radius: 2
				},
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				threshold: null
			}
		},
		series: [{
			type: 'area',
			name: '数值',
			data: dataDepth,
		}]
	});
},5000);

setInterval(function (){
var chart = null;
//$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/usdeur.json&callback=?', function (data) {

	chart = Highcharts.chart('highChartOrp', {
		chart: {
			zoomType: 'x'
		},
		title: {
			text: '当前传感器数值'
		},
		subtitle: {
			text: document.ontouchstart === undefined ?
			'鼠标拖动可以进行缩放' : '手势操作进行缩放'
		},
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		tooltip: {
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%Y-%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		yAxis: {
			title: {
				text: '数据'
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			area: {
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0, Highcharts.getOptions().colors[0]],
						[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
				},
				marker: {
					radius: 2
				},
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				threshold: null
			}
		},
		series: [{
			type: 'area',
			name: '数值',
			data: dataOrp,
		}]
	});
},5000);

setInterval(function (){
var chart = null;
//$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/usdeur.json&callback=?', function (data) {

	chart = Highcharts.chart('highChartCon', {
		chart: {
			zoomType: 'x'
		},
		title: {
			text: '当前传感器数值'
		},
		subtitle: {
			text: document.ontouchstart === undefined ?
			'鼠标拖动可以进行缩放' : '手势操作进行缩放'
		},
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		tooltip: {
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%Y-%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		yAxis: {
			title: {
				text: '数据'
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			area: {
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0, Highcharts.getOptions().colors[0]],
						[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
				},
				marker: {
					radius: 2
				},
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				threshold: null
			}
		},
		series: [{
			type: 'area',
			name: '数值',
			data: dataCon,
		}]
	});
},5000);

setInterval(function (){
var chart = null;
//$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/usdeur.json&callback=?', function (data) {

	chart = Highcharts.chart('highChartOo', {
		chart: {
			zoomType: 'x'
		},
		title: {
			text: '当前传感器数值'
		},
		subtitle: {
			text: document.ontouchstart === undefined ?
			'鼠标拖动可以进行缩放' : '手势操作进行缩放'
		},
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		tooltip: {
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%Y-%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		yAxis: {
			title: {
				text: '数据'
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			area: {
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0, Highcharts.getOptions().colors[0]],
						[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
				},
				marker: {
					radius: 2
				},
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				threshold: null
			}
		},
		series: [{
			type: 'area',
			name: '数值',
			data: dataOo,
		}]
	});
},5000);