//: Question 1
/* 
Closure-Based Counter
----------------------

Create:

function createCounter(start) {
     your code
}

It should produce:

let counter = createCounter(5);

console.log(counter()); ------> 6
console.log(counter()); ------> 7
console.log(counter()); ------> 8

Then make the counter support:

counter.reset();

After reset:

console.log(counter()); ------> 6
*/

//= Answer
// function createCounter(start){
//     let count = start;
//     let intail_val = start;
//     return function(){
//         function reset(){
//             count= intail_val; 
//         }
//         counter.reset = reset;
//         count++;
//         return count;
//     }    
// }

// let counter = createCounter(5);


//: Question 2
// function createCounter(){
//      let count =0;

//      return {
//           increment:function{
//                return count++;
//           },

//           getCount:function{
//                return count;
//           }
//      }
// }

// let counter1 = createCounter();

// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.getCount()); 

// let counter2 = createCounter();

// console.log(counter2.increment());
// console.log(counter1.getCount()); 
// console.log(counter2.getCount()); 



//:Question 34
//= Answer 34

// function createCounter(start, step){
//      let count = start;

//      return {
//           increment:function(){
//                return count+=step;
//           },

//           getCount:function(){
//                return count;
//           }
//      }
// }

// let counter1 = createCounter(10, 5);

// console.log(counter1.increment())
// console.log(counter1.increment())
// console.log(counter1.getCount());

// let counter2 = createCounter(100, 10);

// console.log(counter2.increment());
// console.log(counter1.getCount());
// console.log(counter2.getCount()); 




//:Question 35
//= Answer 35

// function createBankAccount(intialAmount){
//      let Balance = intialAmount;

//      return {
//           deposit:function(depsoitAmount){
//                return `Your current Balance is ${Balance+=depsoitAmount}`;
//           },

//           withdraw:function(withdrawAmount){
//                if(Balance>=withdrawAmount){
//                     return `Your current Balance is ${Balance-=withdrawAmount}`;
//                }
//                else{
//                     return "Insufficient Balance";
//                }
//           },

//           getBalance:function(){
//                return Balance;
//           }
//      }
// }


// let account1 = createBankAccount(1000);

// console.log(account1.getBalance()); 
// console.log(account1.deposit(500)); 
// console.log(account1.withdraw(300)); 
// console.log(account1.withdraw(2000)); 
// console.log(account1.getBalance()); 

// let account2 = createBankAccount(500);

// console.log(account2.getBalance());
// console.log(account1.getBalance()); 