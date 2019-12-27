// inclusive of min exclusive of max
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const rand5 = () => {
    return getRandomInt(0, 5) + 1;
};

// worst case O(infiniti) if we roll forever and O(1) space
const rand7 = () => {
    while (true) {
        const roll1 = rand5();
        const roll2 = rand5();
    
        // arithmetic of a matrix of columns and rows
        const outcomeNumber = (roll1 - 1) * 5 + (roll2 - 1) + 1;
    
        // if we hit an extraneous
        // outcome we just re-roll
        if (outcomeNumber > 21) continue;

        // return our outcmoe since modulo 7
        return outcomeNumber % 7 + 1;
    }
};

console.log(rand7())