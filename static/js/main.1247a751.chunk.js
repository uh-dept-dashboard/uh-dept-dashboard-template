(this["webpackJsonpuh-dept-dashboard-template"]=this["webpackJsonpuh-dept-dashboard-template"]||[]).push([[0],{152:function(e,a,t){},257:function(e,a,t){},260:function(e,a,t){},437:function(e,a,t){},438:function(e,a,t){"use strict";t.r(a);var r,n=t(1),l=t.n(n),o=t(32),i=t.n(o),u=(t(256),t(257),t(202)),c=(t(260),t(219)),h=t(454),s=t.p+"static/media/uh-logo.1f7898fc.png",d=function(e){var a=e.title,t=void 0===a?"UH Dept Dashboard":a;return l.a.createElement(c.a,{style:{marginBottom:"20px"},attached:"top",borderless:!0},l.a.createElement(c.a.Item,null,l.a.createElement(h.a,{size:"mini",src:s})),l.a.createElement(c.a.Item,null,l.a.createElement("span",{className:"uh-green",style:{fontWeight:800,fontSize:"24px"}},t)))},E=t(453),p=t(456),m=t(455),f=(t(152),t(221)),T=t(145),v=t(457),S=t(207),b=new function e(){Object(S.a)(this,e),this.color=void 0,this.chartWidth=void 0,this.chartHeight=void 0,this.color={},this.color.green="#376551",this.color.purple="#7C64E8",this.color.lightGreen="#4DE8A5",this.color.red="#E84F35",this.color.yellow="#E8D541",this.chartWidth=325,this.chartHeight=100};!function(e){e.TrendLineSpark="TrendLineSpark",e.BarSpark="BarSpark",e.PieSpark="PieSpark",e.DemographicPieSpark="DemographicPieSpark",e.LabeledBarSpark="LabeledBarSpark"}(r||(r={}));var R=t(16);function g(e){return e.payload.year===e.payload.currYear&&(e.stroke="red",e.fill="red"),l.a.createElement(R.c,e)}var y,M,A,D=function(e){var a=e.data;return l.a.createElement(R.e,{width:b.chartWidth,height:b.chartHeight,data:a},l.a.createElement(R.d,{isAnimationActive:!1,type:"monotone",dataKey:"value",stroke:b.color.green,strokeWidth:2,dot:g}),l.a.createElement(R.h,null))},N=function(e){var a=e.data;return l.a.createElement(R.b,{width:b.chartWidth,height:b.chartHeight,data:a},l.a.createElement(R.a,{dataKey:"value",fill:b.color.green}),l.a.createElement(R.h,null))},U=function(e){var a=e.data;return l.a.createElement(R.b,{width:b.chartWidth,height:b.chartHeight,data:a},l.a.createElement(R.a,{dataKey:"value",fill:b.color.green}),l.a.createElement(R.i,{dataKey:"label"}),l.a.createElement(R.h,null))},I=function(e){var a=e.data;return l.a.createElement(R.g,{width:b.chartWidth,height:b.chartHeight},l.a.createElement(R.f,{data:a,dataKey:"value",label:function(e){return e.label},fill:b.color.green,isAnimationActive:!1,cx:b.chartWidth/2,cy:b.chartHeight/2,outerRadius:b.chartHeight/4}),l.a.createElement(R.h,null))},O=function(e){var a=e.data,t=a.slice(0,2),r=a.slice(2,a.length);return l.a.createElement(R.g,{width:b.chartWidth,height:b.chartHeight},l.a.createElement(R.f,{data:t,dataKey:"value",label:function(e){return e.label},fill:b.color.green,isAnimationActive:!1,cx:b.chartWidth/4,cy:b.chartHeight/2,outerRadius:b.chartHeight/4}),l.a.createElement(R.f,{data:r,dataKey:"value",fill:b.color.green,isAnimationActive:!1,cx:4*b.chartWidth/5,cy:b.chartHeight/2,outerRadius:b.chartHeight/4,label:function(e){return e.label}}),l.a.createElement(R.h,null))};!function(e){e.Dollars="$",e.Percent="%",e.Number="Number"}(y||(y={})),function(e){e.SSH="SSH",e.FACULTYFTE="FACULTYFTE",e.EXTRAMURALFUNDING="EXTRAMURALFUNDING",e.RETENTION="RETENTION",e.PUBLICATIONS="PUBLICATIONS",e.GRADUATESTUDENTSUPPORTFTE="GRADUATESTUDENTSUPPORTFTE",e.GRADUATES="GRADUATES",e.TIMETODEGREE="TIMETODEGREE",e.ADMISSIONS="ADMISSIONS",e.COURSEEVALUATIONRESPONSE="COURSEEVALUATIONRESPONSE",e.COURSEEVALUATIONRESPONSE2="COURSEEVALUATIONRESPONSE2",e.EXITSURVEYRESPONSE="EXITSURVEYRESPONSE",e.STAKEHOLDERSURVEYRESPONSE="STAKEHOLDERSURVEYRESPONSE",e.INTERNSHIP="INTERNSHIP",e.UNDERGRADRESEARCHEXPERIENCE="UNDERGRADRESEARCHEXPERIENCE"}(M||(M={})),function(e){e.BYFACULTY="BYFACULTY",e.DEMOGRAPHIC="DEMOGRAPHIC",e.INTERNSHIP="INTERNSHIP",e.UNDERGRADUATERESEARCHEXPERIENCE="UNDERGRADUATERESEARCHEXPERIENCE",e.PUBLICATIONTIER="PUBLICATIONTIER",e.TIMETODEGREE="TIMETODEGREE",e.DEGREEPROGRAM="DEGREEPROGRAM",e.NUMBERSEMESTERS="NUMBERSEMESTERS",e.COURSEEVALUATION="COURSEEVALUATION",e.EXITSURVEY="EXITSURVEY",e.STAKEHOLDERSURVEY="STAKEHOLDERSURVEY"}(A||(A={}));var P=function(e){var a,t=e.name,n=e.description,o=e.year,i=e.value,u=e.priorDelta,c=e.nextDelta,h=e.unit,s=e.sparks,d=(a=i)<1e3?"".concat(a):a<1e6?"".concat((a/1e3).toPrecision(3),"K"):"".concat((a/1e6).toPrecision(3),"M");h&&(h===y.Percent?d="".concat(d,"%"):h===y.Dollars&&(d="$".concat(d)));var E=u&&u<0?"".concat(u):"+".concat(u),p=c&&c<0?"".concat(c):"+".concat(c);return l.a.createElement(m.a,{raised:!0},l.a.createElement(m.a.Content,null,l.a.createElement(f.a,null,l.a.createElement(f.a.Column,{width:4,verticalAlign:"middle",textAlign:"right",style:{paddingLeft:"0px",paddingRight:"35px"}},o>2015?l.a.createElement("div",null,l.a.createElement(T.a,{name:"arrow left"})," ",E,"% ",o-1," "):""),l.a.createElement(f.a.Column,{style:{paddingLeft:0,paddingRight:0},width:8},l.a.createElement("div",{className:"measureHeader",style:{textAlign:"center"}},l.a.createElement(v.a,null,l.a.createElement(v.a.Label,null,t),l.a.createElement(v.a.Value,null,d)))),l.a.createElement(f.a.Column,{width:4,verticalAlign:"middle",textAlign:"left",style:{paddingLeft:"35px",paddingRight:"0px"}},o<2019?l.a.createElement("div",null," ",p,"% ",l.a.createElement(T.a,{name:"arrow right"})," ",o+1," "):"")),l.a.createElement(m.a.Description,{style:{paddingTop:"10px",minHeight:"75px"}},n),s?s.map((function(e,a){return l.a.createElement("div",{key:a,style:{paddingTop:"10px"}},l.a.createElement(m.a.Description,{textAlign:"center"},e.chartTitle),e.chartType===r.TrendLineSpark?l.a.createElement(D,{data:e.chartData}):"",e.chartType===r.BarSpark?l.a.createElement(N,{data:e.chartData}):"",e.chartType===r.PieSpark?l.a.createElement("div",{style:{paddingTop:"10px"}},l.a.createElement(I,{data:e.chartData})):"",e.chartType===r.DemographicPieSpark?l.a.createElement("div",{style:{paddingTop:"10px"}},l.a.createElement(O,{data:e.chartData})):"",e.chartType===r.LabeledBarSpark?l.a.createElement("div",{style:{paddingTop:"10px"}},l.a.createElement(U,{data:e.chartData})):"")})):""))},k=t(220);function B(e,a,t,r){var n=a[t],l=n.trend[e].value;if(n.trend["".concat(e+r)]){var o=n.trend["".concat(e+r)].value;return Math.floor((o-l)/l*100)}return 0}function L(e,a,t,n){var l,o=n[e],i=o.name,u=o.trend[t].value,c=o.description,h=o.unitType,s=B(t,n,e,-1),d=B(t,n,e,1),E=[a-4,a-3,a-2,a-1,a].map((function(e){return o.trend["".concat(e)]})),p=Object(k.a)(E);try{for(p.s();!(l=p.n()).done;){l.value.currYear=t}}catch(T){p.e(T)}finally{p.f()}var m={chartType:r.TrendLineSpark,chartTitle:"Five year trend",chartData:E},f=o.breakdowns[0];return{latestYear:a,name:i,value:u,description:c,unit:h,year:t,priorDelta:s,nextDelta:d,sparks:[m,{chartType:f.chartType,chartTitle:f.chartTitle,chartData:f.chartData[t]}]}}var w=function(e){var a=function(e,a,t){for(var r=[],n=0,l=Object.values(M);n<l.length;n++){var o=l[n];t[o]&&r.push(L(o,e,a,t))}return r}(e.latestYear,e.year,e.dashboardDB);return l.a.createElement(m.a.Group,{centered:!0},a.map((function(e,a){return l.a.createElement(P,Object.assign({key:a},e))})))},H=(t(437),function(e){var a=e.latestYear,t=e.dashboardDB,r=[a-4,a-3,a-2,a-1,a].map((function(e){return{menuItem:"".concat(e),render:function(){return l.a.createElement(p.a.Pane,null,l.a.createElement(w,{latestYear:a,year:e,dashboardDB:t}))}}}));return l.a.createElement(p.a,{panes:r,defaultActiveIndex:4})}),C=function(e){var a=e.latestYear,t=e.dashboardDB;return l.a.createElement(E.a,{fluid:!0,style:{paddingLeft:"10px",paddingRight:"10px"}},l.a.createElement(H,{latestYear:a,dashboardDB:t}))},x=function(e){var a=e.title,t=e.latestYear,r=e.dashboardDB;return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement("title",null,a)),l.a.createElement(d,{title:a}),l.a.createElement(C,{latestYear:t,dashboardDB:r}))},G=[2015,2016,2017,2018,2019];function Y(){for(var e={},a=0,t=G;a<t.length;a++){e[t[a]]=$()}return[{chartTitle:"By funding",chartType:r.PieSpark,chartData:e}]}function F(){for(var e={},a=0,t=G;a<t.length;a++){e[t[a]]=Q()}return[{chartTitle:"By location",chartType:r.PieSpark,chartData:e}]}function V(){for(var e={},a=0,t=G;a<t.length;a++){e[t[a]]=_()}return[{chartTitle:"By satisfaction",chartType:r.LabeledBarSpark,chartData:e}]}function K(){for(var e={},a=0,t=G;a<t.length;a++){e[t[a]]=Z()}return[{chartTitle:"By response",chartType:r.LabeledBarSpark,chartData:e}]}function W(){for(var e={},a=0,t=G;a<t.length;a++){e[t[a]]=ee()}return[{chartTitle:"By agreement",chartType:r.LabeledBarSpark,chartData:e}]}function X(){for(var e={},a=0,t=G;a<t.length;a++){e[t[a]]=ne()}return[{chartTitle:"By publication quality",chartType:r.LabeledBarSpark,chartData:e}]}function j(){for(var e={},a=0,t=G;a<t.length;a++){e[t[a]]=ae()}return[{chartTitle:"By degree program",chartType:r.LabeledBarSpark,chartData:e}]}function q(){for(var e={},a=0,t=G;a<t.length;a++){e[t[a]]=oe(15,10)}return[{chartTitle:"By faculty",chartType:r.BarSpark,chartData:e}]}function z(){for(var e={},a=0,t=G;a<t.length;a++){e[t[a]]=re()}return[{chartTitle:"By gender, ethnicity",chartType:r.DemographicPieSpark,chartData:e}]}function J(){for(var e={},a=0,t=G;a<t.length;a++){e[t[a]]=te()}return[{chartTitle:"By number of semesters",chartType:r.LabeledBarSpark,chartData:e}]}function $(){var e=[],a=50+Math.floor(20*Math.random()),t=Math.floor(10*Math.random()),r=100-a-t;return e.push({value:a,label:"UROP"}),e.push({value:t,label:"Faculty"}),e.push({value:r,label:"Unfunded"}),e}function Q(){var e=[],a=50+Math.floor(20*Math.random()),t=Math.floor(10*Math.random()),r=100-a-t;return e.push({value:a,label:"Hawaii"}),e.push({value:t,label:"Mainland"}),e.push({value:r,label:"Other"}),e}function Z(){var e=[];return e.push({value:Math.floor(100*Math.random()),label:"UH"}),e.push({value:Math.floor(80*Math.random()),label:"Another school"}),e.push({value:Math.floor(50*Math.random()),label:"No school"}),e}function _(){var e=[];return e.push({value:Math.floor(100*Math.random()),label:"Unsatisfied"}),e.push({value:Math.floor(100*Math.random()),label:""}),e.push({value:Math.floor(100*Math.random()),label:""}),e.push({value:Math.floor(50*Math.random()),label:""}),e.push({value:Math.floor(50*Math.random()),label:"Satisfied"}),e}function ee(){var e=[];return e.push({value:Math.floor(100*Math.random()),label:"Disagree"}),e.push({value:Math.floor(100*Math.random()),label:""}),e.push({value:Math.floor(100*Math.random()),label:""}),e.push({value:Math.floor(50*Math.random()),label:""}),e.push({value:Math.floor(50*Math.random()),label:"Agree"}),e}function ae(){var e=[];return e.push({value:Math.floor(100*Math.random()),label:"B.A."}),e.push({value:Math.floor(100*Math.random()),label:"B.S."}),e.push({value:Math.floor(50*Math.random()),label:"M.S."}),e.push({value:Math.floor(50*Math.random()),label:"Ph.D."}),e}function te(){var e=[];return e.push({value:2,label:"< 6"}),e.push({value:Math.floor(10*Math.random()),label:"6-8"}),e.push({value:Math.floor(10*Math.random()),label:"8-10"}),e.push({value:Math.floor(10*Math.random()),label:"10-12"}),e.push({value:2,label:"12+"}),e}function re(){var e=Math.floor(20*Math.random())+3,a=100-e,t=[];t.push({value:e,label:"Women"}),t.push({value:a,label:"Men"});var r=50+Math.floor(20*Math.random()),n=Math.floor(10*Math.random()),l=100-r-n;return t.push({value:r,label:"Caucasian"}),t.push({value:n,label:"Native Hawaiian"}),t.push({value:l,label:"Other"}),t}function ne(){var e=[];return e.push({value:Math.floor(100*Math.random()),label:"Tier 1"}),e.push({value:Math.floor(100*Math.random()),label:"Tier 2"}),e.push({value:Math.floor(100*Math.random()),label:"Other"}),e}function le(e,a){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r={},n=0,l=G;n<l.length;n++){var o=l[n],i=Math.floor(Math.random()*(a-e)+e);i/=t,r[o]={value:i,year:o}}return r}function oe(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:101,t=[],r=0;r<e;r++)t.push({value:Math.floor(Math.random()*a),year:0});t=t.sort((function(e,a){return e.value-a.value}));for(var n=0;n<e;n++)t[n].year=2015+n;return t}var ie,ue=function(){var e={};return e[M.SSH]={name:"SSH",unitType:y.Number,description:"Measures the amount of instruction.",trend:le(1e3,3e3),breakdowns:q()},e[M.FACULTYFTE]={name:"Faculty FTE",unitType:y.Number,description:"Measures the number of faculty available for teaching, research and service.",trend:le(15,25),breakdowns:z()},e[M.EXTRAMURALFUNDING]={name:"Extramural Funding",unitType:y.Dollars,description:"Measures the dollar amount of funding brought in by faculty to this academic unit (or the University as a whole) for this AY",trend:le(2e6,3e6),breakdowns:q()},e[M.RETENTION]={name:"Retention",unitType:y.Percent,description:"Measures the percentage of students entering the academic program who receive a degree in it.",trend:le(20,30),breakdowns:z()},e[M.PUBLICATIONS]={name:"Publications",unitType:y.Number,description:"Measures the number of published scholarly works.",trend:le(20,30),breakdowns:X()},e[M.GRADUATESTUDENTSUPPORTFTE]={name:"Graduate Student Support FTE",unitType:y.Number,description:"Measures the number of graduate students receiving support in the form of tuition waivers and a monthly stipend.",trend:le(100,200,10),breakdowns:q()},e[M.GRADUATES]={name:"Graduates",unitType:y.Number,description:"Measures the number of students receiving a degree.",trend:le(100,200),breakdowns:z()},e[M.TIMETODEGREE]={name:"Time to Degree",unitType:y.Number,description:"Measures the number of semesters required by this year's graduates to obtain their undergraduate degree.",trend:le(70,100,10),breakdowns:J()},e[M.ADMISSIONS]={name:"Admissions",unitType:y.Number,description:"Measures the number of students admitted.",trend:le(70,100),breakdowns:j()},e[M.COURSEEVALUATIONRESPONSE]={name:"Course Evaluation Response",unitType:y.Number,description:'Measures responses to: "As a professional student, I found this course attractive and compatible with my work life."',trend:le(30,50,10),breakdowns:W()},e[M.COURSEEVALUATIONRESPONSE2]={name:"Course Evaluation Response",unitType:y.Number,description:'Measures responses to: "This course provided opportunities for me to improve my software development skills"',trend:le(30,50,10),breakdowns:W()},e[M.EXITSURVEYRESPONSE]={name:"Exit Survey Response",unitType:y.Percent,description:'Measures responses to: "If you could start your higher education experience over, would you still attend this program?',trend:le(40,60),breakdowns:K()},e[M.STAKEHOLDERSURVEYRESPONSE]={name:"Stakeholder Survey Response",unitType:y.Number,description:'Measures responses to: "I am satisfied with the quality of graduates from this program."',trend:le(30,50,10),breakdowns:V()},e[M.INTERNSHIP]={name:"Internship",unitType:y.Percent,description:"Measures percentage of this year's graduates who participated in an internship program.",trend:le(30,50),breakdowns:F()},e[M.UNDERGRADRESEARCHEXPERIENCE]={name:"Undergraduate Research Experience",unitType:y.Percent,description:"Measures percentage of this year's graduates who participated in an undergraduate research experience.",trend:le(40,60),breakdowns:Y()},e}();ie=ue,console.log("dashboardDB",ie),i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,{title:"UH Department Dashboard Template",latestYear:2019,dashboardDB:ue})),document.getElementById("root"))}},[[438,1,2]]]);
//# sourceMappingURL=main.1247a751.chunk.js.map