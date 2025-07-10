// ═══════════════════════════════════════════════════════════
// 🔹 BASIC STRICT MODE ACTIVATION
// ═══════════════════════════════════════════════════════════

"use strict";  // ← Must be first statement in script/function

// ═══════════════════════════════════════════════════════════
// 🔹 VARIABLE DECLARATION ENFORCEMENT
// ═══════════════════════════════════════════════════════════

function normalMode() {
    x = 10;  // ← Creates global variable (BAD!)
    console.log(x);  // Works, but dangerous
}

function strictMode() {
    "use strict";
    x = 10;  // ← ReferenceError: x is not defined
    // Must write: let x = 10; or var x = 10;
}

// ═══════════════════════════════════════════════════════════
// 🔹 THIS BINDING DIFFERENCES
// ═══════════════════════════════════════════════════════════

function normalFunction() {
    console.log(this);  // ← Points to window object
}

function strictFunction() {
    "use strict";
    console.log(this);  // ← undefined (safer!)
}

// ═══════════════════════════════════════════════════════════
// 🔹 FUNCTION PARAMETER RESTRICTIONS
// ═══════════════════════════════════════════════════════════

// Normal mode allows duplicate parameters
function normal(a, a) {  // ← Works, but confusing
    return a;  // Which 'a' does this refer to?
}

function strict(a, a) {  // ← SyntaxError in strict mode
    "use strict";
    return a;
}

// ═══════════════════════════════════════════════════════════
// 🔹 DELETION RESTRICTIONS
// ═══════════════════════════════════════════════════════════

"use strict";
var myVar = 10;
delete myVar;  // ← SyntaxError: can't delete variables

function myFunc() {}
delete myFunc;  // ← SyntaxError: can't delete functions

// ═══════════════════════════════════════════════════════════
// 🔹 PRACTICAL EXAMPLE - BEFORE/AFTER
// ═══════════════════════════════════════════════════════════

// 🚫 PROBLEMATIC CODE (Normal Mode)
function calculateTotal(items) {
    total = 0;  // ← Oops! Created global variable
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}

// ✅ SAFE CODE (Strict Mode)
function calculateTotal(items) {
    "use strict";
    let total = 0;  // ← Properly declared
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}