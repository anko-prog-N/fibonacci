'use strict';
const seqNums = new Map();
seqNums.set(0, 0);
seqNums.set(1, 1);
const length = process.argv[2] || 0;
function fibonacci(n) { 
    if (!seqNums.has(n)) {
        seqNums.set(n, fibonacci(n - 1) + fibonacci(n - 2));
    }
    return seqNums.get(n);
}
for (let i = 0; i < length; i++) {
    console.log(fibonacci(i));
}