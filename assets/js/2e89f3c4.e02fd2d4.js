"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4937],{5254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(4848),o=n(8453);const i={title:"Isolated Modules option"},l=void 0,a={id:"getting-started/options/isolatedModules",title:"Isolated Modules option",description:"By default ts-jest uses TypeScript compiler in the context of a project (yours), with full type-checking and features.",source:"@site/versioned_docs/version-28.0/getting-started/options/isolatedModules.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/isolatedModules",permalink:"/ts-jest/docs/28.0/getting-started/options/isolatedModules",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-28.0/getting-started/options/isolatedModules.md",tags:[],version:"28.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1725015653e3,frontMatter:{title:"Isolated Modules option"}},d={},c=[{value:"Example",id:"example",level:3},{value:"Performance",id:"performance",level:2},{value:"Example",id:"example-1",level:3},{value:"Caveats",id:"caveats",level:2}];function r(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["By default ",(0,s.jsx)(t.code,{children:"ts-jest"})," uses TypeScript compiler in the context of a project (yours), with full type-checking and features.\nBut it can also be used to compile each file separately, what TypeScript calls an 'isolated module'.\nThat's what the ",(0,s.jsx)(t.code,{children:"isolatedModules"})," option (which defaults to ",(0,s.jsx)(t.code,{children:"false"}),") does."]}),"\n",(0,s.jsxs)(t.p,{children:["You'll lose type-checking ability and some features such as ",(0,s.jsx)(t.code,{children:"const enum"}),", but in the case you plan on using Jest with the cache disabled (",(0,s.jsx)(t.code,{children:"jest --no-cache"}),"), your tests will then run much faster."]}),"\n",(0,s.jsx)(t.p,{children:"Here is how to disable type-checking and compile each file as an isolated module:"}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      isolatedModules: true,\n    },\n  },\n}\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "isolatedModules": true\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"performance",children:"Performance"}),"\n",(0,s.jsxs)(t.p,{children:["Using ",(0,s.jsx)(t.code,{children:"isolatedModules: false"})," comes with a cost of performance comparing to ",(0,s.jsx)(t.code,{children:"isolatedModules: true"}),". There is a way\nto improve the performance when using this mode by changing the value of ",(0,s.jsx)(t.code,{children:"include"})," in ",(0,s.jsx)(t.code,{children:"tsconfig"})," which is used by ",(0,s.jsx)(t.code,{children:"ts-jest"}),".\nThe least amount of files which are provided in ",(0,s.jsx)(t.code,{children:"include"}),", the more performance the test run can gain."]}),"\n",(0,s.jsx)(t.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'// tsconfig.json\n{\n  // ...other configs\n  "include": ["my-typings/*", "my-global-modules/*"]\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"caveats",children:"Caveats"}),"\n",(0,s.jsxs)(t.p,{children:["Limiting the amount of files loaded via ",(0,s.jsx)(t.code,{children:"include"})," can greatly boost performance when running tests. However, the trade off\nis ",(0,s.jsx)(t.code,{children:"ts-jest"})," might not recognize all files which are intended to use with ",(0,s.jsx)(t.code,{children:"jest"}),". One can run into issues with custom typings,\nglobal modules, etc..."]}),"\n",(0,s.jsxs)(t.p,{children:["The suggested solution is what is needed for the test environment should be captured by\nglob patterns in ",(0,s.jsx)(t.code,{children:"include"}),", to gain both performance boost and avoid breaking behaviors."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var s=n(6540);const o={},i=s.createContext(o);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);