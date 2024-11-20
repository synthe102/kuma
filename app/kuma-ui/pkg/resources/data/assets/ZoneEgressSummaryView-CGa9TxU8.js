import{d as D,e as p,o as d,m as c,w as e,a as l,k as m,t as i,b as o,c as f,J as E,K as F,Q as _,S as B,p as z,a0 as M,q as N}from"./index-B-FVJ5xI.js";import{_ as X}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-C2qcIC1n.js";const Z={class:"stack-with-borders"},q={class:"mt-4"},Q=D({__name:"ZoneEgressSummaryView",props:{items:{}},setup(h){const C=h;return(T,t)=>{const x=p("XEmptyState"),k=p("RouteTitle"),S=p("XAction"),w=p("DataSource"),V=p("AppView"),R=p("DataCollection"),v=p("RouteView");return d(),c(v,{name:"zone-egress-summary-view",params:{zoneEgress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:e(({route:n,t:a})=>[l(R,{items:C.items,predicate:u=>u.id===n.params.zoneEgress,find:!0},{empty:e(()=>[l(x,null,{title:e(()=>[m("h2",null,i(a("common.collection.summary.empty_title",{type:"ZoneEgress"})),1)]),default:e(()=>[t[0]||(t[0]=o()),m("p",null,i(a("common.collection.summary.empty_message",{type:"ZoneEgress"})),1)]),_:2},1024)]),default:e(({items:u})=>[(d(!0),f(E,null,F([u[0]],s=>(d(),c(V,{key:s.id},{title:e(()=>[m("h2",null,[l(S,{to:{name:"zone-egress-detail-view",params:{zone:s.zoneEgress.zone,zoneEgress:s.id}}},{default:e(()=>[l(k,{title:a("zone-egresses.routes.item.title",{name:s.name})},null,8,["title"])]),_:2},1032,["to"])])]),default:e(()=>[t[7]||(t[7]=o()),m("div",Z,[l(_,{layout:"horizontal"},{title:e(()=>[o(i(a("http.api.property.status")),1)]),body:e(()=>[l(B,{status:s.state},null,8,["status"])]),_:2},1024),t[4]||(t[4]=o()),s.namespace.length>0?(d(),c(_,{key:0,layout:"horizontal"},{title:e(()=>[o(i(a("data-planes.routes.item.namespace")),1)]),body:e(()=>[o(i(s.namespace),1)]),_:2},1024)):z("",!0),t[5]||(t[5]=o()),l(_,{layout:"horizontal"},{title:e(()=>[o(i(a("http.api.property.address")),1)]),body:e(()=>[s.zoneEgress.socketAddress.length>0?(d(),c(M,{key:0,text:s.zoneEgress.socketAddress},null,8,["text"])):(d(),f(E,{key:1},[o(i(a("common.detail.none")),1)],64))]),_:2},1024)]),t[8]||(t[8]=o()),m("div",null,[m("h3",null,i(a("zone-ingresses.routes.item.config")),1),t[6]||(t[6]=o()),m("div",q,[l(X,{resource:s.config,"is-searchable":"",query:n.params.codeSearch,"is-filter-mode":n.params.codeFilter,"is-reg-exp-mode":n.params.codeRegExp,onQueryChange:r=>n.update({codeSearch:r}),onFilterModeChange:r=>n.update({codeFilter:r}),onRegExpModeChange:r=>n.update({codeRegExp:r})},{default:e(({copy:r,copying:b})=>[b?(d(),c(w,{key:0,src:`/zone-egresses/${n.params.zoneEgress}/as/kubernetes?no-store`,onChange:g=>{r(y=>y(g))},onError:g=>{r((y,A)=>A(g))}},null,8,["src","onChange","onError"])):z("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])])])]),_:2},1024))),128))]),_:2},1032,["items","predicate"])]),_:1})}}}),J=N(Q,[["__scopeId","data-v-5d478ea2"]]);export{J as default};
