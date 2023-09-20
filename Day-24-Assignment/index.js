const containerFluid = document.getElementById('container-fluid');
const headingContainer = document.getElementById('headingContainer');

const h2 = document.createElement('h2');
h2.className = 'text-center text-white p-0 bg-secondary m-0';
h2.innerText = 'Our Services';
headingContainer.append(h2);


const container = document.getElementById('container');

for(let i=0; i<8; i++){

let card = document.createElement('div');
card.className = 'card bg-light p-2';
card.style.width = '18rem';

const img = document.createElement('img');
img.className = 'card-img-top';
img.src = 'https://images.unsplash.com/photo-1680176040970-523e88e1ff34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
img.alt = 'Service-image';
card.append(img);

const cardBody = document.createElement('div');
cardBody.className = 'card-body';

const h5 =document.createElement('h5');
h5.className = 'card-title text-center';
h5.innerText = 'Card Title';
cardBody.append(h5);

const p = document.createElement('p');
p.className = 'card-text text-center';
p.innerText = 'Lorem lorem lorem';
cardBody.append(p);

const a = document.createElement('a');
a.href = '#';
a.className = 'btn btn-primary d-block';
a.innerText = 'View Details';
cardBody.append(a);

card.append(cardBody);

container.append(card);

}


