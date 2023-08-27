//selector
const inputarea = document.querySelector(".input");
const resultarea = document.querySelector(".output");
const keys = document.querySelectorAll("button");

//eventlistener
keys.forEach(key => {
    key.addEventListener("click", calculate);
});



function calculate(){
    let buttonText = this.innerText;
    // console.log(buttonText);
    if(buttonText === "AC"){
        inputarea.innerText = "";
        resultarea.innerText = "0";
        // inputarea.style.animation = "";
        // resultarea.style.animation = "";
        return;
    }

    if(buttonText === "C"){
        inputarea.textContent = inputarea.textContent.substr(0, inputarea.textContent.length-1);
        resultarea.innerText = "";
        return;
    }

    if(buttonText === "="){
            resultarea.innerText = eval(inputarea.innerText);
            // result.style.animation = "big 0.5s ease-in-out";
            // output.style.animation = "small 0.5s ease-in-out";
            // result.style.animationFillMode = "forwards";
            // output.style.animationFillMode = "forwards";
    }else{
        inputarea.textContent += buttonText;
        return;
    }
   
}