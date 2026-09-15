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
function createCounter(start){
    let count = start;
    let intail_val = start;
    return function(){
        function reset(){
            count= intail_val; 
        }
        counter.reset = reset;
        count++;
        return count;
    }    
}

let counter = createCounter(5);