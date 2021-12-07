const navigator = function() {
    const nav_bar = document.getElementById("options");
    const hamburger = document.getElementsByClassName('hamburger__bar');
    nav_bar.classList.toggle('open');
    for(var i=0;i<3;i++){
        hamburger[i].classList.toggle(`hamburger__${i+1}`);
    }
};

document.getElementById('side_bar').addEventListener('click', navigator);
// document.getElementById('close_nav').addEventListener('click', navigator);