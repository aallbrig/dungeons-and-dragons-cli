interface Dice {
    roll: () => number
}
const getRandomValueBetween = (start:number) => (end:number) => () => start + Math.ceil(Math.random() * end);
const getRandomValueBetweenZeroAnd = getRandomValueBetween(0);
export const D4:Dice = {
    roll: getRandomValueBetweenZeroAnd(4)
};
export const D6:Dice = {
    roll: getRandomValueBetweenZeroAnd(6)
};
export const D10:Dice = {
    roll: getRandomValueBetweenZeroAnd(10)
};
export const D12:Dice = {
    roll: getRandomValueBetweenZeroAnd(12)
};
export const D20:Dice = {
    roll: getRandomValueBetweenZeroAnd(20)
};
