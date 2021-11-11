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
  // Populating available services div with data
  services['services'].forEach( (service) => {
    // Creating sharebutton
    let sb = document.createElement('div');
    sb.classList.add("fs-sharebutton");

    // Creating logo-img
    let fs_img = document.createElement('img');
    fs_img.setAttribute('src', 'assets/media/logos/' + service['img-src']);
    fs_img.classList.add("fs-sharebutton-logo");
    fs_img.setAttribute('alt', '');
    fs_img.setAttribute('role', 'presentation');

    sb.appendChild( fs_img );
    $availableServices.append( sb );
  });

  $( '.available-services .fs-sharebutton, .selected-services .fs-sharebutton', '#select .content' ).each( function() {
    let $this = $(this);

    let $removeButton = $($.parseHTML(removeButtonHTML));
    $removeButton.click(deselectService);
    $this.append( $removeButton ); // Adding remove-button
    $this.click(selectService); // Adding click-listener for selection
    // console.log($this, jQuery._data( $this.get(0), "events" ));
  });
});

function selectService() {
  let $this = $(this);
  if (!$this.hasClass('selected')) {
    $this.addClass('selected');
    $selectedServices.append( $this );
  }
}
function deselectService() {
  let $this = $(this).parent();
  // cloning and removing the target-element
  let $e = $this.clone();
  $this.remove();

  // resetting event-handlers and moving element
  $e.click(selectService);
  $('.remove-button', $e).click(deselectService);
  $e.removeClass('selected');
  $e.appendTo($availableServices);
}
