(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["start"],{"33d7":function(e,t,s){e.exports=s.p+"img/browsers.3965cc4b.png"},"615e":function(e,t,s){"use strict";var n=s("9216"),i=s.n(n);i.a},9216:function(e,t,s){},"959b":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("column",{attrs:{col:"10",xl:"10",lg:"9",md:"12",mr:""}},[s("Overview",{attrs:{id:"introduction"}}),s("Installation",{attrs:{id:"installation"}}),s("Playgrounds",{attrs:{id:"playgrounds"}})],1)],1)},i=[],r=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",{staticClass:"title"},[e._v("Installation")]),s("p",[e._v("The framework supports several options for installation. Choose the one that suits your scenario.")]),s("h3",{staticClass:"pt-2"},[e._v("NPM or Yarn")]),e._m(0),s("prism",{attrs:{code:e.npm,language:"bash"}}),s("h5",{staticClass:"pt-2"},[e._v("Usage")]),s("prism",{attrs:{code:e.npmUsage,language:"js"}}),s("h5",{staticClass:"pt-2"},[e._v("Tree shaking")]),s("p",[e._v(" Using separate components should reduce the size of the final bundle. Just import the components you want and the bundler should do the rest. ")]),s("prism",{attrs:{code:e.npmTree,language:"js"}}),s("h3",{staticClass:"pt-2"},[e._v(" CDN "),s("sup",[s("small",[s("tag",{attrs:{rounded:"",type:"primary"}},[e._v("standalone")])],1)])]),s("p",[e._v(" It's easy to get started with CDN. It doesn't require anything other than import JavaScript and CSS file in your page: ")]),e._m(1),s("h5",[e._v("Usage")]),s("prism",{attrs:{code:e.cdn,language:"html"}}),s("h3",{staticClass:"pt-2"},[e._v("Legacy Browsers")]),s("p",[e._v(" As mentioned above, there is a ready-made package with support of older browsers. You just have to import it in the same way as in the case of CDN: ")]),e._m(2),s("h3",{staticClass:"pt-2"},[e._v("Name collision")]),s("p",[e._v(" Vectre is developed with the thought in mind about the minimum effort spent on development. Therefore, component names are as simple as possible and do not conflict with standard html5 tags. But there is always a chance that you might run into a name conflict. ")]),s("p",[e._v("You can set a prefix to avoid conflict when using the plugin with all components.")]),s("prism",{attrs:{code:e.npmConflict,language:"js"}}),e._v("Or in the case of CDN "),s("prism",{attrs:{code:e.cdnConflict,language:"html"}}),e._m(3)],1)},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" Great for development using "),s("a",{attrs:{href:"https://webpack.js.org/",title:"Go to official site",target:"_blank"}},[e._v("webpack")]),e._v(", "),s("a",{attrs:{href:"https://rollupjs.org/guide/en/",title:"Go to official site",target:"_blank"}},[e._v("rollup")]),e._v(" bundlers or "),s("a",{attrs:{href:"https://cli.vuejs.org/",title:"Go to official site",target:"_blank"}},[e._v("Vue CLI")]),e._v(" with their own advantages. ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b",[e._v("UNPKG")]),s("ul",[s("li",[s("b",[e._v("Scripts")]),e._v(" https://unpkg.com/@vectrejs/vectre/dist/vectre.min.js")]),s("li",[s("b",[e._v("Styles")]),s("ul",[s("li",[e._v("CSS: https://unpkg.com/spectre.css/dist/spectre.min.css")]),s("li",[e._v("Icons: https://unpkg.com/spectre.css/dist/spectre-icons.min.css")]),s("li",[e._v("Experemental: https://unpkg.com/spectre.css/dist/spectre-exp.min.css")])])])]),s("b",[e._v("jsDelivr")]),s("ul",[s("li",[s("b",[e._v("Scripts")]),e._v(" https://cdn.jsdelivr.net/npm/@vectrejs/vectre/dist/vectre.min.js")]),s("li",[s("b",[e._v("Styles")]),s("ul",[s("li",[e._v("CSS: https://cdn.jsdelivr.net/npm/spectre.css/dist/spectre.min.css")]),s("li",[e._v("Icons: https://cdn.jsdelivr.net/npm/spectre.css/dist/spectre-icons.min.css")]),s("li",[e._v("Experemental: https://cdn.jsdelivr.net/npm/spectre.css/dist/spectre-exp.min.css")])])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("b",[e._v("jsDelivr")]),e._v(" https://cdn.jsdelivr.net/npm/@vectrejs/vectre/dist/vectre.legacy.min.js")]),s("li",[s("b",[e._v("UNPKG")]),e._v(" https://unpkg.com/@vectrejs/vectre/dist/vectre.legacy.min.js")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" Now all components and directives are registered with the prefix. Result: "),s("code",[e._v("<btn v-tooltip=\"'Click'\" />")]),e._v(" becomes "),s("code",[e._v("<my-btn v-my-tooltip=\"'Click'\" />")])])}],c='<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/spectre.css/dist/spectre.min.css">\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/spectre.css/dist/spectre-icons.min.css">\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/spectre.css/dist/spectre-exp.min.css">\n</head>\n\n<body>\n  <div id="app">\n    \x3c!-- Vectre components goes here --\x3e\n  </div>\n\n  <script src="https://cdn.jsdelivr.net/npm/vue"><\/script>\n  <script src="https://cdn.jsdelivr.net/npm/@vectrejs/vectre/dist/vectre.min.js"><\/script>\n\n  <script>\n    Vue.use(Vectre);\n\n    new Vue({\n      el: \'#app\',\n    });\n  <\/script>\n</body>\n</html>',l='<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/spectre.css/dist/spectre.min.css">\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/spectre.css/dist/spectre-icons.min.css">\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/spectre.css/dist/spectre-exp.min.css">\n</head>\n\n<body>\n  <div id="app">\n    \x3c!-- Vectre components with prefix "my-" goes here --\x3e\n  </div>\n\n  <script src="https://cdn.jsdelivr.net/npm/vue"><\/script>\n  <script src="https://cdn.jsdelivr.net/npm/@vectrejs/vectre/dist/vectre.min.js"><\/script>\n\n  <script>\n    Vue.use(Vectre, { prefix: \'my\' });\n\n    new Vue({\n      el: \'#app\',\n    });\n  <\/script>\n</body>\n</html>',p={data:()=>({cdn:c,cdnConflict:l,npm:"npm install --save spectre.css @vectrejs/vectre\n# OR\nyarn add spectre.css @vectrejs/vectre\n",npmUsage:"import Vue from 'vue';\nimport 'spectre.css/dist/spectre-exp.css';\nimport 'spectre.css/dist/spectre-icons.css';\nimport 'spectre.css/dist/spectre.css';\nimport { VectrePlugin } from '@vectrejs/vectre';\n\nVue.use(VectrePlugin);",npmTree:"import Vue from 'vue';\nimport 'spectre.css/dist/spectre.css';\nimport { Tag, Modal } from '@vectrejs/vectre';\n\nVue.component('Tag', Tag);\nVue.component('Modal', Modal);",npmConflict:"import Vue from 'vue';\nimport { VectrePlugin } from '@vectrejs/vectre';\n\nVue.use(VectrePlugin, { prefix: 'my' });"})},d=p,v=(s("615e"),s("2877")),m=Object(v["a"])(d,a,o,!1,null,"a7ef770c",null),h=m.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"title"},[e._v("Introduction")]),e._m(0),n("h4",[e._v("Core principles")]),n("p",[e._v("In trying to find the best performance ratio, Vectre follows a few core principles:")]),e._m(1),n("h4",{staticClass:"pt-2"},[e._v("Browser Support")]),n("p",[e._v(" At present, Vectre supports all modern browsers and additionally has a build to support older browsers like IE 10 or Safari 9 ")]),n("div",[n("img",{staticClass:"img-responsive",staticStyle:{"max-height":"100px"},attrs:{src:s("33d7")}})])])},f=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"pt-2"},[e._v(" Vectre is a component framework made on top of two well known frameworks "),s("a",{attrs:{href:"https://vuejs.org/",title:"Go to official site",target:"_blank"}},[e._v("Vue.js")]),e._v(" and "),s("a",{attrs:{href:"https://picturepan2.github.io/spectre/index.html",title:"Go to official site",target:"_blank"}},[e._v(" Spectre CSS")]),e._v(". It allows you to quickly start prototyping your solution or add interactivity to an existing project based on Specter CSS. ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("dl",[s("dt",[e._v('"Ease of use"')]),s("dd",[e._v(" One of the motivations is to make development easy with no extra effort, without additional build steps, complex compositions and so on. Just take the data and give it to the Vectre components. ")]),s("dt",[e._v('"Simplicity balances complexity"')]),s("dd",[e._v(" You can see that most of the use cases have already been implemented but it is still possible to customize the components as you see fit. ")]),s("dt",[e._v('"Size matters"')]),s("dd",[e._v(" Vectre continued the Spectre CSS philosophy to remain lightweigth without compromising quality. The current implementation is about "),s("b",[e._v("14kb")]),e._v(" (compressed) which allows for uncompromising application sizes of only about "),s("b",[e._v("60kb")]),e._v(". In addition, the framework has tree shaking out of the box which can make your final bundle even smaller. ")]),s("dt",[e._v('"Optimization out of the box"')]),s("dd",[e._v(" Most of the components are implemented as "),s("a",{attrs:{href:"https://vuejs.org/v2/guide/render-function.html#Functional-Components",target:"_blank",title:"Go to documentation"}},[e._v(" functional")]),e._v(", this gives an additional performance boost. A number of technical solutions made it possible to get rid of parts that had the least value but brought a decrease in performance. ")]),s("dt",[e._v('"System reliability"')]),s("dd",[e._v(" Using a couple of "),s("a",{attrs:{href:"https://www.typescriptlang.org/",title:"Go to official site",target:"_blank"}},[e._v("Typescript")]),e._v(" and "),s("a",{attrs:{href:"https://github.com/wonderful-panda/vue-tsx-support/blob/v2/README.md",title:"Go to documentation",target:"_blank"}},[e._v(" TSX")]),e._v(" under the hood provides additional reliability. You can be sure everything is in place and you get all the benefits of strict typing. ")])])}],_={},g=_,b=Object(v["a"])(g,u,f,!1,null,null,null),y=b.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("Playgrounds")]),s("p",[e._v(" There is a great way to try Vectre without writing a single line of code. Listed below are a number of playgrounds that can be taken as an example of a simplified starter kit ")]),s("ul",[s("li",[e._v(" All in One: "),s("a",{attrs:{href:"https://codesandbox.io/s/vectre-all-in-one-yff7f",target:"_blank",title:"Playground Vectre All in One"}},[e._v(" https://codesandbox.io/s/vectre-all-in-one-yff7f ")])]),s("li",[e._v(" Individual Components: "),s("a",{attrs:{href:"https://codesandbox.io/s/vectre-components-4pd1n",target:"_blank",title:"Playground Vectre All in One"}},[e._v(" https://codesandbox.io/s/vectre-components-4pd1n ")])]),s("li",[e._v(" CDN: "),s("a",{attrs:{href:"https://codepen.io/vatson_ua/pen/RwavXQY",target:"_blank",title:"Playground Vectre CDN"}},[e._v(" https://codepen.io/vatson_ua/pen/RwavXQY ")])])])])}],k={},x=k,C=Object(v["a"])(x,w,j,!1,null,null,null),V=C.exports,S=r["default"].extend({name:"StartPage",components:{Installation:h,Overview:y,Playgrounds:V}}),E=S,P=Object(v["a"])(E,n,i,!1,null,null,null);t["default"]=P.exports}}]);