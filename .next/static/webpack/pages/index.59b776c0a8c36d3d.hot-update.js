"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Formulario.tsx":
/*!***************************************!*\
  !*** ./src/components/Formulario.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Formulario; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Botao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Botao */ \"./src/components/Botao.tsx\");\n/* harmony import */ var _Entrada__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Entrada */ \"./src/components/Entrada.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Formulario(props) {\n    var _props_cliente, _props_cliente1, _props_cliente2;\n    _s();\n    const id = (_props_cliente = props.cliente) === null || _props_cliente === void 0 ? void 0 : _props_cliente.id;\n    var _props_cliente_nome;\n    const [nome, setNome] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_props_cliente_nome = (_props_cliente1 = props.cliente) === null || _props_cliente1 === void 0 ? void 0 : _props_cliente1.nome) !== null && _props_cliente_nome !== void 0 ? _props_cliente_nome : \"\");\n    var _props_cliente_idade;\n    const [idade, setIdade] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_props_cliente_idade = (_props_cliente2 = props.cliente) === null || _props_cliente2 === void 0 ? void 0 : _props_cliente2.idade) !== null && _props_cliente_idade !== void 0 ? _props_cliente_idade : 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Entrada__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                texto: \"Codigo\",\n                valor: id,\n                somenteLeitura: true\n            }, void 0, false, {\n                fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Formulario.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this) : false,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Entrada__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                texto: \"Nome\",\n                valor: nome,\n                valorMudou: setNome,\n                className: \"mb-5\"\n            }, void 0, false, {\n                fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Formulario.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Entrada__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                texto: \"Idade\",\n                tipo: \"number\",\n                valor: idade,\n                valorMudou: setIdade,\n                className: \"mb-5\"\n            }, void 0, false, {\n                fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Formulario.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Botao__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        cor: \"blue\",\n                        className: \"mr-2\",\n                        children: id ? \"Alterar\" : \"Salvar\"\n                    }, void 0, false, {\n                        fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Formulario.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Botao__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        children: \"Cancelar\"\n                    }, void 0, false, {\n                        fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Formulario.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Formulario.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Formulario.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Formulario, \"xYwszsInVLSogE0Zww9mu54bO3M=\");\n_c = Formulario;\nvar _c;\n$RefreshReg$(_c, \"Formulario\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtdWxhcmlvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0M7QUFDWjtBQUNJO0FBTWpCLFNBQVNJLFdBQVdDLEtBQXNCLEVBQUU7UUFDOUNBLGdCQUNzQkEsaUJBQ0VBOztJQUZuQyxNQUFNQyxLQUFLRCxDQUFBQSxpQkFBQUEsTUFBTUUsT0FBTyxjQUFiRiw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZUMsRUFBRTtRQUNLRDtJQUFqQyxNQUFNLENBQUNHLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUNJLENBQUFBLHNCQUFBQSxDQUFBQSxrQkFBQUEsTUFBTUUsT0FBTyxjQUFiRiw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWVHLElBQUksY0FBbkJILGlDQUFBQSxzQkFBdUIsRUFBRTtRQUN2QkE7SUFBbkMsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDSSxDQUFBQSx1QkFBQUEsQ0FBQUEsa0JBQUFBLE1BQU1FLE9BQU8sY0FBYkYsNkJBQUFBLEtBQUFBLElBQUFBLGdCQUFlSyxLQUFLLGNBQXBCTCxrQ0FBQUEsdUJBQXdCLENBQUM7SUFFNUQscUJBQ0UsOERBQUNPOztZQUNFTixtQkFBSyw4REFBQ0gsZ0RBQU9BO2dCQUFDVSxPQUFNO2dCQUFTQyxPQUFPUjtnQkFBSVMsY0FBYzs7Ozs7dUJBQU0sS0FBSzswQkFDbEUsOERBQUNaLGdEQUFPQTtnQkFDTlUsT0FBTTtnQkFDTkMsT0FBT047Z0JBQ1BRLFlBQVlQO2dCQUNaUSxXQUFVOzs7Ozs7MEJBRVosOERBQUNkLGdEQUFPQTtnQkFDTlUsT0FBTTtnQkFDTkssTUFBSztnQkFDTEosT0FBT0o7Z0JBQ1BNLFlBQVlMO2dCQUNaTSxXQUFVOzs7Ozs7MEJBRVosOERBQUNMOztrQ0FDQyw4REFBQ1YsOENBQUtBO3dCQUFDaUIsS0FBSTt3QkFBT0YsV0FBVTtrQ0FDekJYLEtBQUssWUFBWSxRQUFROzs7Ozs7a0NBRTVCLDhEQUFDSiw4Q0FBS0E7a0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlmLENBQUM7R0E3QnVCRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3JtdWxhcmlvLnRzeD9jMzNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGllbnRlIGZyb20gXCJAL2NvcmUvQ2xpZW50ZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm90YW8gZnJvbSBcIi4vQm90YW9cIjtcbmltcG9ydCBFbnRyYWRhIGZyb20gXCIuL0VudHJhZGFcIjtcblxuaW50ZXJmYWNlIEZvcm11bGFyaW9Qcm9wcyB7XG4gIGNsaWVudGU6IENsaWVudGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm11bGFyaW8ocHJvcHM6IEZvcm11bGFyaW9Qcm9wcykge1xuICBjb25zdCBpZCA9IHByb3BzLmNsaWVudGU/LmlkO1xuICBjb25zdCBbbm9tZSwgc2V0Tm9tZV0gPSB1c2VTdGF0ZShwcm9wcy5jbGllbnRlPy5ub21lID8/IFwiXCIpO1xuICBjb25zdCBbaWRhZGUsIHNldElkYWRlXSA9IHVzZVN0YXRlKHByb3BzLmNsaWVudGU/LmlkYWRlID8/IDApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtpZCA/IDxFbnRyYWRhIHRleHRvPVwiQ29kaWdvXCIgdmFsb3I9e2lkfSBzb21lbnRlTGVpdHVyYSAvPiA6IGZhbHNlfVxuICAgICAgPEVudHJhZGFcbiAgICAgICAgdGV4dG89XCJOb21lXCJcbiAgICAgICAgdmFsb3I9e25vbWV9XG4gICAgICAgIHZhbG9yTXVkb3U9e3NldE5vbWV9XG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTVcIlxuICAgICAgLz5cbiAgICAgIDxFbnRyYWRhXG4gICAgICAgIHRleHRvPVwiSWRhZGVcIlxuICAgICAgICB0aXBvPVwibnVtYmVyXCJcbiAgICAgICAgdmFsb3I9e2lkYWRlfVxuICAgICAgICB2YWxvck11ZG91PXtzZXRJZGFkZX1cbiAgICAgICAgY2xhc3NOYW1lPVwibWItNVwiXG4gICAgICAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEJvdGFvIGNvcj1cImJsdWVcIiBjbGFzc05hbWU9XCJtci0yXCI+XG4gICAgICAgICAge2lkID8gXCJBbHRlcmFyXCIgOiBcIlNhbHZhclwifVxuICAgICAgICA8L0JvdGFvPlxuICAgICAgICA8Qm90YW8+Q2FuY2VsYXI8L0JvdGFvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJvdGFvIiwiRW50cmFkYSIsIkZvcm11bGFyaW8iLCJwcm9wcyIsImlkIiwiY2xpZW50ZSIsIm5vbWUiLCJzZXROb21lIiwiaWRhZGUiLCJzZXRJZGFkZSIsImRpdiIsInRleHRvIiwidmFsb3IiLCJzb21lbnRlTGVpdHVyYSIsInZhbG9yTXVkb3UiLCJjbGFzc05hbWUiLCJ0aXBvIiwiY29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Formulario.tsx\n"));

/***/ })

});