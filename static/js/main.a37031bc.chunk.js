(this["webpackJsonpjs3-portfolio"]=this["webpackJsonpjs3-portfolio"]||[]).push([[0],{16:function(e,n,t){e.exports=t(24)},24:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),a=t(10),c=t.n(a),i=t(3),l=t(2),u=t(15),s={body:"#E2E2E2",text:"#363537",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)"},d={body:"#363537",bodyDarker:"#232323",text:"#FAFAFA",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)"};function m(){var e=Object(i.a)(["\n\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: ",";\n    color: ",";\n    margin: 0;\n    padding: 0;\n    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n    transition: all 0.25s linear;\n  }\n  "]);return m=function(){return e},e}var f=Object(l.c)(m(),(function(e){return e.theme.body}),(function(e){return e.theme.text})),g=Object(r.createContext)(),h=function(e){var n=e.children,t=Object(r.useState)(!0),a=Object(u.a)(t,2),c=a[0],i=a[1];return o.a.createElement(g.Provider,{value:{dTheme:c,setDTheme:i}},o.a.createElement(l.b,{theme:c?d:s},o.a.createElement(f,null),n))},b=t(14),p=t.n(b),x=t(6);function v(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 50px;\n  .custom-classname .react-toggle--checked .react-toggle-track {\n    background-color: red;\n    height: 200px;\n    width: 200px;\n    padding: 30px;\n  }\n"]);return v=function(){return e},e}var y=function(){var e=Object(r.useContext)(g).setDTheme,n=Object(r.useContext)(g).dTheme,t=Object(r.useContext)(l.a);return console.log(t),o.a.createElement(E,null,o.a.createElement(p.a,{checked:!!n,className:"test",offColor:t.text,onColor:t.text,onHandleColor:t.body,offHandleColor:t.body,height:20,width:60,checkedIcon:o.a.createElement(x.a,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:15,marginLeft:-20},color:t.text,className:"white"}),uncheckedIcon:o.a.createElement(x.b,{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",height:"100%",fontSize:30,right:-27},color:t.text,className:"dark"}),onChange:function(){e((function(e){return!e}))}}))},E=l.d.div(v());function j(){var e=Object(i.a)(["\n  background: black;\n  border: none;\n  color: ",";\n  background: ",";\n  cursor: pointer;\n"]);return j=function(){return e},e}function k(){var e=Object(i.a)(["\n  width: 100%;\n  margin: 0;\n  padding: 1em 2em;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  background: ",";\n  position: fixed;\n  top: 0;\n"]);return k=function(){return e},e}var w=function(){Object(r.useContext)(g).setDTheme;return o.a.createElement(O,null,o.a.createElement(y,null))},O=l.d.header(k(),(function(e){return e.theme.bodyDarker})),C=(l.d.button(j(),(function(e){return e.theme.text}),(function(e){return e.theme.body})),function(e){var n=e.children;return o.a.createElement("div",null,o.a.createElement(w,null),o.a.createElement("main",null,n))}),D=t(7);function B(){var e=Object(i.a)(["\n  position: absolute;\n  bottom: 0;\n  cursor: pointer;\n"]);return B=function(){return e},e}function F(){var e=Object(i.a)(["\n  font-size: 3rem;\n  margin: 0;\n"]);return F=function(){return e},e}function S(){var e=Object(i.a)(["\n  display: flex;\n  grid-row: 3;\n  justify-self: center;\n  align-self: center;\n  justify-content: center;\n  font-size: 4rem;\n\n  span {\n    transition: 200ms;\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return S=function(){return e},e}function z(){var e=Object(i.a)(["\n  grid-row: 2;\n  min-width: 500px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid ",";\n  justify-content: center;\n  padding: 2em;\n  p {\n    align-self: flex-start;\n    margin: 0;\n  }\n  span {\n    font-size: 2rem;\n  }\n"]);return z=function(){return e},e}function I(){var e=Object(i.a)(["\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 0.5fr 1fr;\n  justify-items: center;\n\n  /* justify-content: center;\n  align-items: center;\n  flex-direction: column; */\n  margin: 0 auto;\n"]);return I=function(){return e},e}var A=function(){return o.a.createElement(T,null,o.a.createElement(H,{theme:!0},o.a.createElement(J,null,"Patric Ronge"),o.a.createElement("p",null,"Friendly Dev lmao")),o.a.createElement(N,null,o.a.createElement("span",null,o.a.createElement(D.a,null)),o.a.createElement("span",null,o.a.createElement(D.b,null))),o.a.createElement(M,null,"V See my work below. V"))},T=l.d.section(I()),H=l.d.div(z(),(function(e){return e.theme.toggleBorder})),N=l.d.div(S(),(function(e){return e.theme.toggleBorder})),J=l.d.h2(F()),M=l.d.p(B());var P=function(){return o.a.createElement(C,null,o.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null,o.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.a37031bc.chunk.js.map