(function(){

Polyline = function()
{

}

var val1 =[];
var val2 =[];
var vivd1 = {"code":"200","msg":"查询成功","data":[{"id":8.19},{"id":8.23},{"id":8.30},{"id":8.21},{"id":8.20},{"id":8.24},{"id":8.25}]};
var vivd2 = {"code":"200","msg":"查询成功","data":[{"id":24.4},{"id":24.8},{"id":23.6},{"id":24.5},{"id":23.5},{"id":23.5},{"id":23.7}]};
var data1 = vivd1.data
var data2 = vivd2.data
console.log(data1)
console.log(data2)
for(var i=0; i<data1.length; i++){
	var str1 = data1[i].id
	console.log(str1)
	val1.push(str1)
}
for(var i=0; i<data2.length; i++){
	var str2 = data2[i].id
	console.log(str2)
	val2.push(str2)
}
console.log(val1)
console.log(val2)

Polyline.prototype.Init = function(id)
{
	var w = $(id).parents(".item-con").width() , h = $(id).parents(".item-con").height();
	var data = [
		{
			key:"red",
			val:val1,
		},
		{
			key:"yellow",
			val:val2,
		}		
	];

	var week = ["MON","TUE","WED","THU","FRI","SAT","SUN"];
	
	var config = {
		length:8,
		left:50,
		bottom:60,
		height:h,
		width:w
	}

	var svg = d3.select(id).attr('viewBox','0 0 '+config.width+' '+config.height);

	var maxValue = 0;
	for(var i=0;i<data.length;i++)
	{
		var tm = d3.max(data[i].val);
		maxValue = maxValue > tm ? maxValue : tm;
	}
	var yScale = d3.scale.linear().domain([0,maxValue*1.1]).range([config.height-config.bottom,0]);
	var xScale = d3.scale.linear().domain([0,config.length-1]).range([0,config.width]);

	var splits = svg.append('g').classed('split',true)
		.selectAll('line').data(data[0].val)
		.enter()
		.append('line')
		.attr('x1',function(d,i){return xScale(i)})
		.attr('y1',0)
		.attr('x2',function(d,i){return xScale(i)})
		.attr('y2',config.height)
		.attr('class',function(d,i){return i==0||i==config.length-1 ? 'ln' : 'ls'});

	var linePath = d3.svg.line()
	.x(function(d,i){return xScale(i);})
	.y(function(d){return yScale(d);})
	.interpolate("basis");

	svg.append('g').classed('polyline',true)
		.selectAll('path').data(data)
		.enter()
		.append('path')
		.attr('class','polyline')
		.attr('d',function(d){return linePath(d.val)})
		.attr("fill","none")
		.attr("stroke-width","3px")
		.attr("stroke",function(d,i){return "url(#linear"+i+")"})
		.attr('filter','url(#f1)');

	var yAxis = d3.svg.axis().scale(yScale).orient("left");
	svg.append("g").attr("class","axis-y")
		.attr("transform","translate("+config.left+",0)")
		.call(yAxis);

	var step = config.width / (config.length-1);
	var xAxis = svg.append('g').attr('class','axis-x')
		.attr("transform","translate(0,"+(config.height-config.bottom/2)+")")
		.selectAll("text").data(week)
		.enter()
		.append("text")
		.text(function(d,i){return (i+1) + " " + d})
		.attr('x',function(d,i){return step/2 + step*i})
		.attr('dx','-2em')
		.attr('dy','1em');

	var hg = svg.append("g").classed('hover',true)
		.style('display','none');
	var hb = hg.append("rect").classed('hover-box',true)
		.attr('width',step)
		.attr('height',config.height+10);

	var vs =config.height/4;	
	var t1 = hg.append('g').classed('t1',true).classed('htext',true);
	var t2 =  hg.append('g').classed('t2',true).classed('htext',true).attr('transform','translate(0,'+vs+')');
	var t3 =  hg.append('g').classed('tt',true).classed('htext',true).attr('transform','translate(0,'+vs*2+')');
	t1.append('text').text(data[0].key).attr('x',step/2).attr('y',vs);
	t2.append('text').text(data[1].key).attr('x',step/2).attr('y',vs);
	t3.append('text').text('Total').attr('x',step/2).attr('y',vs);	
	var v1t = t1.append('text').classed('tnum',true).text(data[0].key).attr('x',step/2).attr('y',vs*0.7);
	var v2t = t2.append('text').classed('tnum',true).text(data[1].key).attr('x',step/2).attr('y',vs*0.7);
	var vtt = t3.append('text').classed('tnum',true).text('Total').attr('x',step/2).attr('y',vs*0.7);	


	svg.append("rect")
		.attr("class","overlay")
		.attr("x",0)
		.attr("y",0)
		.attr("width",config.width)
		.attr("height",config.height)
		.on("mouseover",function(){
			hg.style("display",null);
		})
		.on("mouseout",function(){
			hg.style("display","none");
			d3.selectAll(splits[0]).attr('stroke','#2c2a4f');
			d3.selectAll(xAxis[0]).classed('xAxis-h',false);
		})
		.on("mousemove",mousemove);

	function mousemove()
	{
		var mouseX = d3.mouse(this)[0];
		var mouseY = d3.mouse(this)[1];

		var x0 = xScale.invert(mouseX);
		var index = Math.floor(x0);
		hg.attr('transform','translate('+step*index+',-10)');

		v1t.text(data[0].val[index+1]);
		v2t.text(data[1].val[index+1]);
		vtt.text(data[0].val[index+1]+data[1].val[index+1]);

		d3.selectAll(xAxis[0]).classed('xAxis-h',false);
		d3.select(xAxis[0][index]).classed('xAxis-h',true);

		d3.selectAll(splits[0]).attr('stroke','#2c2a4f');
		d3.select(splits[0][index]).attr('stroke','#504177');
		d3.select(splits[0][index+1]).attr('stroke','#504177');

		
	}
}

})();