$(document).ready(function() {
    // Hide "Scroll for more" when not on top of page
    $(document).scroll(function() {
        if($(document).scrollTop() > 20) {
            $(".scroll").fadeOut(100);
        } else {
            $(".scroll").fadeIn(500);
        }

    })

    // Typing effect for intro words on terminal
    // typed.js library used from https://github.com/mattboldt/typed.js
    var options = {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        loop: true,
        cursorChar: '_'
    }

    var typed = new Typed("#typed", options);
})