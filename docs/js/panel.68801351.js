(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["panel"],{"0101":function(t,e,a){},"228b":function(t,e,a){"use strict";var n=a("0101"),i=a.n(n);i.a},"8fc2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("component-view",[a("h2",{staticClass:"title"},[t._v("Panels")]),a("p",[t._v("Panels are flexible view container with auto-expand content section.")]),a("columns",[a("column",{attrs:{col:"5",xl:"6",sm:"12"}},[a("panel",[a("h5",{attrs:{slot:"header"},slot:"header"},[t._v("Recently Watched")]),t._l(t.tiles,(function(t,e){return a("tile",{key:e,attrs:{slot:"body",avatar:t.avatar,title:t.title,subtitle:t.subtitle},slot:"body"})})),a("btn",{attrs:{slot:"footer",size:"block",type:"primary"},slot:"footer"},[t._v("Hide")])],2)],1)],1),a("prism",{attrs:{language:"html",code:t.html}}),a("prism",{attrs:{language:"javascript",code:t.js}})],1)},i=[],s=a("2b0e"),r={header:{description:"Suitable for titles"},nav:{description:"Navigation section"},body:{description:"Main content"},footer:{description:"Best place for actions"}},l=s["default"].extend({name:"PanelPage",data:function(){return{slots:r,tiles:[{avatar:"https://picturepan2.github.io/spectre/img/avatar-1.png",title:"Academy Awards",subtitle:"A set of 25 awards for artistic and technical merit in the American film industry, given annually by the Academy of Motion Picture Arts and Sciences (AMPAS)..."},{avatar:"https://picturepan2.github.io/spectre/img/avatar-2.png",title:"Avengers: Infinity War",subtitle:"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos ..."},{avatar:"https://picturepan2.github.io/spectre/img/avatar-3.png",title:"X-Men",subtitle:"Two mutants come to a private academy for their kind whose resident superhero team must oppose a terrorist organization with similar powers."}],html:'<panel>\n  <h5 slot="header">Recently Watched</h5>\n  <tile slot="body"\n    v-for="(tile, i) in tiles"\n    :key="i"\n    :avatar="tile.avatar"\n    :title="tile.title"\n    :subtitle="tile.subtitle"\n  />\n  <btn slot="footer" size="block" type="primary">Hide</btn>\n</panel>',js:"export default {\n  data: () => ({\n    tiles: [\n      {\n        avatar: 'img/avatar-1.png',\n        title: 'Academy Awards',\n        subtitle: 'A set of 25 awards for ...'\n      },\n      {\n        avatar: 'img/avatar-2.png',\n        title: 'Avengers',\n        subtitle: 'The Avengers and their allies must ...'\n      },\n      {\n        avatar: 'img/avatar-3.png',\n        title: 'X-Men',\n        subtitle: 'Two mutants come ...' },\n    ]\n  }),\n}"}}}),o=l,c=(a("228b"),a("2877")),p=Object(c["a"])(o,n,i,!1,null,"5312ad09",null);p.options.__file="Panel.vue";e["default"]=p.exports}}]);