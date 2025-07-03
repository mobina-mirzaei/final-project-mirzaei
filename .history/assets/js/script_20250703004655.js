let cart = [] ;
let data =[];
const btnPlus = document.getElementById('plus-btn');
const container = document.getElementById('extraContainer');
let isAdd = false ;

btnPlus.addEventListener('click' ,(e) => {
    e.preventDefault();
    if(!isAdd){
       const item = document.createElement('h4');
       item.textContent=`آموزش برنامه نویسی به سبکی منحصر به فرد`
       const item2 = document.createElement('p');
       item2.textContent = `شمایی که وارد این صفحه شدید،
        احتمالا قبلا با چند مرکز آموزش دوره برنامه نویسی
         آشنا شده و احتمالا بعد از این هم به تحقیقتون ادامه میدید.
         اما حالا که مهمان سبزلرن شدید، بد نیست در جریان چکیده ای
         از تجربیات و ذهنیت سبزلرن در آموزش کدنویسی رو هم قرار
         بگیرید تا به تصمیم گیری نهایی شما کمک کنه. حس سردرگمی
         و تردید در انتخاب منبع آموزشی و گاهی مسیر یادگیری برنامه
         نویسی تقریبا بین همه علاقمندان این تخصص جذاب مشترک بوده چون
         تا دلتون بخواد شعار آموزش برنامه نویسی از صفر و آموزش برنامه
         نویسی رایگان و ... سراسر وب رو پر کرده اما وقتی شروع به آموزش
         دیدن می کنید، می بینید که یا مدرس مسلط نیست، یا مسیر آموزشی شفاف
         و استاندارد نیست و یا سبک و لحن تدریس و ارائه تمرینات طوری نیست که
         بتونید به راحتی باهاش ارتباط بگیرید و در کوتاه مدت به عمل برسونید.`

       container.appendChild(item);
       container.appendChild(item2);

       btnPlus.textContent = 'مشاهده کمتر';
    }else{
        container.innerHTML="";
        btnPlus.textContent = "مشاهده بیشتر"
    }
    isAdd = !isAdd ;
})

const createProduct = (item) =>{
    const col = document.createElement('div');
    col.classList.add('col-lg-3','col-md-6','col-sm-12','p-0');
        col.innerHTML=`
         <div class="card product-style">
         <img src=${item.image} class="card-img-top product-style-img" alt="...">
         <div class="card-body product-style-body">
             <h5 class="card-title product-style-title">${item.title}</h5>
             <p class="card-text product-style-text">${item.description}</p>
              <div class="row d-flex justify-content-between align-items-center">
             <div class="col-lg-8"><p class="card-text product-style-teacher"><i class="bi bi-person"></i>${item.teacherName}</p></div>
             <div class="col-lg-4 d-flex justify-content-end product-style-star"><p>۵.۰<i class='bi bi-star-fill'></i></p></div>
             </div>
             <div class="row d-flex justify-content-between align-items-center border-top mb-1">
             <div class="col-lg-5 col-md-5 col-4 mt-3"><p class="card-text product-style-price">${item.price}</p></div>
             <div class="col-lg-7 col-md-5 col-4 d-flex justify-content-end align-items-center mt-3 product-style-cart"><a href="#" class="btn">افزودن به سبدخرید</a></div>
             </div>
         </div>
         </div>
         `
        return col
}

const render = (list) =>{
    const row = document.getElementById('products');
    list.map(item =>{
        const col = createProduct(item)
        row.appendChild(col);
    })
}

(function app(){
    const data = [
        {
            id:1,
            title:'آموزش پروژه محور Nest.JS از صفر!',
            image:"./assets/images/card4.webp",
            description:'Nest.JS یه فریم ورک توسعه سمت سروز وب با  TypeScript برای ساخت برنامه های مبتنی بر وب است.',
            price:'۲.۰۸۰.۰۰۰ تومان',
            teacherName:'معین باغشیخی'
        },
        {
            id:2,
            title:'آموزش جامع توسعه وردپرس',
            image:"./assets/images/card2.webp",
            description:'وردپرس پرکاربرد ترین و محبوب ترین سیستم مدیریت محتوا است که در دنیای طراحی سایت حرف اول را می زدند.',
            price:'۲.۵۰۰.۰۰۰ تومان',
            teacherName:'امیر طاهرخانی',
        },
        {
            id:3,
            title:'آموزش جامع دیزاین پترن ها برای برنامه نویسان',
            image:"./assets/images/card3.webp",
            description:'دوره دیزاین پترن به شما کمک می کند کدهای خوانا و مقیاس پذیرتر بنویسید.',
            price:'۱.۲۰۰.۰۰۰ تومان',
            teacherName:'محمدامین سعیدی راد',
        },
        {
            id:4,
            title:'Data Visualization با پایتون',
            image:"./assets/images/card1.webp",
            description:'ما تو دنیایی زندگی میکنیم که همه چیز به سمت سریع شدن حرکت میکنه.برای ذهن انسان درک اشکال راحت تراست .',
            price:'۸۰۰.۰۰ تومان',
            teacherName:'رضا دولتی',
        },
        {
            id:5,
            title:'آموزش ساخت ربات تلگرام با پایتون',
            image:"./assets/images/card5.webp",
            description:'آیا تا به حال به این فکر کرده اید ک یک دستیار ربات تلگرامی مخصوص خودتان داشته باشید ؟',
            price:'۱.۶۰۰.۰۰۰ تومان',
            teacherName:'مهرشاد براتی',
        },
        {
            id:6,
            title:'آموزش جامع لینوکس برای برنامه نویسان',
            image:"./assets/images/card6.webp",
            description:'اینوکس یک سیسیتم عامل قدرتمند،امن و متن باز است که در سرورها و توسعه نرم افزار کاربرد دارد.',
            price:'۱.۵۲۰.۰۰۰ تومان',
            teacherName:'مهدی شریفی',
        },
        {
            id:7,
            title:'بازی سازی تحت وب با JS',
            image:"./assets/images/card7.webp",
            description:'دوره بازی سازی با جاوااسکریپت در سبزلرن بخ شما ساخت بازی های آنلاین را با استفاده از HTML و...آموزش می دهد.',
            price:'۱.۲۰۰.۰۰۰ تومان',
            teacherName:'مهرشاد براتی',
        },
        {
            id:8,
            title:'آموزش الگوریتم و ساختمان داده به زبان ساده',
            image:"./assets/images/card8.webp",
            description:' ساختمان داده و الگوریتم،یک مهارت ضروری برای ورود به دنیای برنامه نویسیه که دیگاه شما رو به مسائل عوض میکنه.',
            price:'۲.۴۰۰.۰۰۰ تومان',
            teacherName:'رضا دولتی',
        },
        {
            id:9,
            title:'آموزش جامع PHP از صفر',
            image:"./assets/images/card9.webp",
            description:'دوره آموزش php یک برنامه جامع و کاربردیست و برای افرادی طراحی شده که میخواهند مهارتشان را ارتقا دهند.',
            price:'۴.۰۰۰.۰۰۰ تومان',
            teacherName:'معین باغشیخی',
        },
        {
            id:10,
            title:'مستر فریلنس',
            image:"./assets/images/card10.webp",
            description:'موفق بودن یک وکیل به تعداد بالای پرونده هاش نیست.بلکه به کیفیت پرونده هاییه که حل کرده.',
            price:'۹.۱۰۰.۰۰۰ تومان',
            teacherName:'قدیر یلمه',
        },
        {
            id:11,
            title:'آموزش جاوااسکریپت مقدماتی تا پیشرفته',
            image:"./assets/images/card11.webp",
            description:'آموزش جاوااسکریپت برای تمامی افرادی که قصد ورود به زبان برنامه نویسی دارند مناسب است.',
            price:'۳.۲۰۰.۰۰۰ تومان',
            teacherName:'محمدامین سعیدی راد',
        },
        {
            id:12,
            title:'آموزش جامع api نویسی با PHP',
            image:"./assets/images/card12.webp",
            description:'API یکی از پرکاربردنرین اجزای نرم افزاریه که حتما باید بلد باشی ! توی این دوره قراره رو با PHP یاد بگیریم.',
            price:'۳.۲۰۰.۰۰۰ تومان',
            teacherName:'معین باغشیخی',
        },
    ]

    const userName = JSON.parse(localStorage.getItem('user'))
    if(userName){
        const userPlaceholder = document.getElementById('user-name');
        userPlaceholder.innerText = userName.slice(0,1);
        userPlaceholder.classList.remove('d-none')
        document.querySelectorAll('.login-btn').forEach(btn =>{
            btn.remove()
        })
        Swal.fire({
        icon: 'success',
        title: 'به سبزلرن خوش آمدید!',
        text: 'ورود شما با موفقیت انجام شد.',
        timer: 2000,
        showConfirmButton: false
        });
    }

    render(data);
})()