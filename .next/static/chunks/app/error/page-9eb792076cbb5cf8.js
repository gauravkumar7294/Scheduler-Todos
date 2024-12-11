(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[933],{4080:function(e,r,t){Promise.resolve().then(t.bind(t,5714))},5714:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var n=t(7437),a=t(2265),s=t(6463),o=t(6127),u=t(6013),i=t(495);function c(){let e=(0,s.useRouter)();return(0,a.useEffect)(()=>{let r=setTimeout(()=>{e.push("/")},5e3);return()=>clearTimeout(r)},[e]),(0,n.jsx)("div",{className:"container mx-auto p-4 max-w-3xl min-h-screen flex items-center justify-center",children:(0,n.jsxs)(u.Zb,{className:"w-full",children:[(0,n.jsx)(u.Ol,{children:(0,n.jsxs)(u.ll,{className:"text-2xl font-bold text-center flex items-center justify-center",children:[(0,n.jsx)(o.Z,{className:"mr-2 h-6 w-6 text-destructive"}),"Oops! Something went wrong"]})}),(0,n.jsxs)(u.aY,{className:"text-center",children:[(0,n.jsx)("p",{className:"text-muted-foreground mb-4",children:"We encountered an unexpected error. Don't worry, we're working on fixing it."}),(0,n.jsx)("p",{className:"text-muted-foreground mb-6",children:"You'll be redirected to the home page in 5 seconds, or you can click the button below."}),(0,n.jsx)(i.z,{onClick:()=>e.push("/"),className:"w-full sm:w-auto",children:"Go to Home Page"})]})]})})}},495:function(e,r,t){"use strict";t.d(r,{z:function(){return c}});var n=t(7437),a=t(2265),s=t(1538),o=t(3027),u=t(7440);let i=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,r)=>{let{className:t,variant:a,size:o,asChild:c=!1,...d}=e,l=c?s.g7:"button";return(0,n.jsx)(l,{className:(0,u.cn)(i({variant:a,size:o,className:t})),ref:r,...d})});c.displayName="Button"},6013:function(e,r,t){"use strict";t.d(r,{Ol:function(){return u},Zb:function(){return o},aY:function(){return c},eW:function(){return d},ll:function(){return i}});var n=t(7437),a=t(2265),s=t(7440);let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...a})});o.displayName="Card";let u=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...a})});u.displayName="CardHeader";let i=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("h3",{ref:r,className:(0,s.cn)("font-semibold leading-none tracking-tight",t),...a})});i.displayName="CardTitle",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("p",{ref:r,className:(0,s.cn)("text-sm text-muted-foreground",t),...a})}).displayName="CardDescription";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("p-6 pt-0",t),...a})});c.displayName="CardContent";let d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex items-center p-6 pt-0",t),...a})});d.displayName="CardFooter"},7440:function(e,r,t){"use strict";t.d(r,{cn:function(){return s}});var n=t(4839),a=t(6164);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.m6)((0,n.W)(r))}},8030:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(2265);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&t.indexOf(e)===r).join(" ")};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,n.forwardRef)((e,r)=>{let{color:t="currentColor",size:a=24,strokeWidth:u=2,absoluteStrokeWidth:i,className:c="",children:d,iconNode:l,...f}=e;return(0,n.createElement)("svg",{ref:r,...o,width:a,height:a,stroke:t,strokeWidth:i?24*Number(u)/Number(a):u,className:s("lucide",c),...f},[...l.map(e=>{let[r,t]=e;return(0,n.createElement)(r,t)}),...Array.isArray(d)?d:[d]])}),i=(e,r)=>{let t=(0,n.forwardRef)((t,o)=>{let{className:i,...c}=t;return(0,n.createElement)(u,{ref:o,iconNode:r,className:s("lucide-".concat(a(e)),i),...c})});return t.displayName="".concat(e),t}},6127:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});let n=(0,t(8030).Z)("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},6463:function(e,r,t){"use strict";var n=t(1169);t.o(n,"useParams")&&t.d(r,{useParams:function(){return n.useParams}}),t.o(n,"usePathname")&&t.d(r,{usePathname:function(){return n.usePathname}}),t.o(n,"useRouter")&&t.d(r,{useRouter:function(){return n.useRouter}}),t.o(n,"useSearchParams")&&t.d(r,{useSearchParams:function(){return n.useSearchParams}})}},function(e){e.O(0,[247,971,23,744],function(){return e(e.s=4080)}),_N_E=e.O()}]);