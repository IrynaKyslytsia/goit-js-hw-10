!function(){function n(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,m=function(){return s.Date.now()};function g(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(n){return!!n&&"object"==typeof n}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var f=a.test(t);return f||c.test(t)?u(t.slice(2),f?2:8):i.test(t)?NaN:+t}e=function(n,t,e){var o,r,i,a,c,u,f=0,l=!1,s=!1,d=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function y(t){var e=o,i=r;return o=r=void 0,f=t,a=n.apply(i,e)}function h(n){return f=n,c=setTimeout(T,t),l?y(n):a}function j(n){var e=n-u;return void 0===u||e>=t||e<0||s&&n-f>=i}function T(){var n=m();if(j(n))return w(n);c=setTimeout(T,function(n){var e=t-(n-u);return s?p(e,i-(n-f)):e}(n))}function w(n){return c=void 0,d&&o?y(n):(o=r=void 0,a)}function M(){var n=m(),e=j(n);if(o=arguments,r=this,u=n,e){if(void 0===c)return h(u);if(s)return c=setTimeout(T,t),y(u)}return void 0===c&&(c=setTimeout(T,t)),a}return t=b(t)||0,g(e)&&(l=!!e.leading,i=(s="maxWait"in e)?v(b(e.maxWait)||0,t):i,d="trailing"in e?!!e.trailing:d),M.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=u=r=c=void 0},M.flush=function(){return void 0===c?a:w(m())},M};var y=document.querySelector("#search-box"),h=document.querySelector(".country-list"),j=document.querySelector(".country-info");function T(n){n.length>10?window.alert("Too many matches found. Please enter a more specific name."):n.length>=2&&n.length<=10?(h.innerHTML="",j.innerHTML="",h.insertAdjacentHTML("beforeend",function(n){return n.map((function(n){var t=n.name,e=n.flags;return'\n        <li class="card-item">\n        <img class="card-img" src="'.concat(e.svg,'" alt="').concat(e.alt,'">\n        <h2 class="card-title">').concat(t.official,"</h2>\n       </li>\n       ")})).join("")}(n))):1===n.length&&(h.innerHTML="",j.innerHTML="",j.insertAdjacentHTML("beforeend",function(n){return n.map((function(n){var t=n.name,e=n.flags,o=n.capital,r=n.population,i=n.languages;return'\n        <div class="card-heading">\n            <img class="card-img card-img--big" src="'.concat(e.svg,'" alt="').concat(e.alt,'">\n            <h2 class="card-title">').concat(t.official,'</h2>\n        </div>\n        <div class="card-body">\n            <p class="card-text"><b>Capital:</b> ').concat(o,'</p>\n            <p class="card-text"><b>Population:</b> ').concat(r,'</p>\n            <p class="card-text"><b>Languages:</b> ').concat(Object.values(i).join(", "),"</p>\n        </div>\n        ")})).join("")}(n)))}y.addEventListener("input",n(e)((function(n){n.preventDefault();var t=y.value.trim();console.log(t),(e=t,fetch("https://restcountries.com/v3.1/name/".concat(e,"?fields=name,capital,population,flags,languages")).then((function(n){if(!n.ok)throw new Error;return n.json()}))).then(T).catch((function(n){return console.log(n)}));var e}),300))}();
//# sourceMappingURL=index.095a8fca.js.map
