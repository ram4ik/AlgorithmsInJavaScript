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

function reverseRange(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed
    }

    return reversed;
}

function reverseReduce(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

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

describe('reverseString', () => {
    it('should return true', () => {
        expect(reverseRange('apple')).to.equal('elppa')
    })
    it('should return true', () => {
        expect(reverseRange('hello')).to.equal('olleh')
    })
    it('should return true', () => {
        expect(reverseRange('Greetings!')).to.equal('!sgniteerG')
    })
});

describe('reverseString', () => {
    it('should return true', () => {
        expect(reverseReduce('apple')).to.equal('elppa')
    })
    it('should return true', () => {
        expect(reverseReduce('hello')).to.equal('olleh')
    })
    it('should return true', () => {
        expect(reverseReduce('Greetings!')).to.equal('!sgniteerG')
    })
});