"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[779],{9779:function(e,t,r){r.r(t),r.d(t,{default:function(){return I}});var n=r(2791),a=r(4165),o=r(5861),s=r(885),u=r(7109),l=r(6871),c=r(9731),i=r(32),p=r(4045),d=r(3504),f=r(3393),h=r(8735),m=r(5798),x=r(2504),g=r(456),v=r(184),k=(0,i.Pi)((function(){var e=(0,n.useContext)(u._).user,t=(0,l.s0)(),r=(0,n.useState)(""),i=(0,s.Z)(r,2),k=i[0],w=i[1],y=(0,n.useState)(""),I=(0,s.Z)(y,2),Z=I[0],j=I[1];(0,n.useEffect)((function(){var e=localStorage.getItem("Token");console.log(e),e&&t("/")}),[]);var S=function(){var r=(0,o.Z)((0,a.Z)().mark((function r(){var n,o;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.post("user/login",{email:k,password:Z});case 2:200===(n=r.sent).status&&(o=(0,g.Z)(n.data.token),e.setUser({id:o.id,name:o.name,email:o.email,role:o.role}),e.setIsAuth(!0),localStorage.setItem("Token","Bearer "+n.data.token),t("/"));case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,v.jsxs)(f.NI,{maxW:"500px",bg:"gray.200",rounded:10,p:"20px",display:"flex",flexDirection:"column",alignItems:"center",children:[(0,v.jsx)(h.X6,{my:"20px",children:"\u0423\u0432\u0456\u0439\u0442\u0438"}),(0,v.jsx)(m.II,{bg:"gray.100",w:"80%",my:"10px",type:"email",placeholder:"Email",value:k,onChange:function(e){return w(e.target.value)}}),(0,v.jsx)(m.II,{bg:"gray.100",w:"80%",my:"10px",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:Z,onChange:function(e){return j(e.target.value)}}),(0,v.jsx)(x.zx,{w:"80%",my:"10px",colorScheme:"teal",onClick:S,children:"\u0423\u0432\u0456\u0439\u0442\u0438"}),(0,v.jsx)(d.rU,{to:p._5,children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"})]})})),w=k,y=r(7503),I=(0,i.Pi)((function(){return(0,v.jsx)("div",{id:y.Z.wrapper,children:(0,v.jsx)(w,{})})}))},9731:function(e,t,r){var n,a=r(4569),o=r.n(a)().create({baseURL:"http://localhost:8000/api/",headers:{Authorization:null!==(n=localStorage.getItem("Token"))&&void 0!==n?n:""}});o.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&localStorage.removeItem("Token"),Promise.reject(e)})),t.Z=o},7503:function(e,t){t.Z={wrapper:"Auth_wrapper__Od48h"}}}]);
//# sourceMappingURL=779.71a7e703.chunk.js.map