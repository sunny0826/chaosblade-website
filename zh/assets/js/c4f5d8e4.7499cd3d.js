(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[195,18,426,925,217],{9357:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=n(7294),l=n(6010),r=n(4996),c="feature_OxCZ",i="featureReverse_f3kV",o="featureImage_2Rbd",s="featureDesc_iCzV";n(4973);function m(e){var t=e.imgUrl,n=e.title,m=e.description,u=e.reverse;return a.createElement("div",{className:"container"},a.createElement("div",{className:(0,l.Z)("row",c,u?i:"")},a.createElement("div",{className:"col col--3"},a.createElement("div",{className:"text--center"},t&&a.createElement("img",{className:o,src:(0,r.Z)(t),alt:"feture-"+n}))),a.createElement("div",{className:(0,l.Z)("col col--9",s)},a.createElement("div",null,a.createElement("h2",null,n),a.createElement("div",null,m)))))}},5711:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(7294),l=n(6010),r="hfeatureTitle_fb9e",c="hfeatureContent_gWSC",i="hfeatureContentReversed_2uFO",o="hfeatureImage_2lFj",s="darkSection_3BKa",m="hfeatureImageReversed_2zDO";function u(e){var t=e.reversed,n=e.title,u=e.img,h=e.text,g=e.isDark,d=a.createElement("div",{className:(0,l.Z)("col col--6",o,t?m:"")},u),p=a.createElement("div",{className:(0,l.Z)("col col--6",c,t?i:"")},a.createElement("h3",{className:r},n),h);return a.createElement("section",{className:(0,l.Z)("highlightSection",g?s+" darkSection":"")},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},t?a.createElement(a.Fragment,null,p,d):a.createElement(a.Fragment,null,d,p))))}},1892:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(3552),l=n(7294),r=n(6010),c="companyUsage_3sOj",i="logos_3g3Q",o="logoNavigation_3yj2",s="button_24Bd",m="buttonActive_WuSB",u=n(4973),h=0,g=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={position:-0,activePage:0,swapInterval:0,pages:Math.ceil(t.logos?t.logos.length/6:1),margin:70},n.containerRef=l.createRef(),n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.containerRef.current.getBoundingClientRect(),t=Math.floor(e.width/150);this.setState({swapInterval:setInterval(this.nextPage.bind(this),5e3),pages:Math.ceil(this.props.logos?this.props.logos.length/t:1),margin:e.width<700?0:70})},n.componentWillUnmount=function(){clearInterval(this.state.swapInterval)},n.animateTo=function(e){var t=e*-(this.containerRef.current.getBoundingClientRect().width-this.state.margin);this.setState({position:t,activePage:e})},n.handleClick=function(e){this.animateTo(e),clearInterval(this.state.swapInterval),this.setState({swapInterval:setInterval(this.nextPage.bind(this),5e3)})},n.nextPage=function(){var e=this.state.pages-1,t=Math.floor(h/e)%2;this.animateTo(t?e-h%e:h%e),++h},n.render=function(){var e=this;return this.props&&this.props.logos?(this.buttons=function(){return[].concat(Array(e.state.pages)).map((function(t,n){return l.createElement("button",{onClick:function(){return e.handleClick(n)},key:n,className:(0,r.Z)(s,n===e.state.activePage?m:"")},n+1)}))},this.list=function(){return l.createElement("ul",{style:{transform:"translate("+e.state.position+"px, 0px)"}},e.props.logos.map((function(e,t){return l.createElement("li",{key:t},l.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.createElement("img",{src:"/img/logos/"+e.img,alt:e.alt})))})))},l.createElement("div",{className:c,ref:this.containerRef},l.createElement("h3",null,l.createElement(u.Z,null,"Who is using ChaosBlade?")),l.createElement("div",{className:(0,r.Z)(i)},this.list(),l.createElement("div",{className:o},this.buttons())))):l.createElement("div",null)},t}(l.Component)},4767:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var a=n(7294),l={section:"section_2F2o",darkSection:"darkSection_2bDk"};function r(e){var t=e.isDark,n=e.children;return a.createElement("section",{className:[l.section].concat(t?[l.darkSection,"darkSection"]:[]).join(" ")},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},n)))}},6395:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(2122),l=n(7294),r=n(6010),c=n(5888),i=n(6742),o=n(2263),s=n(4996),m=n(4973),u=n(1892),h=n(9357),g=n(4767),d=n(5711),p={heroBanner:"heroBanner_3P7f",buttons:"buttons_1r9m",frameworkLogos:"frameworkLogos_lURf",reactImage:"reactImage_2YKi",social:"social_1Zu7",tweetBtn:"tweetBtn_2SHy",homeImg:"homeImg_3vLV",cncfLogo:"cncfLogo_3Y7k"},f=[{title:l.createElement(l.Fragment,null,l.createElement(m.Z,null,"Automated deployment experimental tools")),imgUrl:"/img/experimental-tools.svg",description:l.createElement(l.Fragment,null,l.createElement("p",null,l.createElement(m.Z,null,"Automated deployment experimental tools by connecting to the operation, maintenance channel or other methods.")))},{title:l.createElement(l.Fragment,null,l.createElement(m.Z,null,"Support experimental tools hosting")),imgUrl:"/img/tools-hosting.svg",description:l.createElement(l.Fragment,null,l.createElement("p",null,l.createElement(m.Z,null,"More experimental tools can be accessed in accordance with the specifications to meet the needs of experimental scenarios."))),reverse:!0},{title:l.createElement(l.Fragment,null,l.createElement(m.Z,null,"Unified Chaos Experiment User Interface")),imgUrl:"/img/user-interface.svg",description:l.createElement(l.Fragment,null,l.createElement("p",null,l.createElement(m.Z,null,"Users do not need to be concerned with the way of using different tools, and perform chaos experiments on the same interface.")))}],E=[{img:"aliyun.png",alt:"Aliyun",url:"https://www.aliyun.com/"},{img:"cmit.png",alt:"CMIT",url:"http://it.10086.cn/"},{img:"xiaomi.png",alt:"XiaoMi",url:"https://www.mi.com/"},{img:"jd.png",alt:"JD",url:"https://www.jd.com/"},{img:"icbc.png",alt:"ICBC",url:"http://www.icbc.com.cn/icbc/"}];var v=function(){var e=(0,o.default)().siteConfig,t=void 0===e?{}:e;return l.createElement(c.Z,{title:t.title+" \xb7 "+t.tagline,description:""+t.tagline},l.createElement("header",{className:(0,r.Z)("hero hero--primary",p.heroBanner)},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--6"},l.createElement("h1",{className:"hero__logo"},l.createElement("img",{src:"/img/logo.png",alt:"logo"})),l.createElement("p",{className:"hero__subtitle"},t.tagline),l.createElement("div",{className:p.social},l.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=chaosblade-io&repo=chaosblade&type=watch&count=true",height:"20",width:"118",frameBorder:"0",scrolling:"0",style:{width:"118px",height:"20px"}})),l.createElement("div",{className:p.buttons},l.createElement(i.Z,{className:(0,r.Z)("button button--outline button--secondary button--lg",p.getStarted),to:(0,s.Z)("/docs/")},l.createElement(m.Z,null,"Get Started")),l.createElement(i.Z,{to:"https://github.com/chaosblade-io/chaosblade",className:(0,r.Z)("button button--outline button--secondary button--lg",p.getStarted)},l.createElement(m.Z,null,"Learn More")))),l.createElement("div",{className:"col col--6"},l.createElement("h1",{className:"hero__title"},l.createElement("img",{className:p.homeImg,src:"/img/homepage-img.png",alt:"homepage"})))))),l.createElement("main",null,l.createElement(d.default,{img:l.createElement("img",{width:"560",height:"315",src:"/img/what-is-chaosblade.jpg"}),isDark:!0,title:l.createElement(m.Z,null,"What is ChaosBlade"),text:l.createElement(l.Fragment,null,l.createElement("p",null,l.createElement(m.Z,null,"ChaosBlade is a cloud-native chaos engineering platform that supports multiple environments, clusters, and languages.")),l.createElement("p",null,l.createElement(m.Z,null,"It includes the chaosblade-box chaos engineering platform and the chaosblade chaos engineering tool.")))}),f&&f.length>0&&l.createElement(g.default,{className:"highlightSection"},f.map((function(e,t){return l.createElement(h.default,(0,a.Z)({key:t},e))}))),l.createElement(g.default,{isDark:!0},l.createElement(u.default,{logos:E}))),l.createElement("div",{className:(0,r.Z)("hero",p.hero)},l.createElement("div",{className:"container text--center"},l.createElement("h3",{className:"hero__subtitle"},l.createElement(m.Z,null,"ChaosBlade is a")," ",l.createElement("a",{href:"https://cncf.io/"},"Cloud Native Computing Foundation")," ",l.createElement(m.Z,null,"sandbox project")),l.createElement("div",{className:(0,r.Z)("cncf-logo",p.cncfLogo)}))))}}}]);