(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(3),c=t.n(o),i=(t(9),t(1)),s=(t(10),function(){return[{action:"Change",reversed:{action:"Stasis"}},{action:"Recognising the Larger Problem",reversed:{action:"Underestimating the Challenge"}},{action:"Understanding Mysteries",reversed:{action:"Impracticality"}},{action:"Energy",reversed:{action:"Exhaustion"}},{action:"Bravery",reversed:{action:"Cowardice"}},{action:"Simplicity Prevails",reversed:{action:"Creativity Shines"}},{action:"Great Effort",reversed:{action:"Effort Misspent"}},{action:"Recognising Opportunity",reversed:{action:"Failing to see Opportunity"}},{action:"Unforseen Circumstances",reversed:{action:"Stroke of Luck"}},{action:"Thoughtlessness",reversed:{action:"Achieving the Unexpected"}},{action:"Ceasing Fruitless Labor",reversed:{action:"Fruitless Labor"}},{action:"Innovation",reversed:{action:"Arrogance"}},{action:"Recognising Limits & Dangers",reversed:{action:"Protections Turn Dangerous"}},{action:"Hope in Bleakness",reversed:{action:"Smart Idea turn Foolish"}},{action:"Productivity",reversed:{action:"Overconfidence"}},{action:"Moderation",reversed:{action:"Blind Fury"}},{action:"Cunning",reversed:{action:"Overreaching"}},{action:"Using the Environment",social:"Duty, Obidience",reversed:{action:"Environmental Hazard",social:"Corruption"}},{action:"Devastation",social:"Maturity",reversed:{action:"Outmanouvered",social:"Tyranny"}}]}),l="Major Disadvantage",d="Disadvantage",u="Normal",m="Advantage",v="Major Advantage";function h(e){return n.a.createElement("button",{className:"advantage-button",onClick:function(){e.setDrawType(e.drawType),g()?e.drawType!==v&&e.drawType!==l||!g()?(e.setNum(e.num-2),e.setShowPrevious(1)):(e.setNum(e.num-3),e.setShowPrevious(2)):(e.setNum(e.num-1),e.setShowPrevious(0))}},"Draw with ",e.drawType)}function w(e){return n.a.createElement("div",{className:e.small?"card-border-small":"card-border-large"},n.a.createElement("div",{className:"card-inner"},n.a.createElement("div",{className:"text-box backwards"},e.card.reversed.action),n.a.createElement("div",{className:null!=e.card.reversed.social?"social-box backwards":"text-box"},e.card.reversed.social),n.a.createElement("div",{className:"art-box"}),n.a.createElement("div",{className:null!=e.card.social?"social-box":"text-box"},e.card.social),n.a.createElement("div",{className:"text-box"},e.card.action)))}function p(e){var a=e.drawType===v||e.drawType===l,t=0===e.showPrevious||a&&1===e.showPrevious,r=e.drawType===m||e.drawType===v?"best":"worst";return n.a.createElement("div",null,n.a.createElement("div",{className:"top-cards"},2===e.showPrevious?n.a.createElement(w,{card:e.cards[e.num+2],small:!0}):n.a.createElement("div",null),e.showPrevious>0?n.a.createElement(w,{card:e.cards[e.num+1],small:!0}):n.a.createElement("div",null)),n.a.createElement("div",{className:"show-reverse"},n.a.createElement(w,{card:e.cards[e.num]}),t?n.a.createElement("div",null," ",n.a.createElement(w,{card:E(e.cards[e.num]),small:!0}),n.a.createElement("div",null,"Choose the ",r," of the options from the card")):n.a.createElement("div",null)))}var E=function(e){return{action:e.reversed.action,social:e.reversed.social,reversed:{action:e.action,social:e.social}}},g=function(){return Math.random()>=.5};function y(e){for(var a,t,r=e.length;0!==r;)t=Math.floor(Math.random()*r),a=e[r-=1],e[r]=e[t],e[t]=a;return e}var b=function(){var e=Object(r.useState)(y(s())),a=Object(i.a)(e,2),t=a[0],o=a[1],c=Object(r.useState)(t.length),b=Object(i.a)(c,2),f=b[0],N=b[1],T=Object(r.useState)(u),S=Object(i.a)(T,2),P=S[0],x=S[1],O=Object(r.useState)(0),C=Object(i.a)(O,2),D=C[0],k=C[1],j=g();return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},f===t.length?n.a.createElement("div",null):P===u?n.a.createElement(w,{card:j?t[f]:E(t[f])}):n.a.createElement(p,{cards:t,num:f,drawType:P,showPrevious:D}),f<2?n.a.createElement("button",{onClick:function(){o(y(t)),N(t.length),k(0)}},"Shuffle"):n.a.createElement("div",{className:"buttons"},n.a.createElement("button",{onClick:function(){N(f-1),k(0),x(u)}},"Draw a Card"),n.a.createElement(h,{drawType:m,num:f,setNum:N,setShowPrevious:k,setDrawType:x}),n.a.createElement(h,{drawType:v,num:f,setNum:N,setShowPrevious:k,setDrawType:x}),n.a.createElement(h,{drawType:d,num:f,setNum:N,setShowPrevious:k,setDrawType:x}),n.a.createElement(h,{drawType:l,num:f,setNum:N,setShowPrevious:k,setDrawType:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.2b437a97.chunk.js.map