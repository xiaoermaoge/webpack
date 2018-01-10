import '../style/demo.scss';
import tpl from '../demo.html';
import compentsOne from '../compentsOne.html';
import compentsTwo from '../compentsTwo.html';
function demo() {
    window.onload = function () {
        var doc = document;
        var compents = doc.getElementById('compents_container');
        var toggle_compents = doc.getElementById('toggle_compents');
        var hello = doc.getElementsByClassName('hello')[0];
        var cut = true;
        console.log('二毛哥哥')
        compents.innerHTML = compentsOne;
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
                compents.innerHTML = compentsTwo;
                cut = false;
            }else{
                compents.innerHTML = compentsOne;
                cut = true;
            }
        }
        var ul = doc.getElementById('ul');
        console.log(ul)
        var li = doc.querySelectorAll('li');
        for(var i = 0;i<li.length;i++){
            console.log(li[i].innerHTML)
        }
        console.log()
    }
    return {
        name: 'demo',
        tpl: tpl
    }
}

function aaa(str) {
    console.log(str)
    console.log('你好啊')
}

export default demo;