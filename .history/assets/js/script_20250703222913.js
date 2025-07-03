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
const createProduct = (product) =>{
    const col = document.createElement('div');
    col.classList.add('col-lg-3','col-md-6','col-sm-12','p-0');
        col.innerHTML=`
         <div class="card product-style">
         <img src=${product.image} class="card-img-top product-style-img" alt="...">
         <div class="card-body product-style-body">
             <h5 class="card-title product-style-title">${product.title}</h5>
             <p class="card-text product-style-text">${product.description}</p>
              <div class="row d-flex justify-content-between align-items-center">
                <div class="col-lg-8"><p class="card-text product-style-teacher"><i class="bi bi-person"></i>${product.teacherName}</p></div>
                <div class="col-lg-4 d-flex justify-content-end product-style-star"><p>۵.۰<i class='bi bi-star-fill'></i></p></div>
             </div>
             <div class="row d-flex justify-content-between align-items-center border-top mb-1">
                <div class="col-lg-5 col-md-5 col-4 mt-3"><p class="card-text product-style-price">${product.price}تومان</p></div>
                <div class="col-lg-7 col-md-5 col-4 d-flex justify-content-end align-items-center mt-3 product-style-cart">
                <button class="btn cart-add" data-productid=${product.id}>افزودن به سبد خرید</button>
                </div>
             </div>
         </div>
         </div>
         `
        return col
}
const render = (list) =>{
    const row = document.getElementById('products');
    list.map(product =>{
        const col = createProduct(product)
        row.appendChild(col);
    })
}
const handleAdd = ( item) =>{
    const cartBtn = document.getElementById('counter');
    
        const id = item.getAttribute('data-productid')
        const [selectedItem] = data.filter(item => item.id === +id);

        const existing = cart.filter(item => item.id === selectedItem.id)
        
        if(existing.length === 0){
            cart.push({...selectedItem, count: 1});

        } else{
            const itemIndex = cart.findIndex(item => item.id === +id);
            
            cart[itemIndex].count++;
        }

        cartBtn.innerHTML = `<i class="bi bi-handbag"></i><span class="position-absolute top-0 start-0 translate-middle badge rounded-circle bg-success">
                    ${cart.length}
                    <span class="visually-hidden">unread messages</span>
                  </span>`

        localStorage.setItem('cart', JSON.stringify(cart))
    
}
const handleShowCart = () =>{
    const total = document.getElementById('total');
    const cartModal = document.getElementById('cart-modal');
    const cartBtn = document.getElementById('counter');

        if(cart.length === 0){
            cartModal.innerHTML = `<h5 class="text-secondary d-flex justify-content-center">سبد خرید شما خالیست :(</h5>`;
            total.innerHTML='';
        }else{
            cartModal.innerHTML='';
            const card = document.createElement('div');
            card.classList.add('card'); 
            const ul = document.createElement('ul');
            ul.classList.add('p-1')

            cart.map(cartItem =>{
                const li = document.createElement('li');
                li.classList.add('d-flex', 'justify-content-between')
                li.innerHTML =`<div class="card mb-2 cart-modal">
                                    <div class="row g-0">
                                        <div class="col-md-4 d-flex align-items-center">
                                        <img src=${cartItem.image} class="img-fluid rounded-2" alt="...">
                                        </div>
                                        <div class="col-md-8">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between">
                                                <h5 class="card-title w-75">${cartItem.title}</h5>
                                                <button type="button" class="btn-close delete-btn" aria-label="Close" data-id=${cartItem.id}></button>
                                            </div>
                                            <p class="card-text mb-2">قیمت: <small class="text-body-secondary">${cartItem.price}تومان</small></p>
                                            <div class="card-text d-flex justify-content-between mb-1">
                                            <div>
                                                تعداد: 
                                            <small class="text-body-secondary count">${cartItem.count}</small>
                                            </div>
                                            <div>
                                            <button class="rounded-circle btn btn-success add-btn text-center" data-id=${cartItem.id}>+</button>
                                            <button class="rounded-circle btn btn-danger remove-btn text-center" data-id=${cartItem.id}>-</button>
                                            </div></div>
                                            <p class="card-text my-1">مجموع قیمت: <small class="text-body-secondary total">${cartItem.count* cartItem.price}تومان</small></p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>`
                ul.appendChild(li);
            })
            card.appendChild(ul);
            cartModal.appendChild(card);  
    } 
    setupCartControls();  
    updateCartTotal();
}

const updateCartTotal = () =>{
    const total = document.getElementById('total');
    if(cart.length === 0){
        total.innerHTML = '';
        return;
    }

    const totalPrice = cart.reduce((sum,item)=> sum+ item.price * item.count , 0)
    total.innerHTML = `
            <div class="row d-flex justify-content-between">
            <div class="col-8 text-start"><span>مبلغ قابل پرداخت:${totalPrice.toLocaleString()}تومان </span></div>
            <div class="col-4"><button type="button" class="btn btn-success" >پرداخت</button></div>
            </div>
            `
}

const setupCartControls = () =>{
    const cartBtn = document.getElementById('counter');
    const addButtons = document.querySelectorAll('.add-btn');
    const removeButtons = document.querySelectorAll('.remove-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');

            addButtons.forEach(button =>{
                button.addEventListener('click', () =>{
                    const index = cart.findIndex(item => item.id === +button.getAttribute('data-id'))
                    cart[index].count++;
                    localStorage.setItem('cart', JSON.stringify(cart))
                    updateCartTotal();
                    const parent = button.parentElement.parentElement
                    parent.querySelector('.count').innerHTML = cart[index].count;
                    const cardBody = parent.parentElement;
                    cardBody.querySelector('.total').innerHTML = cart[index].count * cart[index].price ;
                })
            })

            removeButtons.forEach(button =>{
              button.addEventListener('click', () =>{
                const index = cart.findIndex(item => item.id === +button.getAttribute('data-id'));
                if(cart[index].count > 1){
                    cart[index].count--;
                    localStorage.setItem('cart', JSON.stringify(cart))
                    updateCartTotal();
                    const parent = button.parentElement.parentElement
                    parent.querySelector('.count').innerHTML = cart[index].count;
                    const cardBody = parent.parentElement;
                    cardBody.querySelector('.total').innerHTML = cart[index].count * cart[index].price ;
                } else if(cart[index].count === 1){
                    const newCart = cart.filter(item => item.id !== +button.getAttribute('data-id'))
                    cart = newCart;
                    button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
                    localStorage.setItem('cart', JSON.stringify(cart))
                    updateCartTotal();
                    cart.length !== 0 ? cartBtn.innerHTML = `<i class="bi bi-handbag"></i><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        ${cart.length}
                        <span class="visually-hidden">unread messages</span>
                      </span>`
                    : cartBtn.innerHTML = '<i class="bi bi-handbag"></i>'
                }
              })
            })

            deleteButtons.forEach(button =>{
                button.addEventListener('click', () =>{
                    const newCart = cart.filter(item => item.id !== +button.getAttribute('data-id'))
                    cart = newCart;
                    localStorage.setItem('cart', JSON.stringify(cart))
                    updateCartTotal();
                    button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
                    cart.length !== 0 ? cartBtn.innerHTML = `<i class="bi bi-handbag"></i><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        ${cart.length}
                        <span class="visually-hidden">unread messages</span>
                      </span>`
                    : cartBtn.innerHTML = '<i class="bi bi-handbag"></i>'
                })
            })
}

const handleClearCart = () =>{
    const cartBtn = document.getElementById('counter');
    const total = document.getElementById('total');
    const cartModal = document.getElementById('cart-modal');

    cartModal.innerHTML=`<h5 class="text-secondary d-flex justify-content-center">سبد خرید شما خالیست :(</h5>`;
    total.innerHTML='';
        localStorage.removeItem('cart');
        cartBtn.innerHTML='<i class="bi bi-handbag"></i>';
        cart = [];
}
const createEventListeners = () => {
    const addBtn = document.querySelectorAll('.cart-add');
    const cartBtn = document.getElementById('counter');
    const clearBtn = document.getElementById('clear');


    addBtn.forEach(item => {
        item.addEventListener('click', handleAdd.bind(this, item))
    })

    cartBtn.addEventListener('click', handleShowCart)

    clearBtn.addEventListener('click',handleClearCart)
}

(function app(){
    data = [
        {
            id:1,
            title:'آموزش پروژه محور Nest.JS از صفر!',
            image:"./assets/images/card4.webp",
            description:'Nest.JS یه فریم ورک توسعه سمت سروز وب با  TypeScript برای ساخت برنامه های مبتنی بر وب است.',
            price:2800000,
            teacherName:'معین باغشیخی'
        },
        {
            id:2,
            title:'آموزش جامع توسعه وردپرس',
            image:"./assets/images/card2.webp",
            description:'وردپرس پرکاربرد ترین و محبوب ترین سیستم مدیریت محتوا است که در دنیای طراحی سایت حرف اول را می زدند.',
            price:2500000,
            teacherName:'امیر طاهرخانی',
        },
        {
            id:3,
            title:'آموزش جامع دیزاین پترن ها برای برنامه نویسان',
            image:"./assets/images/card3.webp",
            description:'دوره دیزاین پترن به شما کمک می کند کدهای خوانا و مقیاس پذیرتر بنویسید.',
            price:1200000,
            teacherName:'محمدامین سعیدی راد',
        },
        {
            id:4,
            title:'Data Visualization با پایتون',
            image:"./assets/images/card1.webp",
            description:'ما تو دنیایی زندگی میکنیم که همه چیز به سمت سریع شدن حرکت میکنه.برای ذهن انسان درک اشکال راحت تراست .',
            price:800,
            teacherName:'رضا دولتی',
        },
        {
            id:5,
            title:'آموزش ساخت ربات تلگرام با پایتون',
            image:"./assets/images/card5.webp",
            description:'آیا تا به حال به این فکر کرده اید ک یک دستیار ربات تلگرامی مخصوص خودتان داشته باشید ؟',
            price:1600000,
            teacherName:'مهرشاد براتی',
        },
        {
            id:6,
            title:'آموزش جامع لینوکس برای برنامه نویسان',
            image:"./assets/images/card6.webp",
            description:'اینوکس یک سیسیتم عامل قدرتمند،امن و متن باز است که در سرورها و توسعه نرم افزار کاربرد دارد.',
            price:1520000,
            teacherName:'مهدی شریفی',
        },
        {
            id:7,
            title:'بازی سازی تحت وب با JS',
            image:"./assets/images/card7.webp",
            description:'دوره بازی سازی با جاوااسکریپت در سبزلرن بخ شما ساخت بازی های آنلاین را با استفاده از HTML و...آموزش می دهد.',
            price:1200000,
            teacherName:'مهرشاد براتی',
        },
        {
            id:8,
            title:'آموزش الگوریتم و ساختمان داده به زبان ساده',
            image:"./assets/images/card8.webp",
            description:' ساختمان داده و الگوریتم،یک مهارت ضروری برای ورود به دنیای برنامه نویسیه که دیگاه شما رو به مسائل عوض میکنه.',
            price:2400000,
            teacherName:'رضا دولتی',
        },
        {
            id:9,
            title:'آموزش جامع PHP از صفر',
            image:"./assets/images/card9.webp",
            description:'دوره آموزش php یک برنامه جامع و کاربردیست و برای افرادی طراحی شده که میخواهند مهارتشان را ارتقا دهند.',
            price:4000000,
            teacherName:'معین باغشیخی',
        },
        {
            id:10,
            title:'مستر فریلنس',
            image:"./assets/images/card10.webp",
            description:'موفق بودن یک وکیل به تعداد بالای پرونده هاش نیست.بلکه به کیفیت پرونده هاییه که حل کرده.',
            price:9100000,
            teacherName:'قدیر یلمه',
        },
        {
            id:11,
            title:'آموزش جاوااسکریپت مقدماتی تا پیشرفته',
            image:"./assets/images/card11.webp",
            description:'آموزش جاوااسکریپت برای تمامی افرادی که قصد ورود به زبان برنامه نویسی دارند مناسب است.',
            price:3200000,
            teacherName:'محمدامین سعیدی راد',
        },
        {
            id:12,
            title:'آموزش جامع api نویسی با PHP',
            image:"./assets/images/card12.webp",
            description:'API یکی از پرکاربردنرین اجزای نرم افزاریه که حتما باید بلد باشی ! توی این دوره قراره رو با PHP یاد بگیریم.',
            price:3200000,
            teacherName:'معین باغشیخی',
        },
    ]

    const cartBtn = document.getElementById('counter');
    const localCart = JSON.parse(localStorage.getItem('cart'));
    if(localCart){
        cart = [...localCart]
    } else{
        cart=[];
    }
    cart.length !== 0 ? cartBtn.innerHTML = `<i class="bi bi-handbag"></i><span class="position-absolute top-0 start-0 translate-middle badge rounded-circle bg-success">
                        ${cart.length}
                        <span class="visually-hidden">unread messages</span>
                      </span>`
        : cartBtn.innerHTML = '<i class="bi bi-handbag"></i>'


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
    createEventListeners()
})()