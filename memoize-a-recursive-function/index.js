function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n-1);
};


function memoizedFactorial(n) {
  if (!memoizedFactorial.cache) memoizedFactorial.cache = {};
  
  if (!memoizedFactorial.cache[n]) {
    let result;
    
    if (n === 0) { result = 1; }
    else { result = n * memoizedFactorial(n-1); }
    
    memoizedFactorial.cache[n] = result;
  }
  
  return memoizedFactorial.cache[n];
};


console.time('unmemoized');
factorial(500);
console.timeEnd('unmemoized');

console.time('memoized');
memoizedFactorial(500);
console.timeEnd('memoized');
