// ═══ PRIMITIVE TYPES ═══
let num = 42;                    // ← Number (integer)
let float = 3.14159;             // ← Number (float)
let str = "Hello World";         // ← String
let bool = true;                 // ← Boolean
let undef;                       // ← Undefined (declared, not assigned)
let empty = null;                // ← Null (intentional empty value)
let sym = Symbol('id');          // ← Symbol (unique identifier)
let bigNum = 123456789012345n;   // ← BigInt (large numbers)

// ═══ NON-PRIMITIVE TYPES ═══
let obj = { name: "Alice", age: 25 };    // ← Object
let arr = [1, 2, 3, 4, 5];               // ← Array (special object)
let func = function() { return "Hi"; };   // ← Function (special object)
let date = new Date();                    // ← Date object

// ═══ TYPE CHECKING ═══
console.log(typeof num);         // ← "number"
console.log(typeof str);         // ← "string" 
console.log(typeof bool);        // ← "boolean"
console.log(typeof undef);       // ← "undefined"
console.log(typeof empty);       // ← "object" (JS quirk!)
console.log(typeof sym);         // ← "symbol"
console.log(typeof bigNum);      // ← "bigint"
console.log(typeof obj);         // ← "object"
console.log(typeof arr);         // ← "object" (not "array"!)
console.log(typeof func);        // ← "function"

// ═══ BETTER TYPE CHECKING ═══
console.log(Array.isArray(arr));        // ← true
console.log(empty === null);             // ← true (better than typeof)
console.log(obj.constructor.name);       // ← "Object"

// ═══ TYPE COERCION EXAMPLES ═══
console.log("5" + 3);           // ← "53" (string concatenation)
console.log("5" - 3);           // ← 2 (numeric subtraction)
console.log("5" * 3);           // ← 15 (numeric multiplication)
console.log(true + 1);          // ← 2 (boolean to number)
console.log("" + false);        // ← "false" (boolean to string)

// ═══ TRUTHY/FALSY VALUES ═══
// Falsy: false, 0, -0, 0n, "", null, undefined, NaN
// Everything else is truthy!
console.log(Boolean(0));         // ← false
console.log(Boolean(""));        // ← false  
console.log(Boolean(null));      // ← false
console.log(Boolean([]));        // ← true (empty array is truthy!)
console.log(Boolean({}));        // ← true (empty object is truthy!)

// ═══ PASS BY VALUE vs REFERENCE ═══
let a = 5;
let b = a;              // ← Pass by value (primitives)
a = 10;
console.log(b);         // ← Still 5

let obj1 = { x: 1 };
let obj2 = obj1;        // ← Pass by reference (objects)
obj1.x = 2;
console.log(obj2.x);    // ← 2 (both point to same object!)


// special characters in js

