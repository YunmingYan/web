//# sourceURL=fomrStyle.js

(function(){

FormStyle = function(){
	
}

FormStyle.prototype.ViewDataLoad = function(){
	var obj = this;

	var radioData1 = [{Id:1,Name:"option1"},{Id:2,Name:"option2"},{Id:3,Name:"option3"}];
	$("#radio-demo1").InitRadio(radioData1);

	var checkData1 = [{Id:"1",Name:"tag1"},{Id:"2",Name:"tag2"},{Id:"3",Name:"tag3"}];
	$("#check-demo1").InitCheckbox(checkData1);
	$("#check-tags").InitCheckbox(checkData1);
//aaaaaaaaaaaaa
	//选择器
	$("#select-demo1").html('<select class="select" id="select-demo1" name="fish">' +
								'<option value="X" name="虾">虾</option>' +
								'<option value="LFY" name="罗非鱼">罗非鱼</option>' +
								'<option value="LY" name="蜡鱼">蜡鱼</option>' +
							'</select>');
	$("#select-waterColor").html('<select class="select" id="select-waterColor" name="color">' +
							'<option value="" name="茶色或茶褐色">茶色或茶褐色</option>' +
							'<option value="" name="褐色">褐色</option>' +
							'<option value="" name="黑色">黑色</option>' +
							'<option value="" name="青苔水">青苔水</option>' +
							'<option value="" name="澄清水">澄清水</option>' +
							'<option value="" name="黄色水">黄色水</option>' +
							'<option value="" name="白浊水">白浊水</option>' +
							'<option value="" name="黄泥水">黄泥水</option>' +
							'<option value="" name="淡绿色或翠绿色">淡绿色或翠绿色</option>' +
						'</select>');
	$("#select-demo2").html('<select class="select" id="select-demo2" name="fish">' +
							'<option value="X" name="虾">虾</option>' +
							'<option value="LFY" name="罗非鱼">罗非鱼</option>' +
							'<option value="LY" name="蜡鱼">蜡鱼</option>' +
						'</select>');
	//初始化dataBox
	$('#dataBox').html('开始养殖日期：' + 0 + '<br/>' + '已经养殖天数：' + 0 + '<br/>' + '距离成熟天数：' + 0);
	
//bbbbbbbbbbbbb
//	var selectData1 = [{Id:"1",Name:"虾"},{Id:"2",Name:"罗非鱼"},{Id:"3",Name:"蜡鱼"},{Id:"4",Name:""},{Id:"5",Name:""},{Id:"6",Name:""}];
//	var selectData2 = [{Id:"1",Name:"茶色或茶褐色"},{Id:"2",Name:"褐色"},{Id:"3",Name:"黑色"},{Id:"4",Name:"青苔水"},{Id:"5",Name:"澄清水"},{Id:"6",Name:"黄色水"},{Id:"7",Name:"白浊水"},{Id:"8",Name:"黄泥水"},{Id:"9",Name:"淡绿色或翠绿色"}];
//	$("#select-demo1").InitSelect(selectData1);
//	$("#select-demo2").InitSelect(selectData1);
//	$("#select-waterColor").InitSelect(selectData2);
//	$("#select-search").InitSelect(selectData1,{search:true});
//	$("#select-search").InitSelect(selectData2,{search:true});

	var deptData=[{Id:"1",Name:"Developemnt"},{Id:"2",Name:"Marketing"},{Id:"3",Name:"Technology"},{Id:"4",Name:"Finance"}];
	$("#select-dept").InitSelect(deptData,{change:obj.DeptChange});

	FormStyle.postData = [
		{Pid:"1",Post:[{Id:"1",Name:"dept1-child1"},{Id:"2",Name:"dept1-child2"},{Id:"3",Name:"dept1-child3"}]},
		{Pid:"2",Post:[{Id:"21",Name:"Market-child1"},{Id:"22",Name:"Market-child2"},{Id:"23",Name:"Market-child3"}]},
		{Pid:"3",Post:[{Id:"31",Name:"Technology-child1"},{Id:"32",Name:"Technology-child2"},{Id:"33",Name:"Technology-child3"},{Id:"34",Name:"Technology-child4"}]}
	]
	$("#select-post").InitSelect();

	var sexData = [{Id:1,Name:"man"},{Id:2,Name:"woman"}];
	$("#man-raido").InitRadio(sexData,{checked:0});
}

FormStyle.prototype.DeptChange = function(v){
	var dept2post = FormStyle.postData.filter(function(d){return d.Pid == v.id;});
	var post = dept2post.length==1 ? dept2post[0].Post : [];
	$("#select-post").UpdateSelect(post);
}

})();

function Btn11(){
	
	//养殖资料
	
		alert('提交成功')
		
	//鱼类数据
		
		var fishName = $('#select-demo1').find("option:selected").text();
//		console.log(fishName);
		var xia = "虾";
		var LFY = "罗非鱼";
		var LY = "蜡鱼";
//		console.log(xia)
		if(fishName == xia){
			$('#tip').html('当前养殖环境良好，适合虾的生长。' + '<br/>' + '虾生长适合的温度:' + 'null' + '<br/>' + '虾生长适合的PH:' + 'null' + '<br/>' + '虾生长适合的溶氧量:' + 'null' + '<br/>' + '虾生长适合的氨氮值:' + 'null' + '<br/>' + '虾生长适合的亚硝酸盐含量:' + 'null')	
		}else if(fishName ==  LFY){
			$('#tip').html('当前养殖环境良好，适合罗非鱼的生长。' + '<br/>' + '罗非鱼养殖建议的温度:' + '21-30℃' + '<br/>' + '罗非鱼养殖建议的PH:' + '7.5-8' + '<br/>' + '罗非鱼养殖建议的溶氧量(DO):' + '5-5.5mg/L或以上' + '<br/>' + '罗非鱼养殖建议的氧化还原电位（ORP）:' + '+424/mv' + '<br/>' + '罗非鱼养殖建议的电导率:' + '0.2mg/L')	
		}else if(fishName == LY){
			$('#tip').html('当前养殖环境良好，适合蜡鱼的生长。' + '<br/>' + '蜡鱼生长适合的温度:' + 'null' + '<br/>' + '蜡鱼生长适合的PH:' + 'null' + '<br/>' + '蜡鱼生长适合的溶氧量:' + 'null' + '<br/>' + '蜡鱼生长适合的氨氮值:' + 'null' + '<br/>' + '蜡鱼生长适合的亚硝酸盐含量:' + 'null')	
		}
		else{
			$('#tip').html('');
		};
		
	//养殖周数
//		var wek = $("input[name=feed-wek]");
		var wek = $('#wek').val();
//		console.log(wek);
				
	//投放时间
		var beDay = $('#beginDay').val();
//		console.log(beDay)

		$('#dataBox').html('开始养殖日期：' + beDay +  '<br/>' + '已经养殖天数：' + 1 + '<br/>' + '距离成熟天数：' + wek*7)
};

function submint(){
	alert('提交成功')
}