//Ejercicio 1.1.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const listCountries = document.createElement('ul');

for (let i = 0; i < countries.length; i++) {
  let country = document.createElement('li');
  country.textContent = countries[i];
  listCountries.appendChild(country);
}
document.body.appendChild(listCountries);

//Ejercicio 1.2.
const myP = document.querySelector('.fn-remove-me');
myP.parentNode.removeChild(myP);

//Ejercicio 1.3.
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const listCars = document.createElement('ul');

for (let i = 0; i < cars.length; i++) {
  let myCar = document.createElement('li');
  myCar.textContent = cars[i];
  listCars.appendChild(myCar);
}

const divCar = document.querySelector('[data-function="printHere"]');
divCar.appendChild(listCars);

//Ejercicio 1.4.
const countriess = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

for (let i = 0; i < countriess.length; i++) {
  const countryy = document.createElement('div');
  const myH4 = document.createElement('h4');
  myH4.textContent = countriess[i].title;
  const myImg = document.createElement('img');
  myImg.scr = countriess[i].imgUrl;

  countryy.appendChild(myH4);
  countryy.appendChild(myImg);

  document.body.appendChild(countryy);
}

//Ejercicio 1.5.
const buttonRemove = document.createElement('button');
buttonRemove.textContent = 'Borrar div 5';
document.body.appendChild(buttonRemove);

function removeLastDiv() {
  const div5 = document.querySelector('div:last-of-type');
  div5.remove();
}

buttonRemove.addEventListener('click', removeLastDiv);

//Ejercicio 1.6.
const countryDivs = document.querySelectorAll('div');
for (let i = 0; i < countriess.length; i++) {
  const buttonDiv = document.createElement('button');
  buttonDiv.textContent = 'Borrar este div';

  buttonDiv.addEventListener('click', (ev) => {
    countryDivs[i].remove();
  });

  countryDivs[i].appendChild(buttonDiv);
}
