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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tabela; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Icones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icones */ \"./src/components/Icones.tsx\");\n\n\nfunction Tabela(props) {\n    function renderizarCabecalho() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                    className: \"text-left p-4\",\n                    children: \"Codigo\"\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                    className: \"text-left p-4\",\n                    children: \"Nome\"\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                    className: \"text-left p-4\",\n                    children: \"Idade\"\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                    className: \"p-4\",\n                    children: \"A\\xe7\\xf5es\"\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this);\n    }\n    function renderizarDados() {\n        var _props_clientes;\n        return (_props_clientes = props.clientes) === null || _props_clientes === void 0 ? void 0 : _props_clientes.map((cliente, i)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"\".concat(i % 2 === 0 ? \"bg-purple-200\" : \"bg-purple-100\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"text-left p-4\",\n                        children: cliente.id\n                    }, void 0, false, {\n                        fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"text-left p-4\",\n                        children: cliente.nome\n                    }, void 0, false, {\n                        fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"text-left p-4\",\n                        children: cliente.idade\n                    }, void 0, false, {\n                        fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    renderizarAcoes(cliente)\n                ]\n            }, cliente.id, true, {\n                fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    function renderizarAcoes(cliente) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            className: \"flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50\",\n                    children: _Icones__WEBPACK_IMPORTED_MODULE_1__.IconeEdicao\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50\",\n                    children: _Icones__WEBPACK_IMPORTED_MODULE_1__.IconeLixo\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: \"w-full rounded-xl overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                className: \"bg-gradient-to-t from-purple-500 to-purple-800 text-gray-100\",\n                children: renderizarCabecalho()\n            }, void 0, false, {\n                fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: renderizarDados()\n            }, void 0, false, {\n                fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_c = Tabela;\nvar _c;\n$RefreshReg$(_c, \"Tabela\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJlbGEudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2tEO0FBTW5DLFNBQVNFLE9BQU9DLEtBQWtCLEVBQUU7SUFDakQsU0FBU0Msc0JBQXNCO1FBQzdCLHFCQUNFLDhEQUFDQzs7OEJBQ0MsOERBQUNDO29CQUFHQyxXQUFVOzhCQUFnQjs7Ozs7OzhCQUM5Qiw4REFBQ0Q7b0JBQUdDLFdBQVU7OEJBQWdCOzs7Ozs7OEJBQzlCLDhEQUFDRDtvQkFBR0MsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDOUIsOERBQUNEO29CQUFHQyxXQUFVOzhCQUFNOzs7Ozs7Ozs7Ozs7SUFHMUI7SUFFQSxTQUFTQyxrQkFBa0I7WUFDbEJMO1FBQVAsT0FBT0EsQ0FBQUEsa0JBQUFBLE1BQU1NLFFBQVEsY0FBZE4sNkJBQUFBLEtBQUFBLElBQUFBLGdCQUFnQk8sSUFBSSxDQUFDQyxTQUFTQyxJQUFNO1lBQ3pDLHFCQUNFLDhEQUFDUDtnQkFFQ0UsV0FBVyxHQUFtRCxPQUFoREssSUFBSSxNQUFNLElBQUksa0JBQWtCLGVBQWU7O2tDQUU3RCw4REFBQ0M7d0JBQUdOLFdBQVU7a0NBQWlCSSxRQUFRRyxFQUFFOzs7Ozs7a0NBQ3pDLDhEQUFDRDt3QkFBR04sV0FBVTtrQ0FBaUJJLFFBQVFJLElBQUk7Ozs7OztrQ0FDM0MsOERBQUNGO3dCQUFHTixXQUFVO2tDQUFpQkksUUFBUUssS0FBSzs7Ozs7O29CQUMzQ0MsZ0JBQWdCTjs7ZUFOWkEsUUFBUUcsRUFBRTs7Ozs7UUFTckI7SUFDRjtJQUVBLFNBQVNHLGdCQUFnQk4sT0FBZ0IsRUFBRTtRQUN6QyxxQkFDRSw4REFBQ0U7WUFBR04sV0FBVTs7OEJBQ1osOERBQUNXO29CQUFPWCxXQUFVOzhCQUNmUCxnREFBV0E7Ozs7Ozs4QkFFZCw4REFBQ2tCO29CQUFPWCxXQUFVOzhCQUNmTiw4Q0FBU0E7Ozs7Ozs7Ozs7OztJQUlsQjtJQUVBLHFCQUNFLDhEQUFDa0I7UUFBTVosV0FBVTs7MEJBQ2YsOERBQUNhO2dCQUFNYixXQUFVOzBCQUNkSDs7Ozs7OzBCQUVILDhEQUFDaUI7MEJBQU9iOzs7Ozs7Ozs7Ozs7QUFHZCxDQUFDO0tBakR1Qk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFiZWxhLnRzeD8zYTU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGllbnRlIGZyb20gXCJAL2NvcmUvQ2xpZW50ZVwiO1xuaW1wb3J0IHsgSWNvbmVFZGljYW8sIEljb25lTGl4byB9IGZyb20gXCIuL0ljb25lc1wiO1xuXG5pbnRlcmZhY2UgVGFiZWxhUHJvcHMge1xuICBjbGllbnRlczogQ2xpZW50ZVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJlbGEocHJvcHM6IFRhYmVsYVByb3BzKSB7XG4gIGZ1bmN0aW9uIHJlbmRlcml6YXJDYWJlY2FsaG8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0cj5cbiAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtbGVmdCBwLTRcIj5Db2RpZ288L3RoPlxuICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHAtNFwiPk5vbWU8L3RoPlxuICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHAtNFwiPklkYWRlPC90aD5cbiAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtNFwiPkHDp8O1ZXM8L3RoPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyaXphckRhZG9zKCkge1xuICAgIHJldHVybiBwcm9wcy5jbGllbnRlcz8ubWFwKChjbGllbnRlLCBpKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dHJcbiAgICAgICAgICBrZXk9e2NsaWVudGUuaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtpICUgMiA9PT0gMCA/IFwiYmctcHVycGxlLTIwMFwiIDogXCJiZy1wdXJwbGUtMTAwXCJ9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcC00XCI+e2NsaWVudGUuaWR9PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHAtNFwiPntjbGllbnRlLm5vbWV9PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHAtNFwiPntjbGllbnRlLmlkYWRlfTwvdGQ+XG4gICAgICAgICAge3JlbmRlcml6YXJBY29lcyhjbGllbnRlKX1cbiAgICAgICAgPC90cj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJpemFyQWNvZXMoY2xpZW50ZTogQ2xpZW50ZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGQgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtZ3JlZW4tNjAwIHJvdW5kZWQtZnVsbCBwLTIgbS0xIGhvdmVyOmJnLXB1cnBsZS01MFwiPlxuICAgICAgICAgIHtJY29uZUVkaWNhb31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1yZWQtNTAwIHJvdW5kZWQtZnVsbCBwLTIgbS0xIGhvdmVyOmJnLXB1cnBsZS01MFwiPlxuICAgICAgICAgIHtJY29uZUxpeG99XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC90ZD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tdCBmcm9tLXB1cnBsZS01MDAgdG8tcHVycGxlLTgwMCB0ZXh0LWdyYXktMTAwXCI+XG4gICAgICAgIHtyZW5kZXJpemFyQ2FiZWNhbGhvKCl9XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PntyZW5kZXJpemFyRGFkb3MoKX08L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSWNvbmVFZGljYW8iLCJJY29uZUxpeG8iLCJUYWJlbGEiLCJwcm9wcyIsInJlbmRlcml6YXJDYWJlY2FsaG8iLCJ0ciIsInRoIiwiY2xhc3NOYW1lIiwicmVuZGVyaXphckRhZG9zIiwiY2xpZW50ZXMiLCJtYXAiLCJjbGllbnRlIiwiaSIsInRkIiwiaWQiLCJub21lIiwiaWRhZGUiLCJyZW5kZXJpemFyQWNvZXMiLCJidXR0b24iLCJ0YWJsZSIsInRoZWFkIiwidGJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Tabela.tsx\n"));

/***/ })

});