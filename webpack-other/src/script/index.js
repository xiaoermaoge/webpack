import '../style/public.scss';
import '../compents/style/demo.scss';
import tpl from '../compents/script/demo.js'
function hello (str) {
    var app = document.getElementById('app');
    var ttt = new tpl();
    app.innerHTML = ttt.tpl;
}
hello('你好 二毛哥哥');
var doc= document;
var toggle = doc.getElementById('toggle');
var model = doc.getElementsByClassName('model')[0];
toggle.onclick = function () {
    model.style.display = 'block'
}
var img = doc.getElementsByClassName('close_img')[0];
img.onclick = function () {
    model.style.display = 'none';
}