function sum(num1, num2){
    let result = num1 + num2;
    return result;
}

function displayResult(data){
    console.log("Result of the sum is: " + sum(1,2));
}

function displayResultPassive(data){
    console.log("Sum's Result is : " + data);
}

const ans = displayResult(sum(1,2)); 

function square(a) {
    return a*a;
}

function SumOfAnything(a,b,fn) {
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

const a = SumOfAnything(1,2,square);
console.log("The sum of the square of the two numbers is " + a);