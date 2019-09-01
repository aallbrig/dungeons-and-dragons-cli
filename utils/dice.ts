import { curry, random } from 'lodash';

interface Dice {
    roll: () => number
}
const getRandomValueBetween = curry((start:number, end:number) => () => random(start, end));
const getRandomValueBetweenOneAnd = getRandomValueBetween(1);

export const D4:Dice = {
    roll: getRandomValueBetweenOneAnd(4)
};
export const D6:Dice = {
    roll: getRandomValueBetweenOneAnd(6)
};
export const D8:Dice = {
    roll: getRandomValueBetweenOneAnd(8)
};
export const D10:Dice = {
    roll: getRandomValueBetweenOneAnd(10)
};
export const D12:Dice = {
    roll: getRandomValueBetweenOneAnd(12)
};
export const D20:Dice = {
    roll: getRandomValueBetweenOneAnd(20)
};
export const D100:Dice = {
    roll: () => D10.roll() * 10
};
