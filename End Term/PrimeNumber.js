function checkPrime() {
    let num = parseInt(document.getElementById("num").value);
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i ===0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        document.getElementById("result").innerHTML =
            num + " is a Prime Number.";
    } else {
        document.getElementById("result").innerHTML =
            num + " is Not a Prime Number.";
    }
}