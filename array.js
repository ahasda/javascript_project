// let x = [5,8,3,7,1,9]

// let num = x.sort() 

// console.log(x.length)
// console.log(num)
// console.log(x)

// const marks = {
//     Aniket : 79,
//     Rohan: 60,
//     Ajay: 84,
//     Shubham: 92,
//     Purvi :90
// }


// for(let x = 0; x < Object.keys(marks).length; x++){
//     console.log(Object.keys(marks)[x] + marks(Object.keys(marks)[x]))
// }


let arr = [3,5,45,67,7];
// Filter=> method returns the true condition
let a2 = arr.filter((value)=>{
  return value > 10;
})

console.log(a2)

// map-> when we have to do some work on each element of an array
// let sq1 = []
// for(let i=0;i<arr.length;i++){
//   sq1.push(arr[i] * arr[i]);
// }
// let sq = arr.map(function(item){
//   return item*item
// })

// console.log(sq)

// forEach()
let sqForEach = []
arr.forEach(function(item){
  console.log(item*item)
  sqForEach.push(item*item)
})
console.log(sqForEach)