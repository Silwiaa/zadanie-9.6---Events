function checkOnclickEvent() {
  console.log();
}

var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var element = document.createElement('li'),
        itemsByTagName = list.getElementsByTagName('li'),
    element.innerHTML = ('item' + itemsByTagName.lenght,
    list.appendChild(element);
});
