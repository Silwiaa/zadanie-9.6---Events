var button = document.getElementById('addElem'),
    list = document.getElementById('list');

button.addEventListener('click', function() {
        var newElem = document.createElement('li'),
            number = document.getElementsByTagName('li');
    
        newElem.innerHTML = 'Item ' + number.length;
        list.appendChild(newElem);
        
        console.log(newElem);
});



