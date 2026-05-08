//factorial of a number
// f(4)=4*3*2*1
// f(0)=1
function factorial(n) {
  let fact = 1;
  //   if (n == 0) {
  //     fact = 1;
  //   } else {
  //     for (let i = 1; i <= n; i++) {
  //       fact = fact * i;
  //       //   console.log(fact)
  //     }
  //   }
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
    //   console.log(fact)
  }
  return fact;
}
console.log(factorial(0)); //1
// console.log(factorial(4)); //24
