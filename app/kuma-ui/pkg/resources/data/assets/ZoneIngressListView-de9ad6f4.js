import{d as T,r as a,o,g as n,w as t,h as i,m as B,l as d,E as D,Y as E,C as g,a1 as C,j as z,F as I,S as L,i as h,Z as N,K as P,k as $,q as Z}from"./index-65a641bf.js";import{_ as O}from"./MultizoneInfo.vue_vue_type_script_setup_true_lang-eb0a55d2.js";import{g as F}from"./dataplane-a974028d.js";const U=T({__name:"ZoneIngressListView",setup(M){function x(k){return k.map(m=>{const{name:p}=m,y={name:"zone-ingress-detail-view",params:{zoneIngress:p}},{networking:e}=m.zoneIngress;let _;e!=null&&e.address&&(e!=null&&e.port)&&(_=`${e.address}:${e.port}`);let u;e!=null&&e.advertisedAddress&&(e!=null&&e.advertisedPort)&&(u=`${e.advertisedAddress}:${e.advertisedPort}`);const f=F(m.zoneIngressInsight??{});return{detailViewRoute:y,name:p,addressPort:_,advertisedAddressPort:u,status:f}})}return(k,m)=>{const p=a("RouteTitle"),y=a("RouterLink"),e=a("KIcon"),_=a("KButton"),u=a("KDropdownItem"),f=a("KDropdownMenu"),K=a("KCard"),b=a("DataSource"),R=a("AppView"),A=a("RouteView");return o(),n(b,{src:"/me"},{default:t(({data:w})=>[w?(o(),n(A,{key:0,name:"zone-ingress-list-view",params:{page:1,size:w.pageSize}},{default:t(({route:c,can:S,t:r})=>[i(R,null,{title:t(()=>[B("h1",null,[i(p,{title:r("zone-ingresses.routes.items.title"),render:!0},null,8,["title"])])]),default:t(()=>[d(),S("use zones")?(o(),n(b,{key:1,src:`/zone-ingress-overviews?page=${c.params.page}&size=${c.params.size}`},{default:t(({data:l,error:v})=>[i(K,null,{body:t(()=>[v!==void 0?(o(),n(D,{key:0,error:v},null,8,["error"])):(o(),n(E,{key:1,class:"zone-ingress-collection","data-testid":"zone-ingress-collection",headers:[{label:"Name",key:"name"},{label:"Address",key:"addressPort"},{label:"Advertised address",key:"advertisedAddressPort"},{label:"Status",key:"status"},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":parseInt(c.params.page),"page-size":parseInt(c.params.size),total:l==null?void 0:l.total,items:l?x(l.items):void 0,error:v,"empty-state-message":r("common.emptyState.message",{type:"Zone Ingresses"}),"empty-state-cta-to":r("zone-ingresses.href.docs"),"empty-state-cta-text":r("common.documentation"),onChange:c.update},{name:t(({row:s,rowValue:V})=>[i(y,{to:s.detailViewRoute,"data-testid":"detail-view-link"},{default:t(()=>[d(g(V),1)]),_:2},1032,["to"])]),addressPort:t(({rowValue:s})=>[s?(o(),n(C,{key:0,text:s},null,8,["text"])):(o(),z(I,{key:1},[d(g(r("common.collection.none")),1)],64))]),advertisedAddressPort:t(({rowValue:s})=>[s?(o(),n(C,{key:0,text:s},null,8,["text"])):(o(),z(I,{key:1},[d(g(r("common.collection.none")),1)],64))]),status:t(({rowValue:s})=>[s?(o(),n(L,{key:0,status:s},null,8,["status"])):(o(),z(I,{key:1},[d(g(r("common.collection.none")),1)],64))]),actions:t(({row:s})=>[i(f,{class:"actions-dropdown","data-testid":"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:t(()=>[i(_,{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:t(()=>[i(e,{color:h(N),icon:"more",size:h(P)},null,8,["color","size"])]),_:1})]),items:t(()=>[i(u,{item:{to:s.detailViewRoute,label:r("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:2},1032,["page-number","page-size","total","items","error","empty-state-message","empty-state-cta-to","empty-state-cta-text","onChange"]))]),_:2},1024)]),_:2},1032,["src"])):(o(),n(O,{key:0}))]),_:2},1024)]),_:2},1032,["params"])):$("",!0)]),_:1})}}});const W=Z(U,[["__scopeId","data-v-ef5f3781"]]);export{W as default};
