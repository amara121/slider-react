(this["webpackJsonpslider-react"]=this["webpackJsonpslider-react"]||[]).push([[0],{11:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),s=r(4),i=r.n(s),l=r(0);var a=function(){return Object(l.jsx)("header",{className:"flex justify-center items-center h-16 w-full shadow",children:"header"})},o=r(5),u=r(2),d=r.n(u),j=[{id:d()(),titre:"Lorem 1"},{id:d()(),titre:"Lorem 2"},{id:d()(),titre:"Lorem 3"},{id:d()(),titre:"Lorem 4"},{id:d()(),titre:"Lorem 5"}];var m=function(){var e=Object(n.useState)(1),t=Object(o.a)(e,2),r=t[0],c=t[1],s=function(){r!==j.length?c(r+1):r===j.length&&c(1)};return Object(n.useEffect)((function(){var e=setInterval(s,5e3);return function(){clearInterval(e)}}),[r]),Object(l.jsx)("div",{className:"w-full flex justify-center",children:Object(l.jsxs)("div",{className:"max-w-sm w-full relative h-60",children:[j.map((function(e,t){return Object(l.jsxs)("div",{className:" ".concat(r===t+1?"opacity-100":"opacity-0"," w-full absolute top-0 transition-opacity overflow-hidden"),children:[Object(l.jsx)("p",{className:"absolute text-white text-3xl m-10 z-20",children:e.titre}),Object(l.jsx)("img",{className:"max-w-sm w-full h-60 transform transition-transform duration-1000 scale-100 ".concat(r===t+1?"scale-105":"scale-0"),src:"/slider-react"+"/img/image".concat(t+1,".jpeg"),alt:""})]},e.id)})),Object(l.jsxs)("div",{className:"w-full flex justify-between absolute z-50 top-1/2 -mt-3 text-white",children:[Object(l.jsx)("button",{onClick:function(){1!==r?c(r-1):1===r&&c(j.length)},children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"})})}),Object(l.jsx)("button",{onClick:s,children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"})})})]}),Object(l.jsx)("div",{className:"relative flex justify-center w-full mt-10 z-10 top-3/4",children:Array.from({length:5}).map((function(e,t){return Object(l.jsx)("div",{className:"w-6",children:Object(l.jsx)("span",{onClick:function(){return function(e){c(e)}(t+1)},className:"".concat(r===t+1?"bg-blue-300":"bg-transparent"," absolute w-3 h-3 border-2 border-blue-300 rounded-full")})},t)}))})]})})};var h=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(a,{}),Object(l.jsx)(m,{})]})};r(11);i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e9e9bbff.chunk.js.map