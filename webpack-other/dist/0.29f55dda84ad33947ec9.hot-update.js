webpackHotUpdate(0,{

/***/ "./src/compents/script/demo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_demo_scss__ = __webpack_require__("./src/compents/style/demo.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_demo_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_demo_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_html__ = __webpack_require__("./src/compents/demo.html");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__demo_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compentsOne_html__ = __webpack_require__("./src/compents/compentsOne.html");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compentsOne_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__compentsOne_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compentsTwo_html__ = __webpack_require__("./src/compents/compentsTwo.html");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compentsTwo_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__compentsTwo_html__);




function demo() {
    window.onload = function () {
        var doc = document;
        var compents = doc.getElementById('compents_container');
        var toggle_compents = doc.getElementById('toggle_compents');
        var hello = doc.getElementsByClassName('hello')[0];
        var cut = true;
        console.log('二毛哥哥')
        compents.innerHTML = __WEBPACK_IMPORTED_MODULE_2__compentsOne_html___default.a;
        hello.onclick = function () {
            console.log('你好')
        }
        toggle_compents.onclick = function () {
            // compents.innerHTML = compentsTwo;
            // arr.push('1')
            // console.error(arr)
            console.log(this);
            // this.style.background = 'yello';
            if(cut) {
                compents.innerHTML = __WEBPACK_IMPORTED_MODULE_3__compentsTwo_html___default.a;
                cut = false;
            }else{
                compents.innerHTML = __WEBPACK_IMPORTED_MODULE_2__compentsOne_html___default.a;
                cut = true;
            }
        }
        var ul = doc.getElementsByName('ul');
        console.log(ul)
    }
    return {
        name: 'demo',
        tpl: __WEBPACK_IMPORTED_MODULE_1__demo_html___default.a
    }
}

function aaa(str) {
    console.log(str)
    console.log('你好啊')
}

/* harmony default export */ __webpack_exports__["a"] = (demo);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcGVudHMvc2NyaXB0L2RlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0QiLCJmaWxlIjoiMC4yOWY1NWRkYTg0YWQzMzk0N2VjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZS9kZW1vLnNjc3MnO1xyXG5pbXBvcnQgdHBsIGZyb20gJy4uL2RlbW8uaHRtbCc7XHJcbmltcG9ydCBjb21wZW50c09uZSBmcm9tICcuLi9jb21wZW50c09uZS5odG1sJztcclxuaW1wb3J0IGNvbXBlbnRzVHdvIGZyb20gJy4uL2NvbXBlbnRzVHdvLmh0bWwnO1xyXG5mdW5jdGlvbiBkZW1vKCkge1xyXG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZG9jID0gZG9jdW1lbnQ7XHJcbiAgICAgICAgdmFyIGNvbXBlbnRzID0gZG9jLmdldEVsZW1lbnRCeUlkKCdjb21wZW50c19jb250YWluZXInKTtcclxuICAgICAgICB2YXIgdG9nZ2xlX2NvbXBlbnRzID0gZG9jLmdldEVsZW1lbnRCeUlkKCd0b2dnbGVfY29tcGVudHMnKTtcclxuICAgICAgICB2YXIgaGVsbG8gPSBkb2MuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVsbG8nKVswXTtcclxuICAgICAgICB2YXIgY3V0ID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygn5LqM5q+b5ZOl5ZOlJylcclxuICAgICAgICBjb21wZW50cy5pbm5lckhUTUwgPSBjb21wZW50c09uZTtcclxuICAgICAgICBoZWxsby5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5L2g5aW9JylcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9nZ2xlX2NvbXBlbnRzLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbXBlbnRzLmlubmVySFRNTCA9IGNvbXBlbnRzVHdvO1xyXG4gICAgICAgICAgICAvLyBhcnIucHVzaCgnMScpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoYXJyKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJ3llbGxvJztcclxuICAgICAgICAgICAgaWYoY3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb21wZW50cy5pbm5lckhUTUwgPSBjb21wZW50c1R3bztcclxuICAgICAgICAgICAgICAgIGN1dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbXBlbnRzLmlubmVySFRNTCA9IGNvbXBlbnRzT25lO1xyXG4gICAgICAgICAgICAgICAgY3V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdWwgPSBkb2MuZ2V0RWxlbWVudHNCeU5hbWUoJ3VsJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codWwpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6ICdkZW1vJyxcclxuICAgICAgICB0cGw6IHRwbFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhYWEoc3RyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhzdHIpXHJcbiAgICBjb25zb2xlLmxvZygn5L2g5aW95ZWKJylcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVtbztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wZW50cy9zY3JpcHQvZGVtby5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvY29tcGVudHMvc2NyaXB0L2RlbW8uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==