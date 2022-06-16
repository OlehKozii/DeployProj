"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[712],{5712:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r=t(2982),s=t(4165),i=t(1413),o=t(5861),c=t(885),l=t(2791),a=t(2966),x=t(32),u=t(9731),d=t(8735),p=t(184),h=function(e){var n=e.name,t=e.text,r=e.time,s=e.grade,i=new Date(r);return(0,p.jsxs)(d.xu,{w:"100%",children:[(0,p.jsxs)(d.kC,{justifyContent:"space-between",children:[(0,p.jsx)(d.xv,{color:"gray.600",fontSize:"18px",as:"b",children:n}),(0,p.jsx)(d.xv,{color:"gray.400",fontSize:"14px",children:"".concat(i.getHours(),":").concat(i.getMinutes(),"  ").concat(i.getDate(),"/").concat(i.getMonth(),"/").concat(i.getFullYear())})]}),(0,p.jsxs)(d.kC,{justifyContent:"space-between",children:[(0,p.jsx)(d.xv,{color:"gray.500",fontSize:"16px",maxWidth:"80%",children:t}),(0,p.jsxs)(d.xv,{color:function(e){switch(!0){case e>=75:return"green";case e>=50:return"teal";case e>=25:return"yellow";case e>=0:return"red";default:return"teal"}}(s),fontSize:"35px",mx:"10px",children:[s,"%"]})]})]})},m=t(3046),f=t(5154),j=t(2504),g=t(7005),v=t(6123),y=t(1022),S=t(1070),w=(0,x.Pi)((function(){var e,n,t,x,w,z=(0,l.useContext)(a._),Z=z.good,b=z.user,C=(0,l.useState)({}),k=(0,c.Z)(C,2),D=k[0],W=k[1],A=(0,l.useState)(1),M=(0,c.Z)(A,2),F=M[0],T=M[1],I=(0,l.useState)(""),L=(0,c.Z)(I,2),B=L[0],E=L[1],U=(0,l.useState)(50),Y=(0,c.Z)(U,2),H=Y[0],P=Y[1],R=(0,l.useState)(!1),_=(0,c.Z)(R,2),J=_[0],O=_[1],Q=(0,l.useState)(!1),V=(0,c.Z)(Q,2),q=V[0],G=V[1];function K(e){switch(!0){case e>=75:return"green";case e>=50:return"teal";case e>=25:return"yellow";case e>=0:return"red";default:return"teal"}}function N(){return(N=(0,o.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("good/getone/".concat(Z.id));case 2:200===(n=e.sent).status&&(W(n.data),console.log(n.data));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return(X=(0,o.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.post("basket/addMany",{goodId:Z.id,count:F});case 2:n=e.sent,G(!0),n&&G(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return($=(0,o.Z)((0,s.Z)().mark((function e(){var n,t,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:b.user.name,text:B,time:new Date,grade:H},t=(0,i.Z)((0,i.Z)({},D),{},{comments:[n].concat((0,r.Z)(D.comments))}),o=t.comments.reduce((function(e,n){return e+n.grade}),0)/t.comments.length,t.grade=o,W(t),e.next=7,u.Z.post("good/addComment/".concat(Z.id),n);case 7:e.sent,E("");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,l.useEffect)((function(){!function(){N.apply(this,arguments)}()}),[]),(0,p.jsx)(d.W2,{p:30,maxWidth:1080,children:D&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.xu,{bg:"whiteAlpha.500",rounded:10,p:"10px 30px 40px 30px",children:(0,p.jsxs)(d.MI,{minChildWidth:"350px",spacing:"25px",children:[(0,p.jsx)(d.xu,{p:"10px",children:(0,p.jsx)(m.Ee,{src:D.image,rounded:5,w:"100%",h:"auto",objectFit:"cover"})}),(0,p.jsxs)(d.xu,{display:"flex",flexDirection:"column",justifyContent:"space-between",children:[(0,p.jsx)(d.xv,{marginBottom:"30px",fontSize:"4xl",children:D.name}),null!==D&&void 0!==D&&null!==(e=D.comments)&&void 0!==e&&e.length?(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(d.xu,{children:[(0,p.jsxs)(d.kC,{children:[(0,p.jsx)(d.xv,{fontSize:"30px",color:"gray.500",children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u0442\u043e\u0432\u0430\u0440\u0443: "}),(0,p.jsx)(d.LZ,{}),(0,p.jsxs)(d.xv,{as:"span",color:K(D.grade),fontSize:"45px",lineHeight:"40px",mx:"10px",children:[D.grade,"%"]})]}),(0,p.jsxs)(d.kC,{fontSize:"30px",color:"gray.500",my:"20px",children:[(0,p.jsx)(d.xv,{fontSize:"30px",color:"gray.500",children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432: "}),(0,p.jsx)(d.LZ,{}),(0,p.jsx)(d.xv,{as:"span",fontSize:"35px",mx:"10px",children:(0,p.jsx)(d.rU,{href:"#comments",children:null===D||void 0===D||null===(n=D.comments)||void 0===n?void 0:n.length})})]})]})}):(0,p.jsx)(d.kC,{justifyContent:"center",m:"10px 0 30px 0",children:(0,p.jsx)(d.xv,{fontSize:"30px",color:"gray.500",children:"\u0429\u0435 \u043d\u0435\u043c\u0430\u0454 \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432"})}),(0,p.jsxs)(d.xu,{borderWidth:"1px",borderColor:"gray.300",rounded:10,p:"15px",children:[(0,p.jsxs)(d.kC,{marginBottom:"30px",justifyContent:"space-between",alignItems:"end",children:[(0,p.jsxs)(d.xv,{fontSize:"50px",children:[null!==(t=D.priceWithDiscount)&&void 0!==t?t:D.price,"\u20b4"]}),(0,p.jsxs)(d.xu,{children:[(0,p.jsx)(d.xv,{fontSize:"16px",fontWeight:"500",marginBottom:"10px",color:{"\u0412 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456":"green.300","\u0417\u0430\u043a\u0456\u043d\u0447\u0443\u0454\u0442\u044c\u0441\u044f":"yellow.400","\u0417\u0430\u043a\u0456\u043d\u0447\u0438\u0432\u0441\u044f":"red.500","\u041e\u0447\u0456\u043a\u0443\u0454\u0442\u044c\u0441\u044f":"teal.400"}[D.state],children:D.state}),(0,p.jsxs)(d.kC,{fontSize:"18px",children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c:",(0,p.jsxs)(f.Y2,{marginLeft:"10px",size:"xs",value:F,onChange:function(e){return T(e)},maxW:14,min:1,children:[(0,p.jsx)(f.zu,{}),(0,p.jsxs)(f.Fi,{children:[(0,p.jsx)(f.WQ,{}),(0,p.jsx)(f.Y_,{})]})]})]})]})]}),(0,p.jsx)(j.zx,{width:"100%",colorScheme:"teal",onClick:function(){return function(){return X.apply(this,arguments)}()},isDisabled:q,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432 \u043a\u043e\u0448\u0438\u043a"})]})]})]})}),(0,p.jsxs)(d.xu,{bg:"whiteAlpha.500",rounded:10,p:15,my:"20px",display:"flex",flexDir:"column",children:[(0,p.jsx)(d.xv,{m:"0 10px 10px 10px",fontSize:"24px",alignSelf:"center",children:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"}),(0,p.jsx)(g.xJ,{children:(0,p.jsx)(g.iA,{bg:"gray.200",variant:"striped",rounded:10,children:(0,p.jsx)(g.p3,{children:null===D||void 0===D||null===(x=D.params)||void 0===x?void 0:x.map((function(e){return(0,p.jsxs)(g.Tr,{children:[(0,p.jsx)(g.Td,{children:(0,p.jsx)("b",{children:e.title})}),(0,p.jsx)(g.Td,{children:e.description})]})}))})})})]}),(0,p.jsxs)(d.xu,{bg:"whiteAlpha.500",rounded:10,p:15,my:"20px",display:"flex",flexDir:"column",children:[(0,p.jsx)(d.xv,{m:"0 10px 10px 10px",fontSize:"24px",alignSelf:"center",children:"\u0417\u0430\u043b\u0438\u0448\u0442\u0435 \u0432\u0456\u0434\u0433\u0443\u043a"}),b.isAuth?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v.g,{rows:5,resize:"none",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0456\u0442\u044c \u0449\u043e\u0441\u044c...",value:B,onChange:function(e){return E(e.target.value)}}),(0,p.jsx)(d.xv,{marginTop:"20px",fontSize:"18px",alignSelf:"center",color:"gray.500",children:"\u041e\u0446\u0456\u043d\u0456\u0442\u044c \u0446\u0435\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442"}),(0,p.jsxs)(y.iR,{isDisabled:!B,my:"20px",defaultValue:50,min:0,max:100,onChange:function(e){return P(e)},onMouseEnter:function(){return O(!0)},onMouseLeave:function(){return O(!1)},colorScheme:K(H),children:[(0,p.jsx)(y.jz,{value:25,mt:"1",ml:"-2.5",fontSize:"sm",children:"25%"}),(0,p.jsx)(y.jz,{value:50,mt:"1",ml:"-2.5",fontSize:"sm",children:"50%"}),(0,p.jsx)(y.jz,{value:75,mt:"1",ml:"-2.5",fontSize:"sm",children:"75%"}),(0,p.jsx)(y.Uj,{colorScheme:"red",children:(0,p.jsx)(y.Ms,{})}),(0,p.jsx)(S.u,{hasArrow:!0,bg:K(H),color:"white",placement:"top",isOpen:J,label:"".concat(H,"%"),children:(0,p.jsx)(y.gs,{colorScheme:"red"})})]}),(0,p.jsx)(j.zx,{onClick:function(){return $.apply(this,arguments)},colorScheme:"teal",my:"10px",isDisabled:!B,children:"\u041e\u043f\u0443\u0431\u043b\u0456\u043a\u0443\u0432\u0430\u0442\u0438"})]}):(0,p.jsx)(v.g,{rows:5,resize:"none",isDisabled:!0,placeholder:"\u0423\u0432\u0456\u0439\u0434\u0456\u0442\u044c \u0430\u0431\u043e \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0442\u0435\u0441\u044c, \u0449\u043e\u0431 \u0437\u0430\u043b\u0438\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0433\u0443\u043a."})]}),(0,p.jsx)(d.xu,{bg:"whiteAlpha.500",rounded:10,p:15,my:"20px",display:"flex",flexDir:"column",children:(0,p.jsx)(d.gC,{spacing:"35px",id:"comments",children:null===D||void 0===D||null===(w=D.comments)||void 0===w?void 0:w.map((function(e,n){return(0,p.jsx)(h,(0,i.Z)({},e),n)}))})})]})})})),z=w},9731:function(e,n,t){var r,s=t(4569),i=t.n(s)().create({baseURL:"https://mydiplomlevas.herokuapp.com/api/",headers:{Authorization:null!==(r=localStorage.getItem("Token"))&&void 0!==r?r:""}});i.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&localStorage.removeItem("Token"),Promise.reject(e)})),n.Z=i}}]);
//# sourceMappingURL=712.53b05fff.chunk.js.map