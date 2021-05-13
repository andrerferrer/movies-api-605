// 1. import the plugin
import Sortable from 'sortablejs';

// 2. create the function with the file name
const initSortableJs = () => {
  const results = document.getElementById('results');
  const options = {
    ghostClass: "ghost",
    animation: 150,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  };
  Sortable.create(results, options);
};

// 3. export the function
export { initSortableJs };