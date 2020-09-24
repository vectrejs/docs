(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["switch"],{c812:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("component-view",[o("h2",{staticClass:"title"},[t._v("Switch")]),o("p",[t._v(" Essentially, you use the same "),o("code",[t._v("<form-checkbox>")]),t._v(" component but with "),o("kbd",[t._v("switch")]),t._v(" type. The rest of the behavior and properties are the same. You can find information about props and slots at the following "),o("router-link",{attrs:{to:"/pages/form/checkbox"}},[t._v("link")]),t._v(". ")],1),o("form-checkbox",{attrs:{type:"switch"},model:{value:t.light,callback:function(e){t.light=e},expression:"light"}},[t._v(" Light ")]),t._v(" Ligth: "+t._s(t.light?"ON":"OFF")+" "),o("prism",{attrs:{language:"html",code:t.basicHtml}}),o("prism",{attrs:{language:"javascript",code:t.basicJs}}),o("h3",{staticClass:"subtitle"},[t._v("Group")]),o("p",[t._v(" Switch components can be grouped like the checkboxes with "),o("code",[t._v("<form-checkbox-group>")]),t._v(" and "),o("kbd",[t._v("options")]),t._v(" property. ")]),o("form-checkbox-group",{attrs:{type:"switch",options:["Temperature","Humidity","Ventilation","Lighting"]},model:{value:t.conditions,callback:function(e){t.conditions=e},expression:"conditions"}}),t._v(" Environment conditions: "+t._s(t.conditions)+" "),o("prism",{attrs:{language:"html",code:t.groupHtml}}),o("prism",{attrs:{language:"javascript",code:t.groupJs}}),o("p",[t._v("The same with nested elements:")]),o("prism",{attrs:{language:"html",code:t.nestedHtml}})],1)},i=[],c=o("2b0e"),s=c["default"].extend({name:"SwitchPage",data:function(){return{light:!1,conditions:[],basicHtml:"<form-checkbox type=\"switch\" v-model=\"light\">\n  Light\n</form-checkbox>\nLigth: {{ light ? 'ON' : 'OFF' }}",basicJs:"export default {\n  data: () => ({\n    light: false,\n  }),\n}",groupHtml:"<form-checkbox-group\n  type=\"switch\"\n  :options=\"['Temperature', 'Humidity', 'Ventilation', 'Lighting']\"\n  v-model=\"conditions\"\n/>\nEnvironment conditions: {{ conditions }}",groupJs:"export default {\n  data: () => ({\n    conditions: [], // Should be an array\n  }),\n}",nestedHtml:'<form-checkbox-group type="switch" v-model="conditions">\n  <form-checkbox value="Temperature"/>\n  <form-checkbox value="Humidity"/>\n  <form-checkbox value="Ventilation"/>\n  <form-checkbox value="Lighting"/>\n</form-checkbox-group>'}}}),a=s,r=o("2877"),l=Object(r["a"])(a,n,i,!1,null,null,null);e["default"]=l.exports}}]);