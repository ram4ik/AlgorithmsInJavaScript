function sieveOfEratosthenes(n) {
    var primes = [];
    for (var i = 0; i <= n; i++) {
      primes[i] = true;
    }
    
    primes[0] = false;
    primes[1] = false;
    
    for (var i = 2; i <= Math.sqrt(n); i++) {
      for (var j = 2; i * j <= n; j++) {
        primes[i * j] = false;
      }
    }
    
    var result = [];
    for (var i = 0; i < primes.length; i++) {
      if (primes[i]) result.push(i);
    }
    
    return result;
  }

describe('binarySearch', () => {
    it('should return true', () => {
        expect(JSON.stringify(sieveOfEratosthenes(49))).to.equal(JSON.stringify([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]));
    })
    it('should return true', () => {
        expect(JSON.stringify(sieveOfEratosthenes(42))).to.equal(JSON.stringify([2,3,5,7,11,13,17,19,23,29,31,37,41]));
    })
    it('should return true', () => {
        expect(JSON.stringify(sieveOfEratosthenes(21))).to.equal(JSON.stringify([2,3,5,7,11,13,17,19]));
    })
});