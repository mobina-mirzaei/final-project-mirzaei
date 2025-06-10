const btnPlus = document.getElementById('plus-btn');
const hText = document.getElementById('h-text');
const pText = document.getElementById('p-text');
const deleteBtn = document.getElementById('delete-btn');
const paragraph = document.getElementById('paragraph');


btnPlus.addEventListener('click' ,(e) => {
    e.preventDefault();
    btnPlus.remove()
    hText.innerHTML=`
    <h4>آموزش برنامه نویسی به سبکی متجصر به فرد</h4>
    `
    pText.innerHTML=`
    <p>شمایی که وارد این صفحه شدید، احتمالا قبلا با چند مرکز آموزش دوره برنامه نویسی آشنا شده و احتمالا بعد
     از این هم به تحقیقتون ادامه میدید. اما حالا که مهمان
      سبزلرن شدید، بد نیست در جریان چکیده ای از تجربیات و ذهنیت سبزلرن در آموزش کدنویسی رو هم قرار بگیرید تا به تصمیم گیری نهایی شما کمک کنه. حس سردرگمی
     و تردید در انتخاب منبع آموزشی و گاهی مسیر یادگیری برنامه نویسی تقریبا بین همه علاقمندان 
     این تخصص جذاب مشترک بوده چون تا دلتون بخواد شعار آموزش برنامه نویسی از صفر و آموزش برنامه نویسی رایگان و ... سراسر وب رو پر کرده اما وقتی شروع به آموزش دیدن می کنید
     ، می بینید که یا مدرس مسلط نیست،
      یا مسیر آموزشی شفاف و استاندارد نیست و یا سبک و لحن تدریس و ارائه تمرینات طوری نیست که بتونید به راحتی باهاش ارتباط بگیرید و در کوتاه مدت به عمل برسونید.</p>
    
    `
    // deleteBtn.innerHTML=`مشاهده کمتر`
    paragraph.innerHTML=` 
    مشاهده کمتر
    `
})

deleteBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    paragraph.style.backgroundImage.color = 'green' ;
})