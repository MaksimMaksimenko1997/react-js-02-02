(this["webpackJsonphw-02-02"]=this["webpackJsonphw-02-02"]||[]).push([[0],{1:function(e,t,n){e.exports={form:"InputForm_form__18HTs",label:"InputForm_label__1vrib",input:"InputForm_input__AWv31",btn:"InputForm_btn__Rji2G"}},15:function(e,t,n){e.exports=n(29)},2:function(e,t,n){e.exports={list:"Phonebook_list__mDIVc",item:"Phonebook_item__36eRa",close:"Phonebook_close__3NC4l"}},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),l=n.n(c),o=n(14),i=n(4),u=n(5),s=n(7),m=n(6),b=n(12),p=n.n(b),h=n(13),f=n(1),d=n.n(f),_=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{className:d.a.form,onSubmit:this.handleSubmit},r.a.createElement("label",{className:d.a.label,htmlFor:"name"},"Name"),r.a.createElement("input",{id:"name",type:"text",onChange:this.handleChange,className:d.a.input,name:"name",value:t,placeholder:"Name"}),r.a.createElement("label",{className:d.a.label,htmlFor:"number"},"Number"),r.a.createElement("input",{id:"number",type:"text",onChange:this.handleChange,className:d.a.input,name:"number",value:n,placeholder:"Phone number"}),r.a.createElement("button",{type:"submit",className:d.a.btn},"Add contact"))}}]),n}(a.Component),v=n(8),E=n.n(v),g=function(e){var t=e.value,n=e.onChange;return r.a.createElement("div",{className:E.a.wrapper},r.a.createElement("label",{className:E.a.label},"Find by Name",r.a.createElement("input",{className:E.a.input,type:"text",value:t,onChange:n})))};g.defaultProps={value:""};var C=g,N=n(2),F=n.n(N),y=function(e){var t=e.name,n=e.number,a=e.id,c=e.onDelete;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,t," : ",n),r.a.createElement("button",{type:"button",className:F.a.close,onClick:function(){return c(a)}},"+"))},w=function(e){var t=e.contacts,n=e.onDelete;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("ul",{className:F.a.list},t.map((function(e){return r.a.createElement("li",{className:F.a.item,key:e.id},r.a.createElement(y,Object.assign({},e,{onDelete:n})))}))))};w.defaultProps={contacts:[]};var j=w,k=n(9),O=n.n(k),S=function(e){var t=e.title,n=e.children;return r.a.createElement("section",{className:O.a.section},t&&r.a.createElement("h2",{className:O.a.heading},t),n)};S.defaultProps={title:"",children:[]};var x=S,P=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],name:"",number:"",filter:""},e.addContact=function(t){var n=t.name,a=t.number,r={id:p.a.generate(),name:n,number:a};e.state.contacts.some((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already exists!")):e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(o.a)(t))}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){var n=t.currentTarget.value;e.setState({filter:n})},e.getFilteredContacts=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.getFilteredContacts(),t=this.state.filter;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{title:"Phonebook"},r.a.createElement(_,{onSubmit:this.addContact})),r.a.createElement(x,{title:"Contacts"},r.a.createElement(C,{value:t,onChange:this.changeFilter}),r.a.createElement(j,{contacts:e,onDelete:this.deleteContact})))}}]),n}(a.Component);n(28);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))},8:function(e,t,n){e.exports={wrapper:"Filter_wrapper__FXHbJ",label:"Filter_label__21zGb",input:"Filter_input__3n0Us"}},9:function(e,t,n){e.exports={section:"Container_section__3sk9N",heading:"Container_heading__2p88d"}}},[[15,1,2]]]);
//# sourceMappingURL=main.cd62a532.chunk.js.map