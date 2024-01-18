function locPhanTuChuaChuoi(mangChuoi, chuoiCanTim) {
    let ketQua = [];

    for (let i = 0; i < mangChuoi.length; i++) {
        if (kiemTraChuoiChuaChuoi(mangChuoi[i], chuoiCanTim)) {
            ketQua.push(mangChuoi[i]);
        }
    }

    return ketQua;
}

function kiemTraChuoiChuaChuoi(chuoi, chuoiCanTim) {
    for (let i = 0; i <= chuoi.length - chuoiCanTim.length; i++) {
        let coChua = true;
        for (let j = 0; j < chuoiCanTim.length; j++) {
            if (chuoi[i + j] !== chuoiCanTim[j]) {
                coChua = false;
                break;
            }
        }
        if (coChua) {
            return true;
        }
    }
    return false;
}

let mangChuoi = ["apple", "banana", "orange", "kiwi", "grape"];

let chuoiNhap = prompt("Nhập vào một chuỗi:");

let ketQua = locPhanTuChuaChuoi(mangChuoi, chuoiNhap);

if (ketQua.length > 0) {
    console.log("Các phần tử chứa chuỗi '" + chuoiNhap + "' trong mảng là:");
    for (let i = 0; i < ketQua.length; i++) {
        console.log(ketQua[i]);
    }
} else {
    console.log("Không có phần tử nào chứa chuỗi '" + chuoiNhap + "' trong mảng.");
}