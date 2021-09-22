(this["webpackJsonppau-app"]=this["webpackJsonppau-app"]||[]).push([[0],{218:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(29),s=t.n(c),o=(t(86),t(9)),i=t(17),l=t.n(i),d=t(46),p=t(47),u=t.n(p),b="PREFECTURE_LIST_REQUEST",f="PREFECTURE_LIST_SUCCESS",h="PREFECTURE_LIST_FAIL_SERVER",j="PREFECTURE_LIST_FAIL_USER",O="ADD_TO_POPULATION_LIST_SUCCESS",v="ADD_TO_POPULATION_LIST_FAIL",y="REMOVE_TO_POPULATION_LIST",E="bkdMhcii8aiAnbU5YGZsCYG0zwLo1N8DdjcoJCmf";function g(e,a,t){var r=[],n=[],c=[],s=[];e.data[0].data.forEach((function(e){r.push(e.value)})),e.data[1].data.forEach((function(e){n.push(e.value)})),e.data[2].data.forEach((function(e){c.push(e.value)})),e.data[3].data.forEach((function(e){s.push(e.value)}));var o={id:a,name:t,boundaryYear:e.boundaryYear,data:[{label:t+"-"+e.data[0].label,dataList:r},{label:t+"-"+e.data[1].label,dataList:n},{label:t+"-"+e.data[2].label,dataList:c},{label:t+"-"+e.data[3].label,dataList:s}],years:[]};return e.data[0].data.forEach((function(e){o.years.push(e.year)})),o}var m=t(1);var x=function(e){var a=e.prefecture,t=Object(o.b)();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",{type:"checkbox",id:a.prefCode,name:a.prefName,value:a.prefCode,onChange:function(e){var r,n;e.target.checked?t((r=a.prefCode,n=a.prefName,function(){var e=Object(d.a)(l.a.mark((function e(a){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=".concat(r),{headers:{"X-API-KEY":E}});case 3:t=e.sent,c=t.data,a({type:O,payload:g(c.result,r,n)}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),a({type:v,payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}())):t(function(e){return function(a,t){a({type:y,payload:e})}}(a.prefCode))}}),Object(m.jsx)("label",{htmlFor:a.prefCode,children:a.prefName})]})},C=t(81),_=t(49);var L=function(e){var a=Object(o.c)((function(e){return e.dataList})),t=(a.message,function(e){var a=Object(_.randomColor)(),t={labels:[1960,1965,1970,1975,1980,1985,1990,1995,2e3,2005,2010,2015,2020,2025,2030,2035,2040,2045],datasets:[{label:"demo",data:[5039206,5171800,5184287,5338206,5575989,5679439,5643647,5692321,5683062,5627737,5506419,5381733,5216615,5016554,4791592,4546357,4280427,4004973],borderColor:a,backgroundColor:a,yAxisID:"y"}]},r=[];return e.forEach((function(e){e.data.forEach((function(e){var a=Object(_.randomColor)();r.push({label:e.label,data:e.dataList,borderColor:a,backgroundColor:a,yAxisID:"y"})}))})),{labels:e.length>0?e[0].years:t.labels,datasets:e.length>0?r:t.datasets}}(a.list));console.log(t);var r={responsive:!0,interaction:{mode:"index",intersect:!1},stacked:!1,plugins:{title:{display:!0,text:"Chart.js Line Chart - Multi Axis"},legend:{display:!0,position:"bottom"}},scales:{x:{ticks:{maxTicksLimit:5}},y:{type:"linear",display:!0,position:"left"},y1:{type:"linear",display:!0,position:"right",grid:{drawOnChartArea:!1}}}};return Object(m.jsxs)("div",{children:[Object(m.jsx)(C.a,{data:t,options:r})," "]})};var T=function(){var e=Object(o.b)();Object(r.useEffect)((function(){e(function(){var e=Object(d.a)(l.a.mark((function e(a){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:b}),e.prev=1,e.next=4,u.a.get("https://opendata.resas-portal.go.jp/api/v1/prefectures",{headers:{"X-API-KEY":E}});case 4:t=e.sent,(r=t.data).message?a({type:h,payload:r}):a({type:f,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),a({type:j,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}())}),[e]);var a=Object(o.c)((function(e){return e.prefectureList})),t=a.loading,n=a.error,c=a.prefectures;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("header",{children:"This is header"}),Object(m.jsx)("main",{className:"row",children:t?Object(m.jsx)("div",{children:"Loading..."}):n?Object(m.jsx)("div",{children:n}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"col-1-3",children:c.result.map((function(e){return Object(m.jsx)("div",{className:"check-conatainer",children:Object(m.jsx)(x,{prefecture:e})},e.prefCode)}))}),Object(m.jsx)("div",{className:"col-2-3",children:Object(m.jsx)("div",{className:"chart",children:Object(m.jsx)(L,{})})})]})})]})},S=t(18),I=t(80),A=t(3),k=t(5),N=Object(S.b)({prefectureList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,prefectures:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case b:return{loading:!0};case f:return{loading:!1,prefectures:a.payload};case h:return{loading:!1,message:a.payload};case j:return{loading:!1,error:a.payload};default:return e}},dataList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{list:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case O:return Object(k.a)(Object(k.a)({},e),{},{list:[].concat(Object(A.a)(e.list),[a.payload]),message:null});case v:return Object(k.a)(Object(k.a)({},e),{},{message:a.payload});case y:return Object(k.a)(Object(k.a)({},e),{},{list:e.list.filter((function(e){return e.id!==a.payload}))});default:return e}}}),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.c,w=Object(S.d)(N,R(Object(S.a)(I.a)));s.a.render(Object(m.jsx)(o.a,{store:w,children:Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(T,{})})}),document.getElementById("root"))},86:function(e,a,t){}},[[218,1,2]]]);
//# sourceMappingURL=main.a2451b17.chunk.js.map