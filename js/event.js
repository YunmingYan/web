$(function(){
	var deviceId = cookieUtil.get("deviceId");
//	alert(id);
	
	$('#video-on').click(function(){
//		console.log('#video-src'.src)
//		alert('video-on')
		$.ajax({
			tepe:"GET",
			url:'http://'+ A +'/device/openOff?name=Camera&value=1&admin=1&deviceId='+deviceId,
			dataType:'JSON',
			data:{
				
		},
		success:function(data){
//			alert('video-on')
			var code = data.code
			var msg = data.msg
			if(code===400){
				alert(msg)
		}
		}
		,error:{
			  
		},
		});
	});
	$('#video-off').click(function(){
//		alert('video-off')
		$.ajax({
			tepe:"GET",
			url:'http://'+ A + '/device/openOff?name=Camera&value=0&admin=1&deviceId='+deviceId,
			dataType:'JSON',
			data:{
		},success:function(data){
			var code = data.code
			var msg = data.msg
			if(code===400){
				alert(msg)
		}
		},error:{
			  
		},
		});
	});
	$('#light-on').click(function(){
//		alert('light-on')
		$.ajax({
			tepe:"GET",
			url:'http://'+ A + '/device/openOff?name=LED&value=1&admin=1&deviceId='+deviceId,
			dataType:'JSON',
			data:{
		},success:function(data){
			var code = data.code
			var msg = data.msg
			if(code===400){
				alert(msg)
		}
		},error:{

		},
		});
	});
	$('#light-off').click(function(){
//		alert('light-off')
		$.ajax({
			tepe:"GET",
			url:'http://'+ A + '/device/openOff?name=LED&value=0&admin=1&deviceId='+deviceId,
			dataType:'JSON',
			data:{
		},success:function(data){
			var code = data.code
			var msg = data.msg
			if(code===400){
				alert(msg)
		}
		},error:{
			  
		},
		});
	});
	$('#State-on').click(function(){
//		alert('light-off')
		$.ajax({
			tepe:"GET",
			url:'http://'+ A + '/device/openOff?name=State&value=1&admin=1&deviceId='+deviceId,
			dataType:'JSON',
			data:{
			
		},success:function(data){
			var code = data.code
			var msg = data.msg
			if(code===400){
				alert(msg)
		}
		},error:{
			  
		},
		});
	});
	$('#State-off').click(function(){
//		alert('light-off')
		$.ajax({
			tepe:"GET",
			url:'http://'+ A + '/device/openOff?name=State&value=0&admin=1&deviceId='+deviceId,
			dataType:'JSON',
			data:{

		},success:function(data){
			var code = data.code
			var msg = data.msg
			if(code===400){
				alert(msg)
		}
		},error:{
			  
		},
		});
	});
	$('#up').click(function(){
//		alert('light-off')
		$.ajax({
			tepe:"GET",
			url:'http://'+ A + '/device/move?direction=Up&value=1&admin=1&deviceId='+deviceId,
			dataType:'JSON',
			data:{

		},success:function(data){
			var code = data.code
			var msg = data.msg
			if(code===400){
				alert(msg)
		}
		},error:{
			  
		},
		});
	});
	$('#down').click(function(){
//		alert('light-off')
		$.ajax({
			tepe:"GET",
			url:'http://'+ A + '/device/move?direction=Down&value=1&admin=1&deviceId='+deviceId,
			dataType:'JSON',
			data:{

		},success:function(data){
			var code = data.code
			var msg = data.msg
			if(code===400){
				alert(msg)
		}
		},error:{
			  
		},
		});
	});
	$('#left').click(function(){
//		alert('light-off')
		$.ajax({
			tepe:"GET",
			url:'http://'+ A + '/device/move?direction=Left&value=1&admin=1&deviceId='+deviceId,
			dataType:'JSON',
			data:{

		},success:function(data){
			var code = data.code
			var msg = data.msg
			if(code===400){
				alert(msg)
		}
		},error:{
			  
		},
		});
	});
	$('#right').click(function(){
//		alert('light-off')
		$.ajax({
			tepe:"GET",
			url:'http://'+ A + '/device/move?direction=Right&value=1&admin=1&deviceId='+deviceId,
			dataType:'JSON',
			data:{

		},success:function(data){
			var code = data.code
			var msg = data.msg
			if(code===400){
				alert(msg)
		}
		},error:{
			  
		},
		});
	});
	$('#forward').click(function(){
//		alert('light-off')
		$.ajax({
			tepe:"GET",
			url:'http://'+ A + '/device/move?direction=Forward&value=1&admin=1&deviceId='+deviceId,
			dataType:'JSON',
			data:{

		},success:function(data){
			var code = data.code
			var msg = data.msg
			if(code===400){
				alert(msg)
		}
		},error:{
			  
		},
		});
	});
	$('#back').click(function(){
//		alert('light-off')
		$.ajax({
			tepe:"GET",
			url:'http://'+ A + '/device/move?direction=Backward&value=1&admin=1&deviceId='+deviceId,
			dataType:'JSON',
			data:{

		},success:function(data){
			var code = data.code
			var msg = data.msg
			if(code===400){
				alert(msg)
		}
		},error:{
			  
		},
		});
	});
	$('#stop').click(function(){
//		alert('light-off')
		$.ajax({
			tepe:"GET",
			url:'http://'+ A + '/device/move?direction=Stop&value=1&admin=1&deviceId='+deviceId,
			dataType:'JSON',
			data:{

		},success:function(data){
			var code = data.code
			var msg = data.msg
			if(code===400){
				alert(msg)
		}
		},error:{
			  
		},
		});
	});
	
});