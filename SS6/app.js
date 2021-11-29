// Giới thiệu về 3 vòng lặp cơ bản: while, do-while, for

////// Vòng lặp while
// let i = 0;
// while (i <= 10) {
//   console.log("i: ", i);
//   i= i +1;
// }

////// Vòng lặp do - while: tương tự giống while nhưng cho phép lặp lần đầu tiên
// let i = 0;
// do {
//   console.log("i", i);
//   i++;
// }
// while (i <= 10);


////// Vòng lặp for:
// for (let i = 0; i <= 10; i++) {
//   console.log("i", i);
// }



////// Giới thiệu về Array (mảng)

//// Khai báo Array

// Khai báo mảng rỗng
// let arr =[]

//Khai báo mảng chứa n phần tử có sẵn
// let arr = [1, 2, 'hi', 3, 4];

//// Kiểm tra kiểu dữ liệu Array
// let arr = []
// console.log(Array.isArray(arr));  //=> true (arr là kiểu dl Array) || false (arr không phải kiểu dữ liệu Array)



//// Truy xuất dữ liệu vào Array và in ra từng phần tử
// // length: là phương thức đi kèm của kiểu dữ liệu Array => dùng để đếm số phần tử trong mảng
// let arr = [1, 2, 'hi', 3, 4];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   //=>Tại trong vòng lặp này, ta có thể thay đổi giá trị từng phần tử mảng như là 1 biến (variable). 
//   //=> VD: arr[i] = "fix"  (với i: là vị trí phần tử trong mảng).
// }

////// Giới thiệu về Object


//// Khai báo object

// Khai báo object rỗng
// let obj = {};

// Khai báo object có giá trị
// let obj = {
//   name: "john",
//   age: 30,
//   address: "Ha Noi",
// }


//// Truy xuất object 
// let obj = {
//   name: "john"
// }
// console.log(obj.name); 
// //=>Tại đây, để thay đổi value của name: ta chỉ cần dùng cú pháp gán "=" với giá trị khác.


//// xóa 1 giá trị của object: Sử dụng cú pháp delete.

// delete obj.name