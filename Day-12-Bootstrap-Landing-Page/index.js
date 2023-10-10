// const cContainer = document.getElementById('card_container');


// //Fetching the user details from fetch api.
// fetch('https://dummyjson.com/users')
// .then((response)=>{
//   return response.json();
// })
// .then((val)=>{
//   val.users.map((items)=>{
//     let cardContainer = document.createElement('div');
//     cardContainer.classList.add('card');
//     cardContainer.innerHTML = `<img src="${items.image}" class="card-img-top w-100" alt="...">
//     <div class="card-body bg-info">
//       <p class="card-text text-white text-center"> ${items.firstName} ${items.lastName}</p>
//     </div>`;
//   cContainer.appendChild(cardContainer);
// });
// })
































// const cardContainer = document.getElementById('card_container');

// // Fetching the user details from dummyjson....
// fetch("https://dummyjson.com/products")
// .then((response)=>{
//     return response.json();
// })
// .then((val)=>{
//     val.products.forEach((items)=>{
//       console.log(items)
//       const container = document.createElement('div');
//       container.classList.add('card');
//       container.innerHTML = `
//           <img src=${items.thumbnail} class="card-img-top w-100" alt="..."/>
//           <p class="card-text text-center"> Price: ${items.title}</p>
//           <div class="card-body">
//             <p class="card-text text-center"> Price: ${items.price} Discount: ${items.discountPercentage}</p>
//           </div>`;
//           cardContainer.appendChild(container);
//     });
// })

// const arr = [
//     {
//       name: "Ram",
//     },
//     {
//       name: "Ram",
//     },
//     {
//       name: "Sita",
//     },
//     {
//       name: "Hari",
//     },
//   ];
//   const distinct = [];
// for(let i=0;i<arr.length;i++){
// console.log(distinct)
// if(distinct[i].name ==arr[i].name){
//     break;
// }
// else{
//     distinct.push(arr[i].name)
// }
// }