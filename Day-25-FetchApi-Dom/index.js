const containerFluid = document.getElementById('container-fluid');
const headingContainer = document.getElementById('headingContainer');

const h2 = document.createElement('h2');
h2.className = 'text-center text-white p-0 bg-secondary m-0';
h2.innerText = 'Our Services';
headingContainer.append(h2);


const container = document.getElementById('container');

fetch('https://dummyjson.com/products')
.then((res)=>{
   return res.json();
})
.then((value)=>{
value.products.forEach((item)=>{
console.log(item);
    let card = document.createElement('div');
    card.className = 'card bg-light p-2';
    card.style.width = '18rem';
    card.style.height = '500px';
    
    const img = document.createElement('img');
    img.className = 'card-img-top h-100';
    img.src = item.thumbnail;
    img.alt = 'Service-image';
    card.append(img);
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    const h5 =document.createElement('h5');
    h5.className = 'card-title text-center';
    h5.innerText = item.title;
    cardBody.append(h5);
    
    const p = document.createElement('p');
    p.className = 'card-text text-center';
    p.innerText = item.description;
    cardBody.append(p);
    
    const a = document.createElement('a');
    a.href = '#';
    a.className = 'btn btn-primary d-block';
    a.innerText = 'View Details';
    cardBody.append(a);
    
    card.append(cardBody);
    
    container.append(card);
    
})
    



})


