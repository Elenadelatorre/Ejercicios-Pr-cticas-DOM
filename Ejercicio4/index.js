//Ejercicio 1.1.
const buttonClick = document.querySelector('#btnToClick');
buttonClick.addEventListener('click', (ev) => {
  console.log('Información del evento del click: ', ev);
});

//Ejercicio 1.2.
const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', (ev) => {
  console.log('El valor del input es: ', ev.target.value);
});

//Ejercicio 1.3.
const input = document.querySelector('.value');
input.addEventListener('input', (ev) => {
  console.log('El valor del input es: ', ev.target.value);
});
