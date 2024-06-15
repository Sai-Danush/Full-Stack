const fs = require("fs");

fs.readFile("test.txt", "utf-8", function(err,data){
    if (err) {
        console.error("An error occurred while reading the file:", err);
        return;
    }
    console.log(data);
})

console.log("Hi There");

let a =0;
// Lets assume the code below takes a very long time to run

for(let i=0;i<1000000000;i++){
    a++;
}

/* 
So even if the second part of the code takes longer time than to fetch the code and read the file it will not output before 
the second console.log. Basically Async functions will take place only after all sync functions are done. When a async function is done before
a synchronous function it is stored in the callback queue once the JavaScript thread becomes free it will add it in the call stack 
*/

console.log("Hi There 2")

/*
Whatever async task gets done first is added to the callback queue first
 For visualization of a high level javascript architecture we came take three sections- Call Stack, Web Apis and Callback Queue. 
*/
