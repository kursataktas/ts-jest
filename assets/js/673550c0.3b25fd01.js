"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[6460],{6689:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(4848),o=n(8453);const r={id:"esm-support",title:"ESM Support"},i=void 0,l={id:"guides/esm-support",title:"ESM Support",description:"To use ts-jest with ESM support:",source:"@site/versioned_docs/version-28.0/guides/esm-support.md",sourceDirName:"guides",slug:"/guides/esm-support",permalink:"/ts-jest/docs/28.0/guides/esm-support",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-28.0/guides/esm-support.md",tags:[],version:"28.0",lastUpdatedBy:"ahnpnl",lastUpdatedAt:1720598037e3,frontMatter:{id:"esm-support",title:"ESM Support"},sidebar:"version-28.0-docs",previous:{title:"Version checking",permalink:"/ts-jest/docs/28.0/getting-started/version-checking"},next:{title:"Mock ES6 class",permalink:"/ts-jest/docs/28.0/guides/mock-es6-class"}},d={},c=[{value:"ESM presets",id:"esm-presets",level:3},{value:"Examples",id:"examples",level:3},{value:"Manual configuration",id:"manual-configuration",level:4},{value:"Use ESM presets",id:"use-esm-presets",level:4},{value:"Support <code>.mts</code> extension",id:"support-mts-extension",level:4}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["To use ",(0,t.jsx)(s.code,{children:"ts-jest"})," with ESM support:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Check ",(0,t.jsx)(s.a,{href:"https://jestjs.io/docs/en/ecmascript-modules",children:"ESM Jest documentation"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Enable ",(0,t.jsx)(s.a,{href:"../getting-started/options/useESM",children:"useESM"})," ",(0,t.jsx)(s.code,{children:"true"})," for ",(0,t.jsx)(s.code,{children:"ts-jest"})," config."]}),"\n",(0,t.jsxs)(s.li,{children:["Include ",(0,t.jsx)(s.code,{children:".ts"})," in ",(0,t.jsx)(s.a,{href:"https://jestjs.io/docs/en/next/configuration#extensionstotreatasesm-arraystring",children:"extensionsToTreatAsEsm"})," Jest config option."]}),"\n",(0,t.jsxs)(s.li,{children:["Ensure that ",(0,t.jsx)(s.code,{children:"tsconfig"})," has ",(0,t.jsx)(s.code,{children:"module"})," with value for ESM, e.g. ",(0,t.jsx)(s.code,{children:"ES2015"})," or ",(0,t.jsx)(s.code,{children:"ES2020"})," etc..."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"esm-presets",children:"ESM presets"}),"\n",(0,t.jsxs)(s.p,{children:["There are also ",(0,t.jsx)(s.a,{href:"/ts-jest/docs/28.0/getting-started/presets",children:"3 presets"})," to work with ESM."]}),"\n",(0,t.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.h4,{id:"manual-configuration",children:"Manual configuration"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  extensionsToTreatAsEsm: ['.ts'],\n  globals: {\n    'ts-jest': {\n      useESM: true,\n    },\n  },\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n}\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "extensionsToTreatAsEsm": [".ts"],\n    "globals": {\n      "ts-jest": {\n        "useESM": true\n      }\n    },\n    "moduleNameMapper": {\n      "^(\\\\.{1,2}/.*)\\\\.js$": "$1"\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(s.h4,{id:"use-esm-presets",children:"Use ESM presets"}),"\n",(0,t.jsx)(s.admonition,{type:"important",children:(0,t.jsxs)(s.p,{children:["Starting from ",(0,t.jsx)(s.strong,{children:"v28.0.0"}),", ",(0,t.jsx)(s.code,{children:"ts-jest"})," will gradually switch to ",(0,t.jsx)(s.code,{children:"esbuild"}),"/",(0,t.jsx)(s.code,{children:"swc"})," to transform ",(0,t.jsx)(s.code,{children:"ts"})," to ",(0,t.jsx)(s.code,{children:"js"}),". To make the transition smoothly, we introduce ",(0,t.jsx)(s.code,{children:"legacy"})," presets as a fallback when the new codes don't work yet."]})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  preset: 'ts-jest/presets/default-esm', // or other ESM presets\n  globals: {\n    'ts-jest': {\n      useESM: true,\n    },\n  },\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n}\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "preset": "ts-jest/presets/default-esm", // or other ESM presets,\n    "globals": {\n      "ts-jest": {\n        "useESM": true\n      }\n    },\n    "moduleNameMapper": {\n      "^(\\\\.{1,2}/.*)\\\\.js$": "$1"\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(s.h4,{id:"support-mts-extension",children:["Support ",(0,t.jsx)(s.code,{children:".mts"})," extension"]}),"\n",(0,t.jsxs)(s.p,{children:["To work with ",(0,t.jsx)(s.code,{children:".mts"})," extension, besides the requirement to run Jest and ",(0,t.jsx)(s.code,{children:"ts-jest"})," in ESM mode, there are a few extra requirements to be met:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"package.json"})," should contain ",(0,t.jsx)(s.code,{children:'"type": "module"'})]}),"\n",(0,t.jsxs)(s.li,{children:["A custom Jest resolver to resolve ",(0,t.jsx)(s.code,{children:".mjs"})," extension, see our simple one at ",(0,t.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest/blob/main/e2e/native-esm-ts/mjs-resolver.ts",children:"https://github.com/kulshekhar/ts-jest/blob/main/e2e/native-esm-ts/mjs-resolver.ts"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"tsconfig.json"})," should at least contain these following options"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'// tsconfig.spec.json\n{\n  "compilerOptions": {\n    "module": "Node16", // or "NodeNext"\n    "target": "ESNext",\n    "moduleResolution": "Node16", // or "NodeNext"\n    "esModuleInterop": true\n  }\n}\n'})})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var t=n(6540);const o={},r=t.createContext(o);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);