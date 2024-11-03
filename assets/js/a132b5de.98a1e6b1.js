"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[7132],{4779:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=s(4848),o=s(8453);const t={title:"Diagnostics option"},l=void 0,r={id:"getting-started/options/diagnostics",title:"Diagnostics option",description:"The diagnostics option configures error reporting.",source:"@site/versioned_docs/version-27.0/getting-started/options/diagnostics.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/diagnostics",permalink:"/ts-jest/docs/27.0/getting-started/options/diagnostics",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/getting-started/options/diagnostics.md",tags:[],version:"27.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1730646033e3,frontMatter:{title:"Diagnostics option"}},c={},d=[{value:"Disabling/enabling",id:"disablingenabling",level:3},{value:"Advanced configuration",id:"advanced-configuration",level:3},{value:"Examples",id:"examples",level:3},{value:"Disabling diagnostics",id:"disabling-diagnostics",level:4},{value:"Advanced options",id:"advanced-options",level:4},{value:"Enabling diagnostics for test files only",id:"enabling-diagnostics-for-test-files-only",level:5},{value:"Do not fail on first error",id:"do-not-fail-on-first-error",level:5},{value:"Ignoring some error codes",id:"ignoring-some-error-codes",level:5}];function a(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"diagnostics"})," option configures error reporting.\nIt can both be enabled/disabled entirely or limited to a specific type of errors and/or files."]}),"\n",(0,i.jsxs)(n.p,{children:["If a diagnostic is not filtered out, ",(0,i.jsx)(n.code,{children:"ts-jest"})," will fail the compilation and your test."]}),"\n",(0,i.jsx)(n.h3,{id:"disablingenabling",children:"Disabling/enabling"}),"\n",(0,i.jsxs)(n.p,{children:["By default all diagnostics are enabled. This is the same as setting the ",(0,i.jsx)(n.code,{children:"diagnostics"})," option to ",(0,i.jsx)(n.code,{children:"true"}),".\nTo disable all diagnostics, set ",(0,i.jsx)(n.code,{children:"diagnostics"})," to ",(0,i.jsx)(n.code,{children:"false"}),".\nThis might lead to slightly better performance, especially if you're not using Jest's cache."]}),"\n",(0,i.jsx)(n.h3,{id:"advanced-configuration",children:"Advanced configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"diagnostics"})," option's value can also accept an object for more advanced configuration. Each config. key is optional:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"warnOnly"})}),": If specified and ",(0,i.jsx)(n.code,{children:"true"}),", diagnostics will be reported but won't stop compilation (default: ",(0,i.jsx)(n.em,{children:"disabled"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"ignoreCodes"})}),": List of TypeScript error codes to ignore. Complete list can be found ",(0,i.jsx)(n.a,{href:"https://github.com/Microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json",children:"there"}),". By default here are the ones ignored:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"6059"}),": ",(0,i.jsx)(n.em,{children:"'rootDir' is expected to contain all source files."})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"18002"}),": ",(0,i.jsx)(n.em,{children:"The 'files' list in config file is empty."})," (it is strongly recommended including this one)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"18003"}),": ",(0,i.jsx)(n.em,{children:"No inputs were found in config file."})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"exclude"})}),": If specified, diagnostics of source files which path ",(0,i.jsx)(n.strong,{children:"matches"})," will be ignored. This works a bit\nsimilar to ",(0,i.jsx)(n.code,{children:"tsconfig"})," option ",(0,i.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig#exclude",children:"exclude"})," with the only difference is that\nin TypeScript, ",(0,i.jsx)(n.code,{children:"exclude"})," will also exclude files from compilation process."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"pretty"})}),": Enables/disables colorful and pretty output of errors (default: ",(0,i.jsx)(n.em,{children:"enabled"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h4,{id:"disabling-diagnostics",children:"Disabling diagnostics"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: false,\n    },\n  },\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": false\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"advanced-options",children:"Advanced options"}),"\n",(0,i.jsx)(n.h5,{id:"enabling-diagnostics-for-test-files-only",children:"Enabling diagnostics for test files only"}),"\n",(0,i.jsxs)(n.p,{children:["Assuming all your test files ends with ",(0,i.jsx)(n.code,{children:".spec.ts"})," or ",(0,i.jsx)(n.code,{children:".test.ts"}),", using the following config will enable error reporting only for those files:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: {\n        exclude: ['!**/*.(spec|test).ts'],\n      },\n    },\n  },\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": {\n          "exclude": ["!**/*.(spec|test).ts"]\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h5,{id:"do-not-fail-on-first-error",children:"Do not fail on first error"}),"\n",(0,i.jsxs)(n.p,{children:["While some diagnostics are stop-blockers for the compilation, most of them are not. If you want the compilation (and so your tests) to continue when encountering those, set the ",(0,i.jsx)(n.code,{children:"warnOnly"})," to ",(0,i.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: {\n        warnOnly: true,\n      },\n    },\n  },\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": {\n          "warnOnly": true\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h5,{id:"ignoring-some-error-codes",children:"Ignoring some error codes"}),"\n",(0,i.jsxs)(n.p,{children:["All TypeScript error codes can be found ",(0,i.jsx)(n.a,{href:"https://github.com/Microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json",children:"there"}),". The ",(0,i.jsx)(n.code,{children:"ignoreCodes"})," option accepts this values:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["A single ",(0,i.jsx)(n.code,{children:"number"})," (example: ",(0,i.jsx)(n.code,{children:"1009"}),"): unique error code to ignore"]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.code,{children:"string"})," with a code (example ",(0,i.jsx)(n.code,{children:'"1009"'}),", ",(0,i.jsx)(n.code,{children:'"TS1009"'})," or ",(0,i.jsx)(n.code,{children:'"TS1009"'}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.code,{children:"string"})," with a list of the above (example: ",(0,i.jsx)(n.code,{children:'"1009, TS2571, 4072"'}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["An ",(0,i.jsx)(n.code,{children:"array"})," of one or more from ",(0,i.jsx)(n.code,{children:"1"})," or ",(0,i.jsx)(n.code,{children:"3"})," (example: ",(0,i.jsx)(n.code,{children:'[1009, "TS2571", "6031"]'}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: {\n        ignoreCodes: [2571, 6031, 18003],\n      },\n    },\n  },\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": {\n          "ignoreCodes": [2571, 6031, 18003]\n        }\n      }\n    }\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var i=s(6540);const o={},t=i.createContext(o);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);