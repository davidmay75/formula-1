(this["webpackJsonpformula-1"]=this["webpackJsonpformula-1"]||[]).push([[0],{30:function(e,t,s){},53:function(e,t,s){"use strict";s.r(t);var c=s(0),r=s.n(c),i=s(25),a=s.n(i),n=(s(30),s(10)),l=s(9),o=s.n(l),d=s(54),j=s(56),u=s(58),h=s(1),b=function(){var e=Object(c.useState)([]),t=Object(n.a)(e,2),s=t[0],r=t[1],i=Object(c.useState)("driverStandings"),a=Object(n.a)(i,2),l=a[0],b=a[1],O=Object(c.useState)("2021"),v=Object(n.a)(O,2),m=v[0],x=v[1],p=Object(c.useState)(!0),N=Object(n.a)(p,2);N[0],N[1];return{searchResults:s,queryType:l,render:Object(h.jsxs)(d.a,{className:"search text-light",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("h1",{className:"text-primary",children:"Search"})}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(j.a,{children:Object(h.jsxs)(j.a.Group,{children:[Object(h.jsx)(j.a.Label,{children:"Search Type"}),Object(h.jsx)(j.a.Control,{as:"select",onChange:function(e){return b(e.target.value)},children:[{label:"Driver Standings",value:"driverStandings"},{label:"Circuits",value:"circuits"}].map((function(e){return Object(h.jsx)("option",{value:e.value,children:e.label})}))})]})})})}),Object(h.jsx)("div",{className:"col searchParameters",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(j.a,{children:Object(h.jsxs)(j.a.Group,{className:"mb-3",controlId:"formYear",children:[Object(h.jsx)(j.a.Label,{children:"Year"}),Object(h.jsx)(j.a.Control,{type:"number",placeholder:m,min:"1950",max:"2021",step:"1",value:m,onChange:function(e){return x(e.target.value)}})]})})})})]}),Object(h.jsx)("div",{className:"mb-2",children:Object(h.jsx)(u.a,{onClick:function(){switch(l){case"driverStandings":!function(){o.a.get("https://ergast.com/api/f1/"+m+"/driverStandings.json").then((function(e){var t=JSON.parse(e.request.response).MRData;if(t.hasOwnProperty("StandingsTable")){var s={};t.StandingsTable.StandingsLists[0].DriverStandings.forEach((function(e){var t=e.Constructors[0];if(s.hasOwnProperty(t.constructorId)){var c=e.Driver;c.position=e.position,c.points=e.points,c.wins=e.wins,s[t.constructorId].Drivers.push(e.Driver)}else{var r=t.constructorId,i=[],a=e.Driver;a.position=e.position,a.points=e.points,a.wins=e.wins,i.push(e.Driver),t.Drivers=i,s[r]=t}})),r(Object.values(s))}else console.log("No StandingsTable...")})).catch((function(e){console.log(e)}))}();break;case"circuits":o.a.get("https://ergast.com/api/f1/"+m+"/circuits.json").then((function(e){var t=JSON.parse(e.request.response).MRData;console.log("Data",t.CircuitTable.Circuits),t.hasOwnProperty("CircuitTable")?r(t.CircuitTable.Circuits):console.log("No CircuitTable...")})).catch((function(e){console.log(e)}));break;default:console.log("QueryType not valid ",{queryType:l})}},children:"SEARCH"})})]})}},O=s(57),v=function(e){e.driverId,e.code;var t=e.url,s=e.givenName,c=e.familyName,r=(e.dateOfBirth,e.nationality,e.img,e.points),i=e.position,a=e.wins;return Object(h.jsx)("div",{className:"driver",children:Object(h.jsxs)(O.a,{bg:"primary",children:[Object(h.jsx)(O.a.Header,{as:"h4",style:{width:"14rem"},children:Object(h.jsxs)("a",{href:t,children:[s," ",c]})}),Object(h.jsx)(O.a.Body,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:["points: ",r]}),Object(h.jsxs)("div",{className:"row",children:["position: ",i]}),Object(h.jsxs)("div",{className:"row",children:["wins: ",a]})]})})]})})},m=function(e){e.constructorId;var t=e.constructorName,s=e.constructorUrl,c=e.constructorNationality,r=(e.img,e.drivers);return Object(h.jsxs)("div",{className:"container standing",children:[Object(h.jsx)("div",{className:"row constructor",children:Object(h.jsx)("a",{href:s,children:Object(h.jsxs)("h2",{children:[t," - ",c]})})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"drivers",children:Object(h.jsx)("div",{className:"driver",children:r.map((function(e){return Object(h.jsx)(v,{driverId:e.driverId,code:e.code,url:e.url,givenName:e.givenName,familyName:e.familyName,wins:e.wins,position:e.position,points:e.points},e.driverId)}))})})})]})},x=function(e){var t=e.searchResults;return Object.keys(t).length>0&&t[0].hasOwnProperty("constructorId")?Object(h.jsx)("div",{className:"container results-list",children:Object(h.jsx)("div",{className:"row",children:t.map((function(e){return Object(h.jsx)(m,{constructorId:e.constructorId,constructorUrl:e.url,constructorName:e.name,constructorNationality:e.nationality,drivers:e.Drivers},e.constructorId)}))})}):Object(h.jsx)("div",{})},p=function(e){e.circuitId;var t=e.circuitName,s=e.url,c=e.Location;return Object(h.jsx)("div",{className:"driver",children:Object(h.jsxs)(O.a,{bg:"primary",children:[Object(h.jsx)(O.a.Header,{as:"h4",style:{width:"14rem"},children:Object(h.jsx)("a",{href:s,children:t})}),Object(h.jsx)(O.a.Body,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:["City: ",c.locality]}),Object(h.jsxs)("div",{className:"row",children:["Country: ",c.country]}),Object(h.jsxs)("div",{className:"row",children:["Location: ",c.lat," ",c.long]})]})})]})})},N=function(e){var t=e.searchResults;return Object.keys(t).length>0&&t[0].hasOwnProperty("circuitId")?Object(h.jsx)(d.a,{className:"results-list",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:t.map((function(e){return Object(h.jsx)(p,{circuitId:e.circuitId,circuitName:e.circuitName,url:e.url,Location:e.Location},e.circuitId)}))})})}):Object(h.jsx)("div",{})},g=function(e){var t=e.searchResults,s="";switch(e.queryType){case"driverStandings":s=x;break;case"circuits":s=N;break;default:s=x}return Object.keys(t).length>0?Object(h.jsx)(d.a,{className:"results",children:Object(h.jsx)("div",{children:Object(h.jsx)(s,{searchResults:t})})}):Object(h.jsx)("div",{})},f=s(55);var y=function(){var e=b(),t=e.render,s=e.searchResults,c=e.queryType;return Object(h.jsxs)(d.a,{className:"App",style:{height:"100%"},children:[Object(h.jsx)("h2",{className:"top-title",style:{fontSize:"100%"},children:"\ud83c\udfce\ufe0f\ud83c\udfce\ufe0f F1 Information Sation \ud83c\udfce\ufe0f\ud83c\udfce\ufe0f"}),Object(h.jsxs)(d.a,{className:"main",children:[Object(h.jsx)(f.a,{className:"mt-3",children:t}),0!==s.length?Object(h.jsx)(f.a,{className:"row mt-3",children:Object(h.jsx)(g,{searchResults:s,queryType:c})}):Object(h.jsx)(f.a,{style:{height:"100vh"}})]})]})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,59)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),w()}},[[53,1,2]]]);
//# sourceMappingURL=main.b473dc04.chunk.js.map