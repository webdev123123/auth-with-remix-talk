import{d as r,e as s,g as h,h as n,k as b}from"/build/_shared/chunk-6NMSYO2M.js";s();s();var w="/build/_assets/login-TB27ASMI.css";var x=()=>[{rel:"stylesheet",href:w}];function v(){var i,o,l,d,t,m,u,p,f,g,a,y;let e=b(),[c]=h();return r.createElement("div",{className:"container"},r.createElement("div",{className:"content","data-light":""},r.createElement("h1",null,"Login"),r.createElement("form",{method:"post","aria-describedby":(e==null?void 0:e.formError)?"form-error-message":void 0},r.createElement("input",{type:"hidden",name:"redirectTo",value:(i=c.get("redirectTo"))!=null?i:void 0}),r.createElement("fieldset",null,r.createElement("legend",{className:"sr-only"},"Login or Register?"),r.createElement("label",null,r.createElement("input",{type:"radio",name:"loginType",value:"login",defaultChecked:!((o=e==null?void 0:e.fields)==null?void 0:o.loginType)||((l=e==null?void 0:e.fields)==null?void 0:l.loginType)==="login"})," ","Login"),r.createElement("label",null,r.createElement("input",{type:"radio",name:"loginType",value:"register",defaultChecked:((d=e==null?void 0:e.fields)==null?void 0:d.loginType)==="register"})," ","Register")),r.createElement("div",null,r.createElement("label",{htmlFor:"username-input"},"Username"),r.createElement("input",{type:"text",id:"username-input",name:"username",defaultValue:(t=e==null?void 0:e.fields)==null?void 0:t.username,"aria-invalid":Boolean((m=e==null?void 0:e.fieldErrors)==null?void 0:m.username),"aria-describedby":((u=e==null?void 0:e.fieldErrors)==null?void 0:u.username)?"username-error":void 0}),((p=e==null?void 0:e.fieldErrors)==null?void 0:p.username)?r.createElement("p",{className:"form-validation-error",role:"alert",id:"username-error"},e==null?void 0:e.fieldErrors.username):null),r.createElement("div",null,r.createElement("label",{htmlFor:"password-input"},"Password"),r.createElement("input",{id:"password-input",name:"password",defaultValue:(f=e==null?void 0:e.fields)==null?void 0:f.password,type:"password","aria-invalid":Boolean((g=e==null?void 0:e.fieldErrors)==null?void 0:g.password)||void 0,"aria-describedby":((a=e==null?void 0:e.fieldErrors)==null?void 0:a.password)?"password-error":void 0}),((y=e==null?void 0:e.fieldErrors)==null?void 0:y.password)?r.createElement("p",{className:"form-validation-error",role:"alert",id:"password-error"},e==null?void 0:e.fieldErrors.password):null),r.createElement("div",{id:"form-error-message"},(e==null?void 0:e.formError)?r.createElement("p",{className:"form-validation-error",role:"alert"},e==null?void 0:e.formError):null),r.createElement("button",{type:"submit",className:"button"},"Submit"))),r.createElement("div",{className:"links"},r.createElement("ul",null,r.createElement("li",null,r.createElement(n,{to:"/"},"Home")),r.createElement("li",null,r.createElement(n,{to:"/jokes"},"Jokes")))))}export{v as default,x as links};
