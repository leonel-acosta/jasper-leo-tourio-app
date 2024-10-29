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
exports.id = "pages/api/places";
exports.ids = ["pages/api/places"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./db/connect.js":
/*!***********************!*\
  !*** ./db/connect.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error();\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9jb25uZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFFM0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsUUFBUTtBQUNwQixDQUFDO0FBRUQsSUFBSUMsU0FBU0MsT0FBT04sUUFBUTtBQUU1QixJQUFJLENBQUNLLFFBQVE7SUFDWEEsU0FBU0MsT0FBT04sUUFBUSxHQUFHO1FBQUVPLE1BQU0sSUFBSTtRQUFFQyxTQUFTLElBQUk7SUFBQztBQUN6RCxDQUFDO0FBRUQsZUFBZUMsWUFBWTtJQUN6QixJQUFJSixPQUFPRSxJQUFJLEVBQUU7UUFDZixPQUFPRixPQUFPRSxJQUFJO0lBQ3BCLENBQUM7SUFDRCxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxPQUFPO1lBQ1hDLGdCQUFnQixLQUFLO1FBQ3ZCO1FBQ0FOLE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLGFBQWFTLE1BQU1HLElBQUksQ0FBQyxDQUFDYixXQUFhO1lBQ3RFLE9BQU9BO1FBQ1Q7SUFDRixDQUFDO0lBQ0QsSUFBSTtRQUNGSyxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNwQyxFQUFFLE9BQU9NLEdBQUc7UUFDVlQsT0FBT0csT0FBTyxHQUFHLElBQUk7UUFDckIsTUFBTU0sRUFBRTtJQUNWO0lBRUEsT0FBT1QsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjYXAtcHJvamVjdC02X3RvdXJpby1hcHAvLi9kYi9jb25uZWN0LmpzP2M3NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcigpO1xufVxuXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xuXG5pZiAoIWNhY2hlZCkge1xuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXG4gICAgfTtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XG4gICAgICByZXR1cm4gbW9uZ29vc2U7XG4gICAgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBudWxsO1xuICAgIHRocm93IGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/connect.js\n");

/***/ }),

/***/ "(api)/./db/models/Comment.js":
/*!******************************!*\
  !*** ./db/models/Comment.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema  } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst commentSchema = new Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    comment: {\n        type: String,\n        required: true\n    },\n    __v: {\n        type: Number,\n        required: true\n    }\n});\nconst Comment = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Comment) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Place Comment:\", commentSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvQ29tbWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0QsaURBQVFBO0FBRTNCLE1BQU1FLGdCQUFnQixJQUFJRCxPQUFPO0lBQy9CRSxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3JDQyxTQUFTO1FBQUVILE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3hDRSxLQUFLO1FBQUVKLE1BQU1LO1FBQVFILFVBQVUsSUFBSTtJQUFDO0FBQ3RDO0FBRUEsTUFBTUksVUFDSlYsZ0VBQXVCLElBQUlBLHFEQUFjLENBQUMsa0JBQWtCRTtBQUU5RCxpRUFBZVEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2FwLXByb2plY3QtNl90b3VyaW8tYXBwLy4vZGIvbW9kZWxzL0NvbW1lbnQuanM/ZDE3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcblxuY29uc3QgY29tbWVudFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgY29tbWVudDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIF9fdjogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG59KTtcblxuY29uc3QgQ29tbWVudCA9XG4gIG1vbmdvb3NlLm1vZGVscy5Db21tZW50IHx8IG1vbmdvb3NlLm1vZGVsKFwiUGxhY2UgQ29tbWVudDpcIiwgY29tbWVudFNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJjb21tZW50U2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNvbW1lbnQiLCJfX3YiLCJOdW1iZXIiLCJDb21tZW50IiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/models/Comment.js\n");

/***/ }),

/***/ "(api)/./db/models/Place.js":
/*!****************************!*\
  !*** ./db/models/Place.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment */ \"(api)/./db/models/Comment.js\");\n\n\nconst { Schema  } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst placeSchema = new Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    location: {\n        type: String,\n        required: true\n    },\n    image: {\n        type: String,\n        required: true\n    },\n    mapURL: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    comments: {\n        type: [\n            Schema.Types.ObjectId\n        ],\n        ref: \"Comment\"\n    }\n});\nconst Place = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Place) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Place\", placeSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Place);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvUGxhY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUNiO0FBRW5CLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdELGlEQUFRQTtBQUUzQixNQUFNRSxjQUFjLElBQUlELE9BQU87SUFDN0JFLE1BQU07UUFBRUMsTUFBTUM7UUFBUUMsVUFBVSxJQUFJO0lBQUM7SUFDckNDLFVBQVU7UUFBRUgsTUFBTUM7UUFBUUMsVUFBVSxJQUFJO0lBQUM7SUFDekNFLE9BQU87UUFBRUosTUFBTUM7UUFBUUMsVUFBVSxJQUFJO0lBQUM7SUFDdENHLFFBQVE7UUFBRUwsTUFBTUM7UUFBUUMsVUFBVSxJQUFJO0lBQUM7SUFDdkNJLGFBQWE7UUFBRU4sTUFBTUM7UUFBUUMsVUFBVSxJQUFJO0lBQUM7SUFDNUNLLFVBQVU7UUFBRVAsTUFBTTtZQUFDSCxPQUFPVyxLQUFLLENBQUNDLFFBQVE7U0FBQztRQUFFQyxLQUFLO0lBQVU7QUFDNUQ7QUFFQSxNQUFNQyxRQUFRZiw4REFBcUIsSUFBSUEscURBQWMsQ0FBQyxTQUFTRTtBQUUvRCxpRUFBZWEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2FwLXByb2plY3QtNl90b3VyaW8tYXBwLy4vZGIvbW9kZWxzL1BsYWNlLmpzP2ZjNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IFwiLi9Db21tZW50XCI7XG5cbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcblxuY29uc3QgcGxhY2VTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGxvY2F0aW9uOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgaW1hZ2U6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBtYXBVUkw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGNvbW1lbnRzOiB7IHR5cGU6IFtTY2hlbWEuVHlwZXMuT2JqZWN0SWRdLCByZWY6IFwiQ29tbWVudFwiIH0sXG59KTtcblxuY29uc3QgUGxhY2UgPSBtb25nb29zZS5tb2RlbHMuUGxhY2UgfHwgbW9uZ29vc2UubW9kZWwoXCJQbGFjZVwiLCBwbGFjZVNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBsYWNlO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwicGxhY2VTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibG9jYXRpb24iLCJpbWFnZSIsIm1hcFVSTCIsImRlc2NyaXB0aW9uIiwiY29tbWVudHMiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiUGxhY2UiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db/models/Place.js\n");

/***/ }),

/***/ "(api)/./pages/api/places/index.js":
/*!***********************************!*\
  !*** ./pages/api/places/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../db/connect */ \"(api)/./db/connect.js\");\n/* harmony import */ var _db_models_Place__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../db/models/Place */ \"(api)/./db/models/Place.js\");\n\n\nasync function handler(request, response) {\n    await (0,_db_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (request.method === \"GET\") {\n        const places = await _db_models_Place__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        return response.status(200).json(places);\n    } else {\n        return response.status(404).json({\n            status: \"Not Found\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGxhY2VzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUNDO0FBRTlCLGVBQWVFLFFBQVFDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3ZELE1BQU1KLHVEQUFTQTtJQUVmLElBQUlHLFFBQVFFLE1BQU0sS0FBSyxPQUFPO1FBQzVCLE1BQU1DLFNBQVMsTUFBTUwsNkRBQVU7UUFDL0IsT0FBT0csU0FBU0ksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7SUFDbkMsT0FBTztRQUNMLE9BQU9GLFNBQVNJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUQsUUFBUTtRQUFZO0lBQ3pELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjYXAtcHJvamVjdC02X3RvdXJpby1hcHAvLi9wYWdlcy9hcGkvcGxhY2VzL2luZGV4LmpzPzgwNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vZGIvY29ubmVjdFwiO1xuaW1wb3J0IFBsYWNlIGZyb20gXCIuLi8uLi8uLi9kYi9tb2RlbHMvUGxhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXF1ZXN0LCByZXNwb25zZSkge1xuICBhd2FpdCBkYkNvbm5lY3QoKTtcblxuICBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICBjb25zdCBwbGFjZXMgPSBhd2FpdCBQbGFjZS5maW5kKCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24ocGxhY2VzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDQwNCkuanNvbih7IHN0YXR1czogXCJOb3QgRm91bmRcIiB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlBsYWNlIiwiaGFuZGxlciIsInJlcXVlc3QiLCJyZXNwb25zZSIsIm1ldGhvZCIsInBsYWNlcyIsImZpbmQiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/places/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/places/index.js"));
module.exports = __webpack_exports__;

})();