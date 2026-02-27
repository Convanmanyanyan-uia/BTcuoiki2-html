# Task Manager giả lập (Web)

Đây là ứng dụng web mô phỏng trình quản lý tiến trình (Task Manager) của hệ điều hành, được xây dựng bằng HTML, CSS và JavaScript thuần.

## Mục tiêu
- Hiển thị danh sách các tiến trình giả lập với các thông số CPU, RAM, trạng thái.
- Cho phép thêm tiến trình mới (ngẫu nhiên) và kết thúc tiến trình.
- Giúp sinh viên làm quen với quy trình phát triển phần mềm cơ bản.

## Công nghệ sử dụng
- HTML5: cấu trúc giao diện.
- CSS3: thiết kế giao diện, màu sắc theo trạng thái.
- JavaScript: xử lý logic, quản lý dữ liệu, cập nhật giao diện.

## Cấu trúc file
- `index.html` : Giao diện chính.
- `style.css`  : Định dạng giao diện.
- `data.js`    : Định nghĩa lớp `Task` và các hàm quản lý dữ liệu (thêm, xóa, sửa).
- `ui.js`      : Các hàm hiển thị bảng dữ liệu.
- `functions.js`: Xử lý các sự kiện chính (thêm task ngẫu nhiên, xóa task).
- `script.js`  : Khởi tạo ứng dụng và gắn sự kiện.

## Hướng dẫn sử dụng
1. Tải toàn bộ mã nguồn về và giải nén (hoặc clone).
2. Mở file `index.html` bằng trình duyệt web (Chrome, Edge, Firefox,...).
3. Giao diện chính hiển thị danh sách các tiến trình mẫu.
4. Nhấn nút **Add Task** để thêm một tiến trình mới với thông số ngẫu nhiên.
5. Nhấn nút **End** ở cột thao tác để kết thúc (xóa) tiến trình tương ứng.
6. Quan sát sự thay đổi của bảng và màu sắc trạng thái.

## Ghi chú
- Dữ liệu chỉ mang tính giả lập, không ảnh hưởng đến hệ thống thật.
- Các thông số CPU, RAM được sinh ngẫu nhiên.
- Trạng thái của tiến trình (`Running`, `Sleeping`, `Overload`) thay đổi dựa trên mức sử dụng CPU và RAM.

## Mở rộng
Có thể phát triển thêm các tính năng:
- Lưu dữ liệu bằng `localStorage`.
- Thêm biểu đồ thống kê CPU, RAM.
- Tìm kiếm và lọc tiến trình.