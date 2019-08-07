//# sourceURL=table.js
(function(){

Table = function(){
	this.data = null;
}

Table.prototype.ViewDataLoad = function(){
	var obj = this;
	if(!obj.data)
	{
		$.getScript("resource/data/data-table.js",function(){
			obj.data = new TableData();
			obj.dataList = obj.data.list;
			console.log(obj.dataList);
			obj.TableLoad();
		});
	}
	else
	{
		obj.TableLoad();
	}
}

Table.prototype.TableLoad = function(){
	var obj = this;
	var table1Html = "<thead><th>Account</th><th>Name</th><th>Sex</th><th>Birthday</th></thrad><tbody></tbody>";
	$("#table1").append(table1Html);
	$("#table2").append(table1Html);
	$("#table3").append(table1Html);

	$.each(obj.dataList.arr1,function(i,o){
		var tr = "<tr><td>"+o.account+"</td><td>"+o.name+"</td><td>"+(o.sex==1?"man":"woman")+"</td><td>"+o.birth+"</td></tr>";
		$("#table1 tbody").append(tr);
		$("#table2 tbody").append(tr);
		$("#table3 tbody").append(tr);
	});

	obj.TablePagingLoad(obj.dataList.arr2);

	obj.MergeTableLoad(obj.dataList.arr3);
}

//分页table
Table.prototype.TablePagingLoad = function(data){
	var obj = this;
	if(!obj.leoTable)
	{
		$.getScript("script/leo-table.js",function(){
			obj.leoTable = new LeoTable();
			obj.leoTable.DataLoad(data,CreateTr);
		});
	}
	else
	{
		obj.leoTable = new LeoTable();
		obj.leoTable.DataLoad(data,CreateTr);
	}		
}

//合并单元格
Table.prototype.MergeTableLoad = function(result){

	$.each(result,function(i,o){
		var ilen = 0, i_tr="";
		$.each(o.child,function(j,jo){
			ilen += jo.child.length;
			$.each(jo.child,function(k,ko){
				var tr = "";
				if(k==0)
				{
					if(j==0)
						tr = "<td rowspan='"+jo.child.length+"'>"+jo.name+"</td><td>"+ko.num+"</td><td>"+ko.name+"</td></tr>";
					else
						tr = "<tr><td rowspan='"+jo.child.length+"'>"+jo.name+"</td><td>"+ko.num+"</td><td>"+ko.name+"</td></tr>"
				}
				else
					tr = "<tr><td>"+ko.num+"</td><td>"+ko.name+"</td></tr>";
				i_tr += tr;
			});
		});
		i_tr = "<tr><td rowspan='"+ilen+"'>"+o.name+"</td>" + i_tr;
		$("#merge-table tbody").append(i_tr);
	});
}

function CreateTr(da){
	var keys = ["number","nameEn","nameCn","state"];
	var tr = "<tr>";
	for(var i=0;i<keys.length;i++){
		tr += "<td>"+da[keys[i]]+"</td>";
	}
	tr += "</tr>";
	return tr;
}

})();