(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{963:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"openspec3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openspec3"}},[e._v("#")]),e._v(" OpenSpec3 "),s("Badge",{attrs:{text:"Interface",type:"interface"}})],1),e._v(" "),s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[e._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[e._v("import")]),e._v(" { OpenSpec3 } "),s("span",{staticClass:"token keyword"},[e._v("from")]),e._v(" "),s("span",{staticClass:"token string"},[e._v('"@tsed/openspec"')])])])]),s("tr",[s("th",[e._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.11.2/packages/openspec/src/openspec3/OpenSpec3.ts#L0-L0"}},[e._v("/packages/openspec/src/openspec3/OpenSpec3.ts")])])])])])]),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" OpenSpec3<"),s("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("Schema")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(" = ")]),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Schema.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OS3Schema")])]),e._v("> "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    /**\n     * This "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),e._v(" MUST be the semantic version "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("number")]),e._v(" of the OpenAPI Specification version that the OpenAPI document uses. The openapi field SHOULD be used by tooling specifications and clients to interpret the OpenAPI document. This is not related to the API info.version "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),e._v(".\n     */\n    openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    /**\n     * Provides metadata about the API. The metadata MAY be used by tooling "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" required.\n     */\n    info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecInfo.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecInfo")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    /**\n     * An array of Server Objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" which provide connectivity information to a target server. If the servers property is not provided"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" or is an empty array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" the default value would be a Server Object with a url value of /.\n     */\n    servers?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Server.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OS3Server")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    /**\n     * The available paths and operations for the API.\n     */\n    paths"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecHash")])]),e._v("<"),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Paths.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OS3Paths")])]),e._v("<"),s("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("Schema")])]),e._v(">>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    /**\n     * An element to hold various schemas for the specification.\n     */\n    components?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Components.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OS3Components")])]),e._v("<"),s("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("Schema")])]),e._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    /**\n     * A declaration of which security mechanisms can be used across the API. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. Individual operations can override this definition.\n     */\n    security?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecSecurity.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecSecurity")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    /**\n     * A list of tags used by the specification with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be declared. The tags that are not declared MAY be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.\n     */\n    tags?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecTag.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecTag")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    /**\n     * Additional external documentation.\n     */\n    externalDocs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecExternalDocs.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecExternalDocs")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])])]),e._v(" "),s("h2",{attrs:{id:"members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[e._v("#")]),e._v(" Members")]),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("This string MUST be the semantic version number of the OpenAPI Specification version that the OpenAPI document uses. The openapi field SHOULD be used by tooling specifications and clients to interpret the OpenAPI document. This is not related to the API info.version string.")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecInfo.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecInfo")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("Provides metadata about the API. The metadata MAY be used by tooling as required.")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("servers?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Server.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OS3Server")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("An array of Server Objects, which provide connectivity information to a target server. If the servers property is not provided, or is an empty array, the default value would be a Server Object with a url value of /.")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("paths"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecHash")])]),e._v("<"),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Paths.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OS3Paths")])]),e._v("<"),s("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("Schema")])]),e._v(">>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("The available paths and operations for the API.")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("components?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Components.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OS3Components")])]),e._v("<"),s("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("Schema")])]),e._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("An element to hold various schemas for the specification.")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("security?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecSecurity.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecSecurity")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("A declaration of which security mechanisms can be used across the API. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. Individual operations can override this definition.")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("tags?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecTag.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecTag")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("A list of tags used by the specification with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be declared. The tags that are not declared MAY be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("externalDocs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecExternalDocs.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecExternalDocs")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("Additional external documentation.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);