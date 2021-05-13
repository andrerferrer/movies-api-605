import { fetchAPI, getInputAndCallAPI } from './components/get_movies_api';

/////////////////////////////////////////
// EVENT LISTENERS, QUERY SELECTORS AND FUNCTION CALLS //
/////////////////////////////////////////

fetchAPI('superman');

// form
const form = document.querySelector('form#search-movies');
// when the user submits the form
form.addEventListener('submit', getInputAndCallAPI);
