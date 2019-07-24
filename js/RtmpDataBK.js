window.onload=function(){
				var AppKey = '952b321600b3453fae7d5435e7e29da2'
				var Secret = 'ae1e6b8f0be161939f3bd9ed5d7656b3'
				$.ajax({
					type:'POST',
					url:'https://open.ys7.com/api/lapp/token/get?',
					dataType:"JSON",
					data:{
						appKey:AppKey,
						appSecret:Secret,
					},success:function(data){
						console.log(data)
						var dataAcc = data.data.accessToken
						console.log(dataAcc)
						$.ajax({
							type:'POST',
							url:"https://open.ys7.com/api/lapp/live/video/list?",
							dataType:'',
							data:{
								accessToken:dataAcc,
							},success:function(page){
								console.log(page)
								var rtmp = page.data[0].rtmp
								console.log(rtmp)
								var videoObject = {
								container: '#video', //容器的ID或className
								variable: 'player',//播放函数名称
								autoplay:false,
								live:true,
								video:rtmp,
							};
								var player = new ckplayer(videoObject);
							},error:function(page){
								
							}
						})
					},error:function(data){
						
					}
				})
			}
