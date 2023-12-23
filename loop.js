// let arr = [52,45,78,69,12,35,45];

//     // for(let i=0; i < arr.length; i++){
//     //     console.log(arr[i]);
//     // }

// let calculate  = (a, b, operation) =>{

//     return operation(a,b);
 
//  };
 
//  const result = calculate(4,9,function(num1 , num2){
//     return num1 + num2;
//  });
 
//  console.log(result);


// const arr = [1,4,2,3,9];

// console.log(arr.sort((a,b)=>a-b))

// console.log(ar_fun)


// function saySomething(message){
//     console.log(this.name + " is " + message) ;
//   }        
//   let person4 = {name:  "John"};
//   saySomething.apply(person4, ["awesome"]);


let person = {
    age: 23,
    getAge: function(){
      console.log(this.age);
    }
  }        
  let person2 = {age:  54};
  person.getAge.call(person2);      
  // Returns 54  