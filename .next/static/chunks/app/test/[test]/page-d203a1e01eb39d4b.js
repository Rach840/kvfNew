(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{7559:(e,t,i)=>{Promise.resolve().then(i.bind(i,1119))},1119:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>v});var s=i(5155),r=i(2115),a=i(6046),l=i(4085),n=i(332),o=i(5785),d=i(5828);let c=(0,d.createServerReference)("408731cf07c8e982f9311d3ace9a703ad59be64f6b",d.callServer,void 0,d.findSourceMapURL,"getTestText"),m=(0,d.createServerReference)("703a9a449c86c8428c2d238a7c448b478dc734920c",d.callServer,void 0,d.findSourceMapURL,"updateUserStartTestInfo"),u=(0,d.createServerReference)("605f79d25e0c67b910fb8c2193d5a188e16a7a6dce",d.callServer,void 0,d.findSourceMapURL,"updateUserTestInfo");var x=i(9184),f=i(5704),g=i(6854),h=i(4824);function v(){var e;let t=(0,a.usePathname)().replace("/test/",""),[i,d]=r.useState([]),[v,b]=r.useState([]),[p,y]=r.useState(!1),[w,j]=r.useState(),[N,S]=r.useState(1),[R,k]=r.useState(!0),[A,q]=r.useState(null),[L,C]=r.useState(),[F,J]=r.useState();r.useEffect(()=>{(async()=>{try{let e=await (0,x.q)();C(e),k(!0);let i=await c(t);if(j(null==i?void 0:i.name),i&&"text"in i){let e=JSON.parse(i.text);d(e),b(Array(e.length).fill(-1))}else q("Test not found or invalid data")}catch(e){console.log(e),q("Failed to load test")}finally{k(!1)}})()},[t]);let[O,T]=(0,r.useState)(0);(0,r.useEffect)(()=>{if(L){let e=JSON.parse(L.testsResult);e.length>=1&&J(e.map(e=>e.testName))}},[L]);let B=(e,t)=>{b(i=>{let s=[...i];return s[e]=t,s})},E=-1,U=async()=>{let e=0;if(-1!=(E=v.findIndex(e=>-1==e))){T(E);return}if(i.forEach((t,i)=>{t.correctAnswer===v[i]&&(e+=Number(t.questionScore))}),S(e),y(!0),L){let i=JSON.stringify([...JSON.parse(L.testsResult),{testName:w,score:e,passedDate:new Date().getTime()+""}]);console.log(new Date().getTime()),("otborochnyy-test"==t||"trenirovochnyy-test"==t||"osnovnoy-test"==t)&&await m(Number(L.id),e,new Date().getTime()+""),await u(Number(L.id),i)}else alert("ошибка!")};if((0,r.useEffect)(()=>{if(null==F?void 0:F.includes(w)){let e=JSON.parse(L.testsResult).findIndex(e=>e.testName===w);-1!==e&&S(JSON.parse(L.testsResult)[e].score)}},[F,w,L]),R)return(0,s.jsxs)("div",{className:"container mx-auto p-4",children:[(0,s.jsx)(f.A,{animation:"wave",height:60,width:"40%",style:{marginLeft:"auto",marginRight:"auto",marginBottom:6}}),(0,s.jsxs)("div",{className:"relative w-8/12 container mx-auto flex h-full ring-black/5 max-lg:rounded-t-[2rem] my-6 py-10  shadow ring-1 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] p-4",children:[(0,s.jsx)(f.A,{animation:"wave",height:180,width:"100%",style:{marginBottom:15}}),(0,s.jsx)(f.A,{animation:"wave",height:45,width:"100%",style:{marginBottom:1}}),(0,s.jsx)(f.A,{animation:"wave",height:45,width:"100%",style:{marginBottom:1}}),(0,s.jsx)(f.A,{animation:"wave",height:45,width:"100%",style:{marginBottom:1}}),(0,s.jsx)(f.A,{animation:"wave",height:45,width:"100%",style:{marginBottom:1}})]},O),(0,s.jsxs)("div",{className:"flex items-center justify-center",children:[(0,s.jsx)(f.A,{animation:"wave",height:65,width:"15%",style:{marginRight:8,marginLeft:8}}),(0,s.jsx)(f.A,{animation:"wave",height:65,width:"15%",style:{marginRight:8,marginLeft:8}}),(0,s.jsx)(f.A,{animation:"wave",height:65,width:"15%",style:{marginRight:8,marginLeft:8}})]})]});if(A)return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"relative bg-white container mx-auto flex h-full ring-black/5 max-lg:rounded-t-[2rem] my-6 py-10  shadow ring-1 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]",children:[(0,s.jsx)("div",{className:"px-8 pt-8 sm:px-10 sm:pt-10",children:(0,s.jsx)("h4",{className:"mt-2 text-4xl text-center font-medium tracking-tight text-gray-950 max-lg:text-center",children:"Ошибка, вы не авторизованы"})}),(0,s.jsxs)("div",{className:"flex flex-1 justify-center mt-10 px-10 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-12",children:[(0,s.jsx)("a",{href:"/login",className:"duration-300 mr-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Войти"}),(0,s.jsx)("a",{href:"/register",className:"duration-300 mr-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Зарегистрироваться"})]})]})});if(0===i.length)return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"relative container mx-auto flex h-full ring-black/5 max-lg:rounded-t-[2rem] my-6 py-10  shadow ring-1 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]",children:[(0,s.jsx)("div",{className:"px-8 pt-8 sm:px-10 sm:pt-10",children:(0,s.jsx)("h4",{className:"mt-2 text-4xl text-center font-medium tracking-tight text-gray-950 max-lg:text-center",children:"Такого теста нету"})}),(0,s.jsxs)("div",{className:"flex flex-1 justify-center mt-10 px-10 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-12",children:[(0,s.jsx)("a",{href:"/login",className:"duration-300 mr-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Войти"}),(0,s.jsx)("a",{href:"/register",className:"duration-300 mr-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Зарегистрироваться"})]})]})});if((null==F?void 0:F.includes(w))||p){let e=N/i.map(e=>Number(e.questionScore)).reduce((e,t)=>e+t,0)*100;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"relative w-full lg:w-8/12 container mx-auto flex h-full ring-black/5 max-lg:rounded-t-[2rem] my-6 py-10  shadow ring-1 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] p-4",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold mb-4 text-center",children:"Поздравляем!"}),(0,s.jsx)(g.A,{className:"mx-auto my-6",size:300,value:e,variant:"determinate"}),(0,s.jsxs)("h4",{className:"text-2xl font-bold mb-4 text-center",children:["Вы решили тест на ","".concat(Math.round(e),"%")]})]})})}return L?(0,s.jsxs)("div",{className:"container mx-auto p-4",children:[(0,s.jsxs)("h1",{className:"text-3xl font-bold mb-4 text-center",children:[w," "]}),-1!=E?(0,s.jsx)(h.A,{severity:"error",children:"Вы полностью не заполнили ответы!."}):(0,s.jsx)(s.Fragment,{}),(0,s.jsxs)("div",{className:"relative w-full lg:w-8/12 bg-white container mx-auto flex h-full ring-black/5 max-lg:rounded-t-[2rem] my-6 py-10  shadow ring-1 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] p-4",children:[(0,s.jsxs)("h2",{className:"text-xl font-semibold mb-2",children:["Вопрос ",O+1,":"," ",i[O].question]}),""==i[O].image?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)("img",{src:i[O].image,className:"mb-4"}),(0,s.jsx)(n.z,{value:(null===(e=v[O])||void 0===e?void 0:e.toString())||"",onValueChange:e=>B(O,parseInt(e)),children:i[O].options.map((e,t)=>(0,s.jsxs)("div",{className:"flex my-2 items-center space-x-2",children:[(0,s.jsx)(n.C,{value:t.toString(),id:"q".concat(O,"-o").concat(t)}),(0,s.jsx)(o.J,{className:"text-lg ",htmlFor:"q".concat(O,"-o").concat(t),children:e})]},t))})]},O),(0,s.jsxs)("div",{className:"flex flex-wrap items-center justify-center",children:[(0,s.jsx)(l.$,{onClick:function(){0<O&&T(O-1)},className:" mt-4",children:"Предыдущий вопрос"}),(0,s.jsx)(l.$,{variant:"destructive",onClick:U,className:"mx-3 mt-4",children:"Завершить тест"}),(0,s.jsx)(l.$,{onClick:function(){O+1<i.length&&T(O+1)},className:"mt-4",children:"Следущий вопрос"})]})]}):(0,s.jsxs)("div",{className:"relative container mx-auto flex h-full ring-black/5 max-lg:rounded-t-[2rem] my-6 py-10  shadow ring-1 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]",children:[(0,s.jsx)("div",{className:"px-8 pt-8 sm:px-10 sm:pt-10",children:(0,s.jsx)("h4",{className:"mt-2 text-4xl text-center font-medium tracking-tight text-gray-950 max-lg:text-center",children:"Войдите или зарегистрируйтесь чтобы пройти тестирование"})}),(0,s.jsxs)("div",{className:"flex flex-1 justify-center mt-10 px-10 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-12",children:[(0,s.jsx)("a",{href:"/login",className:"duration-300 mr-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Войти"}),(0,s.jsx)("a",{href:"/register",className:"duration-300 mr-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Зарегистрироваться"})]})]})}},4085:(e,t,i)=>{"use strict";i.d(t,{$:()=>c});var s=i(5155),r=i(2115),a=i(2317),l=i(1027),n=i(9602),o=i(7594);let d=(0,l.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md active:translate-y-[1px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-500",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-primary text-primary bg-transparent hover:bg-secondary",secondary:"bg-secondary text-primary hover:bg-secondary/50",ghost:"hover:bg-secondary hover:text-secondary-foreground",link:"text-primary underline-offset-4 hover:underline",succes:"bg-green-600 text-destructive-foreground hover:bg-destructive/90"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=r.forwardRef((e,t)=>{let{className:i,variant:r,size:l,asChild:c=!1,children:m,disabled:u,loading:x,...f}=e,g=c?a.DX:"button";return(0,s.jsx)(g,{disabled:u||x,className:(0,n.cn)(d({variant:r,size:l,className:i})),ref:t,...f,children:x?(0,s.jsx)(o.A,{className:"w-5 h-5 animate-spin"}):m})});c.displayName="Button"},5785:(e,t,i)=>{"use strict";i.d(t,{J:()=>d});var s=i(5155),r=i(2115),a=i(6195),l=i(1027),n=i(9602);let o=(0,l.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,s.jsx)(a.b,{ref:t,className:(0,n.cn)(o(),i),...r})});d.displayName=a.b.displayName},332:(e,t,i)=>{"use strict";i.d(t,{C:()=>d,z:()=>o});var s=i(5155),r=i(2115),a=i(7539),l=i(3565),n=i(9602);let o=r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,s.jsx)(a.bL,{className:(0,n.cn)("grid gap-2",i),...r,ref:t})});o.displayName=a.bL.displayName;let d=r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,s.jsx)(a.q7,{ref:t,className:(0,n.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",i),...r,children:(0,s.jsx)(a.C1,{className:"flex  items-center justify-center",children:(0,s.jsx)(l.A,{className:"h-3.5 w-3.5 fill-primary"})})})});d.displayName=a.q7.displayName},9602:(e,t,i)=>{"use strict";i.d(t,{cn:()=>a});var s=i(3463),r=i(9795);function a(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,r.QP)((0,s.$)(t))}},9184:(e,t,i)=>{"use strict";i.d(t,{q:()=>r});var s=i(5828);let r=(0,s.createServerReference)("0081125577be63c17571a5c16c4a7d7178f760e168",s.callServer,void 0,s.findSourceMapURL,"getUserSession")}},e=>{var t=t=>e(e.s=t);e.O(0,[525,590,603,824,470,947,441,517,358],()=>t(7559)),_N_E=e.O()}]);