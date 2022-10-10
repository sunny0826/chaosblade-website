"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[6463],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,v=d["".concat(c,".").concat(m)]||d[m]||s[m]||p;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<p;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1688:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return i}});var n=r(7462),a=(r(7294),r(3905));const p={id:"blade prepare jvm"},o="\u6302\u8f7dJava Agent",l={unversionedId:"experiment-types/jvm/blade prepare jvm",id:"experiment-types/jvm/blade prepare jvm",title:"\u6302\u8f7dJava Agent",description:"\u4ecb\u7ecd",source:"@site/docs/experiment-types/jvm/blade_prepare_jvm.md",sourceDirName:"experiment-types/jvm",slug:"/experiment-types/jvm/blade prepare jvm",permalink:"/en/docs/next/experiment-types/jvm/blade prepare jvm",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/docs/experiment-types/jvm/blade_prepare_jvm.md",tags:[],version:"current",frontMatter:{id:"blade prepare jvm"},sidebar:"docs",previous:{title:"Jvm\u76f8\u5173\u573a\u666f",permalink:"/en/docs/next/experiment-types/jvm/blade create jvm"},next:{title:"\u6a21\u62df\u7c7b\u65b9\u6cd5\u8c03\u7528\u5ef6\u8fdf",permalink:"/en/docs/next/experiment-types/jvm/blade create jvm delay"}},c={},i=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],u={toc:i};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6302\u8f7djava-agent"},"\u6302\u8f7dJava Agent"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u6302\u8f7d java agent\uff0c\u6267\u884c java \u5b9e\u9a8c\u573a\u666f\u5fc5\u8981\u6b65\u9aa4"),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-j, --javaHome string   \u6307\u5b9a JAVA_HOME \u8def\u5f84\uff0c\u7528\u4e8e\u6307\u5b9a java bin \u548c tools.jar\uff0c\u5982\u679c\u4e0d\u6dfb\u52a0\u6b64\u53c2\u6570\uff0c\u9ed8\u8ba4\u4f1a\u4f18\u5148\u83b7\u53d6 JAVA_HOME \u73af\u5883\u53d8\u91cf\uff0c\u5982\u679c\u83b7\u53d6\u5931\u8d25\uff0c\u4f1a\u89e3\u6790\u6307\u5b9a\u8fdb\u7a0b\u53c2\u6570\u83b7\u53d6 JAVA_HOME\uff0c\u83b7\u53d6\u5931\u8d25\uff0c\u4f1a\u4f7f\u7528 chaosblade \u81ea\u5e26\u7684 tools.jar\n--pid string        java \u8fdb\u7a0bID\n-P, --port int          java agent \u66b4\u9732\u670d\u52a1\u7684\u672c\u5730\u7aef\u53e3\uff0c\u7528\u4e8e\u4e0b\u53d1\u5b9e\u9a8c\u547d\u4ee4\n-p, --process string    java \u8fdb\u7a0b\u5173\u952e\u8bcd\uff0c\u7528\u4e8e\u5b9a\u4f4d java \u8fdb\u7a0b\n-d, --debug   \u5f00\u542f debug \u6a21\u5f0f\n")),(0,a.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.kt)("p",null,"\u6307\u5b9a pid \u6267\u884c java agent \u6302\u8f7d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"blade prepare jvm --pid 26652\n# \u547d\u4ee4\u4e5f\u53ef\u7b80\u5199\u4e3a\nblade p jvm --pid 26652\n")),(0,a.kt)("p",null,"\u6267\u884c\u6210\u529f\uff0c\u4f1a\u8fd4\u56de\u5b9e\u9a8c\u51c6\u5907\u7684 UID\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{"code":200,"success":true,"result":"2552c05c6066dde5"}\n')),(0,a.kt)("p",null,"2552c05c6066dde5 \u5c31\u662f\u5b9e\u9a8c\u51c6\u5907\u5bf9\u8c61\u7684 UID\uff0c\u6267\u884c\u5378\u8f7d\u64cd\u4f5c\u9700\u8981\u7528\u5230\u6b64 UID\uff0c\u4f8b\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"blade revoke 2552c05c6066dde5\n# \u547d\u4ee4\u4e5f\u53ef\u7b80\u5199\u4e3a\nblade r 2552c05c6066dde5\n")),(0,a.kt)("p",null,"\u5982\u679c UID \u5fd8\u8bb0\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"blade status --type prepare --target jvm\n# \u547d\u4ee4\u4e5f\u53ef\u7b80\u5199\u4e3a\uff1a\nblade s --type p --target jvm\n")),(0,a.kt)("p",null,"\u6302\u8f7d java agent \u64cd\u4f5c\u662f\u4e2a\u6bd4\u8f83\u8017\u65f6\u7684\u8fc7\u7a0b\uff0c\u5728\u672a\u8fd4\u56de\u7ed3\u679c\u524d\u8bf7\u8010\u5fc3\u7b49\u5f85"),(0,a.kt)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("p",null,'Q: {"code":500,"success":false,"error":"cannot get port from local, please execute prepare command first"}',(0,a.kt)("br",{parentName:"p"}),"\n","A: \u6ca1\u6709\u6302\u8f7d\u6240\u9700\u7684 java agent\uff0c\u6267\u884c prepare jvm \u547d\u4ee4\u6302\u8f7d"),(0,a.kt)("p",null,'Q: {"code":602,"success":false,"error":"less --process or --pid flags"}',(0,a.kt)("br",{parentName:"p"}),"\n","A: \u7f3a\u5c11\u5fc5\u8981\u53c2\u6570\u7528\u4e8e\u6307\u5b9a java \u5e94\u7528\u8fdb\u7a0b"))}s.isMDXComponent=!0}}]);