(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{1:function(t,e,n){t.exports=n("cd49")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},cd49:function(t,e,n){"use strict";n.r(e);var r=n("3596"),a=(n("d64f"),n("cf0e"),n("1111"),n("ca0b"),n("22d3"),n("56ba")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-app-bar-nav-icon",{on:{click:t.toggleDrawer}}),n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Latest Release")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-main",[n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",[n("v-list-item",{attrs:{to:"/"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("Home")])],1),n("v-list-item",{attrs:{to:"/about"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-book")])],1),n("v-list-item-title",[t._v("About (Protected Page)")])],1),t.isAuthenticated?n("v-list-item",{on:{click:function(e){return e.preventDefault(),t.signOut(e)}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account-circle")])],1),n("v-list-item-title",[t._v("Sign out - "+t._s(t.userEmail))])],1):t._e(),n("v-list-item",[n("v-switch",{attrs:{label:"Light/Dark"},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})],1)],1)],1)],1),n("router-view")],1)],1)},o=[],c=n("d913"),s=n("0a62"),u=n("fc69"),l=n("45af"),d=n("57ee"),p=(n("fb58"),n("d9c4")),h=n("e800"),m=n("a1f2"),v=function(t){Object(l["a"])(n,t);var e=Object(d["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.drawer=!1,t.isAuthenticated=!1,t.userEmail="",t}return Object(u["a"])(n,[{key:"signOut",value:function(){var t=this;this.signOutOidc().then((function(){t.$router.push("/")}))}},{key:"toggleDrawer",value:function(){this.drawer=!this.drawer}},{key:"userLoaded",value:function(t){var e,n,r;this.isAuthenticated=null!==t.detail&&!(null!==(e=t.detail)&&void 0!==e&&e.expired),this.userEmail=null!==(n=null===(r=t.detail)||void 0===r?void 0:r.profile.email)&&void 0!==n?n:"",window.console.log("Authenticated: ".concat(this.isAuthenticated," - email: ").concat(this.userEmail))}},{key:"mounted",value:function(){window.addEventListener("vuexoidc:userLoaded",this.userLoaded)}}]),n}(m["c"]);v=Object(p["a"])([Object(m["a"])({computed:Object(c["a"])({},Object(h["c"])("oidcStore",{})),methods:Object(c["a"])({},Object(h["b"])("oidcStore",{authenticateOidcPopup:"authenticateOidcPopup",removeOidcUser:"removeOidcUser",signOutOidc:"signOutOidc"}))})],v);var f=v,b=f,g=n("3583"),w=n("b30f"),y=n.n(w),O=n("5d52"),j=n("1733"),k=n("3de5"),x=n("88d9"),_=n("f3b5"),C=n("7fca"),S=n("9bf7"),E=n("5b3d"),R=n("2d55"),V=n("9d2e"),I=n("77cc"),L=n("030e"),$=n("5d42"),A=n("6765"),D=n("6855"),U=Object(g["a"])(b,i,o,!1,null,null,null),P=U.exports;y()(U,{VApp:O["a"],VAppBar:j["a"],VAppBarNavIcon:k["a"],VBtn:x["a"],VIcon:_["a"],VImg:C["a"],VList:S["a"],VListItem:E["a"],VListItemGroup:R["a"],VListItemIcon:V["a"],VListItemTitle:I["a"],VMain:L["a"],VNavigationDrawer:$["a"],VSpacer:A["a"],VSwitch:D["a"]});var T=n("9097"),N=n("eecb");n("50ef");function W(){return H.apply(this,arguments)}function H(){return H=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("./oidc.json");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,r={authority:n.authority,clientId:n.clientId,responseType:n.responseType,scope:n.scope,redirectUri:n.redirectUri,popupRedirectUri:n.popupRedirectUri,automaticSilentRenew:n.automaticSilentRenew,automaticSilentSignin:n.automaticSilentSignin,silentRedirectUri:n.silentRedirectUri,postLogoutRedirectUri:n.postLogoutRedirectUri},window.console.log(r),t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)}))),H.apply(this,arguments)}var q={namespaced:!0,dispatchEventsOnWindow:!0},B={userLoaded:function(t){return window.console.log("OIDC user is loaded:",t)},userUnloaded:function(){return window.console.log("OIDC user is unloaded")},accessTokenExpiring:function(){return window.console.log("Access token will expire")},accessTokenExpired:function(){return window.console.log("Access token did expire")},silentRenewError:function(){return window.console.log("OIDC user is unloaded")},userSignedOut:function(){return window.console.log("OIDC user is signed out")},oidcError:function(t){return window.console.log("OIDC error",t)},automaticSilentRenewError:function(t){return window.console.log("OIDC automaticSilentRenewError",t)}};function F(){return J.apply(this,arguments)}function J(){return J=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=N["b"],t.next=3,W();case 3:return t.t1=t.sent,t.t2=q,t.t3=B,e=(0,t.t0)(t.t1,t.t2,t.t3),t.abrupt("return",e);case 8:case"end":return t.stop()}}),t)}))),J.apply(this,arguments)}function M(){return G.apply(this,arguments)}function G(){return G=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a["a"].use(h["a"]),t.t0=h["a"].Store,t.t1={},t.t2={},t.t3={},t.next=7,F();case 7:return t.t4=t.sent,t.t5={oidcStore:t.t4},t.t6={state:t.t1,mutations:t.t2,actions:t.t3,modules:t.t5},e=new t.t0(t.t6),t.abrupt("return",e);case 12:case"end":return t.stop()}}),t)}))),G.apply(this,arguments)}var Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + Vuetify + TypeScript App"}})},Y=[],z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" "+t._s(t.msg)+" ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),r("br"),t._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},K=[],X=function(t){Object(l["a"])(n,t);var e=Object(d["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.ecosystem=[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],t.importantLinks=[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],t.whatsNext=[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}],t}return n}(m["c"]);Object(p["a"])([Object(m["b"])()],X.prototype,"msg",void 0),X=Object(p["a"])([m["a"]],X);var Z=X,tt=Z,et=n("b750"),nt=n("27d8"),rt=n("3adf"),at=Object(g["a"])(tt,z,K,!1,null,null,null),it=at.exports;y()(at,{VCol:et["a"],VContainer:nt["a"],VImg:C["a"],VRow:rt["a"]});var ot=function(t){Object(l["a"])(n,t);var e=Object(d["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return n}(m["c"]);ot=Object(p["a"])([Object(m["a"])({components:{HelloWorld:it}})],ot);var ct=ot,st=ct,ut=Object(g["a"])(st,Q,Y,!1,null,null,null),lt=ut.exports,dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],ht={},mt=Object(g["a"])(ht,dt,pt,!1,null,null,null),vt=mt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},bt=[],gt=function(t){Object(l["a"])(n,t);var e=Object(d["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return Object(u["a"])(n,[{key:"mounted",value:function(){var t=this;this.oidcSignInCallback().then((function(e){t.$router.push(e)})).catch((function(e){console.error(e),t.$router.push("/oidc-callback-error")}))}}]),n}(m["c"]);gt=Object(p["a"])([Object(m["a"])({methods:Object(c["a"])({},Object(h["b"])("oidcStore",{oidcSignInCallback:"oidcSignInCallback"}))})],gt);var wt=gt,yt=wt,Ot=Object(g["a"])(yt,ft,bt,!1,null,null,null),jt=Ot.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},xt=[],_t=(n("d21c"),function(t){Object(l["a"])(n,t);var e=Object(d["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return Object(u["a"])(n,[{key:"mounted",value:function(){var t=this;this.oidcSignInPopupCallback().then((function(t){console.log(null===t||void 0===t?void 0:t.profile.name)})).catch((function(e){console.error(e),t.$router.push("/oidc-callback-error")}))}}]),n}(m["c"]));_t=Object(p["a"])([Object(m["a"])({methods:Object(c["a"])({},Object(h["b"])("oidcStore",{oidcSignInPopupCallback:"oidcSignInPopupCallback"}))})],_t);var Ct=_t,St=Ct,Et=Object(g["a"])(St,kt,xt,!1,null,null,null),Rt=Et.exports,Vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},It=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Error in authentication")])])}],Lt=function(t){Object(l["a"])(n,t);var e=Object(d["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return n}(m["c"]);Lt=Object(p["a"])([m["a"]],Lt);var $t=Lt,At=$t,Dt=Object(g["a"])(At,Vt,It,!1,null,null,null),Ut=Dt.exports;function Pt(){return Tt.apply(this,arguments)}function Tt(){return Tt=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=N["a"],t.next=3,M();case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1,"oidcStore"));case 5:case"end":return t.stop()}}),t)}))),Tt.apply(this,arguments)}function Nt(){return Wt.apply(this,arguments)}function Wt(){return Wt=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a["a"].use(T["a"]),e=[{path:"/",name:"Home",component:lt,meta:{isPublic:!0}},{path:"/about",name:"About",component:vt},{path:"/oidc-callback",name:"OidcCallback",component:jt,meta:{isOidcCallback:!0}},{path:"/oidc-popup-callback",name:"oidcPopupCallback",component:Rt,meta:{isOidcCallback:!0}},{path:"/oidc-callback-error",name:"oidcCallbackError",component:Ut,meta:{isPublic:!0}}],n=new T["a"]({mode:"history",base:"/demo-vue-oidc/",routes:e}),t.t0=n,t.next=6,Pt();case 6:return t.t1=t.sent,t.t0.beforeEach.call(t.t0,t.t1),t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)}))),Wt.apply(this,arguments)}var Ht=n("d010");a["a"].use(Ht["a"]);var qt=new Ht["a"]({});Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a["a"].config.productionTip=!1,t.next=3,M();case 3:return e=t.sent,t.next=6,Nt();case 6:n=t.sent,new a["a"]({router:n,store:e,vuetify:qt,render:function(t){return t(P)}}).$mount("#app");case 8:case"end":return t.stop()}}),t)})))()}}]);
//# sourceMappingURL=chunk-common.29397f58.js.map