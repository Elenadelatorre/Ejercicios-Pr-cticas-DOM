const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
];

const myAlbums = document.createElement('ul');

for (let i = 0; i < albums.length; i++) {
  const myAlbum = document.createElement('li');
  myAlbum.textContent = albums[i];

  myAlbums.appendChild(myAlbum);
}
document.body.appendChild(myAlbums);
