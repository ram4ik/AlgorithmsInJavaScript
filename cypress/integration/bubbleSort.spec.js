function bubbleSort(array) {
    for (var i = array.length; i > 0; i--) {
      for (var j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    
    return array;
}

describe('binarySearch', () => {
    it('should return true', () => {
        expect(JSON.stringify(bubbleSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]))).to.equal(JSON.stringify([1,3,9,34,198,200,203,746,764,984,6000]));
    })
    
});