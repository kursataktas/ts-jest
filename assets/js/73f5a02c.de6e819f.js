"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[8080],{7254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var s=n(4848),r=n(8453),o=n(9489),a=n(7227);const i={title:"Stringify content option"},l=void 0,u={id:"getting-started/options/stringifyContentPathRegex",title:"Stringify content option",description:"The stringifyContentPathRegex option has been kept for backward compatibility of HTML_TRANSFORM",source:"@site/docs/getting-started/options/stringifyContentPathRegex.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/stringifyContentPathRegex",permalink:"/ts-jest/docs/next/getting-started/options/stringifyContentPathRegex",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/stringifyContentPathRegex.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:173039594e4,frontMatter:{title:"Stringify content option"}},c={},d=[{value:"Example",id:"example",level:3}];function h(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"stringifyContentPathRegex"})," option has been kept for backward compatibility of ",(0,s.jsx)(t.code,{children:"__HTML_TRANSFORM__"}),"\nIt's a regular expression pattern used to match the path of file to be transformed.\nIf it matches, the file will be exported as a module exporting its content."]}),"\n",(0,s.jsxs)(t.p,{children:["Let's say for example that you have a file ",(0,s.jsx)(t.code,{children:"foo.ts"})," which contains ",(0,s.jsx)(t.code,{children:'export default "bar"'}),", and your ",(0,s.jsx)(t.code,{children:"stringifyContentPathRegex"})," is set to ",(0,s.jsx)(t.code,{children:"foo\\\\.ts$"}),", the resulting module won't be the result of compiling ",(0,s.jsx)(t.code,{children:"foo.ts"})," source, but instead it'll be a module which exports the string ",(0,s.jsx)(t.code,{children:'"export default \\"bar\\""'}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"CAUTION"}),": Whatever file(s) you want to match with ",(0,s.jsx)(t.code,{children:"stringifyContentPathRegex"})," pattern, you must ensure the Jest ",(0,s.jsx)(t.code,{children:"transform"})," option pointing to ",(0,s.jsx)(t.code,{children:"ts-jest"})," matches them. You may also have to add the extension(s) of this/those file(s) to ",(0,s.jsx)(t.code,{children:"moduleFileExtensions"})," Jest option."]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.code,{children:"jest.config.js"})," version, you could do as in the ",(0,s.jsx)(t.code,{children:"package.json"})," version of the config, but extending from the preset will ensure more compatibility without any changes when updating."]}),"\n",(0,s.jsxs)(o.A,{groupId:"code-examples",children:[(0,s.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\nconst { defaults: tsjPreset } = require('ts-jest/presets')\n\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  moduleFileExtensions: [...tsjPreset.moduleFileExtensions, 'html'],\n  transform: {\n    ...tsjPreset.transform,\n    '\\\\.html$': [\n      'ts-jest',\n      {\n        stringifyContentPathRegex: /\\.html$/,\n      },\n    ],\n  },\n}\n"})})}),(0,s.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\nimport tsJestPresets from 'ts-jest/presets'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  moduleFileExtensions: [...tsJestPresets.defaults.moduleFileExtensions, 'html'],\n  transform: {\n    ...tsJestPresets.defaults.transform,\n    '\\\\.html$': [\n      'ts-jest',\n      {\n        stringifyContentPathRegex: /\\.html$/,\n      },\n    ],\n  },\n}\n"})})}),(0,s.jsx)(a.A,{value:"JSON",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "moduleFileExtensions": ["js", "ts", "html"],\n    "transform": {\n      "\\\\.(html|ts|js)$": [\n        "ts-jest",\n        {\n          "stringifyContentPathRegex": "\\\\.html$"\n        }\n      ]\n    }\n  }\n}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var s=n(4164);const r={tabItem:"tabItem_Ymn6"};var o=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(6540),r=n(4164),o=n(4245),a=n(6347),i=n(6494),l=n(2814),u=n(5167),c=n(9900);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[u,d]=f({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=u??m;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=n(1062);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function j(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==s&&(u(t),a(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(6540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);