Lý thuyết về function (Hàm)

Thuật toán kiểm tra năm nhuận
Để kiểm tra 1 năm có phải năm nhuận hay không, chúng ta chỉ cần tuân theo 1 trong 2 nguyên tắc sau đây.

Năm nhuận là năm chia hết cho 400
Năm nhuận là năm chia hết cho 4 nhưng không chia hết cho 100
Nếu là lần đầu chắc bạn sẽ thắc mà nguyên tắc thứ 2. Vì bạn được nghe thường xuyên: “Cứ 4 năm lại có 1 năm nhuận”. Tuy nhiên, điều đó không đúng. Lý do:
Trái đất của chúng ta cần 365.25 ngày để quay hết một vòng quanh mặt trời. Phần dư 0.25 thực ra đã làm tròn, con số thực tế là 365.2425 ngày để trái đất quay được một vòng. Giá trị sai số này 0.0075 ngày(0.25 -0.2425) khi nhân với 400 chúng ta sẽ có thêm 3 ngày nữa. Do đó, để lịch của ta chính xác, các chu kỳ 100, 200 và 300 chỉ có 24 năm nhuận thay vì 25. Riêng chu kỳ thứ 400 sẽ có 25 năm nhuận. Điều đó đảm bảo rằng chu kỳ 400 năm sẽ có 97(24+24+24+25) năm nhuận. Như vậy, cứ 400 năm chúng ta sẽ có 97 năm nhuận, không phải 100 nhé.

Khi đó: các năm 400, 404, 408, 800, 896, 1200, 1600, 2000, 2004 là các năm nhuận, trong khi 500, 600, 700.. 1100, 2100 không phải năm nhuận, do chúng chia hết cho cả 4 và 100.

<!-- ----------------------------------------------------------------------------------------- -->

Lý Thuyết về DOM:

<!--  -->

Truy xuất trực tiếp:
Truy xuất trực tiếp sẽ nhanh hơn, và đơn giản hơn khi bạn không cần phải biết nhiều về quan hệ và vị trí của nút. Có 3 phương thức để bạn truy xuất trực tiếp được hỗ trợ ở mọi trình duyệt:

document.getElementById('id_cần_tìm')
document.getElementsByTagName('div')
document.getElementsByName('tên_cần_tìm')

<!--  -->

Tạo mới, thêm, xoá, thay thế phần tử HTML bằng JS
Tạo một phần tử HTML
Chúng ta có thể tạo mới 1 phần tử HTML bằng các cách sau:

document.createElement(tag_name): Tạo ra phần tử có thẻ tag_name như a, p, div,...
element.cloneNode(): Tạo ra 1 phần tử bằng cách nhân bản phần tử chỉ ra (element)
document.createTextNode(text): Tạo ra 1 nút văn bản

Ví dụ dưới đây sẽ tạo ra một phần tử đoạn văn p sau đó chèn nó vào phần tử div đang có sẵn trong DOM HTML (Go to dom.html tại dòng: 13)

<!--  -->

Xóa phần tử HTML
Để loại bỏ phần tử HTML, bạn chọn phần tử cha rồi sử dụng phương thức removeChild(node) Tại dom.html dòng 40)

<!--  -->

Ví dụ trên sẽ xóa bỏ phần tử đoạn văn thứ nhất

Bạn có thể sử dụng thủ thuật lấy thuộc tính parentNode để bỏ qua bước tìm phần tử cha trong DOM: child.parentNode.removeChild(child); (Tại dom.html dòng 55)

<!--  -->

Thay thế phần tử HTML
Để thay thể một phần tử bằng một phần tử khác dùng cú pháp element.replaceChild(newNode, oldNode). Trong đó element là nút cha (tại dom.html dòng 70)

<!-- END -->
