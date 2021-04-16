function merge2(left, right) {
    const results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}

function mergeSort2(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge2(mergeSort2(left), mergeSort2(right))
}

describe('mergeSort2', () => {
    it('should return true', () => {
        expect(JSON.stringify(mergeSort2([92, -30, 69, 42]))).to.equal(JSON.stringify([-30, 42, 69, 92]))
    })
    it('should return true', () => {
        expect(JSON.stringify(mergeSort2([1002, -89, -30, 69, 42]))).to.equal(JSON.stringify([-89, -30, 42, 69, 1002]))
    })
});