"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[5250],{1101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var s=n(4848),r=n(8453),i=n(9489),o=n(7227);const l={id:"options",title:"Options"},c=void 0,a={id:"getting-started/options",title:"Options",description:"Introduction",source:"@site/docs/getting-started/options.md",sourceDirName:"getting-started",slug:"/getting-started/options",permalink:"/ts-jest/docs/next/getting-started/options",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:171831624e4,frontMatter:{id:"options",title:"Options"},sidebar:"docs",previous:{title:"Presets",permalink:"/ts-jest/docs/next/getting-started/presets"},next:{title:"Paths mapping",permalink:"/ts-jest/docs/next/getting-started/paths-mapping"}},d={},h=[{value:"Introduction",id:"introduction",level:3},{value:"Options",id:"options",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["If you are using custom ",(0,s.jsx)(t.code,{children:"transform"})," config, please remove ",(0,s.jsx)(t.code,{children:"preset"})," from your Jest config to avoid issues that Jest doesn't transform files correctly."]})}),"\n",(0,s.jsxs)(t.p,{children:["All ",(0,s.jsx)(t.code,{children:"ts-jest"})," specific options can be defined in Jest ",(0,s.jsx)(t.code,{children:"transform"})," config object in the ",(0,s.jsx)(t.code,{children:"package.json"})," file of your project,\nor through a ",(0,s.jsx)(t.code,{children:"jest.config.js"}),", or ",(0,s.jsx)(t.code,{children:"jest.config.ts"})," file."]}),"\n",(0,s.jsxs)(i.A,{groupId:"code-examples",children:[(0,s.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"tab",children:"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        // ts-jest configuration goes here\n      },\n    ],\n  },\n}\n"})})}),(0,s.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        // ts-jest configuration goes here\n      },\n    ],\n  },\n}\n"})})}),(0,s.jsx)(o.A,{value:"JSON",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          // ts-jest configuration goes here\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsxs)(t.p,{children:["When using TypeScript Jest config file, Jest will use ",(0,s.jsx)(t.code,{children:"ts-node"})," to compile the config file. ",(0,s.jsx)(t.code,{children:"ts-jest"})," doesn't take part in\nthat process."]})}),"\n",(0,s.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.p,{children:"All options have default values which should fit most of the projects. Click on the option's name to see details and example(s)."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"options/compiler",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"compiler"})})})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"options/compiler",children:"TypeScript module to use as compiler."})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'"typescript"'})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"options/tsconfig",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"tsconfig"})})})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"options/tsconfig",children:"TypeScript compiler related configuration."})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"string"}),"|",(0,s.jsx)(t.code,{children:"object"}),"|",(0,s.jsx)(t.code,{children:"boolean"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:"auto"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"options/isolatedModules",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"isolatedModules"})})})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"options/isolatedModules",children:"Disable type-checking"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:"disabled"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"options/astTransformers",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"astTransformers"})})})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"options/astTransformers",children:"Custom TypeScript AST transformers"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"object"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:"auto"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"options/diagnostics",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"diagnostics"})})})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"options/diagnostics",children:"Diagnostics related configuration."})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"boolean"}),"|",(0,s.jsx)(t.code,{children:"object"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:"enabled"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"options/babelConfig",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"babelConfig"})})})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"options/babelConfig",children:"Babel(Jest) related configuration."})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"boolean"}),"|",(0,s.jsx)(t.code,{children:"string"}),"|",(0,s.jsx)(t.code,{children:"object"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:"disabled"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"options/stringifyContentPathRegex",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"stringifyContentPathRegex"})})})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"options/stringifyContentPathRegex",children:"Files which will become modules returning self content."})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"string"}),"|",(0,s.jsx)(t.code,{children:"RegExp"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:"disabled"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"options/useESM",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"useESM"})})})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"options/useESM",children:"Enable ESM support"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:"auto"})})]})]})]})]})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var s=n(4164);const r={tabItem:"tabItem_Ymn6"};var i=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(6540),r=n(4164),i=n(4245),o=n(6347),l=n(6494),c=n(2814),a=n(5167),d=n(9900);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function j(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=u(e),[o,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[a,h]=p({queryString:n,groupId:r}),[x,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),m=(()=>{const e=a??x;return j({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{m&&c(m)}),[m]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=n(1062);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function b(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=l[n].value;r!==s&&(a(t),o(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,g.jsx)(b,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);