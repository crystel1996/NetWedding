/* eslint-disable */

const Translate = (item,parent,direction) => {
    if(window.scrollY >= (parent.offsetTop - window.innerHeight + 400) && item.dataset.translate == "false") {
        item.className += ' translate-'+direction;
        item.style.opacity = 1;
        item.dataset.translate = "true";
    }
}

export {Translate};