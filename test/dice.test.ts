import { describe, it } from 'mocha';
import { expect } from 'chai';
import { D4, D10, D6, D12, D20 } from '../utils/dice';

describe('Dice', () => {
    describe('D4', () => {
        it('should return a number between 1 and 4', () => {
            const expectedResults = [1,2,3,4];
            const result = D4.roll();
            expect(expectedResults).to.include(result);
        });
    });
    describe('D6', () => {
        it('should return a number between 1 and 6', () => {
            const expectedResults = [1,2,3,4,5,6];
            const result = D6.roll();
            expect(expectedResults).to.include(result);
        });
    });
    describe('D10', () => {
        it('should return a number between 1 and 10', () => {
            const expectedResults = [1,2,3,4,5,6,7,8,9,10];
            const result = D10.roll();
            expect(expectedResults).to.include(result);
        });
    });
    describe('D12', () => {
        it('should return a number between 1 and 12', () => {
            const expectedResults = [1,2,3,4,5,6,7,8,9,10];
            const result = D10.roll();
            expect(expectedResults).to.include(result);
        });
    });
    describe('D20', () => {
        it('should return a number between 1 and 20', () => {
            const expectedResults = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
            const result = D10.roll();
            expect(expectedResults).to.include(result);
        });
    });
});
