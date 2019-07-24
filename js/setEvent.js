var _param = {
    /*
        index.html 中的 <source></source>标签的 src 属性位 rtmp 直播流地址，记得要打开浏览器的flash
    */ 
//    getData: {             /*  获取后台展示数据请求相关 */ 
//        url: '',
//        description: "请求后台的数据参数",
//        data: {
//            
//        },
//        callback: function (){
//            var data = {
//                power: '10%',
//                press: '859',
//                deep: '2',
//                temperatur: '30℃'
//            };
//            var dataEl = document.getElementById("data");
//            var thead = "";
//            var tbody = "";
//            var table = "";
//            for (var i in data) {
//                var th = "<td>" + i + "</td>";
//                var td = "<td>" + data[i] + "</td>";
//                thead += th;
//                tbody += td;
//            }
//            thead = "<tr>" + thead + "</tr>";
//            tbody = "<tr>" + tbody + "</tr>";
//            thead = "<thead>" + thead + "</thead>";
//            tbody = "<tbody>" + tbody + "</tbody>";
//            table = "<table class='table'>" + thead + tbody + "</table>";
//            dataEl.innerHTML = table;
//            
//        }
//    },
    /* 上面导航栏菜单操作请求相关  */ 
    menu:[
        {
            id: 'map-on',
            description: "地图开",
            req_url: "",
            req_data: {

            },
            callback: function () {
                
            }
        },
        {
            id: 'map-close',
            description: "地图关",
            req_url: "",
            req_data: {

            },
            callback: function () {
                
            }
        },
        {
            id: 'record-on',
            description: "录制开",
            req_url: "",
            req_data: {

            },
            callback: function () {
                
            }
        },
        {
            id: 'record-close',
            description: "录制关",
            req_url: "",
            req_data: {

            },
            callback: function () {
                
            }
        },
        {
            id: 'water-on',
            description: "水泵开",
            req_url: "",
            req_data: {

            },
            callback: function () {
                
            }
        },
        {
            id: 'water-close',
            description: "水泵关",
            req_url: "",
            req_data: {

            },
            callback: function () {
                
            }
        },
        {
            id: 'feel-on',
            description: "传感器开",
            req_url: "",
            req_data: {

            },
            callback: function () {
                
            }
        },
        {
            id: 'feel-close',
            description: "传感器关",
            req_url: "",
            req_data: {

            },
            callback: function () {
                
            }
        },
        {
            id: 'robot-restart',
            description: "重启",
            req_url: "",
            req_data: {

            },
            callback: function () {
                
            }
        },
        {
            id: 'robot-close',
            description: "关机",
            req_url: "",
            req_data: {

            },
            callback: function () {
                
            }
        },
        
    ],
    /*  机器操作请求相关  */ 
    operation: [
		{
            id: "Backward",
            description: "",
//            req_url: "http://193.112.11.189:8888/device/move?direction=Backward&value=1",
            req_url: "http://193.112.11.189:8888/device/move?direction=Backward&value=1&admin=1",
            req_data: {
             
            },
            callback: function () {

            }
        },
        {
            id: "go-ahead",
            description: "",
//            req_url: "http://193.112.11.189:8888/device/move?direction=Forward&value=1",
            req_url: "http://193.112.11.189:8888/device/move?direction=Forward&value=1&admin=1",
            req_data: {
                
            },
            callback: function () {
						
			}						
        },
        {
            id: "turn-left",
            description: "Left",
//            req_url: "http://193.112.11.189:8888/device/move?direction=Left&value=1",
            req_url: "http://193.112.11.189:8888/device/move?direction=Left&value=1&admin=1",
            req_data: {
                
            },
            callback: function () {
                
            }
        },
        {
            id: "turn-right",
            description: "Right",
//            req_url: "http://193.112.11.189:8888/device/move?direction=Right&value=1",
            req_url: "http://193.112.11.189:8888/device/move?direction=Right&value=1&admin=1",
            req_data: {
                
            },
            callback: function () {

            }
        },
        {
            id: "black-out",
            description: "Stop",
//            req_url: "http://193.112.11.189:8888/device/move?direction=Stop&value=1",
            req_url: "http://193.112.11.189:8888/device/move?direction=Stop&value=1&admin=1",
            req_data: {
                
            },
            callback: function () {
			
            }
        },
		{
            id: "go-up",
            description: "Up",
//            req_url: "http://193.112.11.189:8888/device/move?direction=Up&value=1",
            req_url: "http://193.112.11.189:8888/device/move?direction=Up&value=1&admin=1",
            req_data: {
                
            },
            callback: function () {

            }
        },
		{
            id: "go-down",
            description: "Down",
//            req_url: "http://193.112.11.189:8888/device/move?direction=Down&value=1",
            req_url: "http://193.112.11.189:8888/device/move?direction=Down&value=1&admin=1",
            req_data: {
                
            },
            callback: function () {
				
            }
        },
        {
            id: "open-up",
            description: "",
//            req_url: "http://193.112.11.189:8888/device/move?direction=Up&value=0",
            req_url: "http://193.112.11.189:8888/device/move?direction=Up&value=0&admin=1",
            req_data: {
                
            },
            callback: function () {

            }
        },
		{
            id: "close-up",
            description: "",
//            req_url: "http://193.112.11.189:8888/device/move?direction=Down&value=0",
            req_url: "http://193.112.11.189:8888/device/move?direction=Down&value=0&admin=1",
            req_data: {
                
            },
            callback: function () {

            }
        }
    ]
};




function setVideoUrl() {
    var el = document.getElementById("video-src");
   
  
    el.src = _param.video_url;
}
function setOperation() {
//	var dataError = {"code":400,"msg":"命令下达失败","data":{"errno":10,"error":"device not online: 500416908","data":null}}
    var operation = _param.operation;
    for (var i = 0; i < operation.length; i++) {
        var el = document.getElementById(operation[i].id);
        (function (){
            var index = i;
            var req_url = operation[index].req_url;
            var req_data = operation[index].req_data;
            var callback  = operation[index].callback;
            el.addEventListener("click", function () {
                $.ajax({
                    url: req_url,
                    type: 'POST',
                    data: req_data,
                    success: function () {
                        callback();
                    },
					error: function(){
						var msg1 = dataError.msg;
						var msg2 = dataError.data.error;
						alert(msg1);
						alert(msg2);
				}
                })
            });
         }());
    }
}
function setMenu() {
    var menu = _param.menu;
    for (var i = 0; i < menu.length; i++) {
        var el = document.getElementById(menu[i].id);
        (function (){
            var index = i;
            var req_url = menu[index].req_url;
            var req_data = menu[index].req_data;
            var callback = menu[index].callback;
            el.addEventListener("click", function () {
                $.ajax({
                    url: req_url,
                    type: 'POST',
                    data: req_data,
                    success: function () {
                        callback();
                    }
                })
            });
        }());
    }
}
function setData(data) {

}
function setTimer() {
    var url = _param.getData.url
    var data = _param.getData.data;
    var callback = _param.getData.callback;
    
    _param.timer = setInterval(function () {
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            success: function () {
                callback();
            }
        })
    }, 1000);
}
$(document).ready(function () {
    //setVideoUrl();
    setOperation();
    setMenu();
    setTimer();
});