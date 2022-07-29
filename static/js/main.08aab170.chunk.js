(this["webpackJsonpaisis-enlistment-helper"]=this["webpackJsonpaisis-enlistment-helper"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),s=c(10),r=c.n(s),i=(c(15),c(6)),l=c(4),a=c(24),d=c(8),j=c(3),u=c(2),h=c(0);var b=function(e){var t=e.cStyle,c=void 0===t?{}:t,o=e.text,n=e.isOutlined,s=void 0!==n&&n,r=e.onClick,i=e.themeColor,l=void 0===i?"#3F51B5":i;return e.textColor,Object(h.jsx)("button",{style:Object(u.a)(Object(u.a)({},c),{},{color:s?l:"white",backgroundColor:s?"transparent":l,border:s?"1px solid ".concat(l):"none"}),onClick:r,children:o})},p=c.p+"static/media/sc1.a3a88623.png";var x=function(e){var t=e.keyCode,c=e.onAddClick,n=e.onExitClick,s=Object(o.useState)(""),r=Object(l.a)(s,2),i=r[0],a=r[1];return Object(h.jsx)("div",{className:"modal",children:Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsx)("h5",{style:{margin:0,alignSelf:"flex-start"},children:"How to add classes from AISIS:"}),Object(h.jsxs)("ol",{style:{paddingLeft:"24px",alignSelf:"flex-start"},children:[Object(h.jsxs)("li",{children:["Go to ",Object(h.jsx)("strong",{children:"AISIS Online"})]}),-1===t?Object(h.jsx)("li",{children:"Find your list of pre-enlisted classes"}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("li",{children:["Navigate to ",Object(h.jsx)("strong",{children:"Class Schedule"})]}),Object(h.jsxs)("li",{children:["Click the ",Object(h.jsx)("strong",{children:"Display Class Schedule"})," button after choosing any department, course, or category number"]})]}),Object(h.jsx)("li",{children:"Copy the entire row (or entire rows for multiple courses) from the table on AISIS"}),Object(h.jsxs)("li",{children:["Paste the text in the textbox below",Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Do not copy the table headings!"}),Object(h.jsxs)("li",{children:["Make sure that each row/class are on separate lines! Example:",Object(h.jsx)("img",{src:p,alt:"Sample of textarea with input",style:{width:"100%",height:"auto",filter:"drop-shadow(0 0 2px black)"}})]})]})]})]}),Object(h.jsx)("textarea",{rows:"8",className:"copy-text",placeholder:"Paste here...",value:i,style:{overflowX:"auto",whiteSpace:"nowrap"},wrap:"none",onChange:function(e){return a(e.target.value)}}),Object(h.jsx)(b,{cStyle:{width:"128px",margin:"32px 0 16px 0"},text:"Add",onClick:function(){return c(t,i)}}),Object(h.jsx)(b,{cStyle:{width:"128px"},text:"Cancel",isOutlined:!0,onClick:n})]})})};var O=function(e){var t=e.cStyle,c=void 0===t?{}:t,o=e.icon,n=e.onClick,s=void 0===n?function(){}:n,r=e.bgColor,i=void 0===r?"white":r,l=e.color,a=void 0===l?"black":l,d=e.text;return Object(h.jsxs)("button",{style:Object(u.a)({display:"flex",flexFlow:"row nowrap",alignItems:"center",border:"none",borderRadius:"8px",backgroundColor:i,color:a},c),onClick:s,children:[o,Object(h.jsx)("p",{style:{fontWeight:600},children:d})]})};var f=function(e){var t=e.color,c=(e.onAddClick,e.onCopyClick),o=e.onDeleteClick,n=e.showDelete,s=void 0===n||n,r=e.isPreEnlisted,i=void 0!==r&&r,l={margin:"4px 8px"},a={marginLeft:"8px",marginRight:"auto"};return Object(h.jsxs)("div",{className:"input-header",style:{backgroundColor:t,position:"sticky",top:0},children:[i?Object(h.jsx)("h5",{style:Object(u.a)(Object(u.a)({},a),{},{marginTop:0,marginBottom:0,color:"white"}),children:"Pre-Enlisted Classes"}):Object(h.jsxs)("div",{className:"color-indicator",style:a,children:[Object(h.jsx)("div",{style:{backgroundColor:t,width:"24px",height:"24px",clipPath:"circle(50%)"}}),Object(h.jsx)("p",{children:t})]}),Object(h.jsx)(O,{cStyle:l,icon:Object(h.jsx)(j.b,{}),text:"Paste from AISIS",onClick:c}),s&&!i&&Object(h.jsx)(O,{cStyle:l,icon:Object(h.jsx)(j.d,{}),text:"Delete Group",onClick:o})]})};var m=function(e){var t=e.row,c=e.onSelect,o=e.onDelete;return Object(h.jsxs)("div",{className:"input-row ".concat(t.free_slots>0?"":"disabled"),children:[Object(h.jsx)("input",{type:"radio",checked:t.selected,onChange:c}),Object(h.jsx)("p",{children:t.code}),Object(h.jsx)("p",{children:t.section}),Object(h.jsx)("p",{children:t.name}),Object(h.jsx)("p",{children:t.time}),Object(h.jsx)("p",{children:t.room}),Object(h.jsx)("p",{children:t.instructor}),Object(h.jsx)("p",{children:"".concat(t.free_slots,"/").concat(t.max_slots," Slots")}),Object(h.jsx)(j.c,{style:{cursor:"pointer",marginLeft:"auto"},onClick:o})]})};var v=function(e){var t=e.row,c=e.onDelete;return Object(h.jsxs)("div",{className:"input-row",children:[Object(h.jsx)("p",{children:t.code}),Object(h.jsx)("p",{children:t.section}),Object(h.jsx)("p",{children:t.title}),Object(h.jsx)("p",{children:t.instructor}),Object(h.jsx)("p",{children:t.schedLoc}),Object(h.jsx)(j.c,{style:{cursor:"pointer",marginLeft:"auto"},onClick:c})]})};var g=function(e){var t=e.course,c=e.start,o={gridRowStart:2*(t.start-c)+2,gridRowEnd:2*(t.end-c)+2};return Object(h.jsxs)("div",{className:"course-block",style:o,children:[Object(h.jsx)("div",{className:"course-block-bg",style:{backgroundColor:t.color?t.color:"beige"}}),Object(h.jsx)("p",{className:"time start",children:t.startTime}),Object(h.jsx)("p",{className:"course-code",children:t.code}),Object(h.jsx)("p",{className:"time end",children:t.endTime})]})};var y=function(e){for(var t=e.data,c=["M","T","W","Th","F","S"],o={gridTemplateRows:"48px repeat(".concat(2*(t.end-t.start),", 1fr)")},n=[Object(h.jsx)("p",{className:"heading"},"TIMETABLE-HEADING")],s=t.start;s<t.end;s+=.5)Number.isInteger(s)&&n.push(Object(h.jsx)("p",{className:"timestamp",style:{gridRowStart:2*(s-t.start)+2,gridRowEnd:2*(s-t.start)+3},children:s},"TIMETABLE-TIME_".concat(s)));return Object(h.jsxs)("div",{className:"timetable",children:[Object(h.jsx)("div",{style:Object(u.a)(Object(u.a)({},o),{},{alignContent:"flex-start"}),children:n}),t.data.map((function(e,n){return Object(h.jsxs)("div",{style:o,children:[Object(h.jsx)("p",{className:"heading",children:c[n]}),e.map((function(e){return Object(h.jsx)(g,{course:e,start:t.start},"TIMETABLE-BLOCK_".concat(c[n],"_").concat(e.code,"_").concat(e.uuid))}))]},"TIMETABLE-COL_".concat(c[n]))}))]})};c(18),c(19),c(20),c(21);var C=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(o.useState)([{color:Object(d.randomColor)(),keyCode:Object(a.a)(),courses:[]}]),r=Object(l.a)(s,2),u=r[0],b=r[1],p=Object(o.useState)({start:8,end:17,data:[]}),O=Object(l.a)(p,2),g=O[0],C=O[1];Object(o.useEffect)((function(){var e=24,t=0,o=[[],[],[],[],[],[]];c.forEach((function(c){var n=c.schedLoc,s=n.split("/")[0].split(" ")[0],r=[];s.includes("TUTORIAL")?r.fill(!1,0,6):s.includes("D")||s.includes("DAILY")?r.fill(!0,0,6):s.includes("M-TH")?r=[!0,!1,!1,!0,!1,!1]:s.includes("T-F")?r=[!1,!0,!1,!1,!0,!1]:s.includes("W")?r=[!1,!1,!0,!1,!1,!1]:s.includes("SAT")&&(r=[!1,!1,!1,!1,!1,!0]);var i=parseInt(n.split("/")[0].split(" ")[1].split("-")[0]),l=parseInt(n.split("/")[0].split(" ")[1].split("-")[1]),a=Math.floor(i/100)+i%100/60,d=Math.floor(l/100)+l%100/60;a<e&&(e=a),d>t&&(t=d);for(var j=Math.floor(i/100),u=Math.floor(l/100),h=0;h<6;h++)r[h]&&(5===h&&o.length<=5&&(o[h]=[]),o[h].push({color:c.color,code:c.code,start:a,end:d,startTime:"".concat(j>12?j-12:j,":").concat(Math.floor(i%100).toString().padStart(2,"0")," ").concat(i<1200?"AM":"PM"),endTime:"".concat(u>12?u-12:u,":").concat(Math.floor(l%100).toString().padStart(2,"0")," ").concat(l<1200?"AM":"PM"),uuid:c._uuid}))})),u.forEach((function(c){for(var n=0;n<c.courses.length;n++)if(c.courses[n].selected){var s=c.courses[n].time.split(" ")[0],r=[];s.includes("TUTORIAL")?r.fill(!1,0,6):s.includes("D")||s.includes("DAILY")?r.fill(!0,0,6):s.includes("M-TH")?r=[!0,!1,!1,!0,!1,!1]:s.includes("T-F")?r=[!1,!0,!1,!1,!0,!1]:s.includes("W")?r=[!1,!1,!0,!1,!1,!1]:s.includes("SAT")&&(r=[!1,!1,!1,!1,!1,!0]);var i=parseInt(c.courses[n].time.split(" ")[1].split("-")[0]),l=parseInt(c.courses[n].time.split(" ")[1].split("-")[1]),a=Math.floor(i/100)+i%100/60,d=Math.floor(l/100)+l%100/60;a<e&&(e=a),d>t&&(t=d);for(var j=Math.floor(i/100),u=Math.floor(l/100),h=0;h<6;h++)r[h]&&o[h].push({color:c.color,code:c.courses[n].code,start:a,end:d,startTime:"".concat(j>12?j-12:j,":").concat((i%100).toString().padStart(2,"0")," ").concat(a<12?"AM":"PM"),endTime:"".concat(u>12?u-12:u,":").concat((l%100).toString().padStart(2,"0")," ").concat(d<12?"AM":"PM"),uuid:c.courses[n]._uuid});break}})),C({start:e,end:t,data:o})}),[c,u]);var k=Object(o.useState)(null),S=Object(l.a)(k,2),w=(S[0],S[1],Object(o.useState)(null)),I=Object(l.a)(w,2),T=I[0],E=I[1],A=function(e,t,o){if(-1!==e){var s=u;s.forEach((function(c){if(c.keyCode===e)for(var n=c.courses.length-1;n>=0;n--)c.courses[n].code===t&&c.courses[n].section===o&&c.courses.splice(n,1)})),b(Object(i.a)(s))}else{for(var r=c,l=r.length-1;l>=0;l--)r[l].code===t&&r[l].section&&r.splice(l,1);n(Object(i.a)(r))}},M={padding:"32px"},_={textAlign:"center",margin:"0 auto",maxWidth:"512px"};return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsxs)("div",{style:{overflowY:"scroll"},children:[null!=T&&Object(h.jsx)(x,{keyCode:T,onAddClick:function(e,t){E(null);var o=t.split("\n"),s=[];if(-1!==e){for(var r=0;r<o.length;r++)o[r]=o[r].split("\t");for(var l=0;l<o.length-1;l++)if(5===o[l].length&&10===o[l+1].length){o[l][4]+=" "+o[l+1][0];for(var j=1;j<10;j++)o[l].push(o[l+1][j])}o.forEach((function(e){if(14===e.length){var t=e[4].split(" ")[0].toUpperCase(),c=[];t.includes("TUTORIAL")?c.fill(!1,0,6):t.includes("D")||t.includes("DAILY")?c.fill(!0,0,6):t.includes("M-TH")?c=[!0,!1,!1,!0,!1,!1]:t.includes("T-F")?c=[!1,!0,!1,!1,!0,!1]:t.includes("W")?c=[!1,!1,!0,!1,!1,!1]:t.includes("SAT")&&(c=[!1,!1,!1,!1,!1,!0]);var o=parseInt(e[4].split(" ")[1].split("-")[0]),n=parseInt(e[4].split(" ")[1].split("-")[1]);s.push({code:e[0],section:e[1],name:e[2],units:e[3],time:e[4],room:e[5],instructor:e[6],max_slots:e[7],lang:e[8],level:e[9],free_slots:e[10],remarks:e[11],s:e[12],p:e[13],selected:!1,_uuid:Object(a.a)(),_days:c,_start:Math.floor(o/100)+o%100/100,_end:Math.floor(n/100)+o%100/100})}}));var h=u;h.forEach((function(t){var c;t.keyCode===e&&(c=t.courses).push.apply(c,s)})),h.length>0&&h[h.length-1].courses.length>0&&h.push({color:Object(d.randomColor)(),keyCode:Object(a.a)(),courses:[]}),b(h)}else{var p=c;o.forEach((function(e){var t=e.split("\t");8===t.length&&s.push({code:t[0],units:t[1],title:t[2],section:t[3],instructor:t[4],schedLoc:t[5],credit:t[6],remarks:t[7],color:Object(d.randomColor)(),_uuid:Object(a.a)()})})),n([].concat(Object(i.a)(p),s))}},onExitClick:function(){return E(null)}}),Object(h.jsx)("header",{children:Object(h.jsx)("h3",{children:"Enlistment Scheduler"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{onAddClick:function(){},onCopyClick:function(){return E(-1)},isPreEnlisted:!0}),c.length>0?c.map((function(e){return Object(h.jsx)(v,{row:e,onDelete:function(){return A(-1,e.code,e.section)}},"PRE-ENLISTED_".concat(e.code,"_").concat(e.section,"_").concat(e._uuid))})):Object(h.jsx)("div",{style:M,children:Object(h.jsxs)("p",{style:_,children:["Looks like you haven't added any pre-enlisted classes yet! If you have any, click the ",Object(h.jsx)("strong",{children:"Paste from AISIS"})," button to add."]})})]}),u.map((function(e,t){return Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{color:e.color,onAddClick:function(){},onCopyClick:function(){return E(e.keyCode)},onDeleteClick:function(){return t=e.keyCode,b(u.filter((function(e){return e.keyCode!==t})));var t},showDelete:u.length>1&&t!=u.length-1},"INPUT-HEADER_".concat(e.code)),e.courses.length>0?e.courses.map((function(t){return Object(h.jsx)(m,{row:t,onSelect:function(){return function(e,t,c){var o=u;o.forEach((function(o){o.keyCode===e&&o.courses.forEach((function(e){e.code===t&&e.section===c?e.selected=!0:e.selected=!1}))})),b(Object(i.a)(o))}(e.keyCode,t.code,t.section)},onDelete:function(){return A(e.keyCode,t.code,t.section)}},"INPUT-ROW_".concat(e.keyCode,"_").concat(t.code,"_").concat(t.section,"_").concat(t._uuid))})):Object(h.jsx)("div",{style:M,children:Object(h.jsxs)("p",{style:_,children:["Click the ",Object(h.jsx)("strong",{children:"Paste from AISIS"})," button to add your classes!"]})})]},"INPUT-GROUP_".concat(e.keyCode))})),Object(h.jsx)("div",{id:"bottom"})]}),Object(h.jsx)(y,{data:g}),Object(h.jsx)("a",{className:"scroll-to-bot",href:"#bottom",children:Object(h.jsx)("div",{children:Object(h.jsx)(j.a,{size:"24px"})})}),Object(h.jsx)("footer",{children:Object(h.jsx)("p",{children:"\xa9 Emman Evangelista \u2022 v.1.0.4"})})]})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.08aab170.chunk.js.map