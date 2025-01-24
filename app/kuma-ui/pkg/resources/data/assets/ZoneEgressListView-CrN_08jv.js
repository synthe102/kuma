import{d as E,r as s,o as r,q as m,w as e,s as p,e as i,b as o,Q as R,p as b,aq as B,A as S,t as u,c as x,K as D,S as N,G as q,m as L}from"./index-U3igbuyl.js";import{S as G}from"./SummaryView-CvpALkxr.js";const Z=E({__name:"ZoneEgressListView",props:{data:{}},setup(T){return(I,a)=>{const _=s("RouteTitle"),w=s("XI18n"),z=s("XAction"),y=s("XCopyButton"),k=s("XActionGroup"),g=s("RouterView"),C=s("DataCollection"),A=s("DataLoader"),V=s("XCard"),v=s("AppView"),X=s("RouteView");return r(),m(X,{name:"zone-egress-list-view",params:{zone:"",zoneEgress:""}},{default:e(({route:l,t:c,me:d,uri:h,can:f})=>[f("use zones")?(r(),m(_,{key:0,render:!1,title:c("zone-egresses.routes.items.title")},null,8,["title"])):p("",!0),a[6]||(a[6]=i()),o(v,{docs:c("zone-egresses.href.docs")},R({default:e(()=>[a[4]||(a[4]=i()),o(w,{path:"zone-egresses.routes.items.intro","default-message":""}),a[5]||(a[5]=i()),o(V,null,{default:e(()=>[o(A,{src:h(b(B),"/zone-cps/:name/egresses",{name:l.params.zone||"*"},{page:1,size:100})},{loadable:e(({data:n})=>[o(C,{type:"zone-egresses",items:(n==null?void 0:n.items)??[void 0],total:n==null?void 0:n.total,onChange:l.update},{default:e(()=>[o(S,{class:"zone-egress-collection","data-testid":"zone-egress-collection",headers:[{...d.get("headers.name"),label:"Name",key:"name"},{...d.get("headers.socketAddress"),label:"Address",key:"socketAddress"},{...d.get("headers.status"),label:"Status",key:"status"},{...d.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:n==null?void 0:n.items,"is-selected-row":t=>t.name===l.params.zoneEgress,onResize:d.set},{name:e(({row:t})=>[o(z,{"data-action":"",to:{name:"zone-egress-summary-view",params:{zone:l.params.zone,zoneEgress:t.id},query:{page:1,size:100}}},{default:e(()=>[i(u(t.name),1)]),_:2},1032,["to"])]),socketAddress:e(({row:t})=>[t.zoneEgress.socketAddress.length>0?(r(),m(y,{key:0,text:t.zoneEgress.socketAddress},null,8,["text"])):(r(),x(D,{key:1},[i(u(c("common.collection.none")),1)],64))]),status:e(({row:t})=>[o(N,{status:t.state},null,8,["status"])]),actions:e(({row:t})=>[o(k,null,{default:e(()=>[o(z,{to:{name:"zone-egress-detail-view",params:{zoneEgress:t.id}}},{default:e(()=>[i(u(c("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"]),a[3]||(a[3]=i()),o(g,null,{default:e(({Component:t})=>[l.child()?(r(),m(G,{key:0,onClose:F=>l.replace({name:"zone-egress-list-view",params:{zone:l.params.zone},query:{page:1,size:100}})},{default:e(()=>[typeof n<"u"?(r(),m(q(t),{key:0,items:n.items},null,8,["items"])):p("",!0)]),_:2},1032,["onClose"])):p("",!0)]),_:2},1024)]),_:2},1032,["items","total","onChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},[f("use zones")?void 0:{name:"title",fn:e(()=>[L("h1",null,[o(_,{title:c("zone-egresses.routes.items.title")},null,8,["title"])])]),key:"0"}]),1032,["docs"])]),_:1})}}});export{Z as default};
