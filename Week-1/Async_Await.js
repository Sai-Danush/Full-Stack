/* 
Below is how a code is usually defined with only Promises
*/
const { clear } = require('console');
const fs = require('fs')

function myAsyncFunction() {
    let p = new Promise(function(resolve){
        fs.readFile("text2.txt", "utf-8", function(err,data){
            resolve(data);
        })
    });
    return p;
}

function main(){
    myAsyncFunction().then(function(value){
        console.log(value);
        console.log("hi there")
    });
}

main();

/* 
Below is how a code is usually defined with Await Async
*/
const fs2 = require('fs')
function myAsyncFunction2(){
    let q = new Promise(function(resolve){
        fs.readFile("test.txt", "utf-8", function(err,data){
            resolve(data);
        });
    });
    return q;
}

async function await2(){
    let value = await myAsyncFunction2()
    console.log(value);
}

await2();

console.log("after await")
