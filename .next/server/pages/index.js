"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link.js */ \"next/link.js\");\n/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _StyledImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StyledImage.js */ \"./components/StyledImage.js\");\n\n\n\n\nconst Article = styled_components__WEBPACK_IMPORTED_MODULE_2___default().article.withConfig({\n    displayName: \"Card__Article\",\n    componentId: \"sc-56a6581e-0\"\n})`\n  border: 5px solid black;\n  border-radius: 0.8rem;\n  padding: 0.5rem;\n`;\nconst ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n    displayName: \"Card__ImageContainer\",\n    componentId: \"sc-56a6581e-1\"\n})`\n  position: relative;\n  height: 10rem;\n`;\nconst Figure = styled_components__WEBPACK_IMPORTED_MODULE_2___default().figure.withConfig({\n    displayName: \"Card__Figure\",\n    componentId: \"sc-56a6581e-2\"\n})`\n  position: relative;\n  margin: 0;\n`;\nconst Anchor = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({\n    displayName: \"Card__Anchor\",\n    componentId: \"sc-56a6581e-3\"\n})`\n  &::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n`;\nconst ScreenReaderOnly = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({\n    displayName: \"Card__ScreenReaderOnly\",\n    componentId: \"sc-56a6581e-4\"\n})`\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n`;\nfunction Card({ name , image , location , id  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Figure, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageContainer, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StyledImage_js__WEBPACK_IMPORTED_MODULE_3__.StyledImage, {\n                            src: image,\n                            fill: true,\n                            sizes: \"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/leo/spiced-academy/jasper-leo-tourio-app/components/Card.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/leo/spiced-academy/jasper-leo-tourio-app/components/Card.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/home/leo/spiced-academy/jasper-leo-tourio-app/components/Card.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/leo/spiced-academy/jasper-leo-tourio-app/components/Card.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Location: \",\n                    location\n                ]\n            }, void 0, true, {\n                fileName: \"/home/leo/spiced-academy/jasper-leo-tourio-app/components/Card.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link_js__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: `places/${id}`,\n                passHref: true,\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Anchor, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ScreenReaderOnly, {\n                        children: \"More Info\"\n                    }, void 0, false, {\n                        fileName: \"/home/leo/spiced-academy/jasper-leo-tourio-app/components/Card.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/leo/spiced-academy/jasper-leo-tourio-app/components/Card.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/leo/spiced-academy/jasper-leo-tourio-app/components/Card.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/leo/spiced-academy/jasper-leo-tourio-app/components/Card.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFnQztBQUNPO0FBQ1E7QUFFL0MsTUFBTUcsVUFBVUYsMkVBQWM7OztFQUFBLENBQUM7Ozs7QUFJL0IsQ0FBQztBQUVELE1BQU1JLGlCQUFpQkosdUVBQVU7OztFQUFBLENBQUM7OztBQUdsQyxDQUFDO0FBRUQsTUFBTU0sU0FBU04sMEVBQWE7OztFQUFBLENBQUM7OztBQUc3QixDQUFDO0FBRUQsTUFBTVEsU0FBU1IscUVBQVE7OztFQUFBLENBQUM7Ozs7Ozs7Ozs7QUFVeEIsQ0FBQztBQUVELE1BQU1VLG1CQUFtQlYsd0VBQVc7OztFQUFBLENBQUM7Ozs7Ozs7Ozs7QUFVckMsQ0FBQztBQUVjLFNBQVNZLEtBQUssRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsR0FBRSxFQUFFLEVBQUU7SUFDMUQscUJBQ0UsOERBQUNkOzswQkFDQyw4REFBQ0k7O2tDQUNDLDhEQUFDRjtrQ0FDQyw0RUFBQ0gsd0RBQVdBOzRCQUNWZ0IsS0FBS0g7NEJBQ0xJLElBQUk7NEJBQ0pDLE9BQU07NEJBR05DLEtBQUk7Ozs7Ozs7Ozs7O2tDQUdSLDhEQUFDQztrQ0FBWVI7Ozs7Ozs7Ozs7OzswQkFFZiw4REFBQ1M7O29CQUFFO29CQUFXUDs7Ozs7OzswQkFDZCw4REFBQ2hCLHFEQUFJQTtnQkFBQ3dCLE1BQU0sQ0FBQyxPQUFPLEVBQUVQLEdBQUcsQ0FBQztnQkFBRVEsUUFBUTtnQkFBQ0MsY0FBYzswQkFDakQsNEVBQUNqQjs4QkFDQyw0RUFBQ0U7a0NBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNhcC1wcm9qZWN0LTZfdG91cmlvLWFwcC8uL2NvbXBvbmVudHMvQ2FyZC5qcz9kNjIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmsuanNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTdHlsZWRJbWFnZSB9IGZyb20gXCIuL1N0eWxlZEltYWdlLmpzXCI7XG5cbmNvbnN0IEFydGljbGUgPSBzdHlsZWQuYXJ0aWNsZWBcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuYDtcblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTByZW07XG5gO1xuXG5jb25zdCBGaWd1cmUgPSBzdHlsZWQuZmlndXJlYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmNvbnN0IEFuY2hvciA9IHN0eWxlZC5hYFxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5gO1xuXG5jb25zdCBTY3JlZW5SZWFkZXJPbmx5ID0gc3R5bGVkLnNwYW5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCh7IG5hbWUsIGltYWdlLCBsb2NhdGlvbiwgaWQgfSkge1xuICByZXR1cm4gKFxuICAgIDxBcnRpY2xlPlxuICAgICAgPEZpZ3VyZT5cbiAgICAgICAgPEltYWdlQ29udGFpbmVyPlxuICAgICAgICAgIDxTdHlsZWRJbWFnZVxuICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgIHNpemVzPVwiKG1heC13aWR0aDogNzY4cHgpIDEwMHZ3LFxuICAgICAgICAgICAgICAobWF4LXdpZHRoOiAxMjAwcHgpIDUwdncsXG4gICAgICAgICAgICAgIDMzdndcIlxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0ltYWdlQ29udGFpbmVyPlxuICAgICAgICA8ZmlnY2FwdGlvbj57bmFtZX08L2ZpZ2NhcHRpb24+XG4gICAgICA8L0ZpZ3VyZT5cbiAgICAgIDxwPkxvY2F0aW9uOiB7bG9jYXRpb259PC9wPlxuICAgICAgPExpbmsgaHJlZj17YHBsYWNlcy8ke2lkfWB9IHBhc3NIcmVmIGxlZ2FjeUJlaGF2aW9yPlxuICAgICAgICA8QW5jaG9yPlxuICAgICAgICAgIDxTY3JlZW5SZWFkZXJPbmx5Pk1vcmUgSW5mbzwvU2NyZWVuUmVhZGVyT25seT5cbiAgICAgICAgPC9BbmNob3I+XG4gICAgICA8L0xpbms+XG4gICAgPC9BcnRpY2xlPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZWQiLCJTdHlsZWRJbWFnZSIsIkFydGljbGUiLCJhcnRpY2xlIiwiSW1hZ2VDb250YWluZXIiLCJkaXYiLCJGaWd1cmUiLCJmaWd1cmUiLCJBbmNob3IiLCJhIiwiU2NyZWVuUmVhZGVyT25seSIsInNwYW4iLCJDYXJkIiwibmFtZSIsImltYWdlIiwibG9jYXRpb24iLCJpZCIsInNyYyIsImZpbGwiLCJzaXplcyIsImFsdCIsImZpZ2NhcHRpb24iLCJwIiwiaHJlZiIsInBhc3NIcmVmIiwibGVnYWN5QmVoYXZpb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Card.js\n");

/***/ }),

/***/ "./components/StyledImage.js":
/*!***********************************!*\
  !*** ./components/StyledImage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledImage\": () => (/* binding */ StyledImage)\n/* harmony export */ });\n/* harmony import */ var next_image_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image.js */ \"next/image.js\");\n/* harmony import */ var next_image_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((next_image_js__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({\n    displayName: \"StyledImage\",\n    componentId: \"sc-82c09f6b-0\"\n})`\n  object-fit: cover;\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0eWxlZEltYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtDO0FBQ0s7QUFFaEMsTUFBTUUsY0FBY0Qsd0RBQU1BLENBQUNELHNEQUFLQTs7O0VBQUMsQ0FBQzs7QUFFekMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjYXAtcHJvamVjdC02X3RvdXJpby1hcHAvLi9jb21wb25lbnRzL1N0eWxlZEltYWdlLmpzP2VhY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlLmpzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpYFxuICBvYmplY3QtZml0OiBjb3ZlcjtcbmA7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZWQiLCJTdHlsZWRJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StyledImage.js\n");

/***/ }),

/***/ "./components/StyledLink.js":
/*!**********************************!*\
  !*** ./components/StyledLink.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledLink\": () => (/* binding */ StyledLink)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({\n    displayName: \"StyledLink\",\n    componentId: \"sc-a7c1ceb6-0\"\n})`\n  background-color: lightsalmon;\n  padding: 0.8rem 1.5rem;\n  border-radius: 0.6rem;\n  color: black;\n  text-decoration: none;\n  font-weight: bold;\n\n  ${({ justifySelf  })=>justifySelf && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`\n      justify-self: ${justifySelf};\n    `}\n\n  ${({ variant  })=>variant === \"outlined\" && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`\n      text-align: center;\n      background-color: white;\n      border: 3px solid lightsalmon;\n    `}\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0eWxlZExpbmsuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEO0FBRXpDLE1BQU1FLGFBQWFGLHFFQUFROzs7RUFBQSxDQUFDOzs7Ozs7OztFQVFqQyxFQUFFLENBQUMsRUFBRUksWUFBVyxFQUFFLEdBQ2hCQSxlQUNBSCxrREFBRyxDQUFDO29CQUNZLEVBQUVHLFlBQVk7SUFDOUIsQ0FBQyxDQUFDOztFQUVKLEVBQUUsQ0FBQyxFQUFFQyxRQUFPLEVBQUUsR0FDWkEsWUFBWSxjQUNaSixrREFBRyxDQUFDOzs7O0lBSUosQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjYXAtcHJvamVjdC02X3RvdXJpby1hcHAvLi9jb21wb25lbnRzL1N0eWxlZExpbmsuanM/MDE4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5hYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjtcbiAgcGFkZGluZzogMC44cmVtIDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgJHsoeyBqdXN0aWZ5U2VsZiB9KSA9PlxuICAgIGp1c3RpZnlTZWxmICYmXG4gICAgY3NzYFxuICAgICAganVzdGlmeS1zZWxmOiAke2p1c3RpZnlTZWxmfTtcbiAgICBgfVxuXG4gICR7KHsgdmFyaWFudCB9KSA9PlxuICAgIHZhcmlhbnQgPT09IFwib3V0bGluZWRcIiAmJlxuICAgIGNzc2BcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRzYWxtb247XG4gICAgYH1cbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiY3NzIiwiU3R5bGVkTGluayIsImEiLCJqdXN0aWZ5U2VsZiIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/StyledLink.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card.js */ \"./components/Card.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link.js */ \"next/link.js\");\n/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_StyledLink_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/StyledLink.js */ \"./components/StyledLink.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__]);\nswr__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst List = styled_components__WEBPACK_IMPORTED_MODULE_1___default().ul.withConfig({\n    displayName: \"pages__List\",\n    componentId: \"sc-670d0cb-0\"\n})`\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding-left: 0;\n`;\nconst ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default().li.withConfig({\n    displayName: \"pages__ListItem\",\n    componentId: \"sc-670d0cb-1\"\n})`\n  position: relative;\n  width: 100%;\n`;\nconst FixedLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_StyledLink_js__WEBPACK_IMPORTED_MODULE_5__.StyledLink).withConfig({\n    displayName: \"pages__FixedLink\",\n    componentId: \"sc-670d0cb-2\"\n})`\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n`;\nfunction Home() {\n    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/places\", {\n        fallbackData: []\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n                role: \"list\",\n                children: data.map((place)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItem, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            name: place.name,\n                            image: place.image,\n                            location: place.location,\n                            id: `${place._id.$oid ?? place._id}`\n                        }, void 0, false, {\n                            fileName: \"/home/leo/spiced-academy/jasper-leo-tourio-app/pages/index.js\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        }, this)\n                    }, place.id, false, {\n                        fileName: \"/home/leo/spiced-academy/jasper-leo-tourio-app/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/leo/spiced-academy/jasper-leo-tourio-app/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link_js__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/create\",\n                passHref: true,\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FixedLink, {\n                    children: \"+ place\"\n                }, void 0, false, {\n                    fileName: \"/home/leo/spiced-academy/jasper-leo-tourio-app/pages/index.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/leo/spiced-academy/jasper-leo-tourio-app/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDRTtBQUNoQjtBQUNPO0FBQ3lCO0FBRXpELE1BQU1LLE9BQU9MLHNFQUFTOzs7RUFBQSxDQUFDOzs7Ozs7O0FBT3ZCLENBQUM7QUFFRCxNQUFNTyxXQUFXUCxzRUFBUzs7O0VBQUEsQ0FBQzs7O0FBRzNCLENBQUM7QUFDRCxNQUFNUyxZQUFZVCx3REFBTUEsQ0FBQ0ksaUVBQVVBOzs7RUFBQyxDQUFDOzs7O0FBSXJDLENBQUM7QUFDYyxTQUFTTSxPQUFPO0lBQzdCLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUdULCtDQUFNQSxDQUFDLGVBQWU7UUFBRVUsY0FBYyxFQUFFO0lBQUM7SUFFMUQscUJBQ0U7OzBCQUNFLDhEQUFDUDtnQkFBS1EsTUFBSzswQkFDUkYsS0FBS0csR0FBRyxDQUFDLENBQUNDLFFBQVU7b0JBQ25CLHFCQUNFLDhEQUFDUjtrQ0FDQyw0RUFBQ04sMkRBQUlBOzRCQUNIZSxNQUFNRCxNQUFNQyxJQUFJOzRCQUNoQkMsT0FBT0YsTUFBTUUsS0FBSzs0QkFDbEJDLFVBQVVILE1BQU1HLFFBQVE7NEJBQ3hCQyxJQUFJLENBQUMsRUFBRUosTUFBTUssR0FBRyxDQUFDQyxJQUFJLElBQUlOLE1BQU1LLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7dUJBTHpCTCxNQUFNSSxFQUFFOzs7OztnQkFTM0I7Ozs7OzswQkFFRiw4REFBQ2hCLHFEQUFJQTtnQkFBQ21CLE1BQUs7Z0JBQVVDLFFBQVE7Z0JBQUNDLGNBQWM7MEJBQzFDLDRFQUFDZjs4QkFBVTs7Ozs7Ozs7Ozs7OztBQUluQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjYXAtcHJvamVjdC02X3RvdXJpby1hcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmsuanNcIjtcbmltcG9ydCB7IFN0eWxlZExpbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TdHlsZWRMaW5rLmpzXCI7XG5cbmNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuYDtcblxuY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQubGlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuY29uc3QgRml4ZWRMaW5rID0gc3R5bGVkKFN0eWxlZExpbmspYFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNTBweDtcbiAgcmlnaHQ6IDUwcHg7XG5gO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoXCIvYXBpL3BsYWNlc1wiLCB7IGZhbGxiYWNrRGF0YTogW10gfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpc3Qgcm9sZT1cImxpc3RcIj5cbiAgICAgICAge2RhdGEubWFwKChwbGFjZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtwbGFjZS5pZH0+XG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgbmFtZT17cGxhY2UubmFtZX1cbiAgICAgICAgICAgICAgICBpbWFnZT17cGxhY2UuaW1hZ2V9XG4gICAgICAgICAgICAgICAgbG9jYXRpb249e3BsYWNlLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgIGlkPXtgJHtwbGFjZS5faWQuJG9pZCA/PyBwbGFjZS5faWR9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0xpc3Q+XG4gICAgICA8TGluayBocmVmPVwiL2NyZWF0ZVwiIHBhc3NIcmVmIGxlZ2FjeUJlaGF2aW9yPlxuICAgICAgICA8Rml4ZWRMaW5rPisgcGxhY2U8L0ZpeGVkTGluaz5cbiAgICAgIDwvTGluaz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDYXJkIiwidXNlU1dSIiwiTGluayIsIlN0eWxlZExpbmsiLCJMaXN0IiwidWwiLCJMaXN0SXRlbSIsImxpIiwiRml4ZWRMaW5rIiwiSG9tZSIsImRhdGEiLCJmYWxsYmFja0RhdGEiLCJyb2xlIiwibWFwIiwicGxhY2UiLCJuYW1lIiwiaW1hZ2UiLCJsb2NhdGlvbiIsImlkIiwiX2lkIiwiJG9pZCIsImhyZWYiLCJwYXNzSHJlZiIsImxlZ2FjeUJlaGF2aW9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/image.js":
/*!********************************!*\
  !*** external "next/image.js" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("next/image.js");

/***/ }),

/***/ "next/link.js":
/*!*******************************!*\
  !*** external "next/link.js" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("next/link.js");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();