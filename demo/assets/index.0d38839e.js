import{_ as k,f as v,G as T,r as m,o as x,H as R,h as i,i as M,d as O,e,w as t,k as b,p as Y,j as s}from"./index.a8948c02.js";import"./tinymce.b4091e4a.js";import"./echarts.98d40a9a.js";const w={name:"otherMultiTab",setup(){const d=v(),{reload:c,close:h,closeOther:n,setTitle:_}=T(),u=m(""),l=m("\u81EA\u5B9A\u4E49\u540D\u79F0");x(()=>{u.value=R().format("YYYY-MM-DD HH:mm:ss")});function o(){d.push({name:"welcome"})}function a(){c()}function r(){h()}function f(){n()}function p(){_(l.value)}function C(){_(d.currentRoute.value.meta.title)}return{date:u,title:l,handleOpen:o,handleReload:a,handleClose:r,handleCloseOther:f,handleSetTitle:p,handleRevertTitle:C}}},B=s("\u6253\u5F00\u6B22\u8FCE\u9875"),D=s("\u5237\u65B0\u5F53\u524D"),H=s("\u5173\u95ED\u5F53\u524D"),N=s("\u5173\u95ED\u5176\u4ED6"),S=s("\u8BBE\u7F6E\u6807\u9898"),V=s("\u8FD8\u539F");function j(d,c,h,n,_,u){const l=i("a-button"),o=i("a-space"),a=i("a-card"),r=i("a-input");return M(),O("div",null,[e(a,{title:"\u6253\u5F00"},{default:t(()=>[e(o,null,{default:t(()=>[e(l,{onClick:n.handleOpen},{default:t(()=>[B]),_:1},8,["onClick"])]),_:1})]),_:1}),e(a,{title:"\u5237\u65B0",class:"mt-8-2"},{default:t(()=>[e(o,null,{default:t(()=>[e(l,{onClick:n.handleReload},{default:t(()=>[D]),_:1},8,["onClick"]),b("span",null,Y(n.date),1)]),_:1})]),_:1}),e(a,{title:"\u5173\u95ED",class:"mt-8-2"},{default:t(()=>[e(o,null,{default:t(()=>[e(l,{onClick:n.handleClose},{default:t(()=>[H]),_:1},8,["onClick"]),e(l,{onClick:n.handleCloseOther},{default:t(()=>[N]),_:1},8,["onClick"])]),_:1})]),_:1}),e(a,{title:"\u8BBE\u7F6E",class:"mt-8-2"},{default:t(()=>[e(o,null,{default:t(()=>[e(r,{value:n.title,"onUpdate:value":c[0]||(c[0]=f=>n.title=f)},null,8,["value"]),e(l,{onClick:n.handleSetTitle},{default:t(()=>[S]),_:1},8,["onClick"]),e(l,{onClick:n.handleRevertTitle},{default:t(()=>[V]),_:1},8,["onClick"])]),_:1})]),_:1})])}const G=k(w,[["render",j]]);export{G as default};
