import{d as g,e as o,o as p,m as c,w as e,a as n,R as f,k as b,a0 as L,b as a,K as $,t as d,F as N,p as z}from"./index-B-FVJ5xI.js";const B=["innerHTML"],M=g({__name:"ZoneDetailTabsView",setup(Z){return(G,t)=>{const w=o("RouteTitle"),u=o("XAction"),_=o("DataLoader"),C=o("XPrompt"),T=o("DataSink"),X=o("XTeleportTemplate"),x=o("XDisclosure"),V=o("XActionGroup"),k=o("XTabs"),y=o("RouterView"),D=o("AppView"),v=o("RouteView");return p(),c(v,{name:"zone-cp-detail-tabs-view",params:{zone:""}},{default:e(({can:R,route:r,t:s})=>[n(_,{src:`/zone-cps/${r.params.zone}`},{default:e(({data:m})=>[m?(p(),c(D,{key:0,breadcrumbs:[{to:{name:"zone-cp-list-view"},text:s("zone-cps.routes.item.breadcrumbs")}]},f({title:e(()=>[b("h1",null,[n(L,{text:r.params.zone},{default:e(()=>[n(w,{title:s("zone-cps.routes.item.title",{name:r.params.zone})},null,8,["title"])]),_:2},1032,["text"])])]),default:e(()=>{var i;return[t[4]||(t[4]=a()),t[5]||(t[5]=a()),n(k,{selected:(i=r.child())==null?void 0:i.name},f({_:2},[$(r.children,({name:l})=>({name:`${l}-tab`,fn:e(()=>[n(u,{to:{name:l}},{default:e(()=>[a(d(s(`zone-cps.routes.item.navigation.${l}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),t[6]||(t[6]=a()),n(y,null,{default:e(l=>[(p(),c(N(l.Component),{data:m},null,8,["data"]))]),_:2},1024)]}),_:2},[R("create zones")?{name:"actions",fn:e(()=>[n(V,null,{control:e(()=>[n(u,{action:"expand",appearance:"primary"},{default:e(()=>[a(d(s("zones.action_menu.toggle_button")),1)]),_:2},1024)]),default:e(()=>[t[3]||(t[3]=a()),n(x,null,{default:e(({expanded:i,toggle:l})=>[n(u,{appearance:"danger","data-testid":"delete-button",onClick:l},{default:e(()=>[a(d(s("zones.action_menu.delete_button")),1)]),_:2},1032,["onClick"]),t[2]||(t[2]=a()),n(X,{to:{name:"modal-layer"}},{default:e(()=>[i?(p(),c(T,{key:0,src:`/zone-cps/${m.name}/delete`,onChange:()=>r.replace({name:"zone-cp-list-view"})},{default:e(({submit:A,error:S})=>[n(C,{action:s("common.delete_modal.proceed_button"),expected:m.name,"data-testid":"delete-zone-modal",onCancel:l,onSubmit:()=>A({})},{title:e(()=>[a(d(s("common.delete_modal.title",{type:"Zone"})),1)]),default:e(()=>[t[0]||(t[0]=a()),b("div",{innerHTML:s("common.delete_modal.text",{type:"Zone",name:m.name})},null,8,B),t[1]||(t[1]=a()),n(_,{class:"mt-4",errors:[S],loader:!1},null,8,["errors"])]),_:2},1032,["action","expected","onCancel","onSubmit"])]),_:2},1032,["src","onChange"])):z("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),key:"0"}:void 0]),1032,["breadcrumbs"])):z("",!0)]),_:2},1032,["src"])]),_:1})}}});export{M as default};
