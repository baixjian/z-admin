import{N as b,O as K,P as h,Q as B,_ as L,r as p,c as y,R as N,h as r,i as d,l as c,w as s,e as f,d as F,A as I,F as w,k as A,p as v,S as C,T as S,j as V}from"./index.a8948c02.js";import j from"./Basic.3eee40a2.js";import D from"./Safe.e93339a0.js";import O from"./Custom.5cbcd502.js";import R from"./Bind.2153b37c.js";import T from"./Message.f694e8ac.js";import"./tinymce.b4091e4a.js";import"./echarts.98d40a9a.js";function E(t){return t&&t.length?t[0]:void 0}var x=E,M=b,P=K,Q=h;function U(t){return function(e,a,n){var i=Object(e);if(!P(e)){var u=M(a);e=Q(e),a=function(m){return u(i[m],m,i)}}var o=t(e,a,n);return o>-1?i[u?e[o]:o]:void 0}}var q=U,z=q,G=B,H=z(G),J=H;const W={name:"userSetting",components:{Basic:j,Safe:D,Custom:O,Bind:R,Message:T},setup(){const t=p([{name:"\u57FA\u672C\u8BBE\u7F6E",key:"basic"},{name:"\u5B89\u5168\u8BBE\u7F6E",key:"safe"},{name:"\u4E2A\u6027\u5316",key:"custom"},{name:"\u8D26\u53F7\u7ED1\u5B9A",key:"bind"},{name:"\u65B0\u6D88\u606F\u901A\u77E5",key:"message"}]),e=p(["basic"]),a=y(()=>x(e.value)),n=y(()=>N(J(t.value,{key:x(e.value)}),"name"));return{menuList:t,selectedKeys:e,componentName:a,title:n}}},X={class:"setting-title"};function Y(t,e,a,n,i,u){const o=r("a-menu-item"),m=r("a-menu"),l=r("a-col"),k=r("a-row"),g=r("a-card");return d(),c(g,{"body-style":{paddingLeft:0,paddingRight:0}},{default:s(()=>[f(k,{type:"flex"},{default:s(()=>[f(l,{flex:"0 0 224px"},{default:s(()=>[f(m,{selectedKeys:n.selectedKeys,"onUpdate:selectedKeys":e[0]||(e[0]=_=>n.selectedKeys=_),mode:"inline"},{default:s(()=>[(d(!0),F(w,null,I(n.menuList,_=>(d(),c(o,{key:_.key},{default:s(()=>[V(v(_.name),1)]),_:2},1024))),128))]),_:1},8,["selectedKeys"])]),_:1}),f(l,{flex:"auto",class:"px-8-5"},{default:s(()=>[A("div",X,v(n.title),1),(d(),c(C,null,[(d(),c(S(n.componentName)))],1024))]),_:1})]),_:1})]),_:1})}const re=L(W,[["render",Y],["__scopeId","data-v-d3550bfe"]]);export{re as default};