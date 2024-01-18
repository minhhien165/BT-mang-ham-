let arr = [5, 2, 8, 1, 7, 3, 6, 4];

for (let i = arr.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    
    let temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
}

console.log("Mảng sau khi sắp xếp theo thứ tự ngẫu nhiên:");
console.log(arr);
