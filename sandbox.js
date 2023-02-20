// Variables
const BASE_URL = 'https://rickandmortyapi.com';


let state = {
  characters: [],
}

let count = 1;
async function getData() {
  while (count < 10) {
    console.log(count);
    let options = {
      baseURL: BASE_URL,
      params: {
        page: count,
      }
    }
    await axios.get('/api/character', options)
      .then(function (response) {
        console.log(response.data)
        state.characters = [ ...state.characters, ...response.data.results ]
        count += 1;
        getData();
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}

function randomJoke() {
  document.getElementById('userData').innerHTML = ''
  let div = document.createElement('div');
  div.innerText = `${state.character.name}: ${state.character.location.name}`;
  document.getElementById('userData').appendChild(div);
}

function insertUser() {
  let img = document.createElement('img');
  img.setAttribute('src', state.user.picture.large);
  document.getElementById('userData').appendChild(div);
}
  
document.getElementById('btn').addEventListener('click', getData)



// Array.map((item, i) => item)
// Array.map((item) => item)
// Array.map((item) => {
//   return item
// })