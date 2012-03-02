﻿{	
	var r = new RegExp("(^|(.*?\\/))(SuperMap.Include\.js)(\\?|$)"),
	s = document.getElementsByTagName('script'),
	src, m, baseurl = "";
	for(var i=0, len=s.length; i<len; i++) {
		src = s[i].getAttribute('src');
		if(src) {
			var m = src.match(r);
			if(m) {
				baseurl = m[1];
				break;
			}
		}
	}
    inputScript(baseurl+'OpenLayers.js');
    inputScript(baseurl+'SuperMap-6.1.js');
    inputCSS('style.css');
    inputCSS('ie6-style.css');
    inputCSS('google.css');
    inputCSS('framedCloud.css');
}
function inputScript(inc){
    var script='<'+'script type="text/javascript" src="'+inc+'"'+'><'+'/script>'; 
    document.writeln(script);
}
function inputCSS(style){
        var css='<'+'link rel="stylesheet" href="'+baseurl+ '../resource/theme/default/'+style+'"'+'><'+'/>'; 
    document.writeln(css);
}