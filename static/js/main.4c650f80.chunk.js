(this["webpackJsonpmaterial-burger"]=this["webpackJsonpmaterial-burger"]||[]).push([[0],{103:function(e,t,a){e.exports=a.p+"static/media/27.1 burger-logo.png.b8503d26.png"},107:function(e,t,a){e.exports={wrapper:"burgercontrols_wrapper__P4jjK",margin:"burgercontrols_margin__lsiT_",font:"burgercontrols_font__3Z-5Q"}},166:function(e,t,a){e.exports=a(213)},171:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=(a(171),a(79)),i=a(80),s=a(94),u=a(93),m=a(21),d=a(265),p=a(266),E=a(103),g=a.n(E),b=a(138),h=a.n(b),O=a(288),f=a(264),_=a(34),S=a(19),C=a(16),v=a(43),y=a.n(v),j=a(6),A=function(e,t){return{type:"AUTH_IN_SUCCESS",token:e,id:t}},M=function(e){return{type:"AUTH_FAILED",error:e}},D=function(){return localStorage.removeItem("token"),localStorage.removeItem("id"),{type:"LOGOUT"}},T=a(259),k=a(139),w=a.n(k),N=a(291),B=a(217),R=a(260),L=a(140),F=a.n(L),I=a(141),x=a.n(I),P=a(142),U=a.n(P),W=a(143),H=a.n(W),G=a(261),z=a(262),V=a(263),J=a(144),K=a.n(J);var Y=Object(S.b)((function(e){return{token:e.auth.token,isAuth:null!=e.auth.token,drawer:e.burgerBuilder.drawer}}),(function(e){return{logout:function(){e(D())},openDrawer:function(){e({type:"OPEN_DRAWER"})},closeDrawer:function(){e({type:"CLOSE_DRAWER"})}}}))((function(e){var t=h()((function(e){return{burgerIcon:{height:"50px"},tab:{minWidth:"3em",opacity:1,height:"64px"},tabs:{marginLeft:"auto"},drawer:{backgroundColor:e.palette.common.lightBrown},selected:{background:e.palette.common.brown}}}))(),a=w()(),o=Object(T.a)(a.breakpoints.down("xs")),c=Object(n.useState)(0),l=Object(m.a)(c,2),i=l[0],s=l[1],u=Object(n.useState)(!1),E=Object(m.a)(u,2),b=E[0],S=E[1],v=Object(n.useState)(0),y=Object(m.a)(v,2),j=y[0],A=y[1];Object(n.useEffect)((function(){"/orders"===window.location.pathname?(s(1),A(1)):"/auth"===window.location.pathname&&e.token?s(2):"/auth"!==window.location.pathname||e.token?"/"===window.location.pathname&&(s(0),A(0)):(s(1),A(2))}),[e.token]);var M=null;e.isAuth&&"/auth"===window.location.pathname?M=r.a.createElement(C.a,{to:"/"}):"/"===window.location.pathname&&!e.isAuth&&b?M=r.a.createElement(C.a,{to:"/auth"}):"/orders"!==window.location.pathname||e.isAuth||(M=r.a.createElement(C.a,{to:"/auth"}));var D=r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{open:e.drawer,classes:{paper:t.drawer},onOpen:e.openDrawer,onClose:e.closeDrawer},r.a.createElement(R.a,{onClick:e.closeDrawer},r.a.createElement(B.a,null,r.a.createElement("div",{style:{height:"60px",padding:"3px",backgroundColor:"white",borderRadius:"5px"}},r.a.createElement("img",{src:g.a,alt:"burger-icon",className:t.burgerIcon}))),r.a.createElement(B.a,{style:{marginTop:"2.5em",height:"5em",color:"white"},button:!0,divider:!0,component:_.b,to:"/",selected:0===j,onClick:function(){A(0)}},r.a.createElement(G.a,null,r.a.createElement(F.a,{style:{color:"white"}})),r.a.createElement(z.a,null,"Burger Builder")),e.isAuth?r.a.createElement(B.a,{style:{color:"white"},button:!0,divider:!0,component:_.b,to:"/orders",selected:1===j,onClick:function(){A(1)}},r.a.createElement(G.a,null,r.a.createElement(x.a,{style:{color:"white"}})),r.a.createElement(z.a,null,"Order")):null,e.isAuth?null:r.a.createElement(B.a,{style:{color:"white"},button:!0,divider:!0,component:_.b,to:"/auth",selected:2===j,onClick:function(){A(2)}},r.a.createElement(G.a,null,r.a.createElement(U.a,{style:{color:"white"}})),r.a.createElement(z.a,null,"Auth")),e.isAuth?r.a.createElement(B.a,{style:{color:"white",background:"#FF4500"},button:!0,divider:!0,component:_.b,to:"/auth",onClick:e.logout},r.a.createElement(G.a,null,r.a.createElement(H.a,{style:{color:"white"}})),r.a.createElement(z.a,null,"Logout")):null))),k=r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{style:{marginLeft:"auto"},onClick:function(){e.openDrawer()}},r.a.createElement(K.a,{style:{height:"50px",width:"50px"}}))),L=r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{className:t.tabs,value:i,onChange:function(e,t){s(t)}},r.a.createElement(f.a,{label:"Burger Builder",className:t.tab,component:_.b,to:"/",onClick:function(){S(!1)}}),e.token?r.a.createElement(f.a,{label:"Orders",className:t.tab,component:_.b,to:"/orders"}):null,e.token?null:r.a.createElement(f.a,{label:"Auth",className:t.tab,component:_.b,to:"/auth"}),e.isAuth?r.a.createElement(f.a,{label:"Logout",onClick:function(){e.logout(),S(!0)},className:t.tab}):null));return r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},M,r.a.createElement(d.a,{position:"sticky"},r.a.createElement(p.a,null,r.a.createElement("img",{src:g.a,alt:"burger-icon",className:t.burgerIcon}),o?D:L,o?k:null)))})),Z=a(258),q=a(102),Q=a.n(q)()({palette:{common:{brown:"#8B4513",lightBrown:"#D2691E"},primary:{main:"#8B4513"},secondary:{main:"#D2691E"}}}),X=a(107),$=a.n(X),ee=a(267),te=a(268),ae=a(290),ne=a(294);var re=Object(S.b)((function(e){return{isAuth:null!=e.auth.token,loginMessage:e.burgerBuilder.loginTip}}),(function(e){return{openMessage:function(){e({type:"LOGIN_MESSAGE"})},closeMessage:function(){e({type:"CLOSE_LOGIN_MESSAGE"})}}}))((function(e){return r.a.createElement("div",{className:$.a.wrapper,style:{fontWeight:"bold"}},"Total Price: ",e.price.toFixed(2),r.a.createElement(ee.a,{container:!0,className:$.a.margin,alignItems:"center",justify:"center"},r.a.createElement(ee.a,{item:!0,style:{marginRight:"50px"}},r.a.createElement(ee.a,{container:!0,direction:"column",spacing:6},r.a.createElement(ee.a,{item:!0},"Salad"),r.a.createElement(ee.a,{item:!0},"Cheese"),r.a.createElement(ee.a,{item:!0},"Bacon"),r.a.createElement(ee.a,{item:!0},"Meat"))),r.a.createElement(ee.a,{item:!0},r.a.createElement(ee.a,{container:!0,direction:"column",spacing:4},r.a.createElement(ee.a,{item:!0},r.a.createElement(te.a,{variant:"contained",color:"primary",style:{minWidth:"6em"},onClick:e.addSalad},"+")),r.a.createElement(ee.a,{item:!0},r.a.createElement(te.a,{variant:"contained",color:"primary",style:{minWidth:"6em"},onClick:e.addCheese},"+")),r.a.createElement(ee.a,{item:!0},r.a.createElement(te.a,{variant:"contained",color:"primary",style:{minWidth:"6em"},onClick:e.addBacon},"+")),r.a.createElement(ee.a,{item:!0},r.a.createElement(te.a,{variant:"contained",color:"primary",style:{minWidth:"6em"},onClick:e.addMeat},"+")))),r.a.createElement(ee.a,{item:!0,style:{marginLeft:"20px"}},r.a.createElement(ee.a,{container:!0,direction:"column",spacing:4},r.a.createElement(ee.a,{item:!0},r.a.createElement(te.a,{variant:"contained",color:"primary",style:{minWidth:"6em"},onClick:e.removeSalad,disabled:e.disable.salad},"-")),r.a.createElement(ee.a,{item:!0},r.a.createElement(te.a,{variant:"contained",color:"primary",style:{minWidth:"6em"},onClick:e.removeCheese,disabled:e.disable.cheese},"-")),r.a.createElement(ee.a,{item:!0},r.a.createElement(te.a,{variant:"contained",color:"primary",style:{minWidth:"6em"},onClick:e.removeBacon,disabled:e.disable.bacon},"-")),r.a.createElement(ee.a,{item:!0},r.a.createElement(te.a,{variant:"contained",color:"primary",style:{minWidth:"6em"},onClick:e.removeMeat,disabled:e.disable.meat},"-"))))),r.a.createElement(te.a,{variant:"contained",style:{backgroundColor:"#FFD700",fontWeight:"bold",marginTop:"30px"},onClick:e.isAuth?e.openModal:e.openMessage},"Order Now"),r.a.createElement(ne.a,{open:e.loginMessage,anchorOrigin:{horizontal:"center",vertical:"top"},autoHideDuration:6e3},r.a.createElement(ae.a,{severity:"warning",onClose:e.closeMessage},"Please login to your account first!")))})),oe=a(270),ce=a(271);var le=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{open:e.open,onClose:e.closeModal,style:{textAlign:"center"},fullWidth:!0},r.a.createElement(ce.a,null,"Here is your delicious burger:"),r.a.createElement(ee.a,{container:!0,direction:"column"},r.a.createElement(ee.a,{item:!0,style:{marginBottom:"10px"}},r.a.createElement("span",null,"Salad: ")," ",e.salad),r.a.createElement(ee.a,{item:!0,style:{marginBottom:"10px"}},r.a.createElement("span",null,"Cheese: ")," ",e.cheese),r.a.createElement(ee.a,{item:!0,style:{marginBottom:"10px"}},r.a.createElement("span",null,"Meat: ")," ",e.meat),r.a.createElement(ee.a,{item:!0},r.a.createElement("span",null,"Bacon: ")," ",e.bacon)),r.a.createElement(ce.a,null,"Price: ",e.price.toFixed(2)),r.a.createElement(ee.a,{container:!0,justify:"center",style:{marginBottom:"20px"},spacing:3},r.a.createElement(ee.a,{item:!0},r.a.createElement(te.a,{variant:"outlined",style:{borderColor:"green",color:"green"},onClick:e.openContact},"Continue")),r.a.createElement(ee.a,{item:!0},r.a.createElement(te.a,{variant:"outlined",style:{borderColor:"red",color:"red"},onClick:e.closeModal},"Cancel")))))},ie=a(274),se=a(292),ue=a(289),me=a(277),de=a(272),pe=a(273),Ee=Object(de.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));function ge(){var e=Ee();return r.a.createElement("div",{className:e.root,style:{justifyContent:"center",paddingTop:"10%"}},r.a.createElement(pe.a,{color:"secondary",style:{height:"5em",width:"5em"}}))}var be=Object(S.b)((function(e){return{ing:e.burgerBuilder.ingredients,loading:e.burgerBuilder.loading,price:e.burgerBuilder.totalPrice,openMessage:e.burgerBuilder.openMessage,token:e.auth.token}}),(function(e){return{sendOrder:function(t,a){e(function(e,t){return function(a){a({type:"SEND_ORDER_START"}),y.a.post("https://creat-burger.firebaseio.com/order2.json?auth="+t,e).then((function(e){a(function(e){return{type:"SEND_ORDER_SUCCESS",orderData:e}}(e.data))})).catch((function(e){a({type:"SEND_ORDER_FAILED"})}))}}(t,a))},closeMessage:function(){e({type:"CLOSE_MESSAGE"})}}}))((function(e){var t=Object(n.useState)("Fastest"),a=Object(m.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(null),i=Object(m.a)(l,2),s=i[0],u=i[1],d=Object(n.useState)(null),p=Object(m.a)(d,2),E=p[0],g=p[1],b=Object(n.useState)(null),h=Object(m.a)(b,2),O=h[0],f=h[1],_=Object(n.useState)(null),S=Object(m.a)(_,2),C=S[0],v=S[1],y=Object(n.useState)(null),j=Object(m.a)(y,2),A=j[0],M=j[1],D={name:s,email:E,street:O,zipcode:C,country:A,method:o},T={ingredients:e.ing,orderData:D,price:e.price},k=r.a.createElement("div",null,r.a.createElement(ce.a,null,"Enter Your Contact Data"),r.a.createElement(ie.a,null,r.a.createElement(se.a,{margin:"dense",label:"Your Name",fullWidth:!0,variant:"outlined",onChange:function(e){u(e.target.value),console.log(s)}}),r.a.createElement(se.a,{margin:"dense",label:"Your Email",fullWidth:!0,variant:"outlined",onChange:function(e){g(e.target.value)}}),r.a.createElement(se.a,{margin:"dense",label:"Street",fullWidth:!0,variant:"outlined",onChange:function(e){f(e.target.value)}}),r.a.createElement(se.a,{margin:"dense",label:"Zip Code",fullWidth:!0,variant:"outlined",onChange:function(e){v(e.target.value)}}),r.a.createElement(se.a,{margin:"dense",label:"Country",fullWidth:!0,variant:"outlined",onChange:function(e){M(e.target.value)}}),r.a.createElement(ue.a,{value:o,fullWidth:!0,style:{marginTop:"10px",height:"40px"},onChange:function(e){c(e.target.value)},variant:"outlined"},r.a.createElement(me.a,{value:"Fastest"},"Fastest"),r.a.createElement(me.a,{value:"Cheapest"},"Cheapest")),r.a.createElement("div",{style:{marginTop:"20px",textAlign:"center"}},r.a.createElement(te.a,{style:{fontWeight:"bold",color:"green"},onClick:function(){e.sendOrder(T,e.token)}},"Order"))));return e.loading&&(k=r.a.createElement("div",{style:{height:"446px",width:"600px"}},r.a.createElement("div",{style:{paddingTop:"6.6em"}},r.a.createElement(ge,null)))),r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{open:e.openContact,onClose:e.closeContact},k),r.a.createElement(ne.a,{open:e.openMessage,onClose:e.closeMessage,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:6e3},r.a.createElement(ae.a,{severity:"success",onClose:e.closeMessage},"We have received your order!")))})),he=a(147),Oe=a(63),fe=a.n(Oe),_e=a(70),Se=a.n(_e),Ce=a(5),ve=a.n(Ce);function ye(e){var t=null;switch(e.type){case"salad":t=r.a.createElement("div",{className:Se.a.Salad});break;case"meat":t=r.a.createElement("div",{className:Se.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:Se.a.Cheese});break;case"bacon":t=r.a.createElement("div",{className:Se.a.Bacon});break;default:t=null}return r.a.createElement(r.a.Fragment,null,t)}ye.PropType={type:ve.a.string.isRequired};var je=ye,Ae=a(278);var Me=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(he.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(je,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients")),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae.a,null),r.a.createElement("div",{className:fe.a.Burger},r.a.createElement("div",{className:fe.a.BreadTop},r.a.createElement("div",{className:fe.a.Seeds1}),r.a.createElement("div",{className:fe.a.Seeds2})),t,r.a.createElement("div",{className:fe.a.BreadBottom})))},De=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchIngredients()}},{key:"render",value:function(){var e=this,t=Object(j.a)({},this.props.ing);for(var a in t)t[a]=t[a]<=0;var n=r.a.createElement(ge,null);return this.props.ing&&(n=r.a.createElement(r.a.Fragment,null,r.a.createElement(Me,{ingredients:this.props.ing}),r.a.createElement(re,{addMeat:function(){return e.props.addMeat("meat")},addBacon:function(){return e.props.addBacon("bacon")},addSalad:function(){return e.props.addSalad("salad")},addCheese:function(){return e.props.addCheese("cheese")},removeMeat:function(){return e.props.removeMeat("meat")},removeBacon:function(){return e.props.removeBacon("bacon")},removeSalad:function(){return e.props.removeSalad("salad")},removeCheese:function(){return e.props.removeCheese("cheese")},disable:t,price:this.props.totalPrice,openModal:this.props.openModal}),r.a.createElement(le,{open:this.props.open,closeModal:this.props.closeModal,salad:this.props.ing.salad,cheese:this.props.ing.cheese,meat:this.props.ing.meat,bacon:this.props.ing.bacon,price:this.props.totalPrice,openContact:this.props.openContactF}),r.a.createElement(be,{openContact:this.props.openContact,closeContact:this.props.closeContactF}))),n}}]),a}(n.Component),Te=Object(S.b)((function(e){return{ing:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,openContact:e.burgerBuilder.openContact,open:e.burgerBuilder.open}}),(function(e){return{addMeat:function(t){e({type:"ADD_MEAT",name:t})},addBacon:function(t){e({type:"ADD_BACON",name:t})},addCheese:function(t){e({type:"ADD_CHEESE",name:t})},addSalad:function(t){e({type:"ADD_SALAD",name:t})},removeMeat:function(t){e({type:"REMOVE_MEAT",name:t})},removeBacon:function(t){e({type:"REMOVE_MEAT",name:t})},removeCheese:function(t){e({type:"REMOVE_MEAT",name:t})},removeSalad:function(t){e({type:"REMOVE_MEAT",name:t})},fetchIngredients:function(){e((function(e){y.a.get("https://creat-burger.firebaseio.com/ingredients.json").then((function(t){e({type:"FETCH_INGREDIENTS_SUCCESS",ingredients:t.data})})).catch((function(t){e({type:"FETCH_INGREDIENTS_FAILED"})}))}))},openContactF:function(){e({type:"OPEN_CONTACT"})},closeContactF:function(){e({type:"CLOSE_CONTACT"})},openModal:function(){e({type:"OPEN_MODAL"})},closeModal:function(){e({type:"CLOSE_MODAL"})}}}))(De),ke=a(280),we=a(283),Ne=a(281),Be=a(279),Re=a(282),Le=a(149);var Fe=Object(S.b)((function(e){return{orderData:e.order.order,loading:e.order.loading,token:e.auth.token}}),(function(e){return{fetchOrder:function(t){e(function(e){return function(t){t({type:"FETCH_ORDER_START"}),y.a.get("https://creat-burger.firebaseio.com/order2.json?auth="+e).then((function(e){var a=[];for(var n in e.data)a.push(Object(j.a)(Object(j.a)({},e.data[n]),{},{id:n}));t(function(e){return{type:"FETCH_ORDER_SUCCESS",orderData:e}}(a))})).catch((function(e){t({type:"FETCH_ORDER_FAILED"})}))}}(t))}}}))((function(e){Object(n.useEffect)((function(){e.fetchOrder(e.token)}),[]);var t=r.a.createElement("div",null,e.orderData.map((function(e){return r.a.createElement(Be.a,{component:Le.a,style:{width:"60%",margin:"6% auto"}},r.a.createElement(ke.a,null,r.a.createElement(Ne.a,null,Array(e.ingredients).map((function(e){return r.a.createElement(Re.a,null,r.a.createElement(we.a,null,"Ingredients:"),r.a.createElement(we.a,null,"Meat: ",e.meat),r.a.createElement(we.a,null,"Salad: ",e.salad),r.a.createElement(we.a,null,"Cheese: ",e.cheese),r.a.createElement(we.a,null,"Bacon: ",e.bacon))})),r.a.createElement(Re.a,null,r.a.createElement(we.a,null,"Price: ",r.a.createElement("span",{style:{fontWeight:"bold"}},"USD ",e.price.toFixed(2)))))))})));return e.loading&&e.token&&(t=r.a.createElement(ge,null)),r.a.createElement(r.a.Fragment,null,t)})),Ie=a(295),xe=a(286),Pe=a(293),Ue=a(287),We=a(145),He=a.n(We),Ge=a(47),ze=a(285),Ve=a(284);var Je=Object(S.b)((function(e){return{open:e.auth.open,loading:e.auth.loading,successMessage:e.auth.successMessage}}),(function(e){return{closeForm:function(){e({type:"CLOSE_SIGNUP_FROM"})},authUp:function(t,a){e(function(e,t){var a={email:e,password:t,returnSecureToken:!0};return function(e){e({type:"AUTH_UP_START"}),y.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAN-tsoji2NFKt1jB1PDLOx6SG9JKY6Omg",a).then((function(t){e((t.data,{type:"AUTH_UP_SUCCESS"}))})).catch((function(t){e(M(t.response.data.error))}))}}(t,a))},closeMessage:function(){e({type:"CLOSE_MESSAGE"})}}}))((function(e){var t=Object(n.useState)(null),a=Object(m.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(null),i=Object(m.a)(l,2),s=i[0],u=i[1],d=r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,null,r.a.createElement(ce.a,{style:{textAlign:"center",marginBottom:"1em"}},r.a.createElement(Ge.a,{component:"h1",variant:"h5"},"Create your account")),r.a.createElement(Ve.a,null,r.a.createElement(se.a,{fullWidth:!0,variant:"outlined",label:"Setup email",autoFocus:!0,value:o,onChange:function(e){c(e.target.value)}})),r.a.createElement(Ve.a,null,r.a.createElement(se.a,{fullWidth:!0,variant:"outlined",label:"Setup password",value:s,onChange:function(e){u(e.target.value)}}))),r.a.createElement(te.a,{variant:"contained",color:"primary",style:{width:"30%",margin:"10px auto"},onClick:function(){return e.authUp(o,s)}},"Submit"));return e.loading&&(d=r.a.createElement("div",{style:{width:"444px",height:"298px",paddingTop:"4.5em"}},r.a.createElement(ge,null))),r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{open:e.open,onClose:e.closeForm,fullWidth:!0,maxWidth:"xs"},d),r.a.createElement(ne.a,{open:e.successMessage,onClose:e.closeMessage,autoHideDuration:6e3,anchorOrigin:{horizontal:"center",vertical:"top"}},r.a.createElement(ae.a,{severity:"success",onClose:e.closeMessage},"Account created!")))})),Ke=a(216),Ye=Object(de.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var Ze=Object(S.b)((function(e){return{loading:e.auth.loading,id:e.auth.id,loginMessage:e.auth.loginMessage,error:e.auth.error,openError:e.auth.openError,backDrop:e.auth.openBackDrop,isAuth:null!=e.auth.token}}),(function(e){return{authIn:function(t,a){e(function(e,t){var a={email:e,password:t,returnSecureToken:!0};return function(e){e({type:"AUTH_IN_START"}),y.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAN-tsoji2NFKt1jB1PDLOx6SG9JKY6Omg",a).then((function(t){localStorage.setItem("token",t.data.idToken),localStorage.setItem("id",t.data.localId),e(A(t.data.idToken,t.data.localId))})).catch((function(t){e(M(t.response.data.error))}))}}(t,a))},openForm:function(){e({type:"OPEN_SIGNUP_FROM"})},closeLoginMessage:function(){e({type:"CLOSE_MESSAGE"})},closeErrorMessage:function(){e({type:"CLOSE_ERROR_MESSAGE"})},closeLoginTip:function(){e({type:"CLOSE_LOGIN_MESSAGE"})}}}))((function(e){var t=Ye(),a=Object(n.useState)(null),o=Object(m.a)(a,2),c=o[0],l=o[1],i=Object(n.useState)(null),s=Object(m.a)(i,2),u=s[0],d=s[1],p=null;return e.error&&(p=e.error.message),r.a.createElement(ze.a,{component:"main",maxWidth:"xs"},r.a.createElement(Ae.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(Ie.a,{className:t.avatar},r.a.createElement(He.a,null)),r.a.createElement(Ge.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(se.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:c,onChange:function(e){l(e.target.value)}}),r.a.createElement(se.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:u,onChange:function(e){d(e.target.value)}}),r.a.createElement(xe.a,{control:r.a.createElement(Pe.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(te.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(){e.authIn(c,u),e.closeLoginTip()}},"Sign in"),r.a.createElement(ee.a,{container:!0},r.a.createElement(ee.a,{item:!0,xs:!0},r.a.createElement(Ue.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(ee.a,{item:!0},r.a.createElement(Ue.a,{href:"#",variant:"body2",onClick:e.openForm},"Don't have an account? Sign Up"))))),r.a.createElement(Je,null),r.a.createElement(ne.a,{open:e.loginMessage,onClose:e.closeLoginMessage,anchorOrigin:{horizontal:"center",vertical:"top"},autoHideDuration:6e3},r.a.createElement(ae.a,{severity:"success",onClose:e.closeLoginMessage},e.isAuth?"Login success!":"Logout success!")),r.a.createElement(Ke.a,{open:e.backDrop,style:{zIndex:"2000"}},r.a.createElement("div",{style:{marginBottom:"6em"}},r.a.createElement(ge,{style:{zIndex:"2001"}}))),r.a.createElement(ne.a,{open:e.openError,onClose:e.closeErrorMessage,anchorOrigin:{horizontal:"center",vertical:"top"},autoHideDuration:6e3},r.a.createElement(ae.a,{severity:"error",onClose:e.closeErrorMessage},p)))})),qe=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.autoLogin(),r.a.createElement(_.a,null,r.a.createElement(Z.a,{theme:Q},r.a.createElement("div",null,r.a.createElement(Y,null),r.a.createElement(C.d,null,r.a.createElement(C.b,{path:"/auth",component:Ze}),r.a.createElement(C.b,{path:"/orders",component:Fe}),r.a.createElement(C.b,{path:"/",component:Te})))))}}]),a}(n.Component),Qe=Object(S.b)(null,(function(e){return{autoLogin:function(){e((function(e){var t=localStorage.getItem("token");if(t){var a=localStorage.getItem("id");e(A(t,a))}else e(D())}))}}}))(qe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Xe=a(50),$e=a(35),et={ingredients:null,totalPrice:6,error:!1,loading:!1,openContact:!1,open:!1,openMessage:!1,loginTip:!1,drawer:!1},tt={bacon:2,cheese:1.5,meat:2,salad:1.5},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MEAT":case"ADD_BACON":case"ADD_CHEESE":case"ADD_SALAD":return Object(j.a)(Object(j.a)({},e),{},{ingredients:Object(j.a)(Object(j.a)({},e.ingredients),{},Object($e.a)({},t.name,e.ingredients[t.name]+1)),totalPrice:e.totalPrice+tt[t.name]});case"REMOVE_MEAT":case"REMOVE_BACON":case"REMOVE_CHEESE":case"REMOVE_SALAD":return Object(j.a)(Object(j.a)({},e),{},{ingredients:Object(j.a)(Object(j.a)({},e.ingredients),{},Object($e.a)({},t.name,e.ingredients[t.name]-1)),totalPrice:e.totalPrice-tt[t.name]});case"FETCH_INGREDIENTS_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{ingredients:t.ingredients,totalPrice:6});case"FETCH_INGREDIENTS_FAILED":return Object(j.a)(Object(j.a)({},e),{},{error:!0});case"SEND_ORDER_START":return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case"SEND_ORDER_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{loading:!1,openContact:!1,openMessage:!0});case"SEND_ORDER_FAILED":return Object(j.a)(Object(j.a)({},e),{},{error:!0,openContact:!1,loading:!1});case"OPEN_CONTACT":return Object(j.a)(Object(j.a)({},e),{},{openContact:!0,open:!1});case"CLOSE_CONTACT":return Object(j.a)(Object(j.a)({},e),{},{openContact:!1});case"OPEN_MODAL":return Object(j.a)(Object(j.a)({},e),{},{open:!0});case"CLOSE_MODAL":return Object(j.a)(Object(j.a)({},e),{},{open:!1});case"CLOSE_MESSAGE":return Object(j.a)(Object(j.a)({},e),{},{openMessage:!1});case"LOGIN_MESSAGE":return Object(j.a)(Object(j.a)({},e),{},{loginTip:!0});case"CLOSE_LOGIN_MESSAGE":return Object(j.a)(Object(j.a)({},e),{},{loginTip:!1});case"OPEN_DRAWER":return Object(j.a)(Object(j.a)({},e),{},{drawer:!0});case"CLOSE_DRAWER":return Object(j.a)(Object(j.a)({},e),{},{drawer:!1});default:return e}},nt=a(146),rt={order:[],loading:!0,error:!1},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ORDER_START":return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case"FETCH_ORDER_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{order:t.orderData,loading:!1});case"FETCH_ORDER_FAILED":return Object(j.a)(Object(j.a)({},e),{},{error:!0});default:return e}},ct={id:null,token:null,loading:!1,open:!1,successMessage:!1,loginMessage:!1,error:null,openError:!1,openBackDrop:!1},lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_UP_START":return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case"AUTH_IN_START":return Object(j.a)(Object(j.a)({},e),{},{openBackDrop:!0});case"AUTH_UP_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{loading:!1,open:!1,successMessage:!0});case"AUTH_IN_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{id:t.id,token:t.token,loading:!1,loginMessage:!0,openBackDrop:!1});case"AUTH_FAILED":return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:t.error,openError:!0,openBackDrop:!1});case"OPEN_SIGNUP_FROM":return Object(j.a)(Object(j.a)({},e),{},{open:!0});case"CLOSE_SIGNUP_FROM":return Object(j.a)(Object(j.a)({},e),{},{open:!1});case"CLOSE_MESSAGE":return Object(j.a)(Object(j.a)({},e),{},{successMessage:!1,loginMessage:!1});case"CLOSE_ERROR_MESSAGE":return Object(j.a)(Object(j.a)({},e),{},{openError:!1});case"LOGOUT":return Object(j.a)(Object(j.a)({},e),{},{token:null});default:return e}},it=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Xe.d,st=Object(Xe.c)({burgerBuilder:at,order:ot,auth:lt}),ut=Object(Xe.e)(st,it(Object(Xe.a)(nt.a))),mt=r.a.createElement(S.a,{store:ut},r.a.createElement(Qe,null));c.a.render(mt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){e.exports={BreadBottom:"burger_BreadBottom__1Sp9w",BreadTop:"burger_BreadTop__1TeNe",Seeds1:"burger_Seeds1__3mzOa",Seeds2:"burger_Seeds2__3YKiM",Meat:"burger_Meat__27aRo",Cheese:"burger_Cheese__1ejzS",Salad:"burger_Salad__2hbd7",Bacon:"burger_Bacon__23yna",Burger:"burger_Burger__JV9g-"}},70:function(e,t,a){e.exports={BreadBottom:"ingredients_BreadBottom__2E9Vj",BreadTop:"ingredients_BreadTop__2rLZl",Seeds1:"ingredients_Seeds1__2enZf",Seeds2:"ingredients_Seeds2__bmZUz",Meat:"ingredients_Meat__3JIiW",Cheese:"ingredients_Cheese__3RfHA",Salad:"ingredients_Salad__1FV0P",Bacon:"ingredients_Bacon__HBI8u",Burger:"ingredients_Burger__2GQrN"}}},[[166,1,2]]]);
//# sourceMappingURL=main.4c650f80.chunk.js.map