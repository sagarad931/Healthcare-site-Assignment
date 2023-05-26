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
  scrollToTop(500); // scroll to top in 500 milliseconds
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
  
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
       $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){   
        window.location.hash = hash;
      });
    } 
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



// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
});

sr.reveal('.home_text',{}); 
sr.reveal('.home_img',{delay: 600}); 
sr.reveal('.app_img, .doctor-shadows',{ interval: 100}); 
sr.reveal('.shadow, .contact_input',{interval: 400}); 