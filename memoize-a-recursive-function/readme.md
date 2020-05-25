## Memoize a recursive function

### Lesson description
Memoization is a performance optimization that pairs nicely with pure, recursive functions. Memoization lets us "cache" a pure function's return values, so that if we call a memoized function multiple times with the same input, we only have to run the function's (potentially expensive) computation the first time, and store the return value so that it can be quickly retrieved in subsequent calls. In this lesson we refactor a recursive function to use memoization for improved performance.
