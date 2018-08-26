exports.getSum = function(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr)
}