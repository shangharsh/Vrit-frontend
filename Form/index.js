
const email = document.getElementById('email');
const password = document.getElementById('password');

//login with UI...........................................................
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


//Signup with UI......................................................
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

let totalProducts = [];
let productId = '';

//Fetching the data using the api and for of method...............................
const containerBody = document.getElementById('container-body');

const fetchProducts = async () =>{
    const response = await fetch('https://dummyjson.com/products');
    const {products} = await response.json();
    totalProducts = products;
    newProducts(products);
    
};

//Returning the value of product in cards..............................................
const newProducts = (products) =>{

//This will clear the previous data inside the card.....................................
containerBody.innerHTML = '';

//This will shows the details inside the card............................................
for(let product of products){
const card = document.createElement('div');
card.className = 'card p-1';
card.style.width = '18rem';
card.style.height = '450px';

const cardHeader = document.createElement('div');
cardHeader.className = 'card-header h-50';

const img = document.createElement('img');
img.className = 'h-100 w-100';
img.src = product.thumbnail;
cardHeader.append(img);
card.append(cardHeader);

const cardBody = document.createElement('div');
cardBody.className = 'card-body';

const title = document.createElement('h4');
title.className = 'text-truncate text-center'
title.innerText = product.title;
cardBody.append(title);

const priceContainer = document.createElement('div');
priceContainer.className = 'd-flex justify-content-between';

const price = document.createElement('p');
price.className = 'text-primary';
price.innerText = 'Price: ' + product.price;
priceContainer.append(price);

const discount = document.createElement('p');
discount.className = 'text-danger';
discount.innerText = 'Discount: '+product.discountPercentage+'%';
priceContainer.append(discount);

cardBody.append(priceContainer);

const description = document.createElement('p');
description.className = 'float-start';
description.innerText = 'Description: '+ product.description.slice(0,40)+'...';
cardBody.append(description);

card.append(cardBody);

const cardFooter = document.createElement('div');
cardFooter.className = 'card-footer text-center';

const div = document.createElement('div');
div.className = 'd-flex justify-content-between';

const view = document.createElement('button');
view.className = 'btn btn-info text-white';
view.innerText = 'View';
view.setAttribute('data-bs-toggle','modal');
view.setAttribute('data-bs-target','#viewModal');
//To view the product details pop up container when click on the view button of the card.....................
view.addEventListener('click',(e)=>{

    e.preventDefault();
    document.getElementById('viewImage').src = product.thumbnail;
    document.getElementById('viewImage').setAttribute('readonly',true);

    document.getElementById('viewTitle').value = product.title;
    document.getElementById('viewTitle').setAttribute('readonly',true);

    document.getElementById('viewPrice').value = product.price;
    document.getElementById('viewPrice').setAttribute('readonly',true);

    document.getElementById('viewDiscount').value = product.discountPercentage;
    document.getElementById('viewDiscount').setAttribute('readonly',true);

    document.getElementById('viewDescription').value = product.description;
    document.getElementById('viewDescription').setAttribute('readonly',true);

});
div.append(view);

const edit = document.createElement('button');
edit.className = 'btn btn-secondary';
edit.innerText = 'Edit';
edit.setAttribute('data-bs-toggle','modal');
edit.setAttribute('data-bs-target','#editModal');
edit.addEventListener('click',(e)=>{
    e.preventDefault();
    productId = product.id;
    document.getElementById('editImage').value = product.thumbnail;
    document.getElementById('editTitle').value = product.title;
    document.getElementById('editPrice').value = product.price;
    document.getElementById('editDiscount').value = product.discountPercentage;
    document.getElementById('editDescription').value = product.description;
});
div.append(edit);

const deletebtn = document.createElement('button');
deletebtn.className = 'btn btn-danger';
deletebtn.innerText = 'Delete';
//To remove the product when click on the delete button of the card.......................
deletebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(product.id);
    const filteredproduct = products.filter((item)=>{
        return item.id !== product.id;
    })
    newProducts(filteredproduct);
});
div.append(deletebtn);

cardFooter.append(div);
card.append(cardFooter);
containerBody.append(card);
    }

}
fetchProducts();

//To edit the details of products from the cards...................................................
function editProduct(){
    const title = document.getElementById('editTitle').value;
    const description = document.getElementById('editDescription').value;
    const price = document.getElementById('editPrice').value;
    const discountPercentage = document.getElementById('editDiscount').value;
    const thumbnail = document.getElementById('editImage').value;

    const data = {
        id:productId,
        title:title,
        description:description,
        thumbnail,
        price,
        discountPercentage
    }
    console.log(data);
    const editedProduct = totalProducts.map((item)=>{
        return item.id === productId ? data : item ;
    });

    totalProducts = editedProduct;

    newProducts(editedProduct);

    console.log(document.getElementById('editImage').src);

    document.getElementById('vCloseBtn').click();

}



//Adding the new product data from modal......................................
function addProduct(){
    const imageUrl = document.getElementById('imageUrl').value;
    const title = document.getElementById('title').value;
    const pPrice = document.getElementById('price').value;
    const pDiscount = document.getElementById('discount').value;
    const pDescription = document.getElementById('description').value;

    let newProduct = {
        id: Date.now(),
        title: title,
        price: pPrice,
        thumbnail: imageUrl,
        discountPercentage: pDiscount,
        description: pDescription
    };
    let finalArray = [newProduct,...totalProducts]
    newProducts(finalArray)

document.getElementById('closeBtn').click();
}



