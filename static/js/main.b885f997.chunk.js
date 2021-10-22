(this["webpackJsonpformula-1"]=this["webpackJsonpformula-1"]||[]).push([[0],{35:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c.n(s),a=c(12),n=c.n(a),i=(c(35),c(11)),l=c(9),o=c.n(l),j=c(60),d=c(64),h=c(66),u=c(1),b=function(){var e=[{label:"Driver Standings",value:"driverStandings"},{label:"Circuits",value:"circuits"},{label:"Race Schedule",value:"schedule"}],t=Object(s.useState)([]),c=Object(i.a)(t,2),r=c[0],a=c[1],n=Object(s.useState)(e[0].value),l=Object(i.a)(n,2),b=l[0],O=l[1],x=Object(s.useState)("2021"),m=Object(i.a)(x,2),v=m[0],p=m[1],g=Object(s.useState)(!0),N=Object(i.a)(g,2);N[0],N[1];return{searchResults:r,queryType:b,render:Object(u.jsxs)(j.a,{className:"search text-light",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("h1",{className:"text-primary",children:"Search"})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(d.a,{children:Object(u.jsxs)(d.a.Group,{children:[Object(u.jsx)(d.a.Label,{children:"Search Type"}),Object(u.jsx)(d.a.Control,{as:"select",onChange:function(e){return O(e.target.value)},children:e.map((function(e){return Object(u.jsx)("option",{value:e.value,children:e.label})}))})]})})})}),Object(u.jsx)("div",{className:"col searchParameters",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(d.a,{children:Object(u.jsxs)(d.a.Group,{className:"mb-3",controlId:"formYear",children:[Object(u.jsx)(d.a.Label,{children:"Year"}),Object(u.jsx)(d.a.Control,{type:"number",placeholder:v,min:"1950",max:"2021",step:"1",value:v,onChange:function(e){return p(e.target.value)}})]})})})})]}),Object(u.jsx)("div",{className:"mb-2",children:Object(u.jsx)(h.a,{onClick:function(){switch(b){case"driverStandings":!function(){o.a.get("https://ergast.com/api/f1/"+v+"/driverStandings.json").then((function(e){var t=JSON.parse(e.request.response).MRData;if(t.hasOwnProperty("StandingsTable")){var c={};t.StandingsTable.StandingsLists[0].DriverStandings.forEach((function(e){var t=e.Constructors[0];if(c.hasOwnProperty(t.constructorId)){var s=e.Driver;s.position=e.position,s.points=e.points,s.wins=e.wins,c[t.constructorId].Drivers.push(e.Driver)}else{var r=t.constructorId,a=[],n=e.Driver;n.position=e.position,n.points=e.points,n.wins=e.wins,a.push(e.Driver),t.Drivers=a,c[r]=t}})),a(Object.values(c))}else console.log("No StandingsTable...")})).catch((function(e){console.log(e)}))}();break;case"circuits":o.a.get("https://ergast.com/api/f1/"+v+"/circuits.json").then((function(e){var t=JSON.parse(e.request.response).MRData;console.log("Data",t.CircuitTable.Circuits),t.hasOwnProperty("CircuitTable")?a(t.CircuitTable.Circuits):console.log("No CircuitTable...")})).catch((function(e){console.log(e)}));break;case"schedule":o.a.get("https://ergast.com/api/f1/"+v+".json").then((function(e){var t=JSON.parse(e.request.response).MRData;console.log("Data",t.RaceTable.Races),t.hasOwnProperty("RaceTable")?a(t.RaceTable.Races):console.log("No RaceTable...")})).catch((function(e){console.log(e)}));break;default:console.log("QueryType not valid ",{queryType:b})}},children:"SEARCH"})})]})}},O=c(65),x=function(e){e.driverId,e.code;var t=e.url,c=e.givenName,s=e.familyName,r=(e.dateOfBirth,e.nationality,e.img,e.points),a=e.position,n=e.wins;return Object(u.jsx)("div",{className:"driver",children:Object(u.jsxs)(O.a,{bg:"primary",children:[Object(u.jsx)(O.a.Header,{as:"h4",style:{width:"14rem"},children:Object(u.jsxs)("a",{href:t,children:[c," ",s]})}),Object(u.jsx)(O.a.Body,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row",children:["points: ",r]}),Object(u.jsxs)("div",{className:"row",children:["position: ",a]}),Object(u.jsxs)("div",{className:"row",children:["wins: ",n]})]})})]})})},m=function(e){e.constructorId;var t=e.constructorName,c=e.constructorUrl,s=e.constructorNationality,r=(e.img,e.drivers);return Object(u.jsxs)("div",{className:"container standing",children:[Object(u.jsx)("div",{className:"row constructor",children:Object(u.jsx)("a",{href:c,children:Object(u.jsxs)("h2",{children:[t," - ",s]})})}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"drivers",children:Object(u.jsx)("div",{className:"driver",children:r.map((function(e){return Object(u.jsx)(x,{driverId:e.driverId,code:e.code,url:e.url,givenName:e.givenName,familyName:e.familyName,wins:e.wins,position:e.position,points:e.points},e.driverId)}))})})})]})},v=function(e){var t=e.searchResults;return Object.keys(t).length>0&&t[0].hasOwnProperty("constructorId")?Object(u.jsx)("div",{className:"container results-list",children:Object(u.jsx)("div",{className:"row",children:t.map((function(e){return Object(u.jsx)(m,{constructorId:e.constructorId,constructorUrl:e.url,constructorName:e.name,constructorNationality:e.nationality,drivers:e.Drivers},e.constructorId)}))})}):Object(u.jsx)("div",{})},p=c(61),g=c(28),N=function(e){var t=e.Circuit;return e.asCard?Object(u.jsx)("div",{className:"circuit",children:Object(u.jsxs)(O.a,{bg:"dark",children:[Object(u.jsx)(O.a.Header,{as:"h4",children:Object(u.jsx)("a",{href:t.url,children:t.circuitName})}),Object(u.jsx)(O.a.Body,{children:Object(u.jsxs)(j.a,{className:"circuit",children:[Object(u.jsx)(p.a,{children:Object(u.jsxs)(g.a,{children:["City: ",t.Location.locality]})}),Object(u.jsxs)(p.a,{children:[" ",Object(u.jsxs)(g.a,{children:[" Country: ",t.Location.country," "]})]}),Object(u.jsx)(p.a,{children:Object(u.jsxs)("a",{href:"http://maps.google.com/maps?t=k&z=20&q="+t.Location.lat+","+t.Location.long,className:"underline",children:[t.Location.lat,", ",t.Location.long]})})]})})]})}):Object(u.jsxs)(j.a,{className:"circuit",children:[Object(u.jsx)(p.a,{children:Object(u.jsx)(g.a,{children:Object(u.jsx)("h5",{children:Object(u.jsx)("a",{href:t.url,children:t.circuitName})})})}),Object(u.jsx)(p.a,{children:Object(u.jsxs)(g.a,{children:["City: ",t.Location.locality]})}),Object(u.jsxs)(p.a,{children:[" ",Object(u.jsxs)(g.a,{children:[" Country: ",t.Location.country," "]})]}),Object(u.jsx)(p.a,{children:Object(u.jsxs)("a",{href:"http://maps.google.com/maps?t=k&z=20&q="+t.Location.lat+","+t.Location.long,className:"underline",children:[t.Location.lat,", ",t.Location.long]})})]})},f=function(e){var t=e.searchResults;return Object.keys(t).length>0&&t[0].hasOwnProperty("circuitId")?Object(u.jsx)(j.a,{className:"results-list",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col",children:t.map((function(e){return Object(u.jsx)(N,{Circuit:e,asCard:!0})}))})})}):Object(u.jsx)("div",{})},y=c(63),w=c(62),C=function(e){var t=e.raceResult;return Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[" ",t.position," "]}),Object(u.jsxs)("td",{children:[" ",t.Driver.givenName," ",t.Driver.familyName," "]}),Object(u.jsxs)("td",{children:[" ",t.Constructor.name," "]}),Object(u.jsxs)("td",{children:[" ",t.hasOwnProperty("FastestLap")?t.FastestLap.Time.time:"No data"," "]}),Object(u.jsxs)("td",{children:[" ",t.hasOwnProperty("Time")?t.Time.time:"No data"," "]}),Object(u.jsxs)("td",{children:[" ",t.status," "]}),Object(u.jsxs)("td",{children:[" ",t.number," "]}),Object(u.jsxs)("td",{children:[" ",t.hasOwnProperty("grid")&&0!=t.grid?t.grid:"Pit"," "]})]})},R=function(e){var t=e.searchResults;return 0!==t.length&&t[0].hasOwnProperty("position")?Object(u.jsxs)(w.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,variant:"dark",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Position"}),Object(u.jsx)("th",{children:"Driver"}),Object(u.jsx)("th",{children:"Constructor"}),Object(u.jsx)("th",{children:"Fastest Lap"}),Object(u.jsx)("th",{children:"Finishing Time"}),Object(u.jsx)("th",{children:"Status"}),Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Starting Position"})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsx)(C,{raceResult:e})}))})]}):Object(u.jsx)("div",{children:"Searching..."})},S=function(e){var t=e.Race,c=Object(s.useState)([]),r=Object(i.a)(c,2),a=r[0],n=r[1],l=new Date(t.date);return l=l.toLocaleDateString(),Object(u.jsx)(j.a,{className:"scheduleRace",children:Object(u.jsxs)(O.a,{bg:"primary",children:[Object(u.jsx)(O.a.Header,{as:"h4",children:Object(u.jsx)("a",{href:t.url,children:t.raceName})}),Object(u.jsx)(O.a.Body,{children:Object(u.jsxs)(j.a,{children:[Object(u.jsxs)(p.a,{children:[Object(u.jsxs)(g.a,{children:[" ",Object(u.jsxs)("strong",{children:[" ",Object(u.jsx)("a",{href:t.Circuit.url,children:t.Circuit.circuitName})]})]})," "]}),Object(u.jsxs)(p.a,{children:[Object(u.jsxs)(g.a,{children:[t.Circuit.Location.locality,","," ",t.Circuit.Location.country]})," "]}),Object(u.jsx)(p.a,{children:Object(u.jsxs)("a",{href:"http://maps.google.com/maps?t=k&z=20&q="+t.Circuit.Location.lat+","+t.Circuit.Location.long,className:"underline",children:[t.Circuit.Location.lat,", ",t.Circuit.Location.long]})}),Object(u.jsx)(p.a,{children:Object(u.jsxs)(g.a,{children:[l+" at ",t.time]})}),Object(u.jsxs)(p.a,{children:[Object(u.jsxs)(g.a,{children:[" Round ",t.round," "]})," "]})]})}),Object(u.jsx)(y.a,{children:Object(u.jsxs)(O.a,{bg:"dark",children:[Object(u.jsx)(O.a.Header,{children:Object(u.jsx)(y.a.Toggle,{as:h.a,variant:"secondary",eventKey:"1",onClick:function(){o.a.get("https://ergast.com/api/f1/"+t.season+"/"+t.round+"/results.json").then((function(e){var t=JSON.parse(e.request.response).MRData;t.hasOwnProperty("RaceTable")?n(t.RaceTable.Races[0].Results):console.log("No RaceTable...")})).catch((function(e){console.log(e)}))},children:"Race Results"})}),Object(u.jsx)(y.a.Collapse,{eventKey:"1",children:Object(u.jsx)(O.a.Body,{children:Object(u.jsx)(R,{searchResults:a})})})]})})]})})},T=function(e){var t=e.searchResults;return Object.keys(t).length>0&&t[0].hasOwnProperty("Circuit")?Object(u.jsx)(j.a,{className:"results-list",children:Object(u.jsx)("div",{className:"row",children:t.map((function(e){return Object(u.jsx)(S,{Race:e},e.date)}))})}):Object(u.jsx)("div",{})},L=function(e){var t=e.searchResults,c="";switch(e.queryType){case"driverStandings":c=v;break;case"circuits":c=f;break;case"schedule":c=T;break;default:c=v}return Object.keys(t).length>0?Object(u.jsx)(j.a,{className:"results",children:Object(u.jsx)("div",{children:Object(u.jsx)(c,{searchResults:t})})}):Object(u.jsx)("div",{})};var D=function(){var e=b(),t=e.render,c=e.searchResults,s=e.queryType;return Object(u.jsxs)(j.a,{className:"App",style:{height:"100%"},children:[Object(u.jsx)("h2",{className:"top-title",style:{fontSize:"100%"},children:"\ud83c\udfce\ufe0f\ud83c\udfce\ufe0f Formula1-stats \ud83c\udfce\ufe0f\ud83c\udfce\ufe0f"}),Object(u.jsxs)(j.a,{className:"main",children:[Object(u.jsx)(p.a,{className:"mt-3",children:t}),0!==c.length?Object(u.jsx)(p.a,{className:"row mt-3",children:Object(u.jsx)(L,{searchResults:c,queryType:s})}):Object(u.jsx)(p.a,{style:{height:"100vh"}})]})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),r(e),a(e),n(e)}))};n.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root")),k()}},[[58,1,2]]]);
//# sourceMappingURL=main.b885f997.chunk.js.map