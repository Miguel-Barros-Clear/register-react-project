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

/***/ "./src/components/Tabela.tsx":
/*!***********************************!*\
  !*** ./src/components/Tabela.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tabela; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Tabela(props) {\n    function renderizarCabecalho() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                    children: \"Codigo\"\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                    children: \"Nome\"\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                    children: \"Idade\"\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this);\n    }\n    function renderizarDados() {\n        var _props_clientes;\n        return (_props_clientes = props.clientes) === null || _props_clientes === void 0 ? void 0 : _props_clientes.map((cliente, i)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: cliente.id\n                    }, void 0, false, {\n                        fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: cliente.nome\n                    }, void 0, false, {\n                        fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: cliente.idade\n                    }, void 0, false, {\n                        fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        children: renderizarCabecalho()\n    }, void 0, false, {\n        fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n        lineNumber: 30,\n        columnNumber: 10\n    }, this);\n}\n_c = Tabela;\nvar _c;\n$RefreshReg$(_c, \"Tabela\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJlbGEudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNZSxTQUFTQSxPQUFPQyxLQUFrQixFQUFFO0lBQ2pELFNBQVNDLHNCQUFzQjtRQUM3QixxQkFDRSw4REFBQ0M7OzhCQUNDLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQTs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQTs4QkFBRzs7Ozs7Ozs7Ozs7O0lBR1Y7SUFFQSxTQUFTQyxrQkFBa0I7WUFDbEJKO1FBQVAsT0FBT0EsQ0FBQUEsa0JBQUFBLE1BQU1LLFFBQVEsY0FBZEwsNkJBQUFBLEtBQUFBLElBQUFBLGdCQUFnQk0sSUFBSSxDQUFDQyxTQUFTQyxJQUFNO1lBQ3pDLHFCQUNFLDhEQUFDTjs7a0NBQ0MsOERBQUNPO2tDQUFJRixRQUFRRyxFQUFFOzs7Ozs7a0NBQ2YsOERBQUNEO2tDQUFJRixRQUFRSSxJQUFJOzs7Ozs7a0NBQ2pCLDhEQUFDRjtrQ0FBSUYsUUFBUUssS0FBSzs7Ozs7Ozs7Ozs7O1FBR3hCO0lBQ0Y7SUFFQSxxQkFBTyw4REFBQ0M7a0JBQU9aOzs7Ozs7QUFDakIsQ0FBQztLQXhCdUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RhYmVsYS50c3g/M2E1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50ZSBmcm9tIFwiQC9jb3JlL0NsaWVudGVcIjtcblxuaW50ZXJmYWNlIFRhYmVsYVByb3BzIHtcbiAgY2xpZW50ZXM6IENsaWVudGVbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFiZWxhKHByb3BzOiBUYWJlbGFQcm9wcykge1xuICBmdW5jdGlvbiByZW5kZXJpemFyQ2FiZWNhbGhvKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dHI+XG4gICAgICAgIDx0aD5Db2RpZ288L3RoPlxuICAgICAgICA8dGg+Tm9tZTwvdGg+XG4gICAgICAgIDx0aD5JZGFkZTwvdGg+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJpemFyRGFkb3MoKSB7XG4gICAgcmV0dXJuIHByb3BzLmNsaWVudGVzPy5tYXAoKGNsaWVudGUsIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+e2NsaWVudGUuaWR9PC90ZD5cbiAgICAgICAgICA8dGQ+e2NsaWVudGUubm9tZX08L3RkPlxuICAgICAgICAgIDx0ZD57Y2xpZW50ZS5pZGFkZX08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiA8dGFibGU+e3JlbmRlcml6YXJDYWJlY2FsaG8oKX08L3RhYmxlPjtcbn1cbiJdLCJuYW1lcyI6WyJUYWJlbGEiLCJwcm9wcyIsInJlbmRlcml6YXJDYWJlY2FsaG8iLCJ0ciIsInRoIiwicmVuZGVyaXphckRhZG9zIiwiY2xpZW50ZXMiLCJtYXAiLCJjbGllbnRlIiwiaSIsInRkIiwiaWQiLCJub21lIiwiaWRhZGUiLCJ0YWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Tabela.tsx\n"));

/***/ })

});