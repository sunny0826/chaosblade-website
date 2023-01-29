"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[2581],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,b=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(b,l(l({ref:t},c),{},{components:r})):a.createElement(b,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},70068:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var a=r(87462),n=(r(67294),r(3905));const o={title:"blade\u57fa\u7840\u547d\u4ee4"},l=void 0,i={unversionedId:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade",id:"version-1.7.0/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade",title:"blade\u57fa\u7840\u547d\u4ee4",description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecdblade\u652f\u6301\u7684\u57fa\u7840\u547d\u4ee4",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.0/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade.md",sourceDirName:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid",slug:"/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade",permalink:"/docs/1.7.0/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.0/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade.md",tags:[],version:"1.7.0",frontMatter:{title:"blade\u57fa\u7840\u547d\u4ee4"},sidebar:"version-1.7.0/docs",previous:{title:"Yaml\u6a21\u5f0f\u4f7f\u7528\u7b80\u4ecb",permalink:"/docs/1.7.0/getting-started/chaosblade-tool-quick-start/yaml-mode-user-guaid"},next:{title:"blade check",permalink:"/docs/1.7.0/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-check"}},d={},s=[{value:"\u652f\u6301\u547d\u4ee4",id:"\u652f\u6301\u547d\u4ee4",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecdblade\u652f\u6301\u7684\u57fa\u7840\u547d\u4ee4"),(0,n.kt)("h2",{id:"\u652f\u6301\u547d\u4ee4"},"\u652f\u6301\u547d\u4ee4"),(0,n.kt)("p",null,"\u8fdb\u5165chaosblade\u6587\u4ef6\u5939\u5185\uff0c\u6267\u884c",(0,n.kt)("inlineCode",{parentName:"p"},"blade -h"),"\u6216 ",(0,n.kt)("inlineCode",{parentName:"p"},"blade --help"),"\u53ef\u4f8b\u4e3e\u51fa\u6240\u6709\u53ef\u6267\u884c\u547d\u4ee4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'PS /opt/chaosblade> ./blade -h\nAn easy to use and powerful chaos engineering experiment toolkit\n\nUsage:\n  blade [command]\n\nAvailable Commands:\n  check       Check the environment for chaosblade\n  create      Create a chaos engineering experiment\n  destroy     Destroy a chaos experiment\n  help        Help about any command\n  prepare     Prepare to experiment\n  query       Query the parameter values required for chaos experiments\n  revoke      Undo chaos engineering experiment preparation\n  server      Server mode starts, exposes web services\n  status      Query preparation stage or experiment status\n  version     Print version info\n\nFlags:\n  -d, --debug   Set client to DEBUG mode\n  -h, --help    help for blade\n\nUse "blade [command] --help" for more information about a command.\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Command")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade server"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5c06chaosblade\u4f5c\u4e3a",(0,n.kt)("a",{parentName:"td",href:"https://chaosblade.io/docs/getting-started/chaosblade-tool-quick-start/server-mode-use-guaid"},"server\u542f\u52a8"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade check"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6821\u9a8c\u8be5\u673a\u5668\u662f\u5426\u6ee1\u8db3chaosblade\u5de5\u5177\u8fd0\u884c\u73af\u5883")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade prepare"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6302\u8f7djvm\u63a2\u9488\u81f3\u76ee\u6807Java\u8fdb\u7a0b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade revoke"),(0,n.kt)("td",{parentName:"tr",align:null},"\u64a4\u56dejvm\u63a2\u9488\u6302\u8f7d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade create"),(0,n.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade destroy"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6062\u590d\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade query"),(0,n.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u548c\u5b9e\u9a8c\u76f8\u5173\u6307\u6807\u5982\u78c1\u76d8\u5360\u7528\u3001java\u8fdb\u7a0b\u6545\u969c\u547d\u4e2d\u6b21\u6570\u7b49")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade status"),(0,n.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u5b9e\u9a8c\u6267\u884c\u7ed3\u679c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade version"),(0,n.kt)("td",{parentName:"tr",align:null},"chaosblade\u5de5\u5177\u7248\u672c")))))}u.isMDXComponent=!0}}]);