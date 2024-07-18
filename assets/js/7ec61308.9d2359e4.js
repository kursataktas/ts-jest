"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[992],{7428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var s=n(4848),r=n(8453),o=n(9489),i=n(7227);const a={id:"paths-mapping",title:"Paths mapping"},l=void 0,c={id:"getting-started/paths-mapping",title:"Paths mapping",description:'If you use "baseUrl" and "paths" options in your tsconfig file, you should make sure the "moduleNameMapper" option in your Jest config is setup accordingly.',source:"@site/docs/getting-started/paths-mapping.md",sourceDirName:"getting-started",slug:"/getting-started/paths-mapping",permalink:"/ts-jest/docs/next/getting-started/paths-mapping",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/paths-mapping.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1721332232e3,frontMatter:{id:"paths-mapping",title:"Paths mapping"},sidebar:"docs",previous:{title:"Options",permalink:"/ts-jest/docs/next/getting-started/options"},next:{title:"Version checking",permalink:"/ts-jest/docs/next/getting-started/version-checking"}},u={},p=[{value:"Example",id:"example",level:3},{value:"TypeScript config",id:"typescript-config",level:4},{value:"Jest config (without helper)",id:"jest-config-without-helper",level:4},{value:"Jest config (with helper)",id:"jest-config-with-helper",level:4}];function d(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["If you use ",(0,s.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html",children:'"baseUrl" and "paths" options'})," in your ",(0,s.jsx)(t.code,{children:"tsconfig"})," file, you should make sure the ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring",children:'"moduleNameMapper"'})," option in your Jest config is setup accordingly."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ts-jest"})," provides a helper to transform the mapping from ",(0,s.jsx)(t.code,{children:"tsconfig"})," to Jest config format, but it needs the ",(0,s.jsx)(t.code,{children:".js"})," version of the config file."]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.h4,{id:"typescript-config",children:"TypeScript config"}),"\n",(0,s.jsxs)(t.p,{children:["With the below config in your ",(0,s.jsx)(t.code,{children:"tsconfig"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'// tsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@App/*": ["src/*"],\n      "lib/*": ["common/*"]\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(t.h4,{id:"jest-config-without-helper",children:"Jest config (without helper)"}),"\n",(0,s.jsxs)(o.A,{groupId:"code-examples",children:[(0,s.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  moduleNameMapper: {\n    '^@App/(.*)$': '<rootDir>/src/$1',\n    '^lib/(.*)$': '<rootDir>/common/$1',\n  },\n}\n"})})}),(0,s.jsx)(i.A,{value:"ts",label:"TypeScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  moduleNameMapper: {\n    '^@App/(.*)$': '<rootDir>/src/$1',\n    '^lib/(.*)$': '<rootDir>/common/$1',\n  },\n}\n\nexport default jestConfig\n"})})}),(0,s.jsx)(i.A,{value:"JSON",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "moduleNameMapper": {\n      "^@App/(.*)$": "<rootDir>/src/$1",\n      "^lib/(.*)$": "<rootDir>/common/$1"\n    }\n  }\n}\n'})})})]}),"\n",(0,s.jsx)(t.h4,{id:"jest-config-with-helper",children:"Jest config (with helper)"}),"\n",(0,s.jsxs)(o.A,{groupId:"code-examples",children:[(0,s.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\nconst { pathsToModuleNameMapper } = require('ts-jest')\n// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file\n// which contains the path mapping (ie the `compilerOptions.paths` option):\nconst { compilerOptions } = require('./tsconfig')\n\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  roots: ['<rootDir>'],\n  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value\n  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),\n}\n"})})}),(0,s.jsx)(i.A,{value:"ts",label:"TypeScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport { pathsToModuleNameMapper } from 'ts-jest'\n// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file\n// which contains the path mapping (ie the `compilerOptions.paths` option):\nimport { compilerOptions } from './tsconfig'\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  roots: ['<rootDir>'],\n  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value\n  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),\n}\n\nexport default jestConfig\n"})})})]}),"\n",(0,s.jsx)(t.p,{children:"With extra options as 2nd argument:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"prefix"}),": append prefix to each of mapped config in the result"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"useESM"}),": when using ",(0,s.jsx)(t.code,{children:"type: module"})," in ",(0,s.jsx)(t.code,{children:"package.json"}),", TypeScript enforces users to have explicit ",(0,s.jsx)(t.code,{children:"js"})," extension when importing\na ",(0,s.jsx)(t.code,{children:"ts"})," file. This option is to help ",(0,s.jsx)(t.code,{children:"pathsToModuleNameMapper"})," to create a config to suit with this scenario."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var s=n(4164);const r={tabItem:"tabItem_Ymn6"};var o=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(6540),r=n(4164),o=n(4245),i=n(6347),a=n(6494),l=n(2814),c=n(5167),u=n(9900);function p(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[c,p]=m({queryString:n,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),j=(()=>{const e=c??f;return h({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var g=n(1062);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function x(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=a[n].value;r!==s&&(c(t),i(r))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:p,onClick:u,...o,className:(0,r.A)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,b.jsx)(y,{...e,children:p(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);