// This is an Ugly Way
const fs = require('fs');

//my own asynchronous function
function myReadFile(cb){
    fs.readFile("test.txt", "utf-8", function(err,data){
        cb(data);
    });
}

//callback function to call
function onDone(data){
    console.log(data)
}

myReadFile(onDone)

console.log(" ")

/* 
By using Promises below we kinda make the code a bit more cleaner. Its syntactic sugar(makes the code a bit better), one of the things that 
it prevents is something called callback hell.
*/

const fs2 = require('fs')

function MyPromiseFile(){
    console.log("inside the file");
    return new Promise(function(resolve){
        console.log("inside promise")
        fs2.readFile("text2.txt", "utf-8", function(err, data){
            console.log("before resolve")
            resolve(data);
        });
    })
}

MyPromiseFile().then(onDone);

/* 
Promise it is basically just a class that makes callbacks and async functions slightly more readable
Promise has three states : Pending, Resolved and Rejected
*/
