(()=>{var e={};e.id=794,e.ids=[794],e.modules={96330:e=>{"use strict";e.exports=require("@prisma/client")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},12412:e=>{"use strict";e.exports=require("assert")},79428:e=>{"use strict";e.exports=require("buffer")},55511:e=>{"use strict";e.exports=require("crypto")},94735:e=>{"use strict";e.exports=require("events")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},33873:e=>{"use strict";e.exports=require("path")},11723:e=>{"use strict";e.exports=require("querystring")},79551:e=>{"use strict";e.exports=require("url")},28354:e=>{"use strict";e.exports=require("util")},74075:e=>{"use strict";e.exports=require("zlib")},43569:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d});var s=r(70260),a=r(28203),i=r(25155),n=r.n(i),o=r(67292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["create-test",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,23008)),"C:\\Users\\rachb\\Downloads\\Telegram Desktop\\kvfNew\\app\\create-test\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],types:["__DEFAULT__",{},{defaultPage:[()=>Promise.resolve().then(r.t.bind(r,97507,23)),"next/dist/client/components/parallel-route-default.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,19611)),"C:\\Users\\rachb\\Downloads\\Telegram Desktop\\kvfNew\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,61129)),"C:\\Users\\rachb\\Downloads\\Telegram Desktop\\kvfNew\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\rachb\\Downloads\\Telegram Desktop\\kvfNew\\app\\create-test\\page.tsx"],m={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/create-test/page",pathname:"/create-test",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},32768:(e,t,r)=>{Promise.resolve().then(r.bind(r,23008))},96320:(e,t,r)=>{Promise.resolve().then(r.bind(r,71952))},71952:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>j});var s=r(45512),a=r(58009),i=r.n(a),n=r(6868),o=r(57285),l=r(81914),d=r(87021),c=r(61140),m=r(26248);let u=(0,m.createServerReference)("403802d27c2b6202878a0fc8139d0023a038c41d97",m.callServer,void 0,m.findSourceMapURL,"testBlocked"),p=(0,m.createServerReference)("40ec9847e1a217b9cdbbcbc436b298c2b0454cba23",m.callServer,void 0,m.findSourceMapURL,"createTest"),f=(0,m.createServerReference)("40536ff56f4510c8f4071a857c40ab5984e8a8e016",m.callServer,void 0,m.findSourceMapURL,"deleteTest");var x=r(94727);r(9934);var h=r(99271),g=r(54069),v=r(86277),b=r(15310),y=r(26008),w=r(44269);function j(){let[e,t]=(0,a.useState)(),[r,m]=i().useState(!0),j=(0,n.mN)({resolver:(0,l.u)(v.IK),defaultValues:{category:"",name:"",text:""}}),[N,A]=i().useState([]),C=async e=>{u(e),A(await (0,c.e)())},k=async e=>{try{await p(e).then(async()=>{let e=await (0,c.e)();A(e)})}catch(e){console.log(e)}},R=async e=>{f(e),A(await (0,c.e)())};return r?(0,s.jsxs)(h.A,{sx:{margin:"20px auto",width:"80%"},children:[(0,s.jsx)(o.A,{height:80,width:190,animation:"wave"}),(0,s.jsx)(o.A,{height:30,style:{marginBottom:-15},animation:"wave"}),(0,s.jsx)(o.A,{height:100,style:{marginBottom:5},animation:"wave"}),(0,s.jsx)(o.A,{height:30,style:{marginBottom:-15},animation:"wave"}),(0,s.jsx)(o.A,{height:100,style:{marginBottom:-20},animation:"wave"}),(0,s.jsx)(o.A,{height:70,width:100,style:{marginBottom:15},animation:"wave"}),(0,s.jsx)(o.A,{height:140,style:{marginBottom:-40},animation:"wave"}),(0,s.jsx)(o.A,{height:140,style:{marginBottom:-40},animation:"wave"}),(0,s.jsx)(o.A,{height:140,style:{marginBottom:-40},animation:"wave"})]}):e&&"ADMIN"==e.role?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.Op,{...j,children:(0,s.jsxs)("form",{className:" container py-5 mx-auto",onSubmit:j.handleSubmit(k),children:[(0,s.jsx)("h3",{className:"text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl",children:"Создание тестов"}),(0,s.jsx)("div",{className:"mt-10 ",children:(0,s.jsxs)("div",{className:"mx-auto",children:[(0,s.jsx)("label",{htmlFor:"first-name",className:"block text-sm/6 font-medium text-gray-900"}),(0,s.jsx)(b.Z,{name:"name",label:"Название теста",required:!0}),(0,s.jsx)("p",{className:"mt-8 text-pretty text-lg font-medium sm:text-xl/8",children:"Выберите категорию теста"}),(0,s.jsx)(x.zB,{control:j.control,render:({field:e})=>(0,s.jsxs)(g.l6,{onValueChange:e.onChange,defaultValue:e.value,children:[(0,s.jsx)(x.MJ,{children:(0,s.jsx)(g.bq,{children:(0,s.jsx)(g.yv,{defaultValue:e.value})})}),(0,s.jsxs)(g.gC,{children:[(0,s.jsx)(g.eb,{value:"STUDENT",children:"Студент"}),(0,s.jsx)(g.eb,{value:"SCHOOLBOY",children:"Школьник"}),(0,s.jsx)(g.eb,{value:"SPECIALIST",children:"Специалист"})]})]}),name:"category"}),(0,s.jsx)(d.$,{loading:j.formState.isSubmitting,variant:"default",type:"submit",className:"mt-4",children:"Создать"})]})})]})}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"mt-10 container mx-auto space-y-4",children:N.map(e=>(0,s.jsxs)("div",{className:"flex items-center bg-slate-300 grow rounded-2xl p-5 items-center justify-between",children:[(0,s.jsxs)(y.default,{href:`/create-test/${e.id}`,className:"flex bg-slate-300 grow rounded-2xl p-5 items-center justify-between",children:[(0,s.jsx)("span",{className:"text-lg font-medium",children:e.name}),(0,s.jsx)("span",{className:"text-sm text-muted-foreground",children:e.category})]},e.id),(0,s.jsx)(d.$,{onClick:()=>C(e.id),variant:e.testDisable?"succes":"destructive",className:"mr-4",children:e.testDisable?"Разблокировать":"Заблокировать"}),(0,s.jsx)(d.$,{onClick:()=>R(e.id),variant:"destructive",className:"",children:(0,s.jsx)(w.A,{})})]},e.id))})})]}):(0,s.jsx)("div",{className:"relative container mx-auto flex h-full ring-black/5 max-lg:rounded-t-[2rem] my-6 py-10 shadow ring-1 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]",children:(0,s.jsx)("div",{className:"px-8 pt-8 sm:px-10 sm:pt-10",children:(0,s.jsx)("h4",{className:"mt-2 text-4xl text-center font-medium tracking-tight text-gray-950 max-lg:text-center",children:"Ошибка, данной страницы не существует"})})})}},15310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var s=r(45512),a=r(6868),i=r(25409),n=r(59462),o=r(44269);r(58009);let l=({onClick:e,className:t})=>(0,s.jsx)("button",{onClick:e,className:(0,n.cn)("absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer",t),children:(0,s.jsx)(o.A,{className:"h-5 w-5"})}),d=({text:e,className:t})=>(0,s.jsx)("p",{className:(0,n.cn)("text-red-500 text-sm",t),children:e}),c=()=>(0,s.jsx)("span",{className:"text-red-500",children:"*"}),m=({className:e,name:t,label:r,required:n,defaultValue:o,...m})=>{let{register:u,formState:{errors:p},watch:f,setValue:x}=(0,a.xW)(),h=f(t),g=p[t]?.message;return(0,s.jsxs)("div",{className:e,children:[r&&(0,s.jsxs)("p",{className:"font-medium mb-2",children:[r," ",n&&(0,s.jsx)(c,{})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(i.p,{defaultValue:o||"",className:"h-12 text-md",...u(t),...m}),h&&(0,s.jsx)(l,{onClick:()=>{x(t,"",{shouldValidate:!0})}})]}),g&&(0,s.jsx)(d,{text:g,className:"mt-2"})]})}},86277:(e,t,r)=>{"use strict";r.d(t,{Do:()=>n,IK:()=>i,X5:()=>a});var s=r(16131);let a=s.z.object({email:s.z.string().email({message:"Введите корректную почту"}),password:s.z.string().min(6,{message:"Пароль должен содержать минимум 6 символов"}).refine(e=>/[A-Z]/.test(e),{message:"Пароль должен содержать хотя бы одну заглавную букву"}).refine(e=>/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(e),{message:"Пароль должен содержать хотя бы один специальный символ"}).refine(e=>/[0-9]/.test(e),{message:"Пароль должен содержать хотя бы одну цифру"})});s.z.object({name:s.z.string()});let i=s.z.object({name:s.z.string(),category:s.z.string(),text:s.z.string()}),n=s.z.object({firstName:s.z.string().min(3,{message:"Имя пользователя должно содержать минимум 3 символа"}),lastName:s.z.string().min(3,{message:"Фамилия пользователя должна содержать минимум 3 символа"}),surName:s.z.string(),email:s.z.string().email({message:"Введите корректную почту"}),password:s.z.string().min(6,{message:"Пароль должен содержать минимум 6 символов"}).refine(e=>/[A-Z]/.test(e),{message:"Пароль должен содержать хотя бы одну заглавную букву"}).refine(e=>/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(e),{message:"Пароль должен содержать хотя бы один специальный символ"}).refine(e=>/[0-9]/.test(e),{message:"Пароль должен содержать хотя бы одну цифру"}),organisation:s.z.string(),role:s.z.string().min(1,{message:"Выберите категорию"}),startTest:s.z.string().min(1,{message:"Выберите уровень теста"})})},94727:(e,t,r)=>{"use strict";r.d(t,{C5:()=>x,MJ:()=>f,eI:()=>p,zB:()=>c});var s=r(45512),a=r(58009),i=r(12705),n=r(6868),o=r(59462),l=r(47699);let d=a.createContext({}),c=({...e})=>(0,s.jsx)(d.Provider,{value:{name:e.name},children:(0,s.jsx)(n.xI,{...e})}),m=()=>{let e=a.useContext(d),t=a.useContext(u),{getFieldState:r,formState:s}=(0,n.xW)(),i=r(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=t;return{id:o,name:e.name,formItemId:`${o}-form-item`,formDescriptionId:`${o}-form-item-description`,formMessageId:`${o}-form-item-message`,...i}},u=a.createContext({}),p=a.forwardRef(({className:e,...t},r)=>{let i=a.useId();return(0,s.jsx)(u.Provider,{value:{id:i},children:(0,s.jsx)("div",{ref:r,className:(0,o.cn)("space-y-2",e),...t})})});p.displayName="FormItem",a.forwardRef(({className:e,...t},r)=>{let{error:a,formItemId:i}=m();return(0,s.jsx)(l.J,{ref:r,className:(0,o.cn)(a&&"text-destructive",e),htmlFor:i,...t})}).displayName="FormLabel";let f=a.forwardRef(({...e},t)=>{let{error:r,formItemId:a,formDescriptionId:n,formMessageId:o}=m();return(0,s.jsx)(i.DX,{ref:t,id:a,"aria-describedby":r?`${n} ${o}`:`${n}`,"aria-invalid":!!r,...e})});f.displayName="FormControl",a.forwardRef(({className:e,...t},r)=>{let{formDescriptionId:a}=m();return(0,s.jsx)("p",{ref:r,id:a,className:(0,o.cn)("text-[0.8rem] text-muted-foreground",e),...t})}).displayName="FormDescription";let x=a.forwardRef(({className:e,children:t,...r},a)=>{let{error:i,formMessageId:n}=m(),l=i?String(i?.message):t;return l?(0,s.jsx)("p",{ref:a,id:n,className:(0,o.cn)("text-[0.8rem] font-medium text-destructive",e),...r,children:l}):null});x.displayName="FormMessage"},25409:(e,t,r)=>{"use strict";r.d(t,{p:()=>n});var s=r(45512),a=r(58009),i=r(59462);let n=a.forwardRef(({className:e,type:t,...r},a)=>(0,s.jsx)("input",{type:t,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:a,...r}));n.displayName="Input"},54069:(e,t,r)=>{"use strict";r.d(t,{bq:()=>u,eb:()=>h,gC:()=>x,l6:()=>c,yv:()=>m});var s=r(45512),a=r(58009),i=r(17638),n=r(98755),o=r(28638),l=r(24849),d=r(59462);let c=i.bL;i.YJ;let m=i.WT,u=a.forwardRef(({className:e,children:t,...r},a)=>(0,s.jsxs)(i.l9,{ref:a,className:(0,d.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...r,children:[t,(0,s.jsx)(i.In,{asChild:!0,children:(0,s.jsx)(n.A,{className:"h-4 w-4 opacity-50"})})]}));u.displayName=i.l9.displayName;let p=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(i.PP,{ref:r,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:(0,s.jsx)(o.A,{className:"h-4 w-4"})}));p.displayName=i.PP.displayName;let f=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(i.wn,{ref:r,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:(0,s.jsx)(n.A,{className:"h-4 w-4"})}));f.displayName=i.wn.displayName;let x=a.forwardRef(({className:e,children:t,position:r="popper",...a},n)=>(0,s.jsx)(i.ZL,{children:(0,s.jsxs)(i.UC,{ref:n,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===r&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:r,...a,children:[(0,s.jsx)(p,{}),(0,s.jsx)(i.LM,{className:(0,d.cn)("p-1","popper"===r&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),(0,s.jsx)(f,{})]})}));x.displayName=i.UC.displayName,a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(i.JU,{ref:r,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",e),...t})).displayName=i.JU.displayName;let h=a.forwardRef(({className:e,children:t,...r},a)=>(0,s.jsxs)(i.q7,{ref:a,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r,children:[(0,s.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(i.VF,{children:(0,s.jsx)(l.A,{className:"h-4 w-4"})})}),(0,s.jsx)(i.p4,{children:t})]}));h.displayName=i.q7.displayName,a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(i.wv,{ref:r,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",e),...t})).displayName=i.wv.displayName},99271:(e,t,r)=>{"use strict";r.d(t,{A:()=>g});var s=r(58009),a=r(82281),i=r(58478),n=r(63811),o=r(83881),l=r(52829);let d=e=>{let t={systemProps:{},otherProps:{}},r=e?.theme?.unstable_sxConfig??l.A;return Object.keys(e).forEach(s=>{r[s]?t.systemProps[s]=e[s]:t.otherProps[s]=e[s]}),t};var c=r(60205),m=r(45512),u=r(65343),p=r(82834),f=r(73420);let x=(0,r(31137).A)("MuiBox",["root"]),h=(0,p.A)(),g=function(e={}){let{themeId:t,defaultTheme:r,defaultClassName:l="MuiBox-root",generateClassName:u}=e,p=(0,i.Ay)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(n.A);return s.forwardRef(function(e,s){let i=(0,c.A)(r),{className:n,component:f="div",...x}=function(e){let t;let{sx:r,...s}=e,{systemProps:a,otherProps:i}=d(s);return t=Array.isArray(r)?[a,...r]:"function"==typeof r?(...e)=>{let t=r(...e);return(0,o.Q)(t)?{...a,...t}:a}:{...a,...r},{...i,sx:t}}(e);return(0,m.jsx)(p,{as:f,ref:s,className:(0,a.A)(n,u?u(l):l),theme:t&&i[t]||i,...x})})}({themeId:f.A,defaultTheme:h,defaultClassName:x.root,generateClassName:u.A.generate})},57285:(e,t,r)=>{"use strict";r.d(t,{A:()=>w});var s=r(58009),a=r(82281),i=r(29107),n=r(58242),o=r(71667),l=r(97634),d=r(94880),c=r(38603),m=r(31137),u=r(88613);function p(e){return(0,u.Ay)("MuiSkeleton",e)}(0,m.A)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var f=r(45512);let x=e=>{let{classes:t,variant:r,animation:s,hasChildren:a,width:n,height:o}=e;return(0,i.A)({root:["root",r,s,a&&"withChildren",a&&!n&&"fitContent",a&&!o&&"heightAuto"]},p,t)},h=(0,o.i7)`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,g=(0,o.i7)`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,v="string"!=typeof h?(0,o.AH)`
        animation: ${h} 2s ease-in-out 0.5s infinite;
      `:null,b="string"!=typeof g?(0,o.AH)`
        &::after {
          animation: ${g} 2s linear 0.5s infinite;
        }
      `:null,y=(0,l.Ay)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],!1!==r.animation&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})((0,d.A)(({theme:e})=>{let t=String(e.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",r=parseFloat(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,n.X4)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${t}/${Math.round(r/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:"fit-content"}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:"auto"}},{props:{animation:"pulse"},style:v||{animation:`${h} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:b||{"&::after":{animation:`${g} 2s linear 0.5s infinite`}}}]}})),w=s.forwardRef(function(e,t){let r=(0,c.b)({props:e,name:"MuiSkeleton"}),{animation:s="pulse",className:i,component:n="span",height:o,style:l,variant:d="text",width:m,...u}=r,p={...r,animation:s,component:n,variant:d,hasChildren:!!u.children},h=x(p);return(0,f.jsx)(y,{as:n,ref:t,className:(0,a.A)(h.root,i),ownerState:p,...u,style:{width:m,height:o,...l}})})},60205:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var s=r(14180),a=r(58009),i=r(2631);let n=function(e=null){let t=a.useContext(i.T);return t&&0!==Object.keys(t).length?t:e},o=(0,s.A)(),l=function(e=o){return n(e)}},23008:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\rachb\\\\Downloads\\\\Telegram Desktop\\\\kvfNew\\\\app\\\\create-test\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\rachb\\Downloads\\Telegram Desktop\\kvfNew\\app\\create-test\\page.tsx","default")},61140:(e,t,r)=>{"use strict";r.d(t,{e:()=>a});var s=r(26248);let a=(0,s.createServerReference)("002427132475f5b37c3663418905a6da3e384bf57c",s.callServer,void 0,s.findSourceMapURL,"getTests")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[989,934,835,285,750,818,987,585,814],()=>r(43569));module.exports=s})();