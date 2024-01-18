let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenArray = [];
let oddArray = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenArray.push(arr[i]);
    } else {
        oddArray.push(arr[i]);
    }
}
console.log("Mảng số chẵn:");
console.log(evenArray);

console.log("Mảng số lẻ:");
console.log(oddArray);