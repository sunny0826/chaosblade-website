"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[8317],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,m=p["".concat(s,".").concat(g)]||p[g]||h[g]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7254:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var r=n(7462),o=(n(7294),n(3905));const a={title:"ChaosBlade, From the Chaos Engineering Experiment Tool to the Chaos Engineering Platform",authors:["xcaspar","sangjie"],tags:["chaosblade"],description:"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b\u5728\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684\u843d\u5730\u4e0e\u5b9e\u8df5",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/2022/03/03/ChaosBlade-From-the-Chaos-Engineering-Experiment-Tool-to-the-Chaos-Engineering-Platform",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/blog/blog/2022-03-03-ChaosBlade-From-the-Chaos-Engineering-Experiment-Tool-to-the-Chaos-Engineering-Platform.md",source:"@site/blog/2022-03-03-ChaosBlade-From-the-Chaos-Engineering-Experiment-Tool-to-the-Chaos-Engineering-Platform.md",title:"ChaosBlade, From the Chaos Engineering Experiment Tool to the Chaos Engineering Platform",description:"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b\u5728\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684\u843d\u5730\u4e0e\u5b9e\u8df5",date:"2022-03-03T00:00:00.000Z",formattedDate:"2022\u5e743\u67083\u65e5",tags:[{label:"chaosblade",permalink:"/blog/tags/chaosblade"}],readingTime:14.23,hasTruncateMarker:!0,authors:[{name:"\u8096\u957f\u519b\uff08\u7a79\u8c37\uff0c@xcaspar\uff09",title:"Co-creator of ChaosBlade",url:"https://github.com/xcaspar",imageURL:"https://avatars.githubusercontent.com/u/3992234?s=64&v=4",key:"xcaspar"},{name:"Sang Jie",title:"Works in the R&D Center of Agricultural Bank of China and is engaged in big data R&D in financial-related systems.",key:"sangjie"}],frontMatter:{title:"ChaosBlade, From the Chaos Engineering Experiment Tool to the Chaos Engineering Platform",authors:["xcaspar","sangjie"],tags:["chaosblade"],description:"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b\u5728\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684\u843d\u5730\u4e0e\u5b9e\u8df5",hide_table_of_contents:!1},prevItem:{title:"\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0 ChaosBlade-Box \u65b0\u7248\u91cd\u78c5\u53d1\u5e03",permalink:"/blog/2022/06/24/ChaosBlade-Box-new-release"},nextItem:{title:"\u88ab\u4f60\u8d28\u7591\u4ef7\u503c\u7684\u6df7\u6c8c\u5de5\u7a0b\uff0c\u963f\u91cc\u5df4\u5df4\u5df2\u843d\u5730\u5b9e\u8df5\u4e869\u5e74",permalink:"/blog/2021/12/08/chaos-engineering-value"}},s={authorsImageUrls:[void 0,void 0]},c=[],u={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ChaosBlade is Alibaba's open-source chaos engineering project created in 2019. It has been added to CNCF Sandbox. At first, ChaosBlade was a multi-environment and multi-language chaos engineering experimental tool but developed into a multi-cluster, multi-environment, and multi-language chaos engineering platform called chaosblade-box. The platform supports experimental tool hosting and automatic tool deployment. The user's energy is focused on solving high-availability problems in the cloud-native process through chaos engineering and a unified user experiment interface. This article introduces ChaosBlade in detail from three stages, including the abstraction of the chaos experimental model, the open-source process of the chaos experimental tool, and the update of the chaos engineering platform."))}h.isMDXComponent=!0}}]);