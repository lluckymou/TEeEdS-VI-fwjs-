(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/TabArea.stories.js":"./src/stories/TabArea.stories.js","./stories/TabButton.stories.js":"./src/stories/TabButton.stories.js","./stories/Tabs.stories.js":"./src/stories/Tabs.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"},"./src/components/TabArea.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TabArea}));__webpack_require__("./src/styles.css");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),TabArea=function TabArea(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"tab-content",children:props.content})};TabArea.__docgenInfo={description:"",methods:[],displayName:"TabArea"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\TabArea.js"]={name:"TabArea",docgenInfo:TabArea.__docgenInfo,path:"src\\components\\TabArea.js"})},"./src/components/TabButton.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TabButton}));var C_Users_lucas_TEeEdS_VI_fwjs_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/styles.css"),__webpack_require__("./node_modules/react/jsx-runtime.js")),TabButton=function TabButton(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",Object(C_Users_lucas_TEeEdS_VI_fwjs_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_Users_lucas_TEeEdS_VI_fwjs_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({className:props.selected?"selected":""},props),{},{children:props.name}))};TabButton.__docgenInfo={description:"",methods:[],displayName:"TabButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\TabButton.js"]={name:"TabButton",docgenInfo:TabButton.__docgenInfo,path:"src\\components\\TabButton.js"})},"./src/stories/TabArea.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var C_Users_lucas_TEeEdS_VI_fwjs_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_components_TabArea__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js"),__webpack_require__("./src/components/TabArea.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Tab Content",component:_components_TabArea__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{content:{name:"content"}}};var Default=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_TabArea__WEBPACK_IMPORTED_MODULE_2__.a,Object(C_Users_lucas_TEeEdS_VI_fwjs_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},args))}.bind({});Default.args={content:"conteudo de um tab"},Default.parameters={docs:{source:{code:'<TabArea content="conteudo de um tab" />'}}},Default.parameters=Object(C_Users_lucas_TEeEdS_VI_fwjs_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <TabArea {...args} />"}},Default.parameters)},"./src/stories/TabButton.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var C_Users_lucas_TEeEdS_VI_fwjs_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_components_TabButton__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js"),__webpack_require__("./src/components/TabButton.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Tab Button",component:_components_TabButton__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{name:{name:"name"},selected:{name:"selected"}}};var Default=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_TabButton__WEBPACK_IMPORTED_MODULE_2__.a,Object(C_Users_lucas_TEeEdS_VI_fwjs_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},args))}.bind({});Default.args={name:"titulo da aba",selected:!1},Default.parameters={docs:{source:{code:'<TabButton content="titulo da aba" selected="false" />'}}},Default.parameters=Object(C_Users_lucas_TEeEdS_VI_fwjs_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <TabButton {...args} />"}},Default.parameters)},"./src/stories/Tabs.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=(__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js")),TabButton=__webpack_require__("./src/components/TabButton.js"),TabArea=__webpack_require__("./src/components/TabArea.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=(__webpack_require__("./src/styles.css"),__webpack_require__("./node_modules/react/jsx-runtime.js")),Tabs_Tabs=function Tabs(props){var _useState=Object(react.useState)(0),_useState2=Object(slicedToArray.a)(_useState,2),selected=_useState2[0],setSelected=_useState2[1];return Object(jsx_runtime.jsxs)("div",{className:"tabs",children:[props.tabs.map((function(tab,i){return Object(jsx_runtime.jsx)(TabButton.a,{name:tab.name,selected:i===selected,onClick:function onClick(){return setSelected(i)}},i)})),Object(jsx_runtime.jsx)(TabArea.a,{content:props.tabs[selected].content})]})};Tabs_Tabs.__docgenInfo={description:"",methods:[],displayName:"Tabs"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Tabs.js"]={name:"Tabs",docgenInfo:Tabs_Tabs.__docgenInfo,path:"src\\components\\Tabs.js"});var tabs=[{name:"tab 1",content:"Texto do primeiro tab"},{name:"tab 2",content:"Texto do segundo tab"},{name:"tab 3",content:"Texto do terceiro tab"},{name:"tab 4",content:"Texto do quarto tab"}],Default=(__webpack_exports__.default={title:"Outer Tabs",component:Tabs_Tabs},function Template(args){return Object(jsx_runtime.jsx)(Tabs_Tabs,Object(objectSpread2.a)({tabs:tabs},args))}.bind({}));Default.args={tabs:tabs},Default.parameters={docs:{source:{code:'<Tabs tabs="tabs" />'}}},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Tabs tabs={tabs} {...args} />"}},Default.parameters)},"./src/styles.css":function(module,exports,__webpack_require__){},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);