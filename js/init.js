function isMobile() {
   var userAgentInfo = navigator.userAgent;
   var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
   var mobile_flag = false;
 	//根据userAgent判断是否是手机
    for (var v = 0; v < mobileAgents.length; v++) {
       if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
             mobile_flag = true;
             break;
       }
    }
    var screen_width = window.screen.width;
    var screen_height = window.screen.height;
   //根据屏幕分辨率判断是否是手机
   if (screen_width > 325 && screen_height < 750) {
       mobile_flag = true;
   }
   return mobile_flag;
}

var mobile_flag = isMobile();
if (mobile_flag) {
var script = document.createElement('script');
script.src = '/js/'+document.title+"(mobile).js";
document.head.appendChild(script);                                 
var link= document.createElement('link');
link.rel="stylesheet";
link.href= '/css/'+document.title+"(mobile).css";
document.head.appendChild(link);
}else{
var script = document.createElement('script');
script.src = '/js/'+document.title+"(pc).js";
document.head.appendChild(script);                                 
var link= document.createElement('link');
link.rel="stylesheet";
link.href= '/css/'+document.title+"(pc).css";
document.head.appendChild(link);
}


