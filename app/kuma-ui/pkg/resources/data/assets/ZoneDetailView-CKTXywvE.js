import{d as x,r as c,o as l,q as y,w as e,b as n,p as E,y as O,Q as $,e as o,R as f,t as i,S as G,n as P,s as w,c as _,m as g,A as Z,K as h,L as v,G as q}from"./index-U3igbuyl.js";import{S as F}from"./SummaryView-CvpALkxr.js";const K=["data-testid"],M={key:0},J=x({__name:"ZoneDetailView",props:{data:{}},setup(A){const d=A;return(Q,s)=>{const k=c("XI18n"),b=c("XBadge"),S=c("XIcon"),I=c("XLayout"),X=c("XAboutCard"),B=c("XAction"),D=c("RouterView"),N=c("AppView"),R=c("DataSource"),T=c("RouteView");return l(),y(T,{name:"zone-cp-detail-view",params:{zone:"",subscription:""}},{default:e(({t:a,uri:L,route:z,me:m})=>{var C,V;return[n(R,{src:L(E(O),"/control-plane/outdated/:version",{version:((V=(C=d.data.zoneInsight.version)==null?void 0:C.kumaCp)==null?void 0:V.version)??"-"})},{default:e(({data:r})=>[n(N,{docs:a("zones.href.docs.cta")},$({default:e(()=>[s[15]||(s[15]=o()),n(I,{"data-testid":"detail-view-details",type:"stack"},{default:e(()=>[n(X,{title:a("zone-cps.detail.about.title"),created:d.data.creationTime,modified:d.data.modificationTime},{default:e(()=>[n(f,{layout:"horizontal"},{title:e(()=>[o(i(a("http.api.property.status")),1)]),body:e(()=>[n(G,{status:d.data.state},null,8,["status"])]),_:2},1024),s[5]||(s[5]=o()),n(f,{layout:"horizontal",class:P({version:!0,outdated:r==null?void 0:r.outdated})},{title:e(()=>[o(i(a("zone-cps.routes.item.version")),1)]),body:e(()=>[n(I,{type:"separated"},{default:e(()=>[n(b,{appearance:(r==null?void 0:r.outdated)===!0?"warning":"decorative"},{default:e(()=>{var t,p;return[o(i(((p=(t=d.data.zoneInsight.version)==null?void 0:t.kumaCp)==null?void 0:p.version)??"—"),1)]}),_:2},1032,["appearance"]),s[1]||(s[1]=o()),(r==null?void 0:r.outdated)===!0?(l(),y(S,{key:0,name:"info"},{default:e(()=>[n(k,{path:"zone-cps.routes.item.version_warning"})]),_:1})):w("",!0)]),_:2},1024)]),_:2},1032,["class"]),s[6]||(s[6]=o()),n(f,{layout:"horizontal"},{title:e(()=>[o(i(a("http.api.property.type")),1)]),body:e(()=>[n(b,{appearance:"decorative"},{default:e(()=>[o(i(a(`common.product.environment.${d.data.zoneInsight.environment||"unknown"}`)),1)]),_:2},1024)]),_:2},1024),s[7]||(s[7]=o()),n(f,{layout:"horizontal"},{title:e(()=>[o(i(a("zone-cps.routes.item.authentication_type")),1)]),body:e(()=>[n(b,{appearance:"decorative"},{default:e(()=>[o(i(d.data.zoneInsight.authenticationType||a("common.not_applicable")),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["title","created","modified"]),s[14]||(s[14]=o()),d.data.zoneInsight.subscriptions.length>0?(l(),_("div",M,[g("h2",null,i(a("zone-cps.detail.subscriptions")),1),s[12]||(s[12]=o()),n(Z,{headers:[{...m.get("headers.zoneInstanceId"),label:a("zone-cps.routes.items.headers.zoneInstanceId"),key:"zoneInstanceId"},{...m.get("headers.version"),label:a("zone-cps.routes.items.headers.version"),key:"version"},{...m.get("headers.connected"),label:a("zone-cps.routes.items.headers.connected"),key:"connected"},{...m.get("headers.disconnected"),label:a("zone-cps.routes.items.headers.disconnected"),key:"disconnected"},{...m.get("headers.responses"),label:a("zone-cps.routes.items.headers.responses"),key:"responses"}],"is-selected-row":t=>t.id===z.params.subscription,items:d.data.zoneInsight.subscriptions.map((t,p,u)=>u[u.length-(p+1)]),onResize:m.set},{zoneInstanceId:e(({row:t})=>[n(B,{"data-action":"",to:{name:"zone-cp-subscription-summary-view",params:{subscription:t.id}}},{default:e(()=>[o(i(t.zoneInstanceId),1)]),_:2},1032,["to"])]),version:e(({row:t})=>{var p,u;return[o(i(((u=(p=t.version)==null?void 0:p.kumaCp)==null?void 0:u.version)??"-"),1)]}),connected:e(({row:t})=>[o(i(a("common.formats.datetime",{value:Date.parse(t.connectTime??"")})),1)]),disconnected:e(({row:t})=>[t.disconnectTime?(l(),_(h,{key:0},[o(i(a("common.formats.datetime",{value:Date.parse(t.disconnectTime)})),1)],64)):w("",!0)]),responses:e(({row:t})=>{var p;return[(l(!0),_(h,null,v([((p=t.status)==null?void 0:p.total)??{}],u=>(l(),_(h,null,[o(i(u.responsesSent)+"/"+i(u.responsesAcknowledged),1)],64))),256))]}),_:2},1032,["headers","is-selected-row","items","onResize"]),s[13]||(s[13]=o()),n(D,null,{default:e(({Component:t})=>[z.child()?(l(),y(F,{key:0,width:"670px",onClose:function(){z.replace({name:"zone-cp-detail-view",params:{zone:z.params.zone}})}},{default:e(()=>[(l(),y(q(t),{data:d.data.zoneInsight.subscriptions},{default:e(()=>[g("p",null,i(a("zone-cps.routes.item.subscription_intro")),1)]),_:2},1032,["data"]))]),_:2},1032,["onClose"])):w("",!0)]),_:2},1024)])):w("",!0)]),_:2},1024)]),_:2},[d.data.warnings.length>0?{name:"notifications",fn:e(()=>[g("ul",null,[(l(!0),_(h,null,v(d.data.warnings,t=>(l(),_("li",{key:t.kind,"data-testid":`warning-${t.kind}`},[n(k,{path:`common.warnings.${t.kind}`,params:{zoneCpVersion:t.payload.zoneCpVersion??"",...t.kind==="INCOMPATIBLE_ZONE_AND_GLOBAL_CPS_VERSIONS"?{globalCpVersion:(r==null?void 0:r.version)??""}:{}}},null,8,["path","params"])],8,K))),128))])]),key:"0"}:void 0]),1032,["docs"])]),_:2},1032,["src"])]}),_:1})}}});export{J as default};
