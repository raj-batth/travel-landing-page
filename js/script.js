const displayImage = (e) => {
  let imageId = e.id;
  let img = document.getElementById('img');
  let doorIllusion = document.getElementsByClassName('door-illusion')[0];
  img.setAttribute('src', `../img/${imageId}.svg`);
  let t1 = new TimelineLite();
  t1.fromTo(
    doorIllusion,
    1,
    { boxShadow: 'inset 0em 0em 0em #000' },
    { boxShadow: 'inset 0em 3em 2em #000', ease: Power4.easeOut }
  )
    .fromTo(img, 1, { top: '-240px' }, { top: '80px', ease: Power4.easeOut })
    .fromTo(
      doorIllusion,
      0.03,
      { boxShadow: 'inset 0em 3em 3em #000' },
      { boxShadow: 'inset 0em 0em 0em #000', ease: Power4.easeOut }
    )
    .fromTo(
      doorIllusion,
      1,
      { overflow: 'hidden' },
      { overflow: 'visible', ease: Power4.easeOut }
    )
    .fromTo(img, 1, { scale: 1 }, { scale: 1.4, ease: Power4.easeOut });

  t1.eventCallback('onStart', disableLinks);
  t1.eventCallback('onComplete', enableLinks);
  let links = document.getElementsByClassName('country');
  function disableLinks() {
    for (i = 0; i < links.length; i++) {
      if (links[i].getAttribute('id') == imageId) {
        links[i].style.pointerEvents = 'auto';
      } else {
        links[i].style.pointerEvents = 'none';
      }
    }
  }
  function enableLinks() {
    for (i = 0; i < links.length; i++) {
      links[i].style.pointerEvents = 'auto';
    }
  }
};
