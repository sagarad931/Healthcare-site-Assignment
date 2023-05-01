
// Scroll to top 
var scrollUpBtn = document.getElementById("scroll-up-btn");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 100) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
});

scrollUpBtn.addEventListener("click", function() {
  scrollToTop(500); // scroll to top in 500 milliseconds (half a second)
});

function scrollToTop(scrollDuration) {
  var scrollStep = -window.scrollY / (scrollDuration / 15);
  
  function animateScroll() {
    window.requestAnimationFrame(function() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        animateScroll();
      }
    });
  }
  
  animateScroll();
}




// Smooth scrolling 
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.header');
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        navbar.classList.add('scroll-shadow');
    } else {
        navbar.classList.remove('scroll-shadow');
    }
});
