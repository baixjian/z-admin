import{_ as f,r as v,o as x,s as w,h as l,i as b,l as U,w as t,e,k as g,p as V}from"./index.a8948c02.js";import"./tinymce.b4091e4a.js";import"./echarts.98d40a9a.js";const h={name:"componentFormTable",setup(){const u={name:"",age:"",sex:0},o=v([]);return x(()=>{o.value.push(w(u))}),{rowTpl:u,list:o}}};function k(u,o,B,s,T,y){const p=l("a-input"),_=l("a-table-column"),d=l("a-select"),m=l("x-form-table"),c=l("a-card"),r=l("a-col"),i=l("a-row");return b(),U(i,{gutter:16,type:"flex"},{default:t(()=>[e(r,{flex:"1"},{default:t(()=>[e(c,{title:"\u793A\u4F8B"},{default:t(()=>[e(m,{modelValue:s.list,"onUpdate:modelValue":o[0]||(o[0]=a=>s.list=a),"row-tpl":s.rowTpl},{default:t(()=>[e(_,{title:"\u59D3\u540D"},{default:t(({record:a})=>[e(p,{value:a.name,"onUpdate:value":n=>a.name=n},null,8,["value","onUpdate:value"])]),_:1}),e(_,{title:"\u5E74\u9F84"},{default:t(({record:a})=>[e(p,{value:a.age,"onUpdate:value":n=>a.age=n},null,8,["value","onUpdate:value"])]),_:1}),e(_,{title:"\u6027\u522B",width:100},{default:t(({record:a})=>[e(d,{value:a.sex,"onUpdate:value":n=>a.sex=n,options:[{label:"\u672A\u77E5",value:0},{label:"\u7537",value:1},{label:"\u5973",value:2}],class:"wp-100"},null,8,["value","onUpdate:value"])]),_:1})]),_:1},8,["modelValue","row-tpl"])]),_:1})]),_:1}),e(r,{flex:"1"},{default:t(()=>[e(c,{title:"\u7ED3\u679C"},{default:t(()=>[g("pre",null,V(s.list),1)]),_:1})]),_:1})]),_:1})}const F=f(h,[["render",k]]);export{F as default};