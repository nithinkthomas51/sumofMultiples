let findSum = () => {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    alert(`Sum of all natural numbers below 1000 that are divisible by 3 or 5 is ${sum}`);
}