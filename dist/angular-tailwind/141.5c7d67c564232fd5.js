"use strict";(self.webpackChunkangular_tailwind=self.webpackChunkangular_tailwind||[]).push([[141],{141:(Q,r,o)=>{o.r(r),o.d(r,{MyapplicationModule:()=>D});var d=o(6733),s=o(5110),g=o(9838),e=o(8316),A=o(2084),m=o(2799),u=o(4734),_=o(6564);function x(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",15),e.NdJ("click",function(){e.CHM(t);const l=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.navigateTo(null==l?null:l.tourist_guide.id))}),e._uU(1," Edit"),e._UZ(2,"i",16),e.qZA()}}function v(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",6)(1,"div",7)(2,"div",8)(3,"div",9),e._UZ(4,"div",10),e.TgZ(5,"p"),e._uU(6),e.qZA()(),e.YNc(7,x,3,0,"div",11),e.qZA(),e.TgZ(8,"div",12),e._UZ(9,"circle-progress",13),e.qZA(),e.TgZ(10,"div",14),e.NdJ("click",function(){const a=e.CHM(t).$implicit,E=e.oxw(2);return e.KtG(E.selectShowApplication(null==a||null==a.tourist_guide?null:a.tourist_guide.id))}),e._uU(11),e.qZA()()()}if(2&i){const t=c.$implicit,n=e.oxw(2);e.xp6(6),e.hij(" ",0===t.applications.is_challan_issued&&0===t.applications.is_license_issued?"Pending/In Process/Open":1===t.applications.is_challan_issued?"Challan Issued":1===t.applications.is_license_issued?"Lisence Issued":"Pending/In Process/Open"," "),e.xp6(1),e.Q6J("ngIf",1!=(null==n.SelectedApplication||null==n.SelectedApplication.applications?null:n.SelectedApplication.applications.is_locked)),e.xp6(2),e.Q6J("percent",10)("radius",100)("outerStrokeWidth",16)("innerStrokeWidth",8)("outerStrokeColor","#20c0a0")("innerStrokeColor","#EDEEFE")("animation",!0)("animationDuration",300)("title","10")("renderOnClick",!0),e.xp6(2),e.hij(" ",null==t.tourist_guide?null:t.tourist_guide.name," ")}}function h(i,c){if(1&i&&(e.TgZ(0,"div",4),e.YNc(1,v,12,13,"div",5),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.myApplication)}}function f(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",31),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.generatechallan())}),e._uU(1,"Generate Challan"),e.qZA()}}function Z(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",32),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return l.showAllApplications=!0,e.KtG(l.showSingleApplications=!1)}),e._uU(1," Edit Application "),e.qZA()}}function S(i,c){if(1&i&&(e.TgZ(0,"div",52)(1,"div",53)(2,"p"),e._uU(3),e._UZ(4,"br"),e.TgZ(5,"span",54),e._uU(6," Remarks: "),e.qZA(),e.TgZ(7,"span"),e._uU(8),e.qZA()()()()),2&i){const t=c.$implicit;e.xp6(3),e.HOy(" ",null==t.from_role?null:t.from_role.name," ",null==t.from_user?null:t.from_user.name," has Processes application to ",null==t.to_role?null:t.to_role.name," ",null==t.to_user?null:t.to_user.name,""),e.xp6(5),e.Oqu(t.remarks)}}const p=function(){return{background:"linear-gradient(117deg, rgba(9,121,54,1) 14%, rgba(151,185,165,1) 36%, rgba(43,161,91,1) 65%)"}};function y(i,c){if(1&i&&(e.TgZ(0,"div",33)(1,"div",34)(2,"div",35)(3,"div",36)(4,"div",37)(5,"h2",38),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._UZ(8,"i",39),e._uU(9),e.qZA(),e.TgZ(10,"div",40)(11,"div",41)(12,"p",42),e._uU(13,"Email address"),e.qZA(),e._UZ(14,"p",43),e.qZA(),e.TgZ(15,"div",41)(16,"p",42),e._uU(17,"Home address"),e.qZA(),e.TgZ(18,"p",43),e._uU(19),e.qZA()()(),e.TgZ(20,"div",40)(21,"div",41)(22,"p",42),e._uU(23,"Telegraphic"),e.qZA(),e.TgZ(24,"p",43),e._uU(25),e.qZA()(),e.TgZ(26,"div",41)(27,"p",42),e._uU(28,"Telephone Number"),e.qZA(),e.TgZ(29,"p",43),e._uU(30),e.qZA()(),e.TgZ(31,"div",41)(32,"p",42),e._uU(33,"Mobile Number"),e.qZA(),e.TgZ(34,"p",43),e._uU(35),e.qZA()()(),e.TgZ(36,"div",40)(37,"div",41)(38,"p",42),e._uU(39,"Qualification"),e.qZA(),e.TgZ(40,"p",43),e._uU(41),e.qZA()(),e.TgZ(42,"div",41)(43,"p",42),e._uU(44,"Experience in Years"),e.qZA(),e.TgZ(45,"p",43),e._uU(46),e.qZA()(),e.TgZ(47,"div",41)(48,"p",42),e._uU(49,"Languages"),e.qZA(),e.TgZ(50,"p",43),e._uU(51),e.qZA()()(),e.TgZ(52,"div",40)(53,"div",41)(54,"p",42),e._uU(55,"Traning"),e.qZA(),e.TgZ(56,"p",43),e._uU(57),e.qZA()(),e.TgZ(58,"div",41)(59,"p",42),e._uU(60,"Auditor Name"),e.qZA(),e.TgZ(61,"p",43),e._uU(62),e.qZA()(),e.TgZ(63,"div",41)(64,"p",42),e._uU(65,"Auditor Address"),e.qZA(),e.TgZ(66,"p",43),e._uU(67),e.qZA()()(),e.TgZ(68,"div",40)(69,"div",41)(70,"p",42),e._uU(71,"Banker name"),e.qZA(),e.TgZ(72,"p",43),e._uU(73),e.qZA()(),e.TgZ(74,"div",41)(75,"p",42),e._uU(76,"Capital Invested"),e.qZA(),e.TgZ(77,"p",43),e._uU(78),e.qZA()()(),e.TgZ(79,"div",40)(80,"div",44)(81,"p",42),e._uU(82,"Other activities undertaken"),e.qZA(),e.TgZ(83,"p",43),e._uU(84),e.qZA()()(),e.TgZ(85,"div",40)(86,"div",44)(87,"p",42),e._uU(88,"Partner Details"),e.qZA(),e.TgZ(89,"p",43),e._uU(90),e.qZA()()()()()()(),e.TgZ(91,"div",34)(92,"div",35)(93,"div",36)(94,"div",45),e._uU(95,"Submitted Documents"),e.qZA(),e.TgZ(96,"div",46)(97,"p-tag")(98,"div",47)(99,"span",48),e._uU(100,"CNIC"),e.qZA()()(),e.TgZ(101,"p-tag")(102,"div",47)(103,"span",48),e._uU(104,"Matric Degree"),e.qZA()()(),e.TgZ(105,"p-tag")(106,"div",47)(107,"span",48),e._uU(108,"FSc Degree"),e.qZA()()(),e.TgZ(109,"p-tag")(110,"div",47)(111,"span",48),e._uU(112,"Experience Certificate"),e.qZA()()()()()(),e.TgZ(113,"div",49)(114,"div",50)(115,"div",45),e._uU(116,"Comments "),e.TgZ(117,"span",43),e._uU(118," (Sorted by latest)"),e.qZA()(),e._uU(119),e.YNc(120,S,9,5,"div",51),e.qZA()()()()),2&i){const t=e.oxw(2);e.xp6(6),e.Oqu(null==t.SelectedApplication?null:t.SelectedApplication.data.name),e.xp6(3),e.hij(" ",null==t.SelectedApplication?null:t.SelectedApplication.data.residential_address," "),e.xp6(10),e.Oqu(null==t.SelectedApplication?null:t.SelectedApplication.data.business_address),e.xp6(6),e.Oqu(null==t.SelectedApplication?null:t.SelectedApplication.data.telegraphic_number),e.xp6(5),e.Oqu(null==t.SelectedApplication?null:t.SelectedApplication.data.telephone_number),e.xp6(5),e.Oqu(null==t.SelectedApplication?null:t.SelectedApplication.data.telephone_number_lines),e.xp6(6),e.Oqu(null==t.SelectedApplication?null:t.SelectedApplication.data.educational_qualifications),e.xp6(5),e.hij("",null==t.SelectedApplication?null:t.SelectedApplication.data.exp_as_tourist_guide," years"),e.xp6(5),e.Oqu(null==t.SelectedApplication?null:t.SelectedApplication.data.foreign_language),e.xp6(6),e.Oqu(null==t.SelectedApplication?null:t.SelectedApplication.data.trainings),e.xp6(5),e.Oqu(null==t.SelectedApplication?null:t.SelectedApplication.data.auditors_name),e.xp6(5),e.Oqu(null==t.SelectedApplication?null:t.SelectedApplication.data.auditors_address),e.xp6(6),e.Oqu(null==t.SelectedApplication?null:t.SelectedApplication.data.banker_name),e.xp6(5),e.Oqu(null==t.SelectedApplication?null:t.SelectedApplication.data.capital_invested),e.xp6(6),e.Oqu(null==t.SelectedApplication?null:t.SelectedApplication.data.other_activities_undertaken),e.xp6(6),e.Oqu(null==t.SelectedApplication?null:t.SelectedApplication.data.partner_details),e.xp6(7),e.Akn(e.DdM(26,p)),e.xp6(4),e.Akn(e.DdM(27,p)),e.xp6(4),e.Akn(e.DdM(28,p)),e.xp6(4),e.Akn(e.DdM(29,p)),e.xp6(10),e.hij(" ",null==t.SelectedApplication?null:t.SelectedApplication.approvals," "),e.xp6(1),e.Q6J("ngForOf",null==t.SelectedApplication||null==t.SelectedApplication.application?null:t.SelectedApplication.application.approvals.reverse())}}function C(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",55)(1,"div",56),e._uU(2,"CNIC"),e.qZA(),e.TgZ(3,"div",57)(4,"img",58),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.OpenDialog("CNIC",null==l.SelectedApplication||null==l.SelectedApplication.data?null:l.SelectedApplication.data.cnic_front_attachment))}),e.qZA()()()}if(2&i){const t=e.oxw(2);e.xp6(4),e.Q6J("src",null==t.SelectedApplication||null==t.SelectedApplication.data?null:t.SelectedApplication.data.cnic_front_attachment,e.LSH)}}function U(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",55)(1,"div",56),e._uU(2,"CNIC Back Attachment"),e.qZA(),e.TgZ(3,"div",57)(4,"img",58),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.OpenDialog("CNIC",null==l.SelectedApplication||null==l.SelectedApplication.data?null:l.SelectedApplication.data.cnic_back_attachment))}),e.qZA()()()}if(2&i){const t=e.oxw(2);e.xp6(4),e.Q6J("src",null==t.SelectedApplication||null==t.SelectedApplication.data?null:t.SelectedApplication.data.cnic_back_attachment,e.LSH)}}function b(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",55)(1,"div",56),e._uU(2,"Matric Degree Attachment"),e.qZA(),e.TgZ(3,"div",57)(4,"img",58),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.OpenDialog("CNIC",null==l.SelectedApplication||null==l.SelectedApplication.data?null:l.SelectedApplication.data.metric_attachment))}),e.qZA()()()}if(2&i){const t=e.oxw(2);e.xp6(4),e.Q6J("src",null==t.SelectedApplication||null==t.SelectedApplication.data?null:t.SelectedApplication.data.metric_attachment,e.LSH)}}function q(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",55)(1,"div",56),e._uU(2,"FSC Degree Attachment"),e.qZA(),e.TgZ(3,"div",57)(4,"img",58),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.OpenDialog("CNIC",null==l.SelectedApplication?null:l.SelectedApplication.data.fsc_attachment))}),e.qZA()()()}if(2&i){const t=e.oxw(2);e.xp6(4),e.Q6J("src",null==t.SelectedApplication?null:t.SelectedApplication.data.fsc_attachment,e.LSH)}}function M(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",55)(1,"div",56),e._uU(2,"Experience Attachment"),e.qZA(),e.TgZ(3,"div",57)(4,"img",58),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.OpenDialog("CNIC",null==l.SelectedApplication?null:l.SelectedApplication.data.experience_attachment))}),e.qZA()()()}if(2&i){const t=e.oxw(2);e.xp6(4),e.Q6J("src",null==t.SelectedApplication?null:t.SelectedApplication.data.experience_attachment,e.LSH)}}function k(i,c){if(1&i&&e._UZ(0,"img",65),2&i){const t=e.oxw(3);e.Q6J("src",t.uploadedImageUrl,e.LSH)}}function w(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"label",59)(2,"span",60),e._uU(3,"Upload Challan Image"),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"input",61,62),e.NdJ("change",function(){e.CHM(t);const l=e.MAs(6),a=e.oxw(2);return e.KtG(a.UploadChallan(l))}),e.qZA()(),e.YNc(7,k,1,1,"img",63),e.TgZ(8,"button",64),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.submitForm())}),e._uU(9,"Submit"),e.qZA()()}if(2&i){const t=e.oxw(2);e.xp6(7),e.Q6J("ngIf",t.uploadedImageUrl)}}function I(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",17)(1,"div",18)(2,"div",19),e.YNc(3,f,2,0,"div",20),e.qZA(),e.TgZ(4,"div",21)(5,"div",22),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return l.showAllApplications=!0,e.KtG(l.showSingleApplications=!1)}),e._uU(6," Go Back "),e.qZA(),e.YNc(7,Z,2,0,"div",23),e.qZA(),e.YNc(8,y,121,30,"div",24),e.TgZ(9,"div",25)(10,"div",26),e._uU(11,"Submitted Documents by User:"),e.qZA(),e.TgZ(12,"div",27),e._uU(13,"Click on each document to View."),e.qZA(),e.TgZ(14,"div",28),e.YNc(15,C,5,1,"div",29),e.YNc(16,U,5,1,"div",29),e.YNc(17,b,5,1,"div",29),e.YNc(18,q,5,1,"div",29),e.YNc(19,M,5,1,"div",29),e.qZA()(),e.YNc(20,w,10,1,"div",30),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(3),e.Q6J("ngIf",t.generateChallan),e.xp6(4),e.Q6J("ngIf",1!=(null==t.SelectedApplication||null==t.SelectedApplication.applications?null:t.SelectedApplication.applications.is_locked)),e.xp6(1),e.Q6J("ngIf",t.SelectedApplication),e.xp6(7),e.Q6J("ngIf",null==t.SelectedApplication||null==t.SelectedApplication.data?null:t.SelectedApplication.data.cnic_front_attachment),e.xp6(1),e.Q6J("ngIf",null==t.SelectedApplication||null==t.SelectedApplication.data?null:t.SelectedApplication.data.cnic_back_attachment),e.xp6(1),e.Q6J("ngIf",null==t.SelectedApplication?null:t.SelectedApplication.data.metric_attachment),e.xp6(1),e.Q6J("ngIf",null==t.SelectedApplication||null==t.SelectedApplication.data?null:t.SelectedApplication.data.fsc_attachment),e.xp6(1),e.Q6J("ngIf",null==t.SelectedApplication?null:t.SelectedApplication.data.experience_attachment),e.xp6(1),e.Q6J("ngIf",1==(null==t.SelectedApplication||null==t.SelectedApplication.applications?null:t.SelectedApplication.applications.is_license_issued))}}const O=[{path:"",component:(()=>{class i{constructor(t,n,l){this.UserApplicationService=t,this.Router=n,this.SharedService=l,this.showAllApplications=!0,this.showSingleApplications=!1,this.DocumentDialog=!1,this.generateChallan=!1,this.selectedFile=null,this.uploadedImageUrl=null}ngOnInit(){let t=localStorage.getItem("userDetails");this.userID=JSON.parse(t||"{}").id,this.GetAllNewApplications()}GetAllNewApplications(){this.UserApplicationService.getUserAllApplications().subscribe(t=>{this.myApplication=t.tourist_guides,console.log("new applidS",this.myApplication)},t=>{console.log("Error in gettting my applications",t)})}OpenDialog(t,n){this.DocumentDialog=!0,this.docnam=t,this.docpath=n}selectShowApplication(t){this.UserApplicationService.getUserApplicationsByID(t).subscribe(n=>{this.SelectedApplication=n,console.log("===================================="),console.log("selected application in user block ",this.SelectedApplication),console.log("===================================="),this.showSingleApplications=!this.showSingleApplications,this.showAllApplications=!this.showAllApplications,this.generateChallan=!!this.SelectedApplication.application.is_challan_issued},n=>{console.log("Error in gettting my applications",n)})}generatechallan(){window.open(`/generate-challan/${this.SelectedApplication.data.id}`,"_blank")}UploadChallan(t){const n=t.files[0];if(!n)return void console.error("No file selected.");const l=new FileReader;l.onload=a=>{this.uploadedImageUrl=a.target.result},l.readAsDataURL(n),this.selectedFile=n}submitForm(){if(console.log("===================================="),console.log(this.SelectedApplication),console.log("===================================="),!this.selectedFile)return void console.error("No file selected.");const t=new FormData;t.append("dts_challan",this.selectedFile),t.append("challan_id",this.SelectedApplication.application.challans[0].id),t.append("application_id",this.SelectedApplication.application.id),t.append("attachment_type_id","19"),t.append("application_entity_type_id",this.SelectedApplication.application.application_entity_type_id),console.log("FormData:",FormData),this.SharedService.Upload_challan(t).subscribe(n=>{console.log(n)},n=>{console.error(n)})}navigateTo(t){this.Router.navigate([`/tourist-guide/edit/${t}`])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(A.A),e.Y36(s.F0),e.Y36(m.F))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-my-applications"]],features:[e._Bn([g.ez])],decls:5,vars:2,consts:[[1,"px-10","py-10"],[1,"text-xl","font-semibold","text-black"],["class","mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12",4,"ngIf"],["class","mb-5",4,"ngIf"],[1,"mt-5","grid","grid-cols-1","gap-5","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","xl:grid-cols-12"],["class","col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-3",4,"ngFor","ngForOf"],[1,"col-span-1","sm:col-span-1","md:col-span-3","lg:col-span-3","xl:col-span-3"],[1,"h-[350px]","border-t-4","border-green-400","bg-white","p-3","shadow-xl","hover:shadow-2xl"],[1,"flex","justify-between"],[1,"flex","items-center","justify-center","gap-2","text-red-600"],[1,"h-[10px]","w-[10px]","rounded-full","border-none","bg-red-600"],["class","cursor-pointer text-gray-500 hover:text-green-400",3,"click",4,"ngIf"],[1,"flex","items-center","justify-center"],[3,"percent","radius","outerStrokeWidth","innerStrokeWidth","outerStrokeColor","innerStrokeColor","animation","animationDuration","title","renderOnClick"],[1,"mt-2","cursor-pointer","text-center","text-base","font-semibold","hover:text-green-400","hover:underline",3,"click"],[1,"cursor-pointer","text-gray-500","hover:text-green-400",3,"click"],[1,"pi","pi-pencil","ml-1"],[1,"mb-5"],[1,"px-20"],[1,"my-5","flex","justify-end","gap-4"],["class","generate-challan-button",3,"click",4,"ngIf"],[1,"flex","flex-row","justify-between"],[1,"cursor-pointer","text-base","text-gray-500","hover:text-green-500",3,"click"],["class","cursor-pointer px-10 text-base text-gray-500 hover:text-green-500",3,"click",4,"ngIf"],["class","grid grid-cols-12 gap-5",4,"ngIf"],[1,"mt-5"],[1,"my-5","text-xl","font-semibold","text-black"],[1,"my-3","text-xs","text-red-500"],[1,"grid","grid-cols-1","gap-4","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","xl:grid-cols-4"],["class","relative rounded bg-white p-4 shadow-md transition duration-300 hover:shadow-lg",4,"ngIf"],[4,"ngIf"],[1,"generate-challan-button",3,"click"],[1,"cursor-pointer","px-10","text-base","text-gray-500","hover:text-green-500",3,"click"],[1,"grid","grid-cols-12","gap-5"],[1,"col-span-6"],[1,"flex","flex-col","gap-5"],[1,"rounded-xl","border-gray-200","bg-white","p-[2rem]"],[1,"flex","flex-col"],[1,"mt-4","font-bold"],[1,"pi-map-marker","pi",2,"color","slateblue"],[1,"grid","grid-cols-12","gap-4"],[1,"col-span-4","gap-2"],[1,"mt-2","text-[#6b7280]"],[1,"text-sm"],[1,"col-span-12","gap-2"],[1,"font-bold"],[1,"flex","flex-row","gap-2"],[1,"align-items-center","flex","gap-2"],[1,"text-base"],[1,"mt-5","flex","flex-col","gap-5"],[1,"h-[300px]","overflow-y-scroll","rounded-xl","border-gray-200","bg-white","p-[2rem]"],["class","",4,"ngFor","ngForOf"],[1,""],[1,"my-2","px-4","text-sm","dark:text-gray-500"],[1,"text-bold","text-green-500"],[1,"relative","rounded","bg-white","p-4","shadow-md","transition","duration-300","hover:shadow-lg"],[1,"mb-2","text-center","text-lg","font-medium","text-[#9095a0]"],[1,"flex","flex-row","justify-center"],["alt","Image 1",1,"h-[300px]","w-[300px]","cursor-pointer",3,"src","click"],[1,"image-upload-container","btn","btn-bwm"],[1,"upload-challan","my-5"],["type","file","accept","image/*",3,"change"],["imageInput",""],["alt","Uploaded Image","class","uploaded-image h-[300px] w-[300px] ",3,"src",4,"ngIf"],["type","button",1,"upload-challan","mt-5",3,"click"],["alt","Uploaded Image",1,"uploaded-image","h-[300px]","w-[300px]",3,"src"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"My Applications"),e.qZA(),e.YNc(3,h,2,1,"div",2),e.qZA(),e.YNc(4,I,21,9,"div",3)),2&t&&(e.xp6(3),e.Q6J("ngIf",n.showAllApplications),e.xp6(1),e.Q6J("ngIf",n.showSingleApplications))},dependencies:[d.sg,d.O5,u.nu,_.V],styles:[".generate-challan-button[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;font-size:16px;font-weight:700;background-color:#007bff;color:#fff;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s,transform .2s}.generate-challan-button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.upload-challan[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;font-size:16px;font-weight:700;background-color:#22c55e;color:#fff;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s,transform .2s}.upload-challan[_ngcontent-%COMP%]:hover{background-color:#22c55e}"]}),i})()}];let J=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[s.Bz.forChild(O),s.Bz]}),i})();var F=o(6375);let D=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.ez,J,u.hy,F.g,_.W]}),i})()}}]);