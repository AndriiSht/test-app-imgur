(this["webpackJsonptest-app-imgur"]=this["webpackJsonptest-app-imgur"]||[]).push([[0],{122:function(e,t,n){},131:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),c=n(28),a=n.n(c),r=(n(122),n(50)),l=n(93),s=n(12),d="https://api.imgur.com",u="/3/gallery/hot/viral/0.json",h="imgur-feed",j=function(){return fetch("".concat(d).concat(u),{referrer:""}).then((function(e){return e.json()})).then((function(e){return(null===e||void 0===e?void 0:e.data)||[]}))},b=n(169),m=n(178),v=n(180),x=n(174),p=n(181),f=n(182),g=n(98),O=n.n(g),w=n(160),y=n(77),k=n(176),C=n(2),M="dark",S="light",z=Object(i.createContext)({themePaletteMode:"",setThemePaletteMode:function(e){}}),P=function(e){var t=e.children,n=Object(w.a)("(prefers-color-scheme: dark)"),o=Object(i.useState)(n?M:S),c=Object(s.a)(o,2),a=c[0],r=c[1];Object(i.useEffect)((function(){r(n?M:S)}),[n]);var l=Object(i.useMemo)((function(){return Object(y.a)({palette:{mode:a}})}),[a]);return Object(C.jsx)(z.Provider,{value:{themePaletteMode:a,setThemePaletteMode:r},children:Object(C.jsx)(k.a,{theme:l,children:t})})},I=n(175),L=n(11),D=Object(L.a)(I.a)((function(e){var t=e.theme;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:"dark"===t.palette.mode?"#003892":"#001e3c",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be",borderRadius:10}}})),F=n(3),B=n(161),R=Object(L.a)("div")((function(e){var t=e.theme;return Object(F.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(B.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(B.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),A=Object(L.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),T=n(173),Q=Object(L.a)(T.a)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(F.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),_=Object(i.memo)((function(e){var t=e.onSearchStringChange,n=Object(i.useContext)(z),o=n.themePaletteMode,c=n.setThemePaletteMode;return Object(C.jsx)(m.a,{position:"static",children:Object(C.jsxs)(v.a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(C.jsx)(x.a,{smDown:!0,children:Object(C.jsx)(p.a,{variant:"h6",children:"Imgur App"})}),Object(C.jsxs)(R,{children:[Object(C.jsx)(A,{children:Object(C.jsx)(O.a,{})}),Object(C.jsx)(Q,{onChange:function(e){return t(e.target.value)},placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]}),Object(C.jsx)(f.a,{label:"",sx:{mr:0,ml:3},control:Object(C.jsx)(D,{checked:o===M}),onClick:function(){return c(o===M?S:M)}})]})})})),E=n(99),V=n(101),X=n(75),J=n(168),U=n(171),W=n(183),H=n(179),N=n(184),q=n(177),G=n(167),K=function(e){var t=e.link,n=e.onClose;return Object(C.jsx)(U.a,{open:!0,onClose:n,children:Object(C.jsxs)(G.a,{display:"flex",flexDirection:"column",height:"100%",children:[Object(C.jsx)(G.a,{display:"flex",justifyContent:"flex-end",children:Object(C.jsx)(W.a,{onClick:n,children:Object(C.jsx)(J.a,{})})}),Object(C.jsx)(G.a,{flex:"1",position:"relative",sx:{margin:3},children:Object(C.jsx)("img",{onClick:n,style:{cursor:"pointer",position:"absolute",height:"100%",width:"100%",objectFit:"contain"},src:t,alt:"imgur meme"})})]})})},Y=function(e){var t,n,o,c=e.image,a=Object(i.useState)(""),r=Object(s.a)(a,2),l=r[0],d=r[1];return(null===c||void 0===c||null===(t=c.type)||void 0===t?void 0:t.includes("image"))?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("img",{style:{position:"absolute",height:"100%",width:"100%",objectFit:"contain",cursor:"pointer"},onClick:function(){return d((null===c||void 0===c?void 0:c.link)||"")},src:null===c||void 0===c?void 0:c.link,alt:(null===c||void 0===c||null===(o=c.description)||void 0===o?void 0:o.toString())||"imgur image"}),Boolean(l)&&Object(C.jsx)(K,{link:l,onClose:function(){return d("")}})]}):(null===c||void 0===c||null===(n=c.type)||void 0===n?void 0:n.includes("video"))?Object(C.jsx)("video",{style:{position:"absolute",width:"100%",height:"100%"},src:null===c||void 0===c?void 0:c.link,controls:!0,loop:!0}):Object(C.jsx)("p",{children:"No media attached"})},Z=function(e){var t=e.index,n=e.style,i=e.item,o=(null===i||void 0===i?void 0:i.type)&&(null===i||void 0===i?void 0:i.link)?i:null===i||void 0===i?void 0:i.images[0];return Object(C.jsx)(G.a,{sx:Object(X.a)(Object(X.a)({},n),{},{display:"flex",flexDirection:"column","&:last-child > .MuiPaper-root":{mb:function(e){return"".concat(e.spacing(2),"!important")}}}),children:Object(C.jsxs)(H.a,{sx:{flex:1,overflow:"hidden",mt:2,mx:2,p:2,display:"flex",flexDirection:"column"},children:[Object(C.jsx)(p.a,{variant:"h6",sx:{my:2},children:null===i||void 0===i?void 0:i.title}),Object(C.jsx)(N.a,{sx:{mx:-3,mb:3}}),Object(C.jsx)(G.a,{flex:"1",position:"relative",children:Object(C.jsx)(Y,{image:o})}),Object(C.jsx)(N.a,{sx:{mx:-3,mb:3}}),Object(C.jsx)(G.a,{sx:{overflowX:"auto",whiteSpace:"nowrap"},children:null===i||void 0===i?void 0:i.tags.map((function(e){return Object(C.jsx)(q.a,{label:"#".concat(e.display_name),variant:"outlined",sx:{mr:1,"&:last-child":{mr:0}}},e.display_name)}))})]})},t)},$=n(100),ee=Object(i.memo)((function(){var e=Object(r.useQuery)(h,j,{refetchOnWindowFocus:!1}).data,t=Object(i.useState)(""),n=Object(s.a)(t,2),o=n[0],c=n[1],a=Object(i.useMemo)((function(){return Object($.debounce)(c,300)}),[c]),l=Object(i.useMemo)((function(){return(null===e||void 0===e?void 0:e.filter((function(e){var t,n;return(null===e||void 0===e||null===(t=e.tags)||void 0===t?void 0:t.some((function(e){var t;return null===e||void 0===e||null===(t=e.display_name)||void 0===t?void 0:t.includes(o)})))||(null===e||void 0===e||null===(n=e.images)||void 0===n?void 0:n.some((function(e){var t;return null===e||void 0===e||null===(t=e.tags)||void 0===t?void 0:t.some((function(e){var t;return null===e||void 0===e||null===(t=e.display_name)||void 0===t?void 0:t.includes(o)}))})))})))||[]}),[e,o]),d=Object(w.a)("(max-width:500px)");return Object(C.jsxs)(b.a,{height:"100vh",display:"flex",flexDirection:"column",children:[Object(C.jsx)(_,{onSearchStringChange:a}),Object(C.jsx)(b.a,{flex:"1",display:"flex",flexDirection:"column",alignItems:"center",children:Object(C.jsx)(b.a,{flex:"1",maxWidth:"600px",width:"100%",children:Object(C.jsx)(E.a,{children:function(e){var t=e.height,n=e.width;return Object(C.jsx)(V.a,{height:t,width:n,itemCount:l.length||0,itemSize:d?500:600,overscanCount:4,children:function(e){var t=e.index,n=e.style,i=l[t];return Object(C.jsx)(Z,{index:t,item:i,style:n})}})}})})})]})})),te=n(170),ne=new r.QueryClient;var ie=function(){return Object(C.jsxs)(P,{children:[Object(C.jsx)(te.a,{}),Object(C.jsxs)(r.QueryClientProvider,{client:ne,children:[Object(C.jsx)(ee,{}),Object(C.jsx)(l.ReactQueryDevtools,{initialIsOpen:!1,position:"bottom-right"})]})]})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,185)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),o(e),c(e),a(e)}))};a.a.render(Object(C.jsx)(o.a.StrictMode,{children:Object(C.jsx)(ie,{})}),document.getElementById("root")),oe()}},[[131,1,2]]]);
//# sourceMappingURL=main.118c7e00.chunk.js.map