import{O as w,a as h,b as y}from"./OnboardingPage-ce73e349.js";import{d as _,o as m,j as S,P as B,x as k,q as v,r as c,g as C,w as t,h as n,l as a,m as e,z as A,B as N}from"./index-65a641bf.js";const V=""+new URL("new-service-demo-bff0792e.svg",import.meta.url).href,R=""+new URL("new-service-manually-5bec5301.svg",import.meta.url).href,I=_({__name:"ServiceBox",props:{active:{type:Boolean,required:!1,default:!1}},emits:["clicked"],setup(o,{emit:d}){const i=o;return(r,s)=>(m(),S("div",{class:k(["box",{"box--active":i.active}]),"data-testid":"box",onClick:s[0]||(s[0]=l=>d("clicked"))},[B(r.$slots,"default",{},void 0,!0)],2))}});const p=v(I,[["__scopeId","data-v-9846ff30"]]),u=o=>(A("data-v-c81d235d"),o=o(),N(),o),$={class:"service-mode-list"},O=u(()=>e("div",{class:"service-box-content"},[e("img",{src:V}),a(),e("p",{class:"service-mode-title"},`
                  Demo app
                `),a(),e("p",null,"Counter application")],-1)),z=u(()=>e("div",{class:"service-box-content"},[e("img",{src:R}),a(),e("p",{class:"service-mode-title"},`
                  Manually
                `),a(),e("p",null,"After this wizard")],-1)),T=_({__name:"AddNewServices",props:{mode:{}},emits:["change"],setup(o,{emit:d}){const i=o;return(r,s)=>{const l=c("RouteTitle"),f=c("AppView"),g=c("RouteView");return m(),C(g,{name:"onboarding-add-services"},{default:t(({t:b})=>[n(l,{title:b("onboarding.routes.add-services.title")},null,8,["title"]),a(),n(f,null,{default:t(()=>[n(w,null,{header:t(()=>[n(h,null,{title:t(()=>[a(`
              Add services
            `)]),_:1})]),content:t(()=>[e("div",$,[n(p,{"data-testid":"onboarding-demo",active:i.mode==="demo",onClicked:s[0]||(s[0]=x=>d("change","demo"))},{default:t(()=>[O]),_:1},8,["active"]),a(),n(p,{"data-testid":"onboarding-manually",active:i.mode==="manually",onClicked:s[1]||(s[1]=x=>d("change","manually"))},{default:t(()=>[z]),_:1},8,["active"])])]),navigation:t(()=>[n(y,{"next-step":i.mode==="manually"?"onboarding-completed":"onboarding-add-services-code","previous-step":"onboarding-create-mesh"},null,8,["next-step"])]),_:1})]),_:1})]),_:1})}}});const P=v(T,[["__scopeId","data-v-c81d235d"]]);export{P as default};
