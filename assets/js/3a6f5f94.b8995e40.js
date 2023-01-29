"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[9026],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=(n(67294),n(3905));const o={title:"Environment Prepare"},i=void 0,l={unversionedId:"getting-started/installation-and-deployment/environment-prepare",id:"version-1.7.1/getting-started/installation-and-deployment/environment-prepare",title:"Environment Prepare",description:"Installation in Kubernetes Environment",source:"@site/versioned_docs/version-1.7.1/getting-started/installation-and-deployment/environment-prepare.md",sourceDirName:"getting-started/installation-and-deployment",slug:"/getting-started/installation-and-deployment/environment-prepare",permalink:"/docs/getting-started/installation-and-deployment/environment-prepare",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.1/getting-started/installation-and-deployment/environment-prepare.md",tags:[],version:"1.7.1",frontMatter:{title:"Environment Prepare"},sidebar:"docs",previous:{title:"Agent Install",permalink:"/docs/getting-started/installation-and-deployment/agent-install"},next:{title:"Contribute documents",permalink:"/docs/community/docs"}},s={},p=[{value:"Installation in Kubernetes Environment",id:"installation-in-kubernetes-environment",level:2},{value:"First\uff0c Kubernetes cluster prepared",id:"first-kubernetes-cluster-prepared",level:3},{value:"Second\uff0cHelm prepared",id:"secondhelm-prepared",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation-in-kubernetes-environment"},"Installation in Kubernetes Environment"),(0,a.kt)("h3",{id:"first-kubernetes-cluster-prepared"},"First\uff0c Kubernetes cluster prepared"),(0,a.kt)("p",null,"Before using it, ensure that the ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes cluster")," is deployed in the environment. If the Kubernetes cluster has not been deployed, you can follow the following links to complete the deployment:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/"},"Kubernetes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"kind")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/quick-start/"},"K3s")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microk8s.io/"},"Microk8s"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0fAttention\uff1a\nYour Kubernetes server version must be no less than version v1.16. Get version information\uff0cplease enter ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl version"))))),(0,a.kt)("h3",{id:"secondhelm-prepared"},"Second\uff0cHelm prepared"),(0,a.kt)("p",null,"Ensure that it is installed in the environment ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm"),"\u3002\nTo see if Helm is installed, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm version\n")),(0,a.kt)("p",null,"Here is the expected output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'version.BuildInfo{Version:"v3.4.2", GitCommit:"23dd3af5e19a02d4f4baa5b2f242645a1a3af629", GitTreeState:"dirty", GoVersion:"go1.15.5"}\n')),(0,a.kt)("p",null,"If your actual output is roughly the same as you expected, the Helm has been installed successfully."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ufe0fAttention\uff1a\nThe commands in this article will use Helm v3 to manipulate the Chaos Mesh. If the version of Helm in your environment is v2, please refer to",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/v2_v3_migration/"},"\u5c06 Helm v2  migrate to v3"),"Or change  values in the format of v2.")))}c.isMDXComponent=!0}}]);