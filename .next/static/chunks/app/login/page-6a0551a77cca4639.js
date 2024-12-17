(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[139],{7654:(e,s,t)=>{Promise.resolve().then(t.bind(t,8630))},8630:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>f});var r=t(5155),i=t(2115),a=t(9606),n=t(4923),o=t(2679),l=t(820),d=t(4085),m=t(2615),c=t(6046),u=t(4824);let g=e=>{let{}=e,s=(0,c.useRouter)(),[t,g]=(0,i.useState)(!1),f=(0,a.mN)({resolver:(0,o.u)(n.X5),defaultValues:{email:"",password:""}}),x=async e=>{try{let t=await (0,m.signIn)("credentials",{...e,redirect:!1});if(!(null==t?void 0:t.ok))throw Error();s.push("/")}catch(e){console.log(e),g(!0)}};return(0,r.jsx)(a.Op,{...f,children:(0,r.jsxs)("form",{className:" bg-white container  mx-auto w-2/5 border-x-2 border-y-2 rounded-lg my-10 py-10 px-10 mx-auto  border-gray-900/10 pb-12  ",onSubmit:f.handleSubmit(x),children:[(0,r.jsx)("h2",{className:" text-3xl font-semibold text-gray-900",children:"Авторизация"}),(0,r.jsx)("p",{className:"mt-1 text-lg text-gray-600",children:"Авторизируйся для доступа к тестам"}),t?(0,r.jsx)(u.A,{severity:"error",children:"Такого пользователя не существует!."}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("div",{className:"mt-10 ",children:(0,r.jsxs)("div",{className:"mx-auto",children:[(0,r.jsx)("label",{htmlFor:"first-name",className:"block text-sm/6 font-medium text-gray-900"}),(0,r.jsx)(l.Z,{name:"email",label:"E-Mail",required:!0}),(0,r.jsx)(l.Z,{name:"password",label:"Пароль",type:"password",required:!0}),(0,r.jsx)(d.$,{loading:f.formState.isSubmitting,className:"  duration-300  rounded-md bg-indigo-600 px-5 py-6 text-lg my-4 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",type:"submit",children:"Войти"})]})})]})})};function f(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(g,{})})}},820:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var r=t(5155),i=t(9606),a=t(2336),n=t(9602),o=t(767);t(2115);let l=e=>{let{onClick:s,className:t}=e;return(0,r.jsx)("button",{onClick:s,className:(0,n.cn)("absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer",t),children:(0,r.jsx)(o.A,{className:"h-5 w-5"})})},d=e=>{let{text:s,className:t}=e;return(0,r.jsx)("p",{className:(0,n.cn)("text-red-500 text-sm",t),children:s})},m=()=>(0,r.jsx)("span",{className:"text-red-500",children:"*"}),c=e=>{var s;let{className:t,name:n,label:o,required:c,defaultValue:u,...g}=e,{register:f,formState:{errors:x},watch:b,setValue:p}=(0,i.xW)(),h=b(n),v=null===(s=x[n])||void 0===s?void 0:s.message;return(0,r.jsxs)("div",{className:t,children:[o&&(0,r.jsxs)("p",{className:"font-medium mb-2",children:[o," ",c&&(0,r.jsx)(m,{})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(a.p,{defaultValue:u||"",className:"h-12 text-md",...f(n),...g}),h&&(0,r.jsx)(l,{onClick:()=>{p(n,"",{shouldValidate:!0})}})]}),v&&(0,r.jsx)(d,{text:v,className:"mt-2"})]})}},4923:(e,s,t)=>{"use strict";t.d(s,{Do:()=>n,IK:()=>a,X5:()=>i});var r=t(3415);let i=r.z.object({email:r.z.string().email({message:"Введите корректную почту"}),password:r.z.string().min(6,{message:"Пароль должен содержать минимум 6 символов"}).refine(e=>/[A-Z]/.test(e),{message:"Пароль должен содержать хотя бы одну заглавную букву"}).refine(e=>/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(e),{message:"Пароль должен содержать хотя бы один специальный символ"}).refine(e=>/[0-9]/.test(e),{message:"Пароль должен содержать хотя бы одну цифру"})});r.z.object({name:r.z.string()});let a=r.z.object({name:r.z.string(),category:r.z.string(),text:r.z.string()}),n=r.z.object({firstName:r.z.string().min(3,{message:"Имя пользователя должно содержать минимум 3 символа"}),lastName:r.z.string().min(3,{message:"Фамилия пользователя должна содержать минимум 3 символа"}),surName:r.z.string(),email:r.z.string().email({message:"Введите корректную почту"}),password:r.z.string().min(6,{message:"Пароль должен содержать минимум 6 символов"}).refine(e=>/[A-Z]/.test(e),{message:"Пароль должен содержать хотя бы одну заглавную букву"}).refine(e=>/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(e),{message:"Пароль должен содержать хотя бы один специальный символ"}).refine(e=>/[0-9]/.test(e),{message:"Пароль должен содержать хотя бы одну цифру"}),organisation:r.z.string(),role:r.z.string().min(1,{message:"Выберите категорию"}),startTest:r.z.string().min(1,{message:"Выберите уровень теста"})})},4085:(e,s,t)=>{"use strict";t.d(s,{$:()=>m});var r=t(5155),i=t(2115),a=t(2317),n=t(1027),o=t(9602),l=t(7594);let d=(0,n.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md active:translate-y-[1px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-500",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-primary text-primary bg-transparent hover:bg-secondary",secondary:"bg-secondary text-primary hover:bg-secondary/50",ghost:"hover:bg-secondary hover:text-secondary-foreground",link:"text-primary underline-offset-4 hover:underline",succes:"bg-green-600 text-destructive-foreground hover:bg-destructive/90"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),m=i.forwardRef((e,s)=>{let{className:t,variant:i,size:n,asChild:m=!1,children:c,disabled:u,loading:g,...f}=e,x=m?a.DX:"button";return(0,r.jsx)(x,{disabled:u||g,className:(0,o.cn)(d({variant:i,size:n,className:t})),ref:s,...f,children:g?(0,r.jsx)(l.A,{className:"w-5 h-5 animate-spin"}):c})});m.displayName="Button"},2336:(e,s,t)=>{"use strict";t.d(s,{p:()=>n});var r=t(5155),i=t(2115),a=t(9602);let n=i.forwardRef((e,s)=>{let{className:t,type:i,...n}=e;return(0,r.jsx)("input",{type:i,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:s,...n})});n.displayName="Input"},9602:(e,s,t)=>{"use strict";t.d(s,{cn:()=>a});var r=t(3463),i=t(9795);function a(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return(0,i.QP)((0,r.$)(s))}}},e=>{var s=s=>e(e.s=s);e.O(0,[525,590,290,60,845,441,517,358],()=>s(7654)),_N_E=e.O()}]);