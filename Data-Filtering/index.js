const data = [ 
    {
        product: 'Widget', 
        sales: 150, 
        region: 'North'
    }, 
    { 
        product: 'Gadget', 
        sales: 200, 
        region: 'South' 
    }, 
    { 
        product: 'Widget', 
        sales: 150, 
        region: 'North' 
    },  
    { 
        product: 'Widget', 
        sales: 50, 
        region: 'North' 
    },  
    { 
        product: 'Gadget', 
        sales: 120, 
        region: 'South'
    },
    { 
        product: 'Gadget', 
        sales: 120, 
        region: 'South'
    }
];

//sum the sales whose region is north.
const sales=data.filter((datum)=> {
    return datum.region == 'North';
})
.reduce((iniVal,curVal)=> iniVal+ curVal.sales,0);
alert(`Sales in north region are "${sales}".`);