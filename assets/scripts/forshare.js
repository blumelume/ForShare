let services = JSON.parse(
  '{"services": [ {"name": "twitter", "img-src": "twitter.svg", "link": "https://twitter.com/intent/tweet?text=Look%20at%20this%20article!"}, {"name": "linked", "img-src": "linkedin.svg"} ]}'
);

let data = JSON.parse(forShareData);

Array.from( document.getElementsByClassName('fs-sharebutton-wrapper') ).forEach( (e) => {
  if (!e.classList.contains('fs-exclude')) { // excluding developer-buttons

    for (i = 0; i < data.selectedServices.length; i++) {
      // Creating sharebutton
      let sb = document.createElement('a');
      sb.classList.add("fs-sharebutton");
      sb.setAttribute('href', services['services'][i]['link']);
      sb.setAttribute('target', '_blank');
      sb.setAttribute('role', 'noreferrer');

      // Creating logo-img
      let fs_img = document.createElement('img');
      fs_img.setAttribute('src', 'assets/media/logos/' + services['services'][i]['img-src']);
      fs_img.classList.add("fs-sharebutton-logo");
      fs_img.setAttribute('alt', '');
      fs_img.setAttribute('role', 'presentation');

      sb.appendChild( fs_img );
      e.appendChild( sb );
    }

  }
});
