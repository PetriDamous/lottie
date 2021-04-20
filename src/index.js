import lottie from 'lottie-web';

const container = document.getElementById('svg-container');

lottie.loadAnimation({
    container, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../JSON/LOTTIE_TEST_01.json' // the path to the animation json
});