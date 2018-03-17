var list = document.getElementById('list-elements');
var items = document.getElementsByClassName('box');
var selectedOne = document.getElementsByClassName('selected-one')[0];

if (items) {
    for (let i = 0; i < items.length; i++) {
        items[i].onclick = function () {
            if (items[i].classList.contains('selected-one')) {
                items[i].classList.remove('selected-one');
            } else {
                Array.prototype.forEach.call(items, item => {
                    item.classList.remove('selected-one');
                  });
                items[i].classList.add('selected-one');
                items[i].onkeydown= checkArrowKeys;
            }
        }   
    };
}