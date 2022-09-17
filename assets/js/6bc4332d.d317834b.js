"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4103],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||s;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4091:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(4137));const s={id:"processing",title:"Processing flow"},i=void 0,c={unversionedId:"processing",id:"version-27.1/processing",title:"Processing flow",description:"These are internal technical documents. If you're not a contributor to ts-jest, but simply trying to use the library you'll find nothing of value here",source:"@site/versioned_docs/version-27.1/processing.md",sourceDirName:".",slug:"/processing",permalink:"/ts-jest/docs/27.1/processing",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.1/processing.md",tags:[],version:"27.1",lastUpdatedBy:"Tom\xe1\u0161 Hekrla (Heky)",lastUpdatedAt:1663416840,formattedLastUpdatedAt:"Sep 17, 2022",frontMatter:{id:"processing",title:"Processing flow"},sidebar:"version-27.1-docs",previous:{title:"Introduction",permalink:"/ts-jest/docs/27.1/"},next:{title:"Contributing",permalink:"/ts-jest/docs/27.1/contributing"}},a={},l=[{value:"Jest process",id:"jest-process",level:2},{value:"<code>ts-jest</code> process",id:"ts-jest-process",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"These are internal technical documents. If you're not a contributor to ",(0,o.kt)("inlineCode",{parentName:"em"},"ts-jest"),", but simply trying to use the library you'll find nothing of value here")),(0,o.kt)("h2",{id:"jest-process"},"Jest process"),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/NP0n4i8m30Hxlq9Td08_81GKbBp2E38n4-HWoKL-Znqo8Q7JdFPqccEnIPJg4hvpIAWR7qPishDImOCUB8C5IPROn_Iwj2034kWPkLs0ROK9Aln0kLetu0td8zpjIBEZj36cfE7829fY0NEPdiW2znn6EGKgM-g3_tuK25or_bslfaK75qcGv71odpsbw91vpUtor5jPlLlGpxeAMpsrcA9z0000",alt:null}),(0,o.kt)("h2",{id:"ts-jest-process"},(0,o.kt)("inlineCode",{parentName:"h2"},"ts-jest")," process"),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ZLJRYjim47tNLmpqeGaq-O0ijFIrK2XqVq2nHh4sicGqyheB_lYEBeuT9z3goPPcpfmvSwIf3xv18XycGL66ACGfqW-aUAmdE_93Q73_8eJHiAFM3rO1nM3SnUYFRtk8BJhOVI3jnUcDl5iENyJXAmozaX55WM4Kj8ImStulq2cZ2wms5fti47YFO3InXQCwHhf77qsFC0Cv7n62kRIHFy4XAeWU6j_rZ2KKQkDCD4mdOLCg1YbbJK1CdrvRGz7YLFC2x1hPjAZsK-Pbo5jchw3pQc2O-tONf5CJaED0SfKC82A1bUu2XE7T9BwrMrRa9aMkuA37GCm2NIov6qsBWD1XLw5ryDr3qfso_wP-gWrdhKKCqb7w_PbZgxWMTHHPFOwo5iuuowk49DWMM4aCl1OsaDTznR9t4wVyBbMXhavU4GO6yZgndnDkvqLs1VBitrVgAx4WpB8ntuIaO6GLRiUShzYirIHbRzD7cLjfOQ38sd___Ph_ispQXuvdKNhOTj1Yo8N7_D5wdbYgvdKzVqithVFDDGKfx_0BiB8ZijfofiEamo7xELbyBYcJj-UGiqoDiTSRxxIvYCSks7Rpx1R_vPwq-LDtMEs-zl5WklljP-RBCashz-JfvL-kV7r9qd3Fyensuy-yz_mXMaHkfBLKqWz9Id4hlvZnVv-WbeMNEcBuLJ1uMlwwlJGo3MORzEoPMpYQujmKo6wBG-2faUymjia99dxEDqjaQp85XsCTn_h9AZHFY-5MK-J3lm00",alt:null}))}u.isMDXComponent=!0}}]);