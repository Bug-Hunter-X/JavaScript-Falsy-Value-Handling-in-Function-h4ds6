# JavaScript Falsy Value Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to handling falsy values. The `foo` function is designed to add two numbers, but it only explicitly checks for `null` values.  This leads to unexpected behavior when other falsy values (like 0, "", false, undefined) are passed as arguments.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code in a JavaScript environment (browser console, Node.js).
4. Observe the unexpected behavior when non-null falsy values are passed.

## Solution

The solution involves explicitly checking for all falsy values or using a more robust approach to handle potentially invalid input.