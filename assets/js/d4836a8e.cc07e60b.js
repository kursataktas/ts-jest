"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[7471],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=s.createContext({}),p=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return n?s.createElement(f,o(o({ref:t},u),{},{components:n})):s.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}c.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(7294),r=n(6010);const a="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return s.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,o),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>d});var s=n(7462),r=n(7294),a=n(6010),o=n(1048),l=n(3609),i=n(1943),p=n(2957);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:o,values:c,groupId:d,className:f}=e,j=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??j.map((e=>{let{props:{value:t,label:n,attributes:s}}=e;return{value:t,label:n,attributes:s}})),h=(0,l.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===o?o:o??j.find((e=>e.props.default))?.props.value??j[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,i.U)(),[N,y]=(0,r.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=d){const e=b[d];null!=e&&e!==N&&k.some((t=>t.value===e))&&y(e)}const T=e=>{const t=e.currentTarget,n=x.indexOf(t),s=k[n].value;s!==N&&(E(t),y(s),null!=d&&v(d,String(s)))},w=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},f)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,s.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:w,onClick:T},o,{className:(0,a.Z)("tabs__item",m,o?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,r.cloneElement)(j.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},j.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,o.Z)();return r.createElement(c,(0,s.Z)({key:String(t)},e))}},9812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var s=n(7462),r=(n(7294),n(4137)),a=n(4259),o=n(425);const l={id:"esm-support",title:"ESM Support"},i=void 0,p={unversionedId:"guides/esm-support",id:"guides/esm-support",title:"ESM Support",description:"To use ts-jest with ESM support:",source:"@site/docs/guides/esm-support.md",sourceDirName:"guides",slug:"/guides/esm-support",permalink:"/ts-jest/docs/next/guides/esm-support",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/guides/esm-support.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1673109113,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{id:"esm-support",title:"ESM Support"},sidebar:"docs",previous:{title:"Version checking",permalink:"/ts-jest/docs/next/getting-started/version-checking"},next:{title:"Mock ES6 class",permalink:"/ts-jest/docs/next/guides/mock-es6-class"}},u={},m=[{value:"ESM presets",id:"esm-presets",level:3},{value:"Examples",id:"examples",level:3},{value:"Manual configuration",id:"manual-configuration",level:4},{value:"Use ESM presets",id:"use-esm-presets",level:4},{value:"Support <code>.mts</code> extension",id:"support-mts-extension",level:4}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," with ESM support:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check ",(0,r.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/en/ecmascript-modules"},"ESM Jest documentation"),"."),(0,r.kt)("li",{parentName:"ul"},"Enable ",(0,r.kt)("a",{parentName:"li",href:"../getting-started/options/useESM"},"useESM")," ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"ts-jest")," config."),(0,r.kt)("li",{parentName:"ul"},"Include ",(0,r.kt)("inlineCode",{parentName:"li"},".ts")," in ",(0,r.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/en/next/configuration#extensionstotreatasesm-arraystring"},"extensionsToTreatAsEsm")," Jest config option."),(0,r.kt)("li",{parentName:"ul"},"Ensure that ",(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig")," has ",(0,r.kt)("inlineCode",{parentName:"li"},"module")," with value for ESM, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"ES2015")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"ES2020")," etc...")),(0,r.kt)("h3",{id:"esm-presets"},"ESM presets"),(0,r.kt)("p",null,"There are also ",(0,r.kt)("a",{parentName:"p",href:"/ts-jest/docs/next/getting-started/presets"},"3 presets")," to work with ESM."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are using custom ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," config, please remove ",(0,r.kt)("inlineCode",{parentName:"p"},"preset")," from your Jest config to avoid issues that Jest doesn't transform files correctly.")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"manual-configuration"},"Manual configuration"),(0,r.kt)(a.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  extensionsToTreatAsEsm: ['.ts'],\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        useESM: true,\n      },\n    ],\n  },\n}\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  extensionsToTreatAsEsm: ['.ts'],\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        useESM: true,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,r.kt)(o.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "extensionsToTreatAsEsm": [".ts"],\n    "moduleNameMapper": {\n      "^(\\\\.{1,2}/.*)\\\\.js$": "$1"\n    },\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "useESM": true\n        }\n      ]\n    }\n  }\n}\n')))),(0,r.kt)("h4",{id:"use-esm-presets"},"Use ESM presets"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Starting from ",(0,r.kt)("strong",{parentName:"p"},"v28.0.0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," will gradually switch to ",(0,r.kt)("inlineCode",{parentName:"p"},"esbuild"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"swc")," to transform ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"js"),". To make the transition smoothly, we introduce ",(0,r.kt)("inlineCode",{parentName:"p"},"legacy")," presets as a fallback when the new codes don't work yet.")),(0,r.kt)(a.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  preset: 'ts-jest/presets/default-esm', // or other ESM presets\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        useESM: true,\n      },\n    ],\n  },\n}\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  preset: 'ts-jest/presets/default-esm', // or other ESM presets\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        useESM: true,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,r.kt)(o.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "preset": "ts-jest/presets/default-esm", // or other ESM presets,\n    "moduleNameMapper": {\n      "^(\\\\.{1,2}/.*)\\\\.js$": "$1"\n    },\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "useESM": true\n        }\n      ]\n    }\n  }\n}\n')))),(0,r.kt)("h4",{id:"support-mts-extension"},"Support ",(0,r.kt)("inlineCode",{parentName:"h4"},".mts")," extension"),(0,r.kt)("p",null,"To work with ",(0,r.kt)("inlineCode",{parentName:"p"},".mts")," extension, besides the requirement to run Jest and ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," in ESM mode, there are a few extra requirements to be met:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," should contain ",(0,r.kt)("inlineCode",{parentName:"li"},'"type": "module"')),(0,r.kt)("li",{parentName:"ul"},"A custom Jest resolver to resolve ",(0,r.kt)("inlineCode",{parentName:"li"},".mjs")," extension, see our simple one at ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kulshekhar/ts-jest/blob/main/e2e/native-esm-ts/mjs-resolver.ts"},"https://github.com/kulshekhar/ts-jest/blob/main/e2e/native-esm-ts/mjs-resolver.ts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," should at least contain these following options")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "module": "Node16", // or "NodeNext"\n    "target": "ESNext",\n    "moduleResolution": "Node16", // or "NodeNext"\n    "esModuleInterop": true\n  }\n}\n')))}d.isMDXComponent=!0}}]);