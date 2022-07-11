"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[7791],{4137:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=s(n),c=r,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7645:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=["components"],l={id:"options",title:"Options"},p=void 0,s={unversionedId:"getting-started/options",id:"getting-started/options",title:"Options",description:"Introduction",source:"@site/docs/getting-started/options.md",sourceDirName:"getting-started",slug:"/getting-started/options",permalink:"/ts-jest/docs/next/getting-started/options",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options.md",tags:[],version:"current",frontMatter:{id:"options",title:"Options"},sidebar:"docs",previous:{title:"Presets",permalink:"/ts-jest/docs/next/getting-started/presets"},next:{title:"Paths mapping",permalink:"/ts-jest/docs/next/getting-started/paths-mapping"}},d={},m=[{value:"Introduction",id:"introduction",level:3},{value:"Options",id:"options",level:3}],u={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"All ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," specific options are located under the ",(0,o.kt)("inlineCode",{parentName:"p"},"globals")," of Jest config object in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file of your project,\nor through a ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.js"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.ts")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        // ts-jest configuration goes here\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Or through JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      // ts-jest configuration goes here\n    },\n  },\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To utilize IDE suggestions, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"JSDoc")," comments to provide suggested ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," configs for your Jest config:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/** @type {import('ts-jest').InitialOptionsTsJest} */\nmodule.exports = config = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      // ts-jest configuration goes here and your IDE will suggest which configs when typing\n    },\n  },\n}\n"))),(0,o.kt)("p",null,"Or through TypeScript (if ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node")," is installed):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// jest.config.ts\nimport type { InitialOptionsTsJest } from 'ts-jest'\n\nconst config: InitialOptionsTsJest = {\n  globals: {\n    'ts-jest': {\n      // ts-jest configuration goes here\n    },\n  },\n}\nexport default config\n")),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"When using TypeScript Jest config file, Jest will use ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node")," to compile the config file. ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," doesn't take part in\nthat process.")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("p",null,"All options have default values which should fit most of the projects. Click on the option's name to see details and example(s)."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/compiler"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"compiler")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/compiler"},"TypeScript module to use as compiler.")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"typescript"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/tsconfig"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"tsconfig")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/tsconfig"},"TypeScript compiler related configuration.")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"),"|",(0,o.kt)("inlineCode",{parentName:"td"},"object"),"|",(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"auto"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/isolatedModules"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"isolatedModules")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/isolatedModules"},"Disable type-checking")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"disabled"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/astTransformers"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"astTransformers")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/astTransformers"},"Custom TypeScript AST transformers")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"auto"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/diagnostics"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"diagnostics")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/diagnostics"},"Diagnostics related configuration.")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"),"|",(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"enabled"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/babelConfig"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"babelConfig")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/babelConfig"},"Babel(Jest) related configuration.")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"),"|",(0,o.kt)("inlineCode",{parentName:"td"},"string"),"|",(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"disabled"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/stringifyContentPathRegex"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"stringifyContentPathRegex")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/stringifyContentPathRegex"},"Files which will become modules returning self content.")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"),"|",(0,o.kt)("inlineCode",{parentName:"td"},"RegExp")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"disabled"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/useESM"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"useESM")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/useESM"},"Enable ESM support")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"auto"))))))}c.isMDXComponent=!0}}]);