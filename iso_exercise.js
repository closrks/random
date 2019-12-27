const FAIR_MARKET_VALUE = /*value*/;
const TAX_RATE = /*value*/;

// purchase plan
const optionGrants = [
    [/* shares, strike */]
];

const getOrdinaryIncomeTax = (exercisableOptions = 0, strikePrice = 0) => {
    return ((FAIR_MARKET_VALUE - strikePrice) * exercisableOptions) * TAX_RATE;
};

const getExercisePrice = (exercisableOptions = 0, strikePrice = 0) => {
    return strikePrice * exercisableOptions;
};

const getTotalCost = (optionGrants, scope) => {
    return optionGrants.filter((v) => v).reduce((totalCost, optionGrant) => {
        const [exercisableOptions, strikePrice] = optionGrant;
        totalCost += scope(exercisableOptions, strikePrice);
        return totalCost
    }, 0);
}

console.log("Cost I pay now: ", getTotalCost(optionGrants, getExercisePrice));
console.log("Cost I pay at tax time: ", getTotalCost(optionGrants, getOrdinaryIncomeTax));
console.log("# of shares: ", optionGrants.reduce((t, v) => { t += v[0]; return t; }, 0));
