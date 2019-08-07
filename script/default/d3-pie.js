(function(){

Pie = function(){

}

Pie.prototype.Init = function(){

	var id = "#svg-pie",
		data = [["type01",45],["type02",23],["type03",18],["type04",14]];

	var width = 400, height = 300 , bgArr=[1];

	var svg = d3.select(id).append("g")
				.attr("transform","translate(200,150)");

	svg.append("g").attr("class","bg-border")
	svg.append("g").attr("class","pies");
	svg.append("g").attr("class","labelT");
	svg.append("g").attr("class","labelB");
	svg.append("g").attr("class","lines");
	svg.append("g").attr("class","points");
	svg.append("g").attr("class","bg-center");

	var sum = d3.sum(data,function(d){return d[1]});

	var pie = d3.layout.pie().value(function(d){return d[1];}).sort(null);

	var pieBg = d3.layout.pie().sort(null);

	var pieData = pie(data);

	var outerRadius = 90, innerRadius = 0;

	var arc = d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius);
	var arcBor = d3.svg.arc().innerRadius(90).outerRadius(95);
	var arcCen = d3.svg.arc().innerRadius(0).outerRadius(35);

	var liArc = d3.svg.arc().innerRadius(75).outerRadius(75);			//line起始点		
	var loArc = d3.svg.arc().innerRadius( 110).outerRadius(110);        //line折点

	var color = ["#00db58","#ffba2a","#ff1a56","#00acee"];

	var arcs = svg.select(".pies").selectAll("g")
				.data(pieData)
				.enter()
				.append("g")
				.append("path")
				.attr("fill",function(d,i){return color[i];})
				.transition()
				.delay(function (d, i) { return i * 300; })
		    	.duration(300)
		    	.ease("linear")
			    .attrTween('d', function (d) {
			        var i = d3.interpolate(d.startAngle, d.endAngle);
			        return function (t) {
			            d.endAngle = i(t);
			            return arc(d);
			        }
			    });

	var arcs = svg.select(".bg-border").selectAll("path")
				.data(pieBg(bgArr))
				.enter()
				.append("path")
				.attr("fill","rgba(255,255,255,0.05)")
				.transition()
				.delay(200)
		    	.duration(1200)
		    	.ease("linear")
			    .attrTween('d', function (d) {
			        var i = d3.interpolate(d.startAngle, d.endAngle);
			        return function (t) {
			            d.endAngle = i(t);
			            return arcBor(d);
			        }
			    });

	var arcs = svg.select(".bg-center").selectAll("path")
				.data(pieBg(bgArr))
				.enter()
				.append("path")
				.attr("fill","rgba(255,255,255,0.3)")
				.transition()
				.delay(200)
		    	.duration(1200)
		    	.ease("linear")
			    .attrTween('d', function (d) {
			        var i = d3.interpolate(d.startAngle, d.endAngle);
			        return function (t) {
			            d.endAngle = i(t);
			            return arcCen(d);
			        }
			    });


	function midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }	

	var point = svg.select(".points").selectAll("circle")
					.data(pieData)
					.enter()
					.append("circle")
					.attr("class","pie-line-point")
					.attr("cx",function(d){
						return liArc.centroid(d)[0];
					})
					.attr("cy",function(d){
						return liArc.centroid(d)[1];
					})
					.transition()
					.delay(function (d, i) { return i * 200 + 1200; })
					.duration(200)		
					.attrTween("r",function(d){
						var interpolate = d3.interpolate(0,4);
						return function(t){
							return interpolate(t);
						}
					});

	var line = svg.select(".lines").selectAll("polyline")
				.data(pieData)
				.enter()
				.append("polyline")
				.attr("class","pie-line");
	line.transition()
		.delay(function (d, i) { return i * 200 + 1300; })
		.duration(200)		
		.attrTween("points",function(d){
			var interpolate = d3.interpolate(0,130);
			this._current = interpolate(0);
			return function(t){
				var ex = interpolate(t);
				var pos = loArc.centroid(d);
				pos[0] += ex*(midAngle(d)<Math.PI?1:-1);
				return [liArc.centroid(d), loArc.centroid(d), pos]
			};
		});

	var textT = svg.select(".labelT").selectAll("text")
					.data(pieData)
					.enter()
					.append("text")
					.attr("class","pie-text")
					.attr("dy", "-.6em")
					.text(function(d){return d.data[0]+"："+parseInt(d.value/sum*100) + "%";})
					.attr("transform",function(d){
						var pos = loArc.centroid(d);
						pos[0] += 126*(midAngle(d)<Math.PI?1:-1);
						return "translate("+ pos +")";
					})
					.attr("text-anchor",function(d){
						return midAngle(d) < Math.PI ? "end":"start";
					})
					.attr("opacity",0)
					.transition()
					.delay(function (d, i) { return i * 200 + 1400; })
					.duration(100)
					.attrTween("opacity",function(d){
						var interpolate = d3.interpolate(0,1);
						return function(t){
							return interpolate(t);
						}
					});

	var textB = svg.select(".labelB").selectAll("text")
					.data(pieData)
					.enter()
					.append("text")
					.attr("class","pie-text")
					.attr("dy", "1.3em")
					.text(function(d){return "数量："+d.value;})
					.attr("transform",function(d){
						var pos = loArc.centroid(d);
						pos[0] += 126*(midAngle(d)<Math.PI?1:-1);
						return "translate("+ pos +")";
					})
					.attr("text-anchor",function(d){
						return midAngle(d) < Math.PI ? "end":"start";
					})
					.attr("opacity",0)
					.transition()
					.delay(function (d, i) { return i * 200 + 1400; })
					.duration(100)
					.attrTween("opacity",function(d){
						var interpolate = d3.interpolate(0,1);
						return function(t){
							return interpolate(t);
						}
					});

}


})();