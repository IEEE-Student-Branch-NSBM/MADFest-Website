(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5],{389:function(t,e,n){},390:function(t,e,n){},392:function(t,e,n){"use strict";n(389)},396:function(t,e,n){"use strict";n(390)},398:function(t,e,n){},400:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{tasks:[{title:"Registration Opening",year:"06 / 04 / 2022",color:"#8dc63f",dotColor:"#8dc63f"},{title:"Registration Opening",year:"06 / 04 / 2022",color:"#19589d",dotColor:"#19589d"},{title:"Registration Opening",year:"06 / 04 / 2022",color:"#8dc63f",dotColor:"#8dc63f"},{title:"Registration Opening",year:"06 / 04 / 2022",color:"#19589d",dotColor:"#19589d"},{title:"Registration Opening",year:"06 / 04 / 2022",color:"#8dc63f",dotColor:"#8dc63f"}]}}},l=(n(392),n(86)),r=n(128),c=n.n(r),v=n(391),d=n(386),m=n(376),f=n(377),C=n(382),h=n(403),_=n(404),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-16"},[n("v-container",[n("v-row",{staticClass:"py-10"},[n("v-col",[n("h1",{staticClass:"Title"},[t._v("TIMELINE")])])],1),t._v(" "),n("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.tasks,(function(e,i){return n("v-timeline-item",{key:i,attrs:{"fill-dot":"",color:""+e.dotColor,small:""}},[n("v-card",{attrs:{color:""+e.color}},[n("v-card-title",{attrs:{color:""+e.color}},[n("h3",{staticClass:"white--text font-weight-light"},[t._v("\n              "+t._s(e.title)+"\n            ")])]),t._v(" "),n("v-card-subtitle",{attrs:{color:""+e.color}},[n("h4",{staticClass:"white--text font-weight-light"},[t._v("\n              "+t._s(e.year)+"\n            ")])])],1)],1)})),1)],1)],1)}),[],!1,null,"7b2e86ac",null);e.default=component.exports;c()(component,{VCard:v.a,VCardSubtitle:d.a,VCardTitle:d.c,VCol:m.a,VContainer:f.a,VRow:C.a,VTimeline:h.a,VTimelineItem:_.a})},401:function(t,e,n){"use strict";n.r(e);var o={},l=(n(396),n(86)),r=n(128),c=n.n(r),v=n(376),d=n(405),m=n(406),f=n(407),C=n(408),h=n(382),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainDiv"},[n("v-row",{staticClass:"py-8"},[n("v-col",[n("h1",{staticClass:"Title"},[t._v("FAQ")])])],1),t._v(" "),n("div",{staticClass:"d-flex justify-center px-4"},[n("v-expansion-panels",{staticStyle:{maxWidth:"800px"},attrs:{focusable:"",hover:"",dark:""}},t._l(5,(function(e,i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",{staticClass:"white--text",attrs:{color:"#19589d"}},[t._v("Item")]),t._v(" "),n("v-expansion-panel-content",{staticClass:"white--text",attrs:{color:"#39B54A"}},[t._v("\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r\n            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n            aliquip ex ea commodo consequat.\r\n          ")])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:v.a,VExpansionPanel:d.a,VExpansionPanelContent:m.a,VExpansionPanelHeader:f.a,VExpansionPanels:C.a,VRow:h.a})},409:function(t,e,n){"use strict";n(398)},411:function(t,e,n){"use strict";n.r(e);var o=n(402),l=n.n(o),r=n(400),c=n(401),v={components:{FlipCountdown:l.a,timeLine:r.default,faq:c.default}},d=(n(409),n(86)),m=n(128),f=n.n(m),C=n(386),h=n(376),_=n(377),x=n(378),w=n(192),y=n(163),V=n(380),A=n(382),T=n(47),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-sheet",{staticClass:"text-center",attrs:{color:"#ffffff",id:"home"}},[n("v-container",[n("v-row",{staticClass:"mt-8",attrs:{align:"center","no-gutters":""}},[n("v-col",{staticClass:"hidden-xs-only",attrs:{cols:"12",sm:"6","order-sm":"first"}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{attrs:{shrink:""}},[n("v-img",{attrs:{"mx-auto":"",width:"600",alt:"Brand Logo",src:"Assets/Home/Header.png"}})],1)],1)],1),t._v(" "),n("v-col",{staticClass:"px-8 HeaderText",attrs:{cols:"12",sm:"6","order-sm":"last"}},[n("div",{staticClass:"pa-0 MobileText"},[t._v("Mobile")]),t._v(" "),n("div",{staticClass:"pa-0 ApplicationText"},[t._v("Application")]),t._v(" "),n("div",{staticClass:"pa-0 DevelopmentText"},[t._v("Development")]),t._v(" "),n("div",{staticClass:"pa-0 pb-8 CompetitionText"},[t._v("\n            Competition "),n("i",{staticClass:"mx-1"},[t._v(" & ")]),t._v(" Exhibition\n          ")]),t._v(" "),n("div",{staticClass:"hidden-xs-only"},[n("client-only",[n("flip-countdown",{attrs:{deadline:"2022-06-25 00:00:00"}})],1),t._v(" "),n("button",{staticClass:"button-2",attrs:{role:"button"}},[n("span",[t._v("Register Now")])])],1)])],1),t._v(" "),n("div",{staticClass:"hidden-sm-and-up"},[n("client-only",[n("flip-countdown",{attrs:{deadline:"2022-06-25 00:00:00"}})],1),t._v(" "),n("button",{staticClass:"button-2",attrs:{role:"button"}},[n("span",[t._v("Register Now")])])],1)],1)],1),t._v(" "),n("v-sheet",{staticClass:"pt-8 pb-8 text-right",attrs:{color:"#19589D",id:"about"}},[n("v-container",[n("v-row",{staticClass:"mt-8",attrs:{align:"center","no-gutters":""}},[n("v-col",{staticClass:"px-sm-0",attrs:{cols:"12",sm:"6"}},[n("v-card-title",{staticClass:"pa-0 pb-2 cardTitle"},[t._v("What is MAD-FEST?")]),t._v(" "),n("v-card-text",{staticClass:"pa-0 pb-2 text-justify cardSubtitle py-8"},[t._v("\n            MAD-Fest 2022 is the first- ever Mobile Application Development\n            base competition and exhibition organized by Department of\n            Software Engineering & Computer Science in Faculty of Computing,\n            NSBM with IEEE Computer Society Student Branch Chapter of NSBM.Not\n            only that, we organized MAD Awareness and Preparation sessions for\n            all MAD enthusiast techies.We welcome all freshers to Mobile\n            Application Development as well as who would like to brush up\n            their own knowledge to MAD -Fest Awareness & Preparation\n            sessions.Do u look right place to give a value for your valuable\n            projects? Join with us and give a great value for your priceless\n            effort.\n          ")])],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{attrs:{shrink:""}},[n("v-img",{attrs:{"mx-auto":"",width:"450",alt:"Brand Logo",src:"Assets/Home/whatis.png"}})],1)],1)],1)],1),t._v(" "),n("v-row",{staticClass:"dateTime mt-7"},[n("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",sm:"4"}},[n("v-icon",{staticClass:"mr-2 mb-2",attrs:{color:"white",size:"35"}},[t._v("mdi-calendar-month-outline")]),t._v("25 of May 2022\n        ")],1),t._v(" "),n("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",sm:"4"}},[n("v-icon",{staticClass:"mr-2 mb-1",attrs:{color:"white",size:"35"}},[t._v("mdi-clock-time-nine-outline ")]),t._v("09.00 AM Onwards")],1),t._v(" "),n("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",sm:"4"}},[n("v-icon",{staticClass:"mr-2",attrs:{color:"white",size:"35"}},[t._v("mdi-map-marker-outline ")]),t._v("Faculty of Computing")],1)],1)],1)],1),t._v(" "),n("timeLine",{attrs:{id:"timeline"}}),t._v(" "),n("faq",{attrs:{id:"faq"}})],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCardText:C.b,VCardTitle:C.c,VCol:h.a,VContainer:_.a,VFlex:x.a,VIcon:w.a,VImg:y.a,VLayout:V.a,VRow:A.a,VSheet:T.a})}}]);