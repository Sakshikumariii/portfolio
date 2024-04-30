
// About tab
function showTab(tabId) {
    // Hide all tab panes
    var tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(function(tabPane) {
        tabPane.classList.remove('active');
    });

    // Show the selected tab pane
    var selectedTabPane = document.getElementById(tabId);
    selectedTabPane.classList.add('active');
}

// contact form

const scriptURL = 'https://script.google.com/macros/s/AKfycbwNMZRg50D_F4AILTG_ArOwdnlOolPjIYxQxB-OK6Q8dmunReSXKd89EGtu9t1eNTVzrA/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      if (response.ok) {
        form.reset();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert("Error sending message. Please try again.");
    });
  
  // Alert shown immediately after form submission
  alert("Message send");
});




// footer getCurrent Year
function getCurrentYear() {
   return new Date().getFullYear();
}

// Update the footer text with the current year
window.onload = function() {
   var yearSpan = document.getElementById('currentYear');
   if (yearSpan) {
       yearSpan.textContent = getCurrentYear();
   }
};