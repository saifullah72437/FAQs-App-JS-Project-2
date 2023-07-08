let box = document.getElementsByClassName('box')
let arr = Array.from(box);

arr.forEach(element => {
    let arrow = element.querySelector('i')
    arrow.addEventListener('click', function(){
        element.querySelector('.answer').classList.toggle('showing')
        this.classList.toggle('arrow-toggle')
    },false)    
});