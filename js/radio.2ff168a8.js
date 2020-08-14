(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["radio"],{b1dc:function(e,o,a){"use strict";a.r(o);var t=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("component-view",[a("h2",{staticClass:"title"},[e._v("Radio")]),a("button",{on:{click:function(o){e.counter++}}},[e._v("click")]),e._v(e._s(e.counter)+"\n    "),a("p",[e._v("\n      Radio button allows the user to choose only one of a predefined set of mutually exclusive options. Radios of one\n      group should have the same "),a("code",[e._v("name")]),e._v(" or "),a("code",[e._v("v-model")])]),a("form-radio",{model:{value:e.gender,callback:function(o){e.gender=o},expression:"gender"}},[e._v("Male")]),a("form-radio",{model:{value:e.gender,callback:function(o){e.gender=o},expression:"gender"}},[e._v("Female")]),e._v("\n    Selected radio: "+e._s(e.gender)+"\n\n    "),a("prism",{attrs:{language:"html",code:e.genderHtml}}),a("prism",{attrs:{language:"javascript",code:e.genderJs}}),a("h5",{staticClass:"subtitle"},[e._v("Checked")]),a("form-radio",{attrs:{label:"Option A",checked:""}}),a("prism",{attrs:{language:"html",code:'<form-radio label="Option A" checked />'}}),a("h5",{staticClass:"subtitle"},[e._v("Disabled")]),a("form-radio",{attrs:{label:"Option A",disabled:""}}),a("form-radio",{attrs:{label:"Option B",disabled:"",checked:""}}),a("prism",{attrs:{language:"html",code:'<form-radio label="Option A" disabled />\n<form-radio label="Option B" disabled checked />'}}),a("h5",{staticClass:"subtitle"},[e._v("Size")]),a("form-radio",{attrs:{label:"Text",size:"sm",name:"size"}}),a("form-radio",{attrs:{label:"Text",name:"size"}}),a("form-radio",{attrs:{label:"Text",size:"lg",name:"size"}}),a("prism",{attrs:{language:"html",code:e.sizeHtml}}),a("h5",{staticClass:"subtitle"},[e._v("Inline")]),a("form-radio",{attrs:{label:"A",inline:"",name:"inline"}}),a("form-radio",{attrs:{label:"B",inline:"",name:"inline"}}),a("prism",{attrs:{language:"html",code:'<form-radio label="A" inline name="example" />\n<form-radio label="B" inline name="example" />'}}),a("h5",{staticClass:"subtitle"},[e._v("Invalid")]),a("form-radio",{attrs:{label:"Invalid",error:""}}),a("prism",{attrs:{language:"html",code:'<form-radio label="Invalid" error />'}}),a("h2",{staticClass:"subtitle"},[e._v("Radio Group")]),a("h4",{staticClass:"subtitle"},[e._v("Manual mode")]),a("p",[e._v("You can create a group with the "),a("code",[e._v("for...in")]),e._v(" loop")]),e._l(e.options,(function(o,t){return a("form-radio",{key:t,attrs:{name:"gender",value:o},model:{value:e.manualGroup,callback:function(o){e.manualGroup=o},expression:"manualGroup"}},[e._v("\n      "+e._s(o)+"\n    ")])})),e._v("\n    Selected radio: "+e._s(e.manualGroup)+"\n    "),a("prism",{attrs:{language:"html",code:e.manualGroupHtml}}),a("prism",{attrs:{language:"javascript",code:e.manualGroupJs}}),a("h3",{staticClass:"subtitle"},[a("code",[e._v("<form-radio-group>")]),e._v(" component")]),a("p",[e._v("\n      An easy way to create a group of checkboxes without need to use\n      "),a("code",[e._v("for...in")]),e._v(" or manual defining of "),a("code",[e._v("v-model")]),e._v(" for each option.\n    ")]),a("h5",{staticClass:"subtitle"},[e._v("Options as Array")]),a("p",[e._v("It's a good option when values match with labels")]),a("form-radio-group",{attrs:{options:["Male","Female"]},model:{value:e.arr,callback:function(o){e.arr=o},expression:"arr"}}),e._v("\n    Selected radio: "+e._s(e.arr)+"\n    "),a("prism",{attrs:{language:"html",code:e.arrHtml}}),a("prism",{attrs:{language:"js",code:e.arrJs}}),a("h5",{staticClass:"subtitle"},[e._v("Options as Object")]),a("p",[e._v("Use an object when you need to separate values from labels")]),a("form-radio-group",{attrs:{options:{Male:"m",Female:"f"}},model:{value:e.obj,callback:function(o){e.obj=o},expression:"obj"}}),e._v("\n    Selected radio: "+e._s(e.obj)+"\n    "),a("prism",{attrs:{language:"html",code:e.objHtml}}),a("prism",{attrs:{language:"js",code:e.objJs}}),a("h5",{staticClass:"subtitle"},[e._v("Nested Options")]),a("p",[e._v("\n      It's a good way to customize each option of the group. Nested options have higher priority and can take theirs own\n      "),a("code",[e._v("size")]),e._v(","),a("code",[e._v("error")]),e._v(" and "),a("code",[e._v("disabled")]),e._v(" props. "),a("code",[e._v("checked")]),e._v(" prop is ignored when a\n      radio is in a group\n    ")]),a("form-radio-group",{model:{value:e.nested,callback:function(o){e.nested=o},expression:"nested"}},[a("form-radio",{attrs:{value:"M"}},[e._v("Male")]),a("form-radio",{attrs:{label:"Female",error:""}})],1),e._v("\n    Selected radio: "+e._s(e.nested)+"\n    "),a("prism",{attrs:{language:"html",code:e.nestedHtml}}),a("h5",{staticClass:"subtitle"},[e._v("Disabled Group")]),a("form-radio-group",{attrs:{options:["Option A","Option B","Option C"],disabled:""}}),a("prism",{attrs:{language:"html",code:e.disabledGroupHtml}}),a("h5",{staticClass:"subtitle"},[e._v("Group Size")]),a("form-radio-group",{attrs:{options:["Option A","Option B","Option C"],size:"sm"}}),a("prism",{attrs:{language:"html",code:e.groupSizeHtml}}),a("h5",{staticClass:"subtitle"},[e._v("Inline Group")]),a("form-radio-group",{attrs:{options:["Option A","Option B","Option C"],inline:""}}),a("prism",{attrs:{language:"html",code:e.inlineGroupHtml}}),a("h5",{staticClass:"subtitle"},[e._v("Invalid Group")]),a("form-radio-group",{attrs:{options:["Option A","Option B","Option C"],error:""}}),a("prism",{attrs:{language:"html",code:e.invalidGroupHtml}})],2)},n=[],r=a("2b0e"),i=[{name:"Radio",props:{label:{type:"String",description:"Label of radio button"},value:{type:"Any",description:"The value of radio when it's checked. Can act as a label if it is not set"},name:{type:"String",description:"Group of radios defined by name. In one group can be chosen only one radio button."},checked:{type:"Boolean",description:"If the radio is checked",default:!1},disabled:{type:"Boolean",description:"Disables the radio button",default:!1},error:{type:"Boolean",description:"Indicates that there is an error"},inline:{type:"Boolean",description:"Makes a radio as an inline element",default:!1},size:{type:"String",description:"The size of radio button",accepted:"sm, lg"}}},{name:"Radio Group",props:{options:{type:"Object | Any[]",description:"All netsted radio buttons are ignored if the options are given"},name:{type:"String",description:"The name is applied to the each radio of the group"},disabled:{type:"Boolean",description:"Disables all radio buttons of the group",default:!1},error:{type:"Boolean",description:"Makes the whole group invalid"},inline:{type:"Boolean",description:"Makes radio buttons inline",default:!1},size:{type:"String",description:"The size of the whole group",accepted:"sm, lg"}}}],l=[{name:"Radio",slots:{default:{description:"Shown as a label. The text of the slot can be used as value"}}},{name:"Radio Group",slots:{default:{description:"Only nested <code>form-radio</code> elements will be included"}}}],s=r["default"].extend({name:"RadioPage",data:function(){return{counter:0,props:i,slots:l,selectedRadio:"Male",gender:void 0,options:["Male","Female"],manualGroup:"Male",arr:void 0,obj:void 0,nested:void 0,genderHtml:'<form-radio v-model="gender">Male</form-radio>\n<form-radio v-model="gender">Female</form-radio>',genderJs:"export default {\n  data: () => ({\n    gender: undefined,\n  }),\n}",sizeHtml:'<form-radio label="Text" name="example" size="sm" />\n<form-radio label="Text" name="example" />\n<form-radio label="Text" name="example" size="lg" />',manualGroupHtml:'<form-radio\n  v-for="(gender, i) in options"\n  :key="i"\n  name="gender"\n  :value="gender"\n  v-model="selectedGender"\n>\n  {{ gender }}\n</form-radio>\n',manualGroupJs:"export default {\n  data: () => ({\n    options: ['Male', 'Female'],\n    selectedGender: 'Male',\n  }),\n}",arrHtml:"<form-radio-group :options=\"['Male', 'Female']\" v-model=\"gender\" />",arrJs:"export default {\n  data: () => ({\n    gender: undefined,\n  }),\n}",objHtml:"<form-radio-group :options=\"{Male: 'm', Female: 'f'}\" v-model=\"gender\" />",objJs:"export default {\n  data: () => ({\n    gender: undefined,\n  }),\n}",nestedHtml:'<form-radio-group v-model="nested">\n  <form-radio value="M">Male</form-radio>\n  <form-radio label="Female" error></form-radio>\n</form-radio-group>',disabledGroupHtml:"<form-radio-group\n  :options=\"['Option A', 'Option B', 'Option C']\"\n  disabled\n/>",groupSizeHtml:"<form-radio-group\n  :options=\"['Option A', 'Option B', 'Option C']\"\n  size=\"sm\"\n/>",inlineGroupHtml:"<form-radio-group\n  :options=\"['Option A', 'Option B', 'Option C']\"\n  inline\n/>",invalidGroupHtml:"<form-radio-group\n  :options=\"['Option A', 'Option B', 'Option C']\"\n  error\n/>"}}}),d=s,p=a("2877"),m=Object(p["a"])(d,t,n,!1,null,null,null);m.options.__file="Radio.vue";o["default"]=m.exports}}]);