"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[122],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),k=a,m=p["".concat(i,".").concat(k)]||p[k]||u[k]||o;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6498:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var r=t(87462),a=(t(67294),t(3905));const o={id:"blade create k8s container-network"},s="\u6a21\u62df\u5bb9\u5668\u5185\u7f51\u7edc\u5b9e\u9a8c\u573a\u666f",c={unversionedId:"experiment-types/k8s/blade create k8s container-network",id:"experiment-types/k8s/blade create k8s container-network",title:"\u6a21\u62df\u5bb9\u5668\u5185\u7f51\u7edc\u5b9e\u9a8c\u573a\u666f",description:"\u4ecb\u7ecd",source:"@site/docs/experiment-types/k8s/blade_create_k8s_container-network.md",sourceDirName:"experiment-types/k8s",slug:"/experiment-types/k8s/blade create k8s container-network",permalink:"/en/docs/next/experiment-types/k8s/blade create k8s container-network",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/experiment-types/k8s/blade_create_k8s_container-network.md",tags:[],version:"current",frontMatter:{id:"blade create k8s container-network"},sidebar:"docs",previous:{title:"\u6a21\u62df\u8282\u70b9\u78c1\u76d8\u573a\u666f",permalink:"/en/docs/next/experiment-types/k8s/blade create k8s node-disk"},next:{title:"\u6a21\u62df\u5bb9\u5668\u5185CPU\u8d1f\u8f7d\u5b9e\u9a8c\u573a\u666f",permalink:"/en/docs/next/experiment-types/k8s/blade create k8s container-cpu"}},i={},l=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],d={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6a21\u62df\u5bb9\u5668\u5185\u7f51\u7edc\u5b9e\u9a8c\u573a\u666f"},"\u6a21\u62df\u5bb9\u5668\u5185\u7f51\u7edc\u5b9e\u9a8c\u573a\u666f"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"kubernetes \u4e0b \u5bb9\u5668\u5185\u7f51\u7edc\u5b9e\u9a8c\u573a\u666f\uff0c\u540c\u57fa\u7840\u8d44\u6e90\u7f51\u7edc\u573a\u666f\uff0c\u7531\u4e8e\u540c\u4e00\u4e2a Pod \u5185\u7684\u5bb9\u5668\u5171\u4eab Pod \u7f51\u7edc\uff0c\u6240\u4ee5\u6548\u679c\u540c\u5bf9 Pod \u7f51\u7edc\u5b9e\u9a8c"),(0,a.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,a.kt)("p",null,"\u652f\u6301\u7684\u7f51\u7edc\u573a\u666f\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"blade create k8s container-network delay")," container \u7f51\u7edc\u5ef6\u8fdf\u573a\u666f\uff0c\u540c ","[blade create network delay]","(blade create network delay.md)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"blade create k8s container-network loss")," container \u7f51\u7edc\u4e22\u5305\u573a\u666f\uff0c\u540c ","[blade create network loss]","(blade create network loss.md)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"blade create k8s container-network dns")," container \u57df\u540d\u8bbf\u95ee\u5f02\u5e38\u573a\u666f\uff0c\u540c ","[blade create network dns]","(blade create network dns.md)")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u57fa\u7840\u573a\u666f\u5404\u81ea\u6240\u9700\u7684\u53c2\u6570\u5916\uff0c\u5728 kubernetes \u73af\u5883\u4e0b\uff0c\u8fd8\u652f\u6301\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--container-ids string     \u5bb9\u5668ID\uff0c\u652f\u6301\u914d\u7f6e\u591a\u4e2a\n--container-names string   \u5bb9\u5668\u540d\u79f0\uff0c\u652f\u6301\u914d\u7f6e\u591a\u4e2a\n--docker-endpoint string   Docker server \u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a\u672c\u5730\u7684 /var/run/docker.sock\n--namespace string       Pod \u6240\u5c5e\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u53ea\u80fd\u586b\u5199\u4e00\u4e2a\u503c\uff0c\u5fc5\u586b\u9879\n--evict-count string     \u9650\u5236\u5b9e\u9a8c\u751f\u6548\u7684\u6570\u91cf\n--evict-percent string   \u9650\u5236\u5b9e\u9a8c\u751f\u6548\u6570\u91cf\u7684\u767e\u5206\u6bd4\uff0c\u4e0d\u5305\u542b %\n--labels string          Pod \u8d44\u6e90\u6807\u7b7e\uff0c\u591a\u4e2a\u6807\u7b7e\u4e4b\u524d\u662f\u6216\u7684\u5173\u7cfb\n--names string           Pod \u8d44\u6e90\u540d\n--kubeconfig string      kubeconfig \u6587\u4ef6\u5168\u8def\u5f84\uff08\u4ec5\u9650\u4f7f\u7528 blade \u547d\u4ee4\u8c03\u7528\u65f6\u4f7f\u7528\uff09\n--waiting-time string    \u5b9e\u9a8c\u7ed3\u679c\u7b49\u5f85\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 20s\uff0c\u53c2\u6570\u503c\u8981\u5305\u542b\u5355\u4f4d\uff0c\u4f8b\u5982 10s\uff0c1m\n")),(0,a.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.kt)("p",null,"\u6307\u5b9a default \u547d\u540d\u7a7a\u95f4\u4e0b Pod \u540d\u4e3a frontend-d89756ff7-pbnnc\uff0c\u5bb9\u5668id\u4e3a 2ff814b246f86\uff0c\u505a\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"http://www.baidu.com"},"www.baidu.com")," \u57df\u540d\u5f02\u5e38\u5b9e\u9a8c\u4e3e\u4f8b\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"yaml \u914d\u7f6e\u65b9\u5f0f")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: tamper-container-dns-by-id\nspec:\n  experiments:\n  - scope: container\n    target: network\n    action: dns\n    desc: "tamper container dns by id"\n    matchers:\n    - name: container-ids\n      value:\n      - "4b25f66580c4"\n    - name: domain\n      value: ["www.baidu.com"]\n    - name: ip\n      value: ["10.0.0.1"]\n      # pod names\n    - name: names\n      value: ["frontend-d89756ff7-trsxf"]\n      # or use pod labels\n')),(0,a.kt)("p",null,"\u4f8b\u5982\u914d\u7f6e\u597d\u6587\u4ef6\u540e\uff0c\u4fdd\u5b58\u4e3a tamper_container_dns_by_id.yaml\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6267\u884c\u5b9e\u9a8c\u573a\u666f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f tamper_container_dns_by_id.yaml\n")),(0,a.kt)("p",null," \u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u6bcf\u4e2a\u5b9e\u9a8c\u7684\u6267\u884c\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get blade tamper_container_dns_by_id.yaml -o json\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "apiVersion": "chaosblade.io/v1alpha1",\n   "kind": "ChaosBlade",\n   "metadata": {\n       "finalizers": [\n           "finalizer.chaosblade.io"\n       ],\n       "generation": 1,\n       "name": "tamper-container-dns-by-id",\n       "resourceVersion": "9435600",\n       "selfLink": "/apis/chaosblade.io/v1alpha1/chaosblades/tamper-container-dns-by-id",\n       "uid": "137372c2-ff7c-11e9-8883-00163e0ad0b3"\n   },\n       "status": {\n       "expStatuses": [\n           {\n               "action": "dns",\n               "resStatuses": [\n                   {\n                       "id": "1141530f66869a82",\n                       "kind": "container",\n                       "name": "php-redis",\n                       "nodeName": "cn-hangzhou.192.168.0.203",\n                       "state": "Success",\n                       "success": true,\n                       "uid": "4b25f66580c4dbf465a1b167c4c6967e987773442e5d47f0bee5db0a5e27a12d"\n                   }\n               ],\n               "scope": "container",\n               "state": "Success",\n               "success": true,\n               "target": "network"\n           }\n       ],\n       "phase": "Running"\n   }\n}\n')),(0,a.kt)("p",null," \u53ef\u4ee5\u767b\u5f55\u5bb9\u5668\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"http://www.baidu.com"},"www.baidu.com")," \u57df\u540d\u8fdb\u884c\u9a8c\u8bc1"),(0,a.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\u5b9e\u9a8c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl delete -f tamper_container_dns_by_id.yaml \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"blade \u547d\u4ee4\u6267\u884c\u65b9\u5f0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"blade create k8s container-network dns --domain www.baidu.com --ip 10.0.0.1 --names frontend-d89756ff7-trsxf --namespace default --container-ids 4b25f66580c4 --kubeconfig config \n")),(0,a.kt)("p",null,"\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u4f1a\u8fd4\u56de\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\uff1b\u5982\u679c\u6267\u884c\u6210\u529f\uff0c\u4f1a\u8fd4\u56de\u5b9e\u9a8c\u7684 UID\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{"code":200,"success":true,"result":"6e46a5df94e0b065"}\n')),(0,a.kt)("p",null,"\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2\u5b9e\u9a8c\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'blade query k8s create 6e46a5df94e0b065 --kubeconfig config\n\n{"code":200,"success":true,"result":{"uid":"6e46a5df94e0b065","success":true,"error":"","statuses":[{"id":"90304950e52d679e","uid":"4b25f66580c4dbf465a1b167c4c6967e987773442e5d47f0bee5db0a5e27a12d","name":"php-redis","state":"Success","kind":"container","success":true,"nodeName":"cn-hangzhou.192.168.0.203"}]}}\n')),(0,a.kt)("p",null,"\u9500\u6bc1\u5b9e\u9a8c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"blade destroy 6e46a5df94e0b065\n")),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("p",null,'Q: {"code":504,"success":false,"error":"unexpected status, the real value is Error","result":{"uid":"623841684347c05f","success":false,"error":"unexpected status, the real value is Error","statuses":','[{"uid":"4b25f66580c4dbf465a1b167c4c6967e987773442e5d47f0bee5db0a5e27a12d","name":"php-redis","state":"Error","kind":"container","error":"10.0.0.1 www.baidu.com #chaosblade has been exist exit status 1","success":false,"nodeName":"cn-hangzhou.192.168.0.203"}]',"}}\nA: \u6240\u4ee5\u5b9e\u9a8c\u5df2\u7ecf\u5b58\u5728"),(0,a.kt)("p",null,"\u5176\u4ed6\u95ee\u9898\u53c2\u8003 ","[blade create k8s]","(blade create k8s.md) \u5e38\u89c1\u95ee\u9898"))}u.isMDXComponent=!0}}]);