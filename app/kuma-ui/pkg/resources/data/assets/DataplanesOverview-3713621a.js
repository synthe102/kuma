import{L as D}from"./LoadingBox-bf4b7fad.js";import{O,a as T,b as B}from"./OnboardingPage-8629fb1a.js";import{S as R}from"./StatusBadge-3b00ac53.js";import{d as S,Q as V,y as k,U as F,r as d,o,i as g,w as t,j as s,n as c,l as p,I,H as f,p as h,F as x,t as N}from"./index-f09cca58.js";import{g as P}from"./dataplane-0a086c06.js";const E={key:0,class:"status-loading-box mb-4"},L={key:1},C={class:"mb-4"},H=S({__name:"DataplanesOverview",setup(K){const b=V(),A=[{label:"Mesh",key:"mesh"},{label:"Name",key:"name"},{label:"Status",key:"status"}],a=k({total:0,data:[]}),_=k(null);F(function(){w()}),y();function w(){_.value!==null&&window.clearTimeout(_.value)}async function y(){let i=!1;const v=[];try{const{items:n}=await b.getAllDataplanes({size:10});if(Array.isArray(n)&&n.length>0)for(const m of n){const{name:r,mesh:u}=m,l=await b.getDataplaneOverviewFromMesh({mesh:u,name:r}),e=P(l.dataplaneInsight);e==="offline"&&(i=!0),v.push({status:e,name:r,mesh:u})}else i=!0}catch(n){console.error(n)}a.value.data=v,a.value.total=a.value.data.length,i&&(w(),_.value=window.setTimeout(y,1e3))}return(i,v)=>{const n=d("RouteTitle"),m=d("KTable"),r=d("AppView"),u=d("RouteView");return o(),g(u,{name:"onboarding-dataplanes-overview"},{default:t(({t:l})=>[s(n,{title:l("onboarding.routes.dataplanes-overview.title")},null,8,["title"]),c(),s(r,null,{default:t(()=>[s(O,null,{header:t(()=>[(o(!0),p(x,null,I([a.value.data.length>0?"success":"waiting"],e=>(o(),g(T,{key:e,"data-testid":`state-${e}`},{title:t(()=>[c(f(l(`onboarding.routes.dataplanes-overview.header.${e}.title`)),1)]),description:t(()=>[h("p",null,f(l(`onboarding.routes.dataplanes-overview.header.${e}.description`)),1)]),_:2},1032,["data-testid"]))),128))]),content:t(()=>[a.value.data.length===0?(o(),p("div",E,[s(D)])):(o(),p("div",L,[h("p",C,[h("b",null,"Found "+f(a.value.data.length)+" DPPs:",1)]),c(),s(m,{class:"mb-4",fetcher:()=>a.value,headers:A,"disable-pagination":""},{status:t(({rowValue:e})=>[e?(o(),g(R,{key:0,status:e},null,8,["status"])):(o(),p(x,{key:1},[c(`
                  —
                `)],64))]),_:1},8,["fetcher"])]))]),navigation:t(()=>[s(B,{"next-step":"onboarding-completed","previous-step":"onboarding-add-services-code","should-allow-next":a.value.data.length>0},null,8,["should-allow-next"])]),_:2},1024)]),_:2},1024)]),_:1})}}});const Q=N(H,[["__scopeId","data-v-87fb4342"]]);export{Q as default};
