$(document).ready(function(){
    // $('#content').addClass('animated fadeIn');

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
});
