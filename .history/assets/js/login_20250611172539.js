const USER ={
    userName: 'Mobina',
    email: 'mobina@mobina.com',
    password: 123456,
    
}

const handleLogin = (e) =>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    if(email === USER.email && +password === +USER.password){
        localStorage.setItem('user', JSON.stringify(USER.userName))
        console.log('موفقیت آمیز');
        // location.replace('file:///D:/web-fani/sabzlearn-postiban/index.html')
        // document.location='/../../web-fani/sabzlearn-postiban/index.html'
        location.href='../index.html'
    } else{
        Swal.fire({
        icon: 'error',
        title:'خطا !',
        text: 'اطلاعات نادرست است.',
        confirmButtonText:'باشه'
        });  
    }
}

(() =>{
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', handleLogin)
})()