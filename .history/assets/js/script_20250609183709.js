const btnPlus = document.getElementById('plus-btn');
const content = document.getElementById('extraContent');
let isVisible = false ;

btnPlus.addEventListener('click' ,(e) => {
    e.preventDefault();
    if(isVisible){
        content.style.display = "none";
        btnPlus.textContent = "مشاهده بیشتر"
    }else{
        content.style.display = "block";
        btnPlus.textContent = "مشاهده کمتر"
    }
    isVisible = !isVisible ;
})
