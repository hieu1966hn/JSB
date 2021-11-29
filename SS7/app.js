////// Thực hành thao tác C,R,U,D với Array.


// Khai báo Array
let animals = ["dog", 'cat', 'fish'];

// C: Create: thêm phần tử vào cuối mảng
animals.push("pig"); // => Mảng có 4 phần tử bao gồm cả "pig" vừa thêm vào



// R: Read: In ra danh sách mảng
console.log("animals: ", animals);

// U: Update: Cập nhật giá trị của phần tử trong mảng: VD: cập nhật 'dog' => 'fox' (biết rõ vị trí phần tử muốn update)
animals[0] = "fox"

// Delete: xóa phần tử trong mảng (biết rõ vị trí phần tử muốn Delete)
// Sử dụng phương thức splice("vị trí phần tử","số phần tử muốn xóa"). VD: xóa 'fish'
animals.splice(2, 1);
console.log(animals);


// TIẾN HÀNH XÂY DỰNG VÒNG ĐỜI 1 thao tác mảng với người dùng lựa chọn thao tác: C,R,U,D
