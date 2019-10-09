import { curry, random } from 'lodash';

type ExecuteRoll = () => number;
type RollFn = (start:number, end:number) => ExecuteRoll;
type Dice = {
    roll: ExecuteRoll
};

export const roll:RollFn = (s, e) => () => random(s, e);
export const getRandomValueBetween = curry(roll);
export const getRandomValueBetweenOneAnd = getRandomValueBetween(1);

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
    roll: getRandomValueBetweenOneAnd(100)
};
