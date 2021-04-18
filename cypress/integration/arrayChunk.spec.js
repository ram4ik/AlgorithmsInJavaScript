function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
};

describe('chunk', () => {
    it('should return true', () => {
        expect(JSON.stringify(chunk([1,2,3,4,5], 4))).to.equal(JSON.stringify([[1,2,3,4],[5]]));
    })
    it('should return true', () => {
        expect(JSON.stringify(chunk([1,2,3,4,5], 2))).to.equal(JSON.stringify([[1,2],[3,4],[5]]));
    })
    it('should return true', () => {
        expect(JSON.stringify(chunk([1,2,3,4,5], 9))).to.equal(JSON.stringify([[1,2,3,4,5]]));
    })
});