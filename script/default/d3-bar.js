
(function(){

Bar = function(){

}

Bar.prototype.Init = function(){

	var colors = ["#30ffe2","#ffff0f","#ff2582","#4b4871"]
	var data = {
		up:[30,50,45,80,44,22,66,74,40,58,70,90],
		down:[48,28,20,40,88,62,43,56,76,69,47,36]
	}

	var config={
		left:10,
		top:10,
		height:222,
		width:500,
		barAh:110,
		step:20,
		width:6
	}

	var svg = d3.select("#bar");
	var yScale = d3.scale.linear().domain([0,100]).range([0,100]);
	var xScale = d3.scale.linear().domain([1,data.up.length]).range([20,470]);

	var g1 = svg.append("g").classed("bar1",true);
	g1.selectAll("rect").data(data.up)
		.enter()
		.append("rect")
		.attr('x',function(d,i){return xScale(i+1);})
		.attr('width',config.width)
		.attr('rx',3)
		.attr('ry',3)
		.attr('fill','url(#bar1)')
		.transition()
		.delay(function(d,i){return i*50;})
		.duration(500)
		.ease("elastic")
		.attrTween("y",function(d){
			var interpolate = d3.interpolate(config.barAh,config.barAh-yScale(d))
			return function(t){
				return interpolate(t);
			}
		})
		.delay(function(d,i){return i*100;})
		.duration(1000)
		.attrTween("height",function(d){
			var interpolate = d3.interpolate(0,yScale(d))
			return function(t){
				return interpolate(t);
			}
		});

	var g2 = svg.append("g").classed("bar2",true);
	g2.selectAll("rect").data(data.down)
		.enter()
		.append("rect")
		.attr('x',function(d,i){return xScale(i+1);})
		.attr('y',112)
		.attr('width',config.width)
		.attr('rx',3)
		.attr('ry',3)
		.attr('fill','url(#bar2)')
		.transition()
		.delay(function(d,i){return i*100;})
		.duration(1000)
		.ease("elastic")
		.attrTween("height",function(d){
			var interpolate = d3.interpolate(0,yScale(d))
			return function(t){
				return interpolate(t);
			}
		});

}

})();