			
	function loadData(){
        //��������
        $.getJSON('demo.js', function(data){//�õ�����
            var ret = [];

            $.each(data, function(i, entry){//�������ص�����
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
                ret.push(html);//��������
            });


            $('#data').html('<table>' + ret.join('') + '</table>');//������ϲ���,д�� #title ��

        });
    }

   $(document).ready(function(){//DOMReadyʱ����
        loadData();//��ִ��һ��,��������ʾ����
        setInterval(loadData, 1000);//Ȼ��ÿ��1��ִ��һ��,ʱ���������Ҫ�Լ��޸�
   });

