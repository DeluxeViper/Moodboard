(this["webpackJsonpreact-moodboard"]=this["webpackJsonpreact-moodboard"]||[]).push([[0],{117:function(e,t){},119:function(e,t){},131:function(e,t){},133:function(e,t){},153:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(66),i=n.n(o),r=(n(86),n(11)),s=n(7),d=n(15),l=(n(89),n(90),n(68)),u=n.n(l),j=n(71),f=n.n(j),h=n(70),b=n.n(h),g=n(72),O=n.n(g),m=n(2),v=[{id:0,title:"Photos",icon:Object(m.jsx)(u.a,{}),component:"imagesSection"},{id:1,title:"Backgrounds",icon:Object(m.jsx)(b.a,{}),component:"backgroundsSection"},{id:2,title:"Uploads",icon:Object(m.jsx)(f.a,{}),component:"uploadSection"},{id:3,title:"Share",icon:Object(m.jsx)(O.a,{}),component:"shareSection"}],p=n(9);var x=function(e){var t=function(e){var t=[];return e.forEach((function(e){var n=e.photoCategory;-1===t.indexOf(n)&&t.push(n)})),t}(e.items);return Object(m.jsx)("label",{className:"categorySelectLabel",children:Object(m.jsxs)("select",{onChange:function(t){e.onChange(t.target.value)},className:"categorySelect",children:[Object(m.jsx)("option",{value:"",children:"All"}),t.map((function(e,t){return Object(m.jsx)("option",{value:e,children:e},t)}))]})})},S=new(n(73).a)({url:"https://aetava.com",consumerKey:"ck_5d12676cfabf6f515105f76db0fbb73ca0039573",consumerSecret:"cs_8d3ab8468c84f15315c51417cc1a74625dbbc61a",version:"wc/v3"}),w=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=(n[0],n[1]),o=Object(c.useState)([]),i=Object(s.a)(o,2),r=i[0],d=i[1];Object(c.useEffect)((function(){l()}),[]);var l=function(){d([]),S.get("products").then((function(e){200===e.status&&e.data&&e.data.forEach((function(e){"Reverse Withdrawal Payment"!==e.name&&e.images&&e.images.forEach((function(e){d((function(t){return[].concat(Object(p.a)(t),[e])}))}))}))})).catch((function(e){console.log(e)}))};return Object(m.jsxs)("div",{className:"itemsSection",children:[Object(m.jsx)(x,{items:r,onChange:function(e){a(e)}}),Object(m.jsx)("div",{className:"itemsWrapper",children:r.map((function(t,n){return Object(m.jsx)("div",{className:"imageContainer",children:Object(m.jsx)("img",{src:t.src,alt:t.alt,className:"itemsImage",draggable:"true",onDragStart:function(n){e.onChangeDragUrl(n.target.src,t.id)},onClick:function(n){console.log(n.target),e.handleAddOnClick(n.target.src,t.id)}})},n)}))})]})};var C=function(e){return Object(m.jsx)(m.Fragment,{})},N=n(77),k=n.n(N);var y=function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],o=n[1];window.onbeforeunload=function(){localStorage.setItem("uploadedImages",JSON.stringify([]))},Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("uploadedImages"));o(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("uploadedImages",JSON.stringify(a))}),[a]);var i=function(){return Object(m.jsx)("div",{className:"uploadImageWrap",children:Object(m.jsxs)("label",{htmlFor:"contained-button-upload",className:"uploadImageButton",onChange:function(e){return function(e){var t=e.target.files[0];o((function(e){return[].concat(Object(p.a)(e),[URL.createObjectURL(t)])}))}(e)},children:[Object(m.jsx)("input",{type:"file",accept:"image/*",id:"contained-button-upload",hidden:!0}),Object(m.jsx)(k.a,{}),Object(m.jsx)("span",{className:"uploadImageText",children:"Upload"})]})})},r=function(){return null===a||void 0===a?void 0:a.map((function(t,n){return Object(m.jsx)("div",{className:"imageContainer",children:Object(m.jsx)("img",{src:t,alt:"",className:"itemsImage",draggable:"true",elementcategory:t,onDragStart:function(t){e.onChangeDragUrl(t.target.src)},onClick:function(t){e.handleAddOnClick(t.target.src)}})},n)}))};return Object(m.jsxs)("div",{className:"itemsSection",children:[Object(m.jsx)(i,{}),a.length>0?Object(m.jsx)(r,{}):Object(m.jsx)("p",{className:"uploadTooltip",children:"Upload your images with button above."})]})},D=n(78),I=n.n(D);var B=function(e){return Object(m.jsx)("div",{className:"itemsSection",children:Object(m.jsx)("div",{className:"shareSectionWrap",children:Object(m.jsxs)("button",{onClick:function(){var t=e.stageRef.current.toDataURL(),n=document.createElement("a");console.log(t),console.log(n),n.download="moodboard-export.png",n.href=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)},className:"downloadImage",children:[Object(m.jsx)(I.a,{}),"Export canvas as image"]})})})};var E=function(e){return Object(m.jsx)("div",{className:"toolsBarWrap",children:Object(m.jsx)("div",{className:"toolsBarBody",children:Object(m.jsx)("div",{className:"toolsItemsWrap",children:v.map((function(t,n){return Object(m.jsx)("div",{className:"toolsItem",onClick:function(){e.changeSelectedTool(n)},children:Object(m.jsxs)("div",{className:"toolsItemContent",children:[Object(m.jsx)("span",{className:"toolIcon",children:t.icon}),Object(m.jsx)("span",{className:"toolTitle",children:t.title})]})},n)}))})})})},U=n(79),T=n.n(U),R=function(e){var t=Object(c.useState)(0),n=Object(s.a)(t,2),a=n[0],o=n[1],i={imagesSection:w,backgroundsSection:C,uploadSection:y,shareSection:B},r=Object(c.useState)(!0),d=Object(s.a)(r,2),l=d[0],u=d[1];return Object(c.useEffect)((function(){e.resizeCanvasOnSidebarChange()}),[l]),Object(m.jsxs)("div",{className:"itemsListWrap ".concat(l?"sidebarOpen":"sidebarClosed"),children:[Object(m.jsx)("div",{className:"expandButton",onClick:function(){u(!l)},children:Object(m.jsx)(T.a,{})}),Object(m.jsxs)("div",{className:"itemsListBody",children:[Object(m.jsx)(E,{changeSelectedTool:function(e){o(e)}}),v.map((function(t){if(t.id===a){var n=i[t.component];return Object(m.jsx)(n,{onChangeDragUrl:e.onChangeDragUrl,handleAddOnClick:e.handleAddOnClick,dragUrl:e.dragUrl,addToBackground:e.addToBackground,removeBackground:e.removeBackground,stageRef:e.stageRef},t.id)}}))]})]})},P=n(35),W=n.n(P),L=function(e){var t=e.image,n=e.shapeProps,a=e.id,o=e.isSelected,i=e.onSelect,l=e.handleDragStart,u=e.handleDragEnd,j=e.onChange,f=e.handleOnDelete,h=W()(null===t||void 0===t?void 0:t.src),b=Object(s.a)(h,1)[0],g=Object(c.useRef)(),O=Object(c.useRef)();Object(c.useEffect)((function(){o&&(O.current.nodes([g.current]),O.current.getLayer().batchDraw())}),[o]);return Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)(d.a,Object(r.a)(Object(r.a)({image:b,id:a,draggable:!0,onDrop:function(e){},onDragStart:l,onDragEnd:u,onClick:i,ref:g},n),{},{shadowColor:"black",shadowBlur:10,shadowOffsetX:0,shadowOffsetY:4,shadowOpacity:.6,onTransformEnd:function(e){var t=g.current,c=t.scaleX(),a=t.scaleY();t.scaleX(1),t.scaleY(1),t.width(Math.max(5,t.width()*c)),t.height(Math.max(t.height()*a)),j(Object(r.a)(Object(r.a)({},n),{},{x:t.x(),y:t.y(),width:t.width(),height:t.height()}))}})),o&&Object(m.jsx)(d.f,{ref:O,boundBoxFunc:function(e,t){return t.width<5||t.height<5?e:t},zIndex:500,children:Object(m.jsx)(d.c,{fill:"black",x:-30,y:-30,data:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",onClick:function(){return f(b.src)}})})]})};var z=function(e){var t=e.backgroundUrl,n=e.width,c=e.height,a=W()(t),o=Object(s.a)(a,1)[0],i=1,r=1;return void 0!==o&&(i=n/o.width,r=c/o.height),Object(m.jsx)(d.d,{x:0,y:0,zIndex:-100,width:n,height:c,fillPatternImage:o,fillPatternRepeat:"no-repeat",fillPatternScaleX:i,fillPatternScaleY:r,id:"canvasBackground"})},A=function(){var e=2e3,t=2e3,n=Object(c.useState)({width:e,height:t,scale:1}),a=Object(s.a)(n,2),o=a[0],i=a[1],l=Object(c.useRef)(),u=Object(c.useRef)(),j=Object(c.useState)(),f=Object(s.a)(j,2),h=f[0],b=f[1],g=Object(c.useState)(),O=Object(s.a)(g,2),v=O[0],p=O[1],x=Object(c.useState)([]),S=Object(s.a)(x,2),w=S[0],C=S[1],N=Object(c.useState)(),k=Object(s.a)(N,2),y=k[0],D=k[1],I=Object(c.useState)(null),B=Object(s.a)(I,2),E=B[0],U=B[1],T=function(){var n=u.current.clientWidth/e;i({width:e*n,height:t*n,scale:n})};Object(c.useEffect)((function(){return T(),window.addEventListener("resize",T,!1),function(){return window.addEventListener("resize",T,!1)}}),[]);var P=function(e){var t=w.filter((function(t){return t.src!==e}));C(t)},W=function(e){};return Object(m.jsxs)("div",{className:"workContainer",children:[Object(m.jsx)(R,{dragUrl:h,onChangeDragUrl:function(e,t){b(e),p(t)},handleAddOnClick:function(e,t){var n=o.width/2,c=o.height/2;C(w.concat([{x:n,y:c,src:e,id:t}]))},addToBackground:function(e){D(e)},removeBackground:function(){D(null)},resizeCanvasOnSidebarChange:function(){setTimeout((function(){T()}),420)},stageRef:l}),Object(m.jsx)("div",{className:"canvasWrap",children:Object(m.jsx)("div",{className:"canvasBody",ref:u,onDrop:function(e,t){e.preventDefault(),l.current.setPointersPositions(e),C(w.concat([Object(r.a)(Object(r.a)({},l.current.getPointerPosition()),{},{src:h,id:v})]))},onDragOver:function(e){return e.preventDefault()},children:Object(m.jsx)(d.e,{width:o.width,height:o.height,scaleX:o.scale,scaleY:o.scale,className:"canvasStage",ref:l,onMouseDown:function(e){!function(e){var t=e.target===e.target.getStage(),n="canvasBackground"===e.target.getId();(t||n)&&U(null)}(e)},children:Object(m.jsxs)(d.b,{children:["string"===typeof y&&Object(m.jsx)(z,{backgroundUrl:y,width:e,height:t}),w.map((function(e,t){return Object(m.jsx)(L,{image:e,shapeProps:e,id:null===e||void 0===e?void 0:e.id,isSelected:(null===e||void 0===e?void 0:e.id)===E,onSelect:function(t){return function(e,t){U(t),e.target.moveToTop(),C((function(e){var n=e.slice(),c=e.find((function(e){return t===e.id})),a=e.indexOf(c);return n.splice(a,1),n.push(c),n}))}(t,null===e||void 0===e?void 0:e.id)},handleDragStart:function(t){return function(e,t){U(t),e.target.moveToTop(),C((function(e){var n=e.slice(),c=e.find((function(e){return t===e.id})),a=e.indexOf(c);return n.splice(a,1),n.push(c),n}))}(t,null===e||void 0===e?void 0:e.id)},handleDragEnd:W,onChange:function(e){!function(e,t){var n=w,c=n[t];c=e,n[t]=c,C(n)}(e,t)},handleOnDelete:P},null===e||void 0===e?void 0:e.id)}))]})})})})]})};var M=function(){return Object(m.jsx)("div",{className:"bodyWrap",children:Object(m.jsx)(A,{})})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root"))},86:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){}},[[153,1,2]]]);
//# sourceMappingURL=main.0d60a30a.chunk.js.map