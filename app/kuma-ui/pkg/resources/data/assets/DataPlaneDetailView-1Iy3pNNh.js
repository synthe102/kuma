import{d as tt,F as et,H as at,r as m,o as s,q as c,w as t,b as o,p as S,Y as nt,Q as T,e as a,R as v,t as d,S as ot,m as w,c as u,K as y,L as _,s as C,G as st,A as dt,_ as it}from"./index-U3igbuyl.js";import{S as lt}from"./SummaryView-CvpALkxr.js";import{T as rt}from"./TagList-CtiYy--U.js";import{C as j,a as V,b as A}from"./ConnectionTraffic-C1V83_QN.js";const pt={"data-testid":"dataplane-warnings"},ut=["data-testid"],mt={key:0,"data-testid":"warning-stats-loading"},yt={"data-testid":"dataplane-mtls"},ct={class:"columns"},gt={key:0,"data-testid":"dataplane-subscriptions"},ft=tt({__name:"DataPlaneDetailView",props:{data:{},mesh:{}},setup(F){const B=et(),i=F,P=at(()=>i.data.warnings.concat(...i.data.isCertExpired?[{kind:"CERT_EXPIRED"}]:[]));return(bt,e)=>{const E=m("XI18n"),$=m("XIcon"),x=m("DataCollection"),X=m("XLayout"),z=m("XAction"),R=m("XBadge"),G=m("XCopyButton"),L=m("XAboutCard"),N=m("XEmptyState"),H=m("XInputSwitch"),K=m("XProgress"),q=m("XCard"),M=m("RouterView"),Q=m("XAlert"),Y=m("AppView"),J=m("DataSource"),U=m("RouteView");return s(),c(U,{params:{mesh:"",dataPlane:"",subscription:"",inactive:!1},name:"data-plane-detail-view"},{default:t(({route:g,t:l,can:O,me:I,uri:W})=>[o(J,{src:W(S(nt),"/meshes/:mesh/dataplanes/:name/stats/:address",{mesh:g.params.mesh,name:g.params.dataPlane,address:i.data.dataplane.networking.inboundAddress})},{default:t(({data:b,error:D,refresh:Z})=>[o(Y,null,T({default:t(()=>[e[48]||(e[48]=a()),o(X,{type:"stack","data-testid":"dataplane-details"},{default:t(()=>[o(L,{title:l("data-planes.routes.item.about.title"),created:i.data.creationTime,modified:i.data.modificationTime},{default:t(()=>[o(v,{layout:"horizontal"},{title:t(()=>[a(d(l("http.api.property.status")),1)]),body:t(()=>[o(X,{type:"separated"},{default:t(()=>[o(ot,{status:i.data.status},null,8,["status"]),e[3]||(e[3]=a()),i.data.dataplaneType==="standard"?(s(),c(x,{key:0,items:i.data.dataplane.networking.inbounds,predicate:n=>n.state!=="Ready",empty:!1},{default:t(({items:n})=>[o($,{name:"info"},{default:t(()=>[w("ul",null,[(s(!0),u(y,null,_(n,r=>(s(),u("li",{key:`${r.service}:${r.port}`},d(l("data-planes.routes.item.unhealthy_inbound",{service:r.service,port:r.port})),1))),128))])]),_:2},1024)]),_:2},1032,["items","predicate"])):C("",!0)]),_:2},1024)]),_:2},1024),e[10]||(e[10]=a()),O("use zones")&&i.data.zone?(s(),c(v,{key:0,layout:"horizontal"},{title:t(()=>[a(d(l("http.api.property.zone")),1)]),body:t(()=>[o(R,{appearance:"decorative"},{default:t(()=>[o(z,{to:{name:"zone-cp-detail-view",params:{zone:i.data.zone}}},{default:t(()=>[a(d(i.data.zone),1)]),_:1},8,["to"])]),_:1})]),_:2},1024)):C("",!0),e[11]||(e[11]=a()),o(v,{layout:"horizontal"},{title:t(()=>[a(d(l("http.api.proptery.type")),1)]),body:t(()=>[o(R,{appearance:"decorative"},{default:t(()=>[a(d(l(`data-planes.type.${i.data.dataplaneType}`)),1)]),_:2},1024)]),_:2},1024),e[12]||(e[12]=a()),i.data.namespace.length>0?(s(),c(v,{key:1,layout:"horizontal"},{title:t(()=>[a(d(l("http.api.property.namespace")),1)]),body:t(()=>[o(R,{appearance:"decorative"},{default:t(()=>[a(d(i.data.namespace),1)]),_:1})]),_:2},1024)):C("",!0),e[13]||(e[13]=a()),o(v,{layout:"horizontal"},{title:t(()=>[a(d(l("http.api.property.address")),1)]),body:t(()=>[o(G,{variant:"badge",format:"default",text:`${i.data.dataplane.networking.address}`},null,8,["text"])]),_:2},1024),e[14]||(e[14]=a()),i.data.dataplane.networking.gateway?(s(),c(v,{key:2,layout:"horizontal"},{title:t(()=>[a(d(l("http.api.property.tags")),1)]),body:t(()=>[o(rt,{tags:i.data.dataplane.networking.gateway.tags},null,8,["tags"])]),_:2},1024)):C("",!0)]),_:2},1032,["title","created","modified"]),e[44]||(e[44]=a()),o(q,{class:"traffic","data-testid":"dataplane-traffic"},{default:t(()=>[o(X,{type:"columns"},{default:t(()=>[o(j,null,{title:t(()=>[o(X,{type:"separated"},{default:t(()=>[o($,{name:"inbound"}),e[15]||(e[15]=a()),e[16]||(e[16]=w("span",null,"Inbounds",-1))]),_:1})]),default:t(()=>[e[18]||(e[18]=a()),(s(!0),u(y,null,_([i.data.dataplane.networking.type==="gateway"?Object.entries((b==null?void 0:b.inbounds)??{}).reduce((n,[r,p])=>{var k;const f=r.split("_").at(-1);return f===(((k=i.data.dataplane.networking.admin)==null?void 0:k.port)??"9901")?n:n.concat([{...i.data.dataplane.networking.inbounds[0],name:r,port:Number(f),protocol:["http","tcp"].find(h=>typeof p[h]<"u")??"tcp",addressPort:`${i.data.dataplane.networking.inbounds[0].address}:${f}`}])},[]):i.data.dataplane.networking.inbounds],n=>(s(),c(V,{key:n,type:"inbound","data-testid":"dataplane-inbounds"},{default:t(()=>[o(x,{type:"inbounds",items:n,predicate:r=>r.port!==49151},T({default:t(({items:r})=>[o(X,{type:"stack",size:"small"},{default:t(()=>[(s(!0),u(y,null,_(r,p=>(s(),u(y,{key:`${p.name}`},[(s(!0),u(y,null,_([b==null?void 0:b.inbounds[p.name]],f=>(s(),c(A,{key:f,"data-testid":"dataplane-inbound",protocol:p.protocol,service:O("use service-insights",i.mesh)?p.tags["kuma.io/service"]:"",traffic:typeof D>"u"?f:{name:"",protocol:p.protocol,port:`${p.port}`}},{default:t(()=>[o(z,{"data-action":"",to:{name:(k=>k.includes("bound")?k.replace("-outbound-","-inbound-"):"data-plane-connection-inbound-summary-overview-view")(String(S(B).name)),params:{connection:p.name},query:{inactive:g.params.inactive}}},{default:t(()=>[a(d(p.name.replace("localhost","").replace("_",":")),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","service","traffic"]))),128))],64))),128))]),_:2},1024)]),_:2},[i.data.dataplaneType==="delegated"?{name:"empty",fn:t(()=>[o(N,null,{default:t(()=>[w("p",null,`
                            This proxy is a delegated gateway therefore `+d(l("common.product.name"))+` does not have any visibility into inbounds for this gateway.
                          `,1)]),_:2},1024)]),key:"0"}:void 0]),1032,["items","predicate"])]),_:2},1024))),128))]),_:2},1024),e[28]||(e[28]=a()),o(j,null,T({title:t(()=>[o(X,{type:"separated"},{default:t(()=>[o($,{name:"outbound"}),e[22]||(e[22]=a()),e[23]||(e[23]=w("span",null,"Outbounds",-1))]),_:1})]),default:t(()=>[e[26]||(e[26]=a()),e[27]||(e[27]=a()),typeof D>"u"?(s(),u(y,{key:0},[typeof b>"u"?(s(),c(K,{key:0})):(s(),u(y,{key:1},[o(V,{type:"passthrough"},{default:t(()=>[o(A,{protocol:"passthrough",traffic:b.passthrough},{default:t(()=>e[24]||(e[24]=[a(`
                        Non mesh traffic
                      `)])),_:2},1032,["traffic"])]),_:2},1024),e[25]||(e[25]=a()),(s(),u(y,null,_(["upstream"],n=>o(x,{key:n,type:"outbounds",predicate:g.params.inactive?void 0:([r,p])=>{var f,k;return((typeof p.tcp<"u"?(f=p.tcp)==null?void 0:f[`${n}_cx_rx_bytes_total`]:(k=p.http)==null?void 0:k[`${n}_rq_total`])??0)>0},items:Object.entries(b.outbounds)},{default:t(({items:r})=>[r.length>0?(s(),c(V,{key:0,type:"outbound","data-testid":"dataplane-outbounds"},{default:t(()=>[(s(),u(y,null,_([/-([a-f0-9]){16}$/],p=>o(X,{key:p,type:"stack",size:"small"},{default:t(()=>[(s(!0),u(y,null,_(r,([f,k])=>(s(),c(A,{key:`${f}`,"data-testid":"dataplane-outbound",protocol:["grpc","http","tcp"].find(h=>typeof k[h]<"u")??"tcp",traffic:k,service:k.$resourceMeta.type===""?f.replace(p,""):void 0,direction:n},{default:t(()=>[o(z,{"data-action":"",to:{name:(h=>h.includes("bound")?h.replace("-inbound-","-outbound-"):"data-plane-connection-outbound-summary-overview-view")(String(S(B).name)),params:{connection:f},query:{inactive:g.params.inactive}}},{default:t(()=>[a(d(f),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","traffic","service","direction"]))),128))]),_:2},1024)),64))]),_:2},1024)):C("",!0)]),_:2},1032,["predicate","items"])),64))],64))],64)):(s(),c(N,{key:1}))]),_:2},[b?{name:"actions",fn:t(()=>[o(H,{checked:g.params.inactive,"data-testid":"dataplane-outbounds-inactive-toggle",onChange:n=>g.update({inactive:n})},{label:t(()=>e[19]||(e[19]=[a(`
                      Show inactive
                    `)])),_:2},1032,["checked","onChange"]),e[21]||(e[21]=a()),o(z,{action:"refresh",appearance:"primary",onClick:Z},{default:t(()=>e[20]||(e[20]=[a(`
                    Refresh
                  `)])),_:2},1032,["onClick"])]),key:"0"}:void 0]),1024)]),_:2},1024)]),_:2},1024),e[45]||(e[45]=a()),o(M,null,{default:t(n=>[n.route.name!==g.name?(s(),c(lt,{key:0,width:"670px",onClose:function(){g.replace({name:"data-plane-detail-view",params:{mesh:g.params.mesh,dataPlane:g.params.dataPlane},query:{inactive:g.params.inactive?null:void 0}})}},{default:t(()=>[(s(),c(st(n.Component),{data:g.params.subscription.length>0?i.data.dataplaneInsight.subscriptions:n.route.name.includes("-inbound-")?i.data.dataplane.networking.inbounds:(b==null?void 0:b.outbounds)||{},networking:i.data.dataplane.networking},null,8,["data","networking"]))]),_:2},1032,["onClose"])):C("",!0)]),_:2},1024),e[46]||(e[46]=a()),w("div",yt,[w("h2",null,d(l("data-planes.routes.item.mtls.title")),1),e[38]||(e[38]=a()),i.data.dataplaneInsight.mTLS?(s(!0),u(y,{key:0},_([i.data.dataplaneInsight.mTLS],n=>(s(),c(q,{key:n,class:"mt-4"},{default:t(()=>[w("div",ct,[o(v,null,{title:t(()=>[a(d(l("data-planes.routes.item.mtls.expiration_time.title")),1)]),body:t(()=>[a(d(l("common.formats.datetime",{value:Date.parse(n.certificateExpirationTime)})),1)]),_:2},1024),e[34]||(e[34]=a()),o(v,null,{title:t(()=>[a(d(l("data-planes.routes.item.mtls.generation_time.title")),1)]),body:t(()=>[a(d(l("common.formats.datetime",{value:Date.parse(n.lastCertificateRegeneration)})),1)]),_:2},1024),e[35]||(e[35]=a()),o(v,null,{title:t(()=>[a(d(l("data-planes.routes.item.mtls.regenerations.title")),1)]),body:t(()=>[a(d(l("common.formats.integer",{value:n.certificateRegenerations})),1)]),_:2},1024),e[36]||(e[36]=a()),o(v,null,{title:t(()=>[a(d(l("data-planes.routes.item.mtls.issued_backend.title")),1)]),body:t(()=>[a(d(n.issuedBackend),1)]),_:2},1024),e[37]||(e[37]=a()),o(v,null,{title:t(()=>[a(d(l("data-planes.routes.item.mtls.supported_backends.title")),1)]),body:t(()=>[w("ul",null,[(s(!0),u(y,null,_(n.supportedBackends,r=>(s(),u("li",{key:r},d(r),1))),128))])]),_:2},1024)])]),_:2},1024))),128)):(s(),c(Q,{key:1,class:"mt-4",variant:"warning"},{default:t(()=>[o(E,{path:"data-planes.routes.item.mtls.disabled"})]),_:1}))]),e[47]||(e[47]=a()),i.data.dataplaneInsight.subscriptions.length>0?(s(),u("div",gt,[w("h2",null,d(l("data-planes.routes.item.subscriptions.title")),1),e[43]||(e[43]=a()),o(dt,{headers:[{...I.get("headers.instanceId"),label:l("http.api.property.instanceId"),key:"instanceId"},{...I.get("headers.version"),label:l("http.api.property.version"),key:"version"},{...I.get("headers.connected"),label:l("http.api.property.connected"),key:"connected"},{...I.get("headers.disconnected"),label:l("http.api.property.disconnected"),key:"disconnected"},{...I.get("headers.responses"),label:l("http.api.property.responses"),key:"responses"}],"is-selected-row":n=>n.id===g.params.subscription,items:i.data.dataplaneInsight.subscriptions.map((n,r,p)=>p[p.length-(r+1)]),onResize:I.set},{instanceId:t(({row:n})=>[o(z,{"data-action":"",to:{name:"data-plane-subscription-summary-view",params:{subscription:n.id}}},{default:t(()=>[a(d(n.controlPlaneInstanceId),1)]),_:2},1032,["to"])]),version:t(({row:n})=>{var r,p;return[a(d(((p=(r=n.version)==null?void 0:r.kumaDp)==null?void 0:p.version)??"-"),1)]}),connected:t(({row:n})=>[a(d(l("common.formats.datetime",{value:Date.parse(n.connectTime??"")})),1)]),disconnected:t(({row:n})=>[n.disconnectTime?(s(),u(y,{key:0},[a(d(l("common.formats.datetime",{value:Date.parse(n.disconnectTime)})),1)],64)):C("",!0)]),responses:t(({row:n})=>{var r;return[(s(!0),u(y,null,_([((r=n.status)==null?void 0:r.total)??{}],p=>(s(),u(y,null,[a(d(p.responsesSent)+"/"+d(p.responsesAcknowledged),1)],64))),256))]}),_:2},1032,["headers","is-selected-row","items","onResize"])])):C("",!0)]),_:2},1024)]),_:2},[P.value.length>0||D?{name:"notifications",fn:t(()=>[w("ul",pt,[(s(!0),u(y,null,_(P.value,n=>(s(),u("li",{key:n.kind,"data-testid":`warning-${n.kind}`},[o(E,{path:`common.warnings.${n.kind}`,params:n.payload},null,8,["path","params"])],8,ut))),128)),e[2]||(e[2]=a()),D?(s(),u("li",mt,[e[0]||(e[0]=a(`
              The below view is not enhanced with runtime stats (Error loading stats: `)),w("strong",null,d(D.toString()),1),e[1]||(e[1]=a(`)
            `))])):C("",!0)])]),key:"0"}:void 0]),1024)]),_:2},1032,["src"])]),_:1})}}}),Ct=it(ft,[["__scopeId","data-v-e97b2a08"]]);export{Ct as default};
