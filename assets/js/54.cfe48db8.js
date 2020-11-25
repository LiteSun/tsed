(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{497:function(t,a,e){"use strict";e.r(a);var s=e(0),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"patch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#patch"}},[t._v("#")]),t._v(" Patch "),e("Badge",{attrs:{text:"Decorator",type:"decorator"}}),t._v(" "),e("Badge",{attrs:{text:"operation",title:"operation",type:"operation"}}),t._v(" "),e("Badge",{attrs:{text:"httpMethod",title:"httpMethod",type:"httpMethod"}})],1),t._v(" "),e("section",{staticClass:"symbol-info"},[e("table",{staticClass:"is-full-width"},[e("tbody",[e("tr",[e("th",[t._v("Module")]),e("td",[e("div",{staticClass:"lang-typescript"},[e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { Patch } "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),e("tr",[e("th",[t._v("Source")]),e("td",[e("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.11.2/packages/common/src/mvc/decorators/method/route.ts#L0-L0"}},[t._v("/packages/common/src/mvc/decorators/method/route.ts")])])])])])]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("div",{staticClass:"language-typescript"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("function "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Patch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" | RegExp | "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ...args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("This method is just like the "),e("code",[t._v("router.METHOD()")]),t._v(" methods, except that it matches all HTTP methods (verbs).")]),t._v(" "),e("p",[t._v("This method is extremely useful for mapping “global” logic for specific path prefixes or arbitrary matches.\nFor example, if you placed the following route at the top of all other route definitions, it would require that\nall routes from that point on would require authentication, and automatically load a user.\nKeep in mind that these callbacks do not have to act as end points; loadUser can perform a task, then call next()\nto continue matching subsequent routes.")])])}),[],!1,null,null,null);a.default=o.exports}}]);