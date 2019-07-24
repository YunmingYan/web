//function history(){
//	   $.ajax({
//			type:"GET",
//			url:'http://193.112.11.189:8888/data/pastHour?callback=showData',
//			url:'http://193.112.11.189:8888/data/pastHour',
//		   url:'../JSON/data.json',
//			dataType: 'jsonp',
//		   data:{
//
//		   },
//			headers: {
//
//			},
//			success: function(data){
//				var unixTimestamp = new Date(data.data[0].time) ;
//				commonTime = unixTimestamp.toLocaleString();
//				console.log(commonTime);
//				console.log(data);
//				var str = commonTime + '<br/>' +  '电量：' + data.data[0].power + '%' + '<br/>' + 'PH：' + data.data[0].ph + '<br/>' + '温度：' + data.data[0].temp + '℃' + '<br/>' + '深度：' + data.data[0].depth + '（米）' + '<br/>' + '电导率：' + data.data[0].con + '（S/M）' + '<br/>' + '氧化还原电位：' + data.data[0].orp + '（MV）' + '<br/>' + '溶解氧：' + data.data[0].oo + '（Mg/L）' + '<br/>' 
//				$('#history').html(str);
//				
//				var barChartData = {
//						labels : ["过去","","","","","","现在"],
//						datasets : [
//							{
//								fillColor : "rgba(220,220,220,0.5)",
//								strokeColor : "rgba(220,220,220,1)",
//								data : [8.6,8.6,8.6,8.5,8.6,8.5,8.7],
//							},
//							{
//								fillColor : "rgba(151,187,205,0.5)",
//								strokeColor : "rgba(151,187,205,1)",
//								data : [26.4,26.5,26.4,26.4,26.4,26.4,26.4],
//							}
//						]
//
//					};
//					var myLine = new Chart(document.getElementById("canvasB").getContext("2d")).Bar(barChartData);
//
//			}, 
//			error: function(data){
//				console.log(data);
//
//			}
//		});
//	}
//
var barChartData = {
	labels : ["过去","","","","","","现在"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			data : [1,1,1,1,1,1,1]
		},
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			data : [1,1,1,1,1,1,1]
		}
	]

};
var myLine = new Chart(document.getElementById("canvasB").getContext("2d")).Bar(barChartData);

var lineChartData = {
	labels : ["1 MON","2 TUE","3 WED","4 THU","5 FRI","6 SAT","7 SUN"],
	datasets : [
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(237,90,92,0.5)",
			pointColor : "rgba(237,90,92,0.5)",
			pointStrokeColor : "#fff",
			data : [7.38,7.39,7.46,7.50,7.42,7.45,7.43]
		}
	]

};
var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData);

function Ph(){
	$('#canvas').remove();
	$('#remove-canvas').append('<canvas id="canvas" width="500px" height="200px"></canvas>');
	$('#canvas').css({"background":"none"});
	var lineChartData = {
		labels : ["1 MON","2 TUE","3 WED","4 THU","5 FRI","6 SAT","7 SUN"],
		datasets : [
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(237,90,92,0.5)",
				pointColor : "rgba(237,90,92,0.5)",
				pointStrokeColor : "#fff",
				data : [7.38,7.39,7.46,7.50,7.42,7.45,7.43]
			}
		]

	}
var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData);
}

function Temp(){
$('#canvas').remove();
$('#remove-canvas').append('<canvas id="canvas" width="500px" height="200px"></canvas>');
$('#canvas').css({"background":"none"});
var lineChartData = {
	labels : ["1 MON","2 TUE","3 WED","4 THU","5 FRI","6 SAT","7 SUN"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(97,190,243,0.5)",
			pointColor : "rgba(97,190,243,0.5)",
			pointStrokeColor : "#fff",
			data : [24.4,24.8,23.6,24.5,23.5,23.5,23.7]
		}
	]
}
var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData);
}


function history(){
$('#canvasB').remove();
$('#remove-canvasB').append('<canvas id="canvasB" width="500px" height="200px"></canvas>');
$('#canvasB').css({"background":"none"});
	
	var data = {"code": 200,"msg": "已获取最近一个小时的传感器数据",
				"data": [{"time": 1552991783677,"depth": 1,"power": 70.6,"temp": 26.4,"orp": 0,"ph": 8.6,"oo": 1.16,"con": 0},
						{"time": 1552991783677,"depth": 3,"power": 90.6,"temp": 36.4,"orp": 342.43,"ph": 7.6,"oo": 13.65,"con": 1.6},
						{"time": 1552991783677,"depth": 3,"power": 90.6,"temp": 28.4,"orp": 342.43,"ph": 7.6,"oo": 13.65,"con": 1.6}]
			   };
	var unixTimestamp = new Date(data.data[0].time) ;
				commonTime = unixTimestamp.toLocaleString();
				console.log(commonTime);
				console.log(data);
				var str = '电量：' + data.data[0].power + '%' + '<br/>' + 'PH：' + data.data[0].ph + '<br/>' + '温度：' + data.data[0].temp + '℃' + '<br/>' + '深度：' + data.data[0].depth + '（米）' + '<br/>' + '电导率：' + data.data[0].con + '（S/M）' + '<br/>' + '氧化还原电位：' + data.data[0].orp + '（MV）' + '<br/>' + '溶解氧：' + data.data[0].oo + '（Mg/L）' + '<br/>' 
				$('#history').html(str);
	
	var barChartData = {
	labels : ["过去","","","","","","现在"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			data : [8.24,8.35,8.36,8.42,8.38,8.38,]
		},
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			data : [26,25,26,25,25,26,]
		}
	]
	};
var myLine = new Chart(document.getElementById("canvasB").getContext("2d")).Bar(barChartData);
}

function history2(){
	$('#history').html('');
}