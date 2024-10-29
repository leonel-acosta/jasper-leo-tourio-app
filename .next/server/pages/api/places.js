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

/***/ "(api)/./db/models/Place.js":
/*!****************************!*\
  !*** ./db/models/Place.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n/* import \"./Comment\";\n */ const { Schema  } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst placeSchema = new Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    location: {\n        type: String,\n        required: true\n    },\n    image: {\n        type: String,\n        required: true\n    },\n    mapURL: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    }\n});\nconst Place = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Place) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Place\", placeSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Place);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvUGxhY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ2hDO0NBQ0MsR0FDRCxNQUFNLEVBQUVDLE9BQU0sRUFBRSxHQUFHRCxpREFBUUE7QUFFM0IsTUFBTUUsY0FBYyxJQUFJRCxPQUFPO0lBQzdCRSxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3JDQyxVQUFVO1FBQUVILE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3pDRSxPQUFPO1FBQUVKLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3RDRyxRQUFRO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3ZDSSxhQUFhO1FBQUVOLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0FBRzlDO0FBRUEsTUFBTUssUUFBUVgsOERBQXFCLElBQUlBLHFEQUFjLENBQUMsU0FBU0U7QUFFL0QsaUVBQWVTLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNhcC1wcm9qZWN0LTZfdG91cmlvLWFwcC8uL2RiL21vZGVscy9QbGFjZS5qcz9mYzY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbi8qIGltcG9ydCBcIi4vQ29tbWVudFwiO1xuICovXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XG5cbmNvbnN0IHBsYWNlU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBsb2NhdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGltYWdlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgbWFwVVJMOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAvKiAgIGNvbW1lbnRzOiB7IHR5cGU6IFtTY2hlbWEuVHlwZXMuT2JqZWN0SWRdLCByZWY6IFwiQ29tbWVudFwiIH0sXG4gICAqL1xufSk7XG5cbmNvbnN0IFBsYWNlID0gbW9uZ29vc2UubW9kZWxzLlBsYWNlIHx8IG1vbmdvb3NlLm1vZGVsKFwiUGxhY2VcIiwgcGxhY2VTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBQbGFjZTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsInBsYWNlU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImxvY2F0aW9uIiwiaW1hZ2UiLCJtYXBVUkwiLCJkZXNjcmlwdGlvbiIsIlBsYWNlIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/models/Place.js\n");

/***/ }),

/***/ "(api)/./pages/api/places/index.js":
/*!***********************************!*\
  !*** ./pages/api/places/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../db/connect */ \"(api)/./db/connect.js\");\n/* harmony import */ var _db_models_Place__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../db/models/Place */ \"(api)/./db/models/Place.js\");\n\n\nasync function handler(request, response) {\n    try {\n        await (0,_db_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        console.log(\"Database connected\");\n    } catch (error) {\n        console.log(\"Database not connected\");\n        return response.satus(500).json({\n            error: \"Database connection failed\"\n        });\n    }\n    try {\n        if (request.method === \"GET\") {\n            const places = await _db_models_Place__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            return response.status(200).json(places);\n        } else {\n            return response.status(404).json({\n                status: \"Not Found\"\n            });\n        }\n    } catch (error1) {\n        return response.satus(500).json({\n            error: \"Internal Server Error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGxhY2VzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUNDO0FBRTlCLGVBQWVFLFFBQVFDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3ZELElBQUk7UUFDRixNQUFNSix1REFBU0E7UUFDZkssUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RGLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU9GLFNBQVNJLEtBQUssQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUYsT0FBTztRQUE2QjtJQUN4RTtJQUVBLElBQUk7UUFDRixJQUFJSixRQUFRTyxNQUFNLEtBQUssT0FBTztZQUM1QixNQUFNQyxTQUFTLE1BQU1WLDZEQUFVO1lBQy9CLE9BQU9HLFNBQVNTLE1BQU0sQ0FBQyxLQUFLSixJQUFJLENBQUNFO1FBQ25DLE9BQU87WUFDTCxPQUFPUCxTQUFTUyxNQUFNLENBQUMsS0FBS0osSUFBSSxDQUFDO2dCQUFFSSxRQUFRO1lBQVk7UUFDekQsQ0FBQztJQUNILEVBQUUsT0FBT04sUUFBTztRQUNkLE9BQU9ILFNBQVNJLEtBQUssQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUYsT0FBTztRQUF3QjtJQUNuRTtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNhcC1wcm9qZWN0LTZfdG91cmlvLWFwcC8uL3BhZ2VzL2FwaS9wbGFjZXMvaW5kZXguanM/ODA2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi9kYi9jb25uZWN0XCI7XG5pbXBvcnQgUGxhY2UgZnJvbSBcIi4uLy4uLy4uL2RiL21vZGVscy9QbGFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZGJDb25uZWN0KCk7XG4gICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBjb25uZWN0ZWRcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBub3QgY29ubmVjdGVkXCIpO1xuICAgIHJldHVybiByZXNwb25zZS5zYXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJEYXRhYmFzZSBjb25uZWN0aW9uIGZhaWxlZFwiIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICAgIGNvbnN0IHBsYWNlcyA9IGF3YWl0IFBsYWNlLmZpbmQoKTtcbiAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHBsYWNlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoNDA0KS5qc29uKHsgc3RhdHVzOiBcIk5vdCBGb3VuZFwiIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gcmVzcG9uc2Uuc2F0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJQbGFjZSIsImhhbmRsZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzYXR1cyIsImpzb24iLCJtZXRob2QiLCJwbGFjZXMiLCJmaW5kIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/places/index.js\n");

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