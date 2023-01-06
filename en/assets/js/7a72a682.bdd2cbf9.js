"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[6870],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return t?o.createElement(h,c(c({ref:n},d),{},{components:t})):o.createElement(h,c({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},464:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l}});var o=t(7462),r=(t(7294),t(3905));const a={},c="OS Scenario Extension Development Documentation",i={unversionedId:"community/os-dev-guide",id:"community/os-dev-guide",title:"OS Scenario Extension Development Documentation",description:"chaosblade-exec-os is a basic resource scenario project, such as CPU, memory, process, network, disk and other system resource basic scenarios. This article introduces the basic resource scenario extension in detail from four aspects: project engineering, execution process, scenario extension, and packaging test.",source:"@site/docs/community/os-dev-guide.md",sourceDirName:"community",slug:"/community/os-dev-guide",permalink:"/en/docs/next/community/os-dev-guide",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/community/os-dev-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Development standard",permalink:"/en/docs/next/community/dev-standard"},next:{title:"Issue submission and handling specifications",permalink:"/en/docs/next/community/issue-standard"}},s={},l=[{value:"Scenario Realization Design",id:"scenario-realization-design",level:2},{value:"Scenario Code Implementation",id:"scenario-code-implementation",level:2},{value:"Case Reference",id:"case-reference",level:3},{value:"Create a shutdown fault command",id:"create-a-shutdown-fault-command",level:3},{value:"Implement the reboot scenario",id:"implement-the-reboot-scenario",level:3}],d={toc:l};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"os-scenario-extension-development-documentation"},"OS Scenario Extension Development Documentation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-exec-os"},"chaosblade-exec-os")," is a basic resource scenario project, such as CPU, memory, process, network, disk and other system resource basic scenarios. This article introduces the basic resource scenario extension in detail from four aspects: project engineering, execution process, scenario extension, and packaging test."),(0,r.kt)("h1",{id:"project-structure"},"Project Structure"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://alidocs.oss-accelerate.aliyuncs.com/res/a4jKqmxykw8Ynw19/img/90ef69c6-6c2f-4989-ba8b-1be56686372b.png",alt:"image"})),(0,r.kt)("p",null,"The code of this project consists of four parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"build\xa0is a cross-platform packaging directory.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"exec\xa0is the implementation code of each scenario.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"extra\xa0is a dependent third-party tool.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"main.go\xa0is the scene execution entry."))),(0,r.kt)("h1",{id:"execution-flow"},"Execution Flow"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://alidocs.oss-accelerate.aliyuncs.com/res/a4jKqmxykw8Ynw19/img/aed33af9-3670-4428-9a41-e67676247303.png",alt:"image"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Executing the basic resource scene through blade will call ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/chaos_os")," file to run.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bin/chaos_os")," will parse the command parameters to identify whether to create an experiment or destroy an experiment.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Convert experiment parameters to experiment model object.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Call the corresponding experiment executor to execute."))),(0,r.kt)("h1",{id:"scenario-extension"},"Scenario Extension"),(0,r.kt)("p",null,"This article takes three new scenarios of Linux system shutdown, power off, and reboot as examples to introduce in detail how to expand the system scenarios in the chaosblade-exec-os project."),(0,r.kt)("h2",{id:"scenario-realization-design"},"Scenario Realization Design"),(0,r.kt)("p",null,"After investigation, in Linux, the host can be shut down (halt), power-off (power-off) and rebooted (reboot) through the shutdown command. You can view the command details through the shutdown command help document. The relevant commands are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# The system will shut down after 1 minute, if no time is added, the default is to execute after 1 minute\nshutdown -H\n\n# The system powers off immediately\nshutdown -P now\n\n# The system is forced to restart after 2 minutes\nshutdown -r -f +2\n\n# Cancel the shutdown command\nshutdown -c\n")),(0,r.kt)("p",null,"Mapping with the ChaosBlade chaos engineering experimental model, shutdown can be used as the target, halt, poweroff, and reboot can be used as the action respectively, and the forced operation force and time parameter setting are supported. Note that in order to be more suitable for users, the time parameter needs to be modified. If this parameter is not filled in, it means that it will be executed immediately, and the default value will be changed to now. Then use chaosblade to execute as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# The system shuts down after 1 minute, if no time is added, the default is to execute immediately\nblade create shutdown halt --time 1\n\n# The system powers off immediately\nblade create shutdown poweroff --force\n\n# The system is forced to restart after 2 minutes\nblade create shutdown reboot --time 2\n\n#Cancel the shutdown command\nblade destroy UID\n")),(0,r.kt)("h2",{id:"scenario-code-implementation"},"Scenario Code Implementation"),(0,r.kt)("h3",{id:"case-reference"},"Case Reference"),(0,r.kt)("p",null,"The extended failure scenario is similar to the process failure scenario, such as killing a process and stopping a process, which can be realized by referring to the process scenario."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://alidocs.oss-accelerate.aliyuncs.com/res/a4jKqmxykw8Ynw19/img/9f6ac3fe-5c55-42b0-874b-1d44b05e36e8.png",alt:"image"})),(0,r.kt)("p",null,"It can be seen from the existing process scene code that in the exec directory, create a process directory to define the target is the process failure scene model definition ",(0,r.kt)("inlineCode",{parentName:"p"},"ProcessCommandModelSpec"),", in this model respectively define the kill process kill scene and stop process stop scene experimental action model NewXXXProcessActionCommandSpec, Each scenario is defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"process_kill.go")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"process_stop.go")," respectively.\nTaking KillProcessActionCommandSpec as an example, the following content needs to be defined mainly according to ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseExpActionCommandSpec"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Fault Scenario Matching Conditions\n    ActionMatchers    []ExpFlagSpec\n// Fault related parameters\n    ActionFlags       []ExpFlagSpec\n// Failure Scenario Executor\n    ActionExecutor    Executor\n// Long description of the failure scenario\n    ActionLongDesc    string\n// Failure Scenario Use Cases\n    ActionExample     string\n// The executor used by the failure scenario execution\n    ActionPrograms    []string\n// Failure scene directory\n    ActionCategories  []string\n// Whether the daemon runs persistently in the fault scenario\n    ActionProcessHang bool\n")),(0,r.kt)("p",null,"The following will introduce in detail from the creation of the Shutdown fault experiment command, to the realization of the restart experiment scenario, to the realization of the shutdown experiment scenario, to the extraction of the same implementation, and to the expansion of the power outage experiment scenario."),(0,r.kt)("h3",{id:"create-a-shutdown-fault-command"},"Create a shutdown fault command"),(0,r.kt)("p",null,"Create a shutdown directory in the exec directory to store scene-related codes, and create a shutdown.go file to define the experimental scene model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'package shutdown\n\nimport (\n    "github.com/chaosblade-io/chaosblade-spec-go/spec"\n)\n\ntype ShutdownCommandModelSpec struct {\n    spec.BaseExpModelCommandSpec\n}\n\nfunc NewShutdownCommandModelSpec() spec.ExpModelCommandSpec {\n    return &ShutdownCommandModelSpec{\n        spec.BaseExpModelCommandSpec{\n            ExpActions: []spec.ExpActionCommandSpec{\n                // \u91cd\u542f\u3001\u5173\u673a\u3001\u65ad\u7535\u5b9e\u73b0\n            },\n            ExpFlags: []spec.ExpFlagSpec{\n                // \u901a\u7528\u53c2\u6570\n            },\n        },\n    }\n}\n\nfunc (s ShutdownCommandModelSpec) Name() string {\n    return "shutdown"\n}\n\nfunc (s ShutdownCommandModelSpec) ShortDesc() string {\n    return "Support shutdown, halt or reboot experiment."\n}\n\nfunc (s ShutdownCommandModelSpec) LongDesc() string {\n    return "Support shutdown, halt or reboot experiment. Can control shutdown or restart behavior with different flags. Warning! the experiment cannot be recovered by this tool."\n}\n')),(0,r.kt)("p",null,"Next, you need to create reboot, shutdown, and power-off related scenarios in ExpActions, and then take the restart scenario as an example"),(0,r.kt)("h3",{id:"implement-the-reboot-scenario"},"Implement the reboot scenario"),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown_reboot.go")," file, follow ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.ExpActionCommandSpec")," definition ",(0,r.kt)("inlineCode",{parentName:"p"},"RebootActionCommandSpec")," implementation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'type RebootActionCommandSpec struct {\n    spec.BaseExpActionCommandSpec\n}\n\nfunc NewRebootActionCommandSpec() spec.ExpActionCommandSpec {\n    return &RebootActionCommandSpec{\n        spec.BaseExpActionCommandSpec{\n            ActionMatchers: []spec.ExpFlagSpec{},\n            ActionFlags:    []spec.ExpFlagSpec{},\n            ActionExecutor: &RebootExecutor{},\n            ActionExample: `\n# Force to reboot machine\nblade c shutdown reboot --force\n\n# Reboot machine after 1 minute\nblade c shutdown reboot --time 1`,\n            ActionPrograms:    []string{},\n            ActionCategories:  []string{},\n            ActionProcessHang: true,\n        },\n    }\n}\n\nfunc (r *RebootActionCommandSpec) Name() string {\n    return "reboot"\n}\n\nfunc (r *RebootActionCommandSpec) Aliases() []string {\n    return []string{"s"}\n}\n\nfunc (r *RebootActionCommandSpec) ShortDesc() string {\n    return "Reboot machine"\n}\n\nfunc (r *RebootActionCommandSpec) LongDesc() string {\n    return "Reboot machine. Warning! the experiment cannot be recovered by this tool."\n}\n\ntype RebootExecutor struct {\n    channel spec.Channel\n}\n\nfunc (r *RebootExecutor) Name() string {\n    return "reboot"\n}\n\nfunc (r *RebootExecutor) Exec(uid string, ctx context.Context, model *spec.ExpModel) *spec.Response {\n    // TODO \u91cd\u542f\u5177\u4f53\u5b9e\u73b0\n    return nil\n}\n\nfunc (r *RebootExecutor) SetChannel(channel spec.Channel) {\n    r.channel = channel\n}\n')),(0,r.kt)("p",null,"According to the above scenario design section, use the system shutdown command to implement the machine reboot operation, and support time and enforcement parameters. It is coded and implemented in the Exec function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'func (r *RebootExecutor) Exec(uid string, ctx context.Context, model *spec.ExpModel) *spec.Response {\n    // Use it to identify operation\n  if _, ok := spec.IsDestroy(ctx); ok {\n        return cancel(ctx, uid, model, r.channel)\n    }\n    return execute(ctx, model, "-r", r.channel)\n}\n\n// Execute shutdown command \nfunc execute(ctx context.Context, model *spec.ExpModel, command string, channel spec.Channel) *spec.Response {\n    response := checkShutdownCommand(channel)\n    if !response.Success {\n        return response\n    }\n    force := model.ActionFlags[Force.Name] == "true"\n    time := model.ActionFlags[Time.Name]\n    if time == "" {\n        time = "now"\n    }\n    command = fmt.Sprintf("%s %s", ShutdownCommand, command)\n    if force {\n        command = fmt.Sprintf("%s -f", command)\n    }\n    command = fmt.Sprintf("sleep %d && %s %s", SleepTime, command, time)\n    shutdownErrLog := util.GetNohupOutput(util.Bin, stderrLog)\n    //  nohup bash -c "sleep 3 && shutdown -k" < /dev/null >/dev/null 2> shutdown.err &\n    command = fmt.Sprintf("bash -c \'%s\' < /dev/null > /dev/null 2> %s", command, shutdownErrLog)\n    return channel.Run(ctx, "nohup", command)\n}\n\n// Cancel shutdown\nfunc cancel(ctx context.Context, uid string, model *spec.ExpModel, channel spec.Channel) *spec.Response {\n    time := model.ActionFlags[Time.Name]\n    if time == "" || time == "now" || time == "+0" {\n        return spec.ReturnSuccess(uid)\n    }\n    // Calling the cancel command directly will not process the execution result.\n    // Because the return may fail due to downtime, it returns success directly.\n    response := channel.Run(ctx, ShutdownCommand, "-c")\n    if !response.Success {\n        logrus.Warningf("uid: %s, shutdown cancel failed, %v", uid, response.Error())\n    }\n    // Not bug.\n    return spec.ReturnSuccess(uid)\n}\n')),(0,r.kt)("p",null,"After the restart scenario is implemented, this scenario can be added to the shutdown command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"func NewShutdownCommandModelSpec() spec.ExpModelCommandSpec {\n    return &ShutdownCommandModelSpec{\n        spec.BaseExpModelCommandSpec{\n            ExpActions: []spec.ExpActionCommandSpec{\n                NewRebootActionCommandSpec(),\n            },\n            ExpFlags: []spec.ExpFlagSpec{\n                &Time, &Force,\n            },\n        },\n    }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown_halt.go")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown_poweroff.go")," implementations can also be added in this way. Since the shutdown command controls shutdown, power-off, and reboot operations through parameters, the general code can be extracted into the shutdown.go file, and other scene files can call the functions in this file. The final code is as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://alidocs.oss-accelerate.aliyuncs.com/res/a4jKqmxykw8Ynw19/img/b183f750-a3d9-4063-b1c3-c1b1520a3184.png",alt:"image"})),(0,r.kt)("p",null,"shutdown_halt.go codes\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'func (h *HaltExecutor) Exec(uid string, ctx context.Context, model *spec.ExpModel) *spec.Response {\n    if _, ok := spec.IsDestroy(ctx); ok {\n        return cancel(ctx, uid, model, h.channel)\n    }\n    return execute(ctx, model, "-H", h.channel)\n}\n')),(0,r.kt)("p",null,"shutdown_poweroff.go codes\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'func (p *PowerOffExecutor) Exec(uid string, ctx context.Context, model *spec.ExpModel) *spec.Response {\n    if _, ok := spec.IsDestroy(ctx); ok {\n        return cancel(ctx, uid, model, p.channel)\n    }\n    return execute(ctx, model, "-P", p.channel)\n}\n')),(0,r.kt)("p",null,"shutdown_reboot.go codes\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'func (r *RebootExecutor) Exec(uid string, ctx context.Context, model *spec.ExpModel) *spec.Response {\n    if _, ok := spec.IsDestroy(ctx); ok {\n        return cancel(ctx, uid, model, r.channel)\n    }\n    return execute(ctx, model, "-r", r.channel)\n}\n')),(0,r.kt)("p",null,"So far, the shutdown, power-off, and restart experiment scenarios involved in shutdown have been realized, just register to the model_linux.go experiment list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"func GetAllExpModels() []spec.ExpModelCommandSpec {\n    return []spec.ExpModelCommandSpec{\n        cpu.NewCpuCommandModelSpec(),\n        mem.NewMemCommandModelSpec(),\n        process.NewProcessCommandModelSpec(),\n        network.NewNetworkCommandSpec(),\n        disk.NewDiskCommandSpec(),\n        script.NewScriptCommandModelSpec(),\n        file.NewFileCommandSpec(),\n        kernel.NewKernelInjectCommandSpec(),\n        systemd.NewSystemdCommandModelSpec(),\n        stressng.NewStressModelSpec(),\n        time.NewTimeCommandSpec(),\n    // shutdown\n        shutdown.NewShutdownCommandModelSpec(),\n    }\n}\n")),(0,r.kt)("h1",{id:"package-test"},"Package Test"),(0,r.kt)("p",null,"Use make build in the project root directory to compile. After compilation, chaos_os will be generated in target/chaosblade-VERSION/bin and chaosblade-os-spec-XXX.yaml files will be generated in target/chaosblade-VERSION/yaml. In this file There will be a shutdown scenario statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- target: shutdown\n  shortDesc: Support shutdown, halt or reboot experiment.\n  longDesc: Support shutdown, halt or reboot experiment. Can control shutdown or restart\n    behavior with different flags. Warning! the experiment cannot be recovered by\n    this tool.\n  actions:\n  - action: halt\n    aliases: [h]\n    shortDesc: Halt machine\n    longDesc: Halt machine. Warning! the experiment cannot be recovered by this tool.\n    flags:\n    - name: time\n      desc: waiting time, unit is minute, for example +1 means after 1 minute to run\n      noArgs: false\n      required: false\n      requiredWhenDestroyed: false\n    - name: force\n      desc: Force operation\n      noArgs: true\n      required: false\n      requiredWhenDestroyed: false\n")),(0,r.kt)("h1",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,r.kt)("p",null,"Directly replace the above compiled file with the corresponding file in the original chaosblade toolkit and test it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'./blade c shutdown -h\nSupport shutdown, halt or reboot experiment. Can control shutdown or restart behavior with different flags. Warning! the experiment cannot be recovered by this tool.\n\nUsage:\n  blade create shutdown [flags]\n  blade create shutdown [command]\n\nAvailable Commands:\n  halt        Halt machine\n  poweroff    Shutdown machine\n  reboot      Reboot machine\n\nFlags:\n  -h, --help   help for shutdown\n\nGlobal Flags:\n  -a, --async             whether to create asynchronously, default is false\n  -d, --debug             Set client to DEBUG mode\n  -e, --endpoint string   the create result reporting address. It takes effect only when the async value is true and the value is not empty\n  -n, --nohup             used to internal async create, no need to config\n      --uid string        Set Uid for the experiment, adapt to docker and cri\n\nUse "blade create shutdown [command] --help" for more information about a command.\n')))}p.isMDXComponent=!0}}]);