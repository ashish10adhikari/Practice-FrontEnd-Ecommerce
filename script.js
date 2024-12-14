const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}



const mainImg = document.getElementById('Mainimg');
const smallImg = document.getElementsByClassName('small-img');

if (smallImg.length > 0) {
    for (let i = 0; i < smallImg.length; i++) {
        smallImg[i].addEventListener('click', function() {
            mainImg.src = this.src;
        });
    }
} else {
    console.error("No elements found with class 'small-img'");
    
}