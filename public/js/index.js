// Sticky Header
function stickyHeader () {
  var header = document.getElementById("header");
  var sticky = header.offsetTop + 150;
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  }
  else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () { stickyHeader() };

// Mobile Nav
function openMobileNav() {
  var nav = document.getElementsByClassName('mobile-menu')[0];
  nav.style.width = '300px';
}
function closeMobileNav() {
  var nav = document.getElementsByClassName('mobile-menu')[0];
  nav.style.width = '0';
}
// listen for mobile menu click
document.getElementsByClassName('mobile-menu-icon')[0].addEventListener('click', function() {
  openMobileNav();
});
// listen for mobile menu close click
document.getElementsByClassName('mobile-menu-close')[0].addEventListener('click', function() {
  closeMobileNav();
});
