function hasTwoCubeSums(n) {
    let sums = new Map();
    for (let a = 1; a * a * a < n; a++) {
        for (let b = a + 1; a * a * a + b * b * b <= n; b++) {
            let cubeSum = a ** 3 + b ** 3;
            if (cubeSum === n) {
                if (sums.has(cubeSum)) {
                    return true;
                }
                sums.set(cubeSum, [a, b]);
            }
        }
    }
    return false;
}