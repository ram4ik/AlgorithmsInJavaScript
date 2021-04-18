function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(reversed) * Math.sign(n);
};

describe('reverseInt', () => {
    it('should return true', () => {
        expect(reverseInt(42)).to.equal(24)
    })
    it('should return true', () => {
        expect(reverseInt(0)).to.equal(0)
    })
    it('should return true', () => {
        expect(reverseInt(-10)).to.equal(-1)
    })
    it('should return true', () => {
        expect(reverseInt(-42)).to.equal(-24)
    })
});