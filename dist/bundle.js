!function n(o,i,u){function c(e,t){if(!i[e]){if(!o[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(a)return a(e,!0);throw(r=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",r}r=i[e]={exports:{}},o[e][0].call(r.exports,function(t){return c(o[e][1][t]||t)},r,r.exports,n,o,i,u)}return i[e].exports}for(var a="function"==typeof require&&require,t=0;t<u.length;t++)c(u[t]);return c}({1:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.sayHello=void 0,r.sayHello=function(t){return"Hello from "+t}},{}],2:[function(t,e,r){"use strict";var i=this&&this.__awaiter||function(t,u,c,a){return new(c=c||Promise)(function(r,e){function n(t){try{i(a.next(t))}catch(t){e(t)}}function o(t){try{i(a.throw(t))}catch(t){e(t)}}function i(t){var e;t.done?r(t.value):((e=t.value)instanceof c?e:new c(function(t){t(e)})).then(n,o)}i((a=a.apply(t,u||[])).next())})},u=this&&this.__generator||function(r,n){var o,i,u,c={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(u=2&e[0]?i.return:e[0]?i.throw||((u=i.return)&&u.call(i),0):i.next)&&!(u=u.call(i,e[1])).done)return u;switch(i=0,(e=u?[2&e[0],u.value]:e)[0]){case 0:case 1:u=e;break;case 4:return c.label++,{value:e[1],done:!1};case 5:c.label++,i=e[1],e=[0];continue;case 7:e=c.ops.pop(),c.trys.pop();continue;default:if(!(u=0<(u=c.trys).length&&u[u.length-1])&&(6===e[0]||2===e[0])){c=0;continue}if(3===e[0]&&(!u||e[1]>u[0]&&e[1]<u[3])){c.label=e[1];break}if(6===e[0]&&c.label<u[1]){c.label=u[1],u=e;break}if(u&&c.label<u[2]){c.label=u[2],c.ops.push(e);break}u[2]&&c.ops.pop(),c.trys.pop();continue}e=n.call(r,c)}catch(t){e=[6,t],i=0}finally{o=u=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}};Object.defineProperty(r,"__esModule",{value:!0});var n,o,c=t("./greet");n="greeting",o="Johnny",document.getElementById(n).innerText=c.sayHello(o);var a=function(r,n,o){return i(void 0,void 0,void 0,function(){var e;return u(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(r,{method:n,body:JSON.stringify(o)})];case 1:return[4,t.sent().json()];case 2:return[2,t.sent()];case 3:return(e=t.sent())?[2,new Error(e.message)]:[3,4];case 4:return[2]}})})};var s={id:function(t){return""!==t.toString()&&!Number.isNaN(Number(t))},title:function(t){return""!==t.toString()&&t.toString().length<150},price:function(t){return""!==t.toString()&&!Number.isNaN(Number(t.toString()))&&0<Number(t.toString())},category:function(t){return""!==t.toString()&&t.toString().length<100},description:function(t){return""!==t.toString()&&t.toString().length<5e3},image:function(t){return""!==t.toString()&&t.size<1048576}};function l(t){var r={};try{t.forEach(function(t,e){r[e]=s[e](t)})}catch(t){return!1}return Object.keys(r).filter(function(t){return!t}).length<=0}a("https://fakestoreapi.com/products").then(function(t){t instanceof Error?console.log(t.message):Array.isArray(t)&&console.log(t)}),document.getElementById("productForm").addEventListener("submit",function(t){t.preventDefault(),t.stopPropagation();t=new FormData(document.querySelector("form"));console.log(l(t));t=l(t)?function(t){var r={};try{t.forEach(function(t,e){r[e]="price"===e||"id"===e?Number(t.toString()):t.toString()})}catch(t){}return r}(t):null;t&&a("https://fakestoreapi.com/products","POST",t)})},{"./greet":1}]},{},[2]);
//# sourceMappingURL=bundle.js.map