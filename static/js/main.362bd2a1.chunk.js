(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(7),i=a.n(l);a(14);var c=function(){return o.a.createElement("h1",{className:"headline"},"todos")},r=a(1),s=a(2),d=a(4),m=a(3),u=a(5),h=(a(15),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).handleKeyPress=function(e){var t=a.props.getText,n=e.target.value;13===e.keyCode&&(e.preventDefault(),""!==n&&/\S/.test(n)&&(e.target.value="",t(n)))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("textarea",{wrap:"off",className:"main__input-area js-input-text",placeholder:"What needs to be done?",onKeyDown:this.handleKeyPress})}}]),t}(n.Component));a(16);var p=function(e){var t=e.isAllChecked,a=e.selectedItem,n=t?"active":"";return o.a.createElement("div",{className:"checked-items ".concat(n),onClick:a},String.fromCharCode(709))},f=(a(17),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(){var e=a.props;(0,e.editItem)(e.todolist)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todolist;return o.a.createElement("span",{className:"task-list_text",onDoubleClick:this.handleClick},e.title)}}]),t}(n.Component)),v=(a(18),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).handleClickBtn=function(){var e=a.props;(0,e.onClickDelete)(e.id)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"btnDel",onClick:this.handleClickBtn})}}]),t}(n.Component)),b=(a(19),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleEditItem=function(e){a.setState({idEdit:e.id,valueBeforeEdit:e.title})},a.handleClickCheckbox=function(){var e=a.props;(0,e.checkedItem)(e.todolist.id)},a.handleKeyPress=function(e){var t=a.props,n=t.todolist,o=t.editItem;if(13===e.keyCode){e.preventDefault();var l=e.target.value.trim();if(""===l)return o(n,!0);if(""!==l&&/\S/.test(l))e.target.value="",o({id:n.id,title:l,completed:n.completed}),a.setState({idEdit:0})}},a.handleInputBlur=function(e){var t=a.props,n=t.todolist,o=t.editItem,l=e.target.value.trim();if(""===l)return o(n,!0);e.target.value="",o({id:n.id,title:l,completed:n.completed}),a.setState({idEdit:0})},a.handleInputChange=function(e){a.setState({valueBeforeEdit:e.target.value})},a.state={idEdit:0,valueBeforeEdit:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.idEdit,a=e.valueBeforeEdit,n=this.props,l=n.todolist,i=n.deleteItem,c=l.completed,r=l.id===t;return o.a.createElement(o.a.Fragment,null,r?o.a.createElement("input",{type:"text",autoFocus:!0,className:"text-editing",value:a,onChange:this.handleInputChange,onKeyDown:this.handleKeyPress,onBlur:this.handleInputBlur}):o.a.createElement("div",{className:"listItemWrapper"},o.a.createElement("input",{type:"checkbox",id:l.id,checked:c,className:"list-checkbox",onChange:this.handleClickCheckbox}),o.a.createElement("label",{htmlFor:l.id}),o.a.createElement(f,{todolist:l,editItem:this.handleEditItem}),o.a.createElement(v,{onClickDelete:i,id:l.id})))}}]),t}(n.Component)),k=(a(20),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={tab:"All"},a.handleClickTab=function(e){var t=a.props.getTab,n=e.target.innerHTML;t(n),a.setState({tab:n})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.tab,t=this.props,a=t.deleteCompletedAll,n=t.countActiveItem,l=t.isCheckedExists,i="All"===e?"activeBord":"",c="Active"===e?"activeBord":"",r="Completed"===e?"activeBord":"";return o.a.createElement("li",{className:"list-footer js-list-footer"},o.a.createElement("span",{className:"footer-item item-select active-task"},"".concat(n,1===n?" item left":" items left")),o.a.createElement("div",{className:"bookmarks-wrapper"},o.a.createElement("span",{className:"footer-item bookmarks ".concat(i),onClick:this.handleClickTab},"All"),o.a.createElement("span",{className:"footer-item bookmarks ".concat(c),onClick:this.handleClickTab},"Active"),o.a.createElement("span",{className:"footer-item bookmarks ".concat(r),onClick:this.handleClickTab},"Completed")),l&&o.a.createElement("span",{className:"footer-item delete-completed",onClick:a},"Clear completed"))}}]),t}(n.Component)),g=(a(21),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={tab:"All"},a.handleGetItemsTab=function(e){a.setState({tab:e})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.tab,t=this.props,a=t.todoList,n=t.deleteItem,l=t.checkedItem,i=t.editItem,c=t.isCheckedExists,r=t.countActiveItem,s=t.deleteCompletedAll;this.getItemsTab=function(){switch(e){case"All":return a;case"Active":return a.filter(function(e){return!e.completed});case"Completed":return a.filter(function(e){return e.completed})}};var d=this.getItemsTab().map(function(e){return o.a.createElement("li",{key:e.id,className:"list-item"},o.a.createElement(b,{todolist:e,deleteItem:n,checkedItem:l,editItem:i}))});return o.a.createElement("ul",{className:"main__task-list"},d,o.a.createElement(k,{isCheckedExists:c,countActiveItem:r,deleteCompletedAll:s,getTab:this.handleGetItemsTab}))}}]),t}(n.Component)),C=(a(22),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).getTextFromTextarea=function(e){var t=a.state,n=t.todoList,o=t.counterTask,l={id:o+1,title:e,completed:!1},i=n.concat(l);a.setState({counterTask:o+1,todoList:i,isOpen:!0}),a.saveToStorage(i)},a.saveToStorage=function(e){localStorage.setItem("todoApp",JSON.stringify(e)),0===e.length&&localStorage.removeItem("todoApp")},a.handleItemDelete=function(e){for(var t=a.state,n=t.todoList,o=t.isOpen,l=0;l<n.length;l+=1)n[l].id===e&&n.splice(l,1);var i=n[0]?o:!o;a.setState({todoList:n,isOpen:i}),a.saveToStorage(n)},a.handleDeleteCompleted=function(){var e=a.state,t=e.todoList,n=e.isOpen,o=t.filter(function(e){return!e.completed}),l=o[0]?n:!n;a.setState({todoList:o,isOpen:l}),a.saveToStorage(o)},a.handleCheckedItem=function(e){for(var t=a.state.todoList,n=0;n<t.length;n+=1)t[n].id===e&&(t[n].completed=!t[n].completed);a.setState({todoList:t}),a.saveToStorage(t)},a.handleSelectedItem=function(){for(var e=a.state.todoList,t=!0,n=0;n<e.length;n+=1)e[n].completed||(e[n].completed=!0,t=!1);if(t){for(var o=0;o<e.length;o+=1)e[o].completed=!1;t=!1}a.setState({todoList:e}),a.saveToStorage(e)},a.handleEditItem=function(e,t){var n=a.state.todoList;if(t)return a.handleItemDelete(e.id);for(var o=0;o<n.length;o+=1)n[o].id===e.id&&(n[o].title=e.title);a.setState({todoList:n}),a.saveToStorage(n)},a.state={isOpen:null!==localStorage.getItem("todoApp")||!1,todoList:JSON.parse(localStorage.getItem("todoApp"))||[],counterTask:null!==localStorage.getItem("todoApp")?JSON.parse(localStorage.getItem("todoApp"))[JSON.parse(localStorage.getItem("todoApp")).length-1].id:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todoList,a=e.isOpen,n=t.filter(function(e){return!e.completed}).length,l=t.filter(function(e){return e.completed}).length,i=a&&o.a.createElement(g,{todoList:t,countActiveItem:n,isCheckedExists:0!==l,deleteItem:this.handleItemDelete,checkedItem:this.handleCheckedItem,deleteCompletedAll:this.handleDeleteCompleted,editItem:this.handleEditItem});return o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"main__header"},a&&o.a.createElement(p,{selectedItem:this.handleSelectedItem,isAllChecked:0===n}),o.a.createElement(h,{getText:this.getTextFromTextarea})),i)}}]),t}(n.Component));a(23);var E=function(){return o.a.createElement("section",{className:"todo-Page"},o.a.createElement(c,null),o.a.createElement(C,null))};a(24);i.a.render(o.a.createElement(E,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.362bd2a1.chunk.js.map