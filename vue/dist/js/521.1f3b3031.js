"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[521],{7521:function(r,e,n){n.r(e),n.d(e,{default:function(){return _}});var s=n(6252),u=n(3577);const t={class:"container"},l={class:"jumbotron"},c=(0,s.Uk)(" Profile "),o=(0,s._)("strong",null,"Token:",-1),i=(0,s._)("strong",null,"Id:",-1),a=(0,s._)("strong",null,"Email:",-1),k=(0,s._)("strong",null,"Authorities:",-1);function U(r,e,n,U,g,h){return(0,s.wg)(),(0,s.iD)("div",t,[(0,s._)("header",l,[(0,s._)("h3",null,[(0,s._)("strong",null,(0,u.zw)(h.currentUser.username),1),c])]),(0,s._)("p",null,[o,(0,s.Uk)(" "+(0,u.zw)(h.currentUser.accessToken.substring(0,20))+" ... "+(0,u.zw)(h.currentUser.accessToken.substr(h.currentUser.accessToken.length-20)),1)]),(0,s._)("p",null,[i,(0,s.Uk)(" "+(0,u.zw)(h.currentUser.id),1)]),(0,s._)("p",null,[a,(0,s.Uk)(" "+(0,u.zw)(h.currentUser.email),1)]),k,(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.currentUser.roles,(r=>((0,s.wg)(),(0,s.iD)("li",{key:r},(0,u.zw)(r),1)))),128))])])}var g={name:"ProfilePage",computed:{currentUser(){return this.$store.state.auth.user}},mounted(){this.currentUser||this.$router.push("/login")}},h=n(3744);const w=(0,h.Z)(g,[["render",U]]);var _=w}}]);
//# sourceMappingURL=521.1f3b3031.js.map