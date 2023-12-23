// setTimeout(function(){
//     console.log("I am awesome")
// }, 3000);
// console.log('We are using Synchronous')
// console.log('hello')
// console.log('i am')
// console.log('Fine')


// setTimeout(function(){
//     console.log("I am awesome")
// }, 3000)

// let x = 8+9
// console.log(x);
// console.log("Working sdfgghjfhj");


// callbacks, promises, async await


// callbacks-> to pass a function as a parameter to another function
function displayer(x){
    console.log(x)
}


// function addition(a,b, c){
//     let ans = a+b;  //3 sec
//     c(ans)
// }

// addition(89,99, displayer)

function addition(a,b,c){
    let ans = a+b;
    c(ans)
}

addition(55,88,displayer)



// async function subtraction(a,b){
//     let ans = await a+b;
//     displayer(ans)
// }
// subtraction(23,55)









