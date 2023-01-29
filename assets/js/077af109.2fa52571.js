"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[2488],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),c=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,b=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return a?r.createElement(b,o(o({ref:t},s),{},{components:a})):r.createElement(b,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},20911:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});var r=a(87462),n=(a(67294),a(3905));const l={title:"blade\u57fa\u7840\u547d\u4ee4"},o=void 0,i={unversionedId:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade",id:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade",title:"blade\u57fa\u7840\u547d\u4ee4",description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecdblade\u652f\u6301\u7684\u57fa\u7840\u547d\u4ee4",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade.md",sourceDirName:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid",slug:"/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade",permalink:"/docs/next/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade.md",tags:[],version:"current",frontMatter:{title:"blade\u57fa\u7840\u547d\u4ee4"},sidebar:"docs",previous:{title:"Yaml\u6a21\u5f0f\u4f7f\u7528\u7b80\u4ecb",permalink:"/docs/next/getting-started/chaosblade-tool-quick-start/yaml-mode-user-guaid"},next:{title:"blade check",permalink:"/docs/next/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-check"}},d={},c=[{value:"\u652f\u6301\u547d\u4ee4",id:"\u652f\u6301\u547d\u4ee4",level:2}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecdblade\u652f\u6301\u7684\u57fa\u7840\u547d\u4ee4"),(0,n.kt)("h2",{id:"\u652f\u6301\u547d\u4ee4"},"\u652f\u6301\u547d\u4ee4"),(0,n.kt)("p",null,"\u8fdb\u5165chaosblade\u6587\u4ef6\u5939\u5185\uff0c\u6267\u884c",(0,n.kt)("inlineCode",{parentName:"p"},"blade -h"),"\u6216 ",(0,n.kt)("inlineCode",{parentName:"p"},"blade --help"),"\u53ef\u4f8b\u4e3e\u51fa\u6240\u6709\u53ef\u6267\u884c\u547d\u4ee4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'PS /opt/chaosblade> ./blade -h\nAn easy to use and powerful chaos engineering experiment toolkit\n\nUsage:\n  blade [command]\n\nAvailable Commands:\n  check       Check the environment for chaosblade\n  create      Create a chaos engineering experiment\n  destroy     Destroy a chaos experiment\n  help        Help about any command\n  prepare     Prepare to experiment\n  query       Query the parameter values required for chaos experiments\n  revoke      Undo chaos engineering experiment preparation\n  server      Server mode starts, exposes web services\n  status      Query preparation stage or experiment status\n  version     Print version info\n\nFlags:\n  -d, --debug   Set client to DEBUG mode\n  -h, --help    help for blade\n\nUse "blade [command] --help" for more information about a command.\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Command")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade server"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5c06chaosblade\u4f5c\u4e3a",(0,n.kt)("a",{parentName:"td",href:"https://chaosblade.io/docs/getting-started/chaosblade-tool-quick-start/server-mode-use-guaid"},"server\u542f\u52a8"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade check"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6821\u9a8c\u8be5\u673a\u5668\u662f\u5426\u6ee1\u8db3chaosblade\u5de5\u5177\u8fd0\u884c\u73af\u5883")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade prepare"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6302\u8f7djvm\u63a2\u9488\u81f3\u76ee\u6807Java\u8fdb\u7a0b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade revoke"),(0,n.kt)("td",{parentName:"tr",align:null},"\u64a4\u56dejvm\u63a2\u9488\u6302\u8f7d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade create"),(0,n.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade destroy"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6062\u590d\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade query"),(0,n.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u548c\u5b9e\u9a8c\u76f8\u5173\u6307\u6807\u5982\u78c1\u76d8\u5360\u7528\u3001java\u8fdb\u7a0b\u6545\u969c\u547d\u4e2d\u6b21\u6570\u7b49")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade status"),(0,n.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u5b9e\u9a8c\u6267\u884c\u7ed3\u679c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blade version"),(0,n.kt)("td",{parentName:"tr",align:null},"chaosblade\u5de5\u5177\u7248\u672c")))))}u.isMDXComponent=!0}}]);