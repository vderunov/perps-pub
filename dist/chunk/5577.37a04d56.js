"use strict";(globalThis.webpackChunk_snx_v3_liquidity=globalThis.webpackChunk_snx_v3_liquidity||[]).push([[5577],{2200:(e,t,s)=>{s.d(t,{Ai:()=>i,OC:()=>l});Symbol();const o=Symbol();const n=Object.getPrototypeOf,a=new WeakMap,r=e=>e&&(a.has(e)?a.get(e):n(e)===Object.prototype||n(e)===Array.prototype),i=e=>r(e)&&e[o]||null,l=(e,t=!0)=>{a.set(e,t)}},55389:(e,t,s)=>{s.d(t,{mb:()=>v,Ao:()=>h,vZ:()=>f,pV:()=>T,D8:()=>_,IN:()=>b,jL:()=>u,lH:()=>q,dC:()=>Z});var o=s(2200);const n=e=>"object"==typeof e&&null!==e,a=new WeakMap,r=new WeakSet,i=(e=Object.is,t=((e,t)=>new Proxy(e,t)),s=(e=>n(e)&&!r.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)),i=(e=>e.configurable&&e.enumerable&&e.writable),l=(e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}}),c=new WeakMap,d=((e,t,s=l)=>{const n=c.get(e);if((null==n?void 0:n[0])===t)return n[1];const i=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return(0,o.OC)(i,!0),c.set(e,[t,i]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(i,t))return;const n=Reflect.get(e,t),l={value:n,enumerable:!0,configurable:!0};if(r.has(n))(0,o.OC)(n,!1);else if(n instanceof Promise)delete l.value,l.get=()=>s(n);else if(a.has(n)){const[e,t]=a.get(n);l.value=d(e,t(),s)}Object.defineProperty(i,t,l)})),Object.preventExtensions(i)}),p=new WeakMap,u=[1,1],h=(l=>{if(!n(l))throw new Error("object required");const c=p.get(l);if(c)return c;let g=u[0];const f=new Set,m=(e,t=++u[0])=>{g!==t&&(g=t,f.forEach((s=>s(e,t))))};let b=u[1];const y=e=>(t,s)=>{const o=[...t];o[1]=[e,...o[1]],m(o,s)},v=new Map,w=e=>{var t;const s=v.get(e);s&&(v.delete(e),null==(t=s[1])||t.call(s))},I=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),C=(t,i,l,c,d)=>{if(t&&(e(i,c)||p.has(c)&&e(i,p.get(c))))return;w(l),n(c)&&(c=(0,o.Ai)(c)||c);let u=c;if(c instanceof Promise)c.then((e=>{c.status="fulfilled",c.value=e,m(["resolve",[l],e])})).catch((e=>{c.status="rejected",c.reason=e,m(["reject",[l],e])}));else{!a.has(c)&&s(c)&&(u=h(c));const e=!r.has(u)&&a.get(u);e&&((e,t)=>{if(v.has(e))throw new Error("prop listener already exists");if(f.size){const s=t[3](y(e));v.set(e,[t,s])}else v.set(e,[t])})(l,e)}d(u),m(["set",[l],c,i])},O=t(I,{deleteProperty(e,t){const s=Reflect.get(e,t);w(t);const o=Reflect.deleteProperty(e,t);return o&&m(["delete",[t],s]),o},set(e,t,s,o){const n=Reflect.has(e,t),a=Reflect.get(e,t,o);return C(n,a,t,s,(s=>{Reflect.set(e,t,s,o)})),!0},defineProperty(e,t,s){if(i(s)){const o=Reflect.getOwnPropertyDescriptor(e,t);if(!o||i(o))return C(!!o&&"value"in o,null==o?void 0:o.value,t,s.value,(o=>{Reflect.defineProperty(e,t,{...s,value:o})})),!0}return Reflect.defineProperty(e,t,s)}});p.set(l,O);const W=[I,(e=++u[1])=>(b===e||f.size||(b=e,v.forEach((([t])=>{const s=t[1](e);s>g&&(g=s)}))),g),d,e=>{f.add(e),1===f.size&&v.forEach((([e,t],s)=>{if(t)throw new Error("remove already exists");const o=e[3](y(s));v.set(s,[e,o])}));return()=>{f.delete(e),0===f.size&&v.forEach((([e,t],s)=>{t&&(t(),v.set(s,[e]))}))}}];return a.set(O,W),Reflect.ownKeys(l).forEach((e=>{const t=Object.getOwnPropertyDescriptor(l,e);"value"in t&&(O[e]=l[e],delete t.value,delete t.writable),Object.defineProperty(I,e,t)})),O}))=>[h,a,r,e,t,s,i,l,c,d,p,u],[l]=i();function c(e={}){return l(e)}function d(e,t,s){const o=a.get(e);let n;o||console.warn("Please use proxy object");const r=[],i=o[3];let l=!1;const c=i((e=>{r.push(e),s?t(r.splice(0)):n||(n=Promise.resolve().then((()=>{n=void 0,l&&t(r.splice(0))})))}));return l=!0,()=>{l=!1,c()}}const p=c({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),u={state:p,subscribe:e=>d(p,(()=>e(p))),push(e,t){e!==p.view&&(p.view=e,t&&(p.data=t),p.history.push(e))},reset(e){p.view=e,p.history=[e]},replace(e){p.history.length>1&&(p.history[p.history.length-1]=e,p.view=e)},goBack(){if(p.history.length>1){p.history.pop();const[e]=p.history.slice(-1);p.view=e}},setData(e){p.data=e}},h={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>h.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return h.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(h.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);return`${o}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!h.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);return`${o}wc?uri=${encodeURIComponent(t)}`},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(h.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(h.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(h.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(h.WCM_VERSION,"2.6.1")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=u.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},g=c({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),f={state:g,subscribe:e=>d(g.events,(()=>e(function(e,t){const s=a.get(e);s||console.warn("Please use proxy object");const[o,n,r]=s;return r(o,n(),t)}(g.events[g.events.length-1])))),initialize(){g.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(g.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){g.connectedWalletId=e},click(e){if(g.enabled){const t={type:"CLICK",name:e.name,userSessionId:g.userSessionId,timestamp:Date.now(),data:e};g.events.push(t)}},track(e){if(g.enabled){const t={type:"TRACK",name:e.name,userSessionId:g.userSessionId,timestamp:Date.now(),data:e};g.events.push(t)}},view(e){if(g.enabled){const t={type:"VIEW",name:e.name,userSessionId:g.userSessionId,timestamp:Date.now(),data:e};g.events.push(t)}}},m=c({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),b={state:m,subscribe:e=>d(m,(()=>e(m))),setChains(e){m.chains=e},setWalletConnectUri(e){m.walletConnectUri=e},setIsCustomDesktop(e){m.isCustomDesktop=e},setIsCustomMobile(e){m.isCustomMobile=e},setIsDataLoaded(e){m.isDataLoaded=e},setIsUiLoaded(e){m.isUiLoaded=e},setIsAuth(e){m.isAuth=e}},y=c({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),v={state:y,subscribe:e=>d(y,(()=>e(y))),setConfig(e){var t,s;f.initialize(),b.setChains(e.chains),b.setIsAuth(Boolean(e.enableAuthMode)),b.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),b.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),h.setModalVersionInStorage(),Object.assign(y,e)}};var w=Object.defineProperty,I=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,W=(e,t,s)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const E="https://explorer-api.walletconnect.com",L="wcm",j="js-2.6.1";async function A(e,t){const s=((e,t)=>{for(var s in t||(t={}))C.call(t,s)&&W(e,s,t[s]);if(I)for(var s of I(t))O.call(t,s)&&W(e,s,t[s]);return e})({sdkType:L,sdkVersion:j},t),o=new URL(e,E);return o.searchParams.append("projectId",v.state.projectId),Object.entries(s).forEach((([e,t])=>{t&&o.searchParams.append(e,String(t))})),(await fetch(o)).json()}const k={getDesktopListings:async e=>A("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>A("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>A("/w3m/v1/getInjectedListings",e),getAllListings:async e=>A("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${E}/w3m/v1/getWalletImage/${e}?projectId=${v.state.projectId}&sdkType=${L}&sdkVersion=${j}`,getAssetImageUrl:e=>`${E}/w3m/v1/getAssetImage/${e}?projectId=${v.state.projectId}&sdkType=${L}&sdkVersion=${j}`};var M=Object.defineProperty,D=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,S=(e,t,s)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const N=h.isMobile(),x=c({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),T={state:x,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=v.state;if("NONE"===e||"ALL"===t&&!e)return x.recomendedWallets;if(h.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await k.getAllListings(t),o=Object.values(s);o.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),x.recomendedWallets=o}else{const{chains:e,isAuth:s}=b.state,o=e?.join(","),n=h.isArray(t),a={page:1,sdks:s?"auth_v1":void 0,entries:h.RECOMMENDED_WALLET_AMOUNT,chains:o,version:2,excludedIds:n?t.join(","):void 0},{listings:r}=N?await k.getMobileListings(a):await k.getDesktopListings(a);x.recomendedWallets=Object.values(r)}return x.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))P.call(t,s)&&S(e,s,t[s]);if(D)for(var s of D(t))U.call(t,s)&&S(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:o}=v.state,{recomendedWallets:n}=x;if("ALL"===o)return x.wallets;n.length?t.excludedIds=n.map((e=>e.id)).join(","):h.isArray(s)&&(t.excludedIds=s.join(",")),h.isArray(o)&&(t.excludedIds=[t.excludedIds,o].filter(Boolean).join(",")),b.state.isAuth&&(t.sdks="auth_v1");const{page:a,search:r}=e,{listings:i,total:l}=N?await k.getMobileListings(t):await k.getDesktopListings(t),c=Object.values(i),d=r?"search":"wallets";return x[d]={listings:[...x[d].listings,...c],total:l,page:a??1},{listings:c,total:l}},getWalletImageUrl:e=>k.getWalletImageUrl(e),getAssetImageUrl:e=>k.getAssetImageUrl(e),resetSearch(){x.search={listings:[],total:0,page:1}}},R=c({open:!1}),_={state:R,subscribe:e=>d(R,(()=>e(R))),open:async e=>new Promise((t=>{const{isUiLoaded:s,isDataLoaded:o}=b.state;if(h.removeWalletConnectDeepLink(),b.setWalletConnectUri(e?.uri),b.setChains(e?.chains),u.reset("ConnectWallet"),s&&o)R.open=!0,t();else{const e=setInterval((()=>{const s=b.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),R.open=!0,t())}),200)}})),close(){R.open=!1}};var $=Object.defineProperty,H=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,K=(e,t,s)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const z=c({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),q={state:z,subscribe:e=>d(z,(()=>e(z))),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(z.themeMode=t),s&&(z.themeVariables=((e,t)=>{for(var s in t||(t={}))V.call(t,s)&&K(e,s,t[s]);if(H)for(var s of H(t))B.call(t,s)&&K(e,s,t[s]);return e})({},s))}},J=c({open:!1,message:"",variant:"success"}),Z={state:J,subscribe:e=>d(J,(()=>e(J))),openToast(e,t){J.open=!0,J.message=e,J.variant=t},closeToast(){J.open=!1}}},85577:(e,t,s)=>{s.d(t,{WalletConnectModal:()=>n});var o=s(55389);class n{constructor(e){this.openModal=o.D8.open,this.closeModal=o.D8.close,this.subscribeModal=o.D8.subscribe,this.setTheme=o.lH.setThemeConfig,o.lH.setThemeConfig(e),o.mb.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await Promise.all([s.e(8417),s.e(9891)]).then(s.bind(s,99891));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),o.IN.setIsUiLoaded(!0)}}}}}]);
//# sourceMappingURL=5577.37a04d56.js.map