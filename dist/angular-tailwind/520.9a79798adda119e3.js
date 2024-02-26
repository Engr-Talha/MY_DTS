"use strict";(self.webpackChunkangular_tailwind=self.webpackChunkangular_tailwind||[]).push([[520],{9146:(w,A,l)=>{l.d(A,{h:()=>m});var s=l(8316),f=l(5110),y=l(902);let c=(()=>{class h{}return h.pages=[{group:"User Dashboard",separator:!1,items:[{icon:"assets/icons/heroicons/outline/chart-pie.svg",label:"Dashboard",route:"/",children:[{label:"Dashboard",route:"/"},{label:"Apply for Tourist Guide",route:"/tourist-guide/register"},{label:"Apply for Hotel",route:"/hotel/register"},{label:"Apply for Resturant",route:"/resturant/register"},{label:"Apply for Travel Agency",route:"/travel-agency/register"}]},{icon:"assets/icons/heroicons/outline/cog.svg",label:"My Applications",route:"/my-registrations"},{icon:"assets/icons/heroicons/outline/cog.svg",label:"Profile",route:"/auth",children:[{label:"Change Password",route:"/auth/forgot-password"},{label:"New Password",route:"/auth/new-password"},{label:"Profile",route:"/profile"}]}]},{group:"Config",separator:!1,items:[{icon:"assets/icons/heroicons/outline/cog.svg",label:"Settings",route:"/settings"}]}],h.DptControllerpages=[{group:"D. Controller Dashboard",separator:!1,items:[{icon:"assets/icons/heroicons/outline/chart-pie.svg",label:"Dashboard",route:"/dashboard",children:[{label:"Dashboard",route:"/dptcontroller-dashboard"}]}]}],h.Controllerpages=[{group:"Controller Dashboard",separator:!1,items:[{icon:"assets/icons/heroicons/outline/chart-pie.svg",label:"Dashboard",route:"/controller-dashboard",children:[{label:"Dashboard",route:"/controller-dashboard"}]},{icon:"assets/icons/heroicons/outline/chart-pie.svg",label:"Applications",route:"",children:[{label:"New Application",route:"/controller-dashboard/application-listing"},{label:"Pending Applications",route:"/controller-dashboard/application-listing"},{label:"Submitted Applications",route:"/controller-dashboard/application-listing"}]}]}],h.InspectorControllerpages=[{group:"Inspector Dashboard",separator:!1,items:[{icon:"assets/icons/heroicons/outline/chart-pie.svg",label:"Dashboard",route:"/inspector-dashboard",children:[{label:"Dashboard",route:"/inspector-dashboard"}]},{icon:"assets/icons/heroicons/outline/chart-pie.svg",label:"User Application",route:"/inspector-dashboard",children:[{label:"User Application",route:"/inspector-dashboard/all-applications"}]},{icon:"assets/icons/heroicons/outline/chart-pie.svg",label:"Application Submitted",route:"/inspector-dashboard",children:[{label:"Application Submitted",route:"/inspector-dashboard/all-applications"}]}]}],h.Reviewer=[{group:"Reviewer Dashboard",separator:!1,items:[{icon:"assets/icons/heroicons/outline/chart-pie.svg",label:"User Dashboard",route:"/reviewer-dashboard",children:[{label:"Dashboard",route:"/reviewer-dashboard"}]},{icon:"assets/icons/heroicons/outline/chart-pie.svg",label:"Applications",route:"",children:[{label:"Application",route:"/reviewer-dashboard"}]}]}],h.astDashboard=[{group:"A. Controller Dashboard",separator:!1,items:[{icon:"assets/icons/heroicons/outline/chart-pie.svg",label:"A. Controller Dashboard",route:"/astcontroller-dashboard",children:[{label:"Dashboard",route:"/astcontroller-dashboard"}]},{icon:"assets/icons/heroicons/outline/chart-pie.svg",label:"Applications",route:"",children:[{label:"Application",route:"/astcontroller-dashboard"}]}]}],h})(),m=(()=>{class h{constructor(a){this.router=a,this._showSidebar=(0,s.tdS)(!0),this._showMobileMenu=(0,s.tdS)(!1),this._pagesMenu=(0,s.tdS)([]),this._subscription=new y.w0,this.loadMenu();let p=this.router.events.subscribe(M=>{M instanceof f.m2&&this._pagesMenu().forEach(S=>{let u=!1;S.items.forEach(g=>{const v=this.isActive(g.route);g.expanded=v,g.active=v,v&&(u=!0),g.children&&this.expand(g.children)}),S.active=u})});this._subscription.add(p)}loadMenu(){let a=localStorage.getItem("user");this.accounttype=JSON.parse(a||"{}"),console.log("User Type:",this.accounttype),1==this.accounttype?this._pagesMenu.set(c.pages):2==this.accounttype?this._pagesMenu.set(c.Controllerpages):3==this.accounttype?this._pagesMenu.set(c.InspectorControllerpages):4==this.accounttype?this._pagesMenu.set(c.DptControllerpages):6==this.accounttype?this._pagesMenu.set(c.Reviewer):5==this.accounttype&&this._pagesMenu.set(c.astDashboard)}get showSideBar(){return this._showSidebar()}get showMobileMenu(){return this._showMobileMenu()}get pagesMenu(){return this._pagesMenu()}set showSideBar(a){this._showSidebar.set(a)}set showMobileMenu(a){this._showMobileMenu.set(a)}toggleSidebar(){this._showSidebar.set(!this._showSidebar())}toggleMenu(a){this.showSideBar=!0,a.expanded=!a.expanded}toggleSubMenu(a){a.expanded=!a.expanded}expand(a){a.forEach(p=>{p.expanded=this.isActive(p.route),p.children&&this.expand(p.children)})}isActive(a){return this.router.isActive(this.router.createUrlTree([a]),{paths:"subset",queryParams:"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnDestroy(){this._subscription.unsubscribe()}}return h.\u0275fac=function(a){return new(a||h)(s.LFG(f.F0))},h.\u0275prov=s.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},8020:(w,A,l)=>{l.d(A,{_J:()=>U,bk:()=>L});var s=l(8316),f=l(6733),y=l(1209),c=l(1960),m=l(2425),h=l(1570),C=l(7560),a=l(6293),p=l(8557),M=l(2939);const S=["*"];class u{}let g=(()=>{class r extends u{constructor(e){super(),this.http=e}getSvg(e){return this.http.get(e,{responseType:"text"})}}return r.\u0275fac=function(e){return new(e||r)(s.LFG(M.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac}),r})();const v=new s.OlP("SERVER_URL");let _=(()=>{class r{constructor(e,t,i,o){this.loader=e,this.platformId=t,this.serverUrl=i,this._document=o,this.iconsByUrl=new Map,this.iconsLoadingByUrl=new Map,this.document=this._document}addSvg(e,t){if(!this.iconsByUrl.has(e)){const i=this.document.createElement("DIV");i.innerHTML=t;const o=i.querySelector("svg");this.iconsByUrl.set(e,o)}}loadSvg(e,t=e){if(this.serverUrl&&null===e.match(/^(http(s)?):/)&&(t=e=this.serverUrl+e),this.iconsByUrl.has(t))return(0,y.of)(this.iconsByUrl.get(t));if(this.iconsLoadingByUrl.has(t))return this.iconsLoadingByUrl.get(t);const i=this.loader.getSvg(e).pipe((0,m.U)(o=>{const n=this.document.createElement("DIV");return n.innerHTML=o,n.querySelector("svg")}),(0,h.b)(o=>this.iconsByUrl.set(t,o)),(0,C.K)(o=>(console.error(o),(0,c._)(o))),(0,a.x)(()=>this.iconsLoadingByUrl.delete(t)),(0,p.B)());return this.iconsLoadingByUrl.set(t,i),i}getSvgByName(e){return this.iconsByUrl.has(e)?(0,y.of)(this.iconsByUrl.get(e)):this.iconsLoadingByUrl.has(e)?this.iconsLoadingByUrl.get(e):(0,c._)(`No svg with name '${e}' has been loaded`)}unloadSvg(e){this.iconsByUrl.has(e)&&this.iconsByUrl.delete(e)}}return r.\u0275fac=function(e){return new(e||r)(s.LFG(u),s.LFG(s.Lbi),s.LFG(v,8),s.LFG(f.K0,8))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac}),r})();const B={provide:_,deps:[[new s.FiY,new s.tp0,_],u,[s.Lbi],[new s.FiY,v],[new s.FiY,f.K0]],useFactory:function E(r,d,e,t,i){return r||new _(d,e,t,i)}};class D{constructor(){this.loaded=!1}}let L=(()=>{class r{constructor(e,t,i,o,n){this.element=e,this.differs=t,this.renderer=i,this.iconReg=o,this.cdr=n,this.stretch=!1,this.applyClass=!1,this.applyCss=!1,this.helper=new D,this._svgStyle=null}set svgStyle(e){this._svgStyle=e,!this.helper.differ&&e&&(this.helper.differ=this.differs.find(e).create())}ngOnInit(){this.init()}ngOnDestroy(){this.destroy()}ngOnChanges(e){const t=this.element.nativeElement.firstChild;(e.src||e.name)&&(this.helper.loaded&&this.destroy(),this.init()),e.stretch&&this.stylize(),e.applyClass&&(this.applyClass?this.setClass(t,null,this.klass):this.setClass(t,this.klass,null)),e.svgClass&&this.setClass(t,e.svgClass.previousValue,e.svgClass.currentValue),e.klass&&(this.setClass(this.element.nativeElement,e.klass.previousValue,e.klass.currentValue),this.setClass(t,e.klass.previousValue,this.applyClass?e.klass.currentValue:null)),e.viewBox&&(this.helper.loaded&&this.destroy(),this.init()),e.applyCss&&(console.warn("applyCss deprecated since 9.1.0, will be removed in 10.0.0"),console.warn("use applyClass instead")),e.svgAriaLabel&&this.doAria(e.svgAriaLabel.currentValue)}ngDoCheck(){if(this.helper.svg&&this.helper.differ){const e=this.helper.differ.diff(this._svgStyle);e&&this.applyChanges(e)}}init(){if(this.name){const e=this.iconReg.getSvgByName(this.name);e&&(this.helper.icnSub=e.subscribe(t=>this.initSvg(t)))}else if(this.src){const e=this.iconReg.loadSvg(this.src);e&&(this.helper.icnSub=e.subscribe(t=>this.initSvg(t)))}else this.element.nativeElement.innerHTML="",this.cdr.markForCheck()}initSvg(e){!this.helper.loaded&&e&&(this.setSvg(e),this.resetDiffer())}destroy(){this.helper.icnSub&&this.helper.icnSub.unsubscribe(),this.helper=new D}resetDiffer(){this._svgStyle&&!this.helper.differ&&(this.helper.differ=this.differs.find(this._svgStyle).create())}setSvg(e){if(!this.helper.loaded&&e){this.helper.svg=e;const t=e.cloneNode(!0),i=this.element.nativeElement;if(i.innerHTML="",this.renderer.appendChild(i,t),this.helper.loaded=!0,this.copyNgContentAttribute(i,t),this.klass&&this.applyClass&&this.setClass(i.firstChild,null,this.klass),this.svgClass&&this.setClass(i.firstChild,null,this.svgClass),this.viewBox)if("auto"===this.viewBox){const o=t.getAttribute("width"),n=t.getAttribute("height");n&&o&&(this.renderer.setAttribute(t,"viewBox",`0 0 ${o} ${n}`),this.renderer.removeAttribute(t,"width"),this.renderer.removeAttribute(t,"height"))}else""!==this.viewBox&&(this.renderer.setAttribute(t,"viewBox",this.viewBox),this.renderer.removeAttribute(t,"width"),this.renderer.removeAttribute(t,"height"));this.stylize(),void 0===this.svgAriaLabel&&i.firstChild.hasAttribute("aria-label")||this.doAria(this.svgAriaLabel||""),this.cdr.markForCheck()}}copyNgContentAttribute(e,t){const i=e.attributes,o=i.length;for(let n=0;n<o;n+=1){const b=i.item(n);if(b&&b.name.startsWith("_ngcontent")){this.setNgContentAttribute(t,b.name);break}}}setNgContentAttribute(e,t){this.renderer.setAttribute(e,t,"");const i=e.childNodes.length;for(let o=0;o<i;o+=1){const n=e.childNodes[o];n instanceof Element&&this.setNgContentAttribute(n,t)}}stylize(){if(this.helper.svg){const e=this.element.nativeElement.firstChild;!0===this.stretch?this.renderer.setAttribute(e,"preserveAspectRatio","none"):!1===this.stretch&&this.renderer.removeAttribute(e,"preserveAspectRatio")}}applyChanges(e){e.forEachRemovedItem(t=>this.setStyle(t.key,null)),e.forEachAddedItem(t=>this.setStyle(t.key,t.currentValue)),e.forEachChangedItem(t=>this.setStyle(t.key,t.currentValue))}setStyle(e,t){const[i,o]=e.split("."),n=this.element.nativeElement.firstChild;null!==(t=null!==t&&o?`${t}${o}`:t)?this.renderer.setStyle(n,i,t):this.renderer.removeStyle(n,i)}setClass(e,t,i){if(e){if(t){const o=(Array.isArray(t)?t:t.split(" ")).filter(n=>n);for(const n of o)this.renderer.removeClass(e,n)}if(i){const o=(Array.isArray(i)?i:i.split(" ")).filter(n=>n);for(const n of o)this.renderer.addClass(e,n)}}}doAria(e){const t=this.element.nativeElement.firstChild;t&&(""===e?(this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.removeAttribute(t,"aria-label")):(this.renderer.removeAttribute(t,"aria-hidden"),this.renderer.setAttribute(t,"aria-label",e)))}}return r.\u0275fac=function(e){return new(e||r)(s.Y36(s.SBq),s.Y36(s.aQg),s.Y36(s.Qsj),s.Y36(_),s.Y36(s.sBO))},r.\u0275cmp=s.Xpm({type:r,selectors:[["svg-icon"]],inputs:{src:"src",name:"name",stretch:"stretch",applyClass:"applyClass",applyCss:"applyCss",svgClass:"svgClass",klass:["class","klass"],viewBox:"viewBox",svgAriaLabel:"svgAriaLabel",svgStyle:"svgStyle"},features:[s.TTD],ngContentSelectors:S,decls:1,vars:0,template:function(e,t){1&e&&(s.F$t(),s.Hsn(0))},encapsulation:2}),r})(),U=(()=>{class r{static forRoot(e={}){return{ngModule:r,providers:[B,e.loader||{provide:u,useClass:g}]}}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[[f.ez]]}),r})()}}]);