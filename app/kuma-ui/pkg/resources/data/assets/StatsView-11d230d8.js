import{E as m}from"./EnvoyData-85f427fe.js";import{g as l}from"./dataplane-0a086c06.js";import{d as _,r as e,o as d,i as g,w as t,j as s,p as f,n as w,k as z}from"./index-f09cca58.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-d77f2e48.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-bb9bf655.js";const x=_({__name:"StatsView",props:{data:{}},setup(o){const a=o;return(V,h)=>{const n=e("RouteTitle"),r=e("KCard"),i=e("AppView"),p=e("RouteView");return d(),g(p,{name:"zone-egress-stats-view",params:{zoneEgress:""}},{default:t(({route:c,t:u})=>[s(i,null,{title:t(()=>[f("h2",null,[s(n,{title:u("zone-egresses.routes.item.navigation.zone-egress-stats-view"),render:!0},null,8,["title"])])]),default:t(()=>[w(),s(r,null,{body:t(()=>[s(m,{status:z(l)(a.data.zoneEgressInsight),resource:"Zone",src:`/zone-egresses/${c.params.zoneEgress}/data-path/stats`,"query-key":"envoy-data-stats-zone-egress"},null,8,["status","src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{x as default};
