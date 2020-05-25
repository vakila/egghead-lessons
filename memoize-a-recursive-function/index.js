function fib(n) {
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
};

function memoFib(n) {
  if (!memoFib.cache) memoFib.cache = {};
  
  if (!memoFib.cache[n]) {
    let result;
    
    if (n === 0 || n === 1) result = n;
    else result = memoFib(n - 1) + memoFib(n - 2);
    
    memoFib.cache[n] = result;
  }
  
  return memoFib.cache[n];
};

console.time('unmemoized');
console.log('unmemoized', fib(30));
console.timeEnd('unmemoized');

console.time('memoized');
console.log('memoized', memoFib(30));
console.timeEnd('memoized');
