(function(){

Radar = function(){

}

Radar.prototype.Init = function()
{
	var width = 300, height = 300;
    // 创建一个分组用来组合要画的图表元素
    var main = d3.select('#radar').append('g').classed('main', true)
      .attr('transform', "translate(" + width/2 + ',' + height/2 + ')');

    var data = {
 		fieldNames: ['南','东南','东','东北','北','西北','西','西南'],
 		values: [[57,46,35,35,45,75,66,55],[63,76,75,74,56,42,30,36]]
	};

	var radius = 100;
	total = 8;
	level = 4;

	rangeMin = 0;
	rangeMax = 200;
	arc = 2 * Math.PI;
	var onePiece = arc/total;

	var polygons = {
		webs: [],
		webPoints: []
	};

	for(var k=level;k>0;k--)
	{
		var webs = '', webPoints = [];
		var r = radius/level * k;
		for(var i=0;i<total;i++)
		{
			var x = r * Math.sin(i*onePiece),
				y = r * Math.cos(i*onePiece);
			webs += x + ',' + y + ' ';
			webPoints.push({x:x,y:y});
		}
		polygons.webs.push(webs);
		polygons.webPoints.push(webPoints);
	}

	//绘制网轴
	var webs = main.append('g').classed("webs",true);
	webs.selectAll("polygon").data(polygons.webs)
		.enter()
		.append("polygon")
		.attr("points",function(d){return d;});

	//绘制纵轴
	var lines = main.append('g').classed("lines",true);
	lines.selectAll("line").data(polygons.webPoints[0])
		.enter()
		.append("line")
		.attr("x1",0).attr("y1",0)
		.attr("x2",function(d){return d.x})
		.attr("y2",function(d){return d.y});

	var rScale = d3.scale.linear().domain([0,100]).range([0,radius]);
	var areasData = [];
	var values = data.values;
	for(var i = 0 ;i<values.length;i++)
	{
		var value = values[i], area = '', points = [];
		for(var k=0;k<total;k++)
		{
			var r = rScale(value[k]);
			var x = r*Math.sin(k*onePiece),
			y = r *Math.cos(k*onePiece);
			area += x + "," +y + " ";
			points.push({x:x,y:y});
		}		
		areasData.push({polygon:area,points:points});
	}

	var areas = main.append('g').classed("areas",true);
	areas.selectAll("g")
		.data(areasData)
		.enter()
		.append('g')
		.attr("class",function(d,i){return 'area'+(i+1);});
	for(var i=0;i<areasData.length;i++)
	{
		var area = areas.select('.area'+(i+1)) , areaData = areasData[i];
		area.append('polygon')
			.attr('points',areaData.polygon)
			.attr('stroke',function(d,index){return getColor(i);})
			.attr("fill",function(d,index){return getColor(i)});
		/*// 绘制雷达图区域下的点 
		 var circles = area.append('g')
		   .classed('circles', true);
		 circles.selectAll('circle')
		   .data(areaData.points)
		   .enter()
		   .append('circle')
		   .attr('cx', function(d) {
		    return d.x;
		   })
		   .attr('cy', function(d) {
		    return d.y;
		   })
		   .attr('r', 3)
		   .attr('stroke', function(d, index) {
		    return getColor(i);
		   }); */
	}

	var textPoints = [];
	var textRadius = radius +30;
	for(var i=0;i<total;i++)
	{
		var x = textRadius*Math.sin(i*onePiece);
		var y = textRadius*Math.cos(i*onePiece);
		textPoints.push({x:x,y:y})
	}

	var texts = main.append('g').classed("texts",true);
	texts.selectAll("text").data(textPoints)
		.enter()
		.append('text')
		.attr('x',function(d){return d.x})
		.attr('y',function(d){return d.y})
		.attr('dx','-1em')
		.attr('dy',function(d){return d.y>=4?"0":"0.5em"})
		.text(function(d,i){return data.fieldNames[i]});


	function getColor(idx) {
    var palette = [
     '#f9f90a', '#f61b78','#5ab1ef', '#ffb980', '#d87a80',
     '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
     '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
     '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
    ]
    return palette[idx % palette.length];
   }
}

})();