	$('#back').click(function(){
//		alert('hello')
		document.location.href='chart.html'
	});
	
	
var data = {"code":"200","msg":"查询成功","data":[{"Power": 0,"Temp": 0,"Depth": 0,"PH": 0,"OO": 0,"CON": 0,"ORP": 0}]};
window.onload=function(){
	var vivd = data.data;
//	console.log(vivd)
	for(var i=0; i<vivd.length; i++){
		var str = vivd
		console.log(str)
		var mi ='PH：' + str[0].PH + '<br/>' + 'OO：' + str[0].OO + '<br/>' + 'CON：' + str[0].CON + '<br/>' +'电量（Power）：' + str[0].Power + '<br/>' + '温度（Temp）：' + str[0].Temp + '<br/>' + '深度（Depth）：' + str[0].Depth + '<br/>' +  '氧化还原电位（ORP）：' + str[0].ORP
//		var str = '<ul><li>' + vivd[i] + '<br/>' + '</li></ul>';
		console.log(mi);
		$('#data').append(mi);
	}
};