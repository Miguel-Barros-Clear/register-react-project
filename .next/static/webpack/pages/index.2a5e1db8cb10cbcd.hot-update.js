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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tabela; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Icones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icones */ \"./src/components/Icones.tsx\");\n\n\nfunction Tabela(props) {\n    function renderizarCabecalho() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                    className: \"text-left p-4\",\n                    children: \"Codigo\"\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                    className: \"text-left p-4\",\n                    children: \"Nome\"\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                    className: \"text-left p-4\",\n                    children: \"Idade\"\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                    className: \"p-4\",\n                    children: \"A\\xe7\\xf5es\"\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this);\n    }\n    function renderizarDados() {\n        var _props_clientes;\n        return (_props_clientes = props.clientes) === null || _props_clientes === void 0 ? void 0 : _props_clientes.map((cliente, i)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"\".concat(i % 2 === 0 ? \"bg-purple-200\" : \"bg-purple-100\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"text-left p-4\",\n                        children: cliente.id\n                    }, void 0, false, {\n                        fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"text-left p-4\",\n                        children: cliente.nome\n                    }, void 0, false, {\n                        fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"text-left p-4\",\n                        children: cliente.idade\n                    }, void 0, false, {\n                        fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    renderizarAcoes(cliente)\n                ]\n            }, cliente.id, true, {\n                fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    function renderizarAcoes(cliente) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            className: \"flex\",\n            children: [\n                props.clienteSelecionado ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50\",\n                    children: _Icones__WEBPACK_IMPORTED_MODULE_1__.IconeEdicao\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, this) : false,\n                props.clienteExcluido ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50\",\n                    children: _Icones__WEBPACK_IMPORTED_MODULE_1__.IconeLixo\n                }, void 0, false, {\n                    fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this) : false\n            ]\n        }, void 0, true, {\n            fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: \"w-full rounded-xl overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                className: \"bg-gradient-to-t from-purple-500 to-purple-800 text-gray-100\",\n                children: renderizarCabecalho()\n            }, void 0, false, {\n                fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: renderizarDados()\n            }, void 0, false, {\n                fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/miguelbarros/Documents/register-react-project/src/components/Tabela.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_c = Tabela;\nvar _c;\n$RefreshReg$(_c, \"Tabela\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJlbGEudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2tEO0FBUW5DLFNBQVNFLE9BQU9DLEtBQWtCLEVBQUU7SUFDakQsU0FBU0Msc0JBQXNCO1FBQzdCLHFCQUNFLDhEQUFDQzs7OEJBQ0MsOERBQUNDO29CQUFHQyxXQUFVOzhCQUFnQjs7Ozs7OzhCQUM5Qiw4REFBQ0Q7b0JBQUdDLFdBQVU7OEJBQWdCOzs7Ozs7OEJBQzlCLDhEQUFDRDtvQkFBR0MsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDOUIsOERBQUNEO29CQUFHQyxXQUFVOzhCQUFNOzs7Ozs7Ozs7Ozs7SUFHMUI7SUFFQSxTQUFTQyxrQkFBa0I7WUFDbEJMO1FBQVAsT0FBT0EsQ0FBQUEsa0JBQUFBLE1BQU1NLFFBQVEsY0FBZE4sNkJBQUFBLEtBQUFBLElBQUFBLGdCQUFnQk8sSUFBSSxDQUFDQyxTQUFTQyxJQUFNO1lBQ3pDLHFCQUNFLDhEQUFDUDtnQkFFQ0UsV0FBVyxHQUFtRCxPQUFoREssSUFBSSxNQUFNLElBQUksa0JBQWtCLGVBQWU7O2tDQUU3RCw4REFBQ0M7d0JBQUdOLFdBQVU7a0NBQWlCSSxRQUFRRyxFQUFFOzs7Ozs7a0NBQ3pDLDhEQUFDRDt3QkFBR04sV0FBVTtrQ0FBaUJJLFFBQVFJLElBQUk7Ozs7OztrQ0FDM0MsOERBQUNGO3dCQUFHTixXQUFVO2tDQUFpQkksUUFBUUssS0FBSzs7Ozs7O29CQUMzQ0MsZ0JBQWdCTjs7ZUFOWkEsUUFBUUcsRUFBRTs7Ozs7UUFTckI7SUFDRjtJQUVBLFNBQVNHLGdCQUFnQk4sT0FBZ0IsRUFBRTtRQUN6QyxxQkFDRSw4REFBQ0U7WUFBR04sV0FBVTs7Z0JBQ1hKLE1BQU1lLGtCQUFrQixpQkFDdkIsOERBQUNDO29CQUFPWixXQUFVOzhCQUNmUCxnREFBV0E7Ozs7OzJCQUdkLEtBQUs7Z0JBRU5HLE1BQU1pQixlQUFlLGlCQUNwQiw4REFBQ0Q7b0JBQU9aLFdBQVU7OEJBQ2ZOLDhDQUFTQTs7Ozs7MkJBR1osS0FBSzs7Ozs7OztJQUliO0lBRUEscUJBQ0UsOERBQUNvQjtRQUFNZCxXQUFVOzswQkFDZiw4REFBQ2U7Z0JBQU1mLFdBQVU7MEJBQ2RIOzs7Ozs7MEJBRUgsOERBQUNtQjswQkFBT2Y7Ozs7Ozs7Ozs7OztBQUdkLENBQUM7S0F6RHVCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UYWJlbGEudHN4PzNhNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsaWVudGUgZnJvbSBcIkAvY29yZS9DbGllbnRlXCI7XG5pbXBvcnQgeyBJY29uZUVkaWNhbywgSWNvbmVMaXhvIH0gZnJvbSBcIi4vSWNvbmVzXCI7XG5cbmludGVyZmFjZSBUYWJlbGFQcm9wcyB7XG4gIGNsaWVudGVzOiBDbGllbnRlW107XG4gIGNsaWVudGVTZWxlY2lvbmFkbz86IChjbGllbnRlOiBDbGllbnRlKSA9PiB2b2lkO1xuICBjbGllbnRlRXhjbHVpZG8/OiAoY2xpZW50ZTogQ2xpZW50ZSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFiZWxhKHByb3BzOiBUYWJlbGFQcm9wcykge1xuICBmdW5jdGlvbiByZW5kZXJpemFyQ2FiZWNhbGhvKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dHI+XG4gICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcC00XCI+Q29kaWdvPC90aD5cbiAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtbGVmdCBwLTRcIj5Ob21lPC90aD5cbiAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtbGVmdCBwLTRcIj5JZGFkZTwvdGg+XG4gICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTRcIj5Bw6fDtWVzPC90aD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcml6YXJEYWRvcygpIHtcbiAgICByZXR1cm4gcHJvcHMuY2xpZW50ZXM/Lm1hcCgoY2xpZW50ZSwgaSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRyXG4gICAgICAgICAga2V5PXtjbGllbnRlLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7aSAlIDIgPT09IDAgPyBcImJnLXB1cnBsZS0yMDBcIiA6IFwiYmctcHVycGxlLTEwMFwifWB9XG4gICAgICAgID5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHAtNFwiPntjbGllbnRlLmlkfTwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtbGVmdCBwLTRcIj57Y2xpZW50ZS5ub21lfTwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtbGVmdCBwLTRcIj57Y2xpZW50ZS5pZGFkZX08L3RkPlxuICAgICAgICAgIHtyZW5kZXJpemFyQWNvZXMoY2xpZW50ZSl9XG4gICAgICAgIDwvdHI+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyaXphckFjb2VzKGNsaWVudGU6IENsaWVudGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRkIGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAge3Byb3BzLmNsaWVudGVTZWxlY2lvbmFkbyA/IChcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtZ3JlZW4tNjAwIHJvdW5kZWQtZnVsbCBwLTIgbS0xIGhvdmVyOmJnLXB1cnBsZS01MFwiPlxuICAgICAgICAgICAge0ljb25lRWRpY2FvfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICl9XG4gICAgICAgIHtwcm9wcy5jbGllbnRlRXhjbHVpZG8gPyAoXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXJlZC01MDAgcm91bmRlZC1mdWxsIHAtMiBtLTEgaG92ZXI6YmctcHVycGxlLTUwXCI+XG4gICAgICAgICAgICB7SWNvbmVMaXhvfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICl9XG4gICAgICA8L3RkPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by10IGZyb20tcHVycGxlLTUwMCB0by1wdXJwbGUtODAwIHRleHQtZ3JheS0xMDBcIj5cbiAgICAgICAge3JlbmRlcml6YXJDYWJlY2FsaG8oKX1cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+e3JlbmRlcml6YXJEYWRvcygpfTwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJY29uZUVkaWNhbyIsIkljb25lTGl4byIsIlRhYmVsYSIsInByb3BzIiwicmVuZGVyaXphckNhYmVjYWxobyIsInRyIiwidGgiLCJjbGFzc05hbWUiLCJyZW5kZXJpemFyRGFkb3MiLCJjbGllbnRlcyIsIm1hcCIsImNsaWVudGUiLCJpIiwidGQiLCJpZCIsIm5vbWUiLCJpZGFkZSIsInJlbmRlcml6YXJBY29lcyIsImNsaWVudGVTZWxlY2lvbmFkbyIsImJ1dHRvbiIsImNsaWVudGVFeGNsdWlkbyIsInRhYmxlIiwidGhlYWQiLCJ0Ym9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Tabela.tsx\n"));

/***/ })

});