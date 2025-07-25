const btnPlus = document.getElementById('plus-btn');
const container = document.getElementById('extraContainer');
let isAdd = false ;

btnPlus.addEventListener('click' ,(e) => {
    e.preventDefault();
    if(!isAdd){
       const item = document.createElement('div');
       item.className = 'text-plus';
       item.textContent = `شمایی که وارد این صفحه شدید، احتمالا قبلا با چند مرکز آموزش دوره برنامه نویسی آشنا شده و احتمالا بعد از این هم به تحقیقتون ادامه میدید. اما حالا که مهمان سبزلرن شدید، بد نیست در جریان چکیده ای از تجربیات و ذهنیت سبزلرن در آموزش کدنویسی رو هم قرار بگیرید تا به تصمیم گیری نهایی شما کمک کنه. حس سردرگمی و تردید در انتخاب منبع آموزشی و گاهی مسیر یادگیری برنامه نویسی تقریبا بین همه علاقمندان این تخصص جذاب مشترک بوده چون تا دلتون بخواد شعار آموزش برنامه نویسی از صفر و آموزش برنامه نویسی رایگان و ... سراسر وب رو پر کرده اما وقتی شروع به آموزش دیدن می کنید، می بینید که یا مدرس مسلط نیست، یا مسیر آموزشی شفاف و استاندارد نیست و یا سبک و لحن تدریس و ارائه تمرینات طوری نیست که بتونید به راحتی باهاش ارتباط بگیرید و در کوتاه مدت به عمل برسونید.`

       container.appendChild(item);

       btnPlus.textContent = 'مشاهده کمتر';
    }else{
        container.innerHTML="";
        btnPlus.textContent = "مشاهده بیشتر"
    }
    isAdd = !isAdd ;
})
