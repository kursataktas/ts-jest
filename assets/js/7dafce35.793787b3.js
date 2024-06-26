"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[7083],{9073:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=s(4848),r=s(8453),a=s(9489),o=s(7227);const i={title:"AST transformers option"},l=void 0,c={id:"getting-started/options/astTransformers",title:"AST transformers option",description:"ts-jest by default does hoisting for a few jest methods via a TypeScript AST transformer. One can also create custom",source:"@site/versioned_docs/version-29.0/getting-started/options/astTransformers.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/astTransformers",permalink:"/ts-jest/docs/getting-started/options/astTransformers",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/options/astTransformers.md",tags:[],version:"29.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1719411629e3,frontMatter:{title:"AST transformers option"}},u={},d=[{value:"Examples",id:"examples",level:3},{value:"Basic Transformers",id:"basic-transformers",level:4},{value:"Configuring transformers with options",id:"configuring-transformers-with-options",level:4},{value:"Writing custom TypeScript AST transformers",id:"writing-custom-typescript-ast-transformers",level:3}];function m(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"ts-jest"})," by default does hoisting for a few ",(0,n.jsx)(t.code,{children:"jest"})," methods via a TypeScript AST transformer. One can also create custom\nTypeScript AST transformers and provide them to ",(0,n.jsx)(t.code,{children:"ts-jest"})," to include into compilation process."]}),"\n",(0,n.jsxs)(t.p,{children:["The option is ",(0,n.jsx)(t.code,{children:"astTransformers"})," and it allows ones to specify which 3 types of TypeScript AST transformers to use with ",(0,n.jsx)(t.code,{children:"ts-jest"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"before"})," means your transformers get run before TS ones, which means your transformers will get raw TS syntax\ninstead of transpiled syntax (e.g ",(0,n.jsx)(t.code,{children:"import"})," instead of ",(0,n.jsx)(t.code,{children:"require"})," or ",(0,n.jsx)(t.code,{children:"define"})," )."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"after"})," means your transformers get run after TS ones, which gets transpiled syntax."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"afterDeclarations"})," means your transformers get run during ",(0,n.jsx)(t.code,{children:"d.ts"})," generation phase, allowing you to transform output type declarations."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.h4,{id:"basic-transformers",children:"Basic Transformers"}),"\n",(0,n.jsxs)(a.A,{groupId:"code-examples",children:[(0,n.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: ['my-custom-transformer'],\n        },\n      },\n    ],\n  },\n}\n"})})}),(0,n.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: ['my-custom-transformer'],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(o.A,{value:"JSON",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "astTransformers": {\n            "before": ["my-custom-transformer"]\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,n.jsx)(t.h4,{id:"configuring-transformers-with-options",children:"Configuring transformers with options"}),"\n",(0,n.jsxs)(a.A,{groupId:"code-examples",children:[(0,n.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: [\n            {\n              path: 'my-custom-transformer-that-needs-extra-opts',\n              options: {}, // extra options to pass to transformers here\n            },\n          ],\n        },\n      },\n    ],\n  },\n}\n"})})}),(0,n.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: [\n            {\n              path: 'my-custom-transformer-that-needs-extra-opts',\n              options: {}, // extra options to pass to transformers here\n            },\n          ],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(o.A,{value:"JSON",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "astTransformers": {\n            "before": [\n              {\n                "path": "my-custom-transformer-that-needs-extra-opts",\n                "options": {} // extra options to pass to transformers here\n              }\n            ]\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"writing-custom-typescript-ast-transformers",children:"Writing custom TypeScript AST transformers"}),"\n",(0,n.jsxs)(t.p,{children:["To write a custom TypeScript AST transformers, one can take a look at ",(0,n.jsx)(t.a,{href:"https://github.com/kulshekhar/ts-jest/tree/main/src/transformers",children:"the one"})," that ",(0,n.jsx)(t.code,{children:"ts-jest"})," is using."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},7227:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var n=s(4164);const r={tabItem:"tabItem_Ymn6"};var a=s(4848);function o(e){let{children:t,hidden:s,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,o),hidden:s,children:t})}},9489:(e,t,s)=>{s.d(t,{A:()=>T});var n=s(6540),r=s(4164),a=s(4245),o=s(6347),i=s(6494),l=s(2814),c=s(5167),u=s(9900);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:s}=e;const r=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function h(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,a=m(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=f({queryString:s,groupId:r}),[h,j]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),x=(()=>{const e=c??h;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),j(e)}),[d,j,a]),tabValues:a}}var j=s(1062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(4848);function b(e){let{className:t,block:s,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,s=l.indexOf(t),r=i[s].value;r!==n&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:i.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,g.jsx)(b,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function T(e){const t=(0,j.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var n=s(6540);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);