(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["overlay"],{"6af5":function(e,l,o){"use strict";o.r(l);var r=function(){var e=this,l=e.$createElement,o=e._self._c||l;return o("component-view",[o("h2",{staticClass:"title"},[e._v("Overlay")]),o("p",[e._v(" An overlay provides contextual information and options in form of an additional layer on top of the current state of the interface. It is usually used when it is necessary to interrupt the user's current task in order to draw his attention to something more important. ")]),o("p",[e._v("For these purposes, you can add "),o("kbd",[e._v("v-overlay")]),e._v(" directive to an element to cover it with an overlay.")]),o("columns",[o("column",{attrs:{col:"6",lg:"12",mx:""}},[o("card",{directives:[{name:"overlay",rawName:"v-overlay",value:Object.assign({},e.overlayConfig),expression:"{ ...overlayConfig }"}],staticClass:"p-relative"},[o("card-header",{staticStyle:{"z-index":"20"}},[o("h3",[e._v("Demo")])]),o("card-body",[o("form-group",[o("form-label",[e._v("Blur")]),o("form-slider",{attrs:{max:"8",tooltip:"px"},model:{value:e.overlayConfig.blur,callback:function(l){e.$set(e.overlayConfig,"blur",l)},expression:"overlayConfig.blur"}})],1),o("form-group",[o("form-label",[e._v("Opacity")]),o("form-slider",{attrs:{max:"99",tooltip:"%"},model:{value:e.overlayConfig.opacity,callback:function(l){e.$set(e.overlayConfig,"opacity",l)},expression:"overlayConfig.opacity"}})],1),o("form-group",[o("form-label",[e._v("Z Index")]),o("form-slider",{attrs:{max:"1000",min:"2",tooltip:""},model:{value:e.overlayConfig.zIndex,callback:function(l){e.$set(e.overlayConfig,"zIndex",l)},expression:"overlayConfig.zIndex"}})],1),o("form-group",[o("form-label",[e._v("Text")]),o("form-input",{attrs:{placeholder:"Text"},model:{value:e.overlayConfig.text,callback:function(l){e.$set(e.overlayConfig,"text",l)},expression:"overlayConfig.text"}})],1)],1),o("card-footer",{staticClass:"text-center mt-2"},[o("btn",{attrs:{type:"primary"},on:{click:function(l){e.overlayConfig.show=!0}}},[e._v("Show")])],1)],1)],1)],1),o("prism",{attrs:{language:"html",code:e.overlayHtml}}),o("prism",{attrs:{language:"js",code:e.overlayJs}}),o("p",[e._v("The directive supports multiple "),o("b",[e._v("value")]),e._v(" types depending on the scenario:")]),o("ul",[o("li",[o("kbd",[e._v("Boolean")]),e._v(" is just a overlay switch. E.g. "),o("code",[e._v('<div v-overlay="false" />')])]),o("li",[o("kbd",[e._v("String")]),e._v(" is the text that will be displayed in the center of the overlay. "),o("br"),e._v(" E.g. "),o("code",[e._v("<div v-overlay=\"show && 'My Text Inside Overlay'\" />")])]),o("li",[o("kbd",[e._v("Function")]),e._v(" can be used as a callback when clicking on overlay. "),o("br"),e._v(" E.g. "),o("code",[e._v('<div v-overlay="show && (() => (show = false))" />')])]),o("li",[o("kbd",[e._v("Object")]),e._v(" is an advanced option that allows flexible setting of overlay. The object have a certain structure: "),o("pre",[e._v("{\n  show: boolean, // false by default\n  onClick: function, \n  text: string, \n  blur: string | number, // 2 \n  opacity: string | number, // 75 \n  zIndex: string | number, // 1\n}")])])]),o("i",[e._v(" Note: the overlay must be assigned to an element with a "),o("b",[e._v("relative")]),e._v(" position so as not to cover the fullscreen. For this you can use the special "),o("code",[e._v("p-relative")]),e._v(" class ")]),o("h5",{staticClass:"subtitle"},[e._v("Modifiers")]),o("p",[e._v(" Add "),o("code",[e._v("fullscreen")]),e._v(" modifier for fullscreen overlay. ")]),o("div",{directives:[{name:"overlay",rawName:"v-overlay.fullscreen",value:e.fullscreen&&function(){return e.fullscreen=!1},expression:"fullscreen && (() => (fullscreen = false))",modifiers:{fullscreen:!0}}],staticClass:"text-center"},[o("btn",{attrs:{type:"primary"},on:{click:function(l){e.fullscreen=!0}}},[e._v("Fullscreen Overlay")])],1),o("prism",{attrs:{language:"html",code:e.fullscreenHtml}}),o("p",[e._v(" Add "),o("code",[e._v("noScroll")]),e._v(" modifier to disable background scrolling when overlay is shown. ")]),o("div",{directives:[{name:"overlay",rawName:"v-overlay.fullscreen.noScroll",value:e.noscroll&&function(){return e.noscroll=!1},expression:"noscroll && (() => (noscroll = false))",modifiers:{fullscreen:!0,noScroll:!0}}],staticClass:"text-center"},[o("btn",{attrs:{type:"primary"},on:{click:function(l){e.noscroll=!0}}},[e._v("Fullscreen Without Scroll")])],1),o("prism",{attrs:{language:"html",code:e.noScrollHtml}}),o("p",[e._v(" Add "),o("code",[e._v("blur")]),e._v(" modifier to blur the background. ")]),o("div",{directives:[{name:"overlay",rawName:"v-overlay.fullscreen.blur",value:e.blur&&function(){return e.blur=!1},expression:"blur && (() => (blur = false))",modifiers:{fullscreen:!0,blur:!0}}],staticClass:"text-center"},[o("btn",{attrs:{type:"primary"},on:{click:function(l){e.blur=!0}}},[e._v("Blured Fullscreen")])],1),o("prism",{attrs:{language:"html",code:e.blurHtml}})],1)},t=[],n=o("2b0e"),a=n["default"].extend({name:"OverlayDirectivePage",data:function(){var e=this;return{overlayConfig:{show:!1,blur:0,opacity:75,zIndex:21,text:"<H2>Click to Close</H2>",onClick:function(){return e.$set(e.overlayConfig,"show",!1)}},blur:!1,noscroll:!1,fullscreen:!1,overlayHtml:'<card \n  v-overlay="{ text, opacity, blur, onClick: () => (show = false)  }" \n  class="p-relative"\n>\n  <card-header style="z-index: 20">\n    <h3>Demo</h3>\n  </card-header>\n  <card-body>    \n    <form-slider v-model="blur" max="8" tooltip="px" />\n    <form-slider v-model="opacity" max="99" tooltip="%" />\n    <form-slider v-model="zIndex" max="1000" min="2" tooltip />\n    <form-input v-model="overlayConfig.text" placeholder="Text" />\n  </card-body>\n  <card-footer class="text-center mt-2">\n    <btn type="primary" @click="show = true">Show</btn>\n  </card-footer>\n</card>',fullscreenHtml:'<div v-overlay.fullscreen="show && (() => (show = false))">\n  <btn @click="show = true">Fullscreen Overlay</btn>\n</div>',noScrollHtml:'<div v-overlay.noScroll.fullscreen="show && (() => (show = false))">\n  <btn @click="show = true">Fullscreen Overlay</btn>\n</div>',blurHtml:'<div v-overlay.blur.fullscreen="show && (() => (show = false))">\n  <btn @click="show = true">Fullscreen Overlay</btn>\n</div>',overlayJs:"export default {\n  data: () => ({\n    show: false,\n    blur: 0,\n    opacity: 75,\n    zIndex: 21,\n    text: '<H2>Click to Close</H2>',\n  }),\n}"}}}),s=a,i=o("2877"),c=Object(i["a"])(s,r,t,!1,null,null,null);l["default"]=c.exports}}]);