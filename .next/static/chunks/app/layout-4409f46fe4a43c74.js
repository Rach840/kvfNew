(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1196:(e,s,a)=>{Promise.resolve().then(a.bind(a,3335)),Promise.resolve().then(a.t.bind(a,4415,23)),Promise.resolve().then(a.t.bind(a,2494,23)),Promise.resolve().then(a.t.bind(a,9324,23))},3335:(e,s,a)=>{"use strict";a.d(s,{Providers:()=>p});var r=a(5155),l=a(2115),t=a(2615),i=a(4607);let n=l.createContext(void 0);function c(e){let[s,a]=l.useState();return l.useEffect(()=>{(async()=>{let e=await (0,i.q)();e&&a({id:e.id,firstName:e.firstName,lastName:e.lastName,role:e.role})})()},[]),(0,r.jsx)(n.Provider,{value:s,children:e.children})}var d=a(7083),m=a(425),o=a(4505),h=a(5062),x=a(6046);function u(){let e=(0,x.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(h.W1,{as:"div",className:"  relative ml-3",children:[(0,r.jsx)("div",{children:(0,r.jsxs)(h.IU,{className:" relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",children:[(0,r.jsx)("span",{className:"absolute -inset-1.5"}),(0,r.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,r.jsx)("img",{alt:"",src:"../acc-icon.png",className:"size-14 rounded-full"})]})}),(0,r.jsxs)(h.c,{transition:!0,className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in",children:[(0,r.jsx)(h.Dr,{children:(0,r.jsx)("a",{href:"/profile",className:"block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none",children:"Профиль"})}),(0,r.jsx)(h.Dr,{children:(0,r.jsx)("a",{onClick:()=>{e.push("../"),(0,t.signOut)()},className:"block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none",children:"Выйти"})})]})]})})}var f=a(7396),g=a(9602);let j=e=>{let{children:s}=e,{data:a,status:l}=(0,t.useSession)(),i=(0,x.usePathname)(),n=(0,x.useRouter)(),c=i;"/"==i&&(c="home");let h=[{name:"Главная",href:"home",current:!0},{name:"Тест",href:"/test",current:!1},{name:"Создание тестов",href:"/create-test",current:!1},{name:"Пользователи",href:"/users",current:!1}],j=[{name:"Главная",href:"home",current:!0},{name:"Тест",href:"/test",current:!1}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"min-h-full relative  mx-auto flexh-full ring-black/5   shadow ring-1     ",children:(0,r.jsxs)(d.EN,{as:"nav",className:"bg-white  ",children:[(0,r.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex h-24 items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"shrink-0",children:(0,r.jsx)("img",{onClick:()=>n.replace("/"),alt:"КВФ",src:".././logo.png",className:"size-20 w-32"})}),(0,r.jsx)("div",{className:"hidden md:block",children:(0,r.jsx)("div",{className:"ml-10 flex items-baseline space-x-4",children:"loading"==l?null==j?void 0:j.map(e=>(0,r.jsx)(f.default,{href:e.href.includes("home")?"/":e.href,className:(0,g.cn)("rounded-md px-3 py-3 text-lg font-medium duration-300",c.includes(e.href)?"bg-slate-300 text-zinc-950":"text-zinc-950 hover:bg-slate-300 hover:text-white"),children:e.name},e.name)):(null==a?void 0:a.user.role)=="ADMIN"?null==h?void 0:h.map(e=>(0,r.jsx)(f.default,{href:e.href.includes("home")?"/":e.href,className:(0,g.cn)("rounded-md px-3 py-3 text-lg font-medium duration-300",c.includes(e.href)?"bg-slate-300 text-zinc-950":"text-zinc-950 hover:bg-slate-300 hover:text-white"),children:e.name},e.name)):null==j?void 0:j.map(e=>(0,r.jsx)(f.default,{href:e.href.includes("home")?"/":e.href,className:(0,g.cn)("rounded-md px-3 py-3 text-lg font-medium duration-300",c.includes(e.href)?"bg-slate-300 text-zinc-950":"text-zinc-950 hover:bg-slate-300 hover:text-white"),children:e.name},e.name))})})]}),(0,r.jsx)("div",{className:"hidden md:block",children:(0,r.jsx)("div",{className:"ml-4 flex items-center md:ml-6",children:"loading"==l?(0,r.jsx)(o.A,{className:"animate-spin"}):"authenticated"==l?(0,r.jsxs)(r.Fragment,{children:[a.user.name,(0,r.jsx)(u,{})]}):(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(m.$,{onClick:()=>n.replace("/login"),className:"text-zinc-950 hover:bg-slate-300 hover:text-white rounded-md px-3 py-3 text-lg font-medium duration-300 mr-3",children:"Войти"},"Войти"),(0,r.jsx)(m.$,{onClick:()=>n.replace("/register"),className:"text-zinc-950 hover:bg-slate-300 hover:text-white rounded-md px-3 py-3 text-lg font-medium duration-300",children:"Регистрация"},"Регистрация")]})})}),(0,r.jsx)("div",{className:"-mr-2 flex md:hidden",children:(0,r.jsxs)(d._q,{className:"group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",children:[(0,r.jsx)("span",{className:"absolute -inset-0.5"}),(0,r.jsx)("span",{className:"sr-only",children:"Открыть меню"})]})})]})}),(0,r.jsxs)(d.kS,{className:"md:hidden",children:[(0,r.jsx)("div",{className:"space-y-1 px-2 pb-3 pt-2 sm:px-3",children:(0,r.jsx)(d._q,{as:"a",href:"#",className:"block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white",children:"Ваш профиль"},"Ваш профиль")}),(0,r.jsxs)("div",{className:"border-t border-gray-700 pb-3 pt-4",children:[(0,r.jsxs)("div",{className:"flex items-center px-5",children:[(0,r.jsx)("div",{className:"shrink-0",children:(0,r.jsx)("img",{alt:"",src:"../acc-icon.png",className:"size-10 rounded-full"})}),(0,r.jsxs)("div",{className:"ml-3",children:[(0,r.jsx)("div",{className:"text-base/5 font-medium text-white"}),(0,r.jsx)("div",{className:"text-sm font-medium text-gray-400"})]})]}),(0,r.jsx)("div",{className:"mt-3 space-y-1 px-2",children:(0,r.jsx)(d._q,{as:"a",href:"#",className:"block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white",children:"Ваш профиль"},"Ваш профиль")})]})]})]})}),s]})};function v(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.EN,{as:"footer",className:" relative  mx-auto flexh-full ring-black/5   shadow ring-1  bg-white",children:(0,r.jsx)("div",{className:"mx-auto max-w-7xl px-4 p-3 sm:px-6 lg:px-8",children:(0,r.jsx)("div",{className:"flex h-24 items-center justify-between",children:(0,r.jsxs)("div",{className:"flex justify-between w-full items-center",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"shrink-0 mr-4",children:(0,r.jsx)("img",{onClick:()=>router.replace("/"),alt:"КВФ",src:".././logo.png",className:"size-20 w-32"})}),(0,r.jsx)("h2",{className:"text-balance text-lg  font-semibold tracking-tight text-gray-900 sm:text-lg",children:"Клуб веселых финансистов"})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("a",{className:"mr-4",href:"https://telegram.org",children:(0,r.jsx)("img",{alt:"",src:".././Telegram_Logo.svg",className:"inline-block hover:scale-125 duration-150 size-10 mr-5 rounded-full ring-2 ring-white"})}),(0,r.jsx)("a",{className:"mr-4",href:"https://www.whatsapp.com/?lang=ru_RU",children:(0,r.jsx)("img",{alt:"",src:".././whatsapp.png",className:"inline-block hover:scale-125 duration-150 size-10 mr-5 rounded-full ring-2 ring-white"})}),(0,r.jsx)("a",{className:"mr-4",href:"https://www.whatsapp.com/?lang=ru_RU",children:(0,r.jsx)("img",{alt:"",src:".././VK_Logo.svg",className:"inline-block hover:scale-125 duration-150 size-10 mr-5 rounded-full ring-2 ring-white"})}),(0,r.jsx)("a",{className:"mr-4",href:"https://www.tiktok.com/",children:(0,r.jsx)("img",{alt:"",src:".././tiktok.png",className:"inline-block hover:scale-125 duration-150 size-10 mr-5 rounded-full ring-2 ring-white"})})]}),(0,r.jsx)("div",{className:"block",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:" marker:text-black list-disc pl-1",children:"Адрес: 127644, г. Москва, ул. Лобненская, д. 21, помещ. IV, к. 3"}),(0,r.jsx)("li",{className:"marker:text-black list-disc pl-1",children:"Эл. почта: ano.asi.nko@yandex.ru"}),(0,r.jsx)("li",{className:"marker:text-black list-disc pl-1",children:" +7(932)248-53-09"})]})})]})})})})})}let p=e=>{let{children:s}=e;return(0,r.jsx)(t.SessionProvider,{children:(0,r.jsxs)(c,{children:[(0,r.jsx)(j,{children:(0,r.jsx)("main",{style:{backgroundColor:"#FEFCF1"},className:"py-10 min-h-lvh flex-1",children:s})}),(0,r.jsx)(v,{})]})})}},9602:(e,s,a)=>{"use strict";a.d(s,{cn:()=>t});var r=a(3463),l=a(9795);function t(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];return(0,l.QP)((0,r.$)(s))}},9324:()=>{},4607:(e,s,a)=>{"use strict";a.d(s,{q:()=>l});var r=a(5828);let l=(0,r.createServerReference)("0073f5af6c1f6ac2579605cfb8d6b91f63e67bd6b0",r.callServer,void 0,r.findSourceMapURL,"getUserSession")}},e=>{var s=s=>e(e.s=s);e.O(0,[30,545,525,839,932,60,843,441,517,358],()=>s(1196)),_N_E=e.O()}]);