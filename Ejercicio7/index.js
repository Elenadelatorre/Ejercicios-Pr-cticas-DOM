const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor'];

const placesList = document.createElement('ul');
for (let i = 0; i < places.length; i++) {
  const place = document.createElement('li');
  place.textContent = places[i];

  placesList.appendChild(place);
}

const myDiv = document.querySelector('[data-function="printHere"]');

myDiv.appendChild(placesList);
