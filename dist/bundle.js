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

/***/ "./src/js/auth.js":
/*!************************!*\
  !*** ./src/js/auth.js ***!
  \************************/
/*! exports provided: login, logout, checkTokenAvailability, getToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkTokenAvailability\", function() { return checkTokenAvailability; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getToken\", function() { return getToken; });\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ \"./src/js/domElements.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ \"./src/js/utilities.js\");\n\n\nvar clientId = '917089682947-af68qq1cqr1es6hbrprjc78v6876h4at.apps.googleusercontent.com';\nvar redirectUri = 'https://ptakpatryk.github.io/Gallery_GPhotos/';\nvar login = function login() {\n  var url = \"https://accounts.google.com/o/oauth2/v2/auth?response_type=token&scope=https://www.googleapis.com/auth/photoslibrary&client_id=\".concat(clientId, \"&redirect_uri=\").concat(redirectUri, \"&login_hint=patrickbird330@gmail.com\");\n  window.location.href = url;\n  getToken();\n};\nvar logout = function logout() {\n  sessionStorage.clear();\n  checkTokenAvailability();\n  _domElements__WEBPACK_IMPORTED_MODULE_0__[\"content\"].innerHTML = '';\n};\nvar checkTokenAvailability = function checkTokenAvailability() {\n  var fragmentString = location.hash.substring(1);\n  var params = {};\n  var regex = /([^&=]+)=([^&]*)/g;\n  var m;\n\n  while (m = regex.exec(fragmentString)) {\n    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);\n  }\n\n  if (Object.keys(params).length > 0) {\n    // If token is in query string\n    sessionStorage.setItem('oauth2-params', JSON.stringify(params)); // Remove hash\n\n    history.replaceState(null, null, ' '); // Update dashboard\n\n    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"showItem\"])(_domElements__WEBPACK_IMPORTED_MODULE_0__[\"btnFetch\"]);\n    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"showItem\"])(_domElements__WEBPACK_IMPORTED_MODULE_0__[\"btnLogout\"]);\n    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"showItem\"])(_domElements__WEBPACK_IMPORTED_MODULE_0__[\"submitPhotoForm\"]);\n    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"hideItem\"])(_domElements__WEBPACK_IMPORTED_MODULE_0__[\"btnLogin\"]);\n  } else {\n    // Update dashboard\n    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"hideItem\"])(_domElements__WEBPACK_IMPORTED_MODULE_0__[\"btnFetch\"]);\n    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"hideItem\"])(_domElements__WEBPACK_IMPORTED_MODULE_0__[\"btnLogout\"]);\n    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"hideItem\"])(_domElements__WEBPACK_IMPORTED_MODULE_0__[\"submitPhotoForm\"]);\n    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"showItem\"])(_domElements__WEBPACK_IMPORTED_MODULE_0__[\"btnLogin\"]);\n  }\n};\nvar getToken = function getToken() {\n  if (sessionStorage.getItem('oauth2-params')) {\n    var params = JSON.parse(sessionStorage.getItem('oauth2-params'));\n    return params['access_token'];\n  }\n};\n\n//# sourceURL=webpack:///./src/js/auth.js?");

/***/ }),

/***/ "./src/js/domElements.js":
/*!*******************************!*\
  !*** ./src/js/domElements.js ***!
  \*******************************/
/*! exports provided: btnLogin, btnLogout, btnFetch, content, submitPhotoForm, submitPhoto, submitPhotoInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnLogin\", function() { return btnLogin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnLogout\", function() { return btnLogout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnFetch\", function() { return btnFetch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"content\", function() { return content; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitPhotoForm\", function() { return submitPhotoForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitPhoto\", function() { return submitPhoto; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitPhotoInput\", function() { return submitPhotoInput; });\nvar btnLogin = document.querySelector('.login');\nvar btnLogout = document.querySelector('.logout');\nvar btnFetch = document.querySelector('.getAlbums');\nvar content = document.querySelector('.content');\nvar submitPhotoForm = document.querySelector('.addPhoto');\nvar submitPhoto = document.querySelector('.addPhoto__submit');\nvar submitPhotoInput = document.getElementById('albumAddPhoto');\n\n//# sourceURL=webpack:///./src/js/domElements.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./src/style/style.scss\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domElements */ \"./src/js/domElements.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities */ \"./src/js/utilities.js\");\n\n\n\n\n\nObject(_auth__WEBPACK_IMPORTED_MODULE_1__[\"checkTokenAvailability\"])();\nvar token = Object(_auth__WEBPACK_IMPORTED_MODULE_1__[\"getToken\"])();\n\nvar getAlbums = function getAlbums() {\n  _ui__WEBPACK_IMPORTED_MODULE_2__[\"setSpinner\"](_domElements__WEBPACK_IMPORTED_MODULE_3__[\"content\"]);\n  fetch(\"https://photoslibrary.googleapis.com/v1/albums\", {\n    method: 'GET',\n    headers: {\n      'Content-type': 'application/json',\n      Authorization: \"Bearer \".concat(token)\n    }\n  }).then(function (res) {\n    return res.json();\n  }).then(function (response) {\n    _ui__WEBPACK_IMPORTED_MODULE_2__[\"updateAlbumList\"](_domElements__WEBPACK_IMPORTED_MODULE_3__[\"content\"], response.albums, openAlbum);\n  })[\"catch\"](function (err) {\n    return console.error(err);\n  });\n};\n\nvar openAlbum = function openAlbum(albumId) {\n  _ui__WEBPACK_IMPORTED_MODULE_2__[\"setSpinner\"](_domElements__WEBPACK_IMPORTED_MODULE_3__[\"content\"]);\n  fetch(\"https://photoslibrary.googleapis.com/v1/mediaItems:search\", {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json',\n      Authorization: \"Bearer \".concat(token)\n    },\n    body: JSON.stringify({\n      pageSize: '100',\n      albumId: albumId\n    })\n  }).then(function (res) {\n    return res.json();\n  }).then(function (response) {\n    _ui__WEBPACK_IMPORTED_MODULE_2__[\"updateGalleryItems\"](_domElements__WEBPACK_IMPORTED_MODULE_3__[\"content\"], response.mediaItems, albumId);\n  })[\"catch\"](function (err) {\n    return console.error(err);\n  });\n};\n\nvar submitPhoto = function submitPhoto(e) {\n  e.preventDefault();\n\n  var sendMediaToPhotos = function sendMediaToPhotos(uploadToken) {\n    fetch('https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate', {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/json',\n        Authorization: \"Bearer \".concat(token)\n      },\n      body: JSON.stringify({\n        newMediaItems: [{\n          description: 'photoDescription',\n          simpleMediaItem: {\n            fileName: 'filename',\n            uploadToken: uploadToken\n          }\n        }]\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      return console.log(res);\n    })[\"catch\"](function (err) {\n      return console.error(err);\n    });\n  };\n\n  var sendBinaryMedia = function sendBinaryMedia(binaryMedia, mimeType) {\n    fetch('https://photoslibrary.googleapis.com/v1/uploads', {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/octet-stream',\n        Authorization: \"Bearer \".concat(token),\n        'X-Goog-Upload-Content-Type': mimeType,\n        'X-Goog-Upload-Protocol': 'raw'\n      },\n      body: binaryMedia\n    }).then(function (res) {\n      return res.text();\n    }).then(function (uploadToken) {\n      sendMediaToPhotos(uploadToken);\n    })[\"catch\"](function (err) {\n      return console.error(err);\n    });\n  };\n\n  var file = _domElements__WEBPACK_IMPORTED_MODULE_3__[\"submitPhotoInput\"].files[0];\n  file.arrayBuffer().then(function (binaryMediaRes) {\n    sendBinaryMedia(binaryMediaRes, file.type);\n  });\n};\n\n_domElements__WEBPACK_IMPORTED_MODULE_3__[\"submitPhoto\"].addEventListener('click', submitPhoto);\n_domElements__WEBPACK_IMPORTED_MODULE_3__[\"btnLogin\"].addEventListener('click', _auth__WEBPACK_IMPORTED_MODULE_1__[\"login\"]);\n_domElements__WEBPACK_IMPORTED_MODULE_3__[\"btnLogout\"].addEventListener('click', _auth__WEBPACK_IMPORTED_MODULE_1__[\"logout\"]);\n_domElements__WEBPACK_IMPORTED_MODULE_3__[\"btnFetch\"].addEventListener('click', getAlbums);\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/*! exports provided: updateAlbumList, updateGalleryItems, setSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateAlbumList\", function() { return updateAlbumList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateGalleryItems\", function() { return updateGalleryItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSpinner\", function() { return setSpinner; });\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ \"./src/js/domElements.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ \"./src/js/utilities.js\");\n\n\nvar updateAlbumList = function updateAlbumList(container, list, openAlbumFn) {\n  var content = list.map(function (el) {\n    return \"<figure class='album'>\\n      <img src=\".concat(el.coverPhotoBaseUrl, \" alt=\").concat(el.title, \" />\\n      <figcaption data-id=\").concat(el.id, \">\\n        <h3 class='album__title'>\").concat(el.title, \"</h3>\\n        <p class='album__counter'>\\n          Photos: <span class='number'>\").concat(el.mediaItemsCount, \"</span>\\n        </p>\\n      </figcaption>\\n    </figure>\");\n  });\n  container.innerHTML = \"<section class='albums'>\".concat(content.join(''), \"</section>\");\n  var albumsList = document.querySelectorAll('.album figcaption');\n  albumsList.forEach(function (el) {\n    el.addEventListener('click', function () {\n      return openAlbumFn(el.dataset.id);\n    });\n  });\n};\nvar updateGalleryItems = function updateGalleryItems(container, list) {\n  var content = list.map(function (el) {\n    return \"\\n       <figure class=\\\"photo\\\">\\n            <img\\n              src=\".concat(el.baseUrl, \"\\n              alt=\").concat(el.filename, \"\\n            />\\n            <figcaption>\\n              <p>Added: <time>\").concat(el.mediaMetadata.creationTime.substring(0, 10), \"</time></p>\\n            </figcaption>\\n          </figure>\\n      \");\n  });\n  var submitForm = \"\\n  \\n  \";\n  container.innerHTML = \"<section class=\\\"gallery\\\">\\n                \".concat(content.join(''), \"\\n  </section>\");\n};\nvar setSpinner = function setSpinner(container) {\n  container.innerHTML = \"\\n        <div class=\\\"sk-circle\\\">\\n          <div class=\\\"sk-circle1 sk-child\\\"></div>\\n          <div class=\\\"sk-circle2 sk-child\\\"></div>\\n          <div class=\\\"sk-circle3 sk-child\\\"></div>\\n          <div class=\\\"sk-circle4 sk-child\\\"></div>\\n          <div class=\\\"sk-circle5 sk-child\\\"></div>\\n          <div class=\\\"sk-circle6 sk-child\\\"></div>\\n          <div class=\\\"sk-circle7 sk-child\\\"></div>\\n          <div class=\\\"sk-circle8 sk-child\\\"></div>\\n          <div class=\\\"sk-circle9 sk-child\\\"></div>\\n          <div class=\\\"sk-circle10 sk-child\\\"></div>\\n          <div class=\\\"sk-circle11 sk-child\\\"></div>\\n          <div class=\\\"sk-circle12 sk-child\\\"></div>\\n        </div>\\n        \";\n};\n\n//# sourceURL=webpack:///./src/js/ui.js?");

/***/ }),

/***/ "./src/js/utilities.js":
/*!*****************************!*\
  !*** ./src/js/utilities.js ***!
  \*****************************/
/*! exports provided: showItem, hideItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showItem\", function() { return showItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideItem\", function() { return hideItem; });\nvar showItem = function showItem(element) {\n  element.style.display = 'block';\n};\nvar hideItem = function hideItem(element) {\n  element.style.display = 'none';\n};\n\n//# sourceURL=webpack:///./src/js/utilities.js?");

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