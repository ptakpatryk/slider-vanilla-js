/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/googleIcon.svg":
/*!***********************************!*\
  !*** ./src/assets/googleIcon.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg viewBox=\\\"0 0 533.5 544.3\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z\\\" fill=\\\"#4285f4\\\"></path><path d=\\\"M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z\\\" fill=\\\"#34a853\\\"></path><path d=\\\"M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z\\\" fill=\\\"#fbbc04\\\"></path><path d=\\\"M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z\\\" fill=\\\"#ea4335\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/assets/googleIcon.svg?");

/***/ }),

/***/ "./src/js/auth.js":
/*!************************!*\
  !*** ./src/js/auth.js ***!
  \************************/
/*! exports provided: login, checkTokenAvailability, getToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkTokenAvailability\", function() { return checkTokenAvailability; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getToken\", function() { return getToken; });\nvar clientId = '917089682947-af68qq1cqr1es6hbrprjc78v6876h4at.apps.googleusercontent.com'; // const sercetCode = 'rs2ViuR-iEE_ZdD2IyeYOHJx';\n\nvar redirectUri = 'http://localhost:9000/';\nvar login = function login() {\n  var url = \"https://accounts.google.com/o/oauth2/v2/auth?response_type=token&scope=https://www.googleapis.com/auth/photoslibrary&client_id=\".concat(clientId, \"&redirect_uri=\").concat(redirectUri, \"&login_hint=patrickbird330@gmail.com\");\n  window.location.href = url;\n  getToken();\n};\nvar checkTokenAvailability = function checkTokenAvailability() {\n  var fragmentString = location.hash.substring(1);\n  var params = {};\n  var regex = /([^&=]+)=([^&]*)/g;\n  var m;\n\n  while (m = regex.exec(fragmentString)) {\n    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);\n  }\n\n  if (Object.keys(params).length > 0) {\n    // If token is in query string\n    sessionStorage.setItem('oauth2-params', JSON.stringify(params)); // Remove hash\n\n    history.replaceState(null, null, ' ');\n  } else {\n    console.log('no token'); //There was no token\n  }\n};\nvar getToken = function getToken() {\n  var params = JSON.parse(sessionStorage.getItem('oauth2-params'));\n  return params['access_token'];\n};\n\n//# sourceURL=webpack:///./src/js/auth.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./src/style/style.scss\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_googleIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/googleIcon.svg */ \"./src/assets/googleIcon.svg\");\n/* harmony import */ var _assets_googleIcon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_googleIcon_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n\n\n\n\nvar btnLogin = document.querySelector('.login');\nvar btnFetch = document.querySelector('.getAlbums');\nvar content = document.querySelector('.content');\nObject(_auth__WEBPACK_IMPORTED_MODULE_2__[\"checkTokenAvailability\"])();\nvar token = Object(_auth__WEBPACK_IMPORTED_MODULE_2__[\"getToken\"])();\n\nvar getAlbums = function getAlbums() {\n  _ui__WEBPACK_IMPORTED_MODULE_3__[\"setSpinner\"](content);\n  fetch(\"https://photoslibrary.googleapis.com/v1/albums\", {\n    method: 'GET',\n    headers: {\n      'Content-type': 'application/json',\n      Authorization: \"Bearer \".concat(token)\n    }\n  }).then(function (res) {\n    return res.json();\n  }).then(function (response) {\n    console.log(response.albums);\n    _ui__WEBPACK_IMPORTED_MODULE_3__[\"updateAlbumList\"](content, response.albums, openAlbum);\n  })[\"catch\"](function (err) {\n    return console.error(err);\n  });\n};\n\nvar openAlbum = function openAlbum(albumId) {\n  _ui__WEBPACK_IMPORTED_MODULE_3__[\"setSpinner\"](content);\n  fetch(\"https://photoslibrary.googleapis.com/v1/mediaItems:search\", {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json',\n      Authorization: \"Bearer \".concat(token)\n    },\n    body: JSON.stringify({\n      pageSize: '100',\n      albumId: albumId\n    })\n  }).then(function (res) {\n    return res.json();\n  }).then(function (response) {\n    console.log(response);\n    _ui__WEBPACK_IMPORTED_MODULE_3__[\"updateGalleryItems\"](content, response.mediaItems);\n  })[\"catch\"](function (err) {\n    return console.error(err);\n  });\n};\n\nbtnLogin.addEventListener('click', _auth__WEBPACK_IMPORTED_MODULE_2__[\"login\"]);\nbtnFetch.addEventListener('click', getAlbums);\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/*! exports provided: updateAlbumList, updateGalleryItems, setSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateAlbumList\", function() { return updateAlbumList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateGalleryItems\", function() { return updateGalleryItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSpinner\", function() { return setSpinner; });\nvar updateAlbumList = function updateAlbumList(container, list, openAlbumFn) {\n  console.log(container);\n  var content = list.map(function (el) {\n    return \"<figure class='album'>\\n      <img src=\".concat(el.coverPhotoBaseUrl, \" alt=\").concat(el.title, \" />\\n      <figcaption data-id=\").concat(el.id, \">\\n        <h3 class='album__title'>\").concat(el.title, \"</h3>\\n        <p class='album__counter'>\\n          Photos: <span class='number'>\").concat(el.mediaItemsCount, \"</span>\\n        </p>\\n      </figcaption>\\n    </figure>\");\n  });\n  container.innerHTML = \"<section class='albums'>\".concat(content.join(''), \"</section>\");\n  var albumsList = document.querySelectorAll('.album figcaption');\n  albumsList.forEach(function (el) {\n    el.addEventListener('click', function () {\n      return openAlbumFn(el.dataset.id);\n    });\n  });\n  console.log(albumsList);\n};\nvar updateGalleryItems = function updateGalleryItems(container, list) {\n  var content = list.map(function (el) {\n    return \"\\n       <figure class=\\\"photo\\\">\\n            <img\\n              src=\".concat(el.baseUrl, \"\\n              alt=\").concat(el.filename, \"\\n            />\\n            <figcaption>\\n              <p>Added: <time>\").concat(el.mediaMetadata.creationTime.substring(0, 10), \"</time></p>\\n            </figcaption>\\n          </figure>\\n      \");\n  });\n  container.innerHTML = \"<section class=\\\"gallery\\\">\\n                \".concat(content.join(''), \"\\n  </section>\");\n};\nvar setSpinner = function setSpinner(container) {\n  container.innerHTML = \"\\n        <div class=\\\"sk-circle\\\">\\n          <div class=\\\"sk-circle1 sk-child\\\"></div>\\n          <div class=\\\"sk-circle2 sk-child\\\"></div>\\n          <div class=\\\"sk-circle3 sk-child\\\"></div>\\n          <div class=\\\"sk-circle4 sk-child\\\"></div>\\n          <div class=\\\"sk-circle5 sk-child\\\"></div>\\n          <div class=\\\"sk-circle6 sk-child\\\"></div>\\n          <div class=\\\"sk-circle7 sk-child\\\"></div>\\n          <div class=\\\"sk-circle8 sk-child\\\"></div>\\n          <div class=\\\"sk-circle9 sk-child\\\"></div>\\n          <div class=\\\"sk-circle10 sk-child\\\"></div>\\n          <div class=\\\"sk-circle11 sk-child\\\"></div>\\n          <div class=\\\"sk-circle12 sk-child\\\"></div>\\n        </div>\\n        \";\n};\n\n//# sourceURL=webpack:///./src/js/ui.js?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/style.scss?");

/***/ })

/******/ });