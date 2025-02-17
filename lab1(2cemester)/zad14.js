function longest(arr, n) {
    let ranked = arr.map((el, i) => ({ el, i }))
                    .sort((a, b) => b.el.length - a.el.length || a.i - b.i);
    return ranked[n - 1].el;
}