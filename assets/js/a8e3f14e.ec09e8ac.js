"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[119],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||c[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4259:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7462),a=n(7294),o=n(6010),i=n(1048),s=n(3609),l=n(1943),u=n(2957),p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,f=e.defaultValue,d=e.values,h=e.groupId,g=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===f?f:null!=(t=null!=f?f:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,l.U)(),C=x.tabGroupChoices,j=x.setTabGroupChoices,N=(0,a.useState)(k),w=N[0],T=N[1],O=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=C[h];null!=E&&E!==w&&v.some((function(e){return e.value===E}))&&T(E)}var R=function(e){var t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==w&&(P(t),T(r),null!=h&&j(h,String(r)))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=O.indexOf(e.currentTarget)+1;n=null!=(r=O[a])?r:O[0];break;case"ArrowLeft":var o,i=O.indexOf(e.currentTarget)-1;n=null!=(o=O[i])?o:O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},g)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return O.push(e)},onKeyDown:_,onFocus:R,onClick:R},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function f(e){var t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},4235:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=n(4259),s=n(425),l=["components"],u={title:"Stringify content option"},p=void 0,c={unversionedId:"getting-started/options/stringifyContentPathRegex",id:"version-29.0/getting-started/options/stringifyContentPathRegex",title:"Stringify content option",description:"The stringifyContentPathRegex option has been kept for backward compatibility of HTML_TRANSFORM",source:"@site/versioned_docs/version-29.0/getting-started/options/stringifyContentPathRegex.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/stringifyContentPathRegex",permalink:"/ts-jest/docs/getting-started/options/stringifyContentPathRegex",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/options/stringifyContentPathRegex.md",tags:[],version:"29.0",lastUpdatedBy:"Ahn",lastUpdatedAt:1663094696,formattedLastUpdatedAt:"Sep 13, 2022",frontMatter:{title:"Stringify content option"}},m={},f=[{value:"Example",id:"example",level:3}],d={toc:f};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"stringifyContentPathRegex")," option has been kept for backward compatibility of ",(0,o.kt)("inlineCode",{parentName:"p"},"__HTML_TRANSFORM__"),"\nIt's a regular expression pattern used to match the path of file to be transformed.\nIf it matches, the file will be exported as a module exporting its content."),(0,o.kt)("p",null,"Let's say for example that you have a file ",(0,o.kt)("inlineCode",{parentName:"p"},"foo.ts")," which contains ",(0,o.kt)("inlineCode",{parentName:"p"},'export default "bar"'),", and your ",(0,o.kt)("inlineCode",{parentName:"p"},"stringifyContentPathRegex")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"foo\\\\.ts$"),", the resulting module won't be the result of compiling ",(0,o.kt)("inlineCode",{parentName:"p"},"foo.ts")," source, but instead it'll be a module which exports the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"export default \\"bar\\""'),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CAUTION"),": Whatever file(s) you want to match with ",(0,o.kt)("inlineCode",{parentName:"p"},"stringifyContentPathRegex")," pattern, you must ensure the Jest ",(0,o.kt)("inlineCode",{parentName:"p"},"transform")," option pointing to ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," matches them. You may also have to add the extension(s) of this/those file(s) to ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleFileExtensions")," Jest option."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.js")," version, you could do as in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," version of the config, but extending from the preset will ensure more compatibility without any changes when updating."),(0,o.kt)(i.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"const { defaults: tsjPreset } = require('ts-jest/presets')\n\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  moduleFileExtensions: [...tsjPreset.moduleFileExtensions, 'html'],\n  transform: {\n    ...tsjPreset.transform,\n    '\\\\.html$': [\n      'ts-jest',\n      {\n        stringifyContentPathRegex: /\\.html$/,\n      },\n    ],\n  },\n}\n"))),(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from './types'\nimport tsJestPresets from 'ts-jest/presets'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  moduleFileExtensions: [...tsJestPresets.defaults.moduleFileExtensions, 'html'],\n  transform: {\n    ...tsJestPresets.defaults.transform,\n    '\\\\.html$': [\n      'ts-jest',\n      {\n        stringifyContentPathRegex: /\\.html$/,\n      },\n    ],\n  },\n}\n"))),(0,o.kt)(s.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "moduleFileExtensions": ["js", "ts", "html"],\n    "transform": {\n      "\\\\.(html|ts|js)$": [\n        "ts-jest",\n        {\n          "stringifyContentPathRegex": "\\\\.html$"\n        }\n      ]\n    }\n  }\n}\n')))))}h.isMDXComponent=!0}}]);