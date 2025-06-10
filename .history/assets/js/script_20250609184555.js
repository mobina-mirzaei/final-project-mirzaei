const btnPlus = document.getElementById('plus-btn');
const container = document.getElementById('extraContainer');
let isAdd = false ;

btnPlus.addEventListener('click' ,(e) => {
    e.preventDefault();
    if(!isAdd){
       const item = document.createElement('div');
       item.className = 'text-plus';
       item.textContent = 'text azmayeshi'

       container.appendChild(item);

       btnPlus.textContent = 'مشاهده کمتر';
    }else{
        container.innerHTML="";
        btnPlus.textContent = "مشاهده بیشتر"
    }
    isAdd = !isAdd ;
})
