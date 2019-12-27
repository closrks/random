/**
 * @param {number[]} nums
 * @param {number} total
 * @return {number[]}
 */
const twoSum = (arr, total) => {
    let result = [];

    // Solution here
    // bruteforce solution O(n^2)
    // for (let i = 0; i < arr.length - 1; i++) {
    //     for (let j = i+1; j < arr.length; j++) {
    //         if ((arr[i] + arr[j]) === total) {
    //             result.push([arr[i], arr[j]]);
    //         }
    //     }
    // }

    // better solution O(Cn^2)
    // sorted array low ... high
    // pick index 0 and index last > total dismiss last
    // pick index 0 and index last < total dismiss first
    // pick index 0 and index last = total select
    // let i = 0;
    // let j = arr.length - 1;
    // while (i < j) {
    //     if ((arr[i] + arr[j]) > total) {
    //         j--;
    //     } else if ((arr[i] + arr[j]) < total) {
    //         i++;
    //     } else {
    //         result.push([arr[i], arr[j]]);
    //         j--;
    //         i++;
    //     }
    // }

    // best solution
    // O(n)
    // greedy keep track of previous array values
    const previousNumbers = {};
    previousNumbers[arr[0]] = false;
    for (let i = 1; i < arr.length; i++) {
        if (previousNumbers[total - arr[i]] === false) {
            previousNumbers[total - arr[i]] = true;
            result.push([total - arr[i], arr[i]]);
        }
        previousNumbers[arr[i]] = false;
    }

    return result;
};

console.log('output:  [1, 3]', twoSum([1, 2, 3], 4));
console.log('output: [9, 12]', twoSum([3, 9, 12, 20], 21));
console.log('output: [9, 12], [1, 20]', twoSum([1, 3, 9, 12, 20], 21));