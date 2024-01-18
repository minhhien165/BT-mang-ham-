let arr = [1, 3, 4, 23, 13, 11, 8, 6];
let PTLN = arr[0];
let PTNN = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
    if (PTLN < arr[i + 1]) {
        PTLN = arr[i + 1];
    }
    if (PTNN > arr[i + 1]) {
        PTNN = arr[i + 1];
    }
}

console.log("Phần tử lớn nhất: " + PTLN);
console.log("Phần tử nhỏ nhất: " + PTNN);
