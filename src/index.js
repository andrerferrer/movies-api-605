// FUNCTIONS //
///////////////

const insertIntoTheDOM = (movie) => {
  const movieHTML = `
    <li>
      <p>${movie.Title}</p>
      <img src='${movie.Poster}'>
    </li>
  `
  document.getElementById('results')
          .insertAdjacentHTML('beforeend', movieHTML);  
}


/////////////////////
// THE APP RUNNING //
/////////////////////

const fetchAPI = (movieName) => {
  const url = `http://www.omdbapi.com/?apikey=adf1f2d7&s=${movieName}`;
  // AJAX
  // Async Javascript
  
  // fetch the url of the api
  fetch(url)
    // wait for the response and parse it into json
    .then(response => response.json())
    // then, call this json, call it data and do something
    .then((data) => {
      console.log(data);
  
      const movies = data.Search;
      movies.forEach(movie => insertIntoTheDOM(movie));
    });
}

// form
const form = document.querySelector('form#search-movies');
// when the user submits the form
form.addEventListener('submit', (event) => {
  // by default, the submit event 'reloads the page'
  event.preventDefault();
  
  // take the user input
  const userInput = document.getElementById('keyword').value;

  // empty the content of the ul before fetching the api
  const results = document.getElementById('results')
  results.innerHTML = ''

  // fetch the api with that input
  fetchAPI(userInput);
})
