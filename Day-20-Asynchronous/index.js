

//Fetching details of phone having the category smartphones.
fetch('https://dummyjson.com/products')
.then((response) => {
    return response.json();
})
.then((val)=>{
    const value = val.products.filter((items)=>{
        if(items.category ==="smartphones")
        return items;
    }); 
    console.log("Some of the smartphones are as follows:",value);
});


//Find the unique data from an array of objects.
const data = [ 
    { 
    id: 1, 
    name: 'John' 
    }, 
    { 
    id: 2, 
    name: 'Jane' 
    }, 
    { 
    id: 1, 
    name: 'John' 
    }, 
    // Duplicate 
    { 
    id:3, 
    name: 'Bob' 
    },
    { 
    id: 4, 
    name: 'Alice'
    }
];