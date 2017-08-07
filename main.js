




let characterList = document.querySelector('.characters');

function reqListener() {
  let data = JSON.parse(this.responseText);
  console.log(data.results);
// instead of a for loop
  data.results.forEach(getCharacter);
}

function getCharacter(character) {
  characterList.innerHTML += `<li>${character.name}, ${character.height}</li>`;
}

let req = new XMLHttpRequest();
req.open("GET", "http://swapi.co/api/people/");
req.addEventListener("load", reqListener);
req.send();
