let vw = window.innerWidth;
//let main = document.getElementById('main');

let currentPage = 0;
let maxPages = 2;

function checkBgCircles() {
  // Animating BG-Circles based on current page
  if (currentPage+1 == 2) { // Select-Page
    $( '#background-circles .background-circle#big, #background-circles .background-circle#small' ).toggleClass("p2");
  }
}
function animateScroll() {
  $( '#main' ).css("scroll-snap-type", "none");
  $( '#main' ).animate({
    'scrollLeft': currentPage * vw
  }, 1000, "easeInOutQuart", function () {
    $( '#main' ).css("scroll-snap-type", "x mandatory");
  });
}
function nextPage() {
  if (currentPage < maxPages-1) {
    currentPage++;
  }
  checkBgCircles();
  animateScroll();
}
function prevPage() {
  checkBgCircles();
  if (currentPage > 0) {
    currentPage--;
  }
  animateScroll();
}

$( document ).ready( function() {
  $( '#main' ).scroll( function() {
    let scrollPos = $('#main').scrollLeft();
    if (scrollPos % vw == 0) {

      // Setting currentPage to keep up to date, even when manually scrolling
      checkBgCircles();
      currentPage = scrollPos / vw;
      checkBgCircles();

    }
  });
});
