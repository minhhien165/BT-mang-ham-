let arr = [1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 9];

let uniqueElement = null;

for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let isUnique = true;

    for (let j = 0; j < arr.length; j++) {
        if (i !== j && currentElement === arr[j]) {
            isUnique = false;
            break;
        }
    }

    if (isUnique) {
        uniqueElement = currentElement;
        break;
    }
}

if (uniqueElement !== null) {
    console.log("Phần tử đầu tiên là duy nhất: " + uniqueElement);
} else {
    console.log("Không có phần tử nào là duy nhất trong mảng.");
}