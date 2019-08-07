(function(){
	
Board = function(){

}
var power = 73.6;
var boardSvg ,boardValue;
Board.prototype.Init = function(){

	var id = "#board",
		data= power;
	var width = 500,
		height = 300,
		out1 = 122,
		in1 = 120,
		out2 = 104,
		in2 = 86,
		out3 = 58,
		in3 = 0,
		arcMin = -Math.PI*3/4,
		arcMax = Math.PI*3/4,
		bgData = [1],
		numerArr = [0,10,20,30,40,50,60,70,80,90,100],
		color = ["#9143ff","#9143ff","#f696b1"],
		svg = d3.select(id).append("g").attr("transform","translate("+width/2+","+height/2+")");

		boardSvg = svg;

		svg.append("g").attr("class","arcBg");
		svg.append("g").attr("class","pointer");
		svg.append("g").attr("class","arcCenter");
		svg.append("g").attr("class","board-number");
		svg.append("g").attr("class","number");
		svg.append("g").attr("class","title");

		var arc1 = d3.svg.arc()
					.innerRadius(in1)
					.outerRadius(out1)
					.startAngle(arcMin)
					.endAngle(arcMax);

		var arcPaht1 = svg.select(".arcBg").append("path")
					.attr("fill",color[0])
					.attr("d",arc1);

		var arc2 = d3.svg.arc()
					.innerRadius(in2)
					.outerRadius(out2)
					.startAngle(arcMin)
					.endAngle(arcMax);
		var arcPaht2 = svg.select(".arcBg").append("path")
					.attr("fill",color[1])
					.attr("d",arc2);

		var arc3 = d3.svg.arc()
					.innerRadius(in3)
					.outerRadius(out3)
					.startAngle(-Math.PI)
					.endAngle(Math.PI);
		var arcPaht3 = svg.select(".arcCenter").append("path")
					.datum({endAngle:arcMax})
					.attr("fill",color[2])
					.attr("d",arc3);

		var currentAngle = data*(arcMax-arcMin)+arcMin;

		var pointer = svg.select(".pointer").append("line")
						.attr("class","pointer-line")
						.attr("x1",0)
						.attr("y1",0)
						.attr("x2",0)
						.attr("y2",-112)
						.style("transform","rotate("+AngleToDeg(0)+"deg)")
						.transition()
						.duration(500)
						.styleTween("transform",function(){
							var interpolate = d3.interpolate(0,data);
							return function(t){
								return "rotate("+AngleToDeg(interpolate(t))+"deg)";
							}
						});

		var boardNumber = svg.select(".board-number").selectAll("text")
						.data(numerArr)
						.enter()
						.append("text")
						.attr("class","board-number")
						.attr("text-anchor","middle")
						.text(function(d){return d})
						.style("transform",function(d,i){
							var rotate = "rotate("+AngleToDeg(d)+"deg)";
							return rotate +" translate(0,-130px)";
						});

		var number = svg.select(".number").append("text")
						.attr("class","show-number")
						.text(data)
						.attr("dy", ".35em")
						.attr("text-anchor","middle");
		
		boardValue = data;

		var t1 = setInterval(updateBoard,5000);
}

function updateBoard(){

//	var num = parseInt(Math.random()*10000)/100;

	boardSvg.select(".pointer").select("line")
		.transition()
		.duration(500)
		.styleTween("transform",function(){
			var interpolate = d3.interpolate(boardValue,num);
			return function(t){
				return "rotate("+AngleToDeg(interpolate(t))+"deg)";
			}
		});
	boardSvg.select(".number").select("text").text(num)

	setTimeout(function(){boardValue = num;},500); 
}

//aaaaaaaaaaa

//bbbbbbbbbbb
function AngleToDeg(data){
	var argle_half = 3/4 * 180 , deg;
	deg = (data-50) / 50 * argle_half;
	return deg;
}

})();