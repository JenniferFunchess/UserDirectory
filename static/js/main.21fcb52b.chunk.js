(this.webpackJsonpuserdirectory=this.webpackJsonpuserdirectory||[]).push([[0],{25:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(2),c=s.n(n),a=s(14),i=s.n(a);s(25),s(4);var l=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"jumbotron jumbotron-fluid",id:"jumboTron",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("h1",{className:"display-4",children:[Object(r.jsx)("i",{className:"fas fa-user-friends"})," ",Object(r.jsx)("b",{children:"Company Directory"})]}),Object(r.jsx)("p",{className:"lead",children:"Search by first or last name or select a column heading to sort."})]})})})},d=s(15),o=s(16),j=s(19),h=s(18),u=s(17),b=s.n(u),m=function(){return b.a.get("https://randomuser.me/api?nat=us&inc=id,name,phone,dob,picture,email&results=10")},O=(s(44),function(e){return Object(r.jsx)("form",{children:Object(r.jsx)("div",{className:"form-group search-widget",children:Object(r.jsx)("div",{className:"input-group mb-3",children:Object(r.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search directory for Employee",id:"search"})})})})}),x=s(5),f=s.n(x),p=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(d.a)(this,s);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={search:"",sortOrder:"",results:[]},e.handleInputChange=function(t){if("search"===t.target.name){var s=t.target.value.toLowerCase();e.setState({search:s})}},e.sortByFirst=function(){var t=e.state.results.sort((function(e,t){return t.name.first>e.name.first?-1:e.name.first>t.name.first?1:0}));"DESC"===e.state.sortOrder?(t.reverse(),e.setState({sortOrder:"ASC"})):e.setState({sortOrder:"DESC"}),e.setState({results:t})},e.sortByLast=function(){var t=e.state.results.sort((function(e,t){return t.name.last>e.name.last?-1:e.name.last>t.name.last?1:0}));"DESC"===e.state.sortOrder?(t.reverse(),e.setState({sortOrder:"ASC"})):e.setState({sortOrder:"DESC"}),e.setState({results:t})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;m().then((function(t){e.setState({results:t.data.results}),console.log(e.state.results)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)(O,{search:this.state.search,handleInputChange:this.handleInputChange}),Object(r.jsx)("div",{className:"table-responsive",children:Object(r.jsxs)("table",{className:"table table-striped table-resposive text-center table-hover",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Image"}),Object(r.jsxs)("th",{children:["First Name"," ",Object(r.jsx)("span",{className:"downArrow",onClick:this.sortByFirst,children:">"})]}),Object(r.jsxs)("th",{children:["Last Name"," ",Object(r.jsx)("span",{className:"downArrow",onClick:this.sortByLast,children:">"})]}),Object(r.jsx)("th",{children:"Phone"}),Object(r.jsx)("th",{children:"Email"}),Object(r.jsx)("th",{children:"DOB "})]})}),this.state.results&&this.state.results.map((function(t){return t.name.first.toLowerCase().includes(e.state.search)?Object(r.jsx)("tbody",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{src:t.picture.thumbnail,className:"rounded-circle",alt:"thumbnail"})}),Object(r.jsx)("td",{children:t.name.first}),Object(r.jsx)("td",{children:t.name.last}),Object(r.jsx)("td",{children:t.phone}),Object(r.jsx)("td",{children:t.email}),Object(r.jsx)("td",{children:f()(t.dob.date,"mediumDate")})]})},t.login):t.name.last.toLowerCase().includes(e.state.search)?Object(r.jsxs)("tbody",{children:[t,Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{src:t.picture.thumbnail,className:"rounded-circle",alt:"thumbnail"})}),Object(r.jsx)("td",{children:t.name.first}),Object(r.jsx)("td",{children:t.name.last}),Object(r.jsxs)("td",{children:[t.phone," "]}),Object(r.jsx)("td",{children:t.email}),Object(r.jsx)("td",{children:f()(t.dob.date,"mediumDate")})]})]},t.login):null}))]})})]})}}]),s}(c.a.Component);var v=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{}),Object(r.jsx)(p,{})]})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,46)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),r(e),n(e),c(e),a(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),g()}},[[45,1,2]]]);
//# sourceMappingURL=main.21fcb52b.chunk.js.map