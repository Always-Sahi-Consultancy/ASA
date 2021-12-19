document.getElementsByClassName('faq')[0].addEventListener('click', (e) => {    
    if(e.target.className === 'faq__show'){
        let current = e.target.parentElement.parentElement.children[1].style;
        if(current.display.length == 0){
            current.display = 'block';
        }
        if(current.display=='none'){
            current.display = 'block';
        }
        else if(current.display == 'block'){
            current.display = "none";
        }
    }
});