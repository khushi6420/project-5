// var box = document.getElementById('box')

// // console.log(box);
// box.innerHTML = 'changed'

// var h1  = document.querySelectorAll('h1')

// h1[0].innerHTML = 'changed'

var button = document.querySelector('button')
var box = document.querySelector('#box')

function changeBox(){
    console.log('function running...');
    // box.innerHTML='changed'
    box.style.backgroundColor='orange'
}

button.addEventListener('click',changeBox)
