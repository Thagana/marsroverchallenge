import marsRover from '../../src/helpers/marsmission';

describe('Test sample test cases', () => {

    it('Should pass for test case 1', () => {
        const position = "1 2 N";
        const instructions = "LMLMLMLMM";

        const rover = marsRover(position, instructions);
        expect(rover.x).toBe(1)
        expect(rover.y).toBe(3)

    }, 5000);
    
    it('Should pass for test case 2', () => {
        const position = "3 3 E";
        const instructions = "MMRMMRMRRM";

        const rover = marsRover(position, instructions);
        expect(rover.x).toBe(5)
        expect(rover.y).toBe(1)
    
    }, 5000);
})