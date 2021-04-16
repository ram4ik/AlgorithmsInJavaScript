function fizzBuzz(i) {
    if (i % 15 === 0) {
        return 'FizzBuzz'
    } else if (i % 3 === 0) {
        return 'Fizz'
    } else if (i % 5 === 0) {
        return 'Buzz'
    } else {
        return i
    }
}
  
describe('Fizz Buzz', () => {
    it('should return Buzz', () => {
      expect(fizzBuzz(5)).to.equal("Buzz")
    })
    it('should return Fizz', () => {
        expect(fizzBuzz(3)).to.equal("Fizz")
    })
    it('should return FizzBuzz', () => {
        expect(fizzBuzz(15)).to.equal("FizzBuzz")
    })
    it('should return Buzz', () => {
        expect(fizzBuzz(10)).to.equal("Buzz")
    })
    it('should return Fizz', () => {
        expect(fizzBuzz(42)).to.equal("Fizz")
    })
    it('should return 7', () => {
        expect(fizzBuzz(7)).to.equal(7)
    })
  })