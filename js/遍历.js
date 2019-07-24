			
	function loadData(){
        //发出请求
        $.getJSON('demo.js', function(data){//得到内容
            var ret = [];

            $.each(data, function(i, entry){//遍历返回的数据
                var html='<tr>';
                 //html+='<td  bgcolor="#FFFFFF">'+entry['dm']+'</td>';
                html+='<td  bgcolor="#FFFFFF">'+entry['name1']+'</td>';
                html+='<td  bgcolor="#FFFFFF">'+entry['shuzhi1']+'</td>';
                html+='<td  bgcolor="#FFFFFF">'+entry['danwei1']+'</td>';
				//html+='<td  bgcolor="#FFFFFF">'+entry['fenge']+'</td>';
                html+='<td  bgcolor="#FFFFFF">'+entry['name2']+'</td>';
                html+='<td  bgcolor="#FFFFFF">'+entry['shuzhi2']+'</td>';
                html+='<td  bgcolor="#FFFFFF">'+entry['danwei2']+'</td>';
				
				html+='<td  bgcolor="#FFFFFF">'+entry['name3']+'</td>';
				html+='<td  bgcolor="#FFFFFF">'+entry['shuzhi3']+'</td>';
				html+='<td  bgcolor="#FFFFFF">'+entry['danwei3']+'</td>';
				
				html+='<td  bgcolor="#FFFFFF">'+entry['name4']+'</td>';
				html+='<td  bgcolor="#FFFFFF">'+entry['shuzhi4']+'</td>';
				html+='<td  bgcolor="#FFFFFF">'+entry['danwei4']+'</td>';
                              
                html+='</tr>';
                ret.push(html);//存入数组
            });


            $('#data').html('<table>' + ret.join('') + '</table>');//将数组合并后,写入 #title 中

        });
    }

   $(document).ready(function(){//DOMReady时触发
        loadData();//先执行一次,将内容显示出来
        setInterval(loadData, 1000);//然后每隔1秒执行一次,时间请根据需要自己修改
   });

