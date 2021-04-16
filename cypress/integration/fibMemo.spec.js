function fibMemo(index, cache) {
    cache = cache || [];
    if (cache[index]) return cache[index];
    else {
      if (index < 3) return 1;
      else {
        cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
      }
    }
    return cache[index];
  }

describe('fibMemo', () => {
    it('should return true', () => {
        expect(fibMemo(500)).to.equal(1.394232245616977e+104);
    })
    it('should return true', () => {
        expect(fibMemo(7)).to.equal(13);
    })
    it('should return true', () => {
        expect(fibMemo(42)).to.equal(267914296);
    })
});