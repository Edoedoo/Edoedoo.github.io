// TOGGLE ICON NAVBAR
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// TOGGLE ICON MORE KEAHLIAN
let more = document.querySelector('.more')
more.onclick = () => {
    more.classList.toggle('more-tutup');
}

// form
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }