// Bài tập 1
document.querySelector('#bt1').onclick = function () {
    var soNgay = document.getElementById('txt-soNgay').value * 1;
    var tienLuong = soNgay * 100000;
    document.getElementById('ketQua1').innerHTML = ` Tiền lương của bạn là: ${tienLuong} VNĐ`
}

// Bài tập 2
document.querySelector('#bt2').onclick = function () {
    var soThu1 = document.getElementById('txt-soThu1').value * 1;
    var soThu2 = document.getElementById('txt-soThu2').value * 1;
    var soThu3 = document.getElementById('txt-soThu3').value * 1;
    var soThu4 = document.getElementById('txt-soThu4').value * 1;
    var soThu5 = document.getElementById('txt-soThu5').value * 1;
    var trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
    document.getElementById('ketQua2').innerHTML = ` Giá trị trung bình của 5 số là: ${trungBinh}`;
}

// Bài tập 3
document.querySelector('#bt3').onclick = function () {
    const VND = 23500;
    var soUSD = document.getElementById('txt-soUSD').value * 1;
    var quyDoi = soUSD * VND;
    document.getElementById('ketQua3').innerHTML = ` Số tiền quy đổi là: ${quyDoi} VND`;
}

// Bài tập 4
document.querySelector('#bt4').onclick = function () {
    var chieuDai = document.getElementById('txt-chieuDai').value * 1;
    var chieuRong = document.getElementById('txt-chieuRong').value * 1;
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById('ketQua4').innerHTML = ` Diện tích: ${dienTich}. Chu vi: ${chuVi}`;
}

// Bài tập 5
document.querySelector('#bt5').onclick =  function () {
    var soNhap = document.getElementById('txt-soNhap').value * 1;
    var phanDu = soNhap % 10;
    soNhap = soNhap - phanDu
    var phanNguyen = soNhap / 10;
    var tinhTong = phanDu + phanNguyen;
    document.getElementById('ketQua5').innerHTML = ` Tổng 2 ký số là: ${tinhTong}`;
}