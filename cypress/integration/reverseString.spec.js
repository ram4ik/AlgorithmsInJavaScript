function reverseString(str) {
    var splitedString = str.split('')
    var tempArr = []
    for (let i = splitedString.length; i >= 0; i--) {
        tempArr.push(splitedString[i])
    }
    return tempArr.join('')
};

function reverseShort(str) {
    return str.split('').reverse().join('')
};

describe('reverseString', () => {
    it('should return true', () => {
        expect(reverseString('apple')).to.equal('elppa')
    })
    it('should return true', () => {
        expect(reverseString('hello')).to.equal('olleh')
    })
    it('should return true', () => {
        expect(reverseString('Greetings!')).to.equal('!sgniteerG')
    })
});

describe('reverseString', () => {
    it('should return true', () => {
        expect(reverseShort('apple')).to.equal('elppa')
    })
    it('should return true', () => {
        expect(reverseShort('hello')).to.equal('olleh')
    })
    it('should return true', () => {
        expect(reverseShort('Greetings!')).to.equal('!sgniteerG')
    })
});