(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{176:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(211),l=t(199),s=t(212),c=t(177),o=t(178),m=t(179),d=t.n(m),u=t(209),f=t.n(u),p=t(180),b=function(e){return e[0].toUpperCase()+f()(e).slice(1)};var v=n.a.createContext({controlId:void 0}),y=n.a.forwardRef(function(e,a){var t=e.bsPrefix,i=e.className,l=e.children,s=e.controlId,m=e.as,u=void 0===m?"div":m,f=Object(o.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(p.b)(t,"form-group");var b=Object(r.useMemo)(function(){return{controlId:s}},[s]);return n.a.createElement(v.Provider,{value:b},n.a.createElement(u,Object(c.a)({},f,{ref:a,className:d()(i,t)}),l))});y.displayName="FormGroup";var h=y,E=(t(197),t(11)),N=t.n(E),g={type:N.a.string.isRequired,as:N.a.elementType},x=n.a.forwardRef(function(e,a){var t=e.as,r=void 0===t?"div":t,i=e.className,l=e.type,s=Object(o.a)(e,["as","className","type"]);return n.a.createElement(r,Object(c.a)({},s,{ref:a,className:d()(i,l&&l+"-feedback")}))});x.displayName="Feedback",x.propTypes=g,x.defaultProps={type:"valid"};var O=x,j=n.a.forwardRef(function(e,a){var t,i,l=e.bsPrefix,s=e.type,m=e.size,u=e.id,f=e.className,b=e.isValid,y=e.isInvalid,h=e.plaintext,E=e.readOnly,N=e.as,g=void 0===N?"input":N,x=Object(o.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),O=Object(r.useContext)(v).controlId;if(l=Object(p.b)(l,"form-control"),h)(i={})[l+"-plaintext"]=!0,t=i;else if("file"===s){var j;(j={})[l+"-file"]=!0,t=j}else{var k;(k={})[l]=!0,k[l+"-"+m]=m,t=k}return n.a.createElement(g,Object(c.a)({},x,{type:s,ref:a,readOnly:E,id:u||O,className:d()(f,t,b&&"is-valid",y&&"is-invalid")}))});j.displayName="FormControl",j.Feedback=O;var k=j,w=n.a.forwardRef(function(e,a){var t=e.id,i=e.bsPrefix,l=e.className,s=e.isValid,m=e.isInvalid,u=e.isStatic,f=Object(o.a)(e,["id","bsPrefix","className","isValid","isInvalid","isStatic"]);i=Object(p.b)(i,"form-check-input");var b=Object(r.useContext)(v),y=b.controlId,h=b.custom;return n.a.createElement("input",Object(c.a)({},f,{ref:a,id:t||y,className:d()(l,!h&&i,h&&"custom-control-input",s&&"is-valid",m&&"is-invalid",u&&"position-static")}))});w.displayName="FormCheckInput",w.defaultProps={type:"checkbox"};var P=w,F=n.a.forwardRef(function(e,a){var t=e.bsPrefix,i=e.className,l=e.htmlFor,s=Object(o.a)(e,["bsPrefix","className","htmlFor"]);t=Object(p.b)(t,"form-check-label");var m=Object(r.useContext)(v),u=m.controlId,f=m.custom;return n.a.createElement("label",Object(c.a)({},s,{ref:a,htmlFor:l||u,className:d()(i,!f&&t,f&&"custom-control-label")}))});F.displayName="FormCheckLabel",F.defaultProps={type:"checkbox"};var I=F,R=n.a.forwardRef(function(e,a){var t=e.id,i=e.bsPrefix,l=e.inline,s=e.disabled,m=e.isValid,u=e.isInvalid,f=e.feedback,b=e.className,y=e.style,h=e.title,E=e.type,N=e.label,g=e.children,x=e.custom,j=Object(o.a)(e,["id","bsPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom"]);i=Object(p.b)(i,"form-check");var k=Object(r.useContext)(v).controlId,w=Object(r.useMemo)(function(){return{controlId:t||k,custom:x}},[k,x,t]),F=null!=N&&!1!==N&&!g,R=n.a.createElement(P,Object(c.a)({},j,{type:E,ref:a,isValid:m,isInvalid:u,isStatic:!F,disabled:s}));return n.a.createElement(v.Provider,{value:w},n.a.createElement("div",{style:y,className:d()(b,!x&&i,x&&"custom-control custom-"+E,l&&(x?"custom-control":i)+"-inline")},g||n.a.createElement(n.a.Fragment,null,R,F&&n.a.createElement(I,{title:h},N),(m||u)&&n.a.createElement(O,{type:m?"valid":"invalid"},f))))});R.displayName="FormCheck",R.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},R.Input=P,R.Label=I;var C=R,_=n.a.forwardRef(function(e,a){var t=e.bsPrefix,i=e.column,s=e.srOnly,m=e.className,u=e.htmlFor,f=Object(o.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),b=Object(r.useContext)(v).controlId;t=Object(p.b)(t,"form-label");var y=d()(m,t,s&&"sr-only",i&&"col-form-label");return u=u||b,i?n.a.createElement(l.a,Object(c.a)({as:"label",className:y,htmlFor:u},f)):n.a.createElement("label",Object(c.a)({ref:a,className:y,htmlFor:u},f))});_.displayName="FormLabel",_.defaultProps={column:!1,srOnly:!1};var T=_,L=n.a.forwardRef(function(e,a){var t=e.bsPrefix,r=e.className,i=e.as,l=void 0===i?"small":i,s=Object(o.a)(e,["bsPrefix","className","as"]);return t=Object(p.b)(t,"form-text"),n.a.createElement(l,Object(c.a)({},s,{ref:a,className:d()(r,t)}))});L.displayName="FormText";var M,V,q,G,S,z,J,K,U,A=L,D=n.a.forwardRef(function(e,a){var t=e.bsPrefix,r=e.inline,i=e.className,l=e.validated,s=e.as,m=void 0===s?"form":s,u=Object(o.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(p.b)(t,"form"),n.a.createElement(m,Object(c.a)({},u,{ref:a,className:d()(i,l&&"was-validated",r&&t+"-inline")}))});D.displayName="Form",D.defaultProps={inline:!1},D.Row=(M="form-row",G=(q=void 0===V?{}:V).displayName,S=void 0===G?b(M):G,z=q.Component,J=void 0===z?"div":z,K=q.defaultProps,(U=n.a.forwardRef(function(e,a){var t=e.className,r=e.bsPrefix,i=e.as,l=void 0===i?J:i,s=Object(o.a)(e,["className","bsPrefix","as"]),m=Object(p.b)(r,M);return n.a.createElement(l,Object(c.a)({ref:a,className:d()(t,m)},s))})).defaultProps=K,U.displayName=S,U),D.Group=h,D.Control=k,D.Check=C,D.Label=T,D.Text=A;var H=D,W=t(189),Y=t(187),B=(t(206),t(207)),Q=t.n(B),X=t(208),Z=t.n(X);a.default=function(e){return e.siteTitle,e.contactEmail,n.a.createElement(W.a,null,n.a.createElement(Y.a,{title:"Home"}),n.a.createElement("div",{className:"hero"},n.a.createElement(i.a,null,n.a.createElement(l.a,{xs:12,md:6,className:"hero__content"},n.a.createElement("h1",{className:"display-4"},"Start revenue managing your ancillaries"),n.a.createElement("p",{className:"lead"},"We leverage machine learning with contextual data to provide ancillary price forecasting, integrating with your booking systems and helping you dramatically improve revenue."),n.a.createElement(s.a,{variant:"outline-primary",className:"hero__contact",size:"lg",href:"mailto:info@fare.direct"},"Get in touch")),n.a.createElement(l.a,{xs:12,md:6,className:"hero__image"},n.a.createElement("img",{src:Q.a,alt:"revenue"}))),n.a.createElement(i.a,null,n.a.createElement(l.a,{xs:12,md:6,className:"hero__content hero__content--padded order-md-12"},n.a.createElement("h1",{className:"display-4"},"Stay in the loop"),n.a.createElement("p",{className:"lead"},"Keep up-to-date and be amongst the first to get access to our platform."),n.a.createElement(H,null,n.a.createElement(H.Row,null,n.a.createElement(l.a,{xs:12,lg:6},n.a.createElement(s.a,{variant:"primary",type:"submit",size:"lg",href:"mailto:info@fare.direct"},"Contact us"))))),n.a.createElement(l.a,{xs:12,md:6,className:"hero__image order-md-1"},n.a.createElement("img",{src:Z.a,alt:"newsletter"})))))}},182:function(e,a,t){var r;e.exports=(r=t(186))&&r.default||r},183:function(e){e.exports={data:{site:{siteMetadata:{title:"faredirect",contactEmail:"info@fare.direct",menuLinks:[{name:"Product",link:"/product"},{name:"Pricing",link:"/pricing"},{name:"Team",link:"/team"}],footerLinks:[{name:"Privacy policy",link:"/privacy-policy"},{name:"Terms & conditions",link:"/terms"},{name:"Cookie policy",link:"/cookie-policy"}]}}}}},184:function(e,a,t){e.exports=t.p+"static/logo-green-25085212ec70b4949513504595ddff95.svg"},186:function(e,a,t){"use strict";t.r(a);t(22);var r=t(0),n=t.n(r),i=t(11),l=t.n(i),s=t(89),c=function(e){var a=e.location,t=e.pageResources;return t?n.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=c},187:function(e,a,t){"use strict";var r=t(188),n=t(0),i=t.n(n),l=t(11),s=t.n(l),c=t(195),o=t.n(c);function m(e){var a=e.description,t=e.lang,n=e.meta,l=e.title,s=r.data.site,c=a||s.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:t},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c}].concat(n)},i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600|Lato:300,400,700&display=swap",rel:"stylesheet"}))}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},a.a=m},188:function(e){e.exports={data:{site:{siteMetadata:{title:"faredirect",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@rmakovyak"}}}}},189:function(e,a,t){"use strict";var r=t(183),n=t(0),i=t.n(n),l=t(11),s=t.n(l),c=t(210),o=t(211),m=t(199),d=t(212),u=t(184),f=t.n(u);t(190);var p=function(e){var a=e.siteTitle,t=e.contactEmail;return i.a.createElement("header",{className:"header"},i.a.createElement(c.a,null,i.a.createElement(o.a,{className:"justify-content-center align-items-center"},i.a.createElement(m.a,{sm:2},i.a.createElement("img",{src:f.a,className:"header__logo",alt:a})),i.a.createElement(m.a,{sm:10,className:"text-right header__contact"},i.a.createElement(d.a,{variant:"outline-primary",size:"lg",href:"mailto:"+t},"Get in touch")))))};t(191);var b=function(e){var a=e.children;return i.a.createElement("main",{className:"main"},i.a.createElement(c.a,null,a))};t(58),t(182),i.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func;t(192);var v=function(e){var a=e.siteTitle;return e.footerLinks,i.a.createElement("footer",{className:"footer"},i.a.createElement(c.a,null,i.a.createElement(o.a,null,i.a.createElement(m.a,{xs:3,className:"text-muted"},a," ",(new Date).getFullYear()),i.a.createElement(m.a,{xs:9}))))};t(193),t(194);function y(e){var a=e.children,t=r.data.site.siteMetadata,n=t.title,l=t.contactEmail,s=t.footerLinks;return i.a.createElement("div",{className:"layout"},i.a.createElement(p,{siteTitle:n,contactEmail:l}),i.a.createElement(b,null,a),i.a.createElement(v,{siteTitle:n,footerLinks:s}))}y.propTypes={children:s.a.node.isRequired};a.a=y},197:function(e,a,t){"use strict";t(15);var r=function(){};e.exports=r},207:function(e,a,t){e.exports=t.p+"static/revenue-9c22cee7f78e3280c6663b6c2cf73eec.svg"},208:function(e,a,t){e.exports=t.p+"static/newsletter-9da7d8d82d43014a24cb4d36f33d02e1.svg"},209:function(e,a,t){"use strict";t(15),a.__esModule=!0,a.default=function(e){return e.replace(r,function(e,a){return a.toUpperCase()})};var r=/-(.)/g;e.exports=a.default}}]);
//# sourceMappingURL=component---src-pages-index-js-ef69f66c3070ed5e64c0.js.map