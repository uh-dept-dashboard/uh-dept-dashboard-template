(this["webpackJsonpuh-dept-dashboard-template"]=this["webpackJsonpuh-dept-dashboard-template"]||[]).push([[0],{201:function(e,a,t){},310:function(e,a,t){},313:function(e,a,t){},491:function(e,a,t){},492:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(46),i=t.n(l),o=(t(309),t(310),t(252)),c=(t(313),t(272)),u=t(504),h=t(507),s=t(270),d=t(271),m=t(503),E=t.p+"static/media/uh-logo.1f7898fc.png",p=t(112);function v(){var e=r.a.useState(!1),a=Object(c.a)(e,2),t=a[0],n=a[1];return r.a.createElement(u.a,{onClose:function(){return n(!1)},onOpen:function(){return n(!0)},open:t,trigger:r.a.createElement(h.a,{basic:!0},"Export")},r.a.createElement(u.a.Header,null,"Export Data"),r.a.createElement(u.a.Content,null,r.a.createElement(u.a.Description,null,"If this button actually worked, then clicking it would download all the data in this dashboard for personal exploration.")),r.a.createElement(u.a.Actions,null,r.a.createElement(h.a,{content:"Dismiss",onClick:function(){return n(!1)},positive:!0})))}var f,g=function(e){var a=e.title,t=void 0===a?"UH Dept Dashboard":a;return r.a.createElement(s.a,{style:{marginBottom:"20px"},attached:"top",borderless:!0,stackable:!0},r.a.createElement(s.a.Item,null,r.a.createElement(d.a,{size:"mini",src:E})),r.a.createElement(s.a.Item,null,r.a.createElement("span",{className:"uh-green",style:{fontWeight:800,fontSize:"24px"}},t)),r.a.createElement(s.a.Item,{as:p.b,activeClassName:"active",exact:!0,to:"/",key:"academic-year"},"Academic Year View"),r.a.createElement(s.a.Item,null,r.a.createElement(m.a,{text:"Initiatives View"},r.a.createElement(m.a.Menu,null,r.a.createElement(m.a.Item,{text:"Diversity",as:p.b,exact:!0,to:"/diversity"})))),r.a.createElement(s.a.Item,null,r.a.createElement(v,null)))},T=t(502),y=t(506),S=t(505),b=(t(201),t(273)),R=t(104),M=t(508),D=t(257),A=new function e(){Object(D.a)(this,e),this.color=void 0,this.chartWidth=void 0,this.chartHeight=void 0,this.color={},this.color.green="#376551",this.color.purple="#7C64E8",this.color.lightGreen="#4DE8A5",this.color.red="#E84F35",this.color.yellow="#E8D541",this.chartWidth=325,this.chartHeight=100};!function(e){e.TrendLineSpark="TrendLineSpark",e.BarSpark="BarSpark",e.PieSpark="PieSpark",e.DemographicPieSpark="DemographicPieSpark",e.LabeledBarSpark="LabeledBarSpark"}(f||(f={}));var I=t(13);function N(e){var a=e.payload;return e.active?(console.log("payload",a),r.a.createElement("div",{className:"custom-tooltip"},r.a.createElement("p",{className:"label"},"Year: ","".concat(a[0].payload.year)),r.a.createElement("p",{className:"intro"},"Value: ","".concat(a[0].payload.value)))):null}function w(e){return e.payload.year===e.payload.currYear&&(e.stroke="red",e.fill="red"),r.a.createElement(I.d,e)}var P,U,k,O,B=function(e){var a=e.data;return r.a.createElement(I.g,{width:A.chartWidth,height:A.chartHeight,data:a},r.a.createElement(I.f,{isAnimationActive:!1,type:"monotone",dataKey:"value",stroke:A.color.green,strokeWidth:2,dot:w}),r.a.createElement(I.j,{content:r.a.createElement(N,null)}))},L=function(e){var a=e.data;return r.a.createElement(I.b,{width:A.chartWidth,height:A.chartHeight,data:a},r.a.createElement(I.a,{dataKey:"value",fill:A.color.green}),r.a.createElement(I.j,null))},x=function(e){var a=e.data;return r.a.createElement(I.b,{width:A.chartWidth,height:A.chartHeight,data:a},r.a.createElement(I.a,{dataKey:"value",fill:A.color.green}),r.a.createElement(I.k,{dataKey:"label"}),r.a.createElement(I.j,null))},C=function(e){var a=e.data;return r.a.createElement(I.i,{width:A.chartWidth,height:A.chartHeight},r.a.createElement(I.h,{data:a,dataKey:"value",label:function(e){return e.label},fill:A.color.green,isAnimationActive:!1,cx:A.chartWidth/2,cy:A.chartHeight/2,outerRadius:A.chartHeight/4}),r.a.createElement(I.j,null))},H=function(e){var a=e.data,t=a.slice(0,2),n=a.slice(2,a.length);return r.a.createElement(I.i,{width:A.chartWidth,height:A.chartHeight},r.a.createElement(I.h,{data:t,dataKey:"value",label:function(e){return e.label},fill:A.color.green,isAnimationActive:!1,cx:A.chartWidth/4,cy:A.chartHeight/2,outerRadius:A.chartHeight/4}),r.a.createElement(I.h,{data:n,dataKey:"value",fill:A.color.green,isAnimationActive:!1,cx:4*A.chartWidth/5,cy:A.chartHeight/2,outerRadius:A.chartHeight/4,label:function(e){return e.label}}),r.a.createElement(I.j,null))};!function(e){e.Dollars="$",e.Percent="%",e.Number="Number"}(P||(P={})),function(e){e.SSH="SSH",e.FACULTYFTE="FACULTYFTE",e.EXTRAMURALFUNDING="EXTRAMURALFUNDING",e.RETENTION="RETENTION",e.PUBLICATIONS="PUBLICATIONS",e.GRADUATESTUDENTSUPPORTFTE="GRADUATESTUDENTSUPPORTFTE",e.GRADUATES="GRADUATES",e.TIMETODEGREE="TIMETODEGREE",e.ADMISSIONS="ADMISSIONS",e.COURSEEVALUATIONRESPONSE="COURSEEVALUATIONRESPONSE",e.COURSEEVALUATIONRESPONSE2="COURSEEVALUATIONRESPONSE2",e.EXITSURVEYRESPONSE="EXITSURVEYRESPONSE",e.STAKEHOLDERSURVEYRESPONSE="STAKEHOLDERSURVEYRESPONSE",e.INTERNSHIP="INTERNSHIP",e.UNDERGRADRESEARCHEXPERIENCE="UNDERGRADRESEARCHEXPERIENCE"}(U||(U={})),function(e){e.BYFACULTY="BYFACULTY",e.DEMOGRAPHIC="DEMOGRAPHIC",e.INTERNSHIP="INTERNSHIP",e.UNDERGRADUATERESEARCHEXPERIENCE="UNDERGRADUATERESEARCHEXPERIENCE",e.PUBLICATIONTIER="PUBLICATIONTIER",e.TIMETODEGREE="TIMETODEGREE",e.DEGREEPROGRAM="DEGREEPROGRAM",e.NUMBERSEMESTERS="NUMBERSEMESTERS",e.COURSEEVALUATION="COURSEEVALUATION",e.EXITSURVEY="EXITSURVEY",e.STAKEHOLDERSURVEY="STAKEHOLDERSURVEY"}(k||(k={})),function(e){e.DIVERSITYTIMELINE="DIVERSITYTIMELINE",e.MARKETABILITYTIMELINE="MARKETABILITYTIMELINE"}(O||(O={}));var Y=function(e){var a,t=e.name,n=e.description,l=e.year,i=e.value,o=e.priorDelta,c=e.nextDelta,u=e.unit,h=e.sparks,s=(a=i)<1e3?"".concat(a):a<1e6?"".concat((a/1e3).toPrecision(3),"K"):"".concat((a/1e6).toPrecision(3),"M");u&&(u===P.Percent?s="".concat(s,"%"):u===P.Dollars&&(s="$".concat(s)));var d=o&&o<0?"".concat(o):"+".concat(o),m=c&&c<0?"".concat(c):"+".concat(c);return r.a.createElement(S.a,{raised:!0},r.a.createElement(S.a.Content,null,r.a.createElement(b.a,null,r.a.createElement(b.a.Column,{width:4,verticalAlign:"middle",textAlign:"right",style:{paddingLeft:"0px",paddingRight:"35px"}},l>2015?r.a.createElement("div",null,r.a.createElement(R.a,{name:"arrow left"})," ",d,"% ",l-1," "):""),r.a.createElement(b.a.Column,{style:{paddingLeft:0,paddingRight:0},width:8},r.a.createElement("div",{className:"measureHeader",style:{textAlign:"center"}},r.a.createElement(M.a,null,r.a.createElement(M.a.Label,null,t),r.a.createElement(M.a.Value,null,s)))),r.a.createElement(b.a.Column,{width:4,verticalAlign:"middle",textAlign:"left",style:{paddingLeft:"35px",paddingRight:"0px"}},l<2019?r.a.createElement("div",null," ",m,"% ",r.a.createElement(R.a,{name:"arrow right"})," ",l+1," "):"")),r.a.createElement(S.a.Description,{style:{paddingTop:"10px",minHeight:"75px"}},n),h?h.map((function(e,a){return r.a.createElement("div",{key:a,style:{paddingTop:"10px"}},r.a.createElement(S.a.Description,{textAlign:"center"},e.chartTitle),e.chartType===f.TrendLineSpark?r.a.createElement(B,{data:e.chartData}):"",e.chartType===f.BarSpark?r.a.createElement(L,{data:e.chartData}):"",e.chartType===f.PieSpark?r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(C,{data:e.chartData})):"",e.chartType===f.DemographicPieSpark?r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(H,{data:e.chartData})):"",e.chartType===f.LabeledBarSpark?r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(x,{data:e.chartData})):"")})):""))},G=t(269);function K(e,a,t,n){var r=a[t],l=r.trend[e].value;if(r.trend["".concat(e+n)]){var i=r.trend["".concat(e+n)].value;return Math.floor((i-l)/l*100)}return 0}function V(e,a,t,n){var r,l=n[e],i=l.name,o=l.trend[t].value,c=l.description,u=l.unitType,h=K(t,n,e,-1),s=K(t,n,e,1),d=[a-4,a-3,a-2,a-1,a].map((function(e){return l.trend["".concat(e)]})),m=Object(G.a)(d);try{for(m.s();!(r=m.n()).done;){r.value.currYear=t}}catch(v){m.e(v)}finally{m.f()}var E={chartType:f.TrendLineSpark,chartTitle:"Five year trend",chartData:d},p=l.breakdowns[0];return{latestYear:a,name:i,value:o,description:c,unit:u,year:t,priorDelta:h,nextDelta:s,sparks:[E,{chartType:p.chartType,chartTitle:p.chartTitle,chartData:p.chartData[t]}]}}var F=function(e){var a=function(e,a,t){for(var n=[],r=0,l=Object.values(U);r<l.length;r++){var i=l[r];t[i]&&n.push(V(i,e,a,t))}return n}(e.latestYear,e.year,e.ayPageDB);return r.a.createElement(S.a.Group,{centered:!0},a.map((function(e,a){return r.a.createElement(Y,Object.assign({key:a},e))})))},X=(t(491),function(e){var a=e.latestYear,t=e.ayPageDB,n=[a-4,a-3,a-2,a-1,a].map((function(e){return{menuItem:"".concat(e),render:function(){return r.a.createElement(y.a.Pane,null,r.a.createElement(F,{latestYear:a,year:e,ayPageDB:t}))}}}));return r.a.createElement(y.a,{panes:n,defaultActiveIndex:4})}),W=function(e){var a=e.latestYear,t=e.ayPageDB;return r.a.createElement(T.a,{fluid:!0,style:{paddingLeft:"10px",paddingRight:"10px"}},r.a.createElement(X,{latestYear:a,ayPageDB:t}))},j=t(16),q=t(510),z=function(e){var a=e.data,t=e.dataKey,n=e.hideXAxis,l=void 0===n||n,i=e.domain,o=void 0===i?[0,"auto"]:i,c=e.title,u=A.color.green,h=A.color.purple;return r.a.createElement("div",null,r.a.createElement(q.a,{textAlign:"center",as:"h4"},c),r.a.createElement(I.g,{width:600,height:200,data:a,syncId:"anyId",margin:{top:0,right:10,left:0,bottom:10}},r.a.createElement(I.c,{strokeDasharray:"3 3"}),r.a.createElement(I.l,{domain:o}),r.a.createElement(I.j,null),r.a.createElement(I.f,{type:"monotone",dataKey:t[0],stroke:u,fill:u}),t[1]&&r.a.createElement(I.f,{type:"monotone",dataKey:t[1],stroke:h,fill:h}),r.a.createElement(I.e,{align:"center",verticalAlign:"bottom",height:36}),r.a.createElement(I.k,{dataKey:"name",hide:l})))};function J(e){var a=e.payload;return e.active?(console.log("payload",a),r.a.createElement("div",{className:"custom-tooltip"},r.a.createElement("p",{className:"label"},"".concat(a&&a[0]&&a[0].payload.intervention)))):null}var $=function(e){var a=e.data,t=e.title,n=A.color.green;return r.a.createElement("div",null,r.a.createElement(q.a,{textAlign:"center",as:"h4"},t),r.a.createElement(I.g,{width:600,height:200,data:a,syncId:"anyId",margin:{top:0,right:10,left:0,bottom:10}},r.a.createElement(I.l,{domain:[0,2],interval:-1}),r.a.createElement(I.j,{content:r.a.createElement(J,null)}),r.a.createElement(I.f,{type:"monotone",dataKey:"index",stroke:n,fill:n}),r.a.createElement(I.k,{dataKey:"name"})))},Q=function(e){e.latestYear,e.timelinePageDB;return r.a.createElement(T.a,{style:{paddingLeft:"10px",paddingRight:"10px"}},r.a.createElement("div",null,r.a.createElement(q.a,{as:"h2"},"Initiative: Diversity"),r.a.createElement("p",null,"The goal of the Diversity initiative is to increase both the numbers and percentage of women and Native Hawaiians graduating from this academic unit. "),r.a.createElement(b.a,null,r.a.createElement(b.a.Row,{centered:!0},r.a.createElement(z,{title:"Graduates (%)",data:[{name:"2015",women:17,nativehawaiians:12},{name:"2016",women:24,nativehawaiians:10},{name:"2017",women:27,nativehawaiians:22},{name:"2018",women:37,nativehawaiians:24},{name:"2019",women:40,nativehawaiians:28}],domain:[0,100],dataKey:["women","nativehawaiians"]}),r.a.createElement(z,{title:"Admitted (%)",data:[{name:"2015",women:21,nativehawaiians:18},{name:"2016",women:34,nativehawaiians:22},{name:"2017",women:47,nativehawaiians:24},{name:"2018",women:45,nativehawaiians:18},{name:"2019",women:57,nativehawaiians:14}],domain:[0,100],dataKey:["women","nativehawaiians"]}),r.a.createElement(z,{title:"Exit Survey Response: As a woman (Native Hawaiian), I felt supported in this program.",data:[{name:"2015",women:1.4,nativehawaiians:1.8},{name:"2016",women:1.2,nativehawaiians:1.2},{name:"2017",women:1.4,nativehawaiians:1.5},{name:"2018",women:2.5,nativehawaiians:1.8},{name:"2019",women:3.7,nativehawaiians:2.4}],domain:[1,5],dataKey:["women","nativehawaiians"],hideXAxis:!1}),r.a.createElement($,{title:"Interventions",data:[{name:"2015",value:10,intervention:"intervention1"},{name:"2016",index:1,value:10,intervention:"Established BIPOC student group."},{name:"2017",value:12,intervention:"intervention3"},{name:"2018",index:1,value:13,intervention:"Created Dean's office position for diversity"},{name:"2019",value:14,intervention:"intervention5"}]})))))},Z=function(e){var a=e.title,t=e.latestYear,n=e.dashboardDB;return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement("title",null,a)),r.a.createElement(g,{title:a}),r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/diversity"},r.a.createElement(Q,{latestYear:t,timelinePageDB:n.timelinePageDB})),r.a.createElement(j.a,{path:"/"},r.a.createElement(W,{latestYear:t,ayPageDB:n.ayPageDB})))))},_=[2015,2016,2017,2018,2019];function ee(){for(var e={},a=0,t=_;a<t.length;a++){e[t[a]]=he()}return[{chartTitle:"By funding",chartType:f.PieSpark,chartData:e}]}function ae(){for(var e={},a=0,t=_;a<t.length;a++){e[t[a]]=se()}return[{chartTitle:"By location",chartType:f.PieSpark,chartData:e}]}function te(){for(var e={},a=0,t=_;a<t.length;a++){e[t[a]]=me()}return[{chartTitle:"By satisfaction",chartType:f.LabeledBarSpark,chartData:e}]}function ne(){for(var e={},a=0,t=_;a<t.length;a++){e[t[a]]=de()}return[{chartTitle:"By response",chartType:f.LabeledBarSpark,chartData:e}]}function re(){for(var e={},a=0,t=_;a<t.length;a++){e[t[a]]=Ee()}return[{chartTitle:"By agreement",chartType:f.LabeledBarSpark,chartData:e}]}function le(){for(var e={},a=0,t=_;a<t.length;a++){e[t[a]]=ge()}return[{chartTitle:"By publication quality",chartType:f.LabeledBarSpark,chartData:e}]}function ie(){for(var e={},a=0,t=_;a<t.length;a++){e[t[a]]=pe()}return[{chartTitle:"By degree program",chartType:f.LabeledBarSpark,chartData:e}]}function oe(){for(var e={},a=0,t=_;a<t.length;a++){e[t[a]]=ye(15,10)}return[{chartTitle:"By faculty",chartType:f.BarSpark,chartData:e}]}function ce(){for(var e={},a=0,t=_;a<t.length;a++){e[t[a]]=fe()}return[{chartTitle:"By gender, ethnicity",chartType:f.DemographicPieSpark,chartData:e}]}function ue(){for(var e={},a=0,t=_;a<t.length;a++){e[t[a]]=ve()}return[{chartTitle:"By number of semesters",chartType:f.LabeledBarSpark,chartData:e}]}function he(){var e=[],a=50+Math.floor(20*Math.random()),t=Math.floor(10*Math.random()),n=100-a-t;return e.push({value:a,label:"UROP"}),e.push({value:t,label:"Faculty"}),e.push({value:n,label:"Unfunded"}),e}function se(){var e=[],a=50+Math.floor(20*Math.random()),t=Math.floor(10*Math.random()),n=100-a-t;return e.push({value:a,label:"Hawaii"}),e.push({value:t,label:"Mainland"}),e.push({value:n,label:"Other"}),e}function de(){var e=[];return e.push({value:Math.floor(100*Math.random()),label:"UH"}),e.push({value:Math.floor(80*Math.random()),label:"Another school"}),e.push({value:Math.floor(50*Math.random()),label:"No school"}),e}function me(){var e=[];return e.push({value:Math.floor(100*Math.random()),label:"Unsatisfied"}),e.push({value:Math.floor(100*Math.random()),label:""}),e.push({value:Math.floor(100*Math.random()),label:""}),e.push({value:Math.floor(50*Math.random()),label:""}),e.push({value:Math.floor(50*Math.random()),label:"Satisfied"}),e}function Ee(){var e=[];return e.push({value:Math.floor(100*Math.random()),label:"Disagree"}),e.push({value:Math.floor(100*Math.random()),label:""}),e.push({value:Math.floor(100*Math.random()),label:""}),e.push({value:Math.floor(50*Math.random()),label:""}),e.push({value:Math.floor(50*Math.random()),label:"Agree"}),e}function pe(){var e=[];return e.push({value:Math.floor(100*Math.random()),label:"B.A."}),e.push({value:Math.floor(100*Math.random()),label:"B.S."}),e.push({value:Math.floor(50*Math.random()),label:"M.S."}),e.push({value:Math.floor(50*Math.random()),label:"Ph.D."}),e}function ve(){var e=[];return e.push({value:2,label:"< 6"}),e.push({value:Math.floor(10*Math.random()),label:"6-8"}),e.push({value:Math.floor(10*Math.random()),label:"8-10"}),e.push({value:Math.floor(10*Math.random()),label:"10-12"}),e.push({value:2,label:"12+"}),e}function fe(){var e=Math.floor(20*Math.random())+3,a=100-e,t=[];t.push({value:e,label:"Women"}),t.push({value:a,label:"Men"});var n=50+Math.floor(20*Math.random()),r=Math.floor(10*Math.random()),l=100-n-r;return t.push({value:n,label:"Caucasian"}),t.push({value:r,label:"Native Hawaiian"}),t.push({value:l,label:"Other"}),t}function ge(){var e=[];return e.push({value:Math.floor(100*Math.random()),label:"Tier 1"}),e.push({value:Math.floor(100*Math.random()),label:"Tier 2"}),e.push({value:Math.floor(100*Math.random()),label:"Other"}),e}function Te(e,a){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n={},r=0,l=_;r<l.length;r++){var i=l[r],o=Math.floor(Math.random()*(a-e)+e);o/=t,n[i]={value:o,year:i}}return n}function ye(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:101,t=[],n=0;n<e;n++)t.push({value:Math.floor(Math.random()*a),year:0});t=t.sort((function(e,a){return e.value-a.value}));for(var r=0;r<e;r++)t[r].year=2015+r;return t}var Se,be={ayPageDB:function(){var e={};return e[U.SSH]={name:"SSH",unitType:P.Number,description:"Measures the amount of instruction.",trend:Te(1e3,3e3),breakdowns:oe()},e[U.FACULTYFTE]={name:"Faculty FTE",unitType:P.Number,description:"Measures the number of faculty available for teaching, research and service.",trend:Te(15,25),breakdowns:ce()},e[U.EXTRAMURALFUNDING]={name:"Extramural Funding",unitType:P.Dollars,description:"Measures the dollar amount of funding brought in by faculty to this academic unit (or the University as a whole) for this AY",trend:Te(2e6,3e6),breakdowns:oe()},e[U.RETENTION]={name:"Retention",unitType:P.Percent,description:"Measures the percentage of students entering the academic program who receive a degree in it.",trend:Te(20,30),breakdowns:ce()},e[U.PUBLICATIONS]={name:"Publications",unitType:P.Number,description:"Measures the number of published scholarly works.",trend:Te(20,30),breakdowns:le()},e[U.GRADUATESTUDENTSUPPORTFTE]={name:"Graduate Student Support FTE",unitType:P.Number,description:"Measures the number of graduate students receiving support in the form of tuition waivers and a monthly stipend.",trend:Te(100,200,10),breakdowns:oe()},e[U.GRADUATES]={name:"Graduates",unitType:P.Number,description:"Measures the number of students receiving a degree.",trend:Te(100,200),breakdowns:ce()},e[U.TIMETODEGREE]={name:"Time to Degree",unitType:P.Number,description:"Measures the number of semesters required by this year's graduates to obtain their undergraduate degree.",trend:Te(70,100,10),breakdowns:ue()},e[U.ADMISSIONS]={name:"Admissions",unitType:P.Number,description:"Measures the number of students admitted.",trend:Te(70,100),breakdowns:ie()},e[U.COURSEEVALUATIONRESPONSE]={name:"Course Evaluation Response",unitType:P.Number,description:'Measures responses to: "As a professional student, I found this course attractive and compatible with my work life."',trend:Te(30,50,10),breakdowns:re()},e[U.COURSEEVALUATIONRESPONSE2]={name:"Course Evaluation Response",unitType:P.Number,description:'Measures responses to: "This course provided opportunities for me to improve my software development skills"',trend:Te(30,50,10),breakdowns:re()},e[U.EXITSURVEYRESPONSE]={name:"Exit Survey Response",unitType:P.Percent,description:'Measures responses to: "If you could start your higher education experience over, would you still attend this program?',trend:Te(40,60),breakdowns:ne()},e[U.STAKEHOLDERSURVEYRESPONSE]={name:"Stakeholder Survey Response",unitType:P.Number,description:'Measures responses to: "I am satisfied with the quality of graduates from this program."',trend:Te(30,50,10),breakdowns:te()},e[U.INTERNSHIP]={name:"Internship",unitType:P.Percent,description:"Measures percentage of this year's graduates who participated in an internship program.",trend:Te(30,50),breakdowns:ae()},e[U.UNDERGRADRESEARCHEXPERIENCE]={name:"Undergraduate Research Experience",unitType:P.Percent,description:"Measures percentage of this year's graduates who participated in an undergraduate research experience.",trend:Te(40,60),breakdowns:ee()},e}(),timelinePageDB:{}};Se=be,console.log("dashboardDB",Se),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,{title:"UH Department Dashboard Template",latestYear:2019,dashboardDB:be})),document.getElementById("root"))}},[[492,1,2]]]);
//# sourceMappingURL=main.d20e47ff.chunk.js.map