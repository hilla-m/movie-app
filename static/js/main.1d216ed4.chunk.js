(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(12),i=a.n(s),m=(a(20),a.p,a(21),a(8)),r=a(13),o=a(14),l=function(){function e(t,a,n,c,s){Object(r.a)(this,e),this.firstName=t,this.lastName=a,this.birthday=n,this.image=c,this.imdbLink=s,this.age=this.calcAge(this.birthday)}return Object(o.a)(e,[{key:"calcAge",value:function(e){return(new Date).getFullYear()-new Date(e).getFullYear()}}]),e}(),j=a(30),h=a(31),M=a(32),w=a(33),b=(a(22),a(5));var d=function(e){var t=e.actor;return Object(b.jsxs)(w.a,{style:{width:"18rem"},children:[Object(b.jsx)(w.a.Img,{className:"actorImg",variant:"top",src:t.image}),Object(b.jsxs)(w.a.Body,{children:[Object(b.jsx)(w.a.Title,{children:Object(b.jsxs)("a",{className:"imdbLink",href:t.imdbLink,target:"_blank",children:[t.firstName," ",t.lastName]})}),Object(b.jsxs)(w.a.Text,{children:["Age: ",t.age]})]})]})};a(24);var g=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)("firstName"),r=Object(m.a)(i,2),o=r[0],w=r[1],g=Object(n.useState)([new l("Johnny","Depp","June 9, 1963","https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY317_CR4,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000136/"),new l("Ben","Affleck","Augost 15, 1972","https://m.media-amazon.com/images/M/MV5BMzczNzNiMDAtMmUzZS00MTkwLWIwOTYtNmYyNjg3MTVkNThhXkEyXkFqcGdeQXVyMjA4MjI5MTA@._V1_UY317_CR12,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000255/"),new l("Emma","Stone","November 6, 1988","https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_UX214_CR0,0,214,317_AL_.jpg","https://www.imdb.com/name/nm1297015/"),new l("Ryan","Gosling","November 12, 1980","https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_UY317_CR18,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0331516/"),new l("Charlize","Theron","August 7, 1975","https://m.media-amazon.com/images/M/MV5BMTk5Mzc4ODU0Ml5BMl5BanBnXkFtZTcwNjU1NTI0Mw@@._V1_UY317_CR12,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000234/"),new l("Bradley","Cooper","January 5, 1975","https://m.media-amazon.com/images/M/MV5BMjM0OTIyMzY1M15BMl5BanBnXkFtZTgwMTg0OTE0NzE@._V1_UX214_CR0,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0177896/"),new l("Keira","Knightley","March 26, 1985","https://m.media-amazon.com/images/M/MV5BMTYwNDM0NDA3M15BMl5BanBnXkFtZTcwNTkzMjQ3OA@@._V1_UY317_CR6,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0461136/"),new l("Matthew","McConaughey","November 4, 1969","https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000190/")]),u=Object(m.a)(g,2),p=u[0],N=(u[1],p.filter((function(e){return e.firstName.toLowerCase().includes(c.toLowerCase())||e.lastName.toLowerCase().includes(c.toLowerCase())})));N.sort((function(e,t){return e[o]>t[o]?1:e[o]<t[o]?-1:0}));var O=N.map((function(e){return Object(b.jsx)(d,{actor:e})}));return Object(b.jsxs)(j.a,{className:"container",children:[Object(b.jsx)(h.a,{className:"title",children:Object(b.jsx)("h1",{children:"Actors Gallery"})}),Object(b.jsx)(M.a,{children:Object(b.jsxs)(M.a.Row,{class:"form-row",children:[Object(b.jsx)(M.a.Label,{className:"label",children:"Search"}),Object(b.jsx)(M.a.Control,{type:"text",className:"filter",placeholder:"Search...",value:c,onChange:function(e){return s(e.target.value)}}),Object(b.jsx)(M.a.Label,{className:"label",children:"Sort By"}),Object(b.jsxs)(M.a.Control,{as:"select",className:"sort",value:o,onChange:function(e){return w(e.target.value)},children:[Object(b.jsx)("option",{value:"firstName",children:"First Name"}),Object(b.jsx)("option",{value:"lastName",children:"Last Name"}),Object(b.jsx)("option",{value:"age",children:"Age"})]})]})}),Object(b.jsx)(h.a,{className:"cards-div",xs:1,md:2,lg:5,children:O})]})};a(28);var u=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(g,{})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),p()}},[[29,1,2]]]);
//# sourceMappingURL=main.1d216ed4.chunk.js.map