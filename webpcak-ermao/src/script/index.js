import '../style/public.css';
import bbb from '../compents/script/compents-one.js';

const index = function (str) {
    console.log(str)
    console.log(bbb)
    var dom = document.getElementById('app');
    var ccc = new bbb();
    dom.innerHTML = ccc.tpl;
}
new index('这是index.js文件')