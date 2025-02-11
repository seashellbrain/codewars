function findMissing(list) {
    let n = list.length;
    let step = (list[n - 1] - list[0]) / n;

    for (let i = 0; i < n - 1; i++) {
        if (list[i] + step !== list[i + 1]) {
            return list[i] + step;
        }
    }
    

  return list[0];
}