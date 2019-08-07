(function(){

Annular = function()
{
	
}

Annular.prototype.Init = function()
{
	var config = {width:260,height:260};	
	var svg = d3.select('#annular');
	var r = [40,60,80];
	var colors = ["#ffff0f","#30ffe2","#ff2582"];

	var rail = svg.append('g').classed('rail',true).attr('transform','translate('+config.width/2+','+config.height/2+')');

	var hcg1 = svg.append('g').classed('hover-g',true).attr('transform','translate('+config.width/2+','+config.height/2+')');
	var hc1 = hcg1.append('circle').classed('hover-circle',true).style('display','none')
		.attr('r',10)
		.attr('fill','#716e90');
	
	var railNew = svg.append('g').classed('railnew',true).attr('transform','translate('+config.width/2+','+config.height/2+')');

	var arcPath1 = d3.svg.arc().innerRadius(r[0]).outerRadius(r[0]+3);
	var arcPath2 = d3.svg.arc().innerRadius(r[1]).outerRadius(r[1]+3);
	var arcPath3 = d3.svg.arc().innerRadius(r[2]).outerRadius(r[2]+3);

	var parPath = [arcPath1,arcPath2,arcPath3];

	var pieRail = {startAngle:0,endAngle:Math.PI*2};

	
	var hcg2 = svg.append('g').classed('hover-g',true).attr('transform','translate('+config.width/2+','+config.height/2+')');
	

	var pieNewRails = [
			{startAngle:Math.PI*2*0.25,endAngle:Math.PI*2*0.875},
			{startAngle:Math.PI*2*0.25,endAngle:Math.PI*2*0.73},
			{startAngle:Math.PI*2*0.25,endAngle:Math.PI*2*0.625}
		]

	var bgRails = rail.selectAll('path').data(r)
		.enter()
		.append('path')
		.attr('d',function(d,i){return parPath[i](pieRail)})
		.attr('fill','#47446f');

	var dataRails = railNew.selectAll('path').data(pieNewRails)
		.enter()
		.append('path')		
		.attr('fill',function(d,i){return colors[i]})
		.transition()		
		.delay(function(d,i){return i*200;})
		.duration(800)
		.ease("linear-in")		
		.attrTween("d",function(d,i){
			var inter = d3.interpolate(d.startAngle,d.endAngle);
			return function(t){
				d.endAngle = inter(t);
				return parPath[i](d);
			}
		});

	
	var hc2 = hcg2.append('circle').classed('hover-circle',true).style('display','none')
		.attr('r',5)
		.attr('fill','#ffffff');	


}

})();