

//Fetching the user details whose hair is black.
fetch('https://dummyjson.com/users')
.then((response)=>{
    return response.json();
})
.then((value)=>{
    const details = value.users.filter((items)=>{
        return items.hair.color === 'Black';
    });
    console.log("User details whose hair color is black", details);
});