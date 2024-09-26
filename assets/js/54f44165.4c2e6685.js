"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[7924],{2079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=n(4848),r=n(8453),a=n(9489),i=n(7227);const l={id:"installation",title:"Installation"},o=void 0,c={id:"getting-started/installation",title:"Installation",description:"Dependencies",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/ts-jest/docs/next/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/installation.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172734903e4,frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Contributing",permalink:"/ts-jest/docs/next/contributing"},next:{title:"Presets",permalink:"/ts-jest/docs/next/getting-started/presets"}},u={},d=[{value:"Dependencies",id:"dependencies",level:3},{value:"Jest config file",id:"jest-config-file",level:3},{value:"Creating",id:"creating",level:4},{value:"Customizing",id:"customizing",level:4}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(t.p,{children:["You can install ",(0,s.jsx)(t.code,{children:"ts-jest"})," and dependencies all at once with one of the following commands."]}),"\n",(0,s.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,s.jsx)(i.A,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev jest typescript ts-jest @types/jest\n"})})}),(0,s.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn add --dev jest typescript ts-jest @types/jest\n"})})}),(0,s.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm add --save-dev jest typescript ts-jest @types/jest\n"})})})]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Tip: If you get an error with the following ",(0,s.jsx)(t.code,{children:"npm"})," commands such as ",(0,s.jsx)(t.code,{children:"npx: command not found"}),", you can replace ",(0,s.jsx)(t.code,{children:"npx XXX"})," with ",(0,s.jsx)(t.code,{children:"node node_modules/.bin/XXX"})," from the root of your project."]})}),"\n",(0,s.jsx)(t.h3,{id:"jest-config-file",children:"Jest config file"}),"\n",(0,s.jsx)(t.h4,{id:"creating",children:"Creating"}),"\n",(0,s.jsxs)(t.p,{children:["By default, Jest can run without any config files, but it will not compile ",(0,s.jsx)(t.code,{children:".ts"})," files.\nTo make it transpile TypeScript with ",(0,s.jsx)(t.code,{children:"ts-jest"}),", we will need to create a configuration file that will tell Jest to use a ",(0,s.jsx)(t.code,{children:"ts-jest"})," preset."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ts-jest"})," can create the configuration file for you automatically:"]}),"\n",(0,s.jsxs)(a.A,{groupId:"code-examples",children:[(0,s.jsx)(i.A,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-npm",metastring:"tab",children:"npx ts-jest config:init\n"})})}),(0,s.jsx)(i.A,{value:"Yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Yarn",metastring:"tab",children:"yarn ts-jest config:init\n"})})})]}),"\n",(0,s.jsxs)(t.p,{children:["This will create a basic Jest configuration file which will inform Jest about how to handle ",(0,s.jsx)(t.code,{children:".ts"})," files correctly."]}),"\n",(0,s.jsxs)(t.p,{children:["You can also use the ",(0,s.jsx)(t.code,{children:"jest --init"})," command (prefixed with either ",(0,s.jsx)(t.code,{children:"npx"})," or ",(0,s.jsx)(t.code,{children:"yarn"})," depending on what you're using) to have more options related to Jest.\nHowever, answer ",(0,s.jsx)(t.code,{children:"no"})," to the Jest question about whether or not to enable TypeScript. Instead, add the line: ",(0,s.jsx)(t.code,{children:'preset: "ts-jest"'})," to the ",(0,s.jsx)(t.code,{children:"jest.config.js"})," file afterwards."]}),"\n",(0,s.jsx)(t.h4,{id:"customizing",children:"Customizing"}),"\n",(0,s.jsxs)(t.p,{children:["For customizing jest, please follow their ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/en/configuration.html",children:"official guide online"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ts-jest"})," specific options can be found ",(0,s.jsx)(t.a,{href:"options",children:"here"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var s=n(4164);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(6540),r=n(4164),a=n(4245),i=n(6347),l=n(6494),o=n(2814),c=n(5167),u=n(9900);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,d]=f({queryString:n,groupId:r}),[m,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),j(e)}),[d,j,a]),tabValues:a}}var j=n(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function x(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==s&&(c(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function w(e){const t=(0,j.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(6540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);