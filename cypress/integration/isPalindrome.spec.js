function isPalindrome(string) {
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    var lettersArr = [];
    charactersArr.forEach(char => {
      if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });
    
    return lettersArr.join('') === lettersArr.reverse().join('');
  }

const p1 = "Madam, I'm Adam"
const p2 = 'My gym'
const p3 = 'Red rum, sir, is murder'
const p4 = 'Step on no pets'
const p5 = 'Top spot'
const p6 = 'No lemon, no melon'

describe('harmlessRansomNote', () => {
    it('should return true', () => {
        expect(isPalindrome(p1)).to.equal(true)
    })
    it('should return true', () => {
        expect(isPalindrome(p2)).to.equal(true)
    })
    it('should return true', () => {
        expect(isPalindrome(p3)).to.equal(true)
    })
    it('should return true', () => {
        expect(isPalindrome(p4)).to.equal(true)
    })
    it('should return true', () => {
        expect(isPalindrome(p5)).to.equal(true)
    })
    it('should return true', () => {
        expect(isPalindrome(p6)).to.equal(true)
    })
    it('should return false', () => {
        expect(isPalindrome('san francisco')).to.equal(false)
    })
})   