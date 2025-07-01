function example(){
    console.log(x);
    var x=10;
    console.log(x);
}

example();

function example1(){
    console.log(x); // it will give referance error because of tdz
    let x =10;
}


// ═══ BASIC DECLARATIONS ═══
var name = "John";        // ← Function-scoped, can redeclare
let age = 25;             // ← Block-scoped, cannot redeclare  
const PI = 3.14159;       // ← Block-scoped, immutable binding

// ═══ HOISTING EXAMPLE ═══
console.log(x);           // ← undefined (not error!)
var x = 5;
// Equivalent to:
// var x;               // ← Hoisted declaration
// console.log(x);      // ← undefined
// x = 5;               // ← Assignment stays in place

// ═══ TEMPORAL DEAD ZONE ═══
console.log(y);           // ← ReferenceError: Cannot access 'y'
let y = 10;               // ← TDZ ends here

// ═══ BLOCK SCOPE DEMO ═══
function scopeTest() {
    var a = 1;            // ← Function-scoped
    let b = 2;            // ← Block-scoped
    const c = 3;          // ← Block-scoped
    
    if (true) {
        var a = 4;        // ← Same 'a' (redeclared)
        let b = 5;        // ← New 'b' (shadows outer)
        const c = 6;      // ← New 'c' (shadows outer)
        console.log(a, b, c); // 4, 5, 6
    }
    
    console.log(a, b, c); // 4, 2, 3 ← var changed, let/const unchanged
}

// ═══ CONST GOTCHA ═══
const obj = { name: "Alice" };
obj.name = "Bob";         // ← OK! Object content can change
obj.age = 30;             // ← OK! Adding properties allowed
// obj = {};              // ← ERROR! Cannot reassign binding