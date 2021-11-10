let services = JSON.parse(
  '{"services": [ {"name": "twitter", "img-src": "twitter.svg", "link": "https://twitter.com/intent/tweet?text=Look%20at%20this%20article!"}, {"name": "linked", "img-src": "linkedin.svg"} ]}'
);

let data = JSON.parse(forShareData);

let i = 0;
Array.from( document.getElementsByClassName('fs-sharebutton-wrapper') ).forEach( (e) => {
  if (!e.classList.contains('fs-exclude')) { // excluding developer-buttons
    if (e.tagName == "A" || e.tagName == 'DIV') {
      let fs_img = document.createElement('img');
      fs_img.setAttribute('src', 'assets/media/logos/' + services['services'][i]['img-src']);
      fs_img.classList.add("fs-sharebutton-logo");
      fs_img.setAttribute('alt', '');
      fs_img.setAttribute('role', 'presentation');

      e.setAttribute('href', services['services'][i]['link']);
      e.setAttribute('target', '_blank');
      e.setAttribute('role', 'noreferrer');

      e.appendChild( fs_img );
      i++;
    }
  }
});
