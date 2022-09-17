"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[3184],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=d(n),N=r,c=k["".concat(o,".").concat(N)]||k[N]||m[N]||s;return n?a.createElement(c,i(i({ref:t},p),{},{components:n})):a.createElement(c,i({ref:t},p))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(4137));const s={id:"presets",title:"Presets"},i=void 0,l={unversionedId:"getting-started/presets",id:"version-28.0/getting-started/presets",title:"Presets",description:"The presets",source:"@site/versioned_docs/version-28.0/getting-started/presets.md",sourceDirName:"getting-started",slug:"/getting-started/presets",permalink:"/ts-jest/docs/28.0/getting-started/presets",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-28.0/getting-started/presets.md",tags:[],version:"28.0",lastUpdatedBy:"Tom\xe1\u0161 Hekrla (Heky)",lastUpdatedAt:1663416840,formattedLastUpdatedAt:"Sep 17, 2022",frontMatter:{id:"presets",title:"Presets"},sidebar:"version-28.0-docs",previous:{title:"Installation",permalink:"/ts-jest/docs/28.0/getting-started/installation"},next:{title:"Options",permalink:"/ts-jest/docs/28.0/getting-started/options"}},o={},d=[{value:"The presets",id:"the-presets",level:3},{value:"Basic usage",id:"basic-usage",level:3},{value:"Advanced",id:"advanced",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"the-presets"},"The presets"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Starting from ",(0,r.kt)("strong",{parentName:"p"},"v28.0.0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," will gradually opt in adoption of ",(0,r.kt)("inlineCode",{parentName:"p"},"esbuild"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"swc")," more to improve the performance. To make the transition smoothly, we introduce ",(0,r.kt)("inlineCode",{parentName:"p"},"legacy")," presets as a fallback when the new codes don't work yet.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," comes with several presets, covering most of the project's base configuration:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Preset name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/default"),(0,r.kt)("br",null),"or ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"CommonJS")," syntax, leaving JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/default-legacy"),(0,r.kt)("br",null),"or ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/legacy")," (",(0,r.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"CommonJS")," syntax, leaving JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/default-esm"),(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"ESM")," syntax, leaving JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/default-esm-legacy"),(0,r.kt)("br",null)," (",(0,r.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"ESM")," syntax, leaving JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".jsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"CommonJS")," syntax.",(0,r.kt)("br",null),"You'll need to set ",(0,r.kt)("inlineCode",{parentName:"td"},"allowJs")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," in your ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts-legacy")," (",(0,r.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".jsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"CommonJS")," syntax.",(0,r.kt)("br",null),"You'll need to set ",(0,r.kt)("inlineCode",{parentName:"td"},"allowJs")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," in your ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts-esm")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".jsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"ESM")," syntax.",(0,r.kt)("br",null),"You'll need to set ",(0,r.kt)("inlineCode",{parentName:"td"},"allowJs")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," in your ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts-esm-legacy")," (",(0,r.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".jsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"ESM")," syntax.",(0,r.kt)("br",null),"You'll need to set ",(0,r.kt)("inlineCode",{parentName:"td"},"allowJs")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," in your ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"CommonJS")," syntax, and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"babel-jest"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel-legacy")," (",(0,r.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"CommonJS")," syntax, and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"babel-jest"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel-esm")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"ESM")," syntax, and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"babel-jest"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel-esm-legacy")," (",(0,r.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"ESM")," syntax, and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"babel-jest"),".")))),(0,r.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,r.kt)("p",null,"In most cases, simply setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"preset")," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," to your ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," of course):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  // Replace `ts-jest` with the preset you want to use\n  // from the above list\n  preset: 'ts-jest',\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    // Replace `ts-jest` with the preset you want to use\n    // from the above list\n    "preset": "ts-jest"\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," presets use ",(0,r.kt)("inlineCode",{parentName:"p"},"testMatch"),", like Jest does in its defaults. If you want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"testRegex")," instead in your configuration, you MUST set ",(0,r.kt)("inlineCode",{parentName:"p"},"testMatch")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or Jest will bail."),(0,r.kt)("h3",{id:"advanced"},"Advanced"),(0,r.kt)("p",null,"Any preset can also be used with other options.\nIf you're already using another preset, you might want only some specific settings from the chosen ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," preset.\nIn this case you'll need to use the JavaScript version of Jest config (comment/uncomment according to your use case):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nconst { defaults: tsjPreset } = require('ts-jest/presets')\n// const { defaultsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTs: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabel: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabelESM: tsjPreset } = require('ts-jest/presets')\n\nmodule.exports = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n")),(0,r.kt)("p",null,"Or through TypeScript (if ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node")," is installed):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// jest.config.ts\nimport type { InitialOptionsTsJest } from 'ts-jest'\nimport { defaults as tsjPreset } from 'ts-jest/presets'\n// import { defaultsESM as tsjPreset } from 'ts-jest/presets'\n// import { jsWithTs as tsjPreset } from 'ts-jest/presets'\n// import { jsWithTsESM as tsjPreset } from 'ts-jest/presets'\n// import { jsWithBabel as tsjPreset } from 'ts-jest/presets'\n// import { jsWithBabelESM as tsjPreset } from 'ts-jest/presets'\n\nconst config: InitialOptionsTsJest = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n\nexport default config\n")))}m.isMDXComponent=!0}}]);