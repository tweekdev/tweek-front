(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{50:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(50);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},53:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return c}));var a=n(54),r=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},l=function(){return{type:"EMAIL"}},c=function(e,t){var n,r=!0,i=Object(a.a)(t);try{for(i.s();!(n=i.n()).done;){var l=n.value;"REQUIRE"===l.type&&(r=r&&e.trim().length>0),"MINLENGTH"===l.type&&(r=r&&e.trim().length>=l.val),"MAXLENGTH"===l.type&&(r=r&&e.trim().length<=l.val),"MIN"===l.type&&(r=r&&+e>=l.val),"MAX"===l.type&&(r=r&&+e<=l.val),"EMAIL"===l.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(c){i.e(c)}finally{i.f()}return r}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(16);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,l=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw i}}}}},58:function(e,t,n){"use strict";var a=n(10),r=n(52),i=n(0),l=n.n(i),c=n(53),u=(n(59),function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{value:t.val,isValid:Object(c.d)(t.val,t.validators)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=Object(i.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialIsValid||!1}),n=Object(a.a)(t,2),r=n[0],c=n[1],o=e.id,s=e.onInput,p=r.value,d=r.isValid;Object(i.useEffect)((function(){s(o,p,d)}),[o,p,d,s]);var f=function(t){c({type:"CHANGE",val:t.target.value,validators:e.validators})},v=function(){c({type:"TOUCH"})},b="input"===e.element?l.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:v,value:r.value}):l.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:v,value:r.value});return l.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},l.a.createElement("label",{htmlFor:e.id},e.label),b,!r.isValid&&r.isTouched&&l.a.createElement("p",null,e.errorText))}},59:function(e,t,n){},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(10),r=n(50),i=n(52),l=n(0),c=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)e.inputs[a]&&(n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var n=Object(l.useReducer)(c,{inputs:e,isValid:t}),r=Object(a.a)(n,2),i=r[0],u=r[1];return[i,Object(l.useCallback)((function(e,t,n){u({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(l.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},68:function(e,t,n){},81:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(55),r=n.n(a),i=n(56),l=n(10),c=n(0),u=n.n(c),o=n(1),s=n(51),p=(n(81),function(e){var t=Object(c.useState)(),n=Object(l.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(),o=Object(l.a)(i,2),p=o[0],d=o[1],f=Object(c.useState)(!1),v=Object(l.a)(f,2),b=v[0],m=v[1],O=Object(c.useRef)();Object(c.useEffect)((function(){if(a){var e=new FileReader;e.onload=function(){d(e.result)},e.readAsDataURL(a)}}),[a]);return u.a.createElement("div",{className:"form-control"},u.a.createElement("input",{id:e.id,ref:O,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var n,a=b;t.target.files||1===t.target.files.length?(n=t.target.files[0],r(n),m(!0),a=!0):(m(!1),a=!1),e.onInput(e.id,n,a)}}),u.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},u.a.createElement("div",{className:"image-upload__preview"},p&&u.a.createElement("img",{src:p,alt:"Preview"}),!p&&u.a.createElement("p",null,"Please pick a picture.")),u.a.createElement(s.a,{type:"button",onClick:function(){O.current.click()}},"PICK IMAGE")),!b&&u.a.createElement("p",null,e.errorText))}),d=n(58),f=n(60),v=n(17),b=n(11),m=n(61),O=n(62),y=n(53);n(68),t.default=function(){var e=Object(c.useContext)(b.a),t=Object(O.a)(),n=t.isLoading,a=t.error,j=t.sendRequest,E=t.clearError,h=Object(m.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},technos:{value:"",isValid:!1},lien:{value:"",isValid:!1},repository:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),g=Object(l.a)(h,2),I=g[0],T=g[1],w=Object(o.g)(),V=function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,(a=new FormData).append("title",I.inputs.title.value),a.append("description",I.inputs.description.value),a.append("technos",I.inputs.technos.value),a.append("lien",I.inputs.lien.value),a.append("repository",I.inputs.repository.value),a.append("image",I.inputs.image.value),t.next=11,j("/api/tweekdev/projects","POST",a,{Authorization:"Bearer "+e.token});case 11:w.push("/"),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(1);case 16:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,{error:a,onClear:E}),u.a.createElement("form",{className:"place-form",onSubmit:V},n&&u.a.createElement(v.a,{asOverlay:!0}),u.a.createElement(d.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(y.c)()],errorText:"Please enter a valid title.",onInput:T}),u.a.createElement(d.a,{id:"description",element:"textarea",label:"Description",validators:[Object(y.b)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:T}),u.a.createElement(d.a,{id:"technos",element:"input",label:"technos",validators:[Object(y.c)()],errorText:"Please enter a valid technos.",onInput:T}),u.a.createElement(d.a,{id:"lien",element:"input",label:"lien",validators:[Object(y.c)()],errorText:"Please enter a valid lien.",onInput:T}),u.a.createElement(d.a,{id:"repository",element:"input",label:"repository",validators:[Object(y.c)()],errorText:"Please enter a valid repository.",onInput:T}),u.a.createElement(p,{id:"image",onInput:T,errorText:"Please provide an image.",center:!0}),u.a.createElement(s.a,{type:"submit",disabled:!I.isValid},"ADD PROJECT")))}}}]);
//# sourceMappingURL=8.3529f97d.chunk.js.map