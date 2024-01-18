function inPhanTuCoDoDaiLonNhat(arr) {
    if (arr.length === 0) {
        console.log("Mảng rỗng, không có phần tử.");
        return;
    }

    let phanTuLonNhat = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > phanTuLonNhat.length) {
            phanTuLonNhat = arr[i];
        }
    }

    console.log("Phần tử có độ dài lớn nhất trong mảng là: " + phanTuLonNhat);
}

let mang = ["apple", "banana", "orange", "kiwi", "grape"];

inPhanTuCoDoDaiLonNhat(mang);