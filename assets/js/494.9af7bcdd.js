(window.webpackJsonp=window.webpackJsonp||[]).push([[494],{935:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"openspec2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openspec2"}},[t._v("#")]),t._v(" OpenSpec2 "),s("Badge",{attrs:{text:"Interface",type:"interface"}})],1),t._v(" "),s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[t._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { OpenSpec2 } "),s("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),s("span",{staticClass:"token string"},[t._v('"@tsed/openspec"')])])])]),s("tr",[s("th",[t._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.11.2/packages/openspec/src/openspec2/OpenSpec2.ts#L0-L0"}},[t._v("/packages/openspec/src/openspec2/OpenSpec2.ts")])])])])])]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" OpenSpec2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v('\n    /**\n     * Specifies the Swagger Specification version being used. It can be used by the Swagger UI and other clients to interpret the API listing. The value MUST be "2.0".\n     */\n    swagger'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Provides metadata about the API. The metadata can be used by the clients if needed.\n     */\n    info?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecInfo.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecInfo")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The host "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name or ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" serving the API. This MUST be the host only and does not include the scheme nor sub-paths. It MAY include a port. If the host is not included"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the host serving the documentation is to be used "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("including the port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(". The host does not support "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path templating"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#pathTemplating"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     */\n    host?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The base path on which the API is served"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" which is relative to the host. If it is not included"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the API is served directly under the host. The value MUST start with a leading slash "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(". The basePath does not support path "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path templating"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#pathTemplating"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     */\n    basePath?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The transfer protocol of the API. Values MUST be "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" the list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" `http`"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `https`"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `ws`"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `wss`. If the schemes is not included"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the default scheme to be used is the one used to access the Swagger definition itself.\n     */\n    schemes?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"http" | "https" | "ws" | "wss"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A list of MIME types the APIs can consume. This is global to all APIs but can be overridden on specific API calls. "),s("a",{pre:!0,attrs:{href:"/api/di/decorators/Value.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Value")])]),t._v(" MUST be "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" described under "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mime Types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#mimeTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     */\n    consumes?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A list of MIME types the APIs can produce. This is global to all APIs but can be overridden on specific API calls. "),s("a",{pre:!0,attrs:{href:"/api/di/decorators/Value.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Value")])]),t._v(" MUST be "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" described under "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mime Types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#mimeTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     */\n    produces?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The available paths and operations for the API.\n     */\n    paths?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecHash")])]),t._v("<"),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec2/OS2Paths.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OS2Paths")])]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * An object to hold data types produced and consumed by operations.\n     */\n    definitions?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecHash")])]),t._v("<"),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec2/OS2Schema.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OS2Schema")])]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * An object to hold parameters that can be used across operations. This property does not define global parameters for all operations.\n     */\n    parameters?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecHash")])]),t._v("<"),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec2/OS2BodyParameter.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OS2BodyParameter")])]),t._v(" | "),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec2/OS2QueryParameter.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OS2QueryParameter")])]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * An object to hold responses that can be used across operations. This property does not define global responses for all operations.\n     */\n    responses?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecHash")])]),t._v("<"),s("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Response.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Response")])]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A declaration of which security schemes are applied for the API "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" a whole. The list of values describes alternative security schemes that can be used "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("that is"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" there is a logical OR between the security requirements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(". Individual operations can override this definition.\n     */\n    security?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecSecurity.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecSecurity")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),s("a",{pre:!0,attrs:{href:"/api/schema/decorators/operations/Security.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Security")])]),t._v(" scheme definitions that can be used across the specification.\n     */\n    securityDefinitions?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecHash")])]),t._v("<"),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec2/OS2Security.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OS2Security")])]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A list of tags used by the specification with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be declared. The tags that are not declared may be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.\n     */\n    tags?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecTag.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecTag")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Additional external documentation.\n     */\n    externalDocs?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecExternalDocs.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecExternalDocs")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),t._v(" "),s("h2",{attrs:{id:"members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("swagger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v('Specifies the Swagger Specification version being used. It can be used by the Swagger UI and other clients to interpret the API listing. The value MUST be "2.0".')])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("info?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecInfo.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecInfo")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Provides metadata about the API. The metadata can be used by the clients if needed.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("host?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("The host (name or ip) serving the API. This MUST be the host only and does not include the scheme nor sub-paths. It MAY include a port. If the host is not included, the host serving the documentation is to be used (including the port). The host does not support "),s("a",{pre:!0,attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#pathTemplating",target:"_blank",rel:"noopener noreferrer"}},[t._v("path templating"),s("OutboundLink",{pre:!0})],1),t._v(".")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("basePath?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("The base path on which the API is served, which is relative to the host. If it is not included, the API is served directly under the host. The value MUST start with a leading slash (/). The basePath does not support path "),s("a",{pre:!0,attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#pathTemplating",target:"_blank",rel:"noopener noreferrer"}},[t._v("path templating"),s("OutboundLink",{pre:!0})],1),t._v(".")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("schemes?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"http" | "https" | "ws" | "wss"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("The transfer protocol of the API. Values MUST be from the list: "),s("code",[t._v("http")]),t._v(", "),s("code",[t._v("https")]),t._v(", "),s("code",[t._v("ws")]),t._v(", "),s("code",[t._v("wss")]),t._v(". If the schemes is not included, the default scheme to be used is the one used to access the Swagger definition itself.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("consumes?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("A list of MIME types the APIs can consume. This is global to all APIs but can be overridden on specific API calls. Value MUST be as described under "),s("a",{pre:!0,attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#mimeTypes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mime Types"),s("OutboundLink",{pre:!0})],1),t._v(".")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("produces?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("A list of MIME types the APIs can produce. This is global to all APIs but can be overridden on specific API calls. Value MUST be as described under "),s("a",{pre:!0,attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#mimeTypes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mime Types"),s("OutboundLink",{pre:!0})],1),t._v(".")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("paths?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecHash")])]),t._v("<"),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec2/OS2Paths.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OS2Paths")])]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("The available paths and operations for the API.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("definitions?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecHash")])]),t._v("<"),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec2/OS2Schema.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OS2Schema")])]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("An object to hold data types produced and consumed by operations.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("parameters?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecHash")])]),t._v("<"),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec2/OS2BodyParameter.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OS2BodyParameter")])]),t._v(" | "),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec2/OS2QueryParameter.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OS2QueryParameter")])]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("An object to hold parameters that can be used across operations. This property does not define global parameters for all operations.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("responses?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecHash")])]),t._v("<"),s("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Response.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Response")])]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("An object to hold responses that can be used across operations. This property does not define global responses for all operations.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("security?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecSecurity.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecSecurity")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("A declaration of which security schemes are applied for the API as a whole. The list of values describes alternative security schemes that can be used (that is, there is a logical OR between the security requirements). Individual operations can override this definition.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("securityDefinitions?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecHash")])]),t._v("<"),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec2/OS2Security.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OS2Security")])]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Security scheme definitions that can be used across the specification.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("tags?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecTag.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecTag")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("A list of tags used by the specification with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be declared. The tags that are not declared may be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("externalDocs?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecExternalDocs.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecExternalDocs")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Additional external documentation.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);