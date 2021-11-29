/////// Khai báo function trong Javascript
// Cú pháp
// function yeare_of_function(let1, let2, let3) {

//// code here
// }

/*
Trong đó:
- function: là từ khóa của JS sử dụng cho việc khai báo, định nghĩa 1 hàm.
- yeare_of_function: là tên của hàm, thông thường khi đặt tên hàm. Chúng ta đặt tên sao có đúng ý nghĩa,
mục đích của hàm.
- let1, let2, let3: Là các tham số truyền vào trong hàm.
*/

//// VD: Hàm kiểm tra số chẵn lẻ.
// function check_number(number) {
//   if (number % 2 == 0) {
//     alert(number + ' là số chẵn');
//   }
//   else {
//     alert(number + ' là số lẻ');
//   }
// }


//// Cách gọi hàm trong Javascript
// Để gọi hàm thì ta chỉ cần gọi tới tên hàm và truyền vào tham số cần thiết.
// VD: gọi hàm check_number 5 lần dưới đây


// check_number(1)
// check_number(2)
// check_number(3)
// check_number(4)
// NX:Hàm check_number đã tạo có 1 tham số truyền vào là number. Như vậy khi sử dụng, truyền số 1 vào hàm
// thì lúc này biến number trong hàm sẽ có giá trị tương ứng là 1, tương tự cho 2,3,4..


////// Hàm có return và không có return trong Javascript 
/**
 * Hàm có return là hàm có sử dụng từ khóa return để đặt ở cuối hàm với mục đích
 * trả kết quả về để sử dụng tiếp ở những đoạn code bên ngoài.
 *
 *
 * Ví dụ ta cần viết một hàm tính tổng của hai số a và b
 * thì hàm này phải trả về giá trị là tổng của hai số a, b
 */

// function tong(a, b) {
//   // trả về kết quả là a + b
//   return a + b;
// }


// // ứng dụng với hàm
// let so1 = 1;
// let so2 = 2;
// let ketQua = tong(so1, so2);
// console.log(ketQua);
// alert("Kết quả là: " + ketQua)


/**
 * Hàm không có return là hàm không có sử dụng từ khóa return đặt trong hàm.
 *
 * VD: Viết hàm (chuong trình) tính in ra tổng 2 số a,b
 *
 */

// function tongKhongReturn(a, b) {
//   alert("kết quả 2 số là: " + a + b);
// }

// //sử dụng;
// let a = 1;
// let b = 2;
// // truyền tham số a,b vào hàm
// tongKhongReturn(a, b);


//////  Ứng dụng về hàm với bài toán kiểm tra năm nhuận. 
// Bài giải:
// khai báo hàm
function kiem_tra_year_nhuan(year) {
  // nếu năm chia hết cho 100
  // thì kiểm tra nó có chia hết cho 400 hay không
  if (year % 100 == 0) {
    // nêu chia hết cho 400 thì là năm nhuận
    if (year % 400 == 0) {
      return true;
    }
    else { // ngược lại không phải năm nhuận
      return false;
    }
  }
  else if (year % 4 == 0) { // trường hợp chia hết cho 4 thì là năm nhuận
    return true;
  }
  else { // cuối cùng trường hợp không phải năm nhuận
    return false;
  }
}
// sử dụng
let flag = kiem_tra_year_nhuan(2022);

if (flag) {
  alert('là năm nhuận');
}
else {
  alert('không phải là năm nhuận');
}



//// Giới thiệu thêm về các hàm có sẵn trong JS: toFixed, toString(), indexOf(), length(), toLowerCase(), toUpperCase()

