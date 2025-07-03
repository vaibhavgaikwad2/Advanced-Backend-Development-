function forloop(){
    // Basic for loop structure
for (let i = 0; i < 5; i++) {           // ← initialization; condition; increment
    console.log("Count: " + i);         // ← Loop body (executes 5 times)
}
//   ↑        ↑      ↑
//  start   stop   step

// Output: Count: 0, Count: 1, Count: 2, Count: 3, Count: 4
}

function whileloop(){
    let count = 0;                          // ← Initialize before loop

while (count < 5) {                     // ← Check condition before each iteration
    console.log("Count: " + count);     // ← Loop body
    count++;                            // ← IMPORTANT: Update counter (avoid infinite loop!)
}
//   ↑
// Must change this variable inside loop!

}

function dowhileloop(){
    let userInput;

do {                                    // ← Execute first, then check condition
    userInput = prompt("Enter 'quit' to exit:");
    console.log("You entered: " + userInput);
} while (userInput !== "quit");         // ← Condition checked after execution
//  ↑
// Guaranteed to run at least once!

}

function forinloop(){
    let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {               // ← key gets property names
    console.log(key + ": " + person[key]);
}
//          ↑              ↑
//      property name   property value

// Output: name: John, age: 30, city: New York

}

function forofloop(){
    let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {             // ← fruit gets actual values
    console.log(fruit);                 // ← No need for index!
}
//      ↑
// Actual value, not index

// Output: apple, banana, orange

}

function foreachloop(){
    let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index) {  // ← Callback function
    console.log(`Index ${index}: ${number}`);
});
//              ↑        ↑       ↑
//          callback   value   index

// Arrow function version (modern)
numbers.forEach((number, index) => {
    console.log(`Index ${index}: ${number}`);
});
}