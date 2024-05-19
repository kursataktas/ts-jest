"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[7080],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(4137));const o={id:"contributing",title:"Contributing"},s=void 0,a={unversionedId:"contributing",id:"contributing",title:"Contributing",description:"When contributing to this repository, please first discuss the change you wish to make via ts-jest GitHub discussion or issue with the owners of this repository before making a change.",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/ts-jest/docs/next/contributing",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/contributing.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1716104702,formattedLastUpdatedAt:"May 19, 2024",frontMatter:{id:"contributing",title:"Contributing"},sidebar:"docs",previous:{title:"Processing flow",permalink:"/ts-jest/docs/next/processing"},next:{title:"Installation",permalink:"/ts-jest/docs/next/getting-started/installation"}},l={},u=[{value:"Pull Request Process",id:"pull-request-process",level:2},{value:"E2E Testing",id:"e2e-testing",level:2},{value:"Preparing",id:"preparing",level:3},{value:"Running",id:"running",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When contributing to this repository, please first discuss the change you wish to make via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest/discussions"},(0,i.kt)("inlineCode",{parentName:"a"},"ts-jest")," GitHub discussion")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest/issues"},"issue")," with the owners of this repository before making a change."),(0,i.kt)("p",null,"Please note we have a code of conduct, please follow it in all your interactions with the project."),(0,i.kt)("h2",{id:"pull-request-process"},"Pull Request Process"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ensure the tests are passing and that you have latest ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," branch merged in."),(0,i.kt)("li",{parentName:"ol"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},"docs/")," with details of your changes if required."),(0,i.kt)("li",{parentName:"ol"},"If possible, squash your commits. There must be only one commit in your PR (until a review). Then after each review requesting changes, DO NOT squash your commits with the one before the review, so that we can see intermediate modifications."),(0,i.kt)("li",{parentName:"ol"},"You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"These are internal technical documents. If you're not a contributor to ",(0,i.kt)("inlineCode",{parentName:"em"},"ts-jest"),", but simply trying to use the library you'll find nothing of value here")),(0,i.kt)("h2",{id:"e2e-testing"},"E2E Testing"),(0,i.kt)("h3",{id:"preparing"},"Preparing"),(0,i.kt)("p",null,"The preparation of E2E test directory is done in ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/e2e.js"),". Here is the process:"),(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ZLBBRgGm4BpxA-eMEAmYxH6EEUrNW0StG--ODh9xGkQotnxP32D6YQ8z8L5TZovtKXlLcEPq5US9cdxzfQIjaQ24oET9pShUutHbxtOO9nf390oHhBASeHDXKp0a3fbiJ5DWWjAyO0tn0iVnIRcdt_Jwh-iow3XswJPxbalNzSZV10rWDVGnqA88WhS_87dd66GcqNGmMoVsX6eC4MI7gPXwgrGV_VQV2JOIMB07U01TzzeVL7b4jMClwLw2uqY3XdYhyzw2YZuuQQfDi_AIUr3q4XnrSt1NJwdVzYQV29K4nMD-AwZDXZpcmi9omyYU4iOOPXoi7SUjZKEATWkusE5YpmGVXajXVyaLoJhCfDPPjQqn0F0ZSx89msJbJAukqq0JQGxlzErg-uWiCrYIMkzHXOY1w-_1nnsLcxdFb89Auq_eJvd-JpDJvKMVsLldHMMDh8JhugpIKqzVd-p-KYJkVd0k2DN6D2N1uxnouRVMcAHX-GG0",alt:null}),(0,i.kt)("h3",{id:"running"},"Running"),(0,i.kt)("p",null,"When a test-case needs to be run with a given template within tests, here is what's happening (in ",(0,i.kt)("inlineCode",{parentName:"p"},"e2e/__helpers__/test-case/runtime.ts"),"):"),(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/png/hLHDRzim3BthLn3OOGcsfC2E3R2TUzfFI1I9ZjN8f23IJOAX--s3PBknksAdtGoQ7-yzFahKPZNcqMMqYd3XV0OVyiuGAq8EfrRDatwE4Ou8FZGDPYI5X1aKHJVE2XfBVenqAPOsHoj1jWR9G-bZDjy1l-73x_s-3F0Xx-NMnK3d_VxXrrJrMZx7bgyxOq83gzOAM23skE_Ozn6beFkn1csHO7L3MPl7iTSYRIGGiL5ZNpXuoBZ9FL6W4r3g892eZT4qd06jQoiTABEXq9b0xUuaC0h2YdXTGg4fed6wGHCAgYPpDokQgMTZ77C2tHNo8OFDQ1odW1wKP_Ed9HYyEamAXpcnGu5d3icwiptX9h8xRv-5wN07QYvjY0YhDsfb_31z6k53NbU1Wu2GJTAork27mjuDKVMS2kekq2ddW5BOm5Y0tYm82VVP3Po5GLkhfa_UQjc5jjZ1XVleeSO6e2sQiQZXw37FoDKrZD2VKNJhc9fmsZxB0dp9MFw68D3qv3GmlNEGAqkw16qXsUflnwH8kd1HZ7mHQBZiHOi5wFGFSmm1rXPpdS3fzYzRBAKoeprWPe_sFnXZm8RagqFkPoy9NR0Ze0LCuUxTxm5NhQjhRYtvYD0odwiwW5VRfLZFo9ooFS8XPNOeibeVuEbdpIatK6WaT6hBGcI6yd4qmaYbibY2GWKBhXVb3ewzGXEkw85iDxn5BvWbC1LbvptANRYssA0IQe8RXJLt_R-ydUWCq2VbpYe_vdvObUp-lh7fADQb_weB8iNTyzr-v8AXosLsESjkOgOJktq5makyJTBFKW81CG5UWzIJAkQvX1Y1i7h77D-Cn2-O8P2o6T_Z0ao6LtXwUcUclXibe_QP8AFqiV8NvVG7",alt:null}))}p.isMDXComponent=!0}}]);