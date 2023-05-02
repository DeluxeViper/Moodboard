(this["webpackJsonpreact-moodboard"]=this["webpackJsonpreact-moodboard"]||[]).push([[0],{133:function(e,t,n){},137:function(e,t,n){},167:function(e,t,n){},190:function(e,t){},192:function(e,t){},204:function(e,t){},206:function(e,t){},228:function(e,t,n){},252:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(34),i=n.n(o),r=(n(167),n(19)),s=n(23),l=n(10),d=n(323),u=n(312),j=n(308),b=n(138),h=n(305),O=n(51),f=n(143),g=n.n(f),x=(n(133),n(2)),m=function(e){var t=e.image,n=e.shapeProps,c=e.id,o=e.isSelected,i=e.onSelect,r=e.handleDragStart,d=e.handleDragEnd,u=e.onChange,j=e.handleOnDelete,b=e.handleImageBounds,h=g()(null===t||void 0===t?void 0:t.src,"anonymous"),f=Object(l.a)(h,1)[0],m=Object(a.useRef)(),p=Object(a.useRef)();Object(a.useEffect)((function(){o&&(p.current.nodes([m.current]),p.current.getLayer().batchDraw(),p.current.zIndex(1e4),m.current.scaleX(1),m.current.scaleY(1))}),[o]);return Object(x.jsxs)(a.Fragment,{children:[Object(x.jsx)(O.b,Object(s.a)(Object(s.a)({image:f,id:c,draggable:!0,onDrop:function(e){},onDragStart:r,onDragEnd:d,onClick:i,ref:m},n),{},{shadowColor:"black",shadowBlur:10,shadowOffsetX:0,shadowOffsetY:4,shadowOpacity:.6,onTransformEnd:function(e){var t=m.current,a=t.scaleX(),c=t.scaleY();t.scaleX(1),t.scaleY(1),t.width(Math.max(5,t.width()*a)),t.height(Math.max(t.height()*c)),u(Object(s.a)(Object(s.a)({},n),{},{x:t.x(),y:t.y(),width:t.width(),height:t.height()}))},onMouseOver:function(e){e.target.getStage().container().style.cursor="grab"},onMouseLeave:function(e){e.target.getStage().container().style.cursor="default"},dragBoundFunc:function(e){return b(e,m.current)}})),o&&Object(x.jsxs)(O.f,{ref:p,boundBoxFunc:function(e,t){return t.width<5||t.height<5?e:t},zIndex:500,children:[Object(x.jsx)(O.a,{x:40,y:45,stroke:"white",fill:"white",radius:30,shadowColor:"black",shadowBlur:"4",shadowOffsetX:4,shadowOffsetY:4,shadowOpacity:.5,onClick:function(){return j(f.src)}}),Object(x.jsx)(O.d,{fill:"black",x:30,y:30,data:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",onClick:function(){return j(f.src)}})]})]})},p=n(315),v=n(311),y=n(318),w=n(149),k=n.n(w),S=(n(228),n(307)),C=n(319),E=n(320),B=n(316),D=n(146),I=n.n(D),L=function(e){var t=e.item,n=t.alt,c=(t.name,t.src),o=(t.productUrl,t.price),i=(t.stockStatus,t.id),s=Object(a.useContext)(q),l=s.mbItems,d=s.setMbItems,u=(s.snackPack,s.setSnackPack),j=Object(a.useContext)(F).stageDimensions;return Object(x.jsxs)(y.a,{sx:{maxWidth:400,padding:"0.1em",marginTop:"5px",marginBottom:"5px",marginRight:"10px",height:500},children:[Object(x.jsx)(C.a,{component:"img",image:c,alt:n,sx:{padding:"2px",objectFit:"contain"}}),Object(x.jsxs)(E.a,{children:[Object(x.jsx)(p.a,{variantBottom:"h3",component:"div",children:n}),Object(x.jsx)(p.a,{variantBottom:"h4",component:"div",children:o}),Object(x.jsx)(B.a,{onClick:function(){var e=j.width/2,t=j.height/2;d(l.concat([{x:e,y:t,src:c,crossOrigin:"anonymous",id:i}])),u((function(e){return[].concat(Object(r.a)(e),[{message:"Added ".concat(n," to Moodboard."),key:(new Date).getTime()}])}))},startIcon:Object(x.jsx)(I.a,{}),children:"Add to Moodboard"})]})]})},P=n(147),N=n.n(P),M=(n(252),n(321)),T=n(306),R=n(322),z=n(304),X=function(){var e=Object(a.useContext)(q),t=e.items,n=e.itemsLoaded,c=e.errorLoadingItems,o=Object(a.useState)([]),i=Object(l.a)(o,2),s=i[0],d=i[1],u=Object(a.useState)(""),j=Object(l.a)(u,2),b=j[0],h=j[1];return Object(a.useEffect)((function(){if(""===b)d(Object(r.a)(t));else{var e=Object(r.a)(t.filter((function(e){return e.alt.toLowerCase().includes(b.toLowerCase())})));d(Object(r.a)(e))}}),[b]),Object(a.useEffect)((function(){n&&d(Object(r.a)(t))}),[n]),Object(x.jsx)("div",{children:n||c?c?Object(x.jsx)(p.a,{variant:"h4",component:"div",style:{marginLeft:"20px"},children:"Error retrieving items."}):Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"product-search-text-field",children:Object(x.jsx)(T.a,{id:"outlined-basic",placeholder:"Search for products...",variant:"standard",value:b,InputProps:{startAdornment:Object(x.jsx)(R.a,{position:"start",children:Object(x.jsx)(z.a,{})})},onChange:function(e){h(e.target.value)},fullWidth:!0})}),s&&s.length>0&&!c?Object(x.jsx)(N.a,{className:"flickity",elementType:"div",disableImagesLoaded:!1,options:{accessibility:!1},static:!0,reloadOnUpdate:!0,contain:!0,adaptiveHeight:!0,setGalarySize:!1,children:s.map((function(e,t){return Object(x.jsx)(L,{item:e},t)}))},n):Object(x.jsx)(p.a,{variant:"h5",component:"div",style:{marginLeft:"20px"},children:"No products found."})]}):Object(x.jsx)(M.a,{className:"progress"})})},Y=function(e){var t=e.open,n=e.handleClose;return Object(x.jsx)(S.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(x.jsxs)("div",{className:"menuModal",children:[Object(x.jsx)("h3",{style:{marginLeft:"10px"},children:"Product Suggestions"}),Object(x.jsx)(X,{})]})})},A="WHITE",H="BLACK",W="BEIGE",F=(n(137),Object(a.createContext)()),U=function(){var e=-100,t=100,n=2800,c=Object(a.useState)(1),o=Object(l.a)(c,2),i=o[0],r=o[1],u=Object(a.useState)({width:n,height:2800,scale:1,stageX:0,stageY:0}),j=Object(l.a)(u,2),b=j[0],h=j[1],f=Object(a.useRef)(),g=Object(a.useRef)(),w=Object(a.useState)(),S=Object(l.a)(w,2),C=S[0],E=(S[1],Object(a.useState)()),B=Object(l.a)(E,2),D=B[0],I=(B[1],Object(a.useContext)(q)),L=I.mbItems,P=I.setMbItems,N=I.triggerExport,M=I.setTriggerExport,T=Object(a.useState)(null),R=Object(l.a)(T,2),z=R[0],X=R[1],U=Object(a.useState)(!1),G=Object(l.a)(U,2),K=G[0],V=G[1],J=Object(a.useContext)(Q).theme;Object(a.useEffect)((function(){N&&(te(),M(!1))}),[N]);var _=function(){var e=g.current.clientWidth/n;h({width:n*e,height:2800*e,scale:e})};Object(a.useEffect)((function(){return _(),window.addEventListener("resize",_,!1),function(){return window.addEventListener("resize",_,!1)}}),[]);var Z=function(e){var t=L.filter((function(t){return t.src!==e}));P(t)},$=function(e){},ee=function(n,a){var c=a.getClientRect(),o=c.height,i=c.width,r=f.current.bufferCanvas.width,s=f.current.bufferCanvas.height,l=n.x,d=n.y;return n.x<e?l=e:n.x>r-i+t&&(l=r-i+t),n.y<e?d=e:n.y>s-o+t&&(d=s-o+t),{x:l,y:d}},te=function(){console.log(L);var e=f.current.toDataURL();console.log(e)},ne=function(e,t){var n=f.current,a=n.scaleX(),c=e.x/a-n.x()/a,o=e.y/a-n.y()/a,i=t?1.05*a:a/1.05;h(Object(s.a)(Object(s.a)({},b),{},{scale:i,x:(e.x/i-c)*i,y:(e.y/i-o)*i}))};return Object(x.jsx)("div",{children:Object(x.jsxs)(F.Provider,{value:{stageDimensions:b,setStageDimensions:h},children:[Object(x.jsx)(Y,{open:K,handleClose:function(){V(!1)}}),Object(x.jsxs)("div",{className:"workContainer",children:[Object(x.jsxs)("div",{className:"slider",children:[Object(x.jsx)(p.a,{component:"p",color:L&&0===L.length?"black":"inherit",align:"center",sx:{transform:"translateX(-70%)"},children:"Zoom"}),Object(x.jsx)(v.a,{disabled:L&&0===L.length,size:"small","aria-label":"Small",valueLabelDisplay:"auto",onChange:function(e,t){r(t),null!==f&&t!==i&&ne({x:b.width/2,y:b.height/2},t>i)},max:2,min:1,step:.1,value:i})]}),Object(x.jsx)("div",{className:"canvasWrap",children:Object(x.jsx)("div",{className:"canvasBody",ref:g,onDrop:function(e,t){e.preventDefault(),f.current.setPointersPositions(e),P(L.concat([Object(s.a)(Object(s.a)({},f.current.getPointerPosition()),{},{src:C,id:D})]))},onDragOver:function(e){return e.preventDefault()},children:L&&0===L.length?Object(x.jsxs)(y.a,{style:{backgroundColor:"#f8f6f1",marginLeft:"auto",marginRight:"auto",height:"500px",width:"300px",padding:"10px",marginBottom:"20px"},children:[Object(x.jsx)(p.a,{component:"h3",color:"inherit",align:"center",sx:{fontSize:"50px",fontFamily:"SangbleuSans,Helvetica,Arial,sans-serif",letterSpacing:"-2px",transition:"700ms ease",fontVariationSettings:"wght 311",marginBottom:"2rem",outline:"none",textAlign:"center"},children:"Add products by clicking on the add item button below."}),Object(x.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(x.jsxs)("svg",{id:"more-arrows",children:[Object(x.jsx)("polygon",{class:"arrow-top",points:"37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "}),Object(x.jsx)("polygon",{class:"arrow-middle",points:"37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "}),Object(x.jsx)("polygon",{class:"arrow-bottom",points:"37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "})]})})]}):Object(x.jsx)(O.e,{width:b.width,height:b.height,scaleX:b.scale,scaleY:b.scale,x:b.stageX,y:b.stageY,className:function(){var e="";return e+=z?"canvasStageSelected":"",J===A?e+=" whiteBackground":J===W?e+=" beigeBackground":J===H&&(e+=" blackBackground"),e}(),ref:f,onMouseDown:function(e){!function(e){var t=e.target===e.target.getStage(),n="canvasBackground"===e.target.getId();(t||n)&&X(null)}(e)},children:Object(x.jsx)(O.c,{children:L.map((function(e,t){return Object(x.jsx)(m,{image:e,shapeProps:e,id:null===e||void 0===e?void 0:e.id,isSelected:(null===e||void 0===e?void 0:e.id)===z,onSelect:function(t){return function(e,t){X(t),e.target.moveToTop(),P((function(e){var n=e.slice(),a=e.find((function(e){return t===e.id})),c=e.indexOf(a);return n.splice(c,1),n.push(a),n}))}(t,null===e||void 0===e?void 0:e.id)},handleDragStart:function(t){return n=null===e||void 0===e?void 0:e.id,X(n),void P((function(e){var t=e.slice(),a=e.find((function(e){return n===e.id})),c=e.indexOf(a);return t.splice(c,1),t.push(a),t}));var n},handleDragEnd:$,handleImageBounds:ee,onChange:function(e){!function(e,t){var n=L,a=n[t];a=e,n[t]=a,P(n)}(e,t)},handleOnDelete:Z},null===e||void 0===e?void 0:e.id)}))})})})}),Object(x.jsx)("div",{className:"fab",children:Object(x.jsx)(d.a,{color:"primary","aria-label":"add",size:"",onClick:function(){V(!K)},children:Object(x.jsx)(k.a,{})})})]})]})})},G=n(317),K=n(324),V=n(309),J=(n(254),n(150)),_=n.n(J),Z=function(e){var t=e.open,n=e.handleClose,c=(e.handleCanvasExport,Object(a.useContext)(Q)),o=c.theme,i=c.setTheme,s=Object(a.useContext)(q),l=s.setTriggerExport,d=(s.snackPack,s.setSnackPack);return Object(x.jsx)(S.a,{open:t,onClose:n,children:Object(x.jsxs)("div",{className:"settingsModal",children:[Object(x.jsx)(p.a,{variant:"h3",component:"div",style:{marginTop:"20px",marginBottom:"20px"},children:"Edit Your Mood Board"}),Object(x.jsx)(p.a,{variant:"p",component:"div",style:{marginBottom:"10px",fontSize:"10px"},children:"BACKGROUND COLOR"}),Object(x.jsxs)(G.a,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",onChange:function(e){i(e.target.value)},value:o,style:{justifyContent:"center",marginBottom:"10px"},children:[Object(x.jsx)(K.a,{value:A,control:Object(x.jsx)(V.a,{}),label:Object(x.jsx)("span",{className:"whiteRadioLabel"}),labelPlacement:"top"}),Object(x.jsx)(K.a,{value:W,control:Object(x.jsx)(V.a,{}),label:Object(x.jsx)("span",{className:"beigeRadioLabel"}),labelPlacement:"top"}),Object(x.jsx)(K.a,{value:H,control:Object(x.jsx)(V.a,{}),label:Object(x.jsx)("span",{className:"blackRadioLabel"}),labelPlacement:"top"})]}),Object(x.jsx)(B.a,{variant:"outlined",startIcon:Object(x.jsx)(_.a,{}),style:{justifyContent:"center"},onClick:function(){d((function(e){return[].concat(Object(r.a)(e),[{message:"Export feature coming soon!",key:(new Date).getTime()}])})),l(!0)},children:"Export"})]})})},q=(n(255),Object(a.createContext)()),Q=Object(a.createContext)(),$=new b.a({url:"https://aetava.com",consumerKey:"ck_5d12676cfabf6f515105f76db0fbb73ca0039573",consumerSecret:"cs_8d3ab8468c84f15315c51417cc1a74625dbbc61a",version:"wc/v3"});var ee=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(!1),b=Object(l.a)(i,2),O=b[0],f=b[1],g=Object(a.useState)(!1),m=Object(l.a)(g,2),p=m[0],v=(m[1],Object(a.useState)([])),y=Object(l.a)(v,2),w=y[0],k=y[1],S=Object(a.useState)(!1),C=Object(l.a)(S,2),E=C[0],B=C[1],D=c.a.useState([]),I=Object(l.a)(D,2),L=I[0],P=I[1],N=c.a.useState(void 0),M=Object(l.a)(N,2),T=M[0],R=M[1],z=Object(a.useState)(!1),X=Object(l.a)(z,2),Y=X[0],F=X[1],G=Object(a.useState)(A),K=Object(l.a)(G,2),V=K[0],J=K[1],_=Object(a.useState)(!1),ee=Object(l.a)(_,2),te=ee[0],ne=ee[1];Object(a.useEffect)((function(){ae()}),[]),c.a.useEffect((function(){L.length&&!T?(R(Object(s.a)({},L[0])),P((function(e){return e.slice(1)})),B(!0)):L.length&&T&&E&&B(!1)}),[L,T,E]);var ae=function(){o([]),f(!1),$.get("products").then((function(e){200===e.status&&e.data&&(e.data.forEach((function(e){"Reverse Withdrawal Payment"!==e.name&&e.images&&e.images.forEach((function(t,n){var a=Object(s.a)(Object(s.a)({},t),{},{brandName:e.name,price:e.price,productUrl:e.permalink,stockStatus:e.stockStatus,id:"".concat(e.id,"-").concat(n)});o((function(e){return[].concat(Object(r.a)(e),[a])}))}))})),f(!0))})).catch((function(e){console.log(e)}))};return Object(x.jsx)(Q.Provider,{value:{theme:V,setTheme:J},children:Object(x.jsx)("div",{className:V===A?"whiteBackground":V===W?"beigeBackground":V===H?"blackBackground":A,children:Object(x.jsxs)(q.Provider,{value:{items:n,setItems:o,itemsLoaded:O,mbItems:w,setMbItems:k,snackPack:L,setSnackPack:P,triggerExport:te,setTriggerExport:ne,errorLoadingItems:p},children:[Object(x.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:Object(x.jsx)("div",{className:"settings-button",children:Object(x.jsx)(d.a,{color:"white","aria-label":"add",onClick:function(){F(!0)},children:Object(x.jsx)(h.a,{})})})}),Object(x.jsx)(U,{}),Object(x.jsx)(u.a,{open:E,autoHideDuration:4e3,onClose:function(e,t){"clickaway"!==t&&B(!1)},TransitionProps:{onExited:function(){R(void 0)}},children:Object(x.jsx)(j.a,{severity:"success",children:T?T.message:void 0})},T?T.key:void 0),Object(x.jsx)(Z,{open:Y,handleClose:function(){return F(!1)}})]})})})};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(ee,{})}),document.getElementById("root"))}},[[256,1,2]]]);
//# sourceMappingURL=main.14648452.chunk.js.map