import{useEffect as e}from"react";var n=function(n){var r,o=["mousemove","click","mousedown","keypress","DOMMouseScroll","mousewheel","touchmove","MSPointerMove"],t=["mousemove","resize"],v=0,i=!1;e((function(){return function(){a()}}),[]);var u=function(e){i&&(clearInterval(r),c())},c=function(){r=setInterval((function(){n(),a()}),v)},a=function(){i=!1,clearInterval(r),f()},f=function(){for(var e=0,n=o;e<n.length;e++){var r=n[e];document.removeEventListener(r,u)}for(var v=0,i=t;v<i.length;v++){r=i[v];window.removeEventListener(r,u)}};return[function(e){i=!0,v=1e3*e;for(var n=0,r=o;n<r.length;n++){var a=r[n];document.addEventListener(a,u)}for(var f=0,l=t;f<l.length;f++){a=l[f];window.addEventListener(a,u)}c()},a]};export{n as useBnIdle};
//# sourceMappingURL=index.js.map