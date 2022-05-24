import request from 'supertest';
import app from '../../src/app';


describe('Test sample test cases', () => {
    it('Should pass for test case 1', async () => {
        const response = await request(app)
        const send = await response.post('/commands').send({
            "position": "1 2 N",
            "instrunctions": "LMLMLMLMM"
        }).set('Accept', 'application/json');
        expect(send.body.data.x).toBe(1);
        expect(send.body.data.y).toBe(3);
        expect(send.body.data.direction).toBe('N');
    
    }, 5000);
    
    it('Should pass for test case 2', async () => {
        const response = await request(app)
        const send = await response.post('/commands').send({
            "position": "3 3 E",
            "instrunctions": "MMRMMRMRRM"
        }).set('Accept', 'application/json');
        expect(send.body.data.x).toBe(5);
        expect(send.body.data.y).toBe(1);
        expect(send.body.data.direction).toBe('E');
    
    }, 5000);
})