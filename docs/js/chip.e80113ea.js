(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chip"],{da92:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("component-view",[a("h2",{staticClass:"title"},[t._v("Chips")]),a("p",[t._v("Chips are complex entities in small blocks.")]),a("chip",{attrs:{text:"Arya Stark"}}),a("chip",{attrs:{text:"Tyrion Lannister",active:""}}),a("chip",{attrs:{text:"John Snow",avatar:"https://picturepan2.github.io/spectre/img/avatar-1.png"}}),a("chip",{attrs:{text:"Khal Drogo",initials:"KD"}}),t.alive?a("chip",{attrs:{text:"Ned Stark"},on:{close:function(e){t.alive=!1}}}):t._e(),a("prism",{attrs:{language:"html",code:t.code}})],1)},n=[],r=a("2b0e"),o={close:{description:"Emitted when close button is clicked"}},c={text:{type:"String",description:"Text",required:!0},avatar:{type:"String",description:"URL of an avatar image"},initials:{type:"String",description:"Initials for avatars. Shown when avatar is not defined and automatically truncated to 2 characters"},active:{type:"Boolean",description:"Alters colors of chip"}},s=r["default"].extend({name:"ChipPage",data:function(){return{props:c,events:o,alive:!0,code:'<chip text="Arya Stark" />\n<chip text="Tyrion Lannister" active />\n<chip text="John Snow" avatar="img/avatar-1.png" />\n<chip text="Khal Drogo" initials="KD" />\n<chip v-if="alive" text="Ned Stark" @close="alive = false" />\n'}}}),p=s,l=a("2877"),h=Object(l["a"])(p,i,n,!1,null,null,null);h.options.__file="Chip.vue";e["default"]=h.exports}}]);