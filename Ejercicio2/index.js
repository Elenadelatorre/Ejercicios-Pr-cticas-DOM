//Ejercicio 1.1.
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

//Ejercicio 1.2.
const newDiv2 = document.createElement('div');
const newP = document.createElement('p');
newDiv2.appendChild(newP);
document.body.appendChild(newDiv2);

//Ejercicio 1.3.
const newDiv3 = document.createElement('div');

for (let i = 1; i <= 6; i++) {
  const newP2 = document.createElement('p');
  newP2.textContent = 'Este es el párrafo ' + i;
  newDiv3.appendChild(newP2);
}
document.body.appendChild(newDiv3);

//Ejercicio 1.4.
const newP3 = document.createElement('p');
newP3.textContent = 'Soy dinámico';
document.body.appendChild(newP3);

//Ejercicio 1.5.
const myH2 = document.querySelector('h2.fn-insert-here');
myH2.textContent = 'Wubba Lubba dub dub';

//Ejercicio 1.6.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const myList = document.createElement('ul');
for (let i = 0; i < apps.length; i++) {
  const myApp = document.createElement('li');
  myApp.textContent = apps[i];

  myList.appendChild(myApp);
}
document.body.appendChild(myList);

//Ejercicio 1.7.
const removeP = document.querySelectorAll('.fn-remove-me');

for (let i = 0; i < removeP.length; i++) {
  removeP[i].remove();
}

//Ejercicio 1.8.
const newP4 = document.createElement('p');
newP4.textContent = 'Voy en medio';

const divs = document.querySelectorAll('div:not([class]):not([id])');
divs[0].insertAdjacentElement('afterend', newP4);

//Ejercicio 1.9.

const divss = document.querySelectorAll('div.fn-insert-here');
for (i = 0; i < divss.length; i++) {
  const newP5 = document.createElement('p');
  newP5.textContent = 'Voy dentro!';
  divss[i].appendChild(newP5);
}
