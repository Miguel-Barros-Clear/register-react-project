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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _components_Tabela__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Tabela */ \"./src/components/Tabela.tsx\");\n/* harmony import */ var _core_Cliente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/Cliente */ \"./src/core/Cliente.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home() {\n    const clientes = [\n        new _core_Cliente__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Ana\", 34, \"1\"),\n        new _core_Cliente__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Bia\", 45, \"2\"),\n        new _core_Cliente__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Carlos\", 23, \"3\"),\n        new _core_Cliente__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Pedro\", 54, \"4\")\n    ];\n    function clienteSelecionado(cliente) {\n        console.log(cliente.nome);\n    }\n    function clienteExcluido(cliente) {\n        console.log(cliente.nome);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            titulo: \"Cadastro simples\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabela__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                clientes: clientes,\n                clienteSelecionado: clienteSelecionado\n            }, void 0, false, {\n                fileName: \"/home/miguelbarros/Documents/register-react-project/src/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/miguelbarros/Documents/register-react-project/src/pages/index.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/miguelbarros/Documents/register-react-project/src/pages/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QztBQUNBO0FBQ0o7QUFDWDtBQUVYLFNBQVNJLE9BQU87SUFDN0IsTUFBTUMsV0FBVztRQUNmLElBQUlILHFEQUFPQSxDQUFDLE9BQU8sSUFBSTtRQUN2QixJQUFJQSxxREFBT0EsQ0FBQyxPQUFPLElBQUk7UUFDdkIsSUFBSUEscURBQU9BLENBQUMsVUFBVSxJQUFJO1FBQzFCLElBQUlBLHFEQUFPQSxDQUFDLFNBQVMsSUFBSTtLQUMxQjtJQUVELFNBQVNJLG1CQUFtQkMsT0FBZ0IsRUFBRTtRQUM1Q0MsUUFBUUMsR0FBRyxDQUFDRixRQUFRRyxJQUFJO0lBQzFCO0lBRUEsU0FBU0MsZ0JBQWdCSixPQUFnQixFQUFFO1FBQ3pDQyxRQUFRQyxHQUFHLENBQUNGLFFBQVFHLElBQUk7SUFDMUI7SUFFQSxxQkFDRSw4REFBQ0U7UUFDQ0MsV0FDRTtrQkFHRiw0RUFBQ2IsMERBQU1BO1lBQUNjLFFBQU87c0JBQ2IsNEVBQUNiLDBEQUFNQTtnQkFDTEksVUFBVUE7Z0JBQ1ZDLG9CQUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUIsQ0FBQztLQTlCdUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgVGFiZWxhIGZyb20gXCJAL2NvbXBvbmVudHMvVGFiZWxhXCI7XG5pbXBvcnQgQ2xpZW50ZSBmcm9tIFwiQC9jb3JlL0NsaWVudGVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgY2xpZW50ZXMgPSBbXG4gICAgbmV3IENsaWVudGUoXCJBbmFcIiwgMzQsIFwiMVwiKSxcbiAgICBuZXcgQ2xpZW50ZShcIkJpYVwiLCA0NSwgXCIyXCIpLFxuICAgIG5ldyBDbGllbnRlKFwiQ2FybG9zXCIsIDIzLCBcIjNcIiksXG4gICAgbmV3IENsaWVudGUoXCJQZWRyb1wiLCA1NCwgXCI0XCIpLFxuICBdO1xuXG4gIGZ1bmN0aW9uIGNsaWVudGVTZWxlY2lvbmFkbyhjbGllbnRlOiBDbGllbnRlKSB7XG4gICAgY29uc29sZS5sb2coY2xpZW50ZS5ub21lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsaWVudGVFeGNsdWlkbyhjbGllbnRlOiBDbGllbnRlKSB7XG4gICAgY29uc29sZS5sb2coY2xpZW50ZS5ub21lKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgXCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS01MDAgdG8tcHVycGxlLTUwMCB0ZXh0LXdoaXRlXCJcbiAgICAgIH1cbiAgICA+XG4gICAgICA8TGF5b3V0IHRpdHVsbz1cIkNhZGFzdHJvIHNpbXBsZXNcIj5cbiAgICAgICAgPFRhYmVsYVxuICAgICAgICAgIGNsaWVudGVzPXtjbGllbnRlc31cbiAgICAgICAgICBjbGllbnRlU2VsZWNpb25hZG89e2NsaWVudGVTZWxlY2lvbmFkb31cbiAgICAgICAgPjwvVGFiZWxhPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiVGFiZWxhIiwiQ2xpZW50ZSIsIlJlYWN0IiwiSG9tZSIsImNsaWVudGVzIiwiY2xpZW50ZVNlbGVjaW9uYWRvIiwiY2xpZW50ZSIsImNvbnNvbGUiLCJsb2ciLCJub21lIiwiY2xpZW50ZUV4Y2x1aWRvIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0dWxvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});