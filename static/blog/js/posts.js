!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(e,n,r){function t(e,n,r,t,o,u,i){try{var c=e[u](i),a=c.value}catch(e){return void r(e)}c.done?n(a):Promise.resolve(a).then(t,o)}var o=r(1).highlightSyntax,u=/&amp;/g;document.querySelectorAll("code").forEach(function(e){return e.innerHTML=e.innerHTML.replace(u,"&")}),document.querySelectorAll(".start-hidden").forEach(function(e){return e.classList.remove("start-hidden")}),function(){var e,n=(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:document.querySelectorAll("pre > code").forEach(function(e){e.innerHTML=o(e.innerHTML,"python")});case 2:case"end":return e.stop()}},e,this)}),function(){var n=this,r=arguments;return new Promise(function(o,u){var i=e.apply(n,r);function c(e){t(i,o,u,c,a,"next",e)}function a(e){t(i,o,u,c,a,"throw",e)}c(void 0)})});return function(){return n.apply(this,arguments)}}()()},function(e,n){var r={python:[[/^(?:(?!\s))(#.+)/g,"comment"],[/((?:&#39;).*?(?:&#39;))/g,"string"],[/((?:&quot;).*?(?:&quot;))/g,"string"],[/\b([a-z_]+[a-zA-Z_]*)(?=\()/g,"function"],[/\b(def |lambda )/g,"keyword"],[/\b(return |if |elif |else |while |for |try |in )/g,"control"]]};e.exports={highlightSyntax:function(e,n){if(!(n in r))return e;var t=e;return r[n].forEach(function(e){t=t.replace(e[0],'<span class="code-'.concat(e[1],'">$1</span>'))}),t}}}]);