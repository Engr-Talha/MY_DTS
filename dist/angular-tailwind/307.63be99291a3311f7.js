"use strict";(self.webpackChunkangular_tailwind=self.webpackChunkangular_tailwind||[]).push([[307],{5307:(E,A,a)=>{a.r(A),a.d(A,{AssistantControllerModule:()=>z});var r=a(6733),d=a(5110),t=a(8316),_=a(2084),v=a(3519);function Z(i,o){if(1&i&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(e)}}function b(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"button",7),t.NdJ("click",function(){const p=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.NavigateTo(null==p?null:p.tourist_guide.id))}),t._uU(13," View "),t.qZA()()()}if(2&i){const e=o.$implicit;t.xp6(2),t.Oqu(null==e?null:e.tourist_guide.id),t.xp6(2),t.Oqu(null==e?null:e.tourist_guide.name),t.xp6(2),t.Oqu(null==e||null==e.applications[0]||null==e.applications[0].entity_type?null:e.applications[0].entity_type.name),t.xp6(2),t.Oqu(null==e||null==e.applications[0]||null==e.applications[0].status?null:e.applications[0].status.name),t.xp6(2),t.Oqu(null==e?null:e.tourist_guide.created_at)}}let x=(()=>{class i{constructor(e,n,l){this.UserApplicationService=e,this.route=n,this.ControllerService=l,this.selectedDate="",this.dateOptions=[],this.tableHeaders=["Code","Name","Category","Status","Date"]}filterByDate(){console.log("Selected Date:",this.selectedDate)}ngOnInit(){this.UserApplicationService.getApplicationByRole().subscribe(e=>{this.myApplication=e,console.log(this.myApplication)},e=>{console.log("Error in gettting my applications",e)}),this.dropdown=[{name:"Submitted Application",code:"NY"},{name:"Pending Application",code:"RM"},{name:"New Applications",code:"LDN"}],this.ApplicationTypeDropdown=[{name:"Hotel Registration",code:"NY"},{name:"Tourist Guide",code:"RM"},{name:"Resturant Registration",code:"LDN"},{name:"Travel Agency",code:"LDN"}]}NavigateTo(e){this.route.navigate([`/astcontroller-dashboard/assistant-cont-app-listing/${e}`])}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(_.A),t.Y36(d.F0),t.Y36(v.H))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-assistant-cont-applications"]],decls:12,vars:2,consts:[[1,"px-10","py-10"],[1,"mb-10","text-xl","font-semibold","text-black"],[1,"rounded-lg","border","border-gray-200","bg-white","py-5","shadow","dark:border-none","dark:bg-night-700","dark:shadow-none"],[1,"responsive-table"],[4,"ngFor","ngForOf"],[1,"mt-2","mr-16","flex","cursor-pointer","flex-row","justify-end"],[1,"text-gray-500","hover:underline"],[1,"cursor-pointer","rounded-lg","bg-green-500","py-2","px-4","text-white","hover:bg-green-800",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"Applications"),t.qZA(),t.TgZ(3,"div",2)(4,"table",3)(5,"thead")(6,"tr"),t.YNc(7,Z,2,1,"th",4),t.qZA()(),t.TgZ(8,"tbody"),t.YNc(9,b,14,5,"tr",4),t.qZA()(),t.TgZ(10,"div",5),t._UZ(11,"p",6),t.qZA()()()),2&e&&(t.xp6(7),t.Q6J("ngForOf",n.tableHeaders),t.xp6(2),t.Q6J("ngForOf",null==n.myApplication?null:n.myApplication.tourist_guides))},dependencies:[r.sg],styles:["table[_ngcontent-%COMP%]{width:100%;max-width:100%;margin-bottom:1rem;background-color:transparent}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.5rem;text-align:center}@media (max-width: 767px){table[_ngcontent-%COMP%]{border-collapse:collapse;display:block;width:100%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{display:block;text-align:right}th[_ngcontent-%COMP%]{background:#f2f2f2}td[_ngcontent-%COMP%]{border-top:1px solid #e7e7e7}}.filterButton[_ngcontent-%COMP%]{padding:10px 60px;font-size:16px;border:2px solid #4caf50;background-color:#4caf50;color:#fff;border-radius:5px;cursor:pointer;transition:all .3s ease;margin-top:20px}.filterButton[_ngcontent-%COMP%]:hover{background-color:#fff;color:#4caf50}[_nghost-%COMP%]     .p-element.p-inputwrapper .p-button:enabled{background:#2563eb;color:#fff;border-color:#2563eb}[_nghost-%COMP%]     .p-input-icon-left>.p-inputtext{padding-left:2.5rem}"]}),i})();var T=a(6919),U=a(9838),s=a(3226),f=a(3433),h=a(6682),C=a(6564);const u=function(){return{background:"linear-gradient(117deg, rgba(9,121,54,1) 14%, rgba(151,185,165,1) 36%, rgba(43,161,91,1) 65%)"}};function q(i,o){1&i&&(t.TgZ(0,"p-tag")(1,"div",38)(2,"span",39),t._uU(3,"Matric Degree"),t.qZA()()()),2&i&&t.Akn(t.DdM(2,u))}function y(i,o){1&i&&(t.TgZ(0,"p-tag")(1,"div",38)(2,"span",39),t._uU(3,"FSc Degree"),t.qZA()()()),2&i&&t.Akn(t.DdM(2,u))}function k(i,o){1&i&&(t.TgZ(0,"p-tag")(1,"div",38)(2,"span",39),t._uU(3,"Experience Certificate"),t.qZA()()()),2&i&&t.Akn(t.DdM(2,u))}function D(i,o){if(1&i&&(t.TgZ(0,"div",44)(1,"div",45)(2,"p"),t._uU(3),t._UZ(4,"br"),t.TgZ(5,"span",46),t._uU(6," Remarks: "),t.qZA(),t.TgZ(7,"span"),t._uU(8),t.qZA()()()()),2&i){const e=o.$implicit;t.xp6(3),t.HOy(" ",null==e.from_role?null:e.from_role.name," ",null==e.from_user?null:e.from_user.name," has Processes application to ",null==e.to_role?null:e.to_role.name," ",null==e.to_user?null:e.to_user.name,""),t.xp6(5),t.Oqu(e.remarks)}}function M(i,o){if(1&i&&(t.TgZ(0,"div",24)(1,"div",25)(2,"div",26)(3,"div",27)(4,"div",28)(5,"h2",29),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._UZ(8,"i",30),t._uU(9),t.qZA(),t.TgZ(10,"div",31)(11,"div",32)(12,"p",33),t._uU(13,"Email address"),t.qZA(),t.TgZ(14,"p",34),t._uU(15,"user@gmail.com"),t.qZA()(),t.TgZ(16,"div",32)(17,"p",33),t._uU(18,"Home address"),t.qZA(),t.TgZ(19,"p",34),t._uU(20),t.qZA()()(),t.TgZ(21,"div",31)(22,"div",32)(23,"p",33),t._uU(24,"Telegraphic"),t.qZA(),t.TgZ(25,"p",34),t._uU(26),t.qZA()(),t.TgZ(27,"div",32)(28,"p",33),t._uU(29,"Telephone Number"),t.qZA(),t.TgZ(30,"p",34),t._uU(31),t.qZA()(),t.TgZ(32,"div",32)(33,"p",33),t._uU(34,"Mobile Number"),t.qZA(),t.TgZ(35,"p",34),t._uU(36),t.qZA()()(),t.TgZ(37,"div",31)(38,"div",32)(39,"p",33),t._uU(40,"Qualification"),t.qZA(),t.TgZ(41,"p",34),t._uU(42),t.qZA()(),t.TgZ(43,"div",32)(44,"p",33),t._uU(45,"Experience in Years"),t.qZA(),t.TgZ(46,"p",34),t._uU(47),t.qZA()(),t.TgZ(48,"div",32)(49,"p",33),t._uU(50,"Languages"),t.qZA(),t.TgZ(51,"p",34),t._uU(52),t.qZA()()(),t.TgZ(53,"div",31)(54,"div",32)(55,"p",33),t._uU(56,"Traning"),t.qZA(),t.TgZ(57,"p",34),t._uU(58),t.qZA()(),t.TgZ(59,"div",32)(60,"p",33),t._uU(61,"Auditor Name"),t.qZA(),t.TgZ(62,"p",34),t._uU(63),t.qZA()(),t.TgZ(64,"div",32)(65,"p",33),t._uU(66,"Auditor Address"),t.qZA(),t.TgZ(67,"p",34),t._uU(68),t.qZA()()(),t.TgZ(69,"div",31)(70,"div",32)(71,"p",33),t._uU(72,"Banker name"),t.qZA(),t.TgZ(73,"p",34),t._uU(74),t.qZA()(),t.TgZ(75,"div",32)(76,"p",33),t._uU(77,"Capital Invested"),t.qZA(),t.TgZ(78,"p",34),t._uU(79),t.qZA()()(),t.TgZ(80,"div",31)(81,"div",35)(82,"p",33),t._uU(83,"Other activities undertaken"),t.qZA(),t.TgZ(84,"p",34),t._uU(85),t.qZA()()(),t.TgZ(86,"div",31)(87,"div",35)(88,"p",33),t._uU(89,"Partner Details"),t.qZA(),t.TgZ(90,"p",34),t._uU(91),t.qZA()()()()()()(),t.TgZ(92,"div",25)(93,"div",26)(94,"div",27)(95,"div",36),t._uU(96,"Submitted Documents"),t.qZA(),t.TgZ(97,"div",37)(98,"p-tag")(99,"div",38)(100,"span",39),t._uU(101,"CNIC"),t.qZA()()(),t.YNc(102,q,4,3,"p-tag",40),t.YNc(103,y,4,3,"p-tag",40),t.YNc(104,k,4,3,"p-tag",40),t.qZA()()(),t.TgZ(105,"div",41)(106,"div",42)(107,"div",36),t._uU(108,"Comments "),t.TgZ(109,"span",34),t._uU(110," (Sorted by latest)"),t.qZA()(),t._uU(111),t.YNc(112,D,9,5,"div",43),t.qZA()()()()),2&i){const e=t.oxw();t.xp6(6),t.Oqu(null==e.SelectedApplication?null:e.SelectedApplication.data.name),t.xp6(3),t.hij(" ",null==e.SelectedApplication?null:e.SelectedApplication.data.residential_address," "),t.xp6(11),t.Oqu(null==e.SelectedApplication?null:e.SelectedApplication.data.business_address),t.xp6(6),t.Oqu(null==e.SelectedApplication?null:e.SelectedApplication.data.telegraphic_number),t.xp6(5),t.Oqu(null==e.SelectedApplication?null:e.SelectedApplication.data.telephone_number),t.xp6(5),t.Oqu(null==e.SelectedApplication?null:e.SelectedApplication.data.telephone_number_lines),t.xp6(6),t.Oqu(null==e.SelectedApplication?null:e.SelectedApplication.data.educational_qualifications),t.xp6(5),t.hij("",null==e.SelectedApplication?null:e.SelectedApplication.data.exp_as_tourist_guide," years"),t.xp6(5),t.Oqu(null==e.SelectedApplication?null:e.SelectedApplication.data.foreign_language),t.xp6(6),t.Oqu(null==e.SelectedApplication?null:e.SelectedApplication.data.trainings),t.xp6(5),t.Oqu(null==e.SelectedApplication?null:e.SelectedApplication.data.auditors_name),t.xp6(5),t.Oqu(null==e.SelectedApplication?null:e.SelectedApplication.data.auditors_address),t.xp6(6),t.Oqu(null==e.SelectedApplication?null:e.SelectedApplication.data.banker_name),t.xp6(5),t.Oqu(null==e.SelectedApplication?null:e.SelectedApplication.data.capital_invested),t.xp6(6),t.Oqu(null==e.SelectedApplication?null:e.SelectedApplication.data.other_activities_undertaken),t.xp6(6),t.Oqu(null==e.SelectedApplication?null:e.SelectedApplication.data.partner_details),t.xp6(7),t.Akn(t.DdM(23,u)),t.xp6(4),t.Q6J("ngIf",null==e.SelectedApplication?null:e.SelectedApplication.data.metric_attachment),t.xp6(1),t.Q6J("ngIf",null==e.SelectedApplication||null==e.SelectedApplication.data?null:e.SelectedApplication.data.fsc_attachment),t.xp6(1),t.Q6J("ngIf",null==e.SelectedApplication?null:e.SelectedApplication.data.experience_attachment),t.xp6(7),t.hij(" ",null==e.SelectedApplication?null:e.SelectedApplication.approvals," "),t.xp6(1),t.Q6J("ngForOf",null==e.SelectedApplication||null==e.SelectedApplication.application?null:e.SelectedApplication.application.approvals)}}function O(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",47)(1,"div",48),t._uU(2,"CNIC"),t.qZA(),t.TgZ(3,"div",13)(4,"img",49),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.OpenDialog("CNIC",null==l.SelectedApplication||null==l.SelectedApplication.data?null:l.SelectedApplication.data.cnic_front_attachment))}),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(4),t.Q6J("src",e.convertImageUrl(null==e.SelectedApplication||null==e.SelectedApplication.data?null:e.SelectedApplication.data.cnic_front_attachment),t.LSH)}}function w(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",47)(1,"div",48),t._uU(2,"CNIC Back Attachment"),t.qZA(),t.TgZ(3,"div",13)(4,"img",49),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.OpenDialog("CNIC",null==l.SelectedApplication||null==l.SelectedApplication.data?null:l.SelectedApplication.data.cnic_back_attachment))}),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(4),t.Q6J("src",e.convertImageUrl(null==e.SelectedApplication||null==e.SelectedApplication.data?null:e.SelectedApplication.data.cnic_back_attachment),t.LSH)}}function I(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",47)(1,"div",48),t._uU(2,"Matric Degree Attachment"),t.qZA(),t.TgZ(3,"div",13)(4,"img",49),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.OpenDialog("CNIC",l.convertImageUrl(null==l.SelectedApplication||null==l.SelectedApplication.data?null:l.SelectedApplication.data.metric_attachment)))}),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(4),t.Q6J("src",e.convertImageUrl(null==e.SelectedApplication||null==e.SelectedApplication.data?null:e.SelectedApplication.data.metric_attachment),t.LSH)}}function N(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",47)(1,"div",48),t._uU(2,"FSC Degree Attachment"),t.qZA(),t.TgZ(3,"div",13)(4,"img",49),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.OpenDialog("CNIC",null==l.SelectedApplication?null:l.SelectedApplication.data.fsc_attachment))}),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(4),t.Q6J("src",null==e.SelectedApplication?null:e.SelectedApplication.data.fsc_attachment,t.LSH)}}function J(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",47)(1,"div",48),t._uU(2,"Experience Attachment"),t.qZA(),t.TgZ(3,"div",13)(4,"img",49),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.OpenDialog("CNIC",null==l.SelectedApplication?null:l.SelectedApplication.data.experience_attachment))}),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(4),t.Q6J("src",null==e.SelectedApplication?null:e.SelectedApplication.data.experience_attachment,t.LSH)}}const g=function(){return{width:"50vw"}},m=function(){return{"960px":"75vw"}},j=[{path:"",component:x},{path:"assistant-cont-app-listing/:id",component:(()=>{class i{constructor(e,n,l,p,c){this.TouristGuideService=e,this.ActivatedRoute=n,this.ControllerService=l,this.messageService=p,this.UserApplicationService=c,this.uploadedImages=[],this.DocumentDialog=!1,this.addCommentDialog=!1,this.approvedialogbox=!1,this.showreject=!1}ngOnInit(){this.ActivatedRoute.params.subscribe(n=>{this.applicationID=n.id,this.applicationID>0?this.getApplicationbyID(this.applicationID):this.applicationID=-1});let e=localStorage.getItem("userDetails");this.userID=JSON.parse(e||"{}").id}convertImageUrl(e){const n=e.replace(/\\/g,"/").replace(/\t/g,"");return n.startsWith("localhost")?`http://${n}`:e}getApplicationbyID(e){this.UserApplicationService.getUserApplicationsByID(e).subscribe(n=>{this.SelectedApplication=n,console.log("===================================="),console.log("selected application in user block ",this.SelectedApplication),console.log("====================================")},n=>{console.log("Error in gettting my applications",n)})}onFileChange(e){const n=e.target.files;if(n)for(let l=0;l<n.length;l++){const p=n[l],c=new FileReader;c.onload=()=>{this.uploadedImages.push({url:c.result,name:p.name})},c.readAsDataURL(p)}}removeImage(e){this.uploadedImages.splice(e,1)}OpenDialog(e,n){this.DocumentDialog=!0,this.docnam=e,this.docpath=n}addComment(){this.addCommentDialog=!0}ChangeStatus(e){const n=new FormData;n.append("status",e),n.append("remarks",this.addcommentt),n.append("application_entity_type_id",this.SelectedApplication.application.application_entity_type_id),this.UserApplicationService.changeStatus(this.applicationID,n).subscribe(l=>{console.log("===================================="),console.log(l),console.log("===================================="),this.addcommentt="",this.approvedialogbox=!1,1==e?this.showSuccess("Application Approved","User Application Approved, sent for further checking."):this.showError2("Application Rejected","Application is Rejected and Informed to User.")},l=>{console.log("===================================="),console.log(l),console.log("===================================="),this.addcommentt="",this.approvedialogbox=!1})}reject(){this.showreject=!0,this.ControllerService.Inspectionbycontroller(this.applicationID,"Rejected",this.userID,this.addcommentt).subscribe(e=>{console.log("===================================="),console.log(e),console.log("===================================="),this.showreject=!1},e=>{console.log("===================================="),console.log(e),console.log("===================================="),this.showreject=!1})}showError2(e,n){this.messageService.add({severity:"error",summary:e,detail:n})}showSuccess(e,n){this.messageService.add({severity:"success",summary:e,detail:n})}showInfo(){this.messageService.add({severity:"info",summary:"Info",detail:"Message Content"})}showWarn(){this.messageService.add({severity:"warn",summary:"Warn",detail:"Message Content"})}showError(e){this.messageService.add({severity:"error",summary:"Document Rejected",detail:e})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(T.d),t.Y36(d.gz),t.Y36(v.H),t.Y36(U.ez),t.Y36(_.A))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-assitant-controller-user-application"]],decls:74,vars:41,consts:[[1,"px-10","py-10"],[1,"mb-3","text-xl","font-semibold","text-black"],[1,"item-end","mb-3","flex","flex-row","justify-end"],[1,"button-container"],[1,"approveButton",3,"click"],["class","grid grid-cols-12 gap-5",4,"ngIf"],[1,"mt-5"],[1,"my-5","text-xl","font-semibold","text-black"],[1,"my-3","text-xs","text-red-500"],[1,"grid","grid-cols-1","gap-4","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","xl:grid-cols-4"],["class","relative rounded bg-white p-4 shadow-md transition duration-300 hover:shadow-lg",4,"ngIf"],[3,"visible","breakpoints","draggable","resizable","visibleChange"],[1,"mb-2","text-center","text-xl","font-medium","text-[#9095a0]"],[1,"flex","flex-row","justify-center"],[1,"h-1/2","w-1/2",3,"src"],["header","Add Comment to Application",3,"visible","breakpoints","draggable","resizable","visibleChange"],[1,"card","justify-content-center","flex"],["pKeyFilter","int","rows","5","cols","30","pInputTextarea",""],[1,"addCommentButton",3,"click"],[1,"approveButton"],["header","Approve Applications",3,"visible","breakpoints","draggable","resizable","visibleChange"],[1,"card","justify-content-center","flex","flex-col"],["pKeyFilter","int","rows","5","cols","30","pInputTextarea","",3,"ngModel","ngModelChange"],["header","Reject Applications",3,"visible","breakpoints","draggable","resizable","visibleChange"],[1,"grid","grid-cols-12","gap-5"],[1,"col-span-6"],[1,"flex","flex-col","gap-5"],[1,"rounded-xl","border-gray-200","bg-white","p-[2rem]"],[1,"flex","flex-col"],[1,"mt-4","font-bold"],[1,"pi-map-marker","pi",2,"color","slateblue"],[1,"grid","grid-cols-12","gap-4"],[1,"col-span-4","gap-2"],[1,"mt-2","text-[#6b7280]"],[1,"text-sm"],[1,"col-span-12","gap-2"],[1,"font-bold"],[1,"flex","flex-row","gap-2"],[1,"align-items-center","flex","gap-2"],[1,"text-base"],[3,"style",4,"ngIf"],[1,"mt-5","flex","flex-col","gap-5"],[1,"h-[300px]","overflow-y-scroll","rounded-xl","border-gray-200","bg-white","p-[2rem]"],["class","",4,"ngFor","ngForOf"],[1,""],[1,"my-2","px-4","text-sm","dark:text-gray-500"],[1,"text-bold","text-green-500"],[1,"relative","rounded","bg-white","p-4","shadow-md","transition","duration-300","hover:shadow-lg"],[1,"mb-2","text-center","text-lg","font-medium","text-[#9095a0]"],["alt","Image 1",1,"h-[300px]","w-[300px]","cursor-pointer",3,"src","click"]],template:function(e,n){1&e&&(t._UZ(0,"p-toast"),t.TgZ(1,"div",0)(2,"div",1),t._uU(3,"Applications"),t.qZA(),t.TgZ(4,"div",2)(5,"div",3)(6,"button",4),t.NdJ("click",function(){return n.approvedialogbox=!0}),t._uU(7,"Apprvove and Sent to Inspector"),t.qZA(),t.TgZ(8,"button",4),t.NdJ("click",function(){return n.showreject=!0}),t._uU(9,"Reject"),t.qZA()()(),t.YNc(10,M,113,24,"div",5),t.TgZ(11,"div",6)(12,"div",7),t._uU(13,"Submitted Documents by User:"),t.qZA(),t.TgZ(14,"div",8),t._uU(15,"Click on each document to View."),t.qZA(),t.TgZ(16,"div",9),t.YNc(17,O,5,1,"div",10),t.YNc(18,w,5,1,"div",10),t.YNc(19,I,5,1,"div",10),t.YNc(20,N,5,1,"div",10),t.YNc(21,J,5,1,"div",10),t.qZA()(),t.TgZ(22,"div",6)(23,"div",7),t._uU(24,"Submitted Documents by Inspector:"),t.qZA(),t.TgZ(25,"div")(26,"p"),t._uU(27,"No Documents Submitted by Inspector yet."),t.qZA()()()(),t.TgZ(28,"p-dialog",11),t.NdJ("visibleChange",function(p){return n.DocumentDialog=p}),t.TgZ(29,"div")(30,"div",12),t._uU(31,"CNIC"),t.qZA(),t.TgZ(32,"div",13),t._UZ(33,"img",14),t.qZA()()(),t.TgZ(34,"p-dialog",15),t.NdJ("visibleChange",function(p){return n.addCommentDialog=p}),t.TgZ(35,"div")(36,"div",16),t._UZ(37,"textarea",17),t.qZA(),t.TgZ(38,"div",2)(39,"div",3)(40,"button",18),t.NdJ("click",function(){return n.addComment()}),t._uU(41,"Forward to User"),t.qZA(),t.TgZ(42,"button",19),t._uU(43,"Forward to Inspector"),t.qZA(),t.TgZ(44,"button",19),t._uU(45,"Forward to Controller"),t.qZA()()()()(),t.TgZ(46,"p-dialog",20),t.NdJ("visibleChange",function(p){return n.approvedialogbox=p}),t.TgZ(47,"div")(48,"div",21)(49,"p"),t._uU(50,"Do you want to approve this applications."),t.qZA(),t._UZ(51,"br"),t.TgZ(52,"div",16)(53,"textarea",22),t.NdJ("ngModelChange",function(p){return n.addcommentt=p}),t.qZA()()(),t.TgZ(54,"div",2)(55,"div",3)(56,"button",4),t.NdJ("click",function(){return n.ChangeStatus(1)}),t._uU(57,"Approve"),t.qZA(),t.TgZ(58,"button",4),t.NdJ("click",function(){return n.approvedialogbox=!1}),t._uU(59,"Cancel"),t.qZA()()()()(),t.TgZ(60,"p-dialog",23),t.NdJ("visibleChange",function(p){return n.showreject=p}),t.TgZ(61,"div")(62,"div",21)(63,"p"),t._uU(64,"Do you want to reject this applications. Please add comment."),t.qZA(),t._UZ(65,"br"),t.TgZ(66,"div",16)(67,"textarea",22),t.NdJ("ngModelChange",function(p){return n.addcommentt=p}),t.qZA()()(),t.TgZ(68,"div",2)(69,"div",3)(70,"button",4),t.NdJ("click",function(){return n.ChangeStatus(2)}),t._uU(71,"Reject"),t.qZA(),t.TgZ(72,"button",4),t.NdJ("click",function(){return n.approvedialogbox=!1}),t._uU(73,"Cancel"),t.qZA()()()()()),2&e&&(t.xp6(10),t.Q6J("ngIf",n.SelectedApplication),t.xp6(7),t.Q6J("ngIf",null==n.SelectedApplication||null==n.SelectedApplication.data?null:n.SelectedApplication.data.cnic_front_attachment),t.xp6(1),t.Q6J("ngIf",null==n.SelectedApplication||null==n.SelectedApplication.data?null:n.SelectedApplication.data.cnic_back_attachment),t.xp6(1),t.Q6J("ngIf",null==n.SelectedApplication?null:n.SelectedApplication.data.metric_attachment),t.xp6(1),t.Q6J("ngIf",null==n.SelectedApplication||null==n.SelectedApplication.data?null:n.SelectedApplication.data.fsc_attachment),t.xp6(1),t.Q6J("ngIf",null==n.SelectedApplication?null:n.SelectedApplication.data.experience_attachment),t.xp6(7),t.Akn(t.DdM(33,g)),t.Q6J("visible",n.DocumentDialog)("breakpoints",t.DdM(34,m))("draggable",!1)("resizable",!1),t.xp6(5),t.s9C("src",n.docpath,t.LSH),t.xp6(1),t.Akn(t.DdM(35,g)),t.Q6J("visible",n.addCommentDialog)("breakpoints",t.DdM(36,m))("draggable",!1)("resizable",!1),t.xp6(12),t.Akn(t.DdM(37,g)),t.Q6J("visible",n.approvedialogbox)("breakpoints",t.DdM(38,m))("draggable",!1)("resizable",!1),t.xp6(7),t.Q6J("ngModel",n.addcommentt),t.xp6(7),t.Akn(t.DdM(39,g)),t.Q6J("visible",n.showreject)("breakpoints",t.DdM(40,m))("draggable",!1)("resizable",!1),t.xp6(7),t.Q6J("ngModel",n.addcommentt))},dependencies:[r.sg,r.O5,s.Fj,s.JJ,f.V,h.FN,s.On,C.V],styles:[".btn-approve[_ngcontent-%COMP%]{background-color:#28a745;color:#fff;border:none;padding:8px 16px;margin-right:8px;cursor:pointer;transition:background-color .3s}.btn-approve[_ngcontent-%COMP%]:hover{background-color:#218838}.btn-reject[_ngcontent-%COMP%]{background-color:#dc3545;color:#fff;border:none;padding:8px 16px;cursor:pointer;transition:background-color .3s}.btn-reject[_ngcontent-%COMP%]:hover{background-color:#c82333}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:20px;gap:20px}.addCommentButton[_ngcontent-%COMP%], .approveButton[_ngcontent-%COMP%]{padding:10px 20px;font-size:16px;border:2px solid #22c55e;background-color:#22c55e;color:#fff;border-radius:5px;cursor:pointer;transition:all .3s ease}.addCommentButton[_ngcontent-%COMP%]:hover{background-color:#fff;color:#22c55e}.approveButton[_ngcontent-%COMP%]:hover{background-color:#fff;color:#22c55e;border-color:#22c55e}"]}),i})()}];let F=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.Bz.forChild(j),d.Bz]}),i})();var P=a(1421),Q=a(276),Y=a(3786),R=a(7426),H=a(1215),B=a(7920);let z=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[r.ez,F,s.UX,f.S,R.q,h.EV,Y.kW,Q.S,r.ez,s.u5,H.hJ,B._8,P.U$,C.W]}),i})()}}]);