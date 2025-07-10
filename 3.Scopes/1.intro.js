// Global scope - accessible everywhere
let globalVar = "I'm global";
var alsoGlobal = "Me too";

function testGlobal() {
    console.log(globalVar);         // ← Can access global variables
    console.log(alsoGlobal);        // ← Both let and var work
}

testGlobal();                       // ← "I'm global", "Me too"
console.log(globalVar);             // ← Works outside function too



function myFunction() {
    let functionScoped = "Only inside function";    // ← Function scope
    var alsoFunctionScoped = "Also inside only";    // ← var is function-scoped
    
    console.log(functionScoped);    // ← Works inside function
}

myFunction();                       // ← "Only inside function"
// console.log(functionScoped);     // ← ERROR! Not accessible outside



if (true) {
    let blockScoped = "Only in this block";         // ← Block scope
    const alsoBlockScoped = "Also in this block";   // ← const is block-scoped
    var notBlockScoped = "I escape the block";      // ← var ignores block scope
    
    console.log(blockScoped);       // ← Works inside block
}

// console.log(blockScoped);        // ← ERROR! let is block-scoped
// console.log(alsoBlockScoped);    // ← ERROR! const is block-scoped
console.log(notBlockScoped);        // ← Works! var ignores block scope




function outer() {
    let outerVariable = "I'm from outer";
    
    function inner() {
        let innerVariable = "I'm from inner";
        
        console.log(innerVariable);  // ← Access own scope
        console.log(outerVariable);  // ← Access parent scope (lexical scope)
    }
    
    inner();
    // console.log(innerVariable);  // ← ERROR! Can't access child scope
}

outer();



let level1 = "Global level";

function level2() {
    let level2Var = "Function level";
    
    function level3() {
        let level3Var = "Inner function level";
        
        if (true) {
            let level4Var = "Block level";
            
            // Scope chain lookup:
            console.log(level4Var);  // ← 1. Check current block
            console.log(level3Var);  // ← 2. Check inner function
            console.log(level2Var);  // ← 3. Check outer function
            console.log(level1);     // ← 4. Check global
        }
    }
    
    level3();
}

level2();


