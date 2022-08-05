import{_ as R,r as s,h as o,i as v,l as b,w as n,e,d as B,F,s as I,j as N}from"./index.a8948c02.js";import{u as C}from"./useForm.049bdf41.js";import T from"./MenuTree.02ce3588.js";import"./tinymce.b4091e4a.js";import"./echarts.98d40a9a.js";import"./usePagination.27a1eb36.js";const j={name:"systemNewMenu",components:{MenuTree:T},setup(){const{formState:p}=C(),l=s([{name:"\u65B0\u589E",alias:"insert"}]),f=s([]),a=s(null);function c(r){a.value=I(r)}function S(r){f.value=[{name:"\u9876\u7EA7\u83DC\u5355",key:0},...r]}return{formState:p,authList:l,menuList:f,menuInfo:a,onMenuSelect:c,onMenuReady:S}}},D=N("\u4FDD\u5B58");function E(p,l,f,a,c,S){const r=o("menu-tree"),d=o("a-col"),y=o("a-empty"),i=o("a-card"),u=o("a-input"),m=o("a-form-item"),U=o("a-tree-select"),k=o("a-radio-group"),w=o("a-switch"),M=o("a-button"),L=o("a-form"),x=o("a-table-column"),V=o("x-form-table"),g=o("a-row");return v(),b(g,{gutter:16,type:"flex",class:"hp-100"},{default:n(()=>[e(d,{flex:"0 0 300px"},{default:n(()=>[e(r,{onSelect:a.onMenuSelect,onReady:a.onMenuReady},null,8,["onSelect","onReady"])]),_:1}),a.menuInfo?(v(),B(F,{key:1},[e(d,{flex:"1"},{default:n(()=>[e(i,{title:a.menuInfo.name,type:"flex"},{default:n(()=>[e(L,{model:a.formState,"label-col":{style:{width:"100px"}}},{default:n(()=>[e(m,{label:"\u540D\u79F0",name:"name"},{default:n(()=>[e(u,{value:a.formState.name,"onUpdate:value":l[0]||(l[0]=t=>a.formState.name=t)},null,8,["value"])]),_:1}),e(m,{label:"\u6240\u5C5E\u4E0A\u7EA7"},{default:n(()=>[e(U,{value:a.formState.parent_id,"onUpdate:value":l[1]||(l[1]=t=>a.formState.parent_id=t),"tree-data":a.menuList,"field-names":{children:"children",label:"name",key:"key",value:"key"},"tree-default-expand-all":""},null,8,["value","tree-data"])]),_:1}),e(m,{label:"\u7C7B\u578B",name:"type"},{default:n(()=>[e(k,{value:a.formState.type,"onUpdate:value":l[2]||(l[2]=t=>a.formState.type=t),options:[{label:"\u83DC\u5355",value:1},{label:"iframe",value:2},{label:"\u5916\u94FE",value:3}]},null,8,["value"])]),_:1}),e(m,{label:"\u522B\u540D",name:"alias",extra:"\u7CFB\u7EDF\u552F\u4E00\u4E14\u4E0E\u5185\u7F6E\u7EC4\u4EF6\u540D\u4E00\u81F4\uFF0C\u5426\u5219\u5BFC\u81F4\u7F13\u5B58\u5931\u6548"},{default:n(()=>[e(u,{value:a.formState.alias,"onUpdate:value":l[3]||(l[3]=t=>a.formState.alias=t)},null,8,["value"])]),_:1}),e(m,{label:"\u56FE\u6807",name:"icon"},{default:n(()=>[e(u,{value:a.formState.icon,"onUpdate:value":l[4]||(l[4]=t=>a.formState.icon=t)},null,8,["value"])]),_:1}),e(m,{label:"\u8DEF\u7531\u5730\u5740",name:"path"},{default:n(()=>[e(u,{value:a.formState.path,"onUpdate:value":l[5]||(l[5]=t=>a.formState.path=t)},null,8,["value"])]),_:1}),e(m,{label:"\u91CD\u5B9A\u5411",name:"redirect"},{default:n(()=>[e(u,{value:a.formState.redirect,"onUpdate:value":l[6]||(l[6]=t=>a.formState.redirect=t)},null,8,["value"])]),_:1}),e(m,{label:"\u89C6\u56FE\u5730\u5740",name:"view"},{default:n(()=>[e(u,{value:a.formState.view,"onUpdate:value":l[7]||(l[7]=t=>a.formState.view=t)},null,8,["value"])]),_:1}),e(m,{label:"\u83DC\u5355\u9AD8\u4EAE",name:"active",extra:"\u5B50\u8282\u70B9\u6216\u8BE6\u60C5\u9875\u9700\u8981\u9AD8\u4EAE\u7684\u4E0A\u7EA7\u83DC\u5355\u522B\u540D"},{default:n(()=>[e(u,{value:a.formState.active,"onUpdate:value":l[8]||(l[8]=t=>a.formState.active=t)},null,8,["value"])]),_:1}),e(m,{label:"\u9690\u85CF",name:"is_menu",extra:"\u4E0D\u663E\u793A\u5728\u5BFC\u822A\u4E2D\uFF0C\u4F46\u4F9D\u7136\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u4F8B\u5982\u8BE6\u60C5\u9875"},{default:n(()=>[e(w,{checked:a.formState.is_menu,"onUpdate:checked":l[9]||(l[9]=t=>a.formState.is_menu=t)},null,8,["checked"])]),_:1}),e(m,{label:"\xA0",colon:!1},{default:n(()=>[e(M,{type:"primary"},{default:n(()=>[D]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])]),_:1}),e(d,{flex:"1"},{default:n(()=>[e(i,{title:"\u6743\u9650\u6309\u94AE",type:"flex"},{default:n(()=>[e(V,{modelValue:a.authList,"onUpdate:modelValue":l[10]||(l[10]=t=>a.authList=t),"row-tpl":{name:"",alias:""},bordered:""},{default:n(()=>[e(x,{title:"\u540D\u79F0","data-index":"name"},{default:n(({record:t})=>[e(u,{value:t.name,"onUpdate:value":_=>t.name=_},null,8,["value","onUpdate:value"])]),_:1}),e(x,{title:"\u6807\u8BC6","data-index":"alias"},{default:n(({record:t})=>[e(u,{value:t.alias,"onUpdate:value":_=>t.alias=_},null,8,["value","onUpdate:value"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)):(v(),b(d,{key:0,flex:"1"},{default:n(()=>[e(i,{type:"flex"},{default:n(()=>[e(y,{description:"\u8BF7\u9009\u62E9\u83DC\u5355"})]),_:1})]),_:1}))]),_:1})}const K=R(j,[["render",E]]);export{K as default};