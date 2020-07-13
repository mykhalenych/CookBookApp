(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{65:function(e,t,n){e.exports=n(76)},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),c=n.n(i),o=n(13),l=n(118),u=n(116),m=n(117),d=n(110),p=n(54),s=n.n(p),f=n(125),g=n(115),E=n(124),h=n(113),b=n(34),O=n.n(b),v=n(23),j="https://5eca820038df9600165117b6.mockapi.io/mock",y=function(){return function(e){fetch(j).then((function(e){try{return e.json()}catch(t){throw new Error("Faild to get recipes")}})).then((function(e){return e})).then((function(t){return e(function(e){return{type:"RECIPE_LIST_RECIEVED",payload:{recipeList:e}}}(t))}))}},C=function(e,t,n){return function(a){(function(e){try{return fetch(j,{method:"POST",headers:{"Content-type":"application/json; charset=utf-8"},body:JSON.stringify(e)})}catch(t){throw new Error("Faild to create recipe")}})({title:e,description:t,image:n,createAt:(new Date).toISOString()}).then((function(){return a(y())}))}},S=Object(d.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",position:"fixed",zIndex:1e3,backgroundColor:"#fafafa"},form:{width:"100%",marginTop:e.spacing(1),padding:"15px"},submit:{margin:e.spacing(3,0,2)},icon:{position:"absolute",right:0},wrap:{margin:e.spacing(1)},input:{display:"none"}}})),w={crateRecipe:C},x=Object(v.b)(null,w)((function(e){var t=e.closeModal,n=e.onCreate,i=Object(a.useState)(""),c=Object(o.a)(i,2),l=c[0],u=c[1],m=Object(a.useState)(""),d=Object(o.a)(m,2),p=d[0],s=d[1],b=Object(a.useState)(""),v=Object(o.a)(b,2),j=v[0],y=v[1],C=S();return r.a.createElement(h.a,{component:"div"},r.a.createElement(g.a,null),r.a.createElement("div",{className:C.paper},r.a.createElement(O.a,{className:C.icon,onClick:t}),r.a.createElement("form",{className:C.form},r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"title",label:"Title",name:"title",autoFocus:!0,onChange:function(e){return function(e){s(e.target.value)}(e)}}),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"description",label:"Description",type:"description",id:"description",onChange:function(e){return function(e){y(e.target.value)}(e)}}),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"images",label:"image url",type:"images",id:"images",onChange:function(e){return function(e){u(e.target.value)}(e)}}),r.a.createElement(f.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:C.submit,onClick:function(){n(p,j,l),t()}},"Add Recipe"))))})),N=Object(d.a)((function(e){return{icon:{marginRight:e.spacing(2)}}})),k=function(e){var t=e.onCreate,n=Object(a.useState)(!1),i=Object(o.a)(n,2),c=i[0],d=i[1],p=N();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{position:"relative"},r.a.createElement(m.a,null,r.a.createElement(s.a,{className:p.icon,onClick:function(){return d(!0)}}),r.a.createElement(l.a,{variant:"h6",color:"inherit",noWrap:!0},"Add new recipe"))),c&&r.a.createElement(x,{closeModal:function(){d(!1)},onCreate:t}))},R=Object(d.a)((function(e){return{heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)}}})),T=function(){var e=R();return(r.a.createElement("div",{className:e.heroContent},r.a.createElement(l.a,null,r.a.createElement(l.a,{component:"h1",variant:"h1",align:"center",color:"textPrimary",gutterBottom:!0},"Cookbook JavaScript application."),r.a.createElement(l.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"You can add recipe, edit, and delete"))))},D=n(120),I=n(123),L=n(122),_=n(121),W=n(119),F=Object(d.a)((function(e){return{editor:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",position:"fixed",zIndex:1e3,backgroundColor:"#fafafa",top:100},textfield:{width:"100%",marginTop:e.spacing(1),padding:"15px"},submit:{margin:e.spacing(3,0,2)},icon:{position:"absolute",right:0},wrap:{margin:e.spacing(1)},input:{display:"none"}}})),M=function(e){var t=e.closeModal,n=e.onEdit,i=e.id,c=Object(a.useState)(""),l=Object(o.a)(c,2),u=l[0],m=l[1],d=Object(a.useState)(""),p=Object(o.a)(d,2),s=p[0],g=p[1],h=Object(a.useState)(""),b=Object(o.a)(h,2),v=b[0],j=b[1],y=F();return r.a.createElement("div",{className:y.editor},r.a.createElement(O.a,{className:y.icon,onClick:t}),r.a.createElement("form",{className:y.textfield},r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"title",label:"Title",name:"title",autoFocus:!0,onChange:function(e){return function(e){g(e.target.value)}(e)}}),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"description",label:"Description",type:"description",id:"description",onChange:function(e){return function(e){j(e.target.value)}(e)}}),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"images",label:"image url",type:"images",id:"images",onChange:function(e){return function(e){m(e.target.value)}(e)}}),r.a.createElement(f.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:y.submit,onClick:function(){n(i,{image:u,title:s,description:v}),t()}},"Edit Recipe")))},q=Object(d.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1}}})),P=function(e){var t=e.recipe,n=e.onEdit,i=e.onDelete,c=Object(a.useState)(!1),u=Object(o.a)(c,2),m=u[0],d=u[1],p=Object(a.useState)(),s=Object(o.a)(p,2),g=s[0],E=s[1],b=q();return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:b.cardGrid},m&&r.a.createElement(M,{closeModal:function(){d(!1)},onEdit:n,id:g}),r.a.createElement(W.a,{container:!0,spacing:4},t.map((function(e){return r.a.createElement(W.a,{item:!0,key:e.id,xs:12,sm:6,md:4},r.a.createElement(D.a,{className:b.card},r.a.createElement(_.a,{className:b.cardMedia,image:e.image,title:"Image title"}),r.a.createElement(L.a,{className:b.cardContent},r.a.createElement(l.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.a.createElement(l.a,null,e.description)),r.a.createElement(I.a,null,r.a.createElement(f.a,{size:"small",color:"primary",onClick:function(){return i(e.id)}},"Delete"),r.a.createElement(f.a,{size:"small",color:"primary",onClick:function(){return t=e.id,d(!0),void E(t);var t}},"Edit"))))}))))):r.a.createElement(W.a,{container:!0,spacing:4},"Recipes not found")},B=function(e){return e.recipe.recipeList},J={getRecipeList:y,updateRecipe:function(e,t){return function(n){(function(e,t){try{return fetch("".concat(j,"/").concat(e),{method:"PUT",headers:{"Content-type":"application/json;charset=utf-8"},body:JSON.stringify(t)})}catch(n){throw new Error("Faild to create recipe")}})(e,t).then((function(){return n(y())}))}},deleteRecipe:function(e){return function(t){(function(e){try{return fetch("".concat(j,"/").concat(e),{method:"DELETE"})}catch(t){throw new Error("Faild to create recipe")}})(e).then((function(){return t(y())}))}},createRecipe:C},z=Object(v.b)((function(e){return{recipe:B(e)}}),J)((function(e){var t=e.recipe,n=e.createRecipe,i=e.updateRecipe,c=e.deleteRecipe,o=e.getRecipeList;return Object(a.useEffect)((function(){o()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(k,{onCreate:n}),r.a.createElement("main",null,r.a.createElement(T,null),r.a.createElement(P,{recipe:t,onEdit:i,onDelete:c})))})),A=n(22),G=n(55),V=n(40),U={recipeList:[]},X=Object(A.c)({recipe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECIPE_LIST_RECIEVED":return Object(V.a)(Object(V.a)({},e),{},{recipeList:t.payload.recipeList});default:return e}}}),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.d,H=Object(A.e)(X,Y(Object(A.a)(G.a))),K=n(56);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K.a,null,r.a.createElement(v.a,{store:H},r.a.createElement(z,null)))),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.59fc79c2.chunk.js.map