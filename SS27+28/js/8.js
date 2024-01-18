let inputArray = [1, 2, 1, 3, 4, "f"];

let distinctArray = [];

for (let i = 0; i < inputArray.length; i++) {
    let isDistinct = true;
    for (let j = 0; j < distinctArray.length; j++) {
        if (inputArray[i] === distinctArray[j]) {
            isDistinct = false;
            break;
        }
    }

    if (isDistinct) {
        distinctArray.push(inputArray[i]);
    }
}

console.log(distinctArray);