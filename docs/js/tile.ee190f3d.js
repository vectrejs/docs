(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tile"],{"50a4":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("component-view",[n("h2",{staticClass:"title"},[t._v("Tiles")]),n("p",[t._v("Tiles are repeatable or embeddable information blocks.")]),n("h3",{staticClass:"subtitle"},[t._v("Basic usage")]),n("columns",[n("column",{attrs:{col:"7",xl:"9",sm:"12"}},[n("tile",{attrs:{icon:"people",title:"Academy Awards",subtitle:"A set of 25 awards for artistic and technical merit in the American film industry, given annually by the Academy of Motion Picture Arts and Sciences (AMPAS)..."}})],1),n("column",{attrs:{col:"7",xl:"9",sm:"12"}},[n("tile",{attrs:{avatar:"https://picturepan2.github.io/spectre/img/avatar-1.png",title:"Avengers: Infinity War",subtitle:"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos ..."}},[n("template",{slot:"actions"},[n("btn",{attrs:{type:"primary"}},[t._v("Watch")]),n("btn",[t._v("Skip")])],1)],2)],1),n("column",{attrs:{col:"7",xl:"9",sm:"12"}},[n("tile",{attrs:{initials:"X",title:"X-Men",subtitle:"Two mutants come to a private academy for their kind whose resident superhero team must oppose a terrorist organization with similar powers."}},[n("btn",{attrs:{type:"primary"}},[t._v("Watch")]),n("btn",[t._v("Skip")])],1)],1)],1),n("prism",{attrs:{language:"html",code:t.baseHtml}}),n("h3",{staticClass:"subtitle"},[t._v("Compact")]),n("p",[t._v("Compact version of Tiles component")]),n("columns",[n("column",{attrs:{col:"5",md:"8",sm:"12"}},[n("tile",{attrs:{compact:"",initials:"L",title:"Logan",subtitle:"Offline · Last seen: 3 March 2017"}},[n("dropdown-menu",{attrs:{slot:"actions",right:"","btn-icon":"icon-more-vert","btn-type":"link",items:[{text:"Call"}]},slot:"actions"})],1)],1)],1),n("prism",{attrs:{language:"html",code:t.compactHtml}})],1)},a=[],s=n("2b0e"),l={default:{description:"Custom content shown after subtitle in the content section"},actions:{description:"Actions section"},icon:{description:"Adds the ability to display content in the icon section"}},o={title:{type:"String",description:"Title can contain html tags"},subtitle:{type:"String",description:"Subtitle can contain html tags"},avatar:{type:"String",description:"URL of an image"},icon:{type:"String",description:"All available icons placed insted of avatar"},compact:{type:"Boolean",description:"Show compact tile"}},r=s["default"].extend({name:"TilePage",data:function(){return{props:o,slots:l,baseHtml:'<tile\n  icon="people"\n  title="Academy Awards"\n  subtitle="A set of 25 awards for artistic..."\n/>\n\n<tile\n  avatar="img/avatar-1.png"\n  title="Avengers: Infinity War"\n  subtitle="The Avengers and their allies must be willing..."\n>\n  <template slot="actions">\n    <btn type="primary">Watch</btn>\n    <btn>Skip</btn>\n  </template>\n</tile>\n\n<tile\n  initials="X"\n  title="X-Men"\n  subtitle="Two mutants come to a private academy for their kind..."\n>\n  <btn type="primary">Watch</btn>\n  <btn>Skip</btn>\n</tile>',compactHtml:'<tile compact\n  initials="L"\n  title="Logan"\n  subtitle="Offline · Last seen: 3 March 2017"\n>\n  <dropdown-menu right\n    slot="actions"\n    btn-icon="icon-more-vert"\n    btn-type="link"\n    :items="[{text: \'Call\'}]" />\n</tile>'}}}),c=r,p=n("2877"),m=Object(p["a"])(c,i,a,!1,null,null,null);m.options.__file="Tile.vue";e["default"]=m.exports}}]);