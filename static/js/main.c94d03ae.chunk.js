(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n,i=t(0),l=t.n(i),r=t(11),c=t.n(r),d=(t(84),t(59)),o=t(31),u=(t(85),t(4)),m=t(77),v=t(142),s=t(152),p=t(148),g=t(155),b=t(141),E=t(137),T=t(101),k=t(149),y=t(103),f=t(25),O=t(26),j=t(150),S=t(138),A=t(136),h=t(139),D=t(151),N=Object(f.b)(function(e){return{functional:e.editingTask.functionalStep,validity:e.editingTask.validation.functionalStep}},function(e){return{updateFunctional:function(a){return e({type:"FUNCTIONAL_UPDATE",payload:a})}}})(function(e){var a=e.functional,t=e.validity,n=e.updateFunctional,i=function(e){return function(t){n(Object(u.a)({},a,Object(O.a)({},e,t.target.value)))}};return l.a.createElement("div",{className:"column"},l.a.createElement(j.a,{label:"\u0426\u0435\u043b\u0435\u0432\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f",error:!t.valid&&t.passed&&!a.functional,onChange:i("functional"),value:a.functional}),!t.valid&&t.passed&&!a.functional&&l.a.createElement(S.a,{error:!0},"\u0426\u0435\u043b\u0435\u0432\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u0430"),l.a.createElement(A.a,null,l.a.createElement(h.a,{control:l.a.createElement(D.a,{value:a.hasIntegralPart,onChange:i("hasIntegralPart")}),label:"\u0415\u0441\u0442\u044c \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c"})),l.a.createElement("div",{className:"row"},l.a.createElement(j.a,{label:"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438",onChange:i("t0"),value:a.t0}),l.a.createElement(j.a,{label:"\u041a\u043e\u043d\u0435\u0447\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438",onChange:i("T"),value:a.T})))}),C=t(140),R=t(42),_=t.n(R),V=Object(f.b)(function(e){return{functional:e.editingTask.functionalStep,variables:e.editingTask.variableStep,validity:e.editingTask.validation.variableStep}},function(e){return{addVariable:function(){return e({type:"VARIABLE_ADD"})},updateVariable:function(a){return e({type:"VARIABLE_UPDATE",payload:a})},removeVariable:function(a){return function(){return e({type:"VARIABLE_REMOVE",payload:a})}}}})(function(e){e.functional;var a=e.variables,t=e.validity,n=e.addVariable,i=e.updateVariable,r=e.removeVariable,c=function(e,t){return function(n){return i({var:Object(u.a)({},a.vars[t],Object(O.a)({},e,n.target.value)),index:t})}};return l.a.createElement("div",{className:"column"},a.vars.map(function(e,n){return l.a.createElement(E.a,{className:"column Paper",key:n},l.a.createElement(j.a,{label:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0444\u0430\u0437\u043e\u0432\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 "+n,error:!t.valid&&t.passed&&!e.f,onChange:c("f",n),value:e.f}),!t.valid&&t.passed&&!e.f&&l.a.createElement(S.a,{error:!0},"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e dx"+n+"/dt"),l.a.createElement(j.a,{label:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0441\u043e\u043f\u0440\u044f\u0436\u0435\u043d\u043d\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 "+n,error:!t.valid&&t.passed&&!e.p,onChange:c("p",n),value:e.p}),!t.valid&&t.passed&&!e.p&&l.a.createElement(S.a,{error:!0},"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e p"+n),l.a.createElement("div",{className:"row"},l.a.createElement(j.a,{label:"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0439 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0444\u0430\u0437\u043e\u0432\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 "+n,onChange:c("xt0",n),value:e.xt0}),l.a.createElement(j.a,{label:"\u041a\u043e\u043d\u0435\u0447\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u043e\u043f\u0440\u044f\u0436\u0435\u043d\u043d\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 "+n,onChange:c("pT",n),value:e.pT})),l.a.createElement(C.a,{className:"close-btn",onClick:r(n),disabled:1===a.vars.length},l.a.createElement(_.a,null)))}),l.a.createElement(b.a,{onClick:n},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e"))}),w=t(143),M=t(144),P=t(145),I=t(146),x=t(147),B=Object(v.a)(function(e){return{tableHeader:{maxWidth:"200px;"},tkField:{maxWidth:"80px",marginLeft:"8px"}}}),U=Object(f.b)(function(e){return{management:e.editingTask.managementStep,validity:e.editingTask.validation.managementStep}},function(e){return{addManager:function(){return e({type:"MANAGER_ADD"})},updateManager:function(a,t){return function(n){return e({type:"MANAGER_UPDATE",payload:{key:a,value:n.target.value,index:t}})}},removeManager:function(a){return function(){return e({type:"MANAGER_REMOVE",payload:a})}},updateDudv:function(a,t){return function(n){return e({type:"DUDV_UPDATE",payload:{value:n.target.value,manager:a,dudv:t}})}},updateV:function(a,t,n){return function(i){return e({type:"V_UPDATE",payload:{value:i.target.value,manager:a,interval:t,v:n}})}},updateTk:function(a,t){return function(n){return e({type:"TK_UPDATE",payload:{value:n.target.value,manager:a,interval:t}})}},addParameter:function(a){return function(){return e({type:"PARAMETER_ADD",payload:a})}},removeParameter:function(a,t){return function(){return e({type:"PARAMETER_REMOVE",payload:{manager:a,parameter:t}})}},addTimeSwitcher:function(a){return function(){return e({type:"TIMESWITCHER_ADD",payload:a})}},removeTimeSwitcher:function(a,t){return function(){return e({type:"TIMESWITCHER_REMOVE",payload:{manager:a,timeswitcher:t}})}}}})(function(e){var a=e.management,t=e.validity,n=(e.addManager,e.updateManager),i=(e.removeManager,e.updateDudv),r=e.updateV,c=e.updateTk,d=e.addParameter,o=e.removeParameter,u=e.addTimeSwitcher,m=e.removeTimeSwitcher,v=B();return l.a.createElement("div",{className:"column"},a.map(function(e,a){return l.a.createElement(E.a,{className:"column Paper",key:a},l.a.createElement(j.a,{label:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f "+a,error:!t.valid&&t.passed&&!e.u,onChange:n("u",a),value:e.u}),!t.valid&&t.passed&&!e.u&&l.a.createElement(S.a,{error:!0},"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e u ",a),l.a.createElement(w.a,null,l.a.createElement(M.a,null,l.a.createElement(P.a,null,l.a.createElement(I.a,null),e.dudv.map(function(t,n){return l.a.createElement(I.a,{key:n},l.a.createElement("div",{className:v.tableHeader+" row"},l.a.createElement("span",null,"V",n),l.a.createElement(C.a,{onClick:o(a,n),disabled:1===e.dudv.length},l.a.createElement(_.a,null))))}))),l.a.createElement(x.a,null,l.a.createElement(P.a,null,l.a.createElement(I.a,{component:"th",scope:"row"},"du/dv"),e.dudv.map(function(n,r){return l.a.createElement(I.a,{key:r},l.a.createElement(j.a,{onChange:i(a,r),error:!t.valid&&t.passed&&!e.dudv[r],value:n}),!t.valid&&t.passed&&!e.dudv[r]&&l.a.createElement(S.a,{error:!0},"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u043d\u0443\u044e du/dv"))})),e.v.map(function(t,n){return l.a.createElement(P.a,{key:n},l.a.createElement(I.a,{component:"th",scope:"row",className:"row"},l.a.createElement(C.a,{onClick:m(a,n),disabled:1===e.v.length},l.a.createElement(_.a,null)),l.a.createElement("span",null,"t",n," - ",n===e.v.length-1?"T":"t"+(n+1))),t.map(function(t,i){return l.a.createElement(I.a,{key:i},l.a.createElement(j.a,{type:"number",label:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 v".concat(i," \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435 t").concat(n," - ").concat(n===e.v.length-1?"T":"t"+(n+1)),onChange:r(a,n,i),value:t}))}))}))),!!e.tk.length&&l.a.createElement(w.a,null,l.a.createElement(M.a,null,l.a.createElement(P.a,null,l.a.createElement(I.a,null),l.a.createElement(I.a,null,"\u041c\u043e\u043c\u0435\u043d\u0442 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"))),l.a.createElement(x.a,null,e.tk.map(function(e,t){return l.a.createElement(P.a,{key:t},l.a.createElement(I.a,{component:"th",scope:"row",className:"row"},l.a.createElement("span",null,"t"+(t+1))),l.a.createElement(I.a,null,l.a.createElement(j.a,{type:"number",className:v.tkField,onChange:c(a,t),value:e})))}))),l.a.createElement("div",{className:"row"},l.a.createElement(b.a,{onClick:u(a)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u043e\u043c\u0435\u043d\u0442 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"),l.a.createElement(b.a,{onClick:d(a)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f")))}))}),L=function(){return null},W=function(){return null};!function(e){e[e.functionalStep=0]="functionalStep",e[e.variableStep=1]="variableStep",e[e.managementStep=2]="managementStep",e[e.derivativeStep=3]="derivativeStep",e[e.methodStep=4]="methodStep"}(n||(n={}));var G={editingTask:{functionalStep:{functional:"",t0:0,T:1,constants:{},hasIntegralPart:!1},variableStep:{vars:[{f:"",p:"",xt0:0,pT:1,g:""}],dgdu:[],dgdx:[]},managementStep:[{u:"",v:[[0]],tk:[],dudv:[""]}],derivativeStep:{dfdu:[],dfdx:[]},methodStep:{name:"Grad",type:"digit",step:1e-6,descr:40},validation:{functionalStep:{passed:!1,valid:!1},variableStep:{passed:!1,valid:!1},managementStep:{passed:!1,valid:!1},derivativeStep:{passed:!1,valid:!1},methodStep:{passed:!1,valid:!1}}},task:null,history:null},F=Object(v.a)(function(e){return{root:{width:"90%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)}}});var H=Object(f.b)(function(e){return{validity:e.editingTask.validation}},function(e){return{updateValidity:function(a){return e({type:"VALIDITY_UPDATE",payload:a})},reset:function(){return e({type:"RESET"})}}})(function(e){var a=e.validity,t=e.updateValidity,i=e.reset,r=F(),c=l.a.useState(2),d=Object(m.a)(c,2),o=d[0],v=d[1],f=[{label:"\u0426\u0435\u043b\u0435\u0432\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f",content:l.a.createElement(N,null)},{label:"\u0424\u0430\u0437\u043e\u0432\u044b\u0435 \u0438 \u0441\u043e\u043f\u0440\u044f\u0436\u0435\u043d\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435",content:l.a.createElement(V,null)},{label:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",content:l.a.createElement(U,null)},{label:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u043d\u044b\u0435",content:l.a.createElement(L,null)},{label:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043c\u0435\u0442\u043e\u0434\u0430",content:l.a.createElement(W,null)}],O=function(e){return function(){if(e!==o){var i=a[n[o]];t({key:n[o],value:Object(u.a)({},i,{passed:!0})}),v(e)}}};return l.a.createElement("div",{className:r.root},l.a.createElement(E.a,{square:!0,elevation:0,className:r.resetContainer},l.a.createElement(T.a,null,l.a.createElement("span",null,"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u0438\u043b\u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0438\u0437 csv.")),l.a.createElement(b.a,{onClick:function(){},className:r.button,disabled:!0},"\u0418\u043c\u043f\u043e\u0440\u0442 \u0438\u0437 csv"),l.a.createElement(b.a,{onClick:function(){},className:r.button,disabled:!0},"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432 csv"),l.a.createElement(b.a,{onClick:function(){v(0),i()},className:r.button},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"),l.a.createElement(b.a,{onClick:function(){},className:r.button,disabled:!0},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435")),l.a.createElement(s.a,{nonLinear:!0,activeStep:o,orientation:"vertical"},f.map(function(e,t){var i=a[n[t]];return l.a.createElement(p.a,{key:e.label},l.a.createElement(k.a,{onClick:O(t),disableRipple:!0},l.a.createElement(y.a,{error:!i.valid&&i.passed},e.label)),l.a.createElement(g.a,null,e.content,l.a.createElement("div",{className:r.actionsContainer})))})),o===f.length&&l.a.createElement(E.a,{square:!0,elevation:0,className:r.resetContainer},l.a.createElement(T.a,null,l.a.createElement("span",null,"\u0412\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u044b."))))}),q=function(){return null},J=function(){return l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement("div",{className:"App-header"},l.a.createElement("div",{className:"App-header-logo"},l.a.createElement("img",{src:"/smart-control-logo.png",alt:""})),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(d.b,{to:"/",exact:!0,className:"App-link",activeClassName:"App-link_active"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/history",className:"App-link",activeClassName:"App-link_active"},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0437\u0430\u0434\u0430\u0447")))),l.a.createElement("div",{className:"App-outlet"},l.a.createElement(o.a,{exact:!0,path:"/",component:H}),l.a.createElement(o.a,{path:"/topics",component:q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=t(48),Y=t(8),$=Object(K.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FUNCTIONAL_UPDATE":return Object(u.a)({},e,{editingTask:Object(u.a)({},e.editingTask,{functionalStep:Object(u.a)({},a.payload,{t0:a.payload.t0||0,T:a.payload.T||1}),validation:Object(u.a)({},e.editingTask.validation,{functionalStep:Object(u.a)({},e.editingTask.validation.functionalStep,{valid:!!a.payload.functional})})})});case"VARIABLE_UPDATE":var t=a.payload,n=[].concat(Object(Y.a)(e.editingTask.variableStep.vars.slice(0,t.index)),[Object(u.a)({},t.var,{t0:a.payload.t0||0,T:a.payload.T||1})],Object(Y.a)(e.editingTask.variableStep.vars.slice(t.index+1)));return Object(u.a)({},e,{editingTask:Object(u.a)({},e.editingTask,{variableStep:{vars:n},validation:Object(u.a)({},e.editingTask.validation,{variableStep:Object(u.a)({},e.editingTask.validation.functionalStep,{valid:n.every(function(e){return!(!e.f||!e.p)})})})})});case"VARIABLE_ADD":var i=[].concat(Object(Y.a)(e.editingTask.variableStep.vars),[{f:"",p:"",xt0:0,pT:1,g:""}]);return Object(u.a)({},e,{editingTask:Object(u.a)({},e.editingTask,{variableStep:{vars:i},validation:Object(u.a)({},e.editingTask.validation,{variableStep:Object(u.a)({},e.editingTask.validation.functionalStep,{valid:i.every(function(e){return!(!e.f||!e.p)})})})})});case"VARIABLE_REMOVE":var l=[].concat(Object(Y.a)(e.editingTask.variableStep.vars.slice(0,a.payload)),Object(Y.a)(e.editingTask.variableStep.vars.slice(a.payload+1)));return Object(u.a)({},e,{editingTask:Object(u.a)({},e.editingTask,{variableStep:{vars:l},validation:Object(u.a)({},e.editingTask.validation,{variableStep:Object(u.a)({},e.editingTask.validation.functionalStep,{valid:l.every(function(e){return!(!e.f||!e.p)})})})})});case"MANAGER_ADD":var r=[].concat(Object(Y.a)(e.editingTask.managementStep),[{u:"",v:[[0]],tk:[],dudv:[""]}]);return Object(u.a)({},e,{editingTask:Object(u.a)({},e.editingTask,{managementStep:r,validation:Object(u.a)({},e.editingTask.validation,{variableStep:Object(u.a)({},e.editingTask.validation.managementStep,{valid:r.every(function(e){return!(!e.u||!e.dudv.every(Boolean))})})})})});case"MANAGER_UPDATE":var c=e.editingTask.managementStep[a.payload.index],d=[].concat(Object(Y.a)(e.editingTask.managementStep.slice(0,a.payload.index)),[Object(u.a)({},c,Object(O.a)({},a.payload.key,a.payload.value))],Object(Y.a)(e.editingTask.managementStep.slice(a.payload.index+1)));return Object(u.a)({},e,{editingTask:Object(u.a)({},e.editingTask,{managementStep:d,validation:Object(u.a)({},e.editingTask.validation,{variableStep:Object(u.a)({},e.editingTask.validation.managementStep,{valid:d.every(function(e){return!(!e.u||!e.dudv.every(Boolean))})})})})});case"MANAGER_REMOVE":var o=e.editingTask.managementStep.filter(function(e,t){return t!==a.payload.index});return Object(u.a)({},e,{editingTask:Object(u.a)({},e.editingTask,{managementStep:o,validation:Object(u.a)({},e.editingTask.validation,{variableStep:Object(u.a)({},e.editingTask.validation.managementStep,{valid:o.every(function(e){return!(!e.u||!e.dudv.every(Boolean))})})})})});case"DUDV_UPDATE":var m=e.editingTask.managementStep[a.payload.manager],v=[].concat(Object(Y.a)(e.editingTask.managementStep.slice(0,a.payload.manager)),[Object(u.a)({},m,{dudv:[].concat(Object(Y.a)(m.dudv.slice(0,a.payload.dudv)),[a.payload.value],Object(Y.a)(m.dudv.slice(a.payload.dudv+1)))})],Object(Y.a)(e.editingTask.managementStep.slice(a.payload.manager+1)));return Object(u.a)({},e,{editingTask:Object(u.a)({},e.editingTask,{managementStep:v,validation:Object(u.a)({},e.editingTask.validation,{variableStep:Object(u.a)({},e.editingTask.validation.managementStep,{valid:v.every(function(e){return!(!e.u||!e.dudv.every(Boolean))})})})})});case"V_UPDATE":var s=e.editingTask.managementStep[a.payload.manager],p=[].concat(Object(Y.a)(e.editingTask.managementStep.slice(0,a.payload.manager)),[Object(u.a)({},s,{v:[].concat(Object(Y.a)(s.v.slice(0,a.payload.interval)),[[].concat(Object(Y.a)(s.v[a.payload.interval].slice(0,a.payload.v)),[a.payload.value||0],Object(Y.a)(s.v[a.payload.interval].slice(a.payload.v+1)))],Object(Y.a)(s.v.slice(a.payload.interval+1)))})],Object(Y.a)(e.editingTask.managementStep.slice(a.payload.manager+1)));return Object(u.a)({},e,{editingTask:Object(u.a)({},e.editingTask,{managementStep:p,validation:Object(u.a)({},e.editingTask.validation,{variableStep:Object(u.a)({},e.editingTask.validation.managementStep,{valid:p.every(function(e){return!(!e.u||!e.dudv.every(Boolean))})})})})});case"TK_UPDATE":var g=e.editingTask.managementStep[a.payload.manager],b=[].concat(Object(Y.a)(e.editingTask.managementStep.slice(0,a.payload.manager)),[Object(u.a)({},g,{tk:[].concat(Object(Y.a)(g.tk.slice(0,a.payload.interval)),[a.payload.value||0],Object(Y.a)(g.tk.slice(a.payload.interval+1)))})],Object(Y.a)(e.editingTask.managementStep.slice(a.payload.manager+1)));return Object(u.a)({},e,{editingTask:Object(u.a)({},e.editingTask,{managementStep:b,validation:Object(u.a)({},e.editingTask.validation,{variableStep:Object(u.a)({},e.editingTask.validation.managementStep,{valid:b.every(function(e){return!(!e.u||!e.dudv.every(Boolean))})})})})});case"PARAMETER_ADD":var E=e.editingTask.managementStep[a.payload],T=[].concat(Object(Y.a)(e.editingTask.managementStep.slice(0,a.payload)),[Object(u.a)({},E,{v:E.v.map(function(e){return[].concat(Object(Y.a)(e),[0])}),dudv:[].concat(Object(Y.a)(E.dudv),[""])})],Object(Y.a)(e.editingTask.managementStep.slice(a.payload+1)));return Object(u.a)({},e,{editingTask:Object(u.a)({},e.editingTask,{managementStep:T,validation:Object(u.a)({},e.editingTask.validation,{variableStep:Object(u.a)({},e.editingTask.validation.managementStep,{valid:T.every(function(e){return!(!e.u||!e.dudv.every(Boolean))})})})})});case"PARAMETER_REMOVE":var k=e.editingTask.managementStep[a.payload.manager],y=[].concat(Object(Y.a)(e.editingTask.managementStep.slice(0,a.payload.manager)),[Object(u.a)({},k,{v:k.v.map(function(e){return e.filter(function(e,t){return t!==a.payload.parameter})}),dudv:k.dudv.filter(function(e,t){return t!==a.payload.parameter})})],Object(Y.a)(e.editingTask.managementStep.slice(a.payload.manager+1)));return Object(u.a)({},e,{editingTask:Object(u.a)({},e.editingTask,{managementStep:y,validation:Object(u.a)({},e.editingTask.validation,{variableStep:Object(u.a)({},e.editingTask.validation.managementStep,{valid:y.every(function(e){return!(!e.u||!e.dudv.every(Boolean))})})})})});case"TIMESWITCHER_ADD":var f=e.editingTask.managementStep[a.payload],j=[].concat(Object(Y.a)(e.editingTask.managementStep.slice(0,a.payload)),[Object(u.a)({},f,{v:[].concat(Object(Y.a)(f.v),[Array(f.dudv.length).fill(0)]),tk:[].concat(Object(Y.a)(f.tk),[0])})],Object(Y.a)(e.editingTask.managementStep.slice(a.payload+1)));return Object(u.a)({},e,{editingTask:Object(u.a)({},e.editingTask,{managementStep:j,validation:Object(u.a)({},e.editingTask.validation,{variableStep:Object(u.a)({},e.editingTask.validation.managementStep,{valid:j.every(function(e){return!(!e.u||!e.dudv.every(Boolean))})})})})});case"TIMESWITCHER_REMOVE":var S=e.editingTask.managementStep[a.payload.manager],A=[].concat(Object(Y.a)(e.editingTask.managementStep.slice(0,a.payload.manager)),[Object(u.a)({},S,{v:S.v.filter(function(e,t){return t!==a.payload.timeswitcher}),tk:S.tk.slice(0,S.tk.length-1)})],Object(Y.a)(e.editingTask.managementStep.slice(a.payload.manager+1)));return Object(u.a)({},e,{editingTask:Object(u.a)({},e.editingTask,{managementStep:A,validation:Object(u.a)({},e.editingTask.validation,{variableStep:Object(u.a)({},e.editingTask.validation.managementStep,{valid:A.every(function(e){return!(!e.u||!e.dudv.every(Boolean))})})})})});case"VALIDITY_UPDATE":var h=a.payload;return Object(u.a)({},e,{editingTask:Object(u.a)({},e.editingTask,{validation:Object(u.a)({},e.editingTask.validation,Object(O.a)({},h.key,h.value))})});case"RESET":return Object(u.a)({},e,{editingTask:G.editingTask})}return e});c.a.render(l.a.createElement(f.a,{store:$},l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,a,t){e.exports=t(100)},84:function(e,a,t){},85:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.c94d03ae.chunk.js.map