import '../style/public.scss';
import ppp from '../compents/script/pppCompents.js'
function append() {
    var vcc = document.getElementById('ppp');
    var ttt = new ppp();
    console.log(vcc)
    vcc.innerHTML = ttt.tpl;
}
append()