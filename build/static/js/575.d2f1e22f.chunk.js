"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[575],{3767:function(e,t,r){var n=r(8214),a=r(5861),o=r(885),s=r(2791),u=r(9918),c=r(6871),l=r(9731),i=r(32),p=r(4045),d=r(3504),f=r(3393),h=r(8735),x=r(5798),m=r(2504),g=r(184),v=(0,i.Pi)((function(){var e=(0,s.useContext)(u._).user,t=(0,c.s0)(),r=(0,s.useState)(""),i=(0,o.Z)(r,2),v=i[0],w=i[1],y=(0,s.useState)(""),k=(0,o.Z)(y,2),Z=k[0],I=k[1];(0,s.useEffect)((function(){var e=localStorage.getItem("Token");console.log(e),e&&t("/")}),[]);var j=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.Z.post("user/login",{email:v,password:Z});case 2:200===(a=r.sent).status&&(e.setUser(!0),e.setIsAuth(!0),localStorage.setItem("Token","Bearer "+a.data.token),t("/"));case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,g.jsxs)(f.NI,{maxW:"500px",bg:"gray.200",rounded:10,p:"20px",display:"flex",flexDirection:"column",alignItems:"center",children:[(0,g.jsx)(h.X6,{my:"20px",children:"\u0423\u0432\u0456\u0439\u0442\u0438"}),(0,g.jsx)(x.II,{bg:"gray.100",w:"80%",my:"10px",type:"email",placeholder:"Email",value:v,onChange:function(e){return w(e.target.value)}}),(0,g.jsx)(x.II,{bg:"gray.100",w:"80%",my:"10px",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:Z,onChange:function(e){return I(e.target.value)}}),(0,g.jsx)(m.zx,{w:"80%",my:"10px",colorScheme:"teal",onClick:j,children:"\u0423\u0432\u0456\u0439\u0442\u0438"}),(0,g.jsx)(d.rU,{to:p._5,children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"})]})}));t.Z=v},6575:function(e,t,r){r.r(t);r(2791);var n=r(3767),a=r(32),o=r(7503),s=r(184),u=(0,a.Pi)((function(){return(0,s.jsx)("div",{id:o.Z.wrapper,children:(0,s.jsx)(n.Z,{})})}));t.default=u},9731:function(e,t,r){var n,a=r(4569),o=r.n(a)().create({baseURL:"https://mydiplomlevas.herokuapp.com/api/",headers:{Authorization:null!==(n=localStorage.getItem("Token"))&&void 0!==n?n:""}});t.Z=o},7503:function(e,t){t.Z={wrapper:"Auth_wrapper__me9dS"}}}]);
//# sourceMappingURL=575.d2f1e22f.chunk.js.map