let services = JSON.parse(
  '{"services": [ {"name": "twitter", "img-src": "twitter.svg", "link": "https://twitter.com/intent/tweet?text=Look%20at%20this%20article!"}, {"name": "linked", "img-src": "linkedin.svg"}, {"name": "facebook", "img-src": "facebook.svg"}, {"name": "instagram"}, {"name": "whatsapp"}, {"name": "behance"}, {"name": "spotify"}, {"name": "tumblr"}, {"name": "dribble"} ]}'
);

let data = JSON.parse(forShareData);

Array.from( document.getElementsByClassName('fs-sharebutton-wrapper') ).forEach( (e) => {
  if (!e.classList.contains('fs-exclude')) { // excluding developer-buttons

    for (i = 0; i < services['services'].length; i++) {
      let service = services['services'][i];
      console.log(service);

      if (data.selectedServices.includes(service.name)) {
        // Creating sharebutton
        let sb = document.createElement('a');
        sb.classList.add("fs-sharebutton");
        sb.setAttribute('href', service['link']);
        sb.setAttribute('target', '_blank');
        sb.setAttribute('role', 'noreferrer');

        // Creating logo-img
        let fs_img = document.createElement('img');
        fs_img.setAttribute('src', 'assets/media/logos/' + service['img-src']);
        fs_img.classList.add("fs-sharebutton-logo");
        fs_img.setAttribute('alt', '');
        fs_img.setAttribute('role', 'presentation');

        sb.appendChild( fs_img );
        e.appendChild( sb );
      }
    }

  }
});
