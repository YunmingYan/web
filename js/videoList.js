// JavaScript Document
	var rtmp = '';
	var appKey='231fa5f4982e4d1cb5d2aeb03026b2a7';
	var appSecret='8960216eef839d38527aa725493c7c43';
	var accessToken='';
//	alert('step1')
	$.ajax({
		type:'POST',
		async:false,
		url:'https://open.ys7.com/api/lapp/token/get',
		data:{
			appKey:appKey,
			appSecret:appSecret,
		},
		success:function(data){
			console.log('获取accessToken')
			console.log(data)
			var access = data.data.accessToken
			accessToken = access
//			console.log(accessToken)
		},
		error:function(data){
			var msg = data.msg
			console.log(msg)
		},
	});
	console.log('得到accessToken：');
	console.log(accessToken);
	cookieUtil.unset("accessToken");
	cookieUtil.set("accessToken",accessToken);
//	
//	$.ajax({
//		type:'POST',
//		async:false,
//		url:'https://open.ys7.com/api/lapp/live/video/list',
//		dataType:'JSON',
//		data:{
//			accessToken:accessToken,
//		},
//		success:function(data){
//			console.log('获取rtmp地址：')
//			console.log(data)
//			rtmp = 'rtmp://rtmp.open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.hd'
//		},
//		error:function(data){
//			
//		},
//	});
////	console.log(rtmp)
//	$('#video')[0].src = rtmp
// 	var player = new EZuikit.EZUIPlayer('myPlayer');
