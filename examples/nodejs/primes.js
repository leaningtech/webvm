(function () {

function isPrime(p) {
    const upper = Math.sqrt(p);
    for(let i = 2; i <= upper; i++) {
        if (p % i === 0 ) {
            return false;
        }
    }
    return true;
}

// Return n-th prime
function prime(n) {
    if (n < 1) {
        throw Error("n too small: " + n);
    }
    let count = 0;
    let result = 1;
    while(count < n) {
        result++;        
        if (isPrime(result)) {
            count++;
        }
    }
    return result;
}

console.log("your prime is ", prime(100000));

}());
