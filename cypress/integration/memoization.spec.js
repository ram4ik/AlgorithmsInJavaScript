const makeChange = (coins, amount) => {
    coins.sort((a, b) => b - a);
    let coinTotal = 0;
    let i = 0;
    while (amount > 0) {
        if (coins[i] <= amount) {
            amount -= coins[i];
            coinTotal++;
        } else {
            i++;
        }
    }
    return coinTotal;
};

describe('makeChange', () => {
    it('should return true', () => {
        expect(makeChange([5, 10, 25], 50)).to.equal(2)
    })
    it('should return true', () => {
        expect(makeChange([5, 10, 25], 100)).to.equal(4)
    })
    it('should return true', () => {
        expect(makeChange([5, 10, 25], 125)).to.equal(5)
    })
    it('should return true', () => {
        expect(makeChange([5, 10, 25], 120)).to.equal(6)
    })
});