
const array = [
    {
        id: 1,
        productName: "Phone",
        description: "loremloremlorem",
        price: 1000,
        currency: "USD",
        address: {
          city: "Washington",
          postalCode: 2000,
        },
        discountPercent: 20,
        rating: 3,
      },
      {
        id: 2,
        productName: "Phone2",
        description: "loremloremlorem",
        price: 10000,
        currency: "MXN",
        address: {
          city: "Mexico",
          postalCode: 3000,
        },
        discountPercent: 30,
        rating: 4,
      },
      {
        id: 3,
        productName: "Phone3",
        description: "loremloremlorem",
        price: 15000,
        currency: "NPR",
        address: {
          city: "Kathmandu",
          postalCode: 44600,
        },
        discountPercent: 70,
        rating: 1,
      },
      {
        id: 4,
        productName: "Phone4",
        description: "loremloremlorem",
        price: 1000,
        currency: "MXN",
        address: {
          city: "Mexico",
          postalCode: 1000,
        },
        discountPercent: 20,
        rating: 2,
      },
      {
        id: 5,
        productName: "Phone5",
        description: "loremloremlorem",
        price: 50000,
        currency: "NPR",
        address: {
          city: "Pokhara",
          postalCode: 10000,
        },
        discountPercent: 245,
        rating: 4,
      },
      {
        id: 6,
        productName: "Phone6",
        description: "loremloremlorem",
        price: 1000,
        currency: "USD",
        address: {
          city: "Washington",
          postalCode: 1000,
        },
        discountPercent: 65,
        rating: 4.6,
      },
      ];


// Product details whose price is higher than 1000.
      const data = array.map((item)=>{
        if(item.price > 1000){
            return item;
        }else{
            return "Not Found."
        }
      });
      console.log("Product details whose price is higher than 1000 are: " ,data);


// Products details whose city is kathmandu.
      const data2 = array.filter((item)=>{
        if(item.address.city === "Kathmandu"){
            return item;
        }
      });
      console.log("Product details whose city is kathmandu: ", data2);


// Products whose rating is less than 3.
      const data3 =array.map((item)=>{
        if(item.rating < 3){
            return item;
        }else{
            return "Not Found."
        }
      });
      console.log("Products whose rating is less than 3: ", data3);

    
// Products whose discount is greater than 50%.
      const data4 = array.filter((item)=>{
        if (item.discountPercent >= 50){
            return item;
        }
      });
      console.log("Products whose discount is greater than 50%: ", data4);

//Object name and address using map method.
      const data5 = array.map((item)=>{
        return({
            name : `${item.productName}`,
            address : `${item.address.city}`
        });
      });
      console.log("Products name and address are: ", data5);