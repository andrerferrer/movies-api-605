const insertIntoTheDOM = (movie) => {
  const movieHTML = `
    <li class="col list-group-item">
      <p>${movie.Title}</p>
      <img style='height: 240px;' src='${movie.Poster}'>
    </li>
  `
  const results = document.getElementById('results')
  results.insertAdjacentHTML('beforeend', movieHTML);  
};

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
  
      const movies = data.Search; // dig the json to find what we want
      movies.forEach(movie => insertIntoTheDOM(movie));
    });
};

const getInputAndCallAPI = (event) => {
  // by default, the submit event 'reloads the page'
  event.preventDefault();
  
  // take the user input
  const userInput = document.getElementById('keyword').value;

  // empty the content of the ul before fetching the api
  const results = document.getElementById('results');
  results.innerHTML = '';

  // fetch the api with that input
  fetchAPI(userInput);
};

export { fetchAPI, getInputAndCallAPI };