"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[5847],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),i=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(a),m=r,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2024:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return i}});var n=a(7462),r=(a(7294),a(3905));const l={title:"blade prepare"},o=void 0,p={unversionedId:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-prepare",id:"version-1.7.0/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-prepare",title:"blade prepare",description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecdblade prepare\u547d\u4ee4\u4f7f\u7528",source:"@site/versioned_docs/version-1.7.0/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-prepare.md",sourceDirName:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid",slug:"/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-prepare",permalink:"/en/docs/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-prepare",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.0/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-prepare.md",tags:[],version:"1.7.0",frontMatter:{title:"blade prepare"},sidebar:"version-1.7.0/docs",previous:{title:"blade check",permalink:"/en/docs/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-check"},next:{title:"blade revoke",permalink:"/en/docs/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-revoke"}},d={},i=[{value:"Usage",id:"usage",level:2},{value:"Exec",id:"exec",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"\u6307\u5b9a pid \u6267\u884c java agent \u6302\u8f7d",id:"\u6307\u5b9a-pid-\u6267\u884c-java-agent-\u6302\u8f7d",level:3},{value:"\u6307\u5b9a process \u6267\u884c java agent \u6302\u8f7d",id:"\u6307\u5b9a-process-\u6267\u884c-java-agent-\u6302\u8f7d",level:3},{value:"\u5378\u8f7d java agent",id:"\u5378\u8f7d-java-agent",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],s={toc:i};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd",(0,r.kt)("inlineCode",{parentName:"p"},"blade prepare"),"\u547d\u4ee4\u4f7f\u7528"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"\u5e94\u7528\u5c42\u573a\u666f\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"create"),"\u6ce8\u5165\u4e4b\u524d\uff0c\u5c06\u5e94\u7528\u5c42agent\u6302\u8f7d\u5230\u76ee\u6807\u8fdb\u7a0b\u4e2d\uff0c\u76ee\u524d\u53ea\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"Java"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"C++"),"\u5e94\u7528\u5c42\u573a\u666f\u9700\u8981\u3002\n\u8be5\u547d\u4ee4\u53ea\u6709\u5728",(0,r.kt)("strong",{parentName:"p"},"\u4e3b\u673a"),"\u4e0a\u8fdb\u884c",(0,r.kt)("strong",{parentName:"p"},"\u5e94\u7528\u5c42\u6545\u969c"),"\uff08\u8fd9\u91cc\u53ea\u652f\u6301jvm\\cpluse\uff09\u6ce8\u5165\uff08create\uff09\u4e4b\u524d\u662f\u9700\u8981\u4f7f\u7528\uff08k8s\u5bb9\u5668\u73af\u5883\u4f1a\u81ea\u52a8\u8fdb\u884cagent\u6302\u8f7d\uff0c\u4e0d\u9700\u8981\u624b\u52a8\u6267\u884c\uff09\uff0c\u5176\u76f8\u5bf9\u5e94\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"./blade create jvm **"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"./blade create cpluse *"),"\u76f8\u5173\u6267\u884c\u6f14\u7ec3\u5b9e\u9a8c\u573a\u666f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Usage:\n  blade prepare\n  blade prepare [command]\n\nAliases:\n  prepare, p\n  \nblade check [target] [flags]\n")),(0,r.kt)("h2",{id:"exec"},"Exec"),(0,r.kt)("p",null,"\u8fdb\u5165\u89e3\u538b\u5305\u672c\u5730\u6240\u653e\u7f6e\u7684\u8def\u5f84\uff0c\u53ef\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"./blade prepare -h"),"\u67e5\u770b\u6240\u6709\u652f\u6301\u7684target\uff0c\u76ee\u524d\u652f\u6301\u4e24\u79cd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java\uff1a\u6302\u8f7d\u76f8\u5e94\u7684Java Agent\u5230\u76ee\u6807Java\u8fdb\u7a0b\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"Cplus\uff1a\u6302\u8f7d\u76f8\u5e94\u7684C++ Agent\u5230\u76ee\u6807C++\u8fdb\u7a0b\u4e2d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[root@test chaosblade]# ./blade prepare -h\nPrepare to experiment, for example, attach agent to java process or deploy agent to kubernetes cluster.\n\nUsage:\n  blade prepare\n  blade prepare [command]\n\nAliases:\n  prepare, p\n\nExamples:\nprepare jvm --process tomcat\n\nAvailable Commands:\n  cplus       Active cplus agent.\n  jvm         Attach a type agent to the jvm process\n\nFlags:\n  -h, --help   help for prepare\n\nGlobal Flags:\n  -d, --debug   Set client to DEBUG mode\n\nUse "blade prepare [command] --help" for more information about a command.\n')),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,"\u53ef\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"./blade prepare jvm -h"),"\u67e5\u770b\u5177\u4f53Jvm prepare\u65f6\u652f\u6301\u53c2\u6570\u3002\u4ee5\u4e0b\u4ee5Java\u4e3a\u4f8b\uff0ccplus\u7c7b\u4f3c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@test chaosblade]# ./blade prepare jvm -h\nAttach a type agent to the jvm process for java framework experiment.\n\nUsage:\n  blade prepare jvm\n\nExamples:\nprepare jvm --process tomcat\n\nFlags:\n  -a, --async             whether to attach asynchronously, default is false\n  -e, --endpoint string   the attach result reporting address. It takes effect only when the async value is true and the value is not empty\n  -h, --help              help for jvm\n  -j, --javaHome string   the java jdk home path\n  -n, --nohup             used to internal async attach, no need to config\n      --pid string        the target java process id\n  -P, --port int          the port used for agent server\n  -p, --process string    the java application process name (required)\n  -u, --uid string        used to internal async attach, no need to config\n\nGlobal Flags:\n  -d, --debug   Set client to DEBUG mode\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Name, shorthand")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Dencryption")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-a, --async"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"whether to attach asynchronously")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-e, --endpoint string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"the attach result reporting address. It takes effect only when the async value is true and the value is not empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-j, --javaHome"),(0,r.kt)("td",{parentName:"tr",align:null},"$JAVA_HOME"),(0,r.kt)("td",{parentName:"tr",align:null},"the java jdk home path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-P, --port"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"the port used for agent server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--pid"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"the target java process id\uff08Choose one of pid and process\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-p, --process"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"the java application process name\uff08Choose one of pid and process\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-u, --uid"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"used to internal async attach, no need to config")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-d, --debug"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Set client to DEBUG mode for log")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"\u6307\u5b9a-pid-\u6267\u884c-java-agent-\u6302\u8f7d"},"\u6307\u5b9a pid \u6267\u884c java agent \u6302\u8f7d"),(0,r.kt)("p",null,"\u5bf9 pid \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"26652")," \u7684 Java \u8fdb\u7a0b\u8fdb\u884c\u63a2\u9488\u6302\u8f7d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blade prepare jvm --pid 26652\n# \u547d\u4ee4\u4e5f\u53ef\u7b80\u5199\u4e3a\nblade p jvm --pid 26652\n")),(0,r.kt)("h3",{id:"\u6307\u5b9a-process-\u6267\u884c-java-agent-\u6302\u8f7d"},"\u6307\u5b9a process \u6267\u884c java agent \u6302\u8f7d"),(0,r.kt)("p",null,"\u5bf9\u8fdb\u7a0b\u4e2d\u542b\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"tomcat"),"\u5173\u952e\u8bcd\u7684 Java \u8fdb\u7a0b\u8fdb\u884c\u63a2\u9488\u6302\u8f7d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@test chaosblade]# ./blade prepare jvm --process tomcat\n")),(0,r.kt)("h3",{id:"\u5378\u8f7d-java-agent"},"\u5378\u8f7d java agent"),(0,r.kt)("p",null,"\u6267\u884c\u6210\u529f\uff0c\u4f1a\u8fd4\u56de\u5b9e\u9a8c\u51c6\u5907\u7684 UID\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"code":200,"success":true,"result":"2552c05c6066dde5"}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"2552c05c6066dde5")," \u5c31\u662f\u5b9e\u9a8c\u51c6\u5907\u5bf9\u8c61\u7684 UID\uff0c\u6267\u884c\u5378\u8f7d\u64cd\u4f5c\u9700\u8981\u7528\u5230\u6b64 UID\uff0c\u4f8b\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blade revoke 2552c05c6066dde5\n# \u547d\u4ee4\u4e5f\u53ef\u7b80\u5199\u4e3a\nblade r 2552c05c6066dde5\n")),(0,r.kt)("p",null,"\u5982\u679c UID \u5fd8\u8bb0\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blade status --type prepare --target jvm\n# \u547d\u4ee4\u4e5f\u53ef\u7b80\u5199\u4e3a\uff1a\nblade s --type p --target jvm\n")),(0,r.kt)("p",null,"\u6302\u8f7d java agent \u64cd\u4f5c\u662f\u4e2a\u6bd4\u8f83\u8017\u65f6\u7684\u8fc7\u7a0b\uff0c\u5728\u672a\u8fd4\u56de\u7ed3\u679c\u524d\u8bf7\u8010\u5fc3\u7b49\u5f85"),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("p",null,'Q: {"code":500,"success":false,"error":"cannot get port from local, please execute prepare command first"}\nA: \u6ca1\u6709\u6302\u8f7d\u6240\u9700\u7684 java agent\uff0c\u6267\u884c prepare jvm \u547d\u4ee4\u6302\u8f7d'),(0,r.kt)("p",null,'Q: {"code":602,"success":false,"error":"less --process or --pid flags"}\nA: \u7f3a\u5c11\u5fc5\u8981\u53c2\u6570\u7528\u4e8e\u6307\u5b9a java \u5e94\u7528\u8fdb\u7a0b'))}c.isMDXComponent=!0}}]);