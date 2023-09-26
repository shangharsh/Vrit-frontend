
const email = document.getElementById('email');
const password = document.getElementById('password');

//login with UI....
const loginBtn = document.getElementById('login-btn');

if(loginBtn && email && password){
    loginBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        const data = {
            email: email.value,
            password: password.value
        }
    
        //Integrating fetch api with async and await......
        const loginForm = async () =>{
            const response = await fetch('https://backend-mu-pied.vercel.app/users/login',{
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                //Change the object into JSON using Stringify method.
                body: JSON.stringify(data)
            });
            const loginResponse = await response.json();
            if(loginResponse.status){
                document.getElementById('success-message').innerText =loginResponse.message;
                window.location.href = './dashboard.html';
            }else{
                document.getElementById('error-message').innerText = loginResponse.message;
            }
        }
        loginForm();
    });
}


const sEmail = document.getElementById('s-email');
const sPassword = document.getElementById('s-password');
const sFullName = document.getElementById('s-fullName');


//Signup with UI....
const signUp = document.getElementById('signup-btn');

if(signUp && sEmail && sPassword && sFullName){
    signUp.addEventListener('click', (e)=>{
        e.preventDefault();
        const signUpData = {
            fullName: sFullName.value,
            email: sEmail.value,
            password: sPassword.value
        };
    
        //Integrating fetch api with async and await......
        const signupForm = async () =>{
            const response = await fetch('https://backend-mu-pied.vercel.app/users/register',{
                method: 'POST',
                body: JSON.stringify(signUpData),
                headers: {'Content-Type' : 'application/json' }
            });
            const signUpResponse = await response.json();
            if(signUpResponse.status){
                window.location.href = './login.html';
            }else{
                document.getElementById('error-message').innerText = signUpResponse.message;
            }
        }
        signupForm();
    });
}

const containerBody = document.getElementById('container-body');

fetch('https://dummyjson.com/products')
.then((res)=>{
    return res.json();
})
.then((items)=>{
    items.products.forEach((item)=>{

const card = document.createElement('div');
card.className = 'card p-1';
card.style.width = '18rem';
card.style.height = '350px';

const cardHeader = document.createElement('div');
cardHeader.className = 'card-header h-50';

const img = document.createElement('img');
img.className = 'h-100 w-100';
img.src = item.thumbnail;
cardHeader.append(img);
card.append(cardHeader);

const cardBody = document.createElement('div');
cardBody.className = 'card-body text-center';

const h4 = document.createElement('h4');
h4.className = 'text-truncate'
h4.innerText = item.title;
cardBody.append(h4);

const priceContainer = document.createElement('div');
priceContainer.className = 'd-flex justify-content-between';

const price = document.createElement('p');
price.innerText = 'Price: ' + item.price;
priceContainer.append(price);

const discount = document.createElement('p');
discount.innerText = 'Discount: '+item.discountPercentage+'%';
priceContainer.append(discount);

cardBody.append(priceContainer);
card.append(cardBody);

const cardFooter = document.createElement('div');
cardFooter.className = 'card-footer text-center';

const btn = document.createElement('button');
btn.className = 'btn btn-primary';
btn.innerText = 'View Details';
cardFooter.append(btn);
card.append(cardFooter);

containerBody.append(card);
})
})

