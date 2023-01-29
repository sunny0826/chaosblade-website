"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[5977],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38317:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var r=n(87462),a=(n(67294),n(3905));const i={id:"blade create script delay"},l="Simulating the delay of script function execution",o={unversionedId:"experiment-types/host/blade create script delay",id:"version-1.7.1/experiment-types/host/blade create script delay",title:"Simulating the delay of script function execution",description:"Introduction",source:"@site/versioned_docs/version-1.7.1/experiment-types/host/blade_create_script_delay.md",sourceDirName:"experiment-types/host",slug:"/experiment-types/host/blade create script delay",permalink:"/en/docs/experiment-types/host/blade create script delay",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.1/experiment-types/host/blade_create_script_delay.md",tags:[],version:"1.7.1",frontMatter:{id:"blade create script delay"},sidebar:"docs",previous:{title:"\u6a21\u62df\u6682\u505c\u8fdb\u7a0b\u5b9e\u9a8c",permalink:"/en/docs/experiment-types/host/blade create process stop"},next:{title:"Simulating the exit of script function execution",permalink:"/en/docs/experiment-types/host/blade create script exit"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"CLI Command",id:"cli-command",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Case",id:"case",level:2},{value:"Principle",id:"principle",level:2},{value:"Q&amp;A",id:"qa",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"simulating-the-delay-of-script-function-execution"},"Simulating the delay of script function execution"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"An experiment that simulates the delay of script function execution will be performed after specifying the script and its function."),(0,a.kt)("h2",{id:"cli-command"},"CLI Command"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"blade create script delay -h"))),(0,a.kt)("h2",{id:"parameter"},"Parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Introduction"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Example Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"time")),(0,a.kt)("td",{parentName:"tr",align:null},"Time of delay(ms)"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Y")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"10000"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"file")),(0,a.kt)("td",{parentName:"tr",align:null},"Path to the script"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Y")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"test.sh"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"function-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Function name in the script"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Y")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"start0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"timeout")),(0,a.kt)("td",{parentName:"tr",align:null},"Running time(s)"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"N")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"30"))))),(0,a.kt)("h2",{id:"case"},"Case"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'# blade create script delay --time 10000 --file test.sh --function-name start0\n{"code":200,"success":true,"result":"b6a0f477b7fb1f4c"}\n\n# The sleep command will be added to the script:\nstart0() {\n    sleep 10.000000\n    ...\n}\n')),(0,a.kt)("h2",{id:"principle"},"Principle"),(0,a.kt)("p",null,"After backing up the original script, the ",(0,a.kt)("inlineCode",{parentName:"p"},"sleep")," command will be added to the function by the function name. Finally, the original script will be restored after the experiment is destroyed."),(0,a.kt)("h2",{id:"qa"},"Q&A"),(0,a.kt)("p",null,'Q: {"code":602,"success":false,"error":"get too many lines by the install function name"}'),(0,a.kt)("p",null,"A\uff1aExecution failed because multiple functions were found."))}u.isMDXComponent=!0}}]);