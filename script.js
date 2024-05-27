
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
   
   function validateForm() {
       var emailInput = document.getElementById("email");
       var emailError = document.getElementById("emailError");
       var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 
       if (!emailPattern.test(emailInput.value)) {
           emailError.style.display = "block";
           return false;
       } else {
           emailError.style.display = "none";
           submitForm();
           return false; // Prevent default form submission
       }
   }
 
   function submitForm() {
       const scriptURL = 'https://script.google.com/macros/s/AKfycbwNMZRg50D_F4AILTG_ArOwdnlOolPjIYxQxB-OK6Q8dmunReSXKd89EGtu9t1eNTVzrA/exec';
       const form = document.forms['submit-to-google-sheet'];
       const msgElement = document.getElementById('msg');
 
       var xhr = new XMLHttpRequest();
       xhr.open('POST', scriptURL);
       xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
       xhr.onload = function() {
           if (xhr.status === 200) {
               msgElement.textContent = "Message sent successfully.";
               form.reset();
           } else {
               console.error('Request failed. Status:', xhr.status);
               msgElement.textContent = "An error occurred. Please try again later.";
           }
       };
       xhr.send(new FormData(form));
   }



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


  AOS.init();
