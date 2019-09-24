!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function r(){var e=parseFloat(12*loanYears+loanMonths),t=interestRate/1200,n=((t+t/(Math.pow(1+t,e)-1))*(carPrice-(downPayment||0))).toFixed(2),r=interestRate/1200*(carPrice-downPayment);monthlyOutput.value=n,interestOutput.value=r}document.getElementById("inputForm").addEventListener("input",(function(){!function(){var e=document.getElementById("inputForm");parseInt(e.elements.carPrice.value),parseInt(e.elements.downPayment.value),parseInt(e.elements.years.value),parseInt(e.elements.months.value),parseInt(e.elements.interestRate.value),document.getElementById("monthlyOutput"),document.getElementById("interestOutput");r()}()})),document.getElementById("btnCalculate").addEventListener("click",(function(){!function(){if(monthlyOutput=0)alert("Please complete the form first!");else{for(var e=document.getElementById("inputForm"),t=(parseInt(e.elements.carPrice.value),parseInt(e.elements.downPayment.value),parseInt(e.elements.years.value)),n=parseInt(e.elements.months.value),r=(parseInt(e.elements.interestRate.value),parseFloat(12*t+n)),o=document.getElementsByClassName("amortization")[0],a=document.createElement("table"),i=document.createElement("tbody"),s=document.createElement("tr"),u=["Payment #","Payment Amount","Principal Paid","Interest Paid","Total Interest","Balance"],c=0;c<6;c++){var l=document.createElement("th"),p=document.createTextNode(u[c]);l.appendChild(p),s.appendChild(l)}a.appendChild(s);for(var f=0;f<r;f++){for(var d=document.createElement("tr"),m=0;m<6;m++){var g=document.createElement("td"),h=document.createTextNode("content");g.appendChild(h),d.appendChild(g)}i.appendChild(d)}a.appendChild(i),o.appendChild(a),a.setAttribute("border","2")}}()}))},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=e.exports=n(3)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Fjalla+One|Noto+Sans&display=swap);",""]),t.push([e.i,'*{margin:0;padding:0;line-height:1;box-sizing:border-box}:root{font-size:100%}body{font-size:2rem;font-family:"Noto Sans",sans-serif;color:#fff}h1,h2,h3,h4,h5,h6{font-family:"Fjalla One",sans-serif}h1{font-size:6rem}.wrapper{display:flex;flex-direction:column;min-height:100vh;background-image:url("https://hopeeternal.github.io/AutoLoanCalculator/dist/assets/img/ford_background.png");background-repeat:no-repeat,no-repeat;background-color:#1f6187;background-position:right bottom;background-size:90% auto}main .pageMain{flex-grow:1}main .pageMain .userInput,main .pageMain .calculations{flex:1;display:flex;justify-content:center}main .pageMain .calculations{background-color:rgba(56,61,67,.4);margin:1rem 6rem}main .pageMain .calculations h2,main .pageMain .calculations h3{line-height:5rem;text-align:center}main .pageMain .calculations h3{color:#face93;font-size:5rem}main .pageMain .calculations button{font-family:"Noto Sans",sans-serif;font-size:1.5rem;padding:1rem;border-radius:.5em;background:#8864aa;color:#fff;border:none;right:0px;margin:.75rem auto;width:100%}main .pageMain .userInput .userInputForm{padding:2rem;border:5px solid rgba(56,61,67,.4)}main .pageMain .userInput .userInputForm label{display:block;margin-bottom:10px;padding:0;font-size:1.5rem}main .pageMain .userInput .userInputForm input,main .pageMain .userInput .userInputForm select,main .pageMain .userInput .userInputForm textarea{font-size:1.5rem;color:#9ab;margin-top:.75rem;padding:.5rem;border:none;background-color:rgba(56,61,67,.4)}main .pageMain .userInput .userInputForm .percentSign,main .pageMain .userInput .userInputForm .dollarSign,main .pageMain .userInput .userInputForm .monthsLabel,main .pageMain .userInput .userInputForm .yearsLabel{font-size:1.25rem;color:#75cfe7;margin:auto .5rem}main .pageMain .userInput .userInputForm button:hover{background:#ccc;cursor:pointer}main .pageMain .userInput .userInputForm .loanDuration input{width:4rem}main .pageMain .userInput .userInputForm #interestRate{width:5rem}main .amortization{padding:3rem;flex:1}@media(min-width: 1000px){.pageHeader,.pageMain,.pageFooter{display:flex;justify-content:center;align-items:center}}.pageHeader,.pageMain .calculations,.pageMain .userInput,.pageFooter{padding:2rem}.pageFooter{font-size:1rem;color:#fff}.pageFooter p{margin-bottom:-1rem}',""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,s,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<e.length;i++){var s=e[i];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},function(e,t,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e,t){return t?t.querySelector(e):document.querySelector(e)},u=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=s.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,l=0,p=[],f=n(5);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(y(r.parts[i],t))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(y(r.parts[i],t));a[r.id]={id:r.id,refs:1,parts:s}}}}function m(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function g(e,t){var n=u(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),p.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=u(e.insertAt.before,n);n.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=p.indexOf(e);t>=0&&p.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return v(t,e.attrs),g(e,t),t}function v(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function y(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var i=l++;n=c||(c=b(t)),r=M.bind(null,n,i,!1),o=M.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),g(e,t),t}(t),r=j.bind(null,n,t),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=w.bind(null,n),o=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=m(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var i=n[o];(s=a[i.id]).refs--,r.push(s)}e&&d(m(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete a[s.id]}}}};var I,x=(I=[],function(e,t){return I[e]=t,I.filter(Boolean).join("\n")});function M(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function w(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function j(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=f(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}}]);