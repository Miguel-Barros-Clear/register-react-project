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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Botao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Botao */ \"./src/components/Botao.tsx\");\n/* harmony import */ var _components_Formulario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Formulario */ \"./src/components/Formulario.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _core_Cliente__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/Cliente */ \"./src/core/Cliente.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Home() {\n    const clientes = [\n        new _core_Cliente__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Ana\", 34, \"1\"),\n        new _core_Cliente__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Bia\", 45, \"2\"),\n        new _core_Cliente__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Carlos\", 23, \"3\"),\n        new _core_Cliente__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Pedro\", 54, \"4\")\n    ];\n    function clienteSelecionado(cliente) {\n        console.log(\"Editar:\", cliente.nome);\n    }\n    function clienteExcluido(cliente) {\n        console.log(\"Delete:\", cliente.nome);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            titulo: \"Cadastro simples\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        cor: \"green\",\n                        className: \"mb-4\",\n                        children: \"Novo Cliente\"\n                    }, void 0, false, {\n                        fileName: \"/home/miguelbarros/Documents/register-react-project/src/pages/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/pages/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Formulario__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    cliente: clientes[0]\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/pages/index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/miguelbarros/Documents/register-react-project/src/pages/index.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/miguelbarros/Documents/register-react-project/src/pages/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDVTtBQUNSO0FBRUo7QUFDWDtBQUVYLFNBQVNLLE9BQU87SUFDN0IsTUFBTUMsV0FBVztRQUNmLElBQUlILHFEQUFPQSxDQUFDLE9BQU8sSUFBSTtRQUN2QixJQUFJQSxxREFBT0EsQ0FBQyxPQUFPLElBQUk7UUFDdkIsSUFBSUEscURBQU9BLENBQUMsVUFBVSxJQUFJO1FBQzFCLElBQUlBLHFEQUFPQSxDQUFDLFNBQVMsSUFBSTtLQUMxQjtJQUVELFNBQVNJLG1CQUFtQkMsT0FBZ0IsRUFBRTtRQUM1Q0MsUUFBUUMsR0FBRyxDQUFDLFdBQVdGLFFBQVFHLElBQUk7SUFDckM7SUFFQSxTQUFTQyxnQkFBZ0JKLE9BQWdCLEVBQUU7UUFDekNDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXRixRQUFRRyxJQUFJO0lBQ3JDO0lBRUEscUJBQ0UsOERBQUNFO1FBQ0NDLFdBQ0U7a0JBR0YsNEVBQUNaLDBEQUFNQTtZQUFDYSxRQUFPOzs4QkFDYiw4REFBQ0Y7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNkLHlEQUFLQTt3QkFBQ2dCLEtBQUk7d0JBQVFGLFdBQVU7a0NBQU87Ozs7Ozs7Ozs7OzhCQVN0Qyw4REFBQ2IsOERBQVVBO29CQUFDTyxTQUFTRixRQUFRLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEMsQ0FBQztLQXJDdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm90YW8gZnJvbSBcIkAvY29tcG9uZW50cy9Cb3Rhb1wiO1xuaW1wb3J0IEZvcm11bGFyaW8gZnJvbSBcIkAvY29tcG9uZW50cy9Gb3JtdWxhcmlvXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgVGFiZWxhIGZyb20gXCJAL2NvbXBvbmVudHMvVGFiZWxhXCI7XG5pbXBvcnQgQ2xpZW50ZSBmcm9tIFwiQC9jb3JlL0NsaWVudGVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgY2xpZW50ZXMgPSBbXG4gICAgbmV3IENsaWVudGUoXCJBbmFcIiwgMzQsIFwiMVwiKSxcbiAgICBuZXcgQ2xpZW50ZShcIkJpYVwiLCA0NSwgXCIyXCIpLFxuICAgIG5ldyBDbGllbnRlKFwiQ2FybG9zXCIsIDIzLCBcIjNcIiksXG4gICAgbmV3IENsaWVudGUoXCJQZWRyb1wiLCA1NCwgXCI0XCIpLFxuICBdO1xuXG4gIGZ1bmN0aW9uIGNsaWVudGVTZWxlY2lvbmFkbyhjbGllbnRlOiBDbGllbnRlKSB7XG4gICAgY29uc29sZS5sb2coXCJFZGl0YXI6XCIsIGNsaWVudGUubm9tZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGllbnRlRXhjbHVpZG8oY2xpZW50ZTogQ2xpZW50ZSkge1xuICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlOlwiLCBjbGllbnRlLm5vbWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICBcImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTUwMCB0by1wdXJwbGUtNTAwIHRleHQtd2hpdGVcIlxuICAgICAgfVxuICAgID5cbiAgICAgIDxMYXlvdXQgdGl0dWxvPVwiQ2FkYXN0cm8gc2ltcGxlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICA8Qm90YW8gY29yPVwiZ3JlZW5cIiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICBOb3ZvIENsaWVudGVcbiAgICAgICAgICA8L0JvdGFvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxUYWJlbGFcbiAgICAgICAgICBjbGllbnRlcz17Y2xpZW50ZXN9XG4gICAgICAgICAgY2xpZW50ZVNlbGVjaW9uYWRvPXtjbGllbnRlU2VsZWNpb25hZG99XG4gICAgICAgICAgY2xpZW50ZUV4Y2x1aWRvPXtjbGllbnRlRXhjbHVpZG99XG4gICAgICAgID48L1RhYmVsYT4gKi99XG4gICAgICAgIDxGb3JtdWxhcmlvIGNsaWVudGU9e2NsaWVudGVzWzBdfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQm90YW8iLCJGb3JtdWxhcmlvIiwiTGF5b3V0IiwiQ2xpZW50ZSIsIlJlYWN0IiwiSG9tZSIsImNsaWVudGVzIiwiY2xpZW50ZVNlbGVjaW9uYWRvIiwiY2xpZW50ZSIsImNvbnNvbGUiLCJsb2ciLCJub21lIiwiY2xpZW50ZUV4Y2x1aWRvIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0dWxvIiwiY29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});