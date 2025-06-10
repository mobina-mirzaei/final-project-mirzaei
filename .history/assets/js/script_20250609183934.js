const btnPlus = document.getElementById('plus-btn');
const container = document.getElementById('extraContainer');
let isAdd = false ;

btnPlus.addEventListener('click' ,(e) => {
    e.preventDefault();
    if(!isAdd){
        content.style.display = "none";
        btnPlus.textContent = "مشاهده بیشتر"
    }else{
        content.style.display = "block";
        btnPlus.textContent = "مشاهده کمتر"
    }
    isVisible = !isVisible ;
})
