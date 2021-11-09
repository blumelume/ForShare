let services = JSON.parse( '{ "twitter": { "name": "twitter", "img-src": "twitter.svg"}, "linkedin": "nope" }' );

let data = JSON.parse(forShareData);

Array.from( document.getElementsByClassName('fs-sharebutton') ).forEach( (e) => {
  if (!e.classList.contains('fs-exclude') && e.tagName == 'DIV') { // excluding developer-buttons

    let fs_img = document.createElement('img');
    fs_img.setAttribute('src', 'assets/media/logos/' + services['twitter']['img-src']);
    fs_img.classList.add("fs-sharebutton-logo");
    fs_img.setAttribute('alt', '');
    fs_img.setAttribute('role', 'presentation');

    e.appendChild( fs_img );


    console.log(data.selectedServices, services['twitter']['img-src']);

  }
});
