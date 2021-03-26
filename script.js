const header = document.querySelector('header')

window.onscroll = function() {
    if(document.documentElement.scrollTop > (window.innerHeight /2)) {
        header.style.transform = 'translateY(0)';
    } else {
        header.style.transform = 'translateY(-100%)';
    }
}




ScrollReveal().reveal('.scrollrv', {
    distance: '30px',
    duration: 1400,
    easing: 'ease',
})
