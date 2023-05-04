// Get the loader div element
const loader = document.getElementById('loader');

// Add an event listener to the window object that listens for the "load" event
window.addEventListener('load', function() {
  // Hide the loader div
  loader.style.display = 'none';
});
