
(function(){

TableData = function(){

	this.list = {
		arr1:[],
		arr2:[],
		arr3:[]
	};
	this.GetData();
}

TableData.prototype.GetData = function(){
	var obj = this;
	var arr1_name=["joke","sarry","larbarn","sunny","farlaiy"],
		arr1_ac=["jk01","sa","lar007","sny","flaiy"],
		arr1_bt=["1990-08-05","1989-12-22","1989-10-10","1990-02-09","1990-05-06"];
	for(var i=1;i<6;i++){
		obj.list.arr1.push({id:i,account:arr1_ac[i-1],name:arr1_name[i-1],"sex":i%2,birth:arr1_bt[i-1]});
	}

	var state = ["in","out","ing","end"];
	for(var i=1;i<116;i++)
	{
		var num = i<10 ? "00"+i : (i<100 ? "0"+i : i) ;
		var cn = Math.floor(Math.random()*26);
		var st = state[Math.floor(Math.random()*4)];
		obj.list.arr2.push({number:num,nameEn:GetNameEn(),nameCn:GetNameCn(),state:st});
	}

	for(var i=1;i<3;i++)
	{
		var coli = {name:"row " + i, child:[]};
		for(var j=1;j<3;j++)
		{
			var colj = {name:"row-0"+i+"-0"+j,child:[]};
			var num = Math.floor(Math.random()*3)+1;
			for(var k=1;k<=num;k++){
				var colk = {num:"0"+k,name:"row 0"+i+"-0"+j+"-0"+k};
				colj.child.push(colk);
			}
			coli.child.push(colj);
		}
		obj.list.arr3.push(coli);
	}
}

function GetNameEn(){
	var en = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var nl = Math.floor(Math.random()*3) + 5;
	var rn = "";
	for(var i=0;i<nl;i++)
	{
		rn += en[Math.floor(Math.random()*26)];
	}
	return rn;
}

function GetNameCn(){
	var fn = ["赵","钱","孙","李","周","吴","郑","王","张","武","刘","马","魏","余","田"];
	var sn = ["三","四","五","六","丽","婷","强","文","书","华","丹","飞","丰","超","然"];
	var tn = ["琪","茂","帅","玉","丽","婷","强","文","书","华","丹","飞","丰","超","然"];
	var cnArr = [fn,sn,tn], rn="";
	var nl = Math.floor(Math.random*3) == 2 ? 2 : 3;
	for(var i=0;i<nl;i++)
	{
		rn += cnArr[i][Math.floor(Math.random()*15)];
	}
	return rn;
}


})();