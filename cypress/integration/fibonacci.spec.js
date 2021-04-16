function fibonacci(position) {
    if (position < 3) return 1;
    else return fibonacci(position - 1) + fibonacci(position - 2);
  }

describe('fibonacci', () => {
    it('should return true', () => {
        expect(fibonacci(6)).to.equal(8);
    })
    it('should return true', () => {
        expect(fibonacci(7)).to.equal(13);
    })
});