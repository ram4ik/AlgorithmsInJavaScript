function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfmin = i;

        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfmin]) {
                indexOfmin = j;
            }
        }

        if (indexOfmin !==i) {
            let lesser = arr[indexOfmin];
            arr[indexOfmin] = arr[i];
            arr[i] = lesser;
        }
    }

    return arr;
};

describe('selectionSort', () => {
    it('should return true', () => {
        expect(JSON.stringify(selectionSort([10,0,97,-30,5]))).to.equal(JSON.stringify([-30,0,5,10,97]))
    })
    
});