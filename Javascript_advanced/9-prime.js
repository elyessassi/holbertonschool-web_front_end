function isprime(n) {
    if (n == 2) {
        return (true)
    }
    else {
        for (let i = 2; i < n; i = i + 1) {
            if (Number.isInteger(n / i)) {
                return (false)
            }
        }
        return (true)
    }
}

function countPrimeNumbers() {
    let primenumbers = 0
    function test() {
        for (let i = 2; i < 101; i = i + 1) {
            if (isprime(i) == true) {
                primenumbers = primenumbers + 1
            }
        }
    }
    test()
    console.log(primenumbers)
}
countPrimeNumbers()
console.log(`Execution time of printing countPrimeNumbers was ${performance.now()} milliseconds.`)
