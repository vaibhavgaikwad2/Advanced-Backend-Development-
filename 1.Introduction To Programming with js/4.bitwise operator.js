// ═══ BASIC BITWISE OPERATIONS ═══
let a = 5;  // Binary: 0101
let b = 3;  // Binary: 0011

console.log(a & b);  // ← 1 (0101 & 0011 = 0001)
console.log(a | b);  // ← 7 (0101 | 0011 = 0111)
console.log(a ^ b);  // ← 6 (0101 ^ 0011 = 0110)
console.log(~a);     // ← -6 (flip all bits, two's complement)

// ═══ SHIFT OPERATIONS ═══
console.log(5 << 1);   // ← 10 (shift left = multiply by 2)
console.log(5 << 2);   // ← 20 (shift left by 2 = multiply by 4)
console.log(20 >> 1);  // ← 10 (shift right = divide by 2, round down)
console.log(20 >> 2);  // ← 5 (shift right by 2 = divide by 4)

// Sign-preserving vs zero-fill right shift
console.log(-8 >> 1);   // ← -4 (preserves sign bit)
console.log(-8 >>> 1);  // ← 2147483644 (zero-fill, treats as unsigned)

// ═══ PRACTICAL BIT MANIPULATION ═══
function setBit(num, position) {
    return num | (1 << position);     // ← Set bit at position to 1
}

function clearBit(num, position) {
    return num & ~(1 << position);    // ← Set bit at position to 0
}

function toggleBit(num, position) {
    return num ^ (1 << position);     // ← Flip bit at position
}

function checkBit(num, position) {
    return (num & (1 << position)) !== 0;  // ← Check if bit is set
}

// Examples:
let flags = 0;                        // ← Start with no flags
flags = setBit(flags, 2);            // ← Set bit 2 (flags = 4)
flags = setBit(flags, 0);            // ← Set bit 0 (flags = 5)
console.log(checkBit(flags, 2));     // ← true
console.log(checkBit(flags, 1));     // ← false
flags = clearBit(flags, 2);          // ← Clear bit 2 (flags = 1)

// ═══ CLEVER BITWISE TRICKS ═══

// Check if number is even/odd (fastest method)
function isEven(n) {
    return (n & 1) === 0;            // ← Last bit is 0 for even numbers
}

function isOdd(n) {
    return (n & 1) === 1;            // ← Last bit is 1 for odd numbers
}

// Check if number is power of 2
function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;  // ← Clever bit trick!
}

// Fast multiplication/division by powers of 2
function multiplyBy8(n) {
    return n << 3;                   // ← Shift left by 3 (2^3 = 8)
}

function divideBy4(n) {
    return n >> 2;                   // ← Shift right by 2 (2^2 = 4)
}

// Swap two numbers without temporary variable
function swapBitwise(a, b) {
    a ^= b;  // ← a = a XOR b
    b ^= a;  // ← b = b XOR (a XOR b) = original a
    a ^= b;  // ← a = (a XOR b) XOR original a = original b
    return [a, b];
}

// Find absolute value (without Math.abs)
function abs(n) {
    const mask = n >> 31;            // ← -1 if negative, 0 if positive
    return (n + mask) ^ mask;        // ← Two's complement magic
}

// Count number of set bits (population count)
function countSetBits(n) {
    let count = 0;
    while (n) {
        count += n & 1;              // ← Add 1 if last bit is set
        n >>= 1;                     // ← Shift right to check next bit
    }
    return count;
}

// ═══ PERMISSION SYSTEM EXAMPLE ═══
const PERMISSIONS = {
    READ:    1,    // ← 0001
    WRITE:   2,    // ← 0010  
    EXECUTE: 4,    // ← 0100
    DELETE:  8     // ← 1000
};

function hasPermission(userPerms, permission) {
    return (userPerms & permission) !== 0;
}

function grantPermission(userPerms, permission) {
    return userPerms | permission;
}

function revokePermission(userPerms, permission) {
    return userPerms & ~permission;
}

// Example usage:
let userRights = 0;                           // ← No permissions
userRights = grantPermission(userRights, PERMISSIONS.READ);   // ← Grant read
userRights = grantPermission(userRights, PERMISSIONS.WRITE);  // ← Grant write

console.log(hasPermission(userRights, PERMISSIONS.READ));     // ← true
console.log(hasPermission(userRights, PERMISSIONS.DELETE));   // ← false

// ═══ BIT MASKING FOR RGB COLORS ═══
function createRGB(red, green, blue) {
    return (red << 16) | (green << 8) | blue;  // ← Pack into single number
}

function extractRed(rgb) {
    return (rgb >> 16) & 0xFF;        // ← Extract red component
}

function extractGreen(rgb) {
    return (rgb >> 8) & 0xFF;         // ← Extract green component
}

function extractBlue(rgb) {
    return rgb & 0xFF;                // ← Extract blue component
}

// Example:
const color = createRGB(255, 128, 64);  // ← Create color
console.log(extractRed(color));         // ← 255
console.log(extractGreen(color));       // ← 128
console.log(extractBlue(color));        // ← 64