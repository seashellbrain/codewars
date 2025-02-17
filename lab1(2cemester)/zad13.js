function longest(arr, n) {
    let sortedArr = arr
        .map((word, index) => ({ word, index }))
        .sort((a, b) => b.word.length - a.word.length || a.index - b.index);
    
    return sortedArr[n - 1].word;
}