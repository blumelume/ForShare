let services = JSON.parse( '{"services": [ {"name": "twitter", "img-src": "twitter.svg"}, {"name": "linked", "img-src": "linkedin.svg"} ]}' );

let data = JSON.parse(forShareData);

let i = 0;
Array.from( document.getElementsByClassName('fs-sharebutton') ).forEach( (e) => {
  if (!e.classList.contains('fs-exclude') && e.tagName == 'DIV') { // excluding developer-buttons

    // console.log(i, services['services'][i]['img-src']);
    let fs_img = document.createElement('img');
    fs_img.setAttribute('src', 'assets/media/logos/' + services['services'][i]['img-src']);
    fs_img.classList.add("fs-sharebutton-logo");
    fs_img.setAttribute('alt', '');
    fs_img.setAttribute('role', 'presentation');

    e.appendChild( fs_img );
    i++;
  }
});
