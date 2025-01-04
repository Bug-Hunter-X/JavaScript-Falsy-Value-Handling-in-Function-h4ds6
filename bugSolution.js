function foo(a, b) {
  // Check if a and b are numbers before performing addition
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Handle non-numeric values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo(0, 5)); // Output: 5
console.log(foo(undefined, 5)); //Output:0