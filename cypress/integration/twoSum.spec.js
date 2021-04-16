function twoSum(numArray, sum) {
    var pairs = [];
    var hashTable = [];
    for (var i = 0; i < numArray.length; i++) {
      var currNum = numArray[i];
      var counterpart = sum - currNum;
      if (hashTable.indexOf(counterpart) !== -1) {
        pairs.push([ currNum, counterpart ]);
      }
      hashTable.push(currNum);
    }
    
    return pairs;
  }

describe('twoSum', () => {
    it('should return true', () => {
        expect(JSON.stringify(twoSum([1, 6, 4, 5, 3, 3], 7))).to.equal(JSON.stringify([[6,1],[3,4],[3,4]]));
    })
    it('should return true', () => {
        expect(JSON.stringify(twoSum([1, 6, 4, 5, 3, 3], 8))).to.equal(JSON.stringify([[3,5],[3,5]]));
    })
    it('should return true', () => {
        expect(JSON.stringify(twoSum([21, 6, 40, 5, 2, 21], 42))).to.equal(JSON.stringify([[2,40],[21,21]]));
    })
});