function bubbleSort2(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser; 
            }
        }
    }

    return arr;
};

describe('bubbleSort2', () => {
    it('should return true', () => {
        expect(JSON.stringify(bubbleSort2([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]))).to.equal(JSON.stringify([1,3,9,34,198,200,203,746,764,984,6000]));
    })
    
});