import { describe, it } from 'mocha';
import { expect } from 'chai';
import { D4, D6, D8, D10, D12, D20, D100 } from '../utils/dice';
import { range, curry } from 'lodash';

const testDice = (expectedResults:number[], result:number) => () => {
    expect(expectedResults).to.include(result);
};
const inclusiveRange = curry((increment:number, start: number, end: number) => range(start, end + 1, increment));
const inclusiveRangeBetweenOneAnd = inclusiveRange(1, 1);

describe('Dice', () => {
    describe('D4', () => {
        it(
            'should return a number between 1 and 4',
            testDice(inclusiveRangeBetweenOneAnd(4), D4.roll())
        );
    });
    describe('D6', () => {
        it(
            'should return a number between 1 and 6',
            testDice(inclusiveRangeBetweenOneAnd(6), D6.roll())
        );
    });
    describe('D8', () => {
       it(
           'should return a number between 1 and 8',
           testDice(inclusiveRangeBetweenOneAnd(8), D6.roll())
       );
    });
    describe('D10', () => {
        it(
            'should return a number between 1 and 10',
            testDice(inclusiveRangeBetweenOneAnd(10), D10.roll())
        );
    });
    describe('D12', () => {
        it(
            'should return a number between 1 and 12',
            testDice(inclusiveRangeBetweenOneAnd(12), D12.roll())
        );
    });
    describe('D20', () => {
        it(
            'should return a number between 1 and 20',
            testDice(inclusiveRangeBetweenOneAnd(20), D20.roll())
        );
    });
    describe('D100', () => {
        it(
            'should return a number between 10 and 100, incremented by 10',
            testDice(inclusiveRangeBetweenOneAnd(100), D100.roll())
        )
    });
});
