!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function o(t,o,e){return o&&n(t.prototype,o),e&&n(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkmis_web=self.webpackChunkmis_web||[]).push([[338],{7338:function(n,e,i){"use strict";i.r(e),i.d(e,{LoginFormModule:function(){return w}});var r,a,l=i(3464),c=i(1462),s=i(7436),d=i(5366),g=i(7004),h=i(6911),u=i(6484),m=i(1524),f=i(1843),p=i(4897),v=i(3776),C=i(5095),y=i(5728),M=function(){return["/login/forget-form"]},x=function(){return["/login/register-form"]},Z=[{path:"",data:{key:"login-form",shouldDetach:"no"},component:(r=function(){function n(o,e,i,r,a){t(this,n),this.fb=o,this.service=e,this.msg=i,this.router=r,this.localStorageService=a,this.identifyCode="",this.getUpperidentifyCode="",this.getLoweridentifyCode="",this.contentWidth=100,this.contentHeight=30,this.fontSizeMin=25,this.fontSizeMax=30,this.backgroundColorMin=255,this.backgroundColorMax=255,this.colorMin=0,this.colorMax=160,this.lineColorMin=100,this.lineColorMax=255,this.dotColorMin=0,this.dotColorMax=255,this.canvasWidth=100,this.canvasHeight=30,this.validateForm=this.fb.group({username:[null,[c.kI.required]],password:[null,[c.kI.required]],verifyCode:[null,[c.kI.required]]})}return o(n,[{key:"ngAfterViewInit",value:function(){this.createdCode()}},{key:"ngOnInit",value:function(){}},{key:"submitForm",value:function(){var t=this;this.validateForm.value.verifyCode!=this.getUpperidentifyCode&&this.validateForm.value.verifyCode!=this.getLoweridentifyCode&&this.msg.create("error","\u9a8c\u8bc1\u7801\u9519\u8bef"),!this.validateForm.valid||this.validateForm.value.verifyCode!=this.getUpperidentifyCode&&this.validateForm.value.verifyCode!=this.getLoweridentifyCode?Object.values(this.validateForm.controls).forEach(function(t){t.invalid&&(t.markAsDirty(),t.updateValueAndValidity({onlySelf:!0}))}):this.service.login({username:this.validateForm.value.username,password:this.validateForm.value.password}).subscribe({next:function(n){t.localStorageService.setItem("username",n.data.username),t.localStorageService.setItem("realName",n.data.real_name),t.localStorageService.setItem(s.d,n.data.access),t.localStorageService.setItem(s.T,n.data.refresh),0==n.code?(t.msg.create("success","\u767b\u5f55\u6210\u529f"),t.router.navigateByUrl("layout"),t.validateForm.reset()):(t.msg.create("error",n.message),t.validateForm.reset())},error:function(t){console.log("error",t)}})}},{key:"createdCode",value:function(){for(var t=[],n="ABCDEFGHJKMNPQRSTWXYZ123456789",o=n.length,e=0;e<4;e++)t.push(n.charAt(Math.floor(Math.random()*o)));this.identifyCode=t.join(""),this.getLoweridentifyCode=this.identifyCode.toLowerCase(),this.getUpperidentifyCode=this.identifyCode,this.drawPic()}},{key:"drawPic",value:function(){var t=document.getElementById("verify-code").getContext("2d");if(!(t&&t instanceof CanvasRenderingContext2D))throw new Error("Failed to get 2D context");var n=t;n.textBaseline="bottom",n.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),n.fillRect(0,0,this.contentWidth,this.contentHeight);for(var o=0;o<this.identifyCode.length;o++)this.drawText(n,this.identifyCode[o],o);this.drawLine(n),this.drawDot(n)}},{key:"randomColor",value:function(t,n){return"rgb("+this.randomNum(t,n)+","+this.randomNum(t,n)+","+this.randomNum(t,n)+")"}},{key:"randomNum",value:function(t,n){return Math.floor(Math.random()*(n-t)+t)}},{key:"drawLine",value:function(t){for(var n=0;n<5;n++)t.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),t.beginPath(),t.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.stroke()}},{key:"drawText",value:function(t,n,o){t.fillStyle=this.randomColor(this.colorMin,this.colorMax),t.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var e=(o+1)*(this.contentWidth/(this.identifyCode.length+1)),i=this.randomNum(this.fontSizeMax,this.contentHeight-5),r=this.randomNum(-45,45);t.translate(e,i),t.rotate(r*Math.PI/180),t.fillText(n,0,0),t.rotate(-r*Math.PI/180),t.translate(-e,-i)}},{key:"drawDot",value:function(t){for(var n=0;n<80;n++)t.fillStyle=this.randomColor(0,255),t.beginPath(),t.arc(this.randomNum(0,this.canvasWidth),this.randomNum(0,this.canvasHeight),1,0,2*Math.PI),t.fill()}}]),n}(),r.\u0275fac=function(t){return new(t||r)(d.Y36(c.qu),d.Y36(g.r),d.Y36(h.dD),d.Y36(l.F0),d.Y36(u.n))},r.\u0275cmp=d.Xpm({type:r,selectors:[["app-login-form"]],decls:28,vars:10,consts:[[1,"login-card"],[1,"login-background"],[1,"login-content"],[1,"login-text"],["nz-form","",1,"login-form",3,"formGroup","ngSubmit"],["nzErrorTip","\u8bf7\u8f93\u5165\u7528\u6237\u540d!"],["nzPrefixIcon","user"],["type","text","nz-input","","formControlName","username","placeholder","\u7528\u6237\u540d"],["nzErrorTip","\u8bf7\u8f93\u5165\u5bc6\u7801!"],["nzPrefixIcon","lock"],["type","password","nz-input","","formControlName","password","placeholder","\u5bc6\u7801"],["nzErrorTip","\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801!"],["nzPrefixIcon","code",2,"max-width","170px"],["type","text","nz-input","","formControlName","verifyCode","placeholder","\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"],["id","verify-code",2,"max-height","30px",3,"width","height","click"],["nz-row","",1,"login-form-margin"],["nz-col","",3,"nzSpan"],[1,"login-form-forgot",3,"routerLink"],[1,"register",3,"routerLink"],["nz-button","",1,"login-form-button","login-form-margin",3,"nzType"]],template:function(t,n){1&t&&(d.TgZ(0,"div",0),d._UZ(1,"div",1),d.TgZ(2,"div",2),d.TgZ(3,"h2",3),d._uU(4,"\u767b \u5f55"),d.qZA(),d.TgZ(5,"form",4),d.NdJ("ngSubmit",function(){return n.submitForm()}),d.TgZ(6,"nz-form-item"),d.TgZ(7,"nz-form-control",5),d.TgZ(8,"nz-input-group",6),d._UZ(9,"input",7),d.qZA(),d.qZA(),d.qZA(),d.TgZ(10,"nz-form-item"),d.TgZ(11,"nz-form-control",8),d.TgZ(12,"nz-input-group",9),d._UZ(13,"input",10),d.qZA(),d.qZA(),d.qZA(),d.TgZ(14,"nz-form-item"),d.TgZ(15,"nz-form-control",11),d.TgZ(16,"nz-input-group",12),d._UZ(17,"input",13),d.qZA(),d.qZA(),d.TgZ(18,"canvas",14),d.NdJ("click",function(){return n.createdCode()}),d.qZA(),d.qZA(),d.TgZ(19,"div",15),d.TgZ(20,"div",16),d.TgZ(21,"a",17),d._uU(22,"\u5fd8\u8bb0\u5bc6\u7801"),d.qZA(),d.qZA(),d.TgZ(23,"div",16),d.TgZ(24,"a",18),d._uU(25,"\u6ce8\u518c"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(26,"button",19),d._uU(27," \u767b \u5f55 "),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&t&&(d.xp6(5),d.Q6J("formGroup",n.validateForm),d.xp6(13),d.Q6J("width",n.contentWidth)("height",n.contentHeight),d.xp6(2),d.Q6J("nzSpan",12),d.xp6(1),d.Q6J("routerLink",d.DdM(8,M)),d.xp6(2),d.Q6J("nzSpan",12),d.xp6(1),d.Q6J("routerLink",d.DdM(9,x)),d.xp6(2),d.Q6J("nzType","primary"))},directives:[c._Y,c.JL,m.Lr,c.sg,f.SK,m.Nx,f.t3,m.Fd,p.w,v.gB,v.Zp,c.Fj,c.JJ,c.u,l.yS,C.ix,y.dQ],styles:[".login-card[_ngcontent-%COMP%]{margin-left:38%;margin-top:14%;position:relative;width:380px;height:340px}.login-card[_ngcontent-%COMP%]   .login-background[_ngcontent-%COMP%]{top:0;left:0;right:0;bottom:0;background-color:#fff;opacity:.8;position:absolute}.login-card[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]{position:absolute;padding:36px;top:0;left:0;right:0;bottom:0}.login-card[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-text[_ngcontent-%COMP%]{font-family:Myriad Pro,Helvetica Neue,Arial,Helvetica,sans-serif;text-align:center}.login-card[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{max-width:300px}.login-card[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-form-margin[_ngcontent-%COMP%]{margin-top:-10px;margin-bottom:15px}.login-card[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-form-forgot[_ngcontent-%COMP%]{margin-bottom:10px}.login-card[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%]{float:right}.login-card[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-form-button[_ngcontent-%COMP%]{width:100%}"]}),r)}],b=function(){var n=o(function n(){t(this,n)});return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=d.oAB({type:n}),n.\u0275inj=d.cJS({imports:[[l.Bz.forChild(Z)],l.Bz]}),n}(),P=i(1451),w=((a=o(function n(){t(this,n)})).\u0275fac=function(t){return new(t||a)},a.\u0275mod=d.oAB({type:a}),a.\u0275inj=d.cJS({imports:[[P.m,b]]}),a)}}])}();