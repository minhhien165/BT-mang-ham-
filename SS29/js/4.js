function demSoLanXuatHien(chuoi, kyTu) {
    let soLanXuatHien = 0;

    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === kyTu) {
            soLanXuatHien++;
        }
    }

    return soLanXuatHien;
}

let chuoi = prompt("Nhập vào một chuỗi:");
let kyTu = prompt("Nhập vào một ký tự:");

let ketQua = demSoLanXuatHien(chuoi, kyTu);
console.log("Số lần xuất hiện của ký tự '" + kyTu + "' trong chuỗi là: " + ketQua);