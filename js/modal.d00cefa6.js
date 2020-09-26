(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modal"],{e045:function(e,o,t){"use strict";t.r(o);var l=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("component-view",[t("h3",{staticClass:"subtitle"},[e._v("Modals")]),t("p",[e._v("Modals are flexible dialog prompts.")]),t("btn",{on:{click:function(o){e.modal=!0}}},[e._v("Default")]),t("btn",{attrs:{type:"error"},on:{click:function(o){e.small=!0}}},[e._v("Small")]),t("btn",{attrs:{type:"primary"},on:{click:function(o){e.large=!0}}},[e._v("Large")]),t("btn",{attrs:{type:"link"},on:{click:function(o){e.composed=!0}}},[e._v("Composed")]),t("modal",{model:{value:e.modal,callback:function(o){e.modal=o},expression:"modal"}},[t("h5",{attrs:{slot:"header"},slot:"header"},[e._v("Default modal")]),t("p",{attrs:{slot:"body"},slot:"body"},[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat. ")]),t("btn",{attrs:{slot:"footer",type:"primary"},on:{click:function(o){e.modal=!1}},slot:"footer"},[e._v("Ok")])],1),t("modal",{attrs:{size:"sm","close-overlay":!1},model:{value:e.small,callback:function(o){e.small=o},expression:"small"}},[t("h5",{attrs:{slot:"header"},slot:"header"},[e._v("Small without overlay close")]),t("p",{attrs:{slot:"body"},slot:"body"},[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat. ")])]),t("modal",{attrs:{size:"lg","close-btn":!1},model:{value:e.large,callback:function(o){e.large=o},expression:"large"}},[t("h2",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("Big without close button")]),t("p",{attrs:{slot:"body"},slot:"body"},[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat. ")])]),t("modal",{attrs:{size:"lg"},model:{value:e.composed,callback:function(o){e.composed=o},expression:"composed"}},[t("modal-header",[t("h3",[e._v("Composed modal")])]),t("modal-header",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat. ")]),t("modal-footer",[t("btn",{attrs:{slot:"footer",type:"error"},on:{click:function(o){e.composed=!1}},slot:"footer"},[e._v("Got it!")])],1)],1),t("prism",{attrs:{language:"html",code:e.html}}),t("prism",{attrs:{language:"javascript",code:e.js}})],1)},a=[],s=t("2b0e"),i=[{name:"Modal",props:{show:{type:"Boolean",description:"To make a modal appear. Used as v-model prop",default:!1},size:{type:"String",description:"Size of modal. The default size is 640px. Large is 960px and small is 320px",accepted:"lg, sm"},overlay:{type:"Boolean",description:"Show overlay. Don't disable it for large modals.",default:!0},closeBtn:{type:"Boolean",description:"Show close button",default:!0},closeOverlay:{type:"Boolean",description:"Сlose the modal when clicking on the overlay",default:!0}}}],n=[{name:"Modal",slots:{header:{description:"Modal window title"},body:{description:"Main content of the modal window"},footer:{description:"Modal window footer. Usually used to place actions"}}},{name:"ModalHeader",slots:{default:{description:"Modal window title"}}},{name:"ModalBody",slots:{default:{description:"Main content of the modal window"}}},{name:"ModalFooter",slots:{default:{description:"Modal window footer. Usually used to place actions"}}}],d=[{name:"Modal",events:{close:{description:"Emitted when close button or overlay were clicked. Used as v-model event",payload:"false"}}},{name:"ModalHeader",events:{close:{description:"Emitted when close button was clicked",payload:"false"}}}],r=s["default"].extend({name:"ModalPage",data:function(){return{props:i,slots:n,events:d,modal:!1,small:!1,large:!1,composed:!1,html:'<btn @click="modal = true">Default</btn>\n<btn @click="small = true">Small</btn>\n<btn @click="large = true">Large</btn>\n<btn @click="composed = true">Composed</btn>\n\n<modal v-model="modal">\n  <h5 slot="header">Default modal</h5>\n  <p slot="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>\n  <btn slot="footer" type="primary" @click="modal = false">Ok</btn>\n</modal>\n\n<modal v-model="small" size="sm" :close-overlay="false">\n  \x3c!-- Modal without overlay closet  --\x3e\n</modal>\n\n<modal :show="large" size="lg" @close="large = false" :closebtn="false">\n  \x3c!-- Big without close button  --\x3e\n</modal>\n\n\x3c!-- Or with composition --\x3e\n\n<modal v-model="composed" size="lg">\n  <modal-header>\n    <h3>Composed modal</h3>\n  </modal-header>\n  <modal-header>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet,\n    feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.\n  </modal-header>\n  <modal-footer>\n    <btn slot="footer" type="error" @click="composed = false">Got it!</btn>\n  </modal-footer>\n</modal>\n',js:"export default {\n  data: () => ({\n    modal: false,\n    small: false,\n    large: false,\n  }),\n}"}}}),c=r,m=t("2877"),u=Object(m["a"])(c,l,a,!1,null,null,null);o["default"]=u.exports}}]);