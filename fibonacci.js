// Write a function int fib(int n) that returns Fn. For example, if n = 0, then fib() should return 0. If n = 1, then it should return 1. For n > 1, it should return Fn-1 + Fn-2

// For n = 9
// Output:34

// Write a function int fib(int n) that returns Fn. For example, if n = 0, then fib() should return 0. If n = 1, then it should return 1. For n > 1, it should return Fn-1 + Fn-2

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  if (n > 1) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(9));
