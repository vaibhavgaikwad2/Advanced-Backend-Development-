// ═══ ARITHMETIC OPERATORS ═══
let a = 10, b = 3;
console.log(a + b);     // ← 13 (addition)
console.log(a - b);     // ← 7 (subtraction)
console.log(a * b);     // ← 30 (multiplication)
console.log(a / b);     // ← 3.333... (division)
console.log(a % b);     // ← 1 (remainder/modulo)
console.log(a ** b);    // ← 1000 (exponentiation, ES2016)

// ═══ ASSIGNMENT OPERATORS ═══
let x = 5;
x += 3;                 // ← x = x + 3 → 8
x -= 2;                 // ← x = x - 2 → 6
x *= 2;                 // ← x = x * 2 → 12
x /= 3;                 // ← x = x / 3 → 4
x %= 3;                 // ← x = x % 3 → 1
x **= 2;                // ← x = x ** 2 → 1

// ═══ COMPARISON OPERATORS ═══
console.log(5 == "5");   // ← true (loose equality, type coercion)
console.log(5 === "5");  // ← false (strict equality, no coercion)
console.log(5 != "5");   // ← false (loose inequality)
console.log(5 !== "5");  // ← true (strict inequality)
console.log(10 > 5);     // ← true
console.log(10 >= 10);   // ← true
console.log(5 < 3);      // ← false
console.log(5 <= 5);     // ← true

// ═══ LOGICAL OPERATORS ═══
console.log(true && false);    // ← false (AND)
console.log(true || false);    // ← true (OR)
console.log(!true);            // ← false (NOT)

// Short-circuit examples:
let user = { name: "Alice" };
console.log(user && user.name);        // ← "Alice" (safe access)
console.log(null && null.name);        // ← null (prevents error)
console.log("" || "Default");          // ← "Default" (fallback)

// ═══ UNARY OPERATORS ═══
let count = 5;
console.log(++count);    // ← 6 (pre-increment)
console.log(count++);    // ← 6 (post-increment, then count = 7)
console.log(--count);    // ← 6 (pre-decrement)
console.log(count--);    // ← 6 (post-decrement, then count = 5)

console.log(typeof "hello");     // ← "string"
console.log(+"42");              // ← 42 (unary plus converts to number)
console.log(-"42");              // ← -42 (unary minus converts and negates)

// ═══ TERNARY OPERATOR ═══
let age = 20;
let status = age >= 18 ? "adult" : "minor";  // ← "adult"
let message = user ? `Hello ${user.name}` : "Hello Guest";

// ═══ MODERN OPERATORS (ES2020+) ═══
let config = {
    theme: null,
    debug: undefined,
    timeout: 0
};

// Nullish coalescing (??) - only null/undefined trigger fallback
console.log(config.theme ?? "dark");    // ← "dark" (null triggers)
console.log(config.timeout ?? 5000);    // ← 0 (doesn't trigger, 0 is valid)

// Optional chaining (?.) - safe property access
console.log(user?.profile?.avatar);     // ← undefined (no error if path missing)
console.log(user?.getName?.());         // ← undefined (safe method call)

// Logical assignment (ES2021)
config.theme ??= "light";               // ← Only assign if null/undefined
config.debug ||= false;                 // ← Assign if falsy
config.timeout &&= config.timeout * 2;  // ← Assign if truthy

// ═══ DESTRUCTURING & SPREAD ═══
let arr = [1, 2, 3, 4, 5];
let [first, second, ...rest] = arr;     // ← Destructuring with rest
console.log(first, second, rest);       // ← 1, 2, [3, 4, 5]

let newArr = [0, ...arr, 6];            // ← Spread operator
console.log(newArr);                    // ← [0, 1, 2, 3, 4, 5, 6]

let obj = { name: "Bob", age: 30 };
let { name, ...otherProps } = obj;      // ← Object destructuring
let newObj = { ...obj, city: "NYC" };   // ← Object spread