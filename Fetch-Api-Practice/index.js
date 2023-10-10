const cContainer = document.getElementById('card_container');
// const viewDetails = document.querySelector('#viewDetails');
let userId;


//Fetching the user details from fetch api.
fetch('https://dummyjson.com/users')
.then((response)=>{
  return response.json();
})
.then((val)=>{
  val.users.map((items)=>{
    let cardContainer = document.createElement('div');
    cardContainer.className = 'card';
    cardContainer.id = 'card';
    cardContainer.setAttribute('key',`${items.id}`);
    cardContainer.innerHTML = `<img src="${items.image}" class="card-img-top w-50 m-auto" alt="...">
    <div class="card-body">
      <p class="card-text text-center" id="sCard"> ${items.firstName} ${items.lastName}</p>
      <a id="viewDetails" class="btn btn-info text-white m-auto d-block" href="details.html" target="_blank" onclick="clickMe()">View Details</a>
    </div>`;
    cContainer.appendChild(cardContainer)
    });
});


clickMe=()=>{
  const userId = document.getElementById('card');
  let key = userId.getAttribute('key')
  console.log(key);
  // alert(`Hello User ${userId}`);
}











//261 ms
// fetch('https://dummyjson.com/products')
// .then((response)=>{
//     return response.json();
// })
// .then((products)=>{
//     // console.log(products);
//     const product = products.products.filter((item)=>{
//         return item.id == 29;
//     })
//     console.log(product);
// })



//264 ms
// fetch('https://dummyjson.com/products')
// .then((response)=>{
//     return response.json();
// })
// .then((products)=>{
//     // console.log(products);
//     const product = products.products.map((item)=>{
//         return item.id == 29;
//     })
//     console.log(product);
// })