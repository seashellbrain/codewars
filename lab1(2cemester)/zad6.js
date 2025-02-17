function toWeirdCase(str) {
    return str.split(' ')
        .map(w => w.split('')
            .map((c, i) => i % 2 ? c.toLowerCase() : c.toUpperCase())
            .join('')
        )
        .join(' ');
}
