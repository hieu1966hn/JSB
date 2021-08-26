// const fileUpload = document.querySelector("#file-upload");
// fileUpload.addEventListener("change", (event) => {
//   const { files } = event.target;
//   // Về cơ bản nó là: event.target.files;
//   for (const file of files) {
//     const { name, type, size, lastModified } = file;
//     console.log(file);
//   }
// })



// // Khởi tạo đối tượng FileReader
// const reader = new FileReader();
// // Lắng nghe trạng thái đăng tải tệp
// fileUpload.addEventListener("change", (event) => {
//   // Lấy thông tin tập tin được đăng tải
//   const files = event.target.files;

//   const getSizeImage = files[0].size;

//   // if (size > 1024 * 1024) alert("Chỉ cho phép tải tệp tin nhỏ hơn 1MB");
//   // else alert("Đăng tải tệp thành công");

//   // Đọc thông tin tập tin đã được đăng tải
//   reader.readAsDataURL(files[0])

//   // Lắng nghe quá trình đọc tập tin hoàn thành
//   reader.addEventListener("load", (event) => {
//     // Lấy chuỗi Binary thông tin hình ảnh
//     const img = event.target.result;
//     const url = event.target.results

//     document.querySelector("img").src = URL.createObjectURL(url);

//     // Thực hiện hành động gì đó, có thể append chuỗi giá trị này vào thẻ IMG
//     console.log(document.querySelector("img").src);
//   })
// })




// reader.addEventListener("progress", (event) => {
// 	const {loaded, total} = event;

// 	if(loaded && total) {
// 		const percent = Math.round(loaded / total) * 100;

// 		document.querySelector("progress").value = percent
// 	}
// })

let images = [];

const image_input = document.querySelector("#image_input");
var uploaded_image;

image_input.addEventListener('change', function () {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result; // this is link
    // console.log(uploaded_image); // convert sang  base 64
    images.push(reader.result);
    const imgBox = document.createElement("div");
    imgBox.classList = "img-box";
    document.querySelector(".container").appendChild(imgBox);
    const img = document.createElement('img');
    img.classList= "img"
    img.src = `${images[images.length-1]}`;
    document.querySelector(".img-box").appendChild(img)
    // document.querySelector("#display_image").style.backgroundImage = `url(${images[0]})`;
  });
  reader.readAsDataURL(this.files[0]);
});





