(this["webpackJsonpuh-dept-dashboard-template"]=this["webpackJsonpuh-dept-dashboard-template"]||[]).push([[0],{152:function(e,a,t){},256:function(e,a,t){},259:function(e,a,t){},436:function(e,a,t){},437:function(e,a,t){"use strict";t.r(a);var r,n,l=t(1),i=t.n(l),c=t(32),o=t.n(c),u=(t(255),t(256),t(202)),h=(t(259),t(219)),s=t(453),d=t.p+"static/media/uh-logo.1f7898fc.png",p=function(e){var a=e.title,t=void 0===a?"UH Dept Dashboard":a;return i.a.createElement(h.a,{style:{marginBottom:"20px"},attached:"top",borderless:!0},i.a.createElement(h.a.Item,null,i.a.createElement(s.a,{size:"mini",src:d})),i.a.createElement(h.a.Item,null,i.a.createElement("span",{className:"uh-green",style:{fontWeight:800,fontSize:"24px"}},t)))},m=t(452),f=t(455),v=t(454),g=(t(152),t(220)),E=t(145),b=t(456),y=t(207),M=new function e(){Object(y.a)(this,e),this.color=void 0,this.chartWidth=void 0,this.chartHeight=void 0,this.color={},this.color.green="#376551",this.color.purple="#7C64E8",this.color.lightGreen="#4DE8A5",this.color.red="#E84F35",this.color.yellow="#E8D541",this.chartWidth=325,this.chartHeight=100};!function(e){e.Dollars="$",e.Percent="%"}(r||(r={})),function(e){e.LineSpark="LineSpark",e.BarSpark="BarSpark",e.PieSpark="PieSpark",e.DemographicPieSpark="DemographicPieSpark",e.LabeledBarSpark="LabeledBarSpark"}(n||(n={}));var k=t(20),D=function(e){var a=e.data;return i.a.createElement(k.d,{width:M.chartWidth,height:M.chartHeight,data:a},i.a.createElement(k.c,{type:"monotone",dataKey:"value",stroke:M.color.green,strokeWidth:2}))},S=function(e){var a=e.data;return i.a.createElement(k.b,{width:M.chartWidth,height:M.chartHeight,data:a},i.a.createElement(k.a,{dataKey:"value",fill:M.color.green}))},T=function(e){var a=e.data;return i.a.createElement(k.b,{width:M.chartWidth,height:M.chartHeight,data:a},i.a.createElement(k.a,{dataKey:"value",fill:M.color.green}),i.a.createElement(k.g,{dataKey:"label"}))},w=function(e){var a=e.data,t=a.slice(0,2),r=a.slice(2,a.length);return i.a.createElement(k.f,{width:M.chartWidth,height:M.chartHeight},i.a.createElement(k.e,{data:t,dataKey:"value",label:function(e){return e.label},fill:M.color.green,isAnimationActive:!1,cx:M.chartWidth/4,cy:M.chartHeight/2,outerRadius:M.chartHeight/4}),i.a.createElement(k.e,{data:r,dataKey:"value",fill:M.color.green,isAnimationActive:!1,cx:4*M.chartWidth/5,cy:M.chartHeight/2,outerRadius:M.chartHeight/4,label:function(e){return e.label}}))},x=function(e){var a,t=e.name,l=e.description,c=e.year,o=e.value,u=e.priorDelta,h=e.nextDelta,s=e.unit,d=e.sparks,p=(a=o)<1e3?"".concat(a):a<1e6?"".concat((a/1e3).toPrecision(3),"K"):"".concat((a/1e6).toPrecision(3),"M");s&&(s===r.Percent?p="".concat(p,"%"):s===r.Dollars&&(p="$".concat(p)));var m=u&&u<0?"".concat(u):"+".concat(u),f=h&&h<0?"".concat(h):"+".concat(h);return i.a.createElement(v.a,{raised:!0},i.a.createElement(v.a.Content,null,i.a.createElement(g.a,null,i.a.createElement(g.a.Column,{width:4,verticalAlign:"middle",textAlign:"right",style:{paddingLeft:"0px",paddingRight:"35px"}},c>2015?i.a.createElement("div",null,i.a.createElement(E.a,{name:"arrow left"})," ",m,"% ",c-1," "):""),i.a.createElement(g.a.Column,{style:{paddingLeft:0,paddingRight:0},width:8},i.a.createElement("div",{className:"measureHeader",style:{textAlign:"center"}},i.a.createElement(b.a,null,i.a.createElement(b.a.Label,null,t),i.a.createElement(b.a.Value,null,p)))),i.a.createElement(g.a.Column,{width:4,verticalAlign:"middle",textAlign:"left",style:{paddingLeft:"35px",paddingRight:"0px"}},c<2019?i.a.createElement("div",null," ",f,"% ",i.a.createElement(E.a,{name:"arrow right"})," ",c+1," "):"")),i.a.createElement(v.a.Description,{style:{paddingTop:"10px"}},l),d?d.map((function(e,a){return i.a.createElement("div",{key:a,style:{paddingTop:"10px"}},i.a.createElement(v.a.Description,{textAlign:"center"},e.chartTitle),e.chartType===n.LineSpark?i.a.createElement(D,{data:e.chartData}):"",e.chartType===n.BarSpark?i.a.createElement(S,{data:e.chartData}):"",e.chartType===n.DemographicPieSpark?i.a.createElement("div",{style:{paddingTop:"10px"}},i.a.createElement(w,{data:e.chartData})):"",e.chartType===n.LabeledBarSpark?i.a.createElement("div",{style:{paddingTop:"10px"}},i.a.createElement(T,{data:e.chartData})):"")})):""))},A=function(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:101,t=[],r=0;r<e;r++)t.push({value:Math.floor(Math.random()*a)});return t},B=function(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:101,t=[],r=0;r<e;r++)t.push({value:Math.floor(Math.random()*a)});return t.sort((function(e,a){return e.value-a.value}))},H=function(){var e=Math.floor(20*Math.random())+3,a=100-e,t=[];t.push({value:e,label:"Women"}),t.push({value:a,label:"Men"});var r=50+Math.floor(20*Math.random()),l=Math.floor(10*Math.random()),i=100-r-l;return t.push({value:r,label:"Caucasian"}),t.push({value:l,label:"Native Hawaiian"}),t.push({value:i,label:"Other"}),{chartType:n.DemographicPieSpark,chartTitle:"Breakdown by gender, ethnicity",chartData:t}},L=function(){return{chartType:n.BarSpark,chartTitle:"By faculty",chartData:B(15,10)}},P=function(){return Math.floor(10*Math.random())+20},W=function(e,a){return Math.floor(Math.random()*(a-e)+e)};function K(e,a,t,r,l){return{name:e,value:W(r,l),description:t,year:a,priorDelta:P(),nextDelta:P(),sparks:[{chartType:n.LineSpark,chartTitle:"Five year trend",chartData:A(5)}]}}function R(e){var a=K("SSH",e,"Measures the amount of instruction.",1500,2e3);return a.sparks.push(L()),a}function C(e){var a=K("Faculty FTE",e,"Measures the number of faculty available for teaching, research and service.",15,20);return a.sparks.push(H()),a}function F(e){var a=K("Extramural Funding",e,"Measures the dollar amount of funding brought in by faculty to this academic unit (or the University as a whole) for this AY.",2e6,3e6);return a.unit=r.Dollars,a.sparks.push(L()),a}function Y(e){var a=K("Retention",e,"Measures the percentage of students entering the academic program who receive a degree in it.",20,40);return a.unit=r.Percent,a.sparks.push(H()),a}function I(e){var a=K("Publications",e,"Measures the number of published scholarly works.",20,40);return a.sparks.push(function(){var e=[];return e.push({value:Math.floor(100*Math.random()),label:"Tier 1"}),e.push({value:Math.floor(100*Math.random()),label:"Tier 2"}),e.push({value:Math.floor(100*Math.random()),label:"Other"}),{chartType:n.LabeledBarSpark,chartTitle:"Breakdown by publication quality",chartData:e}}()),a}function G(e){var a=K("Graduate Student Support FTE",e,"Measures the number of graduate students receiving support in the form of tuition waivers and a monthly stipend.",120,140);return a.value=a.value/10,a.sparks.push(L()),a}function O(e){var a=K("Graduates",e,"Measures the number of students receiving a degree.",120,150);return a.sparks.push(H()),a}function N(e){var a=K("Time To Degree",e,"Measures the number of semesters required by this year's graduates to obtain their undergraduate degree.",80,100);return a.value=a.value/10,a.sparks.push(function(){var e=[];return e.push({value:2,label:"< 6"}),e.push({value:Math.floor(10*Math.random()),label:"6-8"}),e.push({value:Math.floor(10*Math.random()),label:"8-10"}),e.push({value:Math.floor(10*Math.random()),label:"10-12"}),e.push({value:2,label:"12+"}),{chartType:n.LabeledBarSpark,chartTitle:"Breakdown by number of semesters",chartData:e}}()),a}function U(e){var a=K("Admissions",e,"Measures the number of students admitted this AY.",80,100);return a.sparks.push(function(){var e=[];return e.push({value:Math.floor(100*Math.random()),label:"B.A."}),e.push({value:Math.floor(100*Math.random()),label:"B.S."}),e.push({value:Math.floor(50*Math.random()),label:"M.S."}),e.push({value:Math.floor(50*Math.random()),label:"Ph.D."}),{chartType:n.LabeledBarSpark,chartTitle:"Breakdown by degree program",chartData:e}}()),a}var j=function(e){var a=function(e){return[R(e),C(e),F(e),Y(e),I(e),G(e),O(e),N(e),U(e)]}(e.year);return i.a.createElement(v.a.Group,{centered:!0},a.map((function(e,a){return i.a.createElement(x,Object.assign({key:a},e))})))},q=(t(436),function(e){var a=e.years.map((function(e){return{menuItem:"".concat(e),render:function(){return i.a.createElement(f.a.Pane,null,i.a.createElement(j,{year:e}))}}}));return i.a.createElement(f.a,{panes:a,defaultActiveIndex:4})}),z=function(e){var a=e.latestAcademicYear,t=[a-4,a-3,a-2,a-1,a];return i.a.createElement(m.a,{fluid:!0,style:{paddingLeft:"10px",paddingRight:"10px"}},i.a.createElement(q,{years:t}))},J=function(e){var a=e.title,t=e.latestAcademicYear;return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement("title",null,a)),i.a.createElement(p,{title:a}),i.a.createElement(z,{latestAcademicYear:t}))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(J,{title:"UH Department Dashboard Template",latestAcademicYear:2019})),document.getElementById("root"))}},[[437,1,2]]]);
//# sourceMappingURL=main.019b7a97.chunk.js.map