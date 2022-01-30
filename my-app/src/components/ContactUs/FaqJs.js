document.getElementsByClassName('faq')[0].addEventListener('click', (e) => {  
    if(e.target.className === 'faq__show'){
        let current = e.target.parentElement.parentElement.children[1].style;  
        if(current.display.length == 0){
            current.display = 'block';
            document.querySelector('.faq__show').dangerouslySetInnerHTML = "-";
        }
        if(current.display=='none'){
            current.display = 'block';
            document.querySelector('.faq__show').dangerouslySetInnerHTML = "-";
        }
        else if(current.display == 'block'){
            current.display = "none";
        }
    }
});
