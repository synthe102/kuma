import{_ as C}from"./CodeBlock.vue_vue_type_style_index_0_lang-54c405e7.js";import{d as V,r as n,o as e,g as t,w as o,h as r,m as v,l as m,E as S,s as B,j as d,F as f,D as N,C as x}from"./index-65a641bf.js";const R=V({__name:"ZoneConfigView",setup(A){function g(i){var a;const s=((a=i.zoneInsight)==null?void 0:a.subscriptions)??[];if(s.length>0){const c=s[s.length-1];if(c.config)return JSON.stringify(JSON.parse(c.config),null,2)}return null}return(i,s)=>{const a=n("RouteTitle"),c=n("KAlert"),k=n("DataSource"),w=n("KCard"),y=n("AppView"),z=n("RouteView");return e(),t(z,{name:"zone-cp-config-view",params:{zone:""}},{default:o(({route:b,t:l})=>[r(y,null,{title:o(()=>[v("h2",null,[r(a,{title:l("zone-cps.routes.item.navigation.zone-cp-config-view"),render:!0},null,8,["title"])])]),default:o(()=>[m(),r(w,{class:"mt-4"},{body:o(()=>[r(k,{src:`/zone-cps/${b.params.zone}`},{default:o(({data:p,error:u})=>[u!==void 0?(e(),t(S,{key:0,error:u},null,8,["error"])):p===void 0?(e(),t(B,{key:1})):(e(!0),d(f,{key:2},N([g(p)],(_,h)=>(e(),d(f,{key:h},[_!==null?(e(),t(C,{key:0,id:"code-block-zone-config",language:"json",code:_,"is-searchable":"","query-key":"zone-config"},null,8,["code"])):(e(),t(c,{key:1,class:"mt-4","data-testid":"warning-no-subscriptions",appearance:"warning"},{alertMessage:o(()=>[m(x(l("zone-cps.detail.no_subscriptions")),1)]),_:2},1024))],64))),128))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{R as default};
