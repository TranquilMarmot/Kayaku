(this.webpackJsonpkayaku=this.webpackJsonpkayaku||[]).push([[0],{14:function(n,e,t){},15:function(n,e,t){"use strict";t.r(e);var r,o,c,i=t(2),a=t.n(i),u=t(7),b=t.n(u),d=t(3),l=t(1),s=t(0),f=t(5),j=t(4);(o=r||(r={})).Unknown="unknown",o.Positive="positive",o.Negative="negative",function(n){n.GiveHint="GiveHint",n.PlayCard="PlayCard",n.EditCard="EditCard",n.MoveCard="MoveCard"}(c||(c={}));var O;!function(n){n[n.LEFT=0]="LEFT",n[n.RIGHT=1]="RIGHT"}(O||(O={}));function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function v(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(t,!0).forEach((function(e){Object(j.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var g=function(){return{color:{blue:r.Unknown,yellow:r.Unknown,red:r.Unknown,green:r.Unknown,white:r.Unknown},number:{one:r.Unknown,two:r.Unknown,three:r.Unknown,four:r.Unknown,five:r.Unknown}}},h=function(n){for(var e=[],t=0;t<n;t++)e.push(g());return e},w=function(n,e){switch(e.type){case c.GiveHint:return function(n,e){var t=e.indices,o=e.color,c=e.number;return n.map((function(n,e){var i=t.includes(e);return o?v({},n,{color:v({},n.color,Object(j.a)({},o,i?r.Positive:r.Negative))}):c?v({},n,{number:v({},n.number,Object(j.a)({},c,i?r.Positive:r.Negative))}):n}))}(n,e);case c.PlayCard:return function(n,e){var t=e.index,r=Object(f.a)(n);return r.splice(t,1),r.push(g()),r}(n,e);case c.MoveCard:return function(n,e){var t=e.index,r=e.direction===O.LEFT?t-1:t+1;r===n.length?r=0:-1===r&&(r=n.length-1);var o=Object(f.a)(n),c=v({},o[r]),i=v({},o[t]);return o[t]=c,o[r]=i,o}(n,e);case c.EditCard:return function(n,e){return n.map((function(n,t){return t===e.index?e.card:n}))}(n,e);default:return n}},y=function(n,e){var t=w(n,e);return localStorage.setItem("currentGame",JSON.stringify(t)),t},m=function(n){switch(n.confidence){case r.Positive:return Object(s.b)("span",{role:"img","aria-label":"positive"},"\u2714");case r.Negative:return Object(s.b)("span",{role:"img","aria-label":"negative"},"\u274c");case r.Unknown:default:return Object(s.b)("span",null)}};function x(){var n=Object(l.a)(["\n  grid-row: ",";\n  grid-column: ",";\n  border-right: 1px solid black;\n  border-bottom: 1px solid gray;\n  border-top: 1px solid gray;\n"]);return x=function(){return n},n}var C=function(n,e){return Object(s.a)(x(),n,e)},k=function(n){var e=n.card,t=n.infoType,r=n.infoKey,o=n.emoji,c=n.row;return Object(s.b)(a.a.Fragment,null,Object(s.b)("div",{css:C(c,1)},Object(s.b)("span",{role:"img","aria-label":"".concat(r)},o)),Object(s.b)("div",{css:C(c,2)},Object(s.b)(m,{confidence:e[t][r]})))};function T(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  font-size: 20px;\n  flex: 1;\n"]);return T=function(){return n},n}function S(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 97%;\n  margin-top: 3%;\n"]);return S=function(){return n},n}var P=Object(s.a)(S()),K=Object(s.a)(T()),E=function(n){var e=n.card;return Object(s.b)("div",{css:P},Object(s.b)("div",{css:K},Object(s.b)(k,{card:e,infoType:"color",infoKey:"blue",emoji:"\ud83d\udd37",row:1}),Object(s.b)(k,{card:e,infoType:"color",infoKey:"yellow",emoji:"\ud83d\udc9b",row:2}),Object(s.b)(k,{card:e,infoType:"color",infoKey:"red",emoji:"\ud83d\udd3a",row:3}),Object(s.b)(k,{card:e,infoType:"color",infoKey:"green",emoji:"\ud83c\udf4f",row:4}),Object(s.b)(k,{card:e,infoType:"color",infoKey:"white",emoji:"\u2b1c",row:5})),Object(s.b)("div",{css:K},Object(s.b)(k,{card:e,infoType:"number",infoKey:"one",emoji:"1\ufe0f\u20e3",row:1}),Object(s.b)(k,{card:e,infoType:"number",infoKey:"two",emoji:"2\ufe0f\u20e3",row:2}),Object(s.b)(k,{card:e,infoType:"number",infoKey:"three",emoji:"3\ufe0f\u20e3",row:3}),Object(s.b)(k,{card:e,infoType:"number",infoKey:"four",emoji:"4\ufe0f\u20e3",row:4}),Object(s.b)(k,{card:e,infoType:"number",infoKey:"five",emoji:"5\ufe0f\u20e3",row:5})))};function H(){var n=Object(l.a)(["\n  transition: all 0.3s ease;\n  border-radius: 10px;\n  padding: 10px 15px;\n  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);\n  border: solid 2px transparent;\n  background-image: linear-gradient(\n      rgba(255, 255, 255, 0),\n      rgba(255, 255, 255, 0)\n    ),\n    linear-gradient(135deg, #ff0000 0%, #0000ff 50%, #ffff00 100%);\n  color: #00ff00;\n  font-weight: 800;\n\n  &:hover {\n    cursor: pointer;\n    transition: all 0.5s ease;\n    box-shadow: 3px 3px 6px 0 rgba(157, 96, 212, 0.5);\n  }\n"]);return H=function(){return n},n}var U=Object(s.a)(H()),G=function(n){var e=n.children;return Object(s.b)("button",Object.assign({css:U},n),e)};function N(){var n=Object(l.a)(["\n  margin: auto;\n  border: 1px solid #888;\n  width: 80%;\n  color: black;\n  background: linear-gradient(\n    315deg,\n    rgba(137, 196, 255, 1) 0%,\n    rgba(50, 255, 57, 1) 100%\n  );\n"]);return N=function(){return n},n}function F(){var n=Object(l.a)(["\n  position: fixed; /* Stay in place */\n  z-index: 1000; /* Sit on top */\n  padding-top: 10px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n"]);return F=function(){return n},n}var M=Object(s.a)(F()),A=Object(s.a)(N()),D=function(n){var e=n.children;return Object(s.b)("div",{css:M},Object(s.b)("div",{css:A},e))};function I(){var n=Object(l.a)(["\n  padding: 15px 20px;\n  width: 100px;\n"]);return I=function(){return n},n}function L(){var n=Object(l.a)(["\n  border-top: 2px solid grey;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n"]);return L=function(){return n},n}var R=Object(s.a)(L()),W=Object(s.a)(I()),z=function(n){var e=n.onCloseClick,t=n.onConfirmClick;return Object(s.b)("div",{css:R},e&&Object(s.b)(G,{css:W,onClick:e},"Cancel"),t&&Object(s.b)(G,{css:W,onClick:t},"Apply"))};function J(){var n=Object(l.a)(["\n  font-size: 30px;\n  padding: 10px;\n  min-width: 50px;\n  display: inline-block;\n"]);return J=function(){return n},n}function B(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function V(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?B(t,!0).forEach((function(e){Object(j.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):B(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var $=Object(s.a)(J()),q=function(n){var e=n.onChange,t=n.card,o=n.dropdownType,c=n.dropdownKey,i=n.emoji,a="dropdown-".concat(o,"-").concat(c),u=t[o][c];return Object(s.b)("div",null,Object(s.b)("label",{htmlFor:a},Object(s.b)("span",{css:$,role:"img","aria-label":"".concat(c)},i)),Object(s.b)("select",{id:a,onChange:function(n){return e(function(n,e,t,r){return V({},n,Object(j.a)({},e,V({},n[e],Object(j.a)({},t,r))))}(t,o,c,n.target.value))},defaultValue:u},Object(s.b)("option",{value:r.Unknown}," "),Object(s.b)("option",{value:r.Positive},"\u2714"),Object(s.b)("option",{value:r.Negative},"\u274c")))};function Q(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Q=function(){return n},n}var X=function(n,e,t,r,o){r(function(n,e){return{type:c.EditCard,index:n,card:e}}(e,n)),t(),o()},Y=Object(s.a)(Q()),Z=function(n){var e=n.index,t=n.card,r=n.onCloseEditCardModal,o=n.dispatch,c=n.onCloseActions,u=Object(i.useState)(t),b=Object(d.a)(u,2),l=b[0],f=b[1];return Object(s.b)(D,null,Object(s.b)(a.a.Fragment,null,Object(s.b)("h1",null,"Edit Card"),Object(s.b)("div",{css:Y},Object(s.b)(q,{onChange:f,card:l,dropdownType:"color",dropdownKey:"blue",emoji:"\ud83d\udd37"}),Object(s.b)(q,{onChange:f,card:l,dropdownType:"color",dropdownKey:"yellow",emoji:"\ud83d\udc9b"}),Object(s.b)(q,{onChange:f,card:l,dropdownType:"color",dropdownKey:"red",emoji:"\ud83d\udd3a"}),Object(s.b)(q,{onChange:f,card:l,dropdownType:"color",dropdownKey:"green",emoji:"\ud83c\udf4f"}),Object(s.b)(q,{onChange:f,card:l,dropdownType:"color",dropdownKey:"white",emoji:"\u2b1c"})),Object(s.b)("div",{css:Y},Object(s.b)(q,{onChange:f,card:l,dropdownType:"number",dropdownKey:"one",emoji:"1\ufe0f\u20e3"}),Object(s.b)(q,{onChange:f,card:l,dropdownType:"number",dropdownKey:"two",emoji:"2\ufe0f\u20e3"}),Object(s.b)(q,{onChange:f,card:l,dropdownType:"number",dropdownKey:"three",emoji:"3\ufe0f\u20e3"}),Object(s.b)(q,{onChange:f,card:l,dropdownType:"number",dropdownKey:"four",emoji:"4\ufe0f\u20e3"}),Object(s.b)(q,{onChange:f,card:l,dropdownType:"number",dropdownKey:"five",emoji:"5\ufe0f\u20e3"})),Object(s.b)(z,{onCloseClick:r,onConfirmClick:function(){return X(l,e,r,o,c)}})))};function _(){var n=Object(l.a)(["\n  display: flex;\n"]);return _=function(){return n},n}function nn(){var n=Object(l.a)(["\n  flex: 1;\n  margin: 15px;\n"]);return nn=function(){return n},n}function en(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"]);return en=function(){return n},n}var tn=function(n,e,t){t(function(n){return{type:c.PlayCard,index:n}}(n)),e()},rn=function(n,e,t,r){r(function(n,e){return{type:c.MoveCard,index:n,direction:e}}(n,e)),t()},on=Object(s.a)(en()),cn=Object(s.a)(nn()),an=Object(s.a)(_()),un=function(n){var e=n.index,t=n.card,r=n.onCloseActions,o=n.dispatch,c=Object(i.useState)(!1),a=Object(d.a)(c,2),u=a[0],b=a[1];return Object(s.b)("div",{css:on},Object(s.b)(G,{css:cn,onClick:function(){return tn(e,r,o)}},"Play"),Object(s.b)(G,{css:cn,onClick:function(){return b(!0)}},"Edit"),Object(s.b)(G,{css:cn,onClick:r},"Cancel"),Object(s.b)("div",{css:an},Object(s.b)(G,{css:cn,onClick:function(){return rn(e,O.LEFT,r,o)}},"\u2b05"),Object(s.b)(G,{css:cn,onClick:function(){return rn(e,O.RIGHT,r,o)}},"\u27a1")),u&&Object(s.b)(Z,{index:e,card:t,onCloseActions:r,onCloseEditCardModal:function(){return b(!1)},dispatch:o}))};function bn(){var n=Object(l.a)(["\n  transition: all 0.3s ease;\n  min-height: 250px;\n  border: 2px solid black;\n  border-radius: 5px;\n  margin: 5px;\n  background: radial-gradient(\n    circle,\n    rgb(63, 236, 251) 0%,\n    rgb(70, 88, 252) 95%,\n    rgb(174, 70, 252) 100%\n  );\n  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);\n\n  &:hover {\n    cursor: pointer;\n    transition: all 0.5s ease;\n    box-shadow: 3px 3px 6px 0 rgba(157, 96, 212, 0.5);\n  }\n"]);return bn=function(){return n},n}var dn=Object(s.a)(bn()),ln=function(n){var e=n.index,t=Object(i.useContext)(Nn),r=Object(d.a)(t,2),o=r[0],c=r[1],a=Object(i.useState)(!1),u=Object(d.a)(a,2),b=u[0],l=u[1],f=o[e];return Object(s.b)("div",{role:"button",css:dn,onClick:function(){return b?null:l(!0)}},!b&&Object(s.b)(E,{card:f}),b&&Object(s.b)(un,{index:e,card:f,onCloseActions:function(){return l(!1)},dispatch:c}))};function sn(){var n=Object(l.a)(["\n        display: flex;\n      "]);return sn=function(){return n},n}function fn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n"]);return fn=function(){return n},n}function jn(){var n=Object(l.a)(["\n  padding: 25px 20px;\n  border-radius: 5px;\n  border: 1px solid black;\n  margin-bottom: 5px;\n  background: radial-gradient(\n    circle,\n    rgb(63, 236, 251) 0%,\n    rgb(70, 88, 252) 95%,\n    rgb(174, 70, 252) 100%\n  );\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return jn=function(){return n},n}var On=function(n,e,t){t(e.map((function(e,t){return"".concat(t)===n.target.dataset.index?n.target.checked:e})))},pn=Object(s.a)(jn()),vn=Object(s.a)(fn()),gn=function(n){for(var e=n.cards,t=n.selectedCards,r=n.setSelectedCards,o=[],c=0;c<e.length;c++)o.push(Object(s.b)("div",{key:"select-card-".concat(c),"data-card-index":c,css:vn},Object(s.b)("label",{css:pn,htmlFor:"select-card-".concat(c)},c+1),Object(s.b)("input",{id:"select-card-".concat(c),"data-index":c,type:"checkbox",checked:t[c],onChange:function(n){return On(n,t,r)}})));return Object(s.b)("div",{css:Object(s.a)(sn())},o)};function hn(){var n=Object(l.a)(["\n  font-size: 30px;\n  display: flex;\n"]);return hn=function(){return n},n}function wn(){var n=Object(l.a)(["\n  padding: 10px;\n  min-width: 50px;\n  display: inline-block;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return wn=function(){return n},n}var yn=Object(s.a)(wn()),mn=function(n,e,t,r){var o="color-or-number-".concat(n);return Object(s.b)("div",null,Object(s.b)("label",{htmlFor:o,css:yn},e),Object(s.b)("input",{type:"radio",id:o,value:n,name:"color-or-number",checked:t===n,onChange:function(){return r(n)}}))},xn=Object(s.a)(hn()),Cn=function(n){var e=n.selectedNumberOrColor,t=n.setSelectedNumberOrColor;return Object(s.b)("div",null,Object(s.b)("div",{css:xn},mn("blue","\ud83d\udd37",e,t),mn("yellow","\ud83d\udc9b",e,t),mn("red","\ud83d\udd3a",e,t),mn("green","\ud83c\udf4f",e,t),mn("white","\u2b1c",e,t)),Object(s.b)("div",{css:xn},mn("one","1\ufe0f\u20e3",e,t),mn("two","2\ufe0f\u20e3",e,t),mn("three","3\ufe0f\u20e3",e,t),mn("four","4\ufe0f\u20e3",e,t),mn("five","5\ufe0f\u20e3",e,t)))};function kn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return kn=function(){return n},n}var Tn=Object(s.a)(kn()),Sn=function(n,e,t,r){var o=[];e.forEach((function(n,e){return n?o.push(e):null}));var i,a,u,b=function(n){switch(n){case"blue":case"yellow":case"red":case"green":case"white":return!0;default:return!1}}(t)?t:void 0,d=function(n){switch(n){case"one":case"two":case"three":case"four":case"five":return!0;default:return!1}}(t)?t:void 0;n((i=o,a=b,u=d,{type:c.GiveHint,indices:i,color:a,number:u})),r()},Pn=function(n){var e=n.closeModal,t=Object(i.useContext)(Nn),r=Object(d.a)(t,2),o=r[0],c=r[1],u=Object(i.useState)(Array(o.length).fill(!1)),b=Object(d.a)(u,2),l=b[0],f=b[1],j=Object(i.useState)(""),O=Object(d.a)(j,2),p=O[0],v=O[1];return Object(s.b)(D,null,Object(s.b)(a.a.Fragment,null,Object(s.b)("h1",null,"Give Hint"),Object(s.b)("div",{css:Tn},Object(s.b)(gn,{cards:o,selectedCards:l,setSelectedCards:f}),Object(s.b)(Cn,{selectedNumberOrColor:p,setSelectedNumberOrColor:v})),Object(s.b)(z,{onCloseClick:e,onConfirmClick:function(){return Sn(c,l,p,e)}})))};function Kn(){var n=Object(l.a)(["\n  margin: 25px;\n  padding: 40px 70px;\n"]);return Kn=function(){return n},n}var En=Object(s.a)(Kn()),Hn=function(n){var e=n.onCloseOptionsModal,t=n.onClearHand;return Object(s.b)(D,null,Object(s.b)("h1",null,"Options"),Object(s.b)(G,{css:En,onClick:function(){return t()}},"New Game"),Object(s.b)(z,{onCloseClick:e}))};function Un(){var n=Object(l.a)(["\n  height: 90%;\n  width: 25%;\n"]);return Un=function(){return n},n}function Gn(){var n=Object(l.a)(["\n  grid-row: 2;\n  display: flex;\n  justify-content: space-between;\n  margin-left: 5px;\n  margin-right: 5px;\n"]);return Gn=function(){return n},n}var Nn,Fn=Object(s.a)(Gn()),Mn=Object(s.a)(Un()),An=function(n){var e=n.setShowingGiveHintModal,t=n.clearHand,r=Object(i.useState)(!1),o=Object(d.a)(r,2),c=o[0],a=o[1];return Object(s.b)("div",{css:Fn},Object(s.b)(G,{css:Mn,onClick:function(){return a(!0)}},"Options"),Object(s.b)(G,{css:Mn,onClick:function(){return e(!0)}},"Give Hint"),c&&Object(s.b)(Hn,{onCloseOptionsModal:function(){return a(!1)},onClearHand:t}))};function Dn(){var n=Object(l.a)(["\n    ","\n    grid-template-columns: repeat(",", 1fr);\n  "]);return Dn=function(){return n},n}function In(){var n=Object(l.a)(["\n  grid-row: 1;\n  display: grid;\n"]);return In=function(){return n},n}function Ln(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-rows: 5fr 1fr;\n  height: 100%;\n"]);return Ln=function(){return n},n}var Rn=Object(s.a)(Ln()),Wn=Object(s.a)(In()),zn=function(n){var e=n.initialState,t=n.clearHand;Nn||(Nn=Object(i.createContext)([e,function(n){}]));var r=Object(i.useState)(!1),o=Object(d.a)(r,2),c=o[0],a=o[1],u=Object(s.a)(Dn(),Wn,e.length);return Object(s.b)("div",{css:Rn},Object(s.b)(Nn.Provider,{value:Object(i.useReducer)(y,e)},Object(s.b)("div",{css:u},function(n){for(var e=[],t=0;t<n;t++)e.push(Object(s.b)(ln,{index:t,key:"card-".concat(t)}));return e}(e.length)),Object(s.b)(An,{setShowingGiveHintModal:a,clearHand:t}),c&&Object(s.b)(Pn,{closeModal:function(){return a(!1)}})))};function Jn(){var n=Object(l.a)(["\n  margin: 0;\n"]);return Jn=function(){return n},n}function Bn(){var n=Object(l.a)(["\n  padding: 25px;\n"]);return Bn=function(){return n},n}function Vn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-around;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 15%;\n"]);return Vn=function(){return n},n}var $n=Object(s.a)(Vn()),qn=Object(s.a)(Bn()),Qn=Object(s.a)(Jn()),Xn=function(n){var e=n.setHand;return Object(s.b)("div",null,Object(s.b)("h1",{css:Qn},"\u706b\u85ac"),Object(s.b)("h2",null,"Kayaku"),Object(s.b)("h3",null,"How many cards?"),Object(s.b)("div",{css:$n},Object(s.b)(G,{css:qn,onClick:function(){return e(h(4))}},"4"),Object(s.b)(G,{css:qn,onClick:function(){return e(h(5))}},"5")))};function Yn(){var n=Object(l.a)(["\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  color: white;\n  background: linear-gradient(\n    135deg,\n    rgba(50, 255, 57, 1) 0%,\n    rgba(137, 196, 255, 1) 100%\n  );\n"]);return Yn=function(){return n},n}var Zn=Object(s.a)(Yn()),_n=function(){var n=Object(i.useState)(null),e=Object(d.a)(n,2),t=e[0],r=e[1];Object(i.useEffect)((function(){var n=localStorage.getItem("currentGame");n&&r(JSON.parse(n))}),[]);return Object(s.b)("div",{css:Zn},t?Object(s.b)(zn,{initialState:t,clearHand:function(){r(null),localStorage.removeItem("currentGame")}}):Object(s.b)(Xn,{setHand:r}))},ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}t(14);b.a.render(a.a.createElement(_n,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/Kayaku",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Kayaku","/service-worker.js");ne?(!function(n,e){fetch(n).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):ee(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ee(e,n)}))}}()},9:function(n,e,t){n.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.76d23c31.chunk.js.map