const results = document.getElementById("results");
const form = document.getElementById('search-movies');

const searchMovie = (movieName) => {
  // Set the URL with the movie name
  const apiUrl = `http://www.omdbapi.com/?s=${movieName}&apikey=adeb456d`

  fetch(apiUrl)
    // Parse the response into JSON
    .then( (response) => {
      const json = response.json()
      return json
    })
    // Do something with the JSON
    .then( (data) => {
      // Create the movie array
      const arrayOfMovies = data.Search

      // Loop through each movie in the array
      arrayOfMovies.forEach( (movie) => {
        // Create the movieHTML text
        const movieHTML = `<li class="list-inline-item">
                             <p>${movie.Title}</p>
                             <img src="${movie.Poster}" alt="">
                           </li>`;

        // Add the movie HTML to the DOM
        results.insertAdjacentHTML("beforeend", movieHTML);
      });
    });
}

// Add event listener to form
form.addEventListener('submit', (event) => {
  // Prevent that the button runs on click
  event.preventDefault();

  // select the element
  const movieName = document.getElementById("keyword").value;

  // refresh the page
  results.innerHTML = "";

  // run the searchMovie function
  searchMovie(movieName)
});
