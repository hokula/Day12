function sumFibonacci(num) {
  if (num < 0) {
    return 0;
  } else {
    var fib = [1, 1, 2, 3, 5, 8];
    for (var i = 0; i <= num; i++) {
      if(fib[i] + fib[i + 1] <=num) { 
      fib.push(fib[i] + fib[i + 1]);
    }
    }
    return fib[num];
  }
}
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));

module.exports = sumFibonacci;
