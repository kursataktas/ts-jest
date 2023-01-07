"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[7500],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(n),u=s,d=c["".concat(p,".").concat(u)]||c[u]||f[u]||a;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),s=(n(7294),n(4137));const a={title:"AST transformers option"},o=void 0,i={unversionedId:"getting-started/options/astTransformers",id:"version-26.5/getting-started/options/astTransformers",title:"AST transformers option",description:"ts-jest by default does hoisting for a few jest methods via a TypeScript AST transformer. One can also create custom",source:"@site/versioned_docs/version-26.5/getting-started/options/astTransformers.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/astTransformers",permalink:"/ts-jest/docs/26.5/getting-started/options/astTransformers",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/getting-started/options/astTransformers.md",tags:[],version:"26.5",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1673109113,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{title:"AST transformers option"}},p={},l=[{value:"Examples",id:"examples",level:3},{value:"Basic Transformers",id:"basic-transformers",level:4},{value:"Configuring transformers with options",id:"configuring-transformers-with-options",level:4},{value:"Public transformers",id:"public-transformers",level:3},{value:"Example of opt-in transformers",id:"example-of-opt-in-transformers",level:4},{value:"Writing custom TypeScript AST transformers",id:"writing-custom-typescript-ast-transformers",level:3}],m={toc:l};function f(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," by default does hoisting for a few ",(0,s.kt)("inlineCode",{parentName:"p"},"jest")," methods via a TypeScript AST transformer. One can also create custom\nTypeScript AST transformers and provide them to ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," to include into compilation process."),(0,s.kt)("p",null,"The option is ",(0,s.kt)("inlineCode",{parentName:"p"},"astTransformers")," and it allows ones to specify which 3 types of TypeScript AST transformers to use with ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"before")," means your transformers get run before TS ones, which means your transformers will get raw TS syntax\ninstead of transpiled syntax (e.g ",(0,s.kt)("inlineCode",{parentName:"li"},"import")," instead of ",(0,s.kt)("inlineCode",{parentName:"li"},"require")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"define")," )."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"after")," means your transformers get run after TS ones, which gets transpiled syntax."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"afterDeclarations")," means your transformers get run during ",(0,s.kt)("inlineCode",{parentName:"li"},"d.ts")," generation phase, allowing you to transform output type declarations.")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("h4",{id:"basic-transformers"},"Basic Transformers"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: ['my-custom-transformer'],\n      },\n    },\n  },\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": ["my-custom-transformer"]\n        }\n      }\n    }\n  }\n}\n')),(0,s.kt)("h4",{id:"configuring-transformers-with-options"},"Configuring transformers with options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: [\n          {\n            path: 'my-custom-transformer-that-needs-extra-opts',\n            options: {}, // extra options to pass to transformers here\n          },\n        ],\n      },\n    },\n  },\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": [\n            {\n              "path": "my-custom-transformer-that-needs-extra-opts",\n              "options": {} // extra options to pass to transformers here\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n')),(0,s.kt)("h3",{id:"public-transformers"},"Public transformers"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," is able to expose transformers for public usage to provide the possibility to opt-in/out for users. Currently\nthe exposed transformers are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"path-mapping")," convert alias import/export to relative import/export path base on ",(0,s.kt)("inlineCode",{parentName:"li"},"paths")," in ",(0,s.kt)("inlineCode",{parentName:"li"},"tsconfig"),".\nThis transformer works similar to ",(0,s.kt)("inlineCode",{parentName:"li"},"moduleNameMapper")," in ",(0,s.kt)("inlineCode",{parentName:"li"},"jest.config.js"),". When using this transformer, one might not need\n",(0,s.kt)("inlineCode",{parentName:"li"},"moduleNameMapper")," anymore.")),(0,s.kt)("h4",{id:"example-of-opt-in-transformers"},"Example of opt-in transformers"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: ['ts-jest/dist/transformers/path-mapping'],\n      },\n    },\n  },\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": ["ts-jest/dist/transformers/path-mapping"]\n        }\n      }\n    }\n  }\n}\n')),(0,s.kt)("h3",{id:"writing-custom-typescript-ast-transformers"},"Writing custom TypeScript AST transformers"),(0,s.kt)("p",null,"To write a custom TypeScript AST transformers, one can take a look at ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest/tree/v26.5.0/src/transformers"},"the one")," that ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," is using."))}f.isMDXComponent=!0}}]);