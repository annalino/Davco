var last_known_scroll_position = 0;

var ticking = false;
function updateScollClass(scroll_pos) {
  element = document.querySelector(".master-header");

  if(element){
    element.classList.toggle('scrolled', scroll_pos > 10);
  }
}

window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {

    window.requestAnimationFrame(function() {
      updateScollClass(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;

  }

});



// THIS IS THE JAVASCRIPT FOR THE DROPDOWN
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("dropDownButton").classList.toggle("opened");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function openModal() {
  var myModal = new Modal({
    content: 'Happy birthday Dave! We thought you might like a website! Hopefully you can become the mancave man. The builder thats is sought after to make crazy mancaves all over the world. Then I want a job'
  });

  myModal.open();
}

// attempt at splash screen
window.onload=function() { openModal() }
