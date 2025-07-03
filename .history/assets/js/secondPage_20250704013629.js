let cart = [] ;
let data =[];


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
             <div class="row d-flex justify-content-between align-items-center border-top mb-1 tan">
                <div class="col-lg-5 col-md-5 col-4 mt-3"><p class="card-text product-style-price">${product.price}تومان </p></div>
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
            title:'تکنیک های قرارداد نویسی',
            image:"../assets/images/second1.webp",
            description:'دوره تکنیک های قرارداد نویسی سبزلرن، برای برنامه نویسان.',
            price:800,
            teacherName:'سعیدی راد'
        },
        {
            id:2,
            title:'مستر فریلنس',
            image:"../assets/images/second2.webp",
            description:'موفق بودن یک وکیل به تعداد بالای پرونده هاش نیست بلکه به کیفیت ان است.',
            price:9100000,
            teacherName:'قدیر یلمه'
        },
        {
            id:3,
            title:'راه اندازی کسب و کار شخصی',
            image:"../assets/images/second3.webp",
            description:'تو این وبینار من تجربیات خودم رو از راه اندازی یک کسب و کار تا رسوندن به درامد میگم.',
            price:6500000,
            teacherName:'قدیر یلمه'
        },
        {
            id:4,
            title:'تجربیات طلایی من در کار تیمی',
            image:"../assets/images/second4.webp",
            description:'در ساده ترین حالت شما اگه تو یک شرکت برنامه نویسی استخدام بشین نیاز به این تجربیات دارید.',
            price:2800000,
            teacherName:'سعیدی راد'
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