webpackJsonp([3],{164:function(t,e,n){var s=n(19)(n(168),n(177),null,null);s.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui-demo/src/components/demo-modules/list.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t}),s.options.functional,t.exports=s.exports},168:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s=n(172),a=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={data:function(){return{columns:[{title:"坐席号"},{title:"坐席组号"},{title:"分机号"},{title:"角色"},{title:"坐席状态"}],list:[],loading:!0}},mounted:function(){this.getData()},methods:{getData:function(){var e=this;t.List.agentList().then(function(t){200==t.status?e.list=a.default.parse(t.body):e.$Message.error("取数失败"),e.loading=!1})}}}}).call(e,n(20))},172:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=new t({id:0,agentNo:"",agentGroup:"",extensionNo:"",outNumber:"",role:1,presenceStatus:1})}).call(e,n(27))},177:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"padding",rawName:"v-padding",value:20,expression:"20"}],staticClass:"app-seat-list"},[n("div",{staticClass:"h-panel"},[t._m(0),t._v(" "),n("div",{staticClass:"h-panel-body"},[n("Table",{attrs:{columns:t.columns,datas:t.list},scopedSlots:t._u([["default",function(e){return[n("td",[t._v(t._s(e.data.agentNo))]),t._v(" "),n("td",[t._v(t._s(e.data.agentGroup))]),t._v(" "),n("td",[t._v(t._s(e.data.extensionNo))]),t._v(" "),n("td",[t._v(t._s(t._f("dictMapping")(e.data.role,"role")))]),t._v(" "),n("td",[t._v(t._s(t._f("dictMapping")(e.data.presenceStatus,"presenceStatus")))])]}]])}),t._v(" "),n("Loading",{attrs:{loading:t.loading}})],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-panel-bar"},[n("span",{staticClass:"h-panel-title"},[t._v("列表")])])}]},t.exports.render._withStripped=!0}});