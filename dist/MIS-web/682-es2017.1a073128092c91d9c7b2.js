(self.webpackChunkmis_web=self.webpackChunkmis_web||[]).push([[682],{6682:function(e,n,t){"use strict";t.r(n),t.d(n,{LayoutModule:function(){return G}});var i=t(3464);const o=[{title:"\u9996\u9875",icon:"dashboard",path:"./layout/dashboard",open:!1,selected:!1,children:[{title:"\u9875\u97621",icon:"dashboard",path:"/layout/dashboard/page1",open:!1,selected:!1},{title:"\u9875\u97622",icon:"dashboard",path:"/layout/dashboard/page2",open:!1,selected:!1},{title:"\u9875\u97623",icon:"dashboard",path:"/layout/dashboard/page3",open:!1,selected:!1}]}];var r=t(3835),s=t(5416),c=t(6599),a=t(9996),l=t(3982),d=t(5959),u=t(1462),p=t(5366),g=t(2716);let h=(()=>{class e{constructor(e,n){this.router=e,this.activatedRoute=n,this._tabArray=[],this._currSelectedIndexTab=0,this.fnFormatePath=function(e){const n=e.replace(/\/[0-9]+/g,""),t=n.substring(n.lastIndexOf("/")+1).indexOf("?");return t>-1?n.substring(n.lastIndexOf("/")+1).substring(0,t):n.substring(n.lastIndexOf("/")+1)}}get tabArray(){return this._tabArray}get currSelectedIndexTab(){return this._currSelectedIndexTab}addTab(e){this._tabArray.find(n=>n.path===e.path)||this._tabArray.push(e)}findIndex(e){const n=this._tabArray.findIndex(n=>e.includes(n.path));this._currSelectedIndexTab=n}delTab(e,n){const t=this.fnFormatePath(e.path);n===this._currSelectedIndexTab?(this.tabArray.splice(n,1),this._currSelectedIndexTab=n-1<0?0:n-1,this.router.navigateByUrl(this._tabArray[this._currSelectedIndexTab].path),g.E.waitDelete=t):n<this._currSelectedIndexTab?(this.tabArray.splice(n,1),this._currSelectedIndexTab=this._currSelectedIndexTab-1):n>this._currSelectedIndexTab&&this.tabArray.splice(n,1),g.E.deleteRouteSnapshot(t)}}return e.\u0275fac=function(n){return new(n||e)(p.LFG(i.F0),p.LFG(i.gz))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=t(6484),m=t(6911),z=t(7004),b=t(6594),x=t(3386),Z=t(1116),T=t(4897),C=t(7787),w=t(6721),y=t(5823),_=t(7723);function v(e,n){if(1&e){const e=p.EpF();p.TgZ(0,"div"),p._uU(1),p.TgZ(2,"i",4),p.NdJ("click",function(n){p.CHM(e);const t=p.oxw(),i=t.$implicit,o=t.index;return p.oxw().closeTab(i,n,o)}),p.qZA(),p.qZA()}if(2&e){const e=p.oxw().$implicit;p.xp6(1),p.hij(" ",e.title," ")}}function A(e,n){if(1&e){const e=p.EpF();p.TgZ(0,"nz-tab",2),p.NdJ("nzClick",function(){const n=p.CHM(e).$implicit;return p.oxw().goPage(n.path)}),p.YNc(1,v,3,1,"ng-template",null,3,p.W1O),p.qZA()}if(2&e){const e=p.MAs(2);p.Q6J("nzTitle",e)}}const M=function(){return{margin:"10px 0 0 0",height:"35px"}};let O=(()=>{class e{constructor(e,n){this.tabService=e,this.router=n}get tabs(){return this.tabService.tabArray}get currSelectedIndexTab(){return this.tabService.currSelectedIndexTab}ngOnInit(){}goPage(e){this.router.navigateByUrl(e)}closeCurrentTab(e,n){1!==this.tabs.length&&this.tabService.delTab(e,n)}closeTab(e,n,t){this.closeCurrentTab(e,t)}clickCloseIcon(e){this.closeCurrentTab(this.tabs[e.index],e.index)}trackByTab(e,n){return n.title}}return e.\u0275fac=function(n){return new(n||e)(p.Y36(h),p.Y36(i.F0))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-tab"]],decls:2,vars:7,consts:[[3,"nzSelectedIndex","nzTabBarStyle","nzTabPosition","nzType","nzClose"],["nzClosable","",3,"nzTitle","nzClick",4,"ngFor","ngForOf","ngForTrackBy"],["nzClosable","",3,"nzTitle","nzClick"],["titleTemplate",""],["nz-icon","","nzType","close","nzTheme","outline",2,"transform","scale(0.8)","margin-right","0",3,"click"]],template:function(e,n){1&e&&(p.TgZ(0,"nz-tabset",0),p.NdJ("nzClose",function(e){return n.clickCloseIcon(e)}),p.YNc(1,A,3,1,"nz-tab",1),p.qZA()),2&e&&(p.Q6J("nzSelectedIndex",n.currSelectedIndexTab)("nzTabBarStyle",p.DdM(6,M))("nzTabPosition","top")("nzType","card"),p.xp6(1),p.Q6J("ngForOf",n.tabs)("ngForTrackBy",n.trackByTab))},directives:[_.xH,Z.sg,_.xw,C.Ls,T.w],styles:[""]}),e})();var q=t(1524),k=t(1843),P=t(3776),S=t(5095),I=t(5728);function J(e,n){1&e&&p.GkF(0)}const N=function(e){return[e]};function Q(e,n){if(1&e&&(p.TgZ(0,"li",30),p.TgZ(1,"a",31),p._UZ(2,"i",27),p.TgZ(3,"span"),p._uU(4),p.qZA(),p.qZA(),p.qZA()),2&e){const e=p.oxw().$implicit;p.Q6J("nzSelected",e.selected),p.xp6(1),p.Q6J("routerLink",p.VKq(4,N,e.path)),p.xp6(1),p.Q6J("nzType",e.icon),p.xp6(2),p.Oqu(e.title)}}function F(e,n){if(1&e&&(p.ynx(0),p.YNc(1,Q,5,6,"li",29),p.BQk()),2&e){const e=n.$implicit;p.xp6(1),p.Q6J("ngIf",!e.children||0===e.children.length)}}function U(e,n){if(1&e){const e=p.EpF();p.ynx(0),p.TgZ(1,"li",25),p.NdJ("nzOpenChange",function(){p.CHM(e);const n=p.oxw().$implicit,t=p.oxw(2);return t.changeOpen(n,t.menus)})("nzOpenChange",function(n){return p.CHM(e),p.oxw().$implicit.open=n}),p.TgZ(2,"span",26),p._UZ(3,"i",27),p.TgZ(4,"span",28),p._uU(5),p.qZA(),p.qZA(),p.TgZ(6,"ul"),p.YNc(7,F,2,1,"ng-container",23),p.qZA(),p.qZA(),p.BQk()}if(2&e){const e=p.oxw().$implicit;p.xp6(1),p.Q6J("nzOpen",e.open),p.xp6(2),p.Q6J("nzType",e.icon),p.xp6(2),p.Oqu(e.title),p.xp6(2),p.Q6J("ngForOf",e.children)}}function Y(e,n){if(1&e&&(p.ynx(0),p.YNc(1,U,8,4,"ng-container",24),p.BQk()),2&e){const e=n.$implicit;p.xp6(1),p.Q6J("ngIf",e.children&&e.children.length>0)}}function B(e,n){if(1&e&&p.YNc(0,Y,2,1,"ng-container",23),2&e){const e=p.oxw();p.Q6J("ngForOf",e.menus)}}function E(e,n){if(1&e){const e=p.EpF();p.TgZ(0,"div"),p.TgZ(1,"div",32),p._uU(2," \u4e3a\u4fdd\u62a4\u5e10\u53f7\u5b89\u5168\uff0c\u4fee\u6539\u5bc6\u7801\u9700\u8981\u8fdb\u884c\u90ae\u7bb1\u9a8c\u8bc1\u3002 "),p.qZA(),p.TgZ(3,"form",33),p.TgZ(4,"nz-form-item"),p.TgZ(5,"nz-form-label",34),p.TgZ(6,"span"),p._uU(7,"\u4f60\u7684\u7535\u5b50\u90ae\u7bb1"),p.qZA(),p.qZA(),p.TgZ(8,"nz-form-control",35),p._UZ(9,"input",36),p.qZA(),p.TgZ(10,"button",37),p.NdJ("click",function(){return p.CHM(e),p.oxw(2).getEmailCode()}),p._uU(11," \u83b7\u53d6\u9a8c\u8bc1\u7801 "),p.qZA(),p.qZA(),p.TgZ(12,"nz-form-item"),p.TgZ(13,"nz-form-label",38),p.TgZ(14,"span"),p._uU(15,"\u90ae\u7bb1\u9a8c\u8bc1\u7801"),p.qZA(),p.qZA(),p.TgZ(16,"nz-form-control",39),p._UZ(17,"input",40),p.qZA(),p.qZA(),p.qZA(),p.qZA()}if(2&e){const e=p.oxw(2);p.xp6(3),p.Q6J("formGroup",e.validateForm),p.xp6(2),p.Q6J("nzSm",6)("nzXs",24),p.xp6(3),p.Q6J("nzSm",14)("nzXs",24),p.xp6(5),p.Q6J("nzSm",6)("nzXs",24),p.xp6(3),p.Q6J("nzSm",14)("nzXs",24)}}function V(e,n){if(1&e){const e=p.EpF();p.TgZ(0,"div"),p.TgZ(1,"nz-input-group"),p.TgZ(2,"input",41),p.NdJ("ngModelChange",function(n){return p.CHM(e),p.oxw(2).newpsw=n}),p.qZA(),p.qZA(),p.TgZ(3,"nz-input-group"),p.TgZ(4,"input",42),p.NdJ("ngModelChange",function(n){return p.CHM(e),p.oxw(2).checknewpsw=n}),p.qZA(),p.qZA(),p.qZA()}if(2&e){const e=p.oxw(2);p.xp6(2),p.Q6J("ngModel",e.newpsw),p.xp6(2),p.Q6J("ngModel",e.checknewpsw)}}function H(e,n){if(1&e&&(p.ynx(0),p.YNc(1,E,18,9,"div",24),p.YNc(2,V,5,2,"div",24),p.BQk()),2&e){const e=p.oxw();p.xp6(1),p.Q6J("ngIf",1===e.current),p.xp6(1),p.Q6J("ngIf",2===e.current)}}function $(e,n){if(1&e){const e=p.EpF();p.TgZ(0,"button",46),p.NdJ("click",function(){return p.CHM(e),p.oxw(2).verifyNext()}),p._uU(1," \u4e0b\u4e00\u6b65 "),p.qZA()}}function L(e,n){if(1&e){const e=p.EpF();p.TgZ(0,"button",47),p.NdJ("click",function(){return p.CHM(e),p.oxw(2).confirm()}),p.TgZ(1,"span"),p._uU(2,"\u786e\u5b9a"),p.qZA(),p.qZA()}if(2&e){const e=p.oxw(2);p.Q6J("disabled",!e.newpsw||!e.checknewpsw)}}function X(e,n){if(1&e&&(p.ynx(0),p.TgZ(1,"div",43),p.YNc(2,$,2,0,"button",44),p.YNc(3,L,3,1,"button",45),p.qZA(),p.BQk()),2&e){const e=p.oxw();p.xp6(2),p.Q6J("ngIf",1===e.current),p.xp6(1),p.Q6J("ngIf",2===e.current)}}const D=[{path:"",component:(()=>{class e{constructor(e,n,t,p,g,h,f){this.fb=e,this.tabService=n,this.router=t,this.activitedRoute=p,this.localStorageService=g,this.msg=h,this.service=f,this.isCollapsed=!1,this.menus=o,this.routerPath="",this.realName="",this.setPwdVis=!1,this.current=1,this.currCount=60,this.newpsw="",this.checknewpsw="",this.destroy$=new d.xQ,this.validateForm=this.fb.group({email:[null,[u.kI.email,u.kI.required]],emailCode:[null,[u.kI.required]]}),this.router.events.pipe((0,r.h)(e=>e instanceof i.m2),(0,s.R)(this.destroy$),(0,c.b)(e=>{this.routerPath=e.urlAfterRedirects}),(0,a.U)(()=>p),(0,a.U)(e=>{for(;e.firstChild;)e=e.firstChild;return e}),(0,l.zg)(e=>e.data)).subscribe(e=>{this.tabService.addTab({title:e.title,path:this.routerPath}),this.tabService.findIndex(this.routerPath)})}ngOnInit(){this.realName=this.localStorageService.getItem("realName"),this.clickMenuItem(this.menus)}changeOpen(e,n){n.forEach(e=>{e.open=!1}),e.open=!0}clickMenuItem(e){var n;if(!e)return;const t=-1===this.routerPath.indexOf("?")?this.routerPath.length:this.routerPath.indexOf("?"),i=this.routerPath.substring(0,t);for(const o of e)if(o.open=!1,o.selected=!1,o.children&&0!==o.children.length)for(const e of o.children)if(e.selected=!1,e.open=!1,e.children&&0!==(null===(n=e.children)||void 0===n?void 0:n.length))for(const n of e.children)i.includes(n.path)?(o.open=!0,o.selected=!0,e.selected=!0,e.open=!0,n.open=!0,n.selected=!0):(n.open=!1,n.selected=!1);else i.includes(e.path)&&(o.open=!0,o.selected=!0,e.selected=!0,e.open=!0);else i.includes(o.path)&&(o.selected=!0)}setpassword(){this.setPwdVis=!0}getEmailCode(){const e={username:this.localStorageService.getItem("username"),email:this.validateForm.value.email};this.service.getEmailCode(e).subscribe({next:e=>{0==e.code&&this.msg.create("success","\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001\uff0c\u8bf7\u67e5\u6536\u90ae\u4ef6\uff01");let n=document.getElementById("getEmailCode");n.setAttribute("disabled","true"),n.textContent=this.currCount+"\u79d2\u540e\u91cd\u83b7";let t=window.setInterval(()=>{0==this.currCount?(window.clearInterval(t),n.removeAttribute("disabled"),n.textContent="\u91cd\u83b7\u9a8c\u8bc1\u7801"):(this.currCount--,n.textContent=this.currCount+"\u79d2\u540e\u91cd\u83b7")},1e3)},error:e=>console.error(e),complete:()=>console.log("complete")})}verifyNext(){this.validateForm.valid?this.service.verifyInfo(this.validateForm.value).subscribe({next:()=>{this.current+=1},error:e=>console.error(e),complete:()=>console.log("complete")}):Object.values(this.validateForm.controls).forEach(e=>{e.invalid&&(e.markAsDirty(),e.updateValueAndValidity({onlySelf:!0}))})}confirm(){if(this.newpsw!==this.checknewpsw)this.msg.create("error","\u4e24\u6b21\u5bc6\u7801\u8f93\u5165\u4e0d\u4e00\u81f4");else{const e={username:this.localStorageService.getItem("username"),password:this.checknewpsw};this.service.setPassword(e).subscribe({next:()=>{this.msg.create("success","\u4fee\u6539\u6210\u529f"),this.setPwdVis=!1,this.current=1},error:e=>console.error(e),complete:()=>{console.log("complete")}})}}setPwdCancel(){this.setPwdVis=!1}goLogin(){this.router.navigateByUrl("/login/login-form"),this.localStorageService.clear()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(n){return new(n||e)(p.Y36(u.qu),p.Y36(h),p.Y36(i.F0),p.Y36(i.gz),p.Y36(f.n),p.Y36(m.dD),p.Y36(z.r))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-layout"]],decls:39,vars:9,consts:[[1,"app-layout"],["nzCollapsible","","nzWidth","256px","nzBreakpoint","md",1,"menu-sidebar",3,"nzCollapsed","nzTrigger","nzCollapsedChange"],[1,"sidebar-logo"],["src","../../assets/logo.svg","alt","logo"],["nz-menu","",3,"nzTheme","nzMode"],[4,"ngTemplateOutlet"],["menuTpl",""],[1,"app-header"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-dropdown","",1,"top-setting",3,"nzDropdownMenu"],[1,"setting-content"],["userSettingMenu",""],["nz-menu","",1,"setting-menu"],["nz-menu-item",""],[3,"click"],["nz-icon","","nzType","lock","nzTheme","outline",1,"bst-header_usr_menu_icon"],["nzTitle","\u4fee\u6539\u5bc6\u7801","nzMaskClosable","false","nzCentered","",3,"nzVisible","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],[4,"nzModalFooter"],["nz-menu-divider",""],["nz-icon","","nzType","logout","nzTheme","outline",1,"bst-header_usr_menu_icon"],[1,"inner-content"],[4,"ngFor","ngForOf"],[4,"ngIf"],["nz-submenu","",3,"nzOpen","nzOpenChange"],["title",""],["nz-icon","",3,"nzType"],[1,"nav-text"],["nz-menu-item","",3,"nzSelected",4,"ngIf"],["nz-menu-item","",3,"nzSelected"],[3,"routerLink"],[1,"verify-text"],["nz-form","",1,"verify-form",3,"formGroup"],["nzFor","email","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1!",3,"nzSm","nzXs"],["nz-input","","id","email","formControlName","email"],["nz-button","","id","getEmailCode","nzType","primary",2,"margin-left","10px",3,"click"],["nzFor","emailCode","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801!",3,"nzSm","nzXs"],["nz-input","","id","emailCode","formControlName","emailCode",2,"max-width","150px"],["type","text","nz-input","","placeholder","\u8bf7\u8f93\u5165\u65b0\u5bc6\u7801",3,"ngModel","ngModelChange"],["type","text","nz-input","","placeholder","\u8bf7\u518d\u6b21\u8f93\u5165\u65b0\u5bc6\u7801",3,"ngModel","ngModelChange"],[1,"next-btn"],["nz-button","","nzType","primary",3,"click",4,"ngIf"],["nz-button","","nzType","primary",3,"disabled","click",4,"ngIf"],["nz-button","","nzType","primary",3,"click"],["nz-button","","nzType","primary",3,"disabled","click"]],template:function(e,n){if(1&e&&(p.TgZ(0,"nz-layout",0),p.TgZ(1,"nz-sider",1),p.NdJ("nzCollapsedChange",function(e){return n.isCollapsed=e}),p.TgZ(2,"div",2),p._UZ(3,"img",3),p.TgZ(4,"h1"),p._uU(5,"M I S"),p.qZA(),p.qZA(),p.TgZ(6,"ul",4),p.YNc(7,J,1,0,"ng-container",5),p.YNc(8,B,1,1,"ng-template",null,6,p.W1O),p.qZA(),p.qZA(),p.TgZ(10,"nz-layout"),p.TgZ(11,"nz-header"),p.TgZ(12,"div",7),p.TgZ(13,"span",8),p.NdJ("click",function(){return n.isCollapsed=!n.isCollapsed}),p._UZ(14,"i",9),p.qZA(),p.TgZ(15,"span",10),p.TgZ(16,"span",11),p._uU(17),p.qZA(),p.qZA(),p.TgZ(18,"nz-dropdown-menu",null,12),p.TgZ(20,"ul",13),p.TgZ(21,"li",14),p.TgZ(22,"a",15),p.NdJ("click",function(){return n.setpassword()}),p._UZ(23,"i",16),p.TgZ(24,"span"),p._uU(25,"\u4fee\u6539\u5bc6\u7801"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(26,"nz-modal",17),p.NdJ("nzVisibleChange",function(e){return n.setPwdVis=e})("nzOnCancel",function(){return n.setPwdCancel()}),p.YNc(27,H,3,2,"ng-container",18),p.YNc(28,X,4,2,"ng-container",19),p.qZA(),p._UZ(29,"li",20),p.TgZ(30,"li",14),p.TgZ(31,"a",15),p.NdJ("click",function(){return n.goLogin()}),p._UZ(32,"i",21),p.TgZ(33,"span"),p._uU(34,"\u9000\u51fa\u767b\u5f55"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(35,"nz-content"),p._UZ(36,"app-tab"),p.TgZ(37,"div",22),p._UZ(38,"router-outlet"),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&e){const e=p.MAs(9),t=p.MAs(19);p.xp6(1),p.Q6J("nzCollapsed",n.isCollapsed)("nzTrigger",null),p.xp6(5),p.Q6J("nzTheme","dark")("nzMode","inline"),p.xp6(1),p.Q6J("ngTemplateOutlet",e),p.xp6(7),p.Q6J("nzType",n.isCollapsed?"menu-unfold":"menu-fold"),p.xp6(1),p.Q6J("nzDropdownMenu",t),p.xp6(2),p.hij("\u4f60\u597d\uff0c",n.realName,""),p.xp6(9),p.Q6J("nzVisible",n.setPwdVis)}},directives:[b.hw,b.t7,x.wO,Z.tP,b.E8,T.w,C.Ls,w.cm,w.RR,x.r9,y.du,y.Hf,y.Uh,x.YV,b.OK,O,i.lC,Z.sg,Z.O5,x.rY,i.yS,u._Y,u.JL,q.Lr,u.sg,k.SK,q.Nx,k.t3,q.iK,q.Fd,P.Zp,u.Fj,u.JJ,u.u,S.ix,I.dQ,P.gB,u.On],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{height:100vh}.menu-sidebar[_ngcontent-%COMP%]{position:relative;z-index:10;min-height:100vh;box-shadow:2px 0 6px rgba(0,21,41,.35)}.header-trigger[_ngcontent-%COMP%]{padding-left:24px;font-size:20px;cursor:pointer;transition:all .3s,padding 0s}.trigger[_ngcontent-%COMP%]:hover{color:#1890ff}.sidebar-logo[_ngcontent-%COMP%]{position:relative;height:64px;padding-left:24px;overflow:hidden;line-height:64px;background:#001529;transition:all .3s}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:32px;width:32px}.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 0 20px;color:#fff;font-weight:600;font-size:14px;font-family:Avenir,Helvetica Neue,Arial,Helvetica,sans-serif}nz-header[_ngcontent-%COMP%]{padding:0;height:50px;width:100%;z-index:2}.app-header[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:space-between;height:100%;padding:0;background:#fff;box-shadow:0 1px 4px rgba(0,21,41,.08)}.app-header[_ngcontent-%COMP%]   .top-setting[_ngcontent-%COMP%]{height:100%;margin-right:40px}.app-header[_ngcontent-%COMP%]   .top-setting[_ngcontent-%COMP%]   .setting-content[_ngcontent-%COMP%]{padding:12px 20px}.app-header[_ngcontent-%COMP%]   .top-setting[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.025)}.setting-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding-right:10px;color:#000}.setting-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}nz-content[_ngcontent-%COMP%]{margin:24px}.inner-content[_ngcontent-%COMP%]{padding:24px;background:#fff}.verify-text[_ngcontent-%COMP%]{padding-bottom:20px}.set-psw-content[_ngcontent-%COMP%]   nz-input-group[_ngcontent-%COMP%]{padding-bottom:10px;max-width:240px}.next-btn[_ngcontent-%COMP%]{text-align:center}"]}),e})(),data:{shouldDetach:"no"},children:[{path:"dashboard",loadChildren:()=>t.e(973).then(t.bind(t,9973)).then(e=>e.DashboardModule)},{path:"",redirectTo:"dashboard",pathMatch:"full"}]}];let R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[i.Bz.forChild(D)],i.Bz]}),e})();var j=t(1451);let G=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[j.m,R]]}),e})()}}]);