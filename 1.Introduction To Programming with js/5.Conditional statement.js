let age = 18;

if (age >= 18) {                    // ← Check condition
    console.log("You can vote!");   // ← Execute if TRUE
}
// ← Program continues here regardless


let weather = "sunny";

if (weather === "rainy") {          // ← Use === for exact comparison
    console.log("Take umbrella!");  // ← Action for TRUE
} else {
    console.log("Enjoy the day!");  // ← Action for FALSE
}

let score = 85;

if (score >= 90) {                  // ← First condition
    console.log("Grade: A");
} else if (score >= 80) {           // ← Second condition (only checked if first is false)
    console.log("Grade: B");        // ← This will execute
} else if (score >= 70) {           // ← Won't be checked (already found match)
    console.log("Grade: C");
} else {                            // ← Default case
    console.log("Grade: F");
}



let day = "Monday";

switch (day) {                      // ← Switch on variable
    case "Monday":                  // ← Exact match check
        console.log("Work day");
        break;                      // ← IMPORTANT: prevents fall-through
    case "Tuesday":
        console.log("Still working");
        break;
    case "Saturday":
    case "Sunday":                  // ← Multiple cases, same action
        console.log("Weekend!");
        break;
    default:                        // ← Like 'else' in if statements
        console.log("Unknown day");
}



function switch_stat(){
    let age = 20;
let status = age >= 18 ? "adult" : "minor";  // ← condition ? true_value : false_value
//           ↑           ↑        ↑
//        condition   if TRUE   if FALSE

console.log(status); // "adult"
}

function Ternary(){
    let age = 20;
let status = age >= 18 ? "adult" : "minor";  // ← condition ? true_value : false_value
//           ↑           ↑        ↑
//        condition   if TRUE   if FALSE

console.log(status); // "adult"
}

function Logical(){
    let username = "john";
let password = "123";

// AND (&&) - Both conditions must be true
if (username === "john" && password === "123") {  // ← Both must be true
    console.log("Login successful");
}

// OR (||) - At least one condition must be true
if (age < 13 || age > 65) {                      // ← Either condition can be true
    console.log("Discounted ticket");
}

// NOT (!) - Flips true/false
if (!isLoggedIn) {                               // ← Same as: if (isLoggedIn === false)
    console.log("Please log in");
}
}
