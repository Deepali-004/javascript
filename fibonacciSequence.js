//fibonnacci sequence
//f(2)=[0,1]
//f(3)=[0,1,1]
function fibonnaci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonnaci(10));
