(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c);a(15);var o=function(){return r.a.createElement("h1",{className:"headline"},"todos")},i=a(1),l=a(2),u=a(4),m=a(3),d=a(6),f=a(5),p=(a(16),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleKeyPress=function(e){var t=e.target.value;13===e.keyCode&&(e.preventDefault(),""!==t&&/\S/.test(t)&&(e.target.value="",a.setState({isOpen:!0}),a.props.getText(t)))},a.state={isOpen:!1},a.handleKeyPress=a.handleKeyPress.bind(Object(d.a)(a)),a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("textarea",{wrap:"off",className:"main__input-area js-input-text",placeholder:"What needs to be done?",onKeyDown:this.handleKeyPress})}}]),t}(n.Component));a(17);var h=function(){return r.a.createElement("div",{className:"checked-items"},String.fromCharCode(709))},O=(a(18),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={isOpen:!1},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.todolist;return console.log("\u0438\u0437 itemlist"),console.log(e),r.a.createElement("div",{className:"listItemWrapper"},e.title)}}]),t}(n.Component)),b=(a(19),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={isOpen:!1},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.todoList.map(function(e){return r.a.createElement("li",{key:e.id,className:"list-item"},r.a.createElement(O,{todolist:e}))});return r.a.createElement("ul",{className:"main__task-list"},e)}}]),t}(n.Component)),v=(a(20),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getTextFromTextarea=function(e){var t={id:a.state.counterTask+1,title:e,completed:!1};a.setState({counterTask:a.state.counterTask+1,todoList:a.state.todoList.concat(t),isOpen:!0})},a.state={isOpen:!1,todoList:[],counterTask:0},a.getTextFromTextarea=a.getTextFromTextarea.bind(Object(d.a)(a)),a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.isOpen&&r.a.createElement(b,{todoList:this.state.todoList});return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"main__header"},r.a.createElement(h,null),r.a.createElement(p,{getText:this.getTextFromTextarea})),e)}}]),t}(n.Component));a(21);var j=function(){return r.a.createElement("section",{className:"todo-Page"},r.a.createElement(o,null),r.a.createElement(v,null))};a(22);s.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.e68be8d4.chunk.js.map