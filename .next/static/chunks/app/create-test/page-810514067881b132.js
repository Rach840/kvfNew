(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[794],{1784:(e,t,a)=>{Promise.resolve().then(a.bind(a,6039))},6039:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>N});var s=a(5155),r=a(2115),i=a(9606),n=a(5704),l=a(2679),d=a(4085),o=a(6998),c=a(5828);let m=(0,c.createServerReference)("406a511f9f3af22edff801a8f98c08a31dfa554816",c.callServer,void 0,c.findSourceMapURL,"testBlocked"),u=(0,c.createServerReference)("4077a005e744767b30593310e66db752dbae5a41f9",c.callServer,void 0,c.findSourceMapURL,"createTest"),f=(0,c.createServerReference)("40a511ee6b9ab36d09f8a74b56fee2b8191bc339e3",c.callServer,void 0,c.findSourceMapURL,"deleteTest");var x=a(4839),g=a(4607),p=a(2393),h=a(745),v=a(4923),b=a(820),y=a(7396),j=a(767);function N(){let[e,t]=(0,r.useState)(),[a,c]=r.useState(!0);r.useEffect(()=>{(async()=>{t(await (0,g.q)())})()},[]);let N=(0,i.mN)({resolver:(0,l.u)(v.IK),defaultValues:{category:"",name:"",text:""}}),[w,S]=r.useState([]);r.useEffect(()=>{(async()=>{S(await (0,o.e)()),c(!1)})()},[]);let R=async e=>{m(e),S(await (0,o.e)())},z=async e=>{try{await u(e).then(async()=>{let e=await (0,o.e)();S(e)})}catch(e){console.log(e)}},A=async e=>{f(e),S(await (0,o.e)())};return a?(0,s.jsxs)(p.A,{sx:{margin:"20px auto",width:"80%"},children:[(0,s.jsx)(n.A,{height:80,width:190,animation:"wave"}),(0,s.jsx)(n.A,{height:30,style:{marginBottom:-15},animation:"wave"}),(0,s.jsx)(n.A,{height:100,style:{marginBottom:5},animation:"wave"}),(0,s.jsx)(n.A,{height:30,style:{marginBottom:-15},animation:"wave"}),(0,s.jsx)(n.A,{height:100,style:{marginBottom:-20},animation:"wave"}),(0,s.jsx)(n.A,{height:70,width:100,style:{marginBottom:15},animation:"wave"}),(0,s.jsx)(n.A,{height:140,style:{marginBottom:-40},animation:"wave"}),(0,s.jsx)(n.A,{height:140,style:{marginBottom:-40},animation:"wave"}),(0,s.jsx)(n.A,{height:140,style:{marginBottom:-40},animation:"wave"})]}):e&&"ADMIN"==e.role?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Op,{...N,children:(0,s.jsxs)("form",{className:" container py-5 mx-auto",onSubmit:N.handleSubmit(z),children:[(0,s.jsx)("h3",{className:"text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl",children:"Создание тестов"}),(0,s.jsx)("div",{className:"mt-10 ",children:(0,s.jsxs)("div",{className:"mx-auto",children:[(0,s.jsx)("label",{htmlFor:"first-name",className:"block text-sm/6 font-medium text-gray-900"}),(0,s.jsx)(b.Z,{name:"name",label:"Название теста",required:!0}),(0,s.jsx)("p",{className:"mt-8 text-pretty text-lg font-medium sm:text-xl/8",children:"Выберите категорию теста"}),(0,s.jsx)(x.zB,{control:N.control,render:e=>{let{field:t}=e;return(0,s.jsxs)(h.l6,{onValueChange:t.onChange,defaultValue:t.value,children:[(0,s.jsx)(x.MJ,{children:(0,s.jsx)(h.bq,{children:(0,s.jsx)(h.yv,{defaultValue:t.value})})}),(0,s.jsxs)(h.gC,{children:[(0,s.jsx)(h.eb,{value:"STUDENT",children:"Студент"}),(0,s.jsx)(h.eb,{value:"SCHOOLBOY",children:"Школьник"}),(0,s.jsx)(h.eb,{value:"SPECIALIST",children:"Специалист"})]})]})},name:"category"}),(0,s.jsx)(d.$,{loading:N.formState.isSubmitting,variant:"default",type:"submit",className:"mt-4",children:"Создать"})]})})]})}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"mt-10 container mx-auto space-y-4",children:w.map(e=>(0,s.jsxs)("div",{className:"flex items-center bg-slate-300 grow rounded-2xl p-5 items-center justify-between",children:[(0,s.jsxs)(y.default,{href:"/create-test/".concat(e.id),className:"flex bg-slate-300 grow rounded-2xl p-5 items-center justify-between",children:[(0,s.jsx)("span",{className:"text-lg font-medium",children:e.name}),(0,s.jsx)("span",{className:"text-sm text-muted-foreground",children:e.category})]},e.id),(0,s.jsx)(d.$,{onClick:()=>R(e.id),variant:e.testDisable?"succes":"destructive",className:"mr-4",children:e.testDisable?"Разблокировать":"Заблокировать"}),(0,s.jsx)(d.$,{onClick:()=>A(e.id),variant:"destructive",className:"",children:(0,s.jsx)(j.A,{})})]},e.id))})})]}):(0,s.jsx)("div",{className:"relative container mx-auto flex h-full ring-black/5 max-lg:rounded-t-[2rem] my-6 py-10 shadow ring-1 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]",children:(0,s.jsx)("div",{className:"px-8 pt-8 sm:px-10 sm:pt-10",children:(0,s.jsx)("h4",{className:"mt-2 text-4xl text-center font-medium tracking-tight text-gray-950 max-lg:text-center",children:"Ошибка, данной страницы не существует"})})})}},820:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var s=a(5155),r=a(9606),i=a(2336),n=a(9602),l=a(767);a(2115);let d=e=>{let{onClick:t,className:a}=e;return(0,s.jsx)("button",{onClick:t,className:(0,n.cn)("absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer",a),children:(0,s.jsx)(l.A,{className:"h-5 w-5"})})},o=e=>{let{text:t,className:a}=e;return(0,s.jsx)("p",{className:(0,n.cn)("text-red-500 text-sm",a),children:t})},c=()=>(0,s.jsx)("span",{className:"text-red-500",children:"*"}),m=e=>{var t;let{className:a,name:n,label:l,required:m,defaultValue:u,...f}=e,{register:x,formState:{errors:g},watch:p,setValue:h}=(0,r.xW)(),v=p(n),b=null===(t=g[n])||void 0===t?void 0:t.message;return(0,s.jsxs)("div",{className:a,children:[l&&(0,s.jsxs)("p",{className:"font-medium mb-2",children:[l," ",m&&(0,s.jsx)(c,{})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(i.p,{defaultValue:u||"",className:"h-12 text-md",...x(n),...f}),v&&(0,s.jsx)(d,{onClick:()=>{h(n,"",{shouldValidate:!0})}})]}),b&&(0,s.jsx)(o,{text:b,className:"mt-2"})]})}},4923:(e,t,a)=>{"use strict";a.d(t,{Do:()=>n,IK:()=>i,X5:()=>r});var s=a(3415);let r=s.z.object({email:s.z.string().email({message:"Введите корректную почту"}),password:s.z.string().min(6,{message:"Пароль должен содержать минимум 6 символов"}).refine(e=>/[A-Z]/.test(e),{message:"Пароль должен содержать хотя бы одну заглавную букву"}).refine(e=>/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(e),{message:"Пароль должен содержать хотя бы один специальный символ"}).refine(e=>/[0-9]/.test(e),{message:"Пароль должен содержать хотя бы одну цифру"})});s.z.object({name:s.z.string()});let i=s.z.object({name:s.z.string(),category:s.z.string(),text:s.z.string()}),n=s.z.object({firstName:s.z.string().min(3,{message:"Имя пользователя должно содержать минимум 3 символа"}),lastName:s.z.string().min(3,{message:"Фамилия пользователя должна содержать минимум 3 символа"}),surName:s.z.string(),email:s.z.string().email({message:"Введите корректную почту"}),password:s.z.string().min(6,{message:"Пароль должен содержать минимум 6 символов"}).refine(e=>/[A-Z]/.test(e),{message:"Пароль должен содержать хотя бы одну заглавную букву"}).refine(e=>/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(e),{message:"Пароль должен содержать хотя бы один специальный символ"}).refine(e=>/[0-9]/.test(e),{message:"Пароль должен содержать хотя бы одну цифру"}),organisation:s.z.string(),role:s.z.string().min(1,{message:"Выберите категорию"}),startTest:s.z.string().min(1,{message:"Выберите уровень теста"})})},4085:(e,t,a)=>{"use strict";a.d(t,{$:()=>c});var s=a(5155),r=a(2115),i=a(2317),n=a(1027),l=a(9602),d=a(7594);let o=(0,n.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md active:translate-y-[1px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-500",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-primary text-primary bg-transparent hover:bg-secondary",secondary:"bg-secondary text-primary hover:bg-secondary/50",ghost:"hover:bg-secondary hover:text-secondary-foreground",link:"text-primary underline-offset-4 hover:underline",succes:"bg-green-600 text-destructive-foreground hover:bg-destructive/90"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=r.forwardRef((e,t)=>{let{className:a,variant:r,size:n,asChild:c=!1,children:m,disabled:u,loading:f,...x}=e,g=c?i.DX:"button";return(0,s.jsx)(g,{disabled:u||f,className:(0,l.cn)(o({variant:r,size:n,className:a})),ref:t,...x,children:f?(0,s.jsx)(d.A,{className:"w-5 h-5 animate-spin"}):m})});c.displayName="Button"},4839:(e,t,a)=>{"use strict";a.d(t,{C5:()=>g,MJ:()=>x,eI:()=>f,zB:()=>c});var s=a(5155),r=a(2115),i=a(2317),n=a(9606),l=a(9602),d=a(5785);let o=r.createContext({}),c=e=>{let{...t}=e;return(0,s.jsx)(o.Provider,{value:{name:t.name},children:(0,s.jsx)(n.xI,{...t})})},m=()=>{let e=r.useContext(o),t=r.useContext(u),{getFieldState:a,formState:s}=(0,n.xW)(),i=a(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:l}=t;return{id:l,name:e.name,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...i}},u=r.createContext({}),f=r.forwardRef((e,t)=>{let{className:a,...i}=e,n=r.useId();return(0,s.jsx)(u.Provider,{value:{id:n},children:(0,s.jsx)("div",{ref:t,className:(0,l.cn)("space-y-2",a),...i})})});f.displayName="FormItem",r.forwardRef((e,t)=>{let{className:a,...r}=e,{error:i,formItemId:n}=m();return(0,s.jsx)(d.J,{ref:t,className:(0,l.cn)(i&&"text-destructive",a),htmlFor:n,...r})}).displayName="FormLabel";let x=r.forwardRef((e,t)=>{let{...a}=e,{error:r,formItemId:n,formDescriptionId:l,formMessageId:d}=m();return(0,s.jsx)(i.DX,{ref:t,id:n,"aria-describedby":r?"".concat(l," ").concat(d):"".concat(l),"aria-invalid":!!r,...a})});x.displayName="FormControl",r.forwardRef((e,t)=>{let{className:a,...r}=e,{formDescriptionId:i}=m();return(0,s.jsx)("p",{ref:t,id:i,className:(0,l.cn)("text-[0.8rem] text-muted-foreground",a),...r})}).displayName="FormDescription";let g=r.forwardRef((e,t)=>{let{className:a,children:r,...i}=e,{error:n,formMessageId:d}=m(),o=n?String(null==n?void 0:n.message):r;return o?(0,s.jsx)("p",{ref:t,id:d,className:(0,l.cn)("text-[0.8rem] font-medium text-destructive",a),...i,children:o}):null});g.displayName="FormMessage"},2336:(e,t,a)=>{"use strict";a.d(t,{p:()=>n});var s=a(5155),r=a(2115),i=a(9602);let n=r.forwardRef((e,t)=>{let{className:a,type:r,...n}=e;return(0,s.jsx)("input",{type:r,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...n})});n.displayName="Input"},5785:(e,t,a)=>{"use strict";a.d(t,{J:()=>o});var s=a(5155),r=a(2115),i=a(6195),n=a(1027),l=a(9602);let d=(0,n.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),o=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.b,{ref:t,className:(0,l.cn)(d(),a),...r})});o.displayName=i.b.displayName},745:(e,t,a)=>{"use strict";a.d(t,{bq:()=>u,eb:()=>p,gC:()=>g,l6:()=>c,yv:()=>m});var s=a(5155),r=a(2115),i=a(3570),n=a(1719),l=a(1902),d=a(8867),o=a(9602);let c=i.bL;i.YJ;let m=i.WT,u=r.forwardRef((e,t)=>{let{className:a,children:r,...l}=e;return(0,s.jsxs)(i.l9,{ref:t,className:(0,o.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",a),...l,children:[r,(0,s.jsx)(i.In,{asChild:!0,children:(0,s.jsx)(n.A,{className:"h-4 w-4 opacity-50"})})]})});u.displayName=i.l9.displayName;let f=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.PP,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",a),...r,children:(0,s.jsx)(l.A,{className:"h-4 w-4"})})});f.displayName=i.PP.displayName;let x=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.wn,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",a),...r,children:(0,s.jsx)(n.A,{className:"h-4 w-4"})})});x.displayName=i.wn.displayName;let g=r.forwardRef((e,t)=>{let{className:a,children:r,position:n="popper",...l}=e;return(0,s.jsx)(i.ZL,{children:(0,s.jsxs)(i.UC,{ref:t,className:(0,o.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:n,...l,children:[(0,s.jsx)(f,{}),(0,s.jsx)(i.LM,{className:(0,o.cn)("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,s.jsx)(x,{})]})})});g.displayName=i.UC.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.JU,{ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",a),...r})}).displayName=i.JU.displayName;let p=r.forwardRef((e,t)=>{let{className:a,children:r,...n}=e;return(0,s.jsxs)(i.q7,{ref:t,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...n,children:[(0,s.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(i.VF,{children:(0,s.jsx)(d.A,{className:"h-4 w-4"})})}),(0,s.jsx)(i.p4,{children:r})]})});p.displayName=i.q7.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.wv,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",a),...r})}).displayName=i.wv.displayName},9602:(e,t,a)=>{"use strict";a.d(t,{cn:()=>i});var s=a(3463),r=a(9795);function i(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.QP)((0,s.$)(t))}},4607:(e,t,a)=>{"use strict";a.d(t,{q:()=>r});var s=a(5828);let r=(0,s.createServerReference)("0073f5af6c1f6ac2579605cfb8d6b91f63e67bd6b0",s.callServer,void 0,s.findSourceMapURL,"getUserSession")},6998:(e,t,a)=>{"use strict";a.d(t,{e:()=>r});var s=a(5828);let r=(0,s.createServerReference)("00e98ca86f23c7d86b4de2de658c5682e1cebadae0",s.callServer,void 0,s.findSourceMapURL,"getTests")}},e=>{var t=t=>e(e.s=t);e.O(0,[525,590,839,603,290,932,505,817,441,517,358],()=>t(1784)),_N_E=e.O()}]);