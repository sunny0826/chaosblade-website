"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[9758],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(b,c(c({ref:n},p),{},{components:t})):r.createElement(b,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4803:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var r=t(7462),a=(t(7294),t(3905));const o={id:"blade create k8s container-container"},c="\u6a21\u62df\u5bb9\u5668\u8d44\u6e90\u81ea\u8eab\u573a\u666f",i={unversionedId:"experiment-types/k8s/blade create k8s container-container",id:"experiment-types/k8s/blade create k8s container-container",title:"\u6a21\u62df\u5bb9\u5668\u8d44\u6e90\u81ea\u8eab\u573a\u666f",description:"\u4ecb\u7ecd",source:"@site/docs/experiment-types/k8s/blade_create_k8s_container-container.md",sourceDirName:"experiment-types/k8s",slug:"/experiment-types/k8s/blade create k8s container-container",permalink:"/en/docs/next/experiment-types/k8s/blade create k8s container-container",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/experiment-types/k8s/blade_create_k8s_container-container.md",tags:[],version:"current",frontMatter:{id:"blade create k8s container-container"},sidebar:"docs",previous:{title:"\u6a21\u62df\u5bb9\u5668\u5185\u8fdb\u7a0b\u573a\u666f",permalink:"/en/docs/next/experiment-types/k8s/blade create k8s container-process"},next:{title:"Jvm\u76f8\u5173\u573a\u666f",permalink:"/en/docs/next/experiment-types/jvm/blade create jvm"}},l={},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6a21\u62df\u5bb9\u5668\u8d44\u6e90\u81ea\u8eab\u573a\u666f"},"\u6a21\u62df\u5bb9\u5668\u8d44\u6e90\u81ea\u8eab\u573a\u666f"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"Kubernetes \u4e0b container \u8d44\u6e90\u81ea\u8eab\u7684\u573a\u666f\uff0c\u6bd4\u5982\u5220\u5bb9\u5668\uff0c\u9700\u8981\u6ce8\u610f\uff0c\u6267\u884c\u5bb9\u5668\u573a\u666f\uff0c\u5fc5\u987b\u5148\u786e\u5b9a Pod\uff0c\u6240\u4ee5\u9700\u8981\u914d\u7f6e Pod \u76f8\u5173\u53c2\u6570"),(0,a.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,a.kt)("p",null,"\u652f\u6301\u573a\u666f\u547d\u4ee4\u5982\u4e0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"blade create k8s container-container remove")," \u5220\u9664\u5bb9\u5668 ")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--container-ids string     \u5bb9\u5668ID\uff0c\u652f\u6301\u914d\u7f6e\u591a\u4e2a\n--container-names string   \u5bb9\u5668\u540d\u79f0\uff0c\u652f\u6301\u914d\u7f6e\u591a\u4e2a\n--docker-endpoint string   Docker server \u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a\u672c\u5730\u7684 /var/run/docker.sock\n--namespace string       Pod \u6240\u5c5e\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u53ea\u80fd\u586b\u5199\u4e00\u4e2a\u503c\uff0c\u5fc5\u586b\u9879\n--evict-count string     \u9650\u5236\u5b9e\u9a8c\u751f\u6548\u7684\u6570\u91cf\n--evict-percent string   \u9650\u5236\u5b9e\u9a8c\u751f\u6548\u6570\u91cf\u7684\u767e\u5206\u6bd4\uff0c\u4e0d\u5305\u542b %\n--labels string          Pod \u8d44\u6e90\u6807\u7b7e\uff0c\u591a\u4e2a\u6807\u7b7e\u4e4b\u524d\u662f\u6216\u7684\u5173\u7cfb\n--names string           Pod \u8d44\u6e90\u540d\n--kubeconfig string      kubeconfig \u6587\u4ef6\u5168\u8def\u5f84\uff08\u4ec5\u9650\u4f7f\u7528 blade \u547d\u4ee4\u8c03\u7528\u65f6\u4f7f\u7528\uff09\n--waiting-time string    \u5b9e\u9a8c\u7ed3\u679c\u7b49\u5f85\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 20s\uff0c\u53c2\u6570\u503c\u8981\u5305\u542b\u5355\u4f4d\uff0c\u4f8b\u5982 10s\uff0c1m\n--force                    \u662f\u5426\u5f3a\u5236\u5220\u9664\n")),(0,a.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.kt)("p",null,"\u5220\u9664 default \u547d\u540d\u7a7a\u95f4\u4e0b\uff0cPod \u540d\u4e3a frontend-d89756ff7-szblb \u4e0b\u7684 container id \u662f 072aa6bbf2e2e2 \u7684\u5bb9\u5668"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"yaml \u914d\u7f6e\u65b9\u5f0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: remove-container-by-id\nspec:\n  experiments:\n  - scope: container\n    target: container\n    action: remove\n    desc: "remove container by id"\n    matchers:\n    - name: container-ids\n      value: ["072aa6bbf2e2e2"]\n      # pod name\n    - name: names\n      value: ["frontend-d89756ff7-szblb"]\n    - name: namespace\n      value: ["default"]\n')),(0,a.kt)("p",null,"\u4fdd\u5b58\u4e3a yaml \u6587\u4ef6\uff0c\u6bd4\u5982 remove_container_by_id.yaml\uff0c\u4f7f\u7528 kubectl \u547d\u4ee4\u6267\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f remove_container_by_id.yaml\n")),(0,a.kt)("p",null,"\u5b9e\u9a8c\u72b6\u6001\u67e5\u8be2\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get blade remove-container-by-id -o json\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b(\u7701\u7565\u4e86\u4e00\u90e8\u5206)\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "apiVersion": "v1",\n    "items": [\n        {\n            "apiVersion": "chaosblade.io/v1alpha1",\n            "kind": "ChaosBlade",\n            "metadata": {\n                "finalizers": [\n                    "finalizer.chaosblade.io"\n                ],\n                "generation": 1,\n                "name": "remove-container-by-id",\n                "resourceVersion": "9429224",\n                "selfLink": "/apis/chaosblade.io/v1alpha1/chaosblades/remove-container-by-id",\n                "uid": "bb1482ea-ff76-11e9-8883-00163e0ad0b3"\n            },\n            "status": {\n                "expStatuses": [\n                    {\n                        "action": "remove",\n                        "resStatuses": [\n                            {\n                                "id": "f5bfa325da504cac",\n                                "kind": "container",\n                                "name": "php-redis",\n                                "nodeName": "cn-hangzhou.192.168.0.205",\n                                "state": "Success",\n                                "success": true,\n                                "uid": "072aa6bbf2e2e286ec77b4b05440107b48aeebae6aea06e8e3a65b40e4f40326"\n                            }\n                        ],\n                        "scope": "container",\n                        "state": "Success",\n                        "success": true,\n                        "target": "container"\n                    }\n                ],\n                "phase": "Running"\n            }\n        }\n    ],\n}\n')),(0,a.kt)("p",null,"\u6267\u884c\u524d\u540e\uff0c\u53ef\u4ee5\u770b\u5230 Pod \u5185\u5bb9\u5668\u7684\u53d8\u5316:\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3992234/68177415-2ff80600-ffc3-11e9-8bd3-ea8d66bf935d.png",alt:"before"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3992234/68177442-4ef69800-ffc3-11e9-9f5a-910d477b131a.png",alt:"after"})),(0,a.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\u5b9e\u9a8c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl delete -f remove_container_by_id.yaml\n")),(0,a.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u5220\u9664 blade \u8d44\u6e90\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl delete blade remove-container-by-id\n")),(0,a.kt)("p",null,"\u5220\u9664\u5bb9\u5668\u540e\uff0c\u6267\u884c\u9500\u6bc1\u5b9e\u9a8c\u547d\u4ee4\u4e0d\u4f1a\u6062\u590d\u5bb9\u5668\uff0c\u9700\u8981\u9760\u5bb9\u5668\u81ea\u8eab\u7684\u7ba1\u7406\u62c9\u8d77\uff01"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"blade \u6267\u884c\u65b9\u5f0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"blade create k8s container-container remove --container-ids 060833967b0a37 --names frontend-d89756ff7-szblb --namespace default --kubeconfig config\n")),(0,a.kt)("p",null,"\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u4f1a\u8fd4\u56de\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\uff1b\u5982\u679c\u6267\u884c\u6210\u529f\uff0c\u4f1a\u8fd4\u56de\u5b9e\u9a8c\u7684 UID\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{"code":200,"success":true,"result":"17d7021c777b76e3"}\n')),(0,a.kt)("p",null,"\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2\u5b9e\u9a8c\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'blade query k8s create 17d7021c777b76e3 --kubeconfig config\n\n{"code":200,"success":true,"result":{"uid":"17d7021c777b76e3","success":true,"error":"","statuses":[{"id":"205515ad8fcc31da","uid":"060833967b0a3733d10f0e64d3639066b8b7fbcf371e0ace2401af150dbd9b12","name":"php-redis","state":"Success","kind":"container","success":true,"nodeName":"cn-hangzhou.192.168.0.205"}]}}\n')),(0,a.kt)("p",null,"\u9500\u6bc1\u5b9e\u9a8c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"blade destroy 17d7021c777b76e3\n")),(0,a.kt)("p",null,"\u5220\u9664\u5bb9\u5668\u540e\uff0c\u6267\u884c\u9500\u6bc1\u5b9e\u9a8c\u547d\u4ee4\u4e0d\u4f1a\u6062\u590d\u5bb9\u5668\uff0c\u9700\u8981\u9760\u5bb9\u5668\u81ea\u8eab\u7684\u7ba1\u7406\u62c9\u8d77\uff01"),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("p",null,"\u5176\u4ed6\u95ee\u9898\u53c2\u8003 ","[blade create k8s]","(blade create k8s.md) \u5e38\u89c1\u95ee\u9898"))}d.isMDXComponent=!0}}]);