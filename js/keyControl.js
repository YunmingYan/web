window.onload=function(){
	var w = 87;
	var a = 65;
	var s = 83;
	var d = 68;
	var j = 74;
	var k = 75;
	var keyCode = Event.keyCode
	console.log(event.keyCode);
	var deviceId = cookieUtil.get("deviceId");
		if(event.keyCode == 87){
			$.ajax({
				type:'get',
				url:'http://'+ A +'/device/move?direction=Forward&value=1&admin=1&deviceId="'+ deviceId +'"',
				dataType:'JSON',
				data:{

				},
				success:function(){

			},
				error:function(){
					console.log('前进请求失败')
				   },

			});
		}else if(event.keyCode == a){
			$.ajax({
					type:'get',
					url:'http://'+ A +'/device/move?direction=Left&value=1&admin=1',
					dataType:'JSON',
					data:{
						
					},
					success:function(){
					
				},
					error:function(){
						console.log('左转请求失败')
					   },
					
				});			
		}else if(event.keyCode == s){
			$.ajax({
					type:'get',
					url:'http://'+ A +'/device/move?direction=Stop&value=1&admin=1',
					dataType:'JSON',
					data:{
						
					},
					success:function(){
					
				},
					error:function(){
						console.log('停止请求失败')
					   },
					
				});			
		}else if(event.keyCode == d){
			$.ajax({
					type:'get',
					url:'http://'+ A +'/device/move?direction=Right&value=1&admin=1',
					dataType:'JSON',
					data:{
						
					},
					success:function(){
					
				},
					error:function(){
						console.log('右转请求失败')
					   },
					
				});
		}else if(event.keyCode == j){
			$.ajax({
					type:'get',
					url:'http://'+ A +'/device/move?direction=Up&value=0&admin=1',
					dataType:'JSON',
					data:{
						
					},
					success:function(){
					
				},
					error:function(){
						console.log('上浮请求失败')
					   },
					
				});			
		}else if(event.keyCode == k){
			$.ajax({
					type:'get',
					url:'http://'+ A +'/device/move?direction=Down&value=1&admin=1',
					dataType:'JSON',
					data:{
						
					},
					success:function(){
					
				},
					error:function(){
						console.log('下沉请求失败')
					   },
					
				});			
		}else{
			alert('error')
		}
	};