function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for(let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
};

describe('maxChar', () => {
    it('should return true', () => {
        expect(maxChar('apple 123111')).to.equal('1')
    })
    it('should return true', () => {
        expect(maxChar('a San Francisco')).to.equal('a')
    })
});