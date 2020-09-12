/* eslint-disable */

import anime from 'animejs/lib/anime.es';

const animeTypography = (text,parent) => {
    if(window.scrollY >= (parent.offsetTop - window.innerHeight + 200) && text.dataset.anime == "false") {
        text.dataset.anime = "true";
        anime.timeline({loop: false})
            .add({
                targets: text.children,
                scale: [4,1],
                opacity: [0,1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: (el, i) => 70*i 
            })
            .add({
                targets: text,
                opacity:1,
                duration:1000,
                easing:"easeOutExpo",
                delay:1000
            })
        text.parentElement.style.opacity = 1;
    }
} 

export default animeTypography;