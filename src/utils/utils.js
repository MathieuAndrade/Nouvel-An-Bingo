function getRandom(arr, n) {
    let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    while (n--) {
        let x = Math.floor(Math.random() * len);
        result[n] = {value: arr[x in taken ? taken[x] : x], checked: false};
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

export {
    getRandom
}
