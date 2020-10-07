// menu toggle
const menuToggle = document.querySelector('.menu-toggle input')
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('slide');
});

// slider
$(document).ready(function() {
    $('.autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('.autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

// display login

const btnClose = document.querySelector('.close input');
const displayLogin = document.querySelector('.bg-transparan');

btnClose.addEventListener('click', function() {
    displayLogin.classList.toggle('display-none');
});
