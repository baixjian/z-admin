var p=(_,d,i)=>new Promise((o,r)=>{var u=a=>{try{s(i.next(a))}catch(c){r(c)}},n=a=>{try{s(i.throw(a))}catch(c){r(c)}},s=a=>a.done?o(a.value):Promise.resolve(a.value).then(u,n);s((i=i.apply(_,d)).next())});import{_ as I,a as N,c as v,t as D,r as k,o as B,D as F,h as l,i as S,d as V,e as t,w as e,k as m,p as g,j as $,F as C}from"./index.a8948c02.js";import"./tinymce.b4091e4a.js";import"./echarts.98d40a9a.js";const L="/xy-admin/demo/assets/upgrade.f63e77e9.svg",j={name:"welcome",setup(){const _=N(),d="XYAdmin",i=v(()=>_.userInfo),o=v(()=>{var s;return`${D()}\uFF0C${(s=i.value)==null?void 0:s.username}`}),r=k([]),{version:u}={version:"2.3.1"};B(()=>{n()});function n(){return p(this,null,function*(){const{code:s,data:a}=yield F.common.getWelcomeData();if(s===200){const{dynamicRows:c}=a;r.value=c}})}return{upgradeImg:L,title:d,version:u,userName:o,dynamicList:r}}},z=m("p",{class:"mb-0"},"\u67D0\u67D0\u67D0\u516C\u53F8\uFF0D\u67D0\u67D0\u67D0\u90E8\u95E8\uFF0D\u67D0\u67D0\u67D0\u5C97\u4F4D",-1),A=m("div",null,"\u9AD8\u6027\u80FD / \u7CBE\u81F4 / \u4F18\u96C5\u3002\u57FA\u4E8E vue3 + ant-design-vue \u7684\u4E2D\u540E\u53F0\u524D\u7AEF\u89E3\u51B3\u65B9\u6848\u3002",-1),E=["src"];function M(_,d,i,o,r,u){const n=l("a-card"),s=l("a-statistic"),a=l("a-col"),c=l("a-row"),x=l("a-avatar"),h=l("a-list-item-meta"),y=l("a-list-item"),b=l("a-list"),w=l("a-result");return S(),V(C,null,[t(n,{class:"mb-4-3"},{default:e(()=>[m("h2",null,g(o.userName)+" \uFF0C\u795D\u4F60\u5F00\u5FC3\u6BCF\u4E00\u5929\uFF01",1),z]),_:1}),t(c,{gutter:12},{default:e(()=>[t(a,{lg:18},{default:e(()=>[t(n,{class:"mb-4-3"},{default:e(()=>[t(c,{type:"flex",class:"align-center"},{default:e(()=>[t(a,{flex:"1"},{default:e(()=>[t(s,{title:"\u6211\u7684\u5F85\u529E",value:"8\u4E2A\u4EFB\u52A1"})]),_:1}),t(a,{flex:"1"},{default:e(()=>[t(s,{title:"\u672C\u5468\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4",value:"32\u5206\u949F"})]),_:1}),t(a,{flex:"1"},{default:e(()=>[t(s,{title:"\u672C\u5468\u5B8C\u6210\u4EFB\u52A1\u6570",value:"24\u4E2A\u4EFB\u52A1"})]),_:1}),t(a,{flex:"1"},{default:e(()=>[t(s,{title:"\u5F02\u5E38\uFF08\u4E2A\uFF09",value:"1"})]),_:1})]),_:1})]),_:1}),t(n,{title:"\u52A8\u6001",bordered:!1},{default:e(()=>[t(b,{"item-layout":"horizontal","data-source":o.dynamicList},{renderItem:e(({item:f})=>[t(y,null,{default:e(()=>[t(h,{description:f.time},{avatar:e(()=>[t(x,{src:f.avatar},null,8,["src"])]),title:e(()=>[$(g(f.title),1)]),_:2},1032,["description"])]),_:2},1024)]),_:1},8,["data-source"])]),_:1})]),_:1}),t(a,{lg:6},{default:e(()=>[t(n,{title:"\u5173\u4E8E",class:"mb-4-3"},{default:e(()=>[A]),_:1}),t(n,{title:"\u7248\u672C\u4FE1\u606F"},{default:e(()=>[t(w,{title:`${o.title} ${o.version}`,"sub-title":`\u6700\u65B0\u7248\u672C ${o.version}`},{icon:e(()=>[m("img",{src:o.upgradeImg},null,8,E)]),_:1},8,["title","sub-title"])]),_:1})]),_:1})]),_:1})],64)}const X=I(j,[["render",M]]);export{X as default};