



























// // const axios = require('axios');
// let url = 'https://official-joke-api.appspot.com/random_ten';
// let jokes = [];

// console.log(axios.get(url));
// axios.get(url)
//   .then(function (response) {
//     // handle success
//     // console.log(response);
//     // console.log('JOKES', response.data);
//     jokes = response.data;
//     console.log(jokes);
//     createListItems(jokes);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });


// function createListItems(arr) {
//     for (const joke of arr) {
//         let listItem = document.createElement('li');
//         listItem.innerText = `${joke.setup}: ${joke.punchline}`;
//         document.getElementById('myList').appendChild(listItem);
//     }
// }