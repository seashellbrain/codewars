function primeFactors(n) {
    let factors = [];
    let divisor = 2;

    while (n >= divisor * divisor) {
        let power = 0;
        while (n % divisor === 0) {
            n /= divisor;
            power++;
        }
        if (power > 0) {
            factors.push(power > 1 ? `(${divisor}**${power})` : `(${divisor})`);
        }
        divisor++;
    }

    if (n > 1) {
        factors.push(`(${n})`);
    }

    return factors.join('');
}
