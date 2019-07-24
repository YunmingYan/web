window.onload=function(){
	var dataTest = '当前养殖环境良好。' + '\n' +
					'各项检测数据为：' + '\n' +
					'PH：' + '7.63' + '\n' +
				 	'温度：' + '18℃' + '\n' +
				 	'溶氧量：' + '5.2mg/L' + '\n' +
				  	'氧化还原电位（ORP）：' + '+426/mv' + '\n' +
				  	'电导率：' + '0.22mg/L'		 
	alert(dataTest)
	$("#select-demo1").html('<select class="select" id="select-demo1" name="fish">' +
								'<option class="option-bgc" name="虾">虾</option>' +
								'<option class="option-bgc" name="罗非鱼">罗非鱼</option>' +
								'<option class="option-bgc" name="蜡鱼">蜡鱼</option>' +
								'<option class="option-bgc" name="剑鱼">剑鱼</option>' +
								'<option class="option-bgc" name="海鲈鱼">海鲈鱼</option>' +
								'<option class="option-bgc" name="黄花鱼">黄花鱼</option>' +
								'<option class="option-bgc" name="梭鱼">梭鱼</option>' +
								'<option class="option-bgc" name="鲟鱼">鲟鱼</option>' +
								'<option class="option-bgc" name="老虎斑鱼">老虎斑鱼</option>' +
								'<option class="option-bgc" name="石斑鱼">石斑鱼</option>' +
								'<option class="option-bgc" name="白斑鱼">白斑鱼</option>' +
								'<option class="option-bgc" name="仓鱼">仓鱼</option>' +
								'<option class="option-bgc" name="章鱼">章鱼</option>' +
								'<option class="option-bgc" name="带鱼">带鱼</option>' +
								'<option class="option-bgc" name="草鱼">草鱼</option>' +
								'<option class="option-bgc" name="清江鱼">清江鱼</option>' +
							'</select>');
	$("#select-waterColor").html('<select class="select" id="select-waterColor" name="color">' +
							'<option class="option-bgc" name="茶色或茶褐色">茶色或茶褐色</option>' +
							'<option class="option-bgc" name="褐色">褐色</option>' +
							'<option class="option-bgc" name="黑色">黑色</option>' +
							'<option class="option-bgc" name="青苔水">青苔水</option>' +
							'<option class="option-bgc" name="澄清水">澄清水</option>' +
							'<option class="option-bgc" name="黄色水">黄色水</option>' +
							'<option class="option-bgc" name="白浊水">白浊水</option>' +
							'<option class="option-bgc" name="黄泥水">黄泥水</option>' +
							'<option class="option-bgc" name="淡绿色或翠绿色">淡绿色或翠绿色</option>' +
						'</select>');
	$("#select-demo2").html('<select class="select" id="select-demo2" name="fish">' +
							'<option class="option-bgc" name="虾">虾</option>' +
							'<option class="option-bgc" name="罗飞鱼">罗飞鱼</option>' +
							'<option class="option-bgc" name="蜡鱼">蜡鱼</option>' +
							'<option class="option-bgc" name="剑鱼">剑鱼</option>' +
							'<option class="option-bgc" name="海鲈鱼">海鲈鱼</option>' +
							'<option class="option-bgc" name="黄花鱼">黄花鱼</option>' +
							'<option class="option-bgc" name="梭鱼">梭鱼</option>' +
							'<option class="option-bgc" name="鲟鱼">鲟鱼</option>' +
							'<option class="option-bgc" name="老虎斑鱼">老虎斑鱼</option>' +
							'<option class="option-bgc" name="石斑鱼">石斑鱼</option>' +
							'<option class="option-bgc" name="白斑鱼">白斑鱼</option>' +
							'<option class="option-bgc" name="仓鱼">仓鱼</option>' +
							'<option class="option-bgc" name="章鱼">章鱼</option>' +
							'<option class="option-bgc" name="带鱼">带鱼</option>' +
							'<option class="option-bgc" name="草鱼">草鱼</option>' +
							'<option class="option-bgc" name="清江鱼">清江鱼</option>' +
						'</select>');
	$('#dataBox').html('开始养殖日期：' + 0 + '<br/>' + '已经养殖天数：' + 0 + '<br/>' + '距离成熟天数：' + 0);
};
function Btn11(){
	alert('提交成功');
	//养殖资料
		var weekA = $('#ipt-week').val();
//		console.log(weekA);
		var timeA = $('#ipt-time').val();
//		console.log(timeA);
		$('#dataBox').html('开始养殖日期：' + timeA + '<br/>' + '已经养殖天数：' + 1 + '<br/>' + '距离成熟天数：' + weekA*7)
	//鱼类数据
		var fishName = $('#select-demo1').find("option:selected").text();
		console.log(fishName);
		var xia = "虾";
		var LFY = "罗非鱼";
		var LY = "蜡鱼";
		var JY = "剑鱼";
		var HLY = "海鲈鱼";
		var HHY = "黄花鱼";
		var SY = "梭鱼";
		var XY = "鲟鱼";
		var LHBY = "老虎斑鱼";
		var SBY = "石斑鱼";
		var BBY = "白斑鱼";
		var CY = "仓鱼";
		var ZY = "章鱼";
		var DY = "带鱼";
		var CY = "草鱼";
		var QJY= "清江鱼";
//		console.log(xia)
		if(fishName == xia){
			$('#tip').html('虾生长适合的温度:' + 'null' + '<br/>' + '虾生长适合的PH:' + 'null' + '<br/>' + '虾生长适合的溶氧量:' + 'null' + '<br/>' + '虾生长适合的氨氮值:' + 'null' + '<br/>' + '虾生长适合的亚硝酸盐含量:' + 'null');
		}else if(fishName == LFY){
			$('#tip').html('罗非鱼养殖建议的温度:' + '21-30℃' + '<br/>' + '罗非鱼养殖建议的PH:' + '7.5-8' + '<br/>' + '罗非鱼养殖建议的溶氧量(DO):' + '5-5.5mg/L或以上' + '<br/>' + '罗非鱼养殖建议的氧化还原电位（ORP）:' + '+424/mv' + '<br/>' + '罗非鱼养殖建议的电导率:' + '0.2mg/L');
		}else if(fishName == LY){
			$('#tip').html('蜡鱼生长适合的温度:' + 'null' + '<br/>' + '蜡鱼生长适合的PH:' + 'null' + '<br/>' + '蜡鱼生长适合的溶氧量:' + 'null' + '<br/>' + '蜡鱼生长适合的氨氮值:' + 'null' + '<br/>' + '蜡鱼生长适合的亚硝酸盐含量:' + 'null');
		}else if(fishName == JY){
			$('#tip').html('剑鱼养殖建议的PH:' + '7.5-8.6' + '<br/>' + '剑鱼养殖建议的溶氧量(DO):' + '4.5-5.5mg/L或以上' + '<br/>' + '剑鱼养殖建议的氧化还原电位（ORP）:' + '-109~+424/mv' + '<br/>' + '剑鱼养殖建议水深:' + '22~24' + '<br/>' + '剑鱼养殖建议的电导率:' + '0.1~0.3mg/L');
		}else if(fishName == HLY){
			$('#tip').html('海鲈鱼养殖建议的PH:' + '7.5-8.6' + '<br/>' + '海鲈鱼养殖建议的溶氧量(DO):' + '4.5-5.5mg/L或以上' + '<br/>' + '海鲈鱼养殖建议的氧化还原电位（ORP）:' + '-109~+424/mv' + '<br/>' + '海鲈鱼养殖建议水深:' + '22~24' + '<br/>' + '海鲈鱼养殖建议的电导率:' + '0.1~0.3mg/L');
		}else if(fishName == HHY){
			$('#tip').html('黄花鱼养殖建议的PH:' + '7.5-8.6' + '<br/>' + '黄花鱼养殖建议的溶氧量(DO):' + '4.5-5.5mg/L或以上' + '<br/>' + '黄花鱼养殖建议的氧化还原电位（ORP）:' + '-109~+424/mv' + '<br/>' + '黄花鱼养殖建议水深:' + '22~24' + '<br/>' + '黄花鱼养殖建议的电导率:' + '0.1~0.3mg/L');
		}else if(fishName == SY){
			$('#tip').html('梭鱼养殖建议的PH:' + '7.5-8.6' + '<br/>' + '梭鱼养殖建议的溶氧量(DO):' + '4.5-5.5mg/L或以上' + '<br/>' + '梭鱼养殖建议的氧化还原电位（ORP）:' + '-109~+424/mv' + '<br/>' + '梭鱼养殖建议水深:' + '22~24' + '<br/>' + '梭鱼养殖建议的电导率:' + '0.1~0.3mg/L');
		}else if(fishName == XY){
			$('#tip').html('鲟鱼养殖建议的PH:' + '7.5-8.6' + '<br/>' + '鲟鱼养殖建议的溶氧量(DO):' + '4.5-5.5mg/L或以上' + '<br/>' + '鲟鱼养殖建议的氧化还原电位（ORP）:' + '-109~+424/mv' + '<br/>' + '鲟鱼养殖建议水深:' + '22~24' + '<br/>' + '鲟鱼养殖建议的电导率:' + '0.1~0.3mg/L');
		}else if(fishName == LHBY){
			$('#tip').html('老虎石斑养殖建议的PH:' + '7.5-8.6' + '<br/>' + '老虎石斑鱼养殖建议的溶氧量(DO):' + '4.5-5.5mg/L或以上' + '<br/>' + '老虎石斑鱼养殖建议的氧化还原电位（ORP）:' + '-109~+424/mv' + '<br/>' + '老虎石斑鱼养殖建议水深:' + '22~24' + '<br/>' + '老虎石斑鱼养殖建议的电导率:' + '0.1~0.3mg/L');
		}else if(fishName == SBY){
			$('#tip').html('石斑鱼养殖建议的PH:' + '7.5-8.6' + '<br/>' + '石斑鱼养殖建议的溶氧量(DO):' + '4.5-5.5mg/L或以上' + '<br/>' + '石斑鱼养殖建议的氧化还原电位（ORP）:' + '-109~+424/mv' + '<br/>' + '石斑鱼养殖建议水深:' + '22~24' + '<br/>' + '石斑鱼养殖建议的电导率:' + '0.1~0.3mg/L');
		}else if(fishName == BBY){
			$('#tip').html('白斑鱼养殖建议的PH:' + '7.5-8.6' + '<br/>' + '白斑鱼养殖建议的溶氧量(DO):' + '4.5-5.5mg/L或以上' + '<br/>' + '白斑鱼养殖建议的氧化还原电位（ORP）:' + '-109~+424/mv' + '<br/>' + '白斑鱼养殖建议水深:' + '22~24' + '<br/>' + '白斑鱼养殖建议的电导率:' + '0.1~0.3mg/L');
		}else if(fishName == CY){
			$('#tip').html('仓鱼养殖建议的PH:' + '7.5-8.6' + '<br/>' + '仓鱼养殖建议的溶氧量(DO):' + '4.5-5.5mg/L或以上' + '<br/>' + '仓鱼养殖建议的氧化还原电位（ORP）:' + '-109~+424/mv' + '<br/>' + '仓鱼养殖建议水深:' + '22~24' + '<br/>' + '仓鱼养殖建议的电导率:' + '0.1~0.3mg/L');
		}else if(fishName == ZY){
			$('#tip').html('章鱼养殖建议的PH:' + '7.5-8.6' + '<br/>' + '章鱼养殖建议的溶氧量(DO):' + '4.5-5.5mg/L或以上' + '<br/>' + '章鱼养殖建议的氧化还原电位（ORP）:' + '-109~+424/mv' + '<br/>' + '章鱼养殖建议水深:' + '22~24' + '<br/>' + '章鱼养殖建议的电导率:' + '0.1~0.3mg/L');
		}else if(fishName == DY){
			$('#tip').html('带鱼养殖建议的PH:' + '7.5-8.6' + '<br/>' + '带鱼养殖建议的溶氧量(DO):' + '4.5-5.5mg/L或以上' + '<br/>' + '带鱼养殖建议的氧化还原电位（ORP）:' + '-109~+424/mv' + '<br/>' + '带鱼养殖建议水深:' + '22~24' + '<br/>' + '带鱼养殖建议的电导率:' + '0.1~0.3mg/L');
		}else if(fishName == CY){
				$('#tip').html('清江鱼养殖建议的PH:' + '7.5-8.6' + '<br/>' + '清江鱼养殖建议的溶氧量(DO):' + '4.5-5.5mg/L或以上' + '<br/>' + '清江鱼养殖建议的氧化还原电位（ORP）:' + '-109~+424/mv' + '<br/>' + '清江鱼养殖建议水深:' + '22~24' + '<br/>' + '清江鱼养殖建议的电导率:' + '0.1~0.3mg/L');
		}else if(fishName == QJY){
			$('#tip').html('草鱼养殖建议的PH:' + '7.5-8.6' + '<br/>' + '带鱼养殖建议的溶氧量(DO):' + '4.5-5.5mg/L或以上' + '<br/>' + '带鱼养殖建议的氧化还原电位（ORP）:' + '-109~+424/mv' + '<br/>' + '带鱼养殖建议水深:' + '22~24' + '<br/>' + '带鱼养殖建议的电导率:' + '0.1~0.3mg/L');
		}
		else{
			$('#tip').html('');
		};
		
	
};

function data(){
	alert('提交成功');
	//养殖周数
		var iptWeek = $("#ipt-week").val();
		var iptTime = $('#ipt-time').val();

		$('#dataBox').html('开始养殖日期：' + iptTime +  '<br/>' + '已经养殖天数：' + 1 + '<br/>' + '距离成熟天数：' + iptWeek*7)
}