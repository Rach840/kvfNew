(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[454],{8550:(e,s,t)=>{Promise.resolve().then(t.bind(t,2408))},2408:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>p});var a=t(5155);t(2115);var r=t(9606),l=t(2679),i=t(5828);let n=(0,i.createServerReference)("4061cc99d9d7f2dcc417745d58bdfe3781928bafb2",i.callServer,void 0,i.findSourceMapURL,"registerUser");var d=t(4923),o=t(820),m=t(4085),c=t(2615),u=t(6046),x=t(745),f=t(7220);let g=e=>{let{}=e,s=(0,u.useRouter)(),t=(0,r.mN)({resolver:(0,l.u)(d.Do),defaultValues:{firstName:"",lastName:"",surName:"",email:"",password:"",startTest:"",organisation:"",role:""}}),i=async e=>{console.log(e);let t=await n({firstName:e.firstName,lastName:e.lastName,surName:e.surName?e.surName:"",email:e.email,password:e.password,startTest:e.startTest,organisation:e.organisation?e.organisation:"",role:e.role,okAnswers:0,testsResult:"[]"});console.log({result:t});try{t.success&&(0,c.signIn)("credentials",{email:e.email,password:e.password,redirect:!1}).then(()=>s.push("/"))}catch(e){console.log(e)}};return(0,a.jsx)(r.Op,{...t,children:(0,a.jsx)("form",{className:"flex border-x-2 container mx-auto px-10 bg-white border-y-2 rounded-lg   border-gray-900/10 pb-12 flex-col ",onSubmit:t.handleSubmit(i),children:(0,a.jsx)("div",{className:" container   mx-auto",children:(0,a.jsxs)("div",{className:" my-4 py-10 ",children:[(0,a.jsx)("h2",{className:" text-3xl font-semibold text-gray-900",children:"Регистрация"}),(0,a.jsx)("p",{className:"mt-1 text-sm/6 text-gray-600",children:"Зарегистрируетесь для доступа к тестам"}),(0,a.jsxs)("div",{className:"flex flex-col-reverse justify-center lg:flex-row",children:[(0,a.jsxs)("div",{className:"mt-10 w-full lg:w-9/12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,a.jsxs)("div",{className:"sm:col-span-2",children:[(0,a.jsx)("label",{htmlFor:"first-name",className:"block text-sm/6 font-medium text-gray-900"}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)(o.Z,{name:"firstName",label:"Имя",required:!0})})]}),(0,a.jsxs)("div",{className:"sm:col-span-2",children:[(0,a.jsx)("label",{htmlFor:"last-name",className:"block text-sm/6 font-medium text-gray-900"}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)(o.Z,{name:"lastName",label:"Фамилия",required:!0})})]}),(0,a.jsxs)("div",{className:"sm:col-span-2",children:[(0,a.jsx)("label",{htmlFor:"sur-name",className:"block text-sm/6 font-medium text-gray-900"}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)(o.Z,{name:"surName",label:"Отчество",required:!0})})]}),(0,a.jsxs)("div",{className:"sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm/6 font-medium text-gray-900"}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)(o.Z,{name:"email",label:"Адрес электронной почты",required:!0})})]}),(0,a.jsxs)("div",{className:"sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm/6 font-medium text-gray-900"}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)(o.Z,{name:"password",label:"Пароль",type:"password",required:!0})})]}),(0,a.jsxs)("div",{className:"sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"country",className:"block text-sm/6 font-medium text-gray-900",children:"Категория"}),(0,a.jsx)("div",{className:"mt-2 grid grid-cols-1",children:(0,a.jsx)(f.zB,{control:t.control,name:"role",render:e=>{let{field:s}=e;return(0,a.jsxs)(f.eI,{children:[(0,a.jsxs)(x.l6,{onValueChange:s.onChange,defaultValue:s.value,children:[(0,a.jsx)(f.MJ,{children:(0,a.jsx)(x.bq,{children:(0,a.jsx)(x.yv,{})})}),(0,a.jsxs)(x.gC,{children:[(0,a.jsx)(x.eb,{value:"STUDENT",children:"Студент"}),(0,a.jsx)(x.eb,{value:"SCHOOLBOY",children:"Школьник"}),(0,a.jsx)(x.eb,{value:"SPECIALIST",children:"Специалист"})]})]}),(0,a.jsx)(f.C5,{className:"text-red-500 text-sm mt-1"})]})}})}),(0,a.jsxs)("div",{className:"sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"country",className:"block text-sm/6 font-medium text-gray-900",children:"Категория начального теста"}),(0,a.jsx)("div",{className:"mt-2 grid grid-cols-1",children:(0,a.jsx)(f.zB,{control:t.control,name:"startTest",render:e=>{let{field:s}=e;return(0,a.jsxs)(f.eI,{children:[(0,a.jsxs)(x.l6,{onValueChange:s.onChange,defaultValue:s.value,children:[(0,a.jsx)(f.MJ,{children:(0,a.jsx)(x.bq,{children:(0,a.jsx)(x.yv,{})})}),(0,a.jsxs)(x.gC,{children:[(0,a.jsx)(x.eb,{value:"TRAINING",children:"Тренировочный"}),(0,a.jsx)(x.eb,{value:"QUALIFYING",children:"Отборочный"}),(0,a.jsx)(x.eb,{value:"BASIC",children:"Основной"})]})]}),(0,a.jsx)(f.C5,{className:"text-red-500 text-sm mt-1"})]})}})})]})]}),(0,a.jsxs)("div",{className:"sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"organisation",className:"block text-sm/6 font-medium text-gray-900"}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)(o.Z,{name:"organisation",label:"Организация",required:!0})})]}),(0,a.jsx)(m.$,{loading:t.formState.isSubmitting,variant:"secondary",className:"duration-300 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",type:"submit",children:"Зарегистрироваться"})]}),(0,a.jsx)("img",{src:"../registr.png",className:"mx-auto mt-10 h-1/4 w-2/12"})]})]})})})})};function p(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(g,{})})}},820:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var a=t(5155),r=t(9606),l=t(2336),i=t(9602),n=t(767);t(2115);let d=e=>{let{onClick:s,className:t}=e;return(0,a.jsx)("button",{onClick:s,className:(0,i.cn)("absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer",t),children:(0,a.jsx)(n.A,{className:"h-5 w-5"})})},o=e=>{let{text:s,className:t}=e;return(0,a.jsx)("p",{className:(0,i.cn)("text-red-500 text-sm",t),children:s})},m=()=>(0,a.jsx)("span",{className:"text-red-500",children:"*"}),c=e=>{var s;let{className:t,name:i,label:n,required:c,defaultValue:u,...x}=e,{register:f,formState:{errors:g},watch:p,setValue:h}=(0,r.xW)(),b=p(i),j=null===(s=g[i])||void 0===s?void 0:s.message;return(0,a.jsxs)("div",{className:t,children:[n&&(0,a.jsxs)("p",{className:"font-medium mb-2",children:[n," ",c&&(0,a.jsx)(m,{})]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(l.p,{defaultValue:u||"",className:"h-12 text-md",...f(i),...x}),b&&(0,a.jsx)(d,{onClick:()=>{h(i,"",{shouldValidate:!0})}})]}),j&&(0,a.jsx)(o,{text:j,className:"mt-2"})]})}},4923:(e,s,t)=>{"use strict";t.d(s,{Do:()=>i,IK:()=>l,X5:()=>r});var a=t(3415);let r=a.z.object({email:a.z.string().email({message:"Введите корректную почту"}),password:a.z.string().min(6,{message:"Пароль должен содержать минимум 6 символов"}).refine(e=>/[A-Z]/.test(e),{message:"Пароль должен содержать хотя бы одну заглавную букву"}).refine(e=>/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(e),{message:"Пароль должен содержать хотя бы один специальный символ"}).refine(e=>/[0-9]/.test(e),{message:"Пароль должен содержать хотя бы одну цифру"})});a.z.object({name:a.z.string()});let l=a.z.object({name:a.z.string(),category:a.z.string(),text:a.z.string()}),i=a.z.object({firstName:a.z.string().min(3,{message:"Имя пользователя должно содержать минимум 3 символа"}),lastName:a.z.string().min(3,{message:"Фамилия пользователя должна содержать минимум 3 символа"}),surName:a.z.string(),email:a.z.string().email({message:"Введите корректную почту"}),password:a.z.string().min(6,{message:"Пароль должен содержать минимум 6 символов"}).refine(e=>/[A-Z]/.test(e),{message:"Пароль должен содержать хотя бы одну заглавную букву"}).refine(e=>/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(e),{message:"Пароль должен содержать хотя бы один специальный символ"}).refine(e=>/[0-9]/.test(e),{message:"Пароль должен содержать хотя бы одну цифру"}),organisation:a.z.string(),role:a.z.string().min(1,{message:"Выберите категорию"}),startTest:a.z.string().min(1,{message:"Выберите уровень теста"})})},4085:(e,s,t)=>{"use strict";t.d(s,{$:()=>m});var a=t(5155),r=t(2115),l=t(2317),i=t(1027),n=t(9602),d=t(7594);let o=(0,i.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md active:translate-y-[1px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-500",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-primary text-primary bg-transparent hover:bg-secondary",secondary:"bg-secondary text-primary hover:bg-secondary/50",ghost:"hover:bg-secondary hover:text-secondary-foreground",link:"text-primary underline-offset-4 hover:underline",succes:"bg-green-600 text-destructive-foreground hover:bg-destructive/90"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),m=r.forwardRef((e,s)=>{let{className:t,variant:r,size:i,asChild:m=!1,children:c,disabled:u,loading:x,...f}=e,g=m?l.DX:"button";return(0,a.jsx)(g,{disabled:u||x,className:(0,n.cn)(o({variant:r,size:i,className:t})),ref:s,...f,children:x?(0,a.jsx)(d.A,{className:"w-5 h-5 animate-spin"}):c})});m.displayName="Button"},7220:(e,s,t)=>{"use strict";t.d(s,{C5:()=>g,MJ:()=>f,eI:()=>x,zB:()=>m});var a=t(5155),r=t(2115),l=t(2317),i=t(9606),n=t(9602),d=t(5785);let o=r.createContext({}),m=e=>{let{...s}=e;return(0,a.jsx)(o.Provider,{value:{name:s.name},children:(0,a.jsx)(i.xI,{...s})})},c=()=>{let e=r.useContext(o),s=r.useContext(u),{getFieldState:t,formState:a}=(0,i.xW)(),l=t(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:n}=s;return{id:n,name:e.name,formItemId:"".concat(n,"-form-item"),formDescriptionId:"".concat(n,"-form-item-description"),formMessageId:"".concat(n,"-form-item-message"),...l}},u=r.createContext({}),x=r.forwardRef((e,s)=>{let{className:t,...l}=e,i=r.useId();return(0,a.jsx)(u.Provider,{value:{id:i},children:(0,a.jsx)("div",{ref:s,className:(0,n.cn)("space-y-2",t),...l})})});x.displayName="FormItem",r.forwardRef((e,s)=>{let{className:t,...r}=e,{error:l,formItemId:i}=c();return(0,a.jsx)(d.J,{ref:s,className:(0,n.cn)(l&&"text-destructive",t),htmlFor:i,...r})}).displayName="FormLabel";let f=r.forwardRef((e,s)=>{let{...t}=e,{error:r,formItemId:i,formDescriptionId:n,formMessageId:d}=c();return(0,a.jsx)(l.DX,{ref:s,id:i,"aria-describedby":r?"".concat(n," ").concat(d):"".concat(n),"aria-invalid":!!r,...t})});f.displayName="FormControl",r.forwardRef((e,s)=>{let{className:t,...r}=e,{formDescriptionId:l}=c();return(0,a.jsx)("p",{ref:s,id:l,className:(0,n.cn)("text-[0.8rem] text-muted-foreground",t),...r})}).displayName="FormDescription";let g=r.forwardRef((e,s)=>{let{className:t,children:r,...l}=e,{error:i,formMessageId:d}=c(),o=i?String(null==i?void 0:i.message):r;return o?(0,a.jsx)("p",{ref:s,id:d,className:(0,n.cn)("text-[0.8rem] font-medium text-destructive",t),...l,children:o}):null});g.displayName="FormMessage"},2336:(e,s,t)=>{"use strict";t.d(s,{p:()=>i});var a=t(5155),r=t(2115),l=t(9602);let i=r.forwardRef((e,s)=>{let{className:t,type:r,...i}=e;return(0,a.jsx)("input",{type:r,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:s,...i})});i.displayName="Input"},5785:(e,s,t)=>{"use strict";t.d(s,{J:()=>o});var a=t(5155),r=t(2115),l=t(6195),i=t(1027),n=t(9602);let d=(0,i.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),o=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)(l.b,{ref:s,className:(0,n.cn)(d(),t),...r})});o.displayName=l.b.displayName},745:(e,s,t)=>{"use strict";t.d(s,{bq:()=>u,eb:()=>p,gC:()=>g,l6:()=>m,yv:()=>c});var a=t(5155),r=t(2115),l=t(3570),i=t(1719),n=t(1902),d=t(8867),o=t(9602);let m=l.bL;l.YJ;let c=l.WT,u=r.forwardRef((e,s)=>{let{className:t,children:r,...n}=e;return(0,a.jsxs)(l.l9,{ref:s,className:(0,o.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...n,children:[r,(0,a.jsx)(l.In,{asChild:!0,children:(0,a.jsx)(i.A,{className:"h-4 w-4 opacity-50"})})]})});u.displayName=l.l9.displayName;let x=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)(l.PP,{ref:s,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",t),...r,children:(0,a.jsx)(n.A,{className:"h-4 w-4"})})});x.displayName=l.PP.displayName;let f=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)(l.wn,{ref:s,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",t),...r,children:(0,a.jsx)(i.A,{className:"h-4 w-4"})})});f.displayName=l.wn.displayName;let g=r.forwardRef((e,s)=>{let{className:t,children:r,position:i="popper",...n}=e;return(0,a.jsx)(l.ZL,{children:(0,a.jsxs)(l.UC,{ref:s,className:(0,o.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===i&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:i,...n,children:[(0,a.jsx)(x,{}),(0,a.jsx)(l.LM,{className:(0,o.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,a.jsx)(f,{})]})})});g.displayName=l.UC.displayName,r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)(l.JU,{ref:s,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",t),...r})}).displayName=l.JU.displayName;let p=r.forwardRef((e,s)=>{let{className:t,children:r,...i}=e;return(0,a.jsxs)(l.q7,{ref:s,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...i,children:[(0,a.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(l.VF,{children:(0,a.jsx)(d.A,{className:"h-4 w-4"})})}),(0,a.jsx)(l.p4,{children:r})]})});p.displayName=l.q7.displayName,r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)(l.wv,{ref:s,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",t),...r})}).displayName=l.wv.displayName},9602:(e,s,t)=>{"use strict";t.d(s,{cn:()=>l});var a=t(3463),r=t(9795);function l(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return(0,r.QP)((0,a.$)(s))}}},e=>{var s=s=>e(e.s=s);e.O(0,[525,603,290,932,60,505,441,517,358],()=>s(8550)),_N_E=e.O()}]);