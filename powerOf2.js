//power of two
function power(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 != 0) {
      return false;
    } else {
      if (n / 2 == 1) {
        return true;
      } else {
        n = n / 2;
      }
    }
  }
}
console.log(power(4));
