(this["webpackJsonpformula-1"]=this["webpackJsonpformula-1"]||[]).push([[0],{31:function(e,s,t){},55:function(e,s,t){"use strict";t.r(s);var c=t(0),r=t.n(c),n=t(25),i=t.n(n),a=(t(31),t(8)),o=t(9),l=t.n(o),j=t(1),d=t(58),b=function(e){e.driverId,e.code;var s=e.url,t=e.givenName,c=e.familyName,r=(e.dateOfBirth,e.nationality,e.img,e.points),n=e.position,i=e.wins;return Object(j.jsx)("div",{className:"driver",children:Object(j.jsxs)(d.a,{bg:"primary",children:[Object(j.jsx)(d.a.Header,{as:"h4",style:{width:"14rem"},children:Object(j.jsxs)("a",{href:s,children:[t," ",c]})}),Object(j.jsx)(d.a.Body,{children:Object(j.jsx)(d.a.Text,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"row",children:["points: ",r]}),Object(j.jsxs)("div",{className:"row",children:["position: ",n]}),Object(j.jsxs)("div",{className:"row",children:["wins: ",i]})]})})})]})})},h=function(e){e.constructorId;var s=e.constructorName,t=e.constructorUrl,c=e.constructorNationality,r=(e.img,e.drivers);return Object(j.jsxs)("div",{className:"container standing",children:[Object(j.jsx)("div",{className:"row constructor",children:Object(j.jsx)("a",{href:t,children:Object(j.jsxs)("h2",{children:[s," - ",c]})})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"drivers",children:Object(j.jsx)("div",{className:"driver",children:r.map((function(e){return Object(j.jsx)(b,{driverId:e.driverId,code:e.code,url:e.url,givenName:e.givenName,familyName:e.familyName,wins:e.wins,position:e.position,points:e.points})}))})})})]})},u=function(e){var s=e.constructorDrivers,t=e.year;return Object.keys(s).length>0?Object(j.jsxs)("div",{className:"container results-list",children:[Object(j.jsx)("h2",{children:""!==t?t:"t"}),Object(j.jsx)("div",{className:"row",children:s.map((function(e){return Object(j.jsx)(h,{constructorId:e.constructorId,constructorUrl:e.url,constructorName:e.name,constructorNationality:e.nationality,drivers:e.Drivers})}))})]}):Object(j.jsx)("div",{})},O=t(56),m=t(54),v=t(59),x=function(){var e=Object(c.useState)([]),s=Object(a.a)(e,2),t=(s[0],s[1],Object(c.useState)([])),r=Object(a.a)(t,2),n=r[0],i=r[1],o=Object(c.useState)("2021"),d=Object(a.a)(o,2),b=d[0],h=d[1],x=Object(c.useState)(0),p=Object(a.a)(x,2),N=p[0],g=(p[1],Object(a.a)("",2));g[0],g[1];return Object(j.jsxs)(O.a,{className:"search text-light",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("h1",{className:"text-primary",children:"Search"})}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)(m.a,{children:Object(j.jsxs)(m.a.Group,{children:[Object(j.jsx)(m.a.Label,{children:"Search Type"}),Object(j.jsxs)(m.a.Control,{as:"select",children:[Object(j.jsx)("option",{value:"constructorAndDrivers",children:"Driver Standings"}),Object(j.jsx)("option",{value:"circuits",children:"Circuits - Coming soon"}),Object(j.jsx)("option",{value:"raceResults",children:"Race Results - Coming soon"}),Object(j.jsx)("option",{value:"seasonResults",children:"Season Results - Coming soon"})]})]})})})}),Object(j.jsx)("div",{className:"col searchParameters",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)(m.a,{children:[Object(j.jsxs)(m.a.Group,{className:"mb-3",controlId:"formYear",children:[Object(j.jsx)(m.a.Label,{children:"Year"}),Object(j.jsx)(m.a.Control,{type:"number",placeholder:b,min:"1950",max:"2021",step:"1",value:b,onChange:function(e){return h(e.target.value)}})]}),Object(j.jsxs)(m.a.Group,{className:"mb-3",controlId:"formYear",children:[Object(j.jsx)(m.a.Label,{children:"Round"}),Object(j.jsx)(m.a.Control,{type:"number",placeholder:N,min:"0",max:"22",step:"1",value:N,onChange:function(e){return h(e.target.value)}})]})]})})})]}),Object(j.jsx)("div",{className:"mb-2",children:Object(j.jsx)(v.a,{onClick:function(){l.a.get("http://ergast.com/api/f1/"+b+"/driverStandings.json").then((function(e){var s=JSON.parse(e.request.response).MRData;if(s.hasOwnProperty("StandingsTable")){var t={};s.StandingsTable.StandingsLists[0].DriverStandings.forEach((function(e){var s=e.Constructors[0];if(t.hasOwnProperty(s.constructorId)){var c=e.Driver;c.position=e.position,c.points=e.points,c.wins=e.wins,t[s.constructorId].Drivers.push(e.Driver)}else{var r=s.constructorId,n=[],i=e.Driver;i.position=e.position,i.points=e.points,i.wins=e.wins,n.push(e.Driver),console.log("NEW DRIVER array"),s.Drivers=n,t[r]=s}}));var c=Object.values(t);console.log("constructors object being set"),console.log(c),i(c)}else console.log("No StandingsTable...")})).catch((function(e){console.log(e)}))},children:"SEARCH"})}),Object(j.jsx)("div",{children:Object(j.jsx)(u,{constructorDrivers:n})})]})},p=t(57),N=t(26);var g=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)(p.a,{className:"top-title",children:[Object(j.jsx)(N.a,{className:"car-emoji",children:"\ud83c\udfce\ufe0f\ud83c\udfce\ufe0f"}),Object(j.jsx)(N.a,{xs:8,children:Object(j.jsx)("strong",{children:"F1 Information Sation "})}),Object(j.jsx)(N.a,{className:"car-emoji",children:"\ud83c\udfce\ufe0f\ud83c\udfce\ufe0f"})]}),Object(j.jsx)("div",{className:"row mt-3",children:Object(j.jsx)(x,{})})]})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(s){var t=s.getCLS,c=s.getFID,r=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),c(e),r(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),f()}},[[55,1,2]]]);
//# sourceMappingURL=main.00c519a5.chunk.js.map