function findSum(n){
    sum = 0;
    for(let i=0;i<n;i++){
        sum = sum + i;
    }
    return sum;
}

function findSum100(){
    console.log(findSum(100));
}

setTimeout(findSum100, 1000); 
/* This is an Asynchronous function, basically in Javascript it follows on with the rest of the program 
and executes this after the certain timeperiod
*/
console.log(findSum(10));

