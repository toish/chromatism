function fromHex(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;n=n.replace("#","").match(/.{2}/g);for(var a=0;a<n.length;a++)n[a]=parseInt(n[a],16);switch(e){case"rgb":return{r:n[0],g:n[1],b:n[2]};default:return o.convert({conversions:t,operations:o,helpers:s},e,{r:n[0],g:n[1],b:n[2]})}}function fromRgb(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"hex":return 1==(g=Math.round(n.r).toString(16)).length&&(g="0"+g),1==(y=Math.round(n.g).toString(16)).length&&(y="0"+y),1==(_=Math.round(n.b).toString(16)).length&&(_="0"+_),"#"+g+y+_;case"cssrgb":return"rgb("+Math.round(n.r)+","+Math.round(n.g)+","+Math.round(n.b)+")";case"hsl":var a=[g=n.r/255,y=n.g/255,_=n.b/255].sort(),i=(a[0]+a[2])/2*100;return a[0]==a[2]?(m=0,b=0):(m=i>=50?(a[2]-a[0])/(2-a[2]-a[0])*100:(a[2]-a[0])/(a[2]+a[0])*100,(b=a[2]==g?(y-_)/(a[2]-a[0])*60:a[2]==y?60*(2+(_-g)/(a[2]-a[0])):60*(4+(g-y)/(a[2]-a[0])))<0?b+=360:b>360&&(b%=360)),{h:b,s:m,l:i};case"csshsl":var c=o.convert({conversions:t,helpers:s},"hsl",n);return"hsl("+Math.round(c.h)+","+Math.round(c.s)+"%,"+Math.round(c.l)+"%)";case"cmyk":var u=n.r/255,l=n.g/255,h=n.b/255,v=1-Math.max(u,l,h);if(1!=v)var p=(1-u-v)/(1-v),f=(1-l-v)/(1-v),d=(1-h-v)/(1-v);else var p=0,f=0,d=0;return{c:p,m:f,y:d,k:v};case"hsv":var b,m,g=n.r/255,y=n.g/255,_=n.b/255,M=Math.min(g,y,_),Y=Math.max(g,y,_),X=Y-M,Z=Y;if(0==X)b=0,m=0;else{m=X/Y;var L=((Y-g)/6+X/2)/X,R=((Y-y)/6+X/2)/X,w=((Y-_)/6+X/2)/X;g==Y?b=w-R:y==Y?b=1/3+L-w:_==Y&&(b=2/3+R-L),b<0&&(b+=1),b>1&&(b-=1)}return{h:360*b,s:100*m,v:100*Z};case"yiq":var d=n.r/255*.299+n.g/255*.587+n.b/255*.114,x=n.r/255*.596+n.g/255*-.274+n.b/255*-.322,C=n.r/255*.211+n.g/255*-.523+n.b/255*.312;return x=s.bounded(x,[-.5957,.5957]),C=s.bounded(C,[-.5226,.5226]),{y:d,i:x,q:C};case"XYZ":var A=[n.r,n.g,n.b].map(function(r){return r/255}).map(function(r){return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)}),S=s.getTransform("SRGB_XYZ").map(function(r){return A.reduce(function(e,n,t){return r[t]*n+e},0)}).map(function(r){return 100*r}),O=slicedToArray(S,3);return{X:O[0],Y:O[1],Z:O[2]};case"lms":case"cielab":case"cieluv":case"xyY":var j=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,j);case"cielch":var D=o.convert({conversions:t,operations:o,helpers:s},"cieluv",n);return o.convert({conversions:t,operations:o,helpers:s},e,D)}}function fromCssRgb(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;n=n.replace(/((rgb\(|\))|[\s]*)/g,"").split(",");for(var a=0;a<n.length;a++)n[a]=parseInt(n[a]);switch(e){case"rgb":return{r:n[0],g:n[1],b:n[2]};default:return o.convert({conversions:t,operations:o,helpers:s},e,{r:n[0],g:n[1],b:n[2]})}}function fromHsl(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"rgb":if(0==n.s){var a=n.l/100*255;return{r:a,g:a,b:a}}var i,c,u;i=n.l>=50?n.l/100+n.s/100-n.l/100*(n.s/100):n.l/100*(1+n.s/100),c=n.l/100*2-i;var l,h,v,p=((u=n.h/360)+.333)%1,f=u,d=s.negMod(u-.333,1);return l=6*p<1?c+6*(i-c)*p:2*p<1?i:3*p<2?c+6*(.666-p)*(i-c):c,h=6*f<1?c+6*(i-c)*f:2*f<1?i:3*f<2?c+6*(.666-f)*(i-c):c,v=6*d<1?c+6*(i-c)*d:2*d<1?i:3*d<2?c+6*(.666-d)*(i-c):c,l<0&&(l=0),h<0&&(h=0),v<0&&(v=0),{r:255*l,g:255*h,b:255*v};case"csshsl":return"hsl("+Math.round(n.h)+","+Math.round(n.s)+"%,"+Math.round(n.l)+"%)";case"hsv":n.s=n.s/100,n.l=n.l/100;var b=n.s*(n.l<.5?n.l:1-n.l);return{h:n.h,s:100*(2*b/(n.l+b)),v:100*(n.l+b)};default:var m=o.convert({conversions:t,operations:o,helpers:s},"rgb",n);return o.convert({conversions:t,operations:o,helpers:s},e,m)}}function fromCssHsl(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;n=n.replace(/(hsl\(|\)|%|[\s]*)/g,"").split(",");for(var a=0;a<n.length;a++)n[a]=parseInt(n[a]);switch(e){case"hsl":return{h:n[0],s:n[1],l:n[2]};default:return o.convert({conversions:t,operations:o,helpers:s},e,{h:n[0],s:n[1],l:n[2]})}}function fromHsv(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"rgb":var a,i,c;n.h=n.h/360,n.s=n.s/100,n.v=n.v/100;var u=6*n.h;6==u&&(u=0);var l,h,v,p=Math.round(u),f=n.v*(1-n.s),d=n.v*(1-n.s*(u-p)),b=n.v*(1-n.s*(1-(u-p)));return 0==p?(l=n.v,h=b,v=f):1==p?(l=d,h=n.v,v=f):2==p?(l=f,h=n.v,v=b):3==p?(l=f,h=d,v=n.v):4==p?(l=b,h=f,v=n.v):(l=n.v,h=f,v=d),a=255*l,i=255*h,c=255*v,{r:a,g:i,b:c};case"hsl":n.h=n.h/360,n.s=n.s/100,n.v=n.v/100;return{h:360*n.h,s:100*((2-n.s)*n.v<1?n.s*n.v/((2-n.s)*n.v):n.s*n.v/(2-(2-n.s)*n.v)),l:100*((2-n.s)*n.v/2)};default:var m=o.convert({conversions:t,operations:o,helpers:s},"rgb",n);return o.convert({conversions:t,operations:o,helpers:s},e,m)}}function fromCmyk(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"rgb":return{r:a=255*(1-n.c)*(1-n.k),g:i=255*(1-n.m)*(1-n.k),b:c=255*(1-n.y)*(1-n.k)};case"cssrgb":var a=255*(1-n.c)*(1-n.k),i=255*(1-n.m)*(1-n.k),c=255*(1-n.y)*(1-n.k);return"rgb("+Math.round(a)+","+Math.round(i)+","+Math.round(c)+")";default:var u=o.convert({conversions:t,operations:o,helpers:s},"rgb",n);return o.convert({conversions:t,operations:o,helpers:s},e,u)}}function fromYiq(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(n.i=s.bounded(n.i,[-.5957,.5957]),n.q=s.bounded(n.q,[-.5226,.5226]),e){case"rgb":var a=255*(n.y+.956*n.i+.621*n.q),i=255*(n.y+-.272*n.i+-.647*n.q),c=255*(n.y+-1.106*n.i+-1.703*n.q);return a=s.bounded(a,[0,255]),i=s.bounded(i,[0,255]),c=s.bounded(c,[0,255]),{r:a,g:i,b:c};default:var u=o.convert({conversions:t,operations:o,helpers:s},"rgb",n);return o.convert({conversions:t,operations:o,helpers:s},e,u)}}function fromXYZ(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers,a=s.getIlluminant("D65");switch(e){case"rgb":var i=[n.X,n.Y,n.Z].map(function(r){return r/100}),c=s.getTransform("INVERSE_SRGB_XYZ").map(function(r){return i.reduce(function(e,n,t){return r[t]*n+e},0)}).map(function(r){return r<=.0031308?12.92*r:1.055*Math.pow(r,1/2.4)-.055}).map(function(r){return 255*r}),u=slicedToArray(c,3),l=u[0],h=u[1],v=u[2];return s.boundedRgb({r:l,g:h,b:v});case"lms":var p=[n.X,n.Y,n.Z].map(function(r){return r/100}),f=s.getTransform("BRADFORD").map(function(r){return p.reduce(function(e,n,t){return r[t]*n+e},0)});return{rho:f[0],gamma:f[1],beta:f[2]};case"cielab":var d=n.X/a.X,b=n.Y/a.Y,m=n.Z/a.Z,g=function(r){return r>.008856?s.cbrt(r):(903.3*r+16)/116},y=g(d),_=g(b);return{L:116*_-16,a:500*(y-_),b:200*(_-g(m))};case"cieluv":var M=n.Y/a.Y,Y=M>.008856?116*s.cbrt(M)-16:903.3*M,X=function(r){return 4*r.X/(r.X+15*r.Y+3*r.Z)},Z=function(r){return 9*r.Y/(r.X+15*r.Y+3*r.Z)};return{L:Y,u:13*Y*(X(n)-X(a)),v:13*Y*(Z(n)-Z(a))};case"xyY":return{x:n.X/(n.X+n.Y+n.Z),y:n.Y/(n.X+n.Y+n.Z),Y:n.Y};default:var L=s.boundedRgb(o.convert({conversions:t,operations:o,helpers:s},"rgb",n));return o.convert({conversions:t,operations:o,helpers:s},e,L)}}function fromxyY(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"XYZ":var a=n.Y/n.y*n.x,i=n.Y/n.y*(1-n.x-n.y);return{X:a,Y:n.Y,Z:i};default:var c=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,c)}}function fromLms(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"XYZ":var a=[n.rho,n.gamma,n.beta],i=s.getTransform("INVERSE_BRADFORD").map(function(r){return a.reduce(function(e,n,t){return r[t]*n+e},0)});return{X:100*i[0],Y:100*i[1],Z:100*i[2]};default:var c=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,c)}}function fromCieLab(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"XYZ":var a=s.getIlluminant("D65"),i=(n.L+16)/116,c=n.a/500+i,u=i-n.b/200,l=function(r){return Math.pow(r,3)>.008856?Math.pow(r,3):(116*r-16)/903.3},h=l(c),v=l(u),p=n.L>903.3*.008856?Math.pow(i,3):n.L/903.3;return{X:h*a.X,Y:p*a.Y,Z:v*a.Z};default:var f=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,f)}}function fromCieLuv(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"XYZ":var a=s.getIlluminant("D65"),i=function(r){return 4*r.X/(r.X+15*r.Y+3*r.Z)}(a),c=function(r){return 9*r.Y/(r.X+15*r.Y+3*r.Z)}(a),u=1/3*(52*n.L/(n.u+13*n.L*i)-1),l=n.L>903.3*.008856?Math.pow((n.L+16)/116,3):n.L/903.3,h=-5*l,v=(l*(39*n.L/(n.v+13*n.L*c)-5)-h)/(u- -1/3);return{X:100*v,Y:100*l,Z:100*(v*u+h)};case"cielch":var p=Math.sqrt(Math.pow(n.u,2)+Math.pow(n.v,2)),f=Math.atan2(n.v,n.u);return f<0&&(f+=2*Math.PI),f=s.toDeg(f),{L:n.L,C:p,h:f};default:var d=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,d)}}function fromCieLch(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"cieluv":var a=s.toRad(n.h),i=n.C*Math.cos(a),c=n.C*Math.sin(a);return{L:n.L,u:i,v:c};default:var u=o.convert({conversions:t,operations:o,helpers:s},"cieluv",n);return o.convert({conversions:t,operations:o,helpers:s},e,u)}}function contains(r,e){return Object.keys(r).every(function(r){return-1!==e.indexOf(r)})}function adapt(r,e,n,t){var o=r.operations.convert(r,"XYZ",e),s=r.operations.convert(r,"lms",n);if(t)a=r.operations.convert(r,"lms",t);else var a=r.operations.convert(r,"lms",r.helpers.getIlluminant("D65"));var i=r.helpers.getTransform("BRADFORD"),c=r.helpers.getTransform("INVERSE_BRADFORD"),u=[[s.rho/a.rho,0,0],[0,s.gamma/a.gamma,0],[0,0,s.beta/a.beta]],l=r.helpers.matrixMultiply(c,u),h=r.helpers.matrixMultiply(l,i),v=[[o.X],[o.Y],[o.Z]],p=r.helpers.matrixMultiply(h,v),f={X:p[0][0],Y:p[1][0],Z:p[2][0]};return r.helpers.ready(r,f)}function adjacent(r,e,n,t){for(var o=r.operations.convert(r,"hsl",t),s=[{h:o.h,s:o.s,l:o.l}],a=0;a<n-1;a++)o.h=r.helpers.negMod(o.h+e,360),s.push({h:o.h,s:o.s,l:o.l});return r.helpers.ready(r,s)}function brightness(r,e,n){var t=r.operations.convert(r,"hsl",n);return t.l+=e,t.l<0?t.l=0:t.l>100&&(t.l=100),r.helpers.ready(r,t)}function complementary(r,e){var n=r.operations.convert(r,"hsl",e);return n.h=(n.h+180)%360,r.helpers.ready(r,n)}function contrast(r,e,n){var t=r.operations.convert(r,"rgb",n);return t.r=255*((t.r/255-.5)*e+.5),t.r<0?t.r=0:t.r>255&&(t.r=255),t.g=255*((t.g/255-.5)*e+.5),t.g<0?t.g=0:t.g>255&&(t.g=255),t.b=255*((t.b/255-.5)*e+.5),t.b<0?t.b=0:t.b>255&&(t.b=255),r.helpers.ready(r,t)}function contrastRatio(r,e){var n=r.operations.convert(r,"rgb",e);return n=(299*n.r+587*n.g+114*n.b)/1e3>=128?{r:0,g:0,b:0}:{r:255,g:255,b:255},r.helpers.ready(r,n)}function convert(r,e,n){if(Object.keys(r.conversions).indexOf(e)>-1){n.colour?n=n.colour:n.colours&&(n=n.colours);var t=r.helpers.determineMode(n);return t!=e?r.conversions[t].convert(r,e,n):n}return r.helpers.ready(r,e)}function difference(r,e,n,t,o){t=t||1,o=o||1;var s=r.operations.convert(r,"cielab",e),a=r.operations.convert(r,"cielab",n),i=Math.sqrt(Math.pow(s.a,2)+Math.pow(s.b,2)),c=i-Math.sqrt(Math.pow(a.a,2)+Math.pow(a.b,2)),u=s.L-a.L,l=s.a-a.a,h=s.b-a.b,v=Math.sqrt(Math.pow(l,2)+Math.pow(h,2)-Math.pow(c,2)),p=s.L<16?.511:.040975*s.L/(1.01765*s.L),f=.0638*i/(1.0131*i),d=Math.atan2(s.b,s.a),b=d>=0?d:d+360,m=164<=b&&b<=345?.56+Math.abs(.2*Math.cos(r.helpers.toRad(b+168))):.36+Math.abs(.4*Math.cos(r.helpers.toRad(b+35))),g=Math.pow(i,4)/(Math.pow(i,4)+1900),y=f*(g*m+1-g),_=Math.pow(u/(t*p),2);Math.pow(c/(o*f),2),Math.pow(v/y,2);return Math.sqrt(_+_+_)}function fade(r,e,n,t){var o=r.operations.convert(r,"rgb",n),s=r.operations.convert(r,"rgb",t),a=[o];e-=1;for(var i=(s.r-o.r)/e,c=(s.g-o.g)/e,u=(s.b-o.b)/e,l={r:o.r,g:o.g,b:o.b},h=0;h<e-1;h++)l.r=r.helpers.slopeMod(l.r+i,255),l.g=r.helpers.slopeMod(l.g+c,255),l.b=r.helpers.slopeMod(l.b+u,255),a.push({r:l.r,g:l.g,b:l.b});return a.push(s),r.helpers.ready(r,a)}function greyscale(r,e){var n=r.operations.convert(r,"rgb",e),t=(n.r+n.g+n.b)/3;return n={r:t,g:t,b:t},r.helpers.ready(r,n)}function hue(r,e,n){var t=r.operations.convert(r,"hsl",n);return t.h=r.helpers.negMod(t.h+e,360),r.helpers.ready(r,t)}function invert(r,e){var n=r.operations.convert(r,"rgb",e);return n.r=r.helpers.negMod(255-n.r,255),n.g=r.helpers.negMod(255-n.g,255),n.b=r.helpers.negMod(255-n.b,255),r.helpers.ready(r,n)}function invertLightness(r,e){var n=r.operations.convert(r,"hsl",e);return n.l=100-n.l,r.helpers.ready(r,n)}function mid(r,e,n){var t=r.operations.convert(r,"hsl",e),o=r.operations.convert(r,"hsl",n),s={h:(t.h+o.h)/2,s:(t.s+o.s)/2,l:(t.l+o.l)/2};return r.helpers.ready(r,s)}function multiply(r,e,n){var t=r.operations.convert(r,"hsl",e),o=r.operations.convert(r,"hsl",n),s={h:t.h,s:t.s,l:t.l/100*(o.l/100)*100};return s.l=s.l>100?100:s.l,s.l=s.l<0?0:s.l,r.helpers.ready(r,s)}function saturation(r,e,n){var t=r.operations.convert(r,"hsl",n);return t.s+=e,t.s<0?t.s=0:t.s>100&&(t.s=100),r.helpers.ready(r,t)}function sepia(r,e){var n=r.operations.convert(r,"rgb",e),t={};return t.r=.393*n.r+.769*n.g+.189*n.b,t.g=.349*n.r+.686*n.g+.168*n.b,t.b=.272*n.r+.534*n.g+.131*n.b,r.helpers.ready(r,t)}function shade(r,e,n){var t=r.operations.convert(r,"hsv",n);return t.v+=e,t.v<0?t.v=0:t.v>100&&(t.v=100),r.helpers.ready(r,t)}function temperature(r,e){var n=r.operations.convert(r,"xyY",e),t=(n.x-.332)/(n.y-.1858);return-449*Math.pow(t,3)+3525*Math.pow(t,2)-6823.3*t+5520.33}function tetrad(r,e){for(var n=r.operations.convert(r,"hsl",e),t=[{h:n.h,s:n.s,l:n.l}],o=0;o<3;o++)n.h=(n.h+90)%360,t.push({h:n.h,s:n.s,l:n.l});return r.helpers.ready(r,t)}function triad(r,e){for(var n=r.operations.convert(r,"hsl",e),t=[{h:n.h,s:n.s,l:n.l}],o=0;o<2;o++)n.h=(n.h+120)%360,t.push({h:n.h,s:n.s,l:n.l});return r.helpers.ready(r,t)}var fromHex_1=fromHex,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},slicedToArray=function(){function r(r,e){var n=[],t=!0,o=!1,s=void 0;try{for(var a,i=r[Symbol.iterator]();!(t=(a=i.next()).done)&&(n.push(a.value),!e||n.length!==e);t=!0);}catch(r){o=!0,s=r}finally{try{!t&&i.return&&i.return()}finally{if(o)throw s}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),toConsumableArray=function(r){if(Array.isArray(r)){for(var e=0,n=Array(r.length);e<r.length;e++)n[e]=r[e];return n}return Array.from(r)},fromRgb_1=fromRgb,fromCssRgb_1=fromCssRgb,fromHsl_1=fromHsl,fromCssHsl_1=fromCssHsl,fromHsv_1=fromHsv,fromCmyk_1=fromCmyk,fromYiq_1=fromYiq,fromXYZ_1=fromXYZ,fromxyY_1=fromxyY,fromLms_1=fromLms,fromCieLab_1=fromCieLab,fromCieLuv_1=fromCieLuv,fromCieLch_1=fromCieLch,index={hex:{test:function(r){return"string"==typeof r&&"#"===r.slice(0,1)},convert:fromHex_1},rgb:{test:function(r){return contains(r,["r","g","b"])},convert:fromRgb_1},cssrgb:{test:function(r){return"string"==typeof r&&"rgb("===r.slice(0,4)},convert:fromCssRgb_1},hsl:{test:function(r){return contains(r,["h","s","l"])},convert:fromHsl_1},csshsl:{test:function(r){return"string"==typeof r&&"hsl("===r.slice(0,4)},convert:fromCssHsl_1},hsv:{test:function(r){return contains(r,["h","s","v"])},convert:fromHsv_1},cmyk:{test:function(r){return contains(r,["c","m","y","k"])},convert:fromCmyk_1},yiq:{test:function(r){return contains(r,["y","i","q"])},convert:fromYiq_1},XYZ:{test:function(r){return contains(r,["X","Y","Z"])},convert:fromXYZ_1},xyY:{test:function(r){return contains(r,["x","y","Y"])},convert:fromxyY_1},lms:{test:function(r){return contains(r,["rho","gamma","beta"])},convert:fromLms_1},cielab:{test:function(r){return contains(r,["L","a","b"])},convert:fromCieLab_1},cieluv:{test:function(r){return contains(r,["L","u","v"])},convert:fromCieLuv_1},cielch:{test:function(r){return contains(r,["L","C","h"])},convert:fromCieLch_1}},adapt_1=adapt,adjacent_1=adjacent,brightness_1=brightness,complementary_1=complementary,contrast_1=contrast,contrastRatio_1=contrastRatio,convert_1=convert,difference_1=difference,fade_1=fade,greyscale_1=greyscale,hue_1=hue,invert_1=invert,invertLightness_1=invertLightness,mid_1=mid,multiply_1=multiply,saturation_1=saturation,sepia_1=sepia,shade_1=shade,temperature_1=temperature,tetrad_1=tetrad,triad_1=triad,index$2={adapt:adapt_1,adjacent:adjacent_1,brightness:brightness_1,complementary:complementary_1,contrast:contrast_1,contrastRatio:contrastRatio_1,convert:convert_1,difference:difference_1,fade:fade_1,greyscale:greyscale_1,hue:hue_1,invert:invert_1,invertLightness:invertLightness_1,mid:mid_1,multiply:multiply_1,saturation:saturation_1,sepia:sepia_1,shade:shade_1,temperature:temperature_1,tetrad:tetrad_1,triad:triad_1},constants={ILLUMINANTS:{A:{X:1.0985*100,Y:100,Z:35.585},B:{X:99.072,Y:100,Z:85.223},C:{X:98.074,Y:100,Z:118.232},D50:{X:96.422,Y:100,Z:82.521},D55:{X:95.682,Y:100,Z:92.149},D65:{X:95.047,Y:100,Z:108.883},D75:{X:94.972,Y:100,Z:122.638},E:{X:100,Y:100,Z:100},F2:{X:.99186*100,Y:100,Z:67.393},F7:{X:95.041,Y:100,Z:108.747},F11:{X:1.00962*100,Y:100,Z:64.35}},TRANSFORMS:{BRADFORD:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],INVERSE_BRADFORD:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]],SRGB_XYZ:[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],INVERSE_SRGB_XYZ:[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]]}},api=function(r,e,n){var t=Object.keys(r.operations).reduce(function(e,t){var o=r.operations[t];return e[t]=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];var a=t.slice(0).map(function(r){return"object"===(void 0===r?"undefined":_typeof(r))?Object.assign({},r):r});if(n&&n.colours){return function e(n){var t=n.map(function(n){if(Array.isArray(n)){var t=e(n);return t.colours||t.colour}var s=o.apply(void 0,[r].concat(toConsumableArray(a),[n]));return"object"===(void 0===s?"undefined":_typeof(s))?s.colours||s.colour:s});return"number"!=typeof t[0]?r.helpers.ready(r,t):t}(n.colours)}return o.apply(void 0,[r].concat(toConsumableArray(a),[n?n.colour:void 0]))},e},{});return n||(t=Object.assign(t,e)),t},api_1=api,helpers={getIlluminant:function(r){return constants.ILLUMINANTS[r]},getTransform:function(r){return constants.TRANSFORMS[r]},matrixMultiply:function(r,e){for(var n=[],t=0;t<r.length;t++){n[t]=[];for(var o=0;o<e[0].length;o++){for(var s=0,a=0;a<r[0].length;a++)s+=r[t][a]*e[a][o];n[t][o]=s}}return n},cbrt:function(r){if(Math.cbrt)return Math.cbrt(r);var e=Math.pow(Math.abs(r),1/3);return r<0?-e:e},toRad:function(r){return r*(Math.PI/180)},toDeg:function(r){return r*(180/Math.PI)},negMod:function(r,e){return(r%e+e)%e},slopeMod:function(r){function e(e,n){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r,e){return r>2*e?slopeMod(r-2*e,e):r>e?2*e-r:r<0?slopeMod(r+2*e,e):r}),bounded:function(r,e){return r<e[0]?r=e[0]:r>e[1]&&(r=e[1]),r},boundedRgb:function(r){var e=this,n=function(r){return e.bounded(r,[0,255])};return{r:n(r.r),g:n(r.g),b:n(r.b)}},determineMode:function(r){for(var e in index)if(index.hasOwnProperty(e)&&index[e].test(r))return e;return null},ready:function(r,e){var n=r.conversions,t=r.operations,o=r.helpers,s={};switch(Object.prototype.toString.call(e)){case"[object Object]":case"[object String]":s.colour=e;for(var a in n)n.hasOwnProperty(a)&&function(r){Object.defineProperty(s,r,{get:function(){o.determineMode(e);return t.convert({conversions:n,operations:t,helpers:o},r,e)},enumerable:!0})}(a);return s=Object.assign(s,api_1({conversions:n,operations:t,helpers:o},constants,s));case"[object Array]":s.colours=e;for(var i in n)n.hasOwnProperty(i)&&function(r){Object.defineProperty(s,r,{get:function(){return function e(s){return s.map(function(s){return Array.isArray(s)?e(s):t.convert({conversions:n,operations:t,helpers:o},r,s)})}(e)},enumerable:!0})}(i);return s=Object.assign(s,api_1({conversions:n,operations:t,helpers:o},constants,s));default:return null}}},helpers_1=helpers,dependencies={conversions:index,operations:index$2,helpers:helpers_1},entry=api_1(dependencies,constants);export default entry;
