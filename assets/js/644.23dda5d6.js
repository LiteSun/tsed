(window.webpackJsonp=window.webpackJsonp||[]).push([[644],{1085:function(s,a,t){"use strict";t.r(a);var n=t(0),p=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"jsonoperation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsonoperation"}},[s._v("#")]),s._v(" JsonOperation "),t("Badge",{attrs:{text:"Class",type:"class"}})],1),s._v(" "),t("section",{staticClass:"symbol-info"},[t("table",{staticClass:"is-full-width"},[t("tbody",[t("tr",[t("th",[s._v("Module")]),t("td",[t("div",{staticClass:"lang-typescript"},[t("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { JsonOperation } "),t("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"token string"},[s._v('"@tsed/schema"')])])])]),t("tr",[t("th",[s._v("Source")]),t("td",[t("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.11.2/packages/schema/src/domain/JsonOperation.ts#L0-L0"}},[s._v("/packages/schema/src/domain/JsonOperation.ts")])])])])])]),s._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),t("div",{staticClass:"language-typescript"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" JsonOperation "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonMap.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonMap")])]),s._v("<"),t("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonOperationOptions.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonOperationOptions")])]),s._v("> "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" operationPaths"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Map<"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonMethodPath.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonMethodPath")])]),s._v(">"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("div",{pre:!0,attrs:{class:"language- extra-class"}},[t("pre",[t("code",[s._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span>obj?<span class="token punctuation">:</span> Partial&lt;<a href="/api/schema/domain/JsonOperationOptions.html"><span class="token">JsonOperationOptions</span></a>&gt;<span class="token punctuation">)</span><span class="token punctuation">;</span>\nget <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/schema/domain/JsonResponse.html"><span class="token">JsonResponse</span></a> | undefined<span class="token punctuation">;</span>\nget <span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">;</span>\n<span class="token function">tags</span><span class="token punctuation">(</span>tags<span class="token punctuation">:</span> <a href="/api/openspec/common/OpenSpecTag.html"><span class="token">OpenSpecTag</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token function">addTags</span><span class="token punctuation">(</span>tags<span class="token punctuation">:</span> <a href="/api/openspec/common/OpenSpecTag.html"><span class="token">OpenSpecTag</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token function">summary</span><span class="token punctuation">(</span>summary<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token function">operationId</span><span class="token punctuation">(</span>operationId<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token function">responses</span><span class="token punctuation">(</span>responses<span class="token punctuation">:</span> <a href="/api/schema/domain/JsonMap.html"><span class="token">JsonMap</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token function">defaultStatus</span><span class="token punctuation">(</span>status<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">;</span>\n<span class="token function">addResponse</span><span class="token punctuation">(</span>statusCode<span class="token punctuation">:</span> <span class="token keyword">string</span> | <span class="token keyword">number</span><span class="token punctuation">,</span> response<span class="token punctuation">:</span> <a href="/api/schema/domain/JsonResponse.html"><span class="token">JsonResponse</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token function">getResponses</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/schema/domain/JsonMap.html"><span class="token">JsonMap</span></a>&lt;<a href="/api/schema/domain/JsonResponse.html"><span class="token">JsonResponse</span></a>&gt;<span class="token punctuation">;</span>\n<span class="token function">getResponseOf</span><span class="token punctuation">(</span>status<span class="token punctuation">:</span> <span class="token keyword">number</span> | <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/schema/domain/JsonResponse.html"><span class="token">JsonResponse</span></a><span class="token punctuation">;</span>\n<span class="token function">getHeadersOf</span><span class="token punctuation">(</span>status<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>key<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <a href="/api/schema/interfaces/JsonHeader.html"><span class="token">JsonHeader</span></a><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token function">getContentTypeOf</span><span class="token punctuation">(</span>status<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n<span class="token function">security</span><span class="token punctuation">(</span>security<span class="token punctuation">:</span> <a href="/api/openspec/common/OpenSpecSecurity.html"><span class="token">OpenSpecSecurity</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token function">addSecurityScopes</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> scopes<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token function">description</span><span class="token punctuation">(</span>description<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token function">deprecated</span><span class="token punctuation">(</span>deprecated<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token function">parameters</span><span class="token punctuation">(</span>parameters<span class="token punctuation">:</span> <a href="/api/schema/domain/JsonParameter.html"><span class="token">JsonParameter</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token function">addParameter</span><span class="token punctuation">(</span>index<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">,</span> parameter<span class="token punctuation">:</span> <a href="/api/schema/domain/JsonParameter.html"><span class="token">JsonParameter</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token function">consumes</span><span class="token punctuation">(</span>consumes<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token function">produces</span><span class="token punctuation">(</span>produces<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token function">addProduce</span><span class="token punctuation">(</span>produce<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token function">addOperationPath</span><span class="token punctuation">(</span>method<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> path<span class="token punctuation">:</span> <span class="token keyword">string</span> | RegExp<span class="token punctuation">,</span> options?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token function">toJSON</span><span class="token punctuation">(</span>options?<span class="token punctuation">:</span> <a href="/api/schema/interfaces/JsonSchemaOptions.html"><span class="token">JsonSchemaOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n')])])]),t("p",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"members"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[s._v("#")]),s._v(" Members")]),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" operationPaths"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Map<"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonMethodPath.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonMethodPath")])]),s._v(">"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("response")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonResponse.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonResponse")])]),s._v(" | undefined"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tags")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecTag.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("OpenSpecTag")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addTags")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecTag.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("OpenSpecTag")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("summary")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("summary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("operationId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("operationId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("responses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("responses"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonMap.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonMap")])]),s._v("<"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("defaultStatus")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getStatus")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addResponse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("statusCode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" | "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonResponse.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonResponse")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getResponses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonMap.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonMap")])]),s._v("<"),t("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonResponse.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonResponse")])]),s._v(">"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getResponseOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("number")]),s._v(" | "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonResponse.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonResponse")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getHeadersOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/schema/interfaces/JsonHeader.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonHeader")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getContentTypeOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("security")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("security"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecSecurity.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("OpenSpecSecurity")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addSecurityScopes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" scopes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("description"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("deprecated")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("deprecated"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parameters")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parameters"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonParameter.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonParameter")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addParameter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" parameter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonParameter.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonParameter")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("consumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("consumes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("produces")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("produces"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addProduce")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("produce"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addOperationPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("method"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" | RegExp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toJSON")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/schema/interfaces/JsonSchemaOptions.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonSchemaOptions")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])])])}),[],!1,null,null,null);a.default=p.exports}}]);