let a = parseInt(prompt("Nhập số nguyên a:"));
let b = parseInt(prompt("Nhập số nguyên b:"));

let numbersInRange = [];

let start = Math.min(a, b);
let end = Math.max(a, b);

for (let i = start; i <= end; i++) {
    numbersInRange.push(i);
}

console.log("Các số trong khoảng giữa " + a + " và " + b + " là:");
console.log(numbersInRange);


