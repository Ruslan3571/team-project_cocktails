!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire0781;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){o[e]=n},n.parcelRequire0781=r);var c,u,s,a=r("8nrFW"),l={searchLetters:document.querySelector(".ABC-search__letters"),searchNumbers:document.querySelector(".ABC-search__numbers"),dropdownContent:document.querySelector(".dropdown__content")},d=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],i=["1","2","3","4","5","6","7","8","9","0"],b=e(a)(d).concat(e(a)(i));c=d.map((function(e){return'<li class="btn-search__letters">\n    <button class="btn-ABC" type="button">'.concat(e,"</button></li>\n    ")})).join(""),u=i.map((function(e){return'<li class="btn-search__letters">\n  <button class="btn-ABC" type="button">'.concat(e,"</button></li>\n  ")})).join(""),l.searchLetters.insertAdjacentHTML("beforeend",c),l.searchNumbers.insertAdjacentHTML("beforeend",u),s=b.map((function(e){return'<button class="dropdown__content__btn" type="button">'.concat(e,"</button>")})).join(""),l.dropdownContent.insertAdjacentHTML("beforeend",s)}();
//# sourceMappingURL=index.9ab7c5d9.js.map
