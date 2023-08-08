/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/formGeraSenha.js":
/*!**************************************!*\
  !*** ./src/modules/formGeraSenha.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _geradores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geradores */ "./src/modules/geradores.js");

var senhaGerada = document.querySelector('.senha-gerada');
var qtdCaractere = document.querySelector('.qtd-caractere');
var checkMaisculas = document.querySelector('.check-maisculas');
var checkMinusculas = document.querySelector('.check-minusculas');
var checkNumeros = document.querySelector('.check-numeros');
var checkSimbolos = document.querySelector('.check-simbolos');
var btnGeraPass = document.querySelector('.gerar-senha');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  btnGeraPass.addEventListener('click', function () {
    senhaGerada.innerHTML = gera();
  });
});
function gera() {
  var senha = (0,_geradores__WEBPACK_IMPORTED_MODULE_0__["default"])(qtdCaractere.value, checkMaisculas.checked, checkMinusculas.checked, checkNumeros.checked, checkSimbolos.checked);
  return senha || 'Nada Selecionado.';
}

/***/ }),

/***/ "./src/modules/geradores.js":
/*!**********************************!*\
  !*** ./src/modules/geradores.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ geraSenha)
/* harmony export */ });
//GERA NÚMEROS ALEATÓRIOS
var rand = function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

//GERA CARACTERES
var geraMaiuscula = function geraMaiuscula() {
  return String.fromCharCode(rand(65, 91));
};
var geraMinuscula = function geraMinuscula() {
  return String.fromCharCode(rand(97, 123));
};
var geraNumero = function geraNumero() {
  return String.fromCharCode(rand(48, 58));
};
var simbolos = ',.;~^[]{}!@#$%¨*&()-_+=';
var geraSimbolo = function geraSimbolo() {
  return simbolos[rand(0, simbolos.length)];
};

//GERA PASSWORD
function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  var senhaArray = [];
  qtd = Number(qtd);
  for (var i = 0; i < qtd; i++) {
    maiusculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolo());
  }
  return senhaArray.join('').slice(0, qtd);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_formGeraSenha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/formGeraSenha */ "./src/modules/formGeraSenha.js");

(0,_modules_formGeraSenha__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map