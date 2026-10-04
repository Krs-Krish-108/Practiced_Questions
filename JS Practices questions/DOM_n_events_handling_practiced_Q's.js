//:Question 3
//+ You have this page:

// <h1 id="title">Shopping List</h1>
// <ul id="list">
//     <li>Milk</li>
//     <li>Bread</li>
//     <li>Eggs</li>
// </ul>
// <button id="add">Add Item</button>

//+ Your task:
// Build this behavior using JavaScript:
// When the user clicks Add Item, a new <li> containing:
//. Butter
// should appear at the bottom of the list.

//+ Rules:
// You are not allowed to search for the <li> that already exists and modify its text.
// You actually need to create a new HTML element and put it into the existing <ul>.

//= Answer 3
// let list = document.querySelector('#list');
// let button = document.querySelector('button');

// button.addEventListener("click", function(){
//     let li = document.createElement("li");
//     li.textContent = "butter";

//     list.appendChild(li);
// });
//=----------------------------------------------------------------


//: Question 4
//+You now have:

// <input id="itemInput" type="text" placeholder="Enter item">
// <button id="add">Add Item</button>
// <ul id="list">
//     <li>Milk</li>
//     <li>Bread</li>
// </ul>

//+ The requirement has changed:
// Whatever the user types into the input should become the new <li>.

// So if the user types:
//. Apples
// and clicks Add Item, the DOM should become:

// <ul>
//     <li>Milk</li>
//     <li>Bread</li>
//     <li>Apples</li>
// </ul>

//= Answer 4
// let inp = document.querySelector('#itemInput');
// let btn = document.querySelector('#add');
// let list = document.querySelector('#list');

// btn.addEventListener("click", function(){
//     let li = document.createElement("li");
//     li.textContent=inp.value;

//     list.appendChild(li);

//     inp.value="";
// })
//=----------------------------------------------------------



//: Question 5: First actual problem-solving trap 🧠
// You're building the same shopping list.

// The requirement is:
// If the input is empty and the user clicks Add Item, do not create an empty <li>.

//+ So this:
//. [              ]  [Add Item]
// should do nothing.
//+ But:
//. [ Apples       ]  [Add Item]
// should create:
//. <li>Apples</li>



//= Answer 5
// let inp = document.querySelector('#itemInput');
// let btn = document.querySelector('#add');
// let list = document.querySelector('#list');


// btn.addEventListener("click", function(){
//     if(inp.value!==""){
//         let li = document.createElement("li");
//         li.textContent=inp.value;

//         list.appendChild(li);

//         inp.value="";
//     }

// })
//=----------------------------------------------------


//: Question 6: Now the requirement changes 🧠
// Your current code has a subtle UX problem.

//+ Suppose the user enters:
//. "   "
// That's technically not an empty string.

//+ So your current condition:
//. if (inp.value !== "") {
// will allow it.
//+ You would end up creating:
//. <li>   </li>

//+ But the requirement is now:
// An input containing only spaces should also be treated as empty.


//= Answer 6
// let inp = document.querySelector('#itemInput');
// let btn = document.querySelector('#add');
// let list = document.querySelector('#list');


// btn.addEventListener("click", function(){
//     if(inp.value.trim()!==""){
//         let li = document.createElement("li");
//         li.textContent=inp.value;

//         list.appendChild(li);

//     }
//     inp.value="";

// })
//=----------------------------------------------------



//: Question 7 🔥
// We're going to build on what you just learned, but introduce a new problem pattern.

//+ You now have:
// <input id="itemInput" type="text" placeholder="Enter item">
// <button id="add">Add Item</button>
// <ul id="list"></ul>

//+ Your current behavior is:
// User types something.
// Clicks Add Item.
// A new <li> is created.
// Empty/whitespace-only input is rejected.

//+ New requirement
// Now the user should also be able to press Enter inside the input to add the item.

//+ So both should work:
//. [ Apples              ] [Add Item]
//.           ↓ click
//.         <li>Apples</li>

//+ and:
//. [ Apples              ]
//.         ↓ Enter
//.         <li>Apples</li>

//+ Constraints
// There should be one single piece of logic responsible for actually adding the item.
// In other words, I don't want you to copy-paste:
//. let li = document.createElement("li");
//  ...
// into two different event handlers.

//+ Your challenge
// Figure out how to structure this.

//+ You already know:
// addEventListener()
// event objects
// keydown
// e.code
// inp.value
// trim()
// createElement()
// appendChild()

// But now you need to answer a more important programming question:
// How can two different events trigger the same piece of behavior without duplicating the behavior's code?




//= Answer 7
// let inp = document.querySelector('#itemInput');
// let btn = document.querySelector('#add');
// let list = document.querySelector('#list');

// let additem = function(){
//     if(inp.value.trim()!==""){
//         let li = document.createElement("li");
//         li.textContent=inp.value;

//         list.appendChild(li);

//     }
//     inp.value="";

// }

// inp.addEventListener("keydown", function(e){
//     if(e.code === "Enter"){
//         additem();
//     }
// });
// btn.addEventListener("click", additem)

//=----------------------------------------------------




//:Question 8: Now we're going to break your abstraction 😈
// Your shopping list now works with both:

// clicking Add
// pressing Enter

// But the product manager has arrived, as they inevitably do.

//+ New requirement:
// When an item is added, it should have a Delete button next to it. Clicking Delete should remove that specific item.

// So:

// Milk       [Delete]
// Bread      [Delete]
// Apples     [Delete]
// If you click the Delete button next to Bread, only Bread should disappear.

//+ Your task
// Modify your existing solution to support this.

// You already know how to:
// create elements
// set textContent
// append children
// listen for events
// create reusable functions

//+ But now there is a new problem:
// When I create a Delete button for an item, how does that button know which <li> it belongs to?



//= Answer 8
let inp = document.querySelector('#itemInput');
let btn = document.querySelector('#add');
let list = document.querySelector('#list');

let additem = function(){
    if(inp.value.trim()!==""){
        let li = document.createElement("li");
        li.textContent=inp.value;

        list.appendChild(li);

    }
    inp.value="";

}

inp.addEventListener("keydown", function(e){
    if(e.code === "Enter"){
        additem();
    }
});

btn.addEventListener("click", additem)

//=----------------------------------------------------