(this["webpackJsonpsecret-santa"]=this["webpackJsonpsecret-santa"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(14),s=a.n(r),i=(a(19),a(20),a(2)),l=a(12),o=a(6),j=a(27),m=a(28),u=a(30),d=a(31),b=a(29),h=a(0);var f=function(){var e=c.a.useState([]),t=Object(o.a)(e,2),a=t[0],n=t[1],r=c.a.useState({email:"",name:""}),s=Object(o.a)(r,2),f=s[0],O=s[1];return Object(h.jsxs)(j.a,{children:[Object(h.jsx)(m.a,{style:{width:"50%",margin:"auto"},children:Object(h.jsxs)(u.a,{children:[Object(h.jsxs)(u.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(h.jsx)(u.a.Control,{type:"email",placeholder:"Enter email",value:f.email,onChange:function(e){return O(Object(i.a)(Object(i.a)({},f),{},{email:e.target.value}))}}),Object(h.jsx)(u.a.Text,{className:"text-muted"})]}),Object(h.jsx)(u.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(h.jsx)(u.a.Control,{type:"text",placeholder:"Name",value:f.name,onChange:function(e){return O(Object(i.a)(Object(i.a)({},f),{},{name:e.target.value}))}})}),Object(h.jsx)(d.a,{variant:"primary",type:"submit",onClick:function(e){return function(e){e.preventDefault(),n([].concat(Object(l.a)(a),[f])),O({email:"",name:""})}(e)},children:"Add a secret Santa"})]})}),Object(h.jsxs)(m.a,{className:"mt-3",children:[Object(h.jsx)("h3",{children:"Total secret santas"}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"center"},children:a.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:[e.email," ",Object(h.jsx)(b.a,{bg:"secondary",children:e.name})," ",Object(h.jsx)(d.a,{variant:"danger",onClick:function(){return n((function(t){return t.filter((function(t){return t.name!==e.name}))}))},children:"delete"})]})},e.name)}))})]}),Object(h.jsx)(d.a,{onClick:function(){!function(){for(var e=[],t=Object(l.a)(a),n=0;n<a.length;n++){var c=Math.floor(Math.random()*t.length),r=t[c];r.email!==a[n].email?(e.push({email:a[n].email,secretSanta:r.name}),t.splice(c,1)):n--}console.log(e),e.forEach((function(e){window.Email.send({Host:"smtp.elasticemail.com",Username:"halitfuatbatur@gmail.com",Password:"B661DB3F65D33FA31A24C73028A859FB9AC5",To:"".concat(e.email),From:"halitfuatbatur@gmail.com",Subject:"testest",Body:"you are ".concat(e.secretSanta,"'s secret Santa ENJOOY ")}).then((function(){return window.alert("sent")}))}))}()},children:"SEND EMAILS"})]})},O=a.p+"static/media/santagif.ea5fe05a.gif";var p=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:O,alt:"Logo"}),Object(h.jsx)(f,{})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};a(24);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),x()}},[[25,1,2]]]);
//# sourceMappingURL=main.f40a2f60.chunk.js.map