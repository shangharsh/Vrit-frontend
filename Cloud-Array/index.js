const clouds = [0, 0, 1, 0, 0, 1, 0];
let count=0;

for(let i=1;i<=clouds.length;i++){
    if (clouds[i]===0){
        count +=1;
    }
}
alert(`The minimum jumps required to be on the end of the cloud is: "${count}".`);