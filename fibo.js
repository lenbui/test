function fibo(n) {
    if (n > 1)
        return fibo(n - 1) + fibo(n - 2);
    else
        return 1;
}

console.log(fibo(8));
console.log(fibo(10));