(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagination"],{7495:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("component-view",[t("h2",{staticClass:"title"},[e._v("Pagination")]),t("h3",{staticClass:"subtitle"},[e._v("Classic")]),t("pagination",{attrs:{pages:20,show:6},model:{value:e.current,callback:function(a){e.current=a},expression:"current"}}),t("prism",{attrs:{language:"html",code:e.basicHtml}}),t("prism",{attrs:{language:"javascript",code:e.basicJs}}),t("h3",{staticClass:"subtitle"},[e._v("Simple")]),t("p",[e._v("You could use previous and next pagination to navigate.")]),t("pagination",{attrs:{pages:e.pages},model:{value:e.page,callback:function(a){e.page=a},expression:"page"}}),t("prism",{attrs:{language:"html",code:e.simpleHtml}}),t("prism",{attrs:{language:"javascript",code:e.simpleJs}})],1)},r=[],s=t("2b0e"),i={pages:{type:"Number, String[]",description:"Total number of pages or array with page titles",required:!0},show:{type:"Number",description:"Number of pages shown",default:6},current:{type:"Number, String",description:"Current page",default:"1st element"}},p={change:{description:"Thrown when the current page changes",payload:"[current_page]"}},o=s["default"].extend({name:"PaginationPage",data:function(){return{props:i,events:p,current:1,pages:["Accordion","Avatar","Bar","Breadcrumb","Cards","Chips"],page:"Accordion",basicHtml:'<pagination v-model="current" :pages="20" :show="6" />',basicJs:"export default {\n  data: () => ({\n    current: 1,\n  })\n}",simpleHtml:'<pagination v-model="current" :pages="pages" />',simpleJs:"export default {\n  data: () => ({\n    pages: ['Accordion', 'Avatar', 'Bar', 'Breadcrumb', 'Cards', 'Chips'],\n    current: 'Accordion',\n  })\n}"}}}),c=o,l=t("2877"),u=Object(l["a"])(c,n,r,!1,null,null,null);a["default"]=u.exports}}]);