(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(2),c=n.n(s),a=n(12),i=n.n(a),l=n(13),j=n(14),o=n(17),d=n(16),h=n(15),u=n.n(h),b=function(){return u.a.get("https://randomuser.me/api/?results=20&nat=us")},m=function(e){return Object(r.jsx)("tbody",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{src:e.image,alt:""})}),Object(r.jsx)("td",{children:e.first}),Object(r.jsx)("td",{children:e.last}),Object(r.jsx)("td",{children:e.email}),Object(r.jsx)("td",{children:e.age})]})})},O=(n(40),function(e){return Object(r.jsxs)("div",{className:"jumbotron",children:[Object(r.jsx)("h1",{children:"Employee Directory"}),Object(r.jsx)("h6",{children:"Enter first name of employee to search for colleague"}),Object(r.jsx)("input",{type:"text",name:"search",placeholder:"Search by First Name",onChange:e.handleInput})]})}),p=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={employees:[],search:"",filteredEmployees:[]},e.handleInput=function(t){e.setState({search:t.target.value});var n=e.state.employees.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(t.target.value.toLowerCase())}));e.setState({filteredEmployees:n})},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.filteredEmployees.map((function(e,t){return Object(r.jsx)(m,{first:e.name.first,last:e.name.last,image:e.picture.thumbnail,email:e.email,age:e.dob.age},t)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)(O,{handleInput:this.handleInput,value:this.state.search}),Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsx)("div",{className:"table-responsive",children:Object(r.jsxs)("table",{className:"table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Image"}),Object(r.jsx)("th",{children:"First Name"}),Object(r.jsx)("th",{children:"Last Name"}),Object(r.jsx)("th",{children:"Email"}),Object(r.jsx)("th",{children:"Age"})]})}),e]})})})]})}}]),n}(c.a.Component);var f=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(p,{})})};n(41);i.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b72912f5.chunk.js.map