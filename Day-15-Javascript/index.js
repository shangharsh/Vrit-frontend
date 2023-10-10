        //Comparison Operator
        // let a= 30;
        // let b= '30';

        // console.log("a==b is" + a==b);
        // console.log("a===b is" + a===b);

        // console.log("Does a!= b is True or False?", a!= b);

        // //Contact String

        // let str = "A quick brown fox";
        // let str2 = "jumps over the lazy dog."

        // console.log("The String is:"+" " +str+" "+str2);

        // // Converting a string into a number
        // let str3 = "hello";
        // let str4 = "50";

        // const chstr3 = Number(str3);
        // const chstr4 = Number(str4);

        // console.log(chstr3, typeof(chstr3), chstr4, typeof(chstr4));

        // //logical operator

        // //logical not
        // let email = "null";
        // let password;

        // if(!email){
        //     console.log("!email", !email);
        // }
        // if(!password){
        //     console.log("!password", !password);
        // }

        // //logical &
        // let stdAge = 16;
        // let stdAge2 = 18;

        // console.log("We have two students whoose age are as follows:", stdAge, stdAge2, stdAge>=18 && stdAge2>=18);

        // // Objects and Array
        // let obj ={
        //     name: "Mercedes",
        //     model:"2016",
        //     price:"20000",
        //     owner:"ram",
        //     isSold: false,
        //     address:{
        //         city:"Washington"
        //         },
        //         postalCode:"999"
        //     }

        // console.log("Car name is", obj.name,".");

        // console.log("The available car in city",obj["address"]["city"], "and owner name is", obj.owner,".");



        let reverse = "";
        let str = prompt("Enter a Value");
        //Checks Palindrome or not...
        for(let i = str.length-1; i >= 0; i--)
        {
            reverse = reverse + str[i];
        }
        document.write(reverse);

        if(str === reverse){
            document.write(`The Inputed Value is "${str}" and reverse of this value is "${reverse}" and it is
            similar. So, it is Palindrome.`)
        }
        else{
            document.write(`The Inputed Value is "${str}" and reverse of this value is "${reverse}" and it is
             different. So, it is not Palindrome.`)
        }









        //Even/Odd and Prime.

    
        // const val = Number(num);

        // for(let i=1; i<=num; i++){
        //     evenOdd(i);
        // }

        // function evenOdd(i){
        //     if(i % 2 === 0){
        //         msg = "Even";
        //         hasPrime(i, msg);
        //     }
        //     else{
        //         msg = "Odd";
        //         hasPrime(i, msg);
        //     }
        // }

        // function hasPrime(num, msg){
        //     let isPrime = true;
        //     for(let i = 2; i < num/2; i++){
        //         if(num % i === 0){
        //             isPrime = false;
        //             break;
        //         }
        //     }

        //     if(isPrime === true){
        //         document.write(`The Number ${num} is ${msg} and it is Prime.`);
        //     }
        //     else{
        //         document.write(`The Number ${num} is ${msg} and it is not Prime.`);
        //     }
        // }












































