import { fetchAPI, getInputAndCallAPI } from './components/get_movies_api';
import { initSortableJs } from './plugins/init_sortablejs';

/////////////////////////////////////////
// EVENT LISTENERS, QUERY SELECTORS AND FUNCTION CALLS //
/////////////////////////////////////////

fetchAPI('superman');
initSortableJs();

// form
const form = document.querySelector('form#search-movies');
// when the user submits the form
form.addEventListener('submit', getInputAndCallAPI);
