"use strict";(self.webpackChunkaptara_ui=self.webpackChunkaptara_ui||[]).push([[319],{4319:(E,g,c)=>{c.r(g),c.d(g,{ModulesModule:()=>A});var h=c(6895),d=c(646);function u(o,n){return{type:7,name:o,definitions:n,options:{}}}function x(o,n=null){return{type:4,styles:n,timings:o}}function f(o){return{type:6,styles:o,offset:null}}function C(o,n,e=null){return{type:1,expr:o,animation:n,options:e}}var t=c(1571),m=c(529),y=c(1481);function M(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"img",12),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.goBack())}),t.qZA()}}function b(o,n){1&o&&(t.TgZ(0,"a",13)(1,"h4",14),t._uU(2,"DiffDazzle"),t.qZA()())}function P(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.showFileMatchScore=!0)}),t._uU(1,"Check Score"),t.qZA()}}function O(o,n){if(1&o&&(t.TgZ(0,"h6",14),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij("File Match Score : ",(100*(null==e.response?null:e.response.bert_cosine_similarity)).toFixed(2)," % ")}}const v=function(o){return{selectedIndex:o}};function w(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",23),t.NdJ("click",function(){const s=t.CHM(e),a=s.$implicit,r=s.$implicit,l=t.oxw(2);return l.highlightText(a),t.KtG(l.selectedIndex=r)}),t.TgZ(1,"div")(2,"b"),t._uU(3,"Line :"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"div")(6,"b"),t._uU(7,"Page :"),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"div")(10,"b"),t._uU(11,"Position :"),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"div")(14,"b"),t._uU(15,"Word :"),t.qZA(),t._uU(16),t.qZA(),t.TgZ(17,"div")(18,"b"),t._uU(19,"Line Content :"),t.qZA(),t._uU(20),t.qZA(),t._UZ(21,"hr"),t.qZA()}if(2&o){const e=n.$implicit,i=n.$implicit,s=t.oxw(2);t.Q6J("ngClass",t.VKq(6,v,s.selectedIndex==i)),t.xp6(4),t.hij(" ",e.Line,""),t.xp6(4),t.hij(" ",e.Page,""),t.xp6(4),t.hij(" ",e.Position,""),t.xp6(4),t.hij(" ",e.Word,""),t.xp6(4),t.hij(" ",e.line_content,"")}}function F(o,n){if(1&o&&(t.TgZ(0,"div",16)(1,"div",17)(2,"h5"),t._uU(3,"Changes List"),t.qZA(),t._UZ(4,"hr"),t.YNc(5,w,22,8,"div",18),t.qZA(),t.TgZ(6,"div",19)(7,"div",20),t._UZ(8,"div",21),t.qZA(),t.TgZ(9,"div",20),t._UZ(10,"div",22),t.qZA()()()),2&o){const e=t.oxw();t.xp6(5),t.Q6J("ngForOf",e.changeList),t.xp6(3),t.Q6J("innerHTML",e.formateResponse(null==e.response?null:e.response.pdf_text),t.oJD),t.xp6(2),t.Q6J("innerHTML",e.formateResponse(null==e.response?null:e.response.html_text),t.oJD)}}function T(o,n){if(1&o&&t._UZ(0,"img",35),2&o){const e=t.oxw(2);t.Q6J("src",e.fileIcon,t.LSH)}}function S(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",24)(1,"div",25)(2,"div",26)(3,"label",27),t._uU(4,"File 1"),t.qZA(),t.TgZ(5,"input",28),t.NdJ("change",function(s){t.CHM(e);const a=t.oxw();return t.KtG(a.onFile1Selected(s))}),t.qZA(),t.YNc(6,T,1,1,"img",29),t.qZA(),t.TgZ(7,"div",30)(8,"label",31),t._uU(9,"HTML File"),t.qZA(),t.TgZ(10,"input",32),t.NdJ("change",function(s){t.CHM(e);const a=t.oxw();return t.KtG(a.onFile2Selected(s))}),t.qZA(),t._UZ(11,"img",33),t.qZA(),t.TgZ(12,"button",34),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.getData())}),t._uU(13,"Compare"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(6),t.Q6J("ngIf",e.fileIcon),t.xp6(6),t.Q6J("disabled",null==e.file1||null==e.file2)}}function Z(o,n){1&o&&t._UZ(0,"div",36)}const k=[{path:"home",component:(()=>{class o{constructor(e,i){this.http=e,this.sanitizer=i,this.showCompage=!1,this.changeList=[],this.changeListFinalData=[],this.showLoader=!1,this.fileIcon="",this.showFileMatchScore=!1,this.file1=null,this.file2=null}onFile1Selected(e){this.file1=e.target.files[0];const i=this.file1.name.toLowerCase(),s=i.endsWith(".ppt")||i.endsWith(".pptx"),a=i.endsWith(".pdf"),r=i.endsWith(".xls")||i.endsWith(".xlsx");s?this.fileIcon="/assets/ppt.png":a?this.fileIcon="/assets/pdf.png":r?this.fileIcon="/assets/xls.png":console.log("Selected file is not a supported type.")}onFile2Selected(e){this.file2=e.target.files[0]}getData(){this.showLoader=!0;const e=new FormData;e.append("file1",this.file1),e.append("html_file",this.file2),this.http.post("http://innovationhub.tvsnext.io:61077/process_and_compare_files",e).subscribe(i=>{this.showLoader=!1,this.showCompage=!0,this.rawResponse=JSON.parse(JSON.stringify(i)),this.changeList=this.splitChangeContent(i.comparison_output.content),this.response=i})}formateResponse(e){return e?e.replace(/\n/g,"<br>"):""}splitChangeContent(e){let i=e.split("\n\n");return i.length&&i.forEach(s=>{this.splitSubContent(s)&&this.changeListFinalData.push(this.splitSubContent(s))}),this.changeListFinalData}splitSubContent(e){let i=e.split("\n"),s={};return i.forEach(a=>{let r=a.split(":"),l=r[0],p=r[1];l&&p&&("Line Content"==l?s.line_content=this.removeLeadingWhitespace(p):s[l]=this.removeLeadingWhitespace(p))}),s}highlightText(e){let i=JSON.parse(JSON.stringify(e)),s=JSON.parse(JSON.stringify(this.rawResponse.pdf_text));if(s.includes(i.line_content)){const a=this.replaceWordByPosition(i.line_content,parseInt(i.Position),`<span class="highlight" id="highlightElement" [@scrollAnimation]>${i.Word}</span>`,i.Word),r=s.replace(i.line_content,a);this.response.pdf_text=this.formateResponse(r),setTimeout(()=>{this.scrollToElement()},20)}else console.log("not there")}replaceWordByPosition(e,i,s,a){const r=e.split(/\s+/);return console.log(JSON.parse(JSON.stringify(r))),i>r.length?(console.error("Invalid position"),e):(r[i]=r[i].replace(a,s),r.join(" "))}removeLeadingWhitespace(e){return e.replace(/^\s+/,"")}scrollToElement(){const e=document.querySelector(".highlight");e&&e.scrollIntoView({behavior:"smooth"})}goBack(){this.showCompage=!1,this.showFileMatchScore=!1,this.fileIcon="",this.changeList=[],this.rawResponse=null,this.response=null,location.reload()}safeHtml(e){return this.sanitizer.bypassSecurityTrustHtml(e)}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(m.eN),t.Y36(y.H7))};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],decls:13,vars:7,consts:[["role","banner",1,"toolbar"],["width","20px","class","ml-4","src","/assets/left-chevron.png",3,"click",4,"ngIf"],["href","/",4,"ngIf"],[1,"spacer"],["class","btn btn-primary mx-3",3,"click",4,"ngIf"],["class","mx-5",4,"ngIf"],["class","row mx-0","style","height: calc(100vh - 90px)",4,"ngIf"],["class","row mx-0",4,"ngIf"],["class","spinner-border","role","status","style","    position: fixed;\nleft: 0;\nright: 0;\nmargin: auto;",4,"ngIf"],[1,"px-4","py-2",2,"height","30px","position","fixed","bottom","0px","background-color","#28104E","width","100%","color","#fff"],[1,"row",2,"width","100%"],[1,"col-12","text-center"],["width","20px","src","/assets/left-chevron.png",1,"ml-4",3,"click"],["href","/"],[1,"mx-5"],[1,"btn","btn-primary","mx-3",3,"click"],[1,"row","mx-0",2,"height","calc(100vh - 90px)"],[1,"col-2","change_list",2,"height","calc(100vh - 90px)","overflow","auto"],["style","cursor: pointer;",3,"ngClass","click",4,"ngFor","ngForIndex","ngForOf"],[1,"col-10","row","mx-0","px-0",2,"height","calc(100vh - 90px)","overflow","auto"],[1,"col-6","file_content_container"],["id","pdfText",3,"innerHTML"],[3,"innerHTML"],[2,"cursor","pointer",3,"ngClass","click"],[1,"row","mx-0"],[1,"col-6","mx-auto","my-5"],[1,"form-group",2,"position","relative"],["for","file1",1,"mb-2"],["type","file","id","file1","placeholder","","accept",".pdf,.ppt,.pptx,.xls,.xlsx",1,"form-control",3,"change"],["class","field_icon",3,"src",4,"ngIf"],[1,"form-group","mt-3",2,"position","relative"],["for","file2",1,"mb-2"],["type","file","id","file2","placeholder","","accept",".html,.htm",1,"form-control",3,"change"],["src","/assets/html.png",1,"field_icon"],[1,"btn","btn-primary","mt-3",3,"disabled","click"],[1,"field_icon",3,"src"],["role","status",1,"spinner-border",2,"position","fixed","left","0","right","0","margin","auto"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0),t.YNc(1,M,1,0,"img",1),t.YNc(2,b,3,0,"a",2),t._UZ(3,"div",3),t.YNc(4,P,2,0,"button",4),t.YNc(5,O,2,1,"h6",5),t.qZA(),t.YNc(6,F,11,3,"div",6),t.YNc(7,S,14,2,"div",7),t.YNc(8,Z,1,0,"div",8),t.TgZ(9,"footer",9)(10,"div",10)(11,"div",11),t._uU(12," \xa9 2023 TVS Next. All Rights Reserved. "),t.qZA()()()),2&i&&(t.xp6(1),t.Q6J("ngIf",s.showCompage),t.xp6(1),t.Q6J("ngIf",!s.showCompage),t.xp6(2),t.Q6J("ngIf",(null==s.response?null:s.response.bert_cosine_similarity)&&s.showCompage&&!s.showFileMatchScore),t.xp6(1),t.Q6J("ngIf",(null==s.response?null:s.response.bert_cosine_similarity)&&s.showCompage&&s.showFileMatchScore),t.xp6(1),t.Q6J("ngIf",s.showCompage),t.xp6(1),t.Q6J("ngIf",!s.showCompage),t.xp6(1),t.Q6J("ngIf",s.showLoader))},dependencies:[h.mk,h.sg,h.O5],styles:['@charset "UTF-8";.change_list[_ngcontent-%COMP%]{background-color:#eceff1}.file_content_container[_ngcontent-%COMP%]{border:2px solid #28104E}.form-control[_ngcontent-%COMP%]{border:1px solid #28104E;padding-right:35px}label[_ngcontent-%COMP%]{color:#28104e}.btn-primary[_ngcontent-%COMP%]{background-color:#28104e;border:1px solid #eceff1;color:#eceff1}[_nghost-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;font-size:14px;color:#333;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:8px 0}p[_ngcontent-%COMP%]{margin:0}.spacer[_ngcontent-%COMP%]{flex:1}.toolbar[_ngcontent-%COMP%]{position:relative;top:0;left:0;right:0;height:60px;display:flex;align-items:center;background-color:#28104e;color:#fff;font-weight:600}.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 30px;cursor:pointer}.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]{height:40px;margin:0 8px}.toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]{height:40px;margin:0 16px}.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover{opacity:.8}.content[_ngcontent-%COMP%]{display:flex;margin:82px auto 32px;padding:0 16px;max-width:960px;flex-direction:column;align-items:center}svg.material-icons[_ngcontent-%COMP%]{height:24px;width:auto}svg.material-icons[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#888}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin-top:16px}.card[_ngcontent-%COMP%]{all:unset;border-radius:4px;border:1px solid #eee;background-color:#fafafa;height:40px;width:200px;margin:0 8px 16px;padding:16px;display:flex;flex-direction:row;justify-content:center;align-items:center;transition:all .2s ease-in-out;line-height:24px}.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child){margin-right:0}.card.card-small[_ngcontent-%COMP%]{height:16px;width:168px}.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card){cursor:pointer}.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover{transform:translateY(-3px);box-shadow:0 4px 17px #00000059}.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#696767}.card.highlight-card[_ngcontent-%COMP%]{background-color:#1976d2;color:#fff;font-weight:600;border:none;width:auto;min-width:30%;position:relative}.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:60px}svg#rocket[_ngcontent-%COMP%]{width:80px;position:absolute;left:-10px;top:-24px}svg#rocket-smoke[_ngcontent-%COMP%]{height:calc(100vh - 95px);position:absolute;top:10px;right:180px;z-index:-10}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover{color:#1976d2;text-decoration:none}a[_ngcontent-%COMP%]:hover{color:#125699}.terminal[_ngcontent-%COMP%]{position:relative;width:80%;max-width:600px;border-radius:6px;padding-top:45px;margin-top:8px;overflow:hidden;background-color:#0f0f10}.terminal[_ngcontent-%COMP%]:before{content:"\\2022\\2022\\2022";position:absolute;top:0;left:0;height:4px;background:rgb(58,58,58);color:#c2c3c4;width:100%;font-size:2rem;line-height:0;padding:14px 0;text-indent:4px}.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;color:#fff;padding:0 1rem 1rem;margin:0}.circle-link[_ngcontent-%COMP%]{height:40px;width:40px;border-radius:40px;margin:8px;background-color:#fff;border:1px solid #eeeeee;display:flex;justify-content:center;align-items:center;cursor:pointer;box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d;transition:1s ease-out}.circle-link[_ngcontent-%COMP%]:hover{transform:translateY(-.25rem);box-shadow:0 3px 15px #0003}footer[_ngcontent-%COMP%]{margin-top:8px;display:flex;align-items:center;line-height:20px}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center}.github-star-badge[_ngcontent-%COMP%]{color:#24292e;display:flex;align-items:center;font-size:12px;padding:3px 10px;border:1px solid rgba(27,31,35,.2);border-radius:3px;background-image:linear-gradient(-180deg,#fafbfc,#eff3f6 90%);margin-left:4px;font-weight:600}.github-star-badge[_ngcontent-%COMP%]:hover{background-image:linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);border-color:#1b1f2359;background-position:-.5em}.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{height:16px;width:16px;margin-right:4px}svg#clouds[_ngcontent-%COMP%]{position:fixed;bottom:-160px;left:-230px;z-index:-10;width:1920px}@media screen and (max-width: 767px){.card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%]{width:100%}.card[_ngcontent-%COMP%]:not(.highlight-card){height:16px;margin:8px 0}.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:72px}svg#rocket-smoke[_ngcontent-%COMP%]{right:120px;transform:rotate(-5deg)}}@media screen and (max-width: 575px){svg#rocket-smoke[_ngcontent-%COMP%]{display:none;visibility:hidden}}.highlight[_ngcontent-%COMP%]{color:red;font-weight:700}.selectedIndex[_ngcontent-%COMP%]{background-color:#ccc;padding-left:5px}.field_icon[_ngcontent-%COMP%]{right:6px;position:absolute;width:25px;bottom:6px}'],data:{animation:[u("scrollAnimation",[C(":enter",[f({opacity:0,transform:"translateY(-20px)"}),x("300ms",f({opacity:1,transform:"translateY(0)"}))])])]}})}return o})()}];let D=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#n=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(k),d.Bz]})}return o})(),A=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#n=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[h.ez,D,m.JF]})}return o})()}}]);