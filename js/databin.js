window.onload=setInterval(function(){
	var deviceId = cookieUtil.get("deviceId")
	$.ajax({
		
//		comsole.log(deviceId)
		type:'GET',
//		url:'../JSON/user/getDevices/success.json',
		url:'http://'+ A + '/data/testdata',
		datatype:'JSON',
		data:{
			deviceId:231608256,
		},
		success:function(data){
			console.log(data);
		},
		error:function(){
			
		}
	});
},10000);