var vivd1 = {"code":"200","msg":"查询成功","data":[{"id":8.19},{"id":8.23},{"id":8.30},{"id":8.21},{"id":8.20},{"id":8.24},{"id":8.25}]};
var vivd2 = {"code":"200","msg":"查询成功","data":[{"id":24.4},{"id":24.8},{"id":23.6},{"id":24.5},{"id":23.5},{"id":23.5},{"id":23.7}]};
//console.log(vivd);
var data1=[];
var data2=[];
$(document).ready(function(){
	$ajax({
		url:'',
		datatype:'json',
		type:'post',
		async:'false',
		fucceed:function(data){
			for(var i=0;i<=data.length;i++){
				var str=data[i];
				data1=[];
				data1.push(str);
				console.log(str);
			}
		}
		
	})
});

var strList1=vivd1.data;
//var data1=[];
for(var i=0; i<vivd1.data.length;i++){
			var str = vivd1.data[i].id;
//			console.log(str);
			data1.push(str);
//			console.log(data1);
//			chart.data.datasets.data.JSON.parse(str);
//			console.log(chart.data.datasets.data);
			};

var strList2=vivd2.data;
//var data2=[];
for(var i=0; i<vivd2.data.length;i++){
			var str = vivd2.data[i].id;
//			console.log(str);
			data2.push(str);
//			console.log(data1);
//			chart.data.datasets.data.JSON.parse(str);
//			console.log(chart.data.datasets.data);
			};

var lineChartData = {
	labels : ["1 MON","2 TUE","3 WED","4 THU","5 FRI","6 SAT","7 SUN"],
	datasets : [
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(237,90,92,0.5)",
			pointColor : "rgba(237,90,92,0.5)",
			pointStrokeColor : "#fff",
//			data : [8.38,8.39,8.46,8.50,8.42,8.45,8.43]
			data :data1,
		}
	]

}

var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData);

function Ph(){
	$('#canvas').remove();
	$('#remove-canvas').append('<canvas id="canvas" width="450px" height="200px"></canvas>');
	$('#canvas').css({"background":"none"});
	var lineChartData = {
		labels : ["1 MON","2 TUE","3 WED","4 THU","5 FRI","6 SAT","7 SUN"],
		datasets : [
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(237,90,92,0.5)",
				pointColor : "rgba(237,90,92,0.5)",
				pointStrokeColor : "#fff",
				data : data1,
			}
		]

	}

	var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData);
}
function Temp(){
$('#canvas').remove();
$('#remove-canvas').append('<canvas id="canvas" width="450px" height="200px"></canvas>');
$('#canvas').css({"background":"none"});
var lineChartData = {
	labels : ["1 MON","2 TUE","3 WED","4 THU","5 FRI","6 SAT","7 SUN"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(97,190,243,0.5)",
			pointColor : "rgba(97,190,243,0.5)",
			pointStrokeColor : "#fff",
			data : data2,
		}
	]

}
var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData);
}