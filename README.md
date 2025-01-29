# Unexpected 'this' Keyword Behavior in JavaScript

This repository demonstrates a common source of confusion in JavaScript: the implicit binding of the `this` keyword.  When a function is called without an explicit context (e.g., using `new`, `.call`, `.apply`, or `.bind`), the value of `this` depends on how the function is invoked.  This can lead to unexpected results, especially in the case of global functions.

The `bug.js` file shows an example of a function where the value of `this` is not what might be initially expected.

The `bugSolution.js` file shows several ways to address this issue and explicitly control the value of `this`.