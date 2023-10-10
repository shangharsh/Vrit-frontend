// const tagName = document.getElementsByTagName('h2');

// for(let i=0;i<tagName.length;i++){
//     tagName[i].style.backgroundColor = 'green';
// }

const listContainer = document.getElementById('list');
const ul = document.createElement('ul');
ul.className = 'list-group';

const li1 = document.createElement('li');
li1.className = 'list-group-item';
li1.innerText = 'An item 1';
ul.append(li1);

const li2 = document.createElement('li');
li2.className = 'list-group-item';
li2.innerText = 'An item 2';
ul.append(li2);

const li3 = document.createElement('li');
li3.className = 'list-group-item';
li3.innerText = 'An item 3';
ul.append(li3);

const li4 = document.createElement('li');
li4.className = 'list-group-item';
li4.innerText = 'An item 4';
ul.append(li4);

listContainer.appendChild(ul);





const card = document.getElementById('card');
const cardContainer = document.createElement('div');
cardContainer.setAttribute("style",'width: 18rem;');
cardContainer.className = 'card';

const img = document.createElement('img');
img.className = "card-img-top";
img.setAttribute("src",'https://images.unsplash.com/photo-1683009427692-8a28348b0965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
cardContainer.append(img);

const divClass = document.createElement('div');
divClass.className = 'card-body';

const h5 = document.createElement('h5');
h5.className = 'card-title';
h5.innerText = 'Card title';
divClass.append(h5);

const p = document.createElement('p');
p.className = 'card-text';
p.innerText = "lorem lorem lorem";
divClass.append(p);

const a = document.createElement('a');
a.className = 'btn btn-primary';
a.innerText = 'Go somewhere';
divClass.append(a);

cardContainer.append(divClass);
card.append(cardContainer);