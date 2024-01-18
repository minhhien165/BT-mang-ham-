let userInput = prompt("Nhập vào một chuỗi bất kỳ:");

let substrings = [];

for (let i = 0; i < userInput.length; i++) {
    let currentSubstring = "";
    for (let j = i; j < userInput.length; j++) {
        currentSubstring += userInput[j];
        substrings.push(currentSubstring);
    }
}

console.log(substrings);