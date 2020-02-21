(this["webpackJsonploft-taxi"]=this["webpackJsonploft-taxi"]||[]).push([[0],{69:function(e,t,a){e.exports=a.p+"static/media/logo-white.28243ec7.svg"},71:function(e,t,a){e.exports=a.p+"static/media/logo.51b4041b.svg"},79:function(e,t,a){e.exports=a(92)},89:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n,r,c,l,o,u=a(0),s=a.n(u),i=a(13),m=a(25),d=a(14),b=a(37),p=a(75),f="/login",O="/signup",E="/map",j="/profile",v=function(e){var t=e.component,a=Object(p.a)(e,["component"]),n=Object(d.c)((function(e){return e.auth.isLoggedIn}));return s.a.createElement(b.b,Object.assign({},a,{render:function(e){return n?s.a.createElement(t,e):s.a.createElement(b.a,{to:f})}}))},h=(a(89),a(123)),_=a(68),g=a(69),x=a.n(g),N=function(){return s.a.createElement("div",{className:"logo"},s.a.createElement("img",{src:x.a,width:"156",alt:"logo",className:"logo__icon"}))},y=function(e){var t=e.children;return s.a.createElement("div",{className:"login"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"login__content"},s.a.createElement("div",{className:"content__part"},s.a.createElement(N,null)),s.a.createElement("div",{className:"content__part"},t))))},S=a(9),w=a(44),k=a(33),C=a(129),T=Object(C.a)("LOGIN_REQUEST"),F=Object(C.a)("LOGIN_SUCCESS"),I=Object(C.a)("LOGIN_FAILURE"),L=Object(C.a)("LOGIN_LOGOUT"),R=Object(C.a)("SIGNUP_REQUEST"),D=Object(C.a)("SIGNUP_SUCCESS"),U=Object(C.a)("SIGNUP_FAILURE"),P=a(127),A=a(128),G=a(122),W=a(126),V=function(){var e,t=Object(d.c)((function(e){return e.auth})),a=Object(d.b)(),n=Object(u.useState)({email:"",password:""}),r=Object(k.a)(n,2),c=r[0],l=r[1],o=function(e){var t=e.target;l(Object(w.a)({},c,Object(S.a)({},t.name,t.value)))};return t.isLoggedIn?s.a.createElement(b.a,{to:E}):s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(T({email:c.email,password:c.password}))},className:"login__form"},s.a.createElement("h1",{className:"form__title"},"\u0412\u043e\u0439\u0442\u0438"),s.a.createElement("div",{className:"form__subtitle"},"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c? ",s.a.createElement(m.b,{to:O},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c")),s.a.createElement("div",{className:"input__group"},s.a.createElement(P.a,{fullWidth:!0},s.a.createElement(A.a,{htmlFor:"email"},"Email:"),s.a.createElement(G.a,{id:"email",placeholder:"\u041b\u043e\u0433\u0438\u043d",type:"text",name:"email",value:c.email,onChange:o,inputProps:{"data-testid":"login-field"},required:!0}))),s.a.createElement("div",{className:"input__group"},s.a.createElement(P.a,{fullWidth:!0},s.a.createElement(A.a,{htmlFor:"password"},"Password:"),s.a.createElement(G.a,{id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",name:"password",value:c.password,onChange:o,inputProps:{"data-testid":"password-field"},required:!0}))),s.a.createElement("div",{className:"button__group"},s.a.createElement(W.a,{type:"submit",disabled:t.pending,"data-testid":"submit-button",variant:"contained",color:"primary"},"\u0412\u043e\u0439\u0442\u0438"),s.a.createElement("div",{className:"pending"},t.pending?" \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":null),t.error?s.a.createElement("div",{"data-testid":"error-message",className:"error"},null===(e=t.error)||void 0===e?void 0:e.error):"")))},J=function(){return s.a.createElement(y,null,s.a.createElement(V,null))},H=a(59),q=a.n(H),Q=a(71),X=a.n(Q),z=function(){return s.a.createElement("div",{className:"header__logo"},s.a.createElement("img",{src:X.a,width:"156",alt:"logo",className:"header__pic"}))},B=function(){var e=Object(d.b)();return s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:"header__menu"},s.a.createElement("li",{className:"menu__item"},s.a.createElement(m.b,{to:E},"\u041a\u0430\u0440\u0442\u0430")),s.a.createElement("li",{className:"menu__item"},s.a.createElement(m.b,{to:j},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),s.a.createElement("li",{className:"menu__item"},s.a.createElement("a",{href:"/",onClick:function(t){t.preventDefault(),e(L())}},"\u0412\u044b\u0439\u0442\u0438"))))},M=function(){return s.a.createElement("header",{className:"header"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"header__line"},s.a.createElement(z,null),s.a.createElement(B,null))))},Y=a(60),Z=Object(C.a)("FETCH_ADDRESS_REQUEST"),$=Object(C.a)("FETCH_ADDRESS_SUCCESS"),K=Object(C.a)("FETCH_ADDRESS_FAILURE"),ee=Object(C.a)("FETCH_ROUTE_REQUEST"),te=Object(C.a)("FETCH_ROUTE_SUCCESS"),ae=Object(C.a)("FETCH_ROUTE_FAILURE"),ne=Object(C.a)("CLEAR_ORDER"),re=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.map.addresses.addresses})),a=Object(u.useState)(null),n=Object(k.a)(a,2),r=n[0],c=n[1],l=Object(u.useState)(null),o=Object(k.a)(l,2),i=o[0],m=o[1],b=Object(u.useState)(!1),p=Object(k.a)(b,2),f=p[0],O=p[1],E=t.map((function(e){return{value:e,label:e}})).filter((function(e){return![r,i].includes(e.label)})),j=Object(u.useCallback)((function(e){var t=e?e.value:null;c(t)}),[c]),v=Object(u.useCallback)((function(e){var t=e?e.value:null;m(t)}),[m]),h=Object(u.useCallback)((function(t){O(!1),c(null),m(null),e(ne({status:!1,coordinates:null}))}),[O,e]);return s.a.createElement(s.a.Fragment,null,f?s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"\u0417\u0430\u043a\u0430\u0437 \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d"),s.a.createElement("p",{className:"panel__subtext"},"\u0412\u0430\u0448\u0435 \u0442\u0430\u043a\u0441\u0438 \u0443\u0436\u0435 \u0435\u0434\u0435\u0442 \u043a \u0432\u0430\u043c. \u041f\u0440\u0438\u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 10 \u043c\u0438\u043d\u0443\u0442."),s.a.createElement("button",{className:"form__btn",onClick:h},"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0437\u0430\u043a\u0430\u0437")):s.a.createElement("form",{action:"/",method:"",onSubmit:function(t){t.preventDefault(),e(ee({addressOne:r,addressTwo:i})),O(!0)}},s.a.createElement("div",{className:"address__group"},s.a.createElement(Y.a,{options:E,onChange:j,className:"address__input",placeholder:"\u041e\u0442\u043a\u0443\u0434\u0430",isClearable:!0,isSearchable:!0}),s.a.createElement(Y.a,{options:E,onChange:v,className:"address__input",placeholder:"\u041a\u0443\u0434\u0430",isClearable:!0,isSearchable:!0})),s.a.createElement("button",{type:"submit",className:"form__btn",disabled:!r||!i},"\u0412\u044b\u0437\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u0441\u0438")))},ce=function(){var e=Object(d.c)((function(e){return e}));console.log(e.profile);var t=Object(b.g)();return s.a.createElement(s.a.Fragment,null,e.profile.data?s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"map__panel"},s.a.createElement(re,null))):s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"map__panel"},s.a.createElement("h1",null,"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),s.a.createElement("p",{className:"panel__subtext"},"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437."),s.a.createElement(m.b,{className:"form__btn",to:j,onClick:function(){t.push(j)}},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"))))},le=function(){var e=Object(d.b)(),t=Object(u.useRef)();q.a.accessToken="pk.eyJ1Ijoic29maWF0dWxlbmV2YSIsImEiOiJjazV2MHBodGkwOGY3M2RtZDBoeTl6ZWowIn0.UiL-tTXvmrPfPy3wi3jzDw";var a=Object(d.c)((function(e){return e.map.route}));return Object(u.useEffect)((function(){e(ne({status:!1,coordinates:null}))}),[e]),Object(u.useEffect)((function(){var e=new q.a.Map({container:t.current,style:"mapbox://styles/mapbox/light-v10",center:[30.2656504,59.8029126],zoom:15});e.on("load",(function(){a.status&&function(e,t){e.flyTo({center:t[0],zoom:15}),e.addLayer({id:"route",type:"line",source:{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:t}}},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#ffc617","line-width":8}})}(e,a.coordinates)}))}),[a]),s.a.createElement(s.a.Fragment,null,s.a.createElement(M,null),s.a.createElement(ce,null),s.a.createElement("div",{className:"mapbox",ref:t}))},oe=Object(C.a)("PROFILE_REQUEST"),ue=Object(C.a)("PROFILE_GET"),se=Object(C.a)("PROFILE_SUCCESS"),ie=Object(C.a)("PROFILE_FAILURE"),me=function(){var e=Object(d.c)((function(e){return e})),t=Object(d.b)(),a=Object(b.g)(),n=e.profile.data,r=n.cardNumber,c=n.expiryDate,l=n.cardName,o=n.cvc,i=Object(u.useState)({cardNumber:r,expiryDate:c,cardName:l,cvc:o}),m=Object(k.a)(i,2),p=m[0],f=m[1];Object(u.useEffect)((function(){f(e.profile.data)}),[e.profile.data]);var O=function(e){var t=e.target;f(Object(w.a)({},p,Object(S.a)({},t.name,t.value)))};return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"bg-container"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"profile__content"},s.a.createElement("form",{action:"",method:"",onSubmit:function(n){t(oe({cardNumber:p.cardNumber,expiryDate:p.expiryDate,cardName:p.cardName,cvc:p.cvc,token:e.auth.token})),a.push(E)},className:"form form--profile"},s.a.createElement("h1",{className:"form__title"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),s.a.createElement("div",{className:"form__subtitle"},"\u0421\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b"),s.a.createElement("div",{className:"form__panels"},s.a.createElement("div",{className:"form__panel"},s.a.createElement("div",{className:"input__group"},s.a.createElement(P.a,{fullWidth:!0},s.a.createElement(A.a,{htmlFor:"cardNumber"},"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b*"),s.a.createElement("input",{id:"cardNumber",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b",type:"text",name:"cardNumber",defaultValue:p.cardNumber,onChange:O,required:!0}))),s.a.createElement("div",{className:"input__group"},s.a.createElement(P.a,{fullWidth:!0},s.a.createElement(A.a,{htmlFor:"expiryDate"},"\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f*"),s.a.createElement("input",{id:"expiryDate",placeholder:"\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",type:"text",name:"expiryDate",defaultValue:p.expiryDate,onChange:O,required:!0})))),s.a.createElement("div",{className:"form__panel"},s.a.createElement("div",{className:"input__group"},s.a.createElement(P.a,{fullWidth:!0},s.a.createElement(A.a,{htmlFor:"cardName"},"\u0418\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430*"),s.a.createElement("input",{id:"cardName",placeholder:"\u0418\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430",type:"text",name:"cardName",defaultValue:p.cardName,onChange:O,required:!0}))),s.a.createElement("div",{className:"input__group"},s.a.createElement(P.a,{fullWidth:!0},s.a.createElement(A.a,{htmlFor:"cvc"},"CVC*"),s.a.createElement("input",{id:"cvc",placeholder:"CVC",type:"text",name:"cvc",defaultValue:p.cvc,onChange:O,required:!0}))))),s.a.createElement(W.a,{type:"submit",disabled:e.profile.pending,variant:"contained",color:"primary",className:"form__btn"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),s.a.createElement("div",{className:"pending"},e.profile.pending?" \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":""))))))},de=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(M,null),s.a.createElement(me,null))},be=a(124),pe=function(){var e=Object(d.c)((function(e){return e.auth})),t=Object(d.b)(),a=Object(u.useState)({email:"",password:"",name:"",surname:""}),n=Object(k.a)(a,2),r=n[0],c=n[1],l=function(e){var t=e.target;c(Object(w.a)({},r,Object(S.a)({},t.name,t.value)))};return e.isLoggedIn?s.a.createElement(b.a,{to:E}):s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(R({email:r.email,password:r.password,name:r.name,surname:r.surname}))},className:"login__form"},s.a.createElement("h1",{className:"form__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),s.a.createElement("div",null,s.a.createElement(be.a,{label:"Email*",name:"email",type:"email",onChange:l})),s.a.createElement("div",null,s.a.createElement(be.a,{label:"\u0418\u043c\u044f",name:"name",type:"text",onChange:l})),s.a.createElement("div",null,s.a.createElement(be.a,{label:"\u0424a\u043c\u0438\u043b\u0438\u044f",name:"surname",type:"text",onChange:l})),s.a.createElement("div",null,s.a.createElement(be.a,{label:"\u041f\u0430\u0440\u043e\u043b\u044c*",name:"password",type:"password",onChange:l})),s.a.createElement("br",null),s.a.createElement("div",{className:"button__group"},s.a.createElement(W.a,{type:"submit",disabled:e.pending,variant:"contained",color:"primary"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),s.a.createElement("div",{className:"pending"},e.pending?" \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":""))))},fe=function(){return s.a.createElement(y,null,s.a.createElement(pe,null))},Oe=a(125),Ee=a(23),je=Object(Oe.a)(Object(S.a)({},se,(function(e,t){return t.payload})),!1),ve=Object(Oe.a)((n={},Object(S.a)(n,oe,(function(){return!0})),Object(S.a)(n,ue,(function(){return!0})),Object(S.a)(n,se,(function(){return!1})),Object(S.a)(n,ie,(function(){return!1})),n),!1),he=Object(Oe.a)((r={},Object(S.a)(r,ie,(function(e,t){return t.payload})),Object(S.a)(r,oe,(function(){return null})),r),null),_e=Object(Ee.c)({data:je,pending:ve,error:he}),ge=Object(Oe.a)(Object(S.a)({},$,(function(e,t){return t.payload})),null),xe=Object(Oe.a)((c={},Object(S.a)(c,te,(function(e,t){return t.payload})),Object(S.a)(c,ne,(function(e,t){return t.payload})),c),{status:!1,coordinates:null}),Ne=Object(Oe.a)((l={},Object(S.a)(l,Z,(function(){return!0})),Object(S.a)(l,$,(function(){return!1})),Object(S.a)(l,K,(function(){return!1})),Object(S.a)(l,ee,(function(){return!0})),Object(S.a)(l,te,(function(){return!1})),Object(S.a)(l,ae,(function(){return!1})),l),!1),ye=Object(Oe.a)((o={},Object(S.a)(o,Z,(function(){return!0})),Object(S.a)(o,$,(function(){return!1})),Object(S.a)(o,K,(function(){return!1})),Object(S.a)(o,ee,(function(){return!0})),Object(S.a)(o,te,(function(){return!1})),Object(S.a)(o,ae,(function(){return!1})),o),null),Se=Object(Ee.c)({addresses:ge,route:xe,pending:Ne,error:ye}),we=function(){var e=Object(d.c)((function(e){return e})),t=Object(d.b)();return Object(u.useEffect)((function(){e.auth.isLoggedIn&&(t(Z()),t(ue({token:e.auth.token})))}),[]),s.a.createElement("div",{className:"App"},s.a.createElement(h.a,{theme:_.theme},s.a.createElement(b.d,null,s.a.createElement(v,{exact:!0,path:E,component:le}),s.a.createElement(v,{exact:!0,path:j,component:de}),s.a.createElement(b.b,{path:f,component:J}),s.a.createElement(b.b,{path:O,component:fe}),s.a.createElement(b.a,{to:E}))))};a(90),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke,Ce,Te,Fe,Ie=a(74),Le=a(22),Re=a.n(Le),De=a(12),Ue=Re.a.mark(Ye),Pe=Re.a.mark(Ze),Ae=Re.a.mark($e),Ge=Re.a.mark(Ke),We=Re.a.mark(et),Ve=Re.a.mark(tt),Je=Re.a.mark(at),He="https://loft-taxi.glitch.me",qe=function(e){return fetch("".concat(He,"/auth"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},Qe=function(e){return fetch("".concat(He,"/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},Xe=function(e){return fetch("".concat(He,"/card"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},ze=function(e){return fetch("".concat(He,"/card?token=").concat(e),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))},Be=function(){return fetch("".concat(He,"/addressList")).then((function(e){return e.json()}))},Me=function(e){return fetch("".concat(He,"/route?address1=").concat(e.addressOne,"&address2=").concat(e.addressTwo)).then((function(e){return e.json()}))};function Ye(){var e,t;return Re.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(De.d)(T);case 3:return e=a.sent,a.prev=4,a.next=7,Object(De.a)(qe,e.payload);case 7:if(!(t=a.sent).success){a.next=13;break}return a.next=11,Object(De.c)(F(t));case 11:a.next=15;break;case 13:return a.next=15,Object(De.c)(I(t));case 15:a.next=21;break;case 17:return a.prev=17,a.t0=a.catch(4),a.next=21,Object(De.c)(I(a.t0));case 21:a.next=0;break;case 23:case"end":return a.stop()}}),Ue,null,[[4,17]])}function Ze(){var e,t;return Re.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(De.d)(R);case 3:return e=a.sent,a.prev=4,a.next=7,Object(De.a)(Qe,e.payload);case 7:if(!(t=a.sent).success){a.next=13;break}return a.next=11,Object(De.c)(D(t));case 11:a.next=15;break;case 13:return a.next=15,Object(De.c)(U(t));case 15:a.next=21;break;case 17:return a.prev=17,a.t0=a.catch(4),a.next=21,Object(De.c)(U(a.t0));case 21:a.next=0;break;case 23:case"end":return a.stop()}}),Pe,null,[[4,17]])}function $e(){var e,t;return Re.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(De.d)(oe);case 3:return e=a.sent,a.prev=4,a.next=7,Object(De.a)(Xe,e.payload);case 7:if(!(t=a.sent).success){a.next=13;break}return a.next=11,Object(De.c)(se(Object.assign(t,e.payload)));case 11:a.next=15;break;case 13:return a.next=15,Object(De.c)(ie(t));case 15:a.next=21;break;case 17:return a.prev=17,a.t0=a.catch(4),a.next=21,Object(De.c)(ie(a.t0));case 21:a.next=0;break;case 23:case"end":return a.stop()}}),Ae,null,[[4,17]])}function Ke(){var e,t;return Re.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(De.d)(ue);case 3:return e=a.sent,a.prev=4,a.next=7,Object(De.a)(ze,e.payload.token);case 7:if(!(t=a.sent)){a.next=13;break}return a.next=11,Object(De.c)(se(t));case 11:a.next=15;break;case 13:return a.next=15,Object(De.c)(ie(t));case 15:a.next=21;break;case 17:return a.prev=17,a.t0=a.catch(4),a.next=21,Object(De.c)(ie(a.t0));case 21:a.next=0;break;case 23:case"end":return a.stop()}}),Ge,null,[[4,17]])}function et(){return Re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(De.e)(Z,Re.a.mark((function e(){var t;return Re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(De.a)(Be);case 3:return t=e.sent,e.next=6,Object(De.c)($(t));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(De.c)(K(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));case 2:case"end":return e.stop()}}),We)}function tt(){var e,t;return Re.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(De.d)(ee);case 3:return e=a.sent,a.prev=4,a.next=7,Object(De.a)(Me,e.payload);case 7:return t=a.sent,a.next=10,Object(De.c)(te({status:!0,coordinates:t}));case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(4),a.next=16,Object(De.c)(ae(a.t0));case 16:a.next=0;break;case 18:case"end":return a.stop()}}),Ve,null,[[4,12]])}function at(){return Re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(De.b)(Ze);case 2:return e.next=4,Object(De.b)(Ye);case 4:return e.next=6,Object(De.b)($e);case 6:return e.next=8,Object(De.b)(Ke);case 8:return e.next=10,Object(De.b)(et);case 10:return e.next=12,Object(De.b)(tt);case 12:case"end":return e.stop()}}),Je)}var nt=Object(Oe.a)((ke={},Object(S.a)(ke,F,(function(e,t){return t.payload.success})),Object(S.a)(ke,L,(function(){return!1})),Object(S.a)(ke,D,(function(e,t){return t.payload.success})),ke),!1),rt=Object(Oe.a)((Ce={},Object(S.a)(Ce,F,(function(e,t){return t.payload.token})),Object(S.a)(Ce,L,(function(){return""})),Object(S.a)(Ce,D,(function(e,t){return t.payload.token})),Ce),""),ct=Object(Oe.a)((Te={},Object(S.a)(Te,T,(function(){return!0})),Object(S.a)(Te,F,(function(){return!1})),Object(S.a)(Te,I,(function(){return!1})),Object(S.a)(Te,R,(function(){return!0})),Object(S.a)(Te,D,(function(){return!1})),Object(S.a)(Te,U,(function(){return!1})),Te),!1),lt=Object(Oe.a)((Fe={},Object(S.a)(Fe,I,(function(e,t){return t.payload})),Object(S.a)(Fe,T,(function(){return null})),Object(S.a)(Fe,U,(function(e,t){return t.payload})),Object(S.a)(Fe,R,(function(){return null})),Fe),null),ot=Object(Ee.c)({isLoggedIn:nt,pending:ct,error:lt,token:rt}),ut=Object(Ee.c)({auth:ot,profile:_e,map:Se}),st=localStorage,it=Object(Ie.a)(),mt=function(){var e=st.getItem("loftTaxiAuth");return e?JSON.parse(e):void 0}(),dt=function(){var e=Object(Ee.e)(ut,mt,Object(Ee.d)(Object(Ee.a)(it),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));return it.run(at),e}();dt.subscribe((function(){!function(e){var t={auth:{isLoggedIn:e.auth.isLoggedIn,token:e.auth.token}},a=JSON.stringify(t);st.setItem("loftTaxiAuth",a)}(dt.getState())})),Object(i.render)(s.a.createElement(d.a,{store:dt},s.a.createElement(m.a,null,s.a.createElement(we,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[79,1,2]]]);
//# sourceMappingURL=main.efb787d0.chunk.js.map