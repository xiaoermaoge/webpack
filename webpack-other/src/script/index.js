import '../style/public.scss';
import tpl from '../compents/script/demo.js'
function hello (str) {
    // console.log(str)
    // console.log(tpl)
    var app = document.getElementById('app');
    var ttt = new tpl();
    app.innerHTML = ttt.tpl;
}
hello('你好 二毛哥哥');
var bbb = document.getElementById('bbb');
bbb.onclick = function () {
    console.log('aaa')
}