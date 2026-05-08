//prime number
function prime(n) {
  let result = false;
  let count = 0;
  if (n < 2) {
    return false;
  } else {
    for (let i = 2; i <= n; i++) {
      if (n % i == 0) {
        count++;
      }
    }
    if (count > 2) {
      result = false;
    } else {
      result = true;
    }
    return result;
  }
}
console.log(prime(1));
