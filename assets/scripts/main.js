let vw = window.innerWidth;
//let main = document.getElementById('main');

function onPageLoad() {
  $( '#background-circles .background-circle' ).toggleClass("pre-load");

  // Animating example-sharebuttons
  // $(".sharebuttons.example").children().each(function(index) {
  //   $( this ).delay(400*index).removeClass("pre-load");
  // });
}

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


// Select-Page
let $selectedServices = $( '.selected-services', '#select .content' );
let $availableServices = $( '.available-services', '#select .content' );
let removeButtonHTML = '<img src="assets/media/button-x.svg" class="remove-button" role="presentation" alt="">';

$( document ).ready( function() {
  $( '.available-services .sharebutton, .selected-services .sharebutton', '#select .content' ).each( function() {
    $this = $(this);
    console.log($this);

    $this.append( $(removeButtonHTML).on('click', deselectService) ); // Adding remove-button
    $this.on('click', selectService); // Adding click-listener for selection
  });
});

function selectService() {
  $this = $(this);
  if (!$this.hasClass('selected')) {
    $this.addClass('selected');
    $selectedServices.append( $this );
  }
}
function deselectService() {
  $this = $(this).parent();
  console.log($this);
  if ($this.hasClass('selected')) {
    $this.removeClass('selected');
    console.log($availableServices);
    $availableServices.add( $this );
  }
}

// function addRemoveStickerToServices() {
//   $( '.available-services .sharebutton, .selected-services .sharebutton', '#select .content' ).each( function(index) {
//     var $this = $(this);
//     if ($this.children().length == 0) {
//       $this.append( removeButtonHTML );
//
//       $( '.remove-button', this ).on( 'click', removeSelectedService);
//     }
//   });
// }
// function addClickListenerToServices() {
//   // Adding eventlisteners for 'click' to available
//   $( '.available-services .sharebutton, .selected-services .sharebutton', '#select .content' ).each( function(index) {
//     var $this = $(this);
//     if ($this.is('div')) {
//       $this.on( 'click', selectService);
//     }
//   });
// }
//
// function removeSelectedService() {
//   var $rb = $(this); // remove button
//   var $sb = $rb.parent(); // sharebutton
//
//   // Removing 'Service' from list of selected
//   if ($sb.hasClass('selected')) {
//     console.log("yes, i am");
//
//     $sb.removeClass('selected');
//     $sb.addClass('available');
//     $( '#select .content .available-services' ).append( $sb );
//   }
//   console.log(this, $(this).parent(), $rb, $sb);
// }
//
// function selectService() {
//   // Appending 'Service' to list of selected
//   if ($(this).hasClass('available')) {
//
//     $(this).addClass('selected');
//     $(this).removeClass('available');
//     $( '#select .content .selected-services' ).append( $(this) );
//   }
// }
