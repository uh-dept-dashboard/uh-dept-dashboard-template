(this["webpackJsonpuh-dept-dashboard-template"]=this["webpackJsonpuh-dept-dashboard-template"]||[]).push([[0],{152:function(e,a,t){},256:function(e,a,t){},259:function(e,a,t){},436:function(e,a,t){},437:function(e,a,t){"use strict";t.r(a);var r,n,l=t(1),o=t.n(l),i=t(32),u=t.n(i),h=(t(255),t(256),t(202)),c=(t(259),t(219)),s=t(453),d=t.p+"static/media/uh-logo.1f7898fc.png",p=function(e){var a=e.title,t=void 0===a?"UH Dept Dashboard":a;return o.a.createElement(c.a,{style:{marginBottom:"20px"},attached:"top",borderless:!0},o.a.createElement(c.a.Item,null,o.a.createElement(s.a,{size:"mini",src:d})),o.a.createElement(c.a.Item,null,o.a.createElement("span",{className:"uh-green",style:{fontWeight:800,fontSize:"24px"}},t)))},E=t(452),m=t(455),f=t(454),v=(t(152),t(220)),S=t(145),g=t(456),M=t(207),T=new function e(){Object(M.a)(this,e),this.color=void 0,this.chartWidth=void 0,this.chartHeight=void 0,this.color={},this.color.green="#376551",this.color.purple="#7C64E8",this.color.lightGreen="#4DE8A5",this.color.red="#E84F35",this.color.yellow="#E8D541",this.chartWidth=325,this.chartHeight=100};!function(e){e.Dollars="$",e.Percent="%"}(r||(r={})),function(e){e.LineSpark="LineSpark",e.BarSpark="BarSpark",e.PieSpark="PieSpark",e.DemographicPieSpark="DemographicPieSpark",e.LabeledBarSpark="LabeledBarSpark"}(n||(n={}));var b=t(20);function y(e){return e.payload.year&&2019===e.payload.year&&(e.stroke="red",e.fill="red"),o.a.createElement(b.c,e)}var R,A,k,D,I=function(e){var a=e.data;return o.a.createElement(b.e,{width:T.chartWidth,height:T.chartHeight,data:a},o.a.createElement(b.d,{isAnimationActive:!1,type:"monotone",dataKey:"value",stroke:T.color.green,strokeWidth:2,dot:y}))},P=function(e){var a=e.data;return o.a.createElement(b.b,{width:T.chartWidth,height:T.chartHeight,data:a},o.a.createElement(b.a,{dataKey:"value",fill:T.color.green}))},U=function(e){var a=e.data;return o.a.createElement(b.b,{width:T.chartWidth,height:T.chartHeight,data:a},o.a.createElement(b.a,{dataKey:"value",fill:T.color.green}),o.a.createElement(b.h,{dataKey:"label"}))},N=function(e){var a=e.data;return o.a.createElement(b.g,{width:T.chartWidth,height:T.chartHeight},o.a.createElement(b.f,{data:a,dataKey:"value",label:function(e){return e.label},fill:T.color.green,isAnimationActive:!1,cx:T.chartWidth/2,cy:T.chartHeight/2,outerRadius:T.chartHeight/4}))},O=function(e){var a=e.data,t=a.slice(0,2),r=a.slice(2,a.length);return o.a.createElement(b.g,{width:T.chartWidth,height:T.chartHeight},o.a.createElement(b.f,{data:t,dataKey:"value",label:function(e){return e.label},fill:T.color.green,isAnimationActive:!1,cx:T.chartWidth/4,cy:T.chartHeight/2,outerRadius:T.chartHeight/4}),o.a.createElement(b.f,{data:r,dataKey:"value",fill:T.color.green,isAnimationActive:!1,cx:4*T.chartWidth/5,cy:T.chartHeight/2,outerRadius:T.chartHeight/4,label:function(e){return e.label}}))},L=function(e){var a,t=e.name,l=e.description,i=e.year,u=e.value,h=e.priorDelta,c=e.nextDelta,s=e.unit,d=e.sparks,p=(a=u)<1e3?"".concat(a):a<1e6?"".concat((a/1e3).toPrecision(3),"K"):"".concat((a/1e6).toPrecision(3),"M");s&&(s===r.Percent?p="".concat(p,"%"):s===r.Dollars&&(p="$".concat(p)));var E=h&&h<0?"".concat(h):"+".concat(h),m=c&&c<0?"".concat(c):"+".concat(c);return o.a.createElement(f.a,{raised:!0},o.a.createElement(f.a.Content,null,o.a.createElement(v.a,null,o.a.createElement(v.a.Column,{width:4,verticalAlign:"middle",textAlign:"right",style:{paddingLeft:"0px",paddingRight:"35px"}},i>2015?o.a.createElement("div",null,o.a.createElement(S.a,{name:"arrow left"})," ",E,"% ",i-1," "):""),o.a.createElement(v.a.Column,{style:{paddingLeft:0,paddingRight:0},width:8},o.a.createElement("div",{className:"measureHeader",style:{textAlign:"center"}},o.a.createElement(g.a,null,o.a.createElement(g.a.Label,null,t),o.a.createElement(g.a.Value,null,p)))),o.a.createElement(v.a.Column,{width:4,verticalAlign:"middle",textAlign:"left",style:{paddingLeft:"35px",paddingRight:"0px"}},i<2019?o.a.createElement("div",null," ",m,"% ",o.a.createElement(S.a,{name:"arrow right"})," ",i+1," "):"")),o.a.createElement(f.a.Description,{style:{paddingTop:"10px"}},l),d?d.map((function(e,a){return o.a.createElement("div",{key:a,style:{paddingTop:"10px"}},o.a.createElement(f.a.Description,{textAlign:"center"},e.chartTitle),e.chartType===n.LineSpark?o.a.createElement(I,{data:e.chartData}):"",e.chartType===n.BarSpark?o.a.createElement(P,{data:e.chartData}):"",e.chartType===n.PieSpark?o.a.createElement("div",{style:{paddingTop:"10px"}},o.a.createElement(N,{data:e.chartData})):"",e.chartType===n.DemographicPieSpark?o.a.createElement("div",{style:{paddingTop:"10px"}},o.a.createElement(O,{data:e.chartData})):"",e.chartType===n.LabeledBarSpark?o.a.createElement("div",{style:{paddingTop:"10px"}},o.a.createElement(U,{data:e.chartData})):"")})):""))};!function(e){e.Dollars="$",e.Percent="%",e.Number=""}(R||(R={})),function(e){e.LineSpark="LineSpark",e.BarSpark="BarSpark",e.PieSpark="PieSpark",e.DemographicPieSpark="DemographicPieSpark",e.LabeledBarSpark="LabeledBarSpark"}(A||(A={})),function(e){e.SSH="SSH",e.FACULTYFTE="FACULTYFTE",e.EXTRAMURALFUNDING="EXTRAMURALFUNDING",e.RETENTION="RETENTION",e.PUBLICATIONS="PUBLICATIONS",e.GRADUATESTUDENTSUPPORTFTE="GRADUATESTUDENTSUPPORTFTE",e.GRADUATES="GRADUATES",e.TIMETODEGREE="TIMETODEGREE",e.ADMISSIONS="ADMISSIONS",e.COURSEEVALUATIONRESPONSE="COURSEEVALUATIONRESPONSE",e.EXITSURVEYRESPONSE="EXITSURVEYRESPONSE",e.STAKEHOLDERSURVEYRESPONSE="STAKEHOLDERSURVEYRESPONSE",e.INTERNSHIP="INTERNSHIP",e.UNDERGRADRESEARCHEXPERIENCE="UNDERGRADRESEARCHEXPERIENCE"}(k||(k={})),function(e){e.BYFACULTY="BYFACULTY",e.DEMOGRAPHIC="DEMOGRAPHIC",e.INTERNSHIP="INTERNSHIP",e.UNDERGRADUATERESEARCHEXPERIENCE="UNDERGRADUATERESEARCHEXPERIENCE",e.PUBLICATIONTIER="PUBLICATIONTIER",e.TIMETODEGREE="TIMETODEGREE",e.ADMISSIONS="ADMISSIONS",e.COURSEEVALUATION="COURSEEVALUATION",e.EXITSURVEY="EXITSURVEY",e.STAKEHOLDERSURVEY="STAKEHOLDERSURVEY"}(D||(D={}));var B=2015;function w(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:101,t=[],r=0;r<e;r++)t.push({value:Math.floor(Math.random()*a),year:B+r});return t}function H(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:101,t=[],r=0;r<e;r++)t.push({value:Math.floor(Math.random()*a),year:0});t=t.sort((function(e,a){return e.value-a.value}));for(var n=0;n<e;n++)t[n].year=B+n;return t}var C=function(){var e=Math.floor(20*Math.random())+3,a=100-e,t=[];t.push({value:e,label:"Women"}),t.push({value:a,label:"Men"});var r=50+Math.floor(20*Math.random()),l=Math.floor(10*Math.random()),o=100-r-l;return t.push({value:r,label:"Caucasian"}),t.push({value:l,label:"Native Hawaiian"}),t.push({value:o,label:"Other"}),{chartType:n.DemographicPieSpark,chartTitle:"Breakdown by gender, ethnicity",chartData:t}},x=function(){var e=[];return e.push({value:Math.floor(100*Math.random()),label:"Disagree"}),e.push({value:Math.floor(100*Math.random()),label:""}),e.push({value:Math.floor(100*Math.random()),label:""}),e.push({value:Math.floor(50*Math.random()),label:""}),e.push({value:Math.floor(50*Math.random()),label:"Agree"}),{chartType:n.LabeledBarSpark,chartTitle:"Breakdown by agreement",chartData:e}},G=function(){return{chartType:n.BarSpark,chartTitle:"By faculty",chartData:H(15,10)}},Y=function(){return Math.floor(10*Math.random())+20},F=function(e,a){return Math.floor(Math.random()*(a-e)+e)};function V(e,a,t,r,l){return{name:e,value:F(r,l),description:t,year:a,priorDelta:Y(),nextDelta:Y(),sparks:[{chartType:n.LineSpark,chartTitle:"Five year trend",chartData:w(5)}]}}function W(e){var a=V("SSH",e,"Measures the amount of instruction.",1500,2e3);return a.sparks.push(G()),a}function K(e){var a=V("Faculty FTE",e,"Measures the number of faculty available for teaching, research and service.",15,20);return a.sparks.push(C()),a}function X(e){var a=V("Extramural Funding",e,"Measures the dollar amount of funding brought in by faculty to this academic unit (or the University as a whole) for this AY.",2e6,3e6);return a.unit=r.Dollars,a.sparks.push(G()),a}function q(e){var a=V("Retention",e,"Measures the percentage of students entering the academic program who receive a degree in it.",20,40);return a.unit=r.Percent,a.sparks.push(C()),a}function $(e){var a=V("Publications",e,"Measures the number of published scholarly works.",20,40);return a.sparks.push(function(){var e=[];return e.push({value:Math.floor(100*Math.random()),label:"Tier 1"}),e.push({value:Math.floor(100*Math.random()),label:"Tier 2"}),e.push({value:Math.floor(100*Math.random()),label:"Other"}),{chartType:n.LabeledBarSpark,chartTitle:"Breakdown by publication quality",chartData:e}}()),a}function j(e){var a=V("Graduate Student Support FTE",e,"Measures the number of graduate students receiving support in the form of tuition waivers and a monthly stipend.",120,140);return a.value=a.value/10,a.sparks.push(G()),a}function z(e){var a=V("Graduates",e,"Measures the number of students receiving a degree.",120,150);return a.sparks.push(C()),a}function J(e){var a=V("Time To Degree",e,"Measures the number of semesters required by this year's graduates to obtain their undergraduate degree.",80,100);return a.value=a.value/10,a.sparks.push(function(){var e=[];return e.push({value:2,label:"< 6"}),e.push({value:Math.floor(10*Math.random()),label:"6-8"}),e.push({value:Math.floor(10*Math.random()),label:"8-10"}),e.push({value:Math.floor(10*Math.random()),label:"10-12"}),e.push({value:2,label:"12+"}),{chartType:n.LabeledBarSpark,chartTitle:"Breakdown by number of semesters",chartData:e}}()),a}function Q(e){var a=V("Admissions",e,"Measures the number of students admitted this AY.",80,100);return a.sparks.push(function(){var e=[];return e.push({value:Math.floor(100*Math.random()),label:"B.A."}),e.push({value:Math.floor(100*Math.random()),label:"B.S."}),e.push({value:Math.floor(50*Math.random()),label:"M.S."}),e.push({value:Math.floor(50*Math.random()),label:"Ph.D."}),{chartType:n.LabeledBarSpark,chartTitle:"Breakdown by degree program",chartData:e}}()),a}function Z(e){var a=V("Course Evaluation Response",e,'Measures responses to: "As a professional student, I found this course attractive and compatible with my work life."',30,50);return a.value=a.value/10,a.sparks.push(x()),a}function _(e){var a=V("Course Evaluation Response",e,'Measures responses to: "This course provided opportunities for me to improve my software development skills"',30,50);return a.value=a.value/10,a.sparks.push(x()),a}function ee(e){var a=V("Exit Survey Response",e,'Measures responses to: "If you could start your higher education experience over, would you still attend this program?"',50,80);return a.unit=r.Percent,a.sparks.push(function(){var e=[];return e.push({value:Math.floor(100*Math.random()),label:"UH"}),e.push({value:Math.floor(80*Math.random()),label:"Another school"}),e.push({value:Math.floor(50*Math.random()),label:"No school"}),{chartType:n.LabeledBarSpark,chartTitle:"Breakdown by response",chartData:e}}()),a}function ae(e){var a=V("Stakeholder Survey Response",e,'Measures responses to: "I am satisfied with the quality of graduates from this program."',10,50);return a.value=a.value/10,a.sparks.push(function(){var e=[];return e.push({value:Math.floor(50*Math.random()),label:"Unsatisfied"}),e.push({value:Math.floor(100*Math.random()),label:""}),e.push({value:Math.floor(100*Math.random()),label:""}),e.push({value:Math.floor(50*Math.random()),label:""}),e.push({value:Math.floor(50*Math.random()),label:"Satisfied"}),{chartType:n.LabeledBarSpark,chartTitle:"Breakdown by satisfaction",chartData:e}}()),a}function te(e){var a=V("Internship",e,"Measures percentage of this year's graduates who participated in an internship program.",50,90);return a.unit=r.Percent,a.sparks.push(function(){var e=[],a=50+Math.floor(20*Math.random()),t=Math.floor(10*Math.random()),r=100-a-t;return e.push({value:a,label:"Hawaii"}),e.push({value:t,label:"Mainland"}),e.push({value:r,label:"Other"}),{chartType:n.PieSpark,chartTitle:"Breakdown by location",chartData:e}}()),a}function re(e){var a=V("Undergrad Research Experience",e,"Measures percentage of this year's graduates who participated in an undergraduate research experience.",50,90);return a.unit=r.Percent,a.sparks.push(function(){var e=[],a=50+Math.floor(20*Math.random()),t=Math.floor(10*Math.random()),r=100-a-t;return e.push({value:a,label:"UROP"}),e.push({value:t,label:"Faculty"}),e.push({value:r,label:"Unfunded"}),{chartType:n.PieSpark,chartTitle:"Breakdown by funding",chartData:e}}()),a}var ne=function(e){var a=function(e){return[W(e),K(e),X(e),q(e),$(e),j(e),z(e),J(e),Q(e),Z(e),_(e),ee(e),ae(e),te(e),re(e)]}(e.year);return o.a.createElement(f.a.Group,{centered:!0},a.map((function(e,a){return o.a.createElement(L,Object.assign({key:a},e))})))},le=(t(436),function(e){var a=e.years.map((function(e){return{menuItem:"".concat(e),render:function(){return o.a.createElement(m.a.Pane,null,o.a.createElement(ne,{year:e}))}}}));return o.a.createElement(m.a,{panes:a,defaultActiveIndex:4})}),oe=function(e){var a=e.latestAcademicYear,t=[a-4,a-3,a-2,a-1,a];return o.a.createElement(E.a,{fluid:!0,style:{paddingLeft:"10px",paddingRight:"10px"}},o.a.createElement(le,{years:t}))},ie=function(e){var a=e.title,t=e.latestAcademicYear;return o.a.createElement("div",null,o.a.createElement(h.a,null,o.a.createElement("title",null,a)),o.a.createElement(p,{title:a}),o.a.createElement(oe,{latestAcademicYear:t}))};u.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ie,{title:"UH Department Dashboard Template",latestAcademicYear:2019})),document.getElementById("root"))}},[[437,1,2]]]);
//# sourceMappingURL=main.a03c5968.chunk.js.map