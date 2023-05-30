const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');


    console.log(input.value);
console.log({
    h1,
    input,
    p,
    parrafito,
    pid

});


h1.innerHTML = 'patito <br> Feo';
h1.innerText = 'patito <br> Feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'red');
h1.classList.add('red');
h1.classList.remove('verde');

input.value = "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
console.log(img);

pid.append(img);