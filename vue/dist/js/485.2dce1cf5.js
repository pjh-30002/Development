"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[485],{5124:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(9669),a=n.n(r);function o(){let e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}const s="http://localhost:8080/api/test/";class u{getPublicContent(){return a().get(s+"all")}getUserBoard(){return a().get(s+"user",{headers:o()})}getModeratorBoard(){return a().get(s+"mod",{headers:o()})}getAdminBoard(){return a().get(s+"admin",{headers:o()})}}var c=new u},2485:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(6252),a=n(3577);const o={class:"container"},s={class:"jumbotron"};function u(e,t,n,u,c,d){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("header",s,[(0,r._)("h3",null,(0,a.zw)(c.content),1)])])}var c=n(5124),d={name:"ModeratorPage",data(){return{content:""}},mounted(){c.Z.getModeratorBoard().then((e=>{this.content=e.data}),(e=>{this.content=e.response&&e.response.data&&e.response.data.message||e.message||e.toString()}))}},i=n(3744);const g=(0,i.Z)(d,[["render",u]]);var l=g}}]);
//# sourceMappingURL=485.2dce1cf5.js.map