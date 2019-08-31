import { describe, it } from 'mocha';
import { expect } from 'chai';
import { D4, D10, D6, D12, D20 } from '../utils/dice';

const testDice = (expectedResults:number[], result:number) => () => {
    expect(expectedResults).to.include(result);
};

describe('Dice', () => {
    describe('D4', () => {
        it(
            'should return a number between 1 and 4',
            testDice([1,2,3,4], D4.roll())
        );
    });
    describe('D6', () => {
        it(
            'should return a number between 1 and 6',
            testDice([1,2,3,4,5,6], D6.roll())
        );
    });
    describe('D10', () => {
        it(
            'should return a number between 1 and 10',
            testDice([1,2,3,4,5,6,7,8,9,10], D10.roll())
        );
    });
    describe('D12', () => {
        it(
            'should return a number between 1 and 12',
            testDice([1,2,3,4,5,6,7,8,9,10,11,12], D12.roll())
        );
    });
    describe('D20', () => {
        it(
            'should return a number between 1 and 20',
            testDice([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], D20.roll())
        );
    });
});
