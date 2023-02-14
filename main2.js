let url = "https://official-joke-api.appspot.com/random_ten";
let jokes2 = [];
let getJoke = document.getElementById("getJoke");

function jokes() {
    axios.get(url)
  .then(function (response) {
    // handle success
    jokes2 = response.data;
    console.log(jokes2);
    createListItems(jokes2);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log("always executed");
  });

};

function createListItems(arr) {
    for (const joke of arr) {
        console.log(joke);
    }

}

getJoke.addEventListener('click', jokes);