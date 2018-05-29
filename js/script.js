window.addEventListener('mouseup', function (event) {
  if (event.target.offsetParent.className != "sub-confirm" && document.getElementsByName('pop-up')[0].className != 'hide') {
    document.getElementsByName('pop-up')[0].className += ' hide';
  }
}
);


function handleEnter (event) {
  if (event.keyCode == '13') {event.preventDefault(); subscribe();}
}

function subscribe () {
  document.getElementsByClassName('hide')[0].classList.remove('hide');
  document.getElementsByName('email-out')[0].innerHTML = document.getElementsByName('email-in')[0].value;
}

function subscribeClose () {
  document.getElementsByName('pop-up')[0].className += ' hide';
}
