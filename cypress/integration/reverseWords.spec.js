function reverseWords(string) {
    var wordsArr = string.split(' ');
    var reversedWordsArr = [];
    
    wordsArr.forEach(word => {
      var reversedWord = '';
      for (var i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
      };
      reversedWordsArr.push(reversedWord);
    });
    
    return reversedWordsArr.join(' ');
  }

describe('reverseWords', () => {
    it('should return true', () => {
        expect(reverseWords('Coding JavaScript')).to.equal('gnidoC tpircSavaJ')
    })
    it('should return true', () => {
        expect(reverseWords('San Francisco')).to.equal('naS ocsicnarF')
    })
});