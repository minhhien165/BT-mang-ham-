let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 !== 0) {
        arr.splice(i, 1);
    }
}
console.log("Mảng mới sau khi loại bỏ các phần tử lẻ:");
console.log(arr);