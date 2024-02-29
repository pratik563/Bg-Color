////////////// Effient Way/////////

const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body')

buttons.forEach(function (button) {
  button.addEventListener('click', function (e){
    
    switch (e.target.id) {
      case 'orange':
        body.style.backgroundColor = 'orange'
        body.style.color = 'black'
        break;
      case 'white':
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
        break;
      case 'green':
       body.style.backgroundColor = 'green'
       body.style.color = 'white'
        break;
      case 'purple':
       body.style.backgroundColor = 'purple'
       body.style.color = 'white'
        break;
      default:
        break;
    }
  });
});





////////////////////////// Another My Way//////
/* 

const buttons = document.querySelectorAll('.button');

const orange = document.getElementById('orange');
const white = document.getElementById('white');
const green = document.getElementById('green');
const purple = document.getElementById('purple');

const body = document.querySelector('body')

function changecolor() {
    body.style.backgroundColor = 'orange'
    body.style.color = 'black'
}

function changecolor1() {
  body.style.backgroundColor = 'white'
  body.style.color = 'black'
}

function changecolor2() {
  body.style.backgroundColor = 'green'
  body.style.color = 'white'
}

function changecolor3() {
  body.style.backgroundColor = 'purple'
  body.style.color = 'white'
} */