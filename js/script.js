function secondlargest(numbers) {
    let Largest = -Infinity;
    let secondlargest = -Infinity;

    for ( let i = 0; i < numbers.length; i++) {
        if (numbers[i] > Largest) {
            secondlargest = Largest;
            Largest = numbers[i];
        } else if (numbers[i] > secondlargest && numbers[i] !== Largest) {
            secondlargest = numbers[i];
        }
    }

    return secondlargest;
}


let input = [10, 5, 20, 8, 12];
console.log(secondlargest(input)); // 12