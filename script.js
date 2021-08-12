const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

$(document).ready(function () {
  $('.submit').click(function (event) {
   

    var email = $('.email').val();
    var subject = $('.subject').val();
    var message = $('.message').val();
    var statusElm = $('.status');
    statusElm.empty();

    if (email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email is valid</div>');
    } else {
      statusElm.append('<div>Email is not valid</div>');
      event.preventDefault();
    }

    if (subject.lenght < 1) {
      statusElm.append('<div>Subject is not valid</div>');
      event.preventDefault();
    }

    if (message.lenght < 1) {
      statusElm.append('<div>Message box is not valid</div>');
      event.preventDefault();
    }
  })
})