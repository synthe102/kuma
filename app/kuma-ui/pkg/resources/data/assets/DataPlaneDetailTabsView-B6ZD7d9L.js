import{d as T,e as a,o as p,m as c,w as e,a as t,R as d,b as l,K as C,t as $,F as k,k as A,a0 as S}from"./index-B-FVJ5xI.js";const B=T({__name:"DataPlaneDetailTabsView",props:{mesh:{}},setup(_){const u=_;return(X,m)=>{const f=a("RouteTitle"),h=a("XAction"),w=a("XTabs"),b=a("RouterView"),V=a("DataLoader"),v=a("AppView"),x=a("DataSource"),D=a("RouteView");return p(),c(D,{name:"data-plane-detail-tabs-view",params:{mesh:"",dataPlane:""}},{default:e(({route:s,t:r})=>[t(x,{src:`/meshes/${s.params.mesh}/dataplane-overviews/${s.params.dataPlane}`},{default:e(({data:n,error:R})=>[t(v,{breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:s.params.mesh}},text:s.params.mesh},{to:{name:"data-plane-list-view",params:{mesh:s.params.mesh}},text:r("data-planes.routes.item.breadcrumbs")}]},d({default:e(()=>[m[1]||(m[1]=l()),t(V,{data:[n],errors:[R]},{default:e(()=>{var i;return[t(w,{selected:(i=s.child())==null?void 0:i.name},d({_:2},[C(s.children,({name:o})=>({name:`${o}-tab`,fn:e(()=>[t(h,{to:{name:o}},{default:e(()=>[l($(r(`data-planes.routes.item.navigation.${o}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),m[0]||(m[0]=l()),t(b,null,{default:e(o=>[(p(),c(k(o.Component),{data:n,mesh:u.mesh},null,8,["data","mesh"]))]),_:2},1024)]}),_:2},1032,["data","errors"])]),_:2},[n?{name:"title",fn:e(()=>[A("h1",null,[t(S,{text:n.name},{default:e(()=>[t(f,{title:r("data-planes.routes.item.title",{name:n.name})},null,8,["title"])]),_:2},1032,["text"])])]),key:"0"}:void 0]),1032,["breadcrumbs"])]),_:2},1032,["src"])]),_:1})}}});export{B as default};
