import{E as d}from"./EnvoyData-85f427fe.js";import{a as i}from"./dataplane-0a086c06.js";import{d as m,r as a,o as _,i as f,w as e,j as t,p as w,n as h,k as V}from"./index-f09cca58.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-d77f2e48.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-bb9bf655.js";const g=m({__name:"DataPlaneClustersView",props:{data:{}},setup(o){const s=o;return(v,y)=>{const r=a("RouteTitle"),l=a("KCard"),p=a("AppView"),u=a("RouteView");return _(),f(u,{name:"data-plane-clusters-view",params:{mesh:"",dataPlane:""}},{default:e(({route:n,t:c})=>[t(p,null,{title:e(()=>[w("h2",null,[t(r,{title:c("data-planes.routes.item.navigation.data-plane-clusters-view"),render:!0},null,8,["title"])])]),default:e(()=>[h(),t(l,null,{body:e(()=>[t(d,{status:V(i)(s.data.dataplane,s.data.dataplaneInsight).status,resource:"Data Plane Proxy",src:`/meshes/${n.params.mesh}/dataplanes/${n.params.dataPlane}/data-path/clusters`,"query-key":"envoy-data-clusters-data-plane"},null,8,["status","src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{g as default};
