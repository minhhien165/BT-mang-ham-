function demSoKyTu(chuoi) {
    let soKyTu = 0;

    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] !== ' ') {
            soKyTu++;
        }
    }

    return soKyTu;
}

let chuoiDaKhaiBao = "Hello World!";

let ketQua = demSoKyTu(chuoiDaKhaiBao);
console.log("Số ký tự trong chuỗi là: " + ketQua);