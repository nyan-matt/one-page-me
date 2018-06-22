"use strict";(new WOW).init(),window.onscroll=function(e){var t=document.getElementById("hero-text"),l=document.getElementById("header").offsetHeight;t.style.top=l-1.25*document.body.scrollTop+"px"};var skillToggle=document.getElementsByClassName("skill-toggle");Array.from(skillToggle).map(function(e){e.addEventListener("click",function(e){e.target.nextElementSibling.classList.toggle("visible"),e.target.classList.toggle("expanded")})});
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,n){function o(e){var t=v.className,n=p._config.classPrefix||"";if(h&&(t=t.baseVal),p._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}p._config.enableClasses&&(t+=" "+n+e.join(" "+n),h?v.className.baseVal=t:v.className=t)}function a(e,t){return("undefined"==typeof e?"undefined":_typeof(e))===t}function i(){var e,t,n,o,i,s,r;for(var f in u)if(u.hasOwnProperty(f)){if(e=[],t=u[f],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=a(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],r=s.split("."),1===r.length?p[r[0]]=o:(!p[r[0]]||p[r[0]]instanceof Boolean||(p[r[0]]=new Boolean(p[r[0]])),p[r[0]][r[1]]=o),c.push((o?"":"no-")+r.join("-"))}}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):h?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function r(e,t){if("object"==("undefined"==typeof e?"undefined":_typeof(e)))for(var n in e)m(e,n)&&r(n,e[n]);else{e=e.toLowerCase();var a=e.split("."),i=p[a[0]];if(2==a.length&&(i=i[a[1]]),"undefined"!=typeof i)return p;t="function"==typeof t?t():t,1==a.length?p[a[0]]=t:(!p[a[0]]||p[a[0]]instanceof Boolean||(p[a[0]]=new Boolean(p[a[0]])),p[a[0]][a[1]]=t),o([(t&&0!=t?"":"no-")+a.join("-")]),p._trigger(e,t)}return p}function f(){var e=t.body;return e||(e=s(h?"svg":"body"),e.fake=!0),e}function l(e,n,o,a){var i,r,l,c,u="modernizr",d=s("div"),p=f();if(parseInt(o,10))for(;o--;)l=s("div"),l.id=a?a[o]:u+(o+1),d.appendChild(l);return i=s("style"),i.type="text/css",i.id="s"+u,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",c=v.style.overflow,v.style.overflow="hidden",v.appendChild(p)),r=n(d,e),p.fake?(p.parentNode.removeChild(p),v.style.overflow=c,v.offsetHeight):d.parentNode.removeChild(d),!!r}var c=[],u=[],d={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){u.push({name:e,fn:t,options:n})},addAsyncTest:function(e){u.push({name:null,fn:e})}},p=function(){};p.prototype=d,p=new p,p.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var v=t.documentElement,h="svg"===v.nodeName.toLowerCase();p.addTest("canvas",function(){var e=s("canvas");return!(!e.getContext||!e.getContext("2d"))}),p.addTest("canvastext",function(){return p.canvas!==!1&&"function"==typeof s("canvas").getContext("2d").fillText}),p.addTest("emoji",function(){if(!p.canvastext)return!1;var t=e.devicePixelRatio||1,n=12*t,o=s("canvas"),a=o.getContext("2d");return a.fillStyle="#f00",a.textBaseline="top",a.font="32px Arial",a.fillText("🐨",0,0),0!==a.getImageData(n,n,1,1).data[0]});var y=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=y;var m;!function(){var e={}.hasOwnProperty;m=a(e,"undefined")||a(e.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),d._l={},d.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),p.hasOwnProperty(e)&&setTimeout(function(){p._trigger(e,p[e])},0)},d._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,o;for(e=0;e<n.length;e++)(o=n[e])(t)},0),delete this._l[e]}},p._q.push(function(){d.addTest=r}),p.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var g=d.testStyles=l;p.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var o=["@media (",y.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");g(o,function(e){n=9===e.offsetTop})}return n}),i(),o(c),delete d.addTest,delete d.addAsyncTest;for(var w=0;w<p._q.length;w++)p._q[w]();e.Modernizr=p}(window,document);