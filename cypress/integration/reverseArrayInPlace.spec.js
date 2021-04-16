function reverseArrayInPlace(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
      var tempVar = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = tempVar;
    }
    
    return arr;
  }

describe('reverseArrayInPlace', () => {
    it('should return true', () => {
        expect(JSON.stringify(reverseArrayInPlace([1,2,3,4,5,6,7,8,9]))).to.equal(JSON.stringify([9,8,7,6,5,4,3,2,1]))
    })
    it('should return true', () => {
        expect(JSON.stringify(reverseArrayInPlace([42,43]))).to.equal(JSON.stringify([43,42]))
    })
});