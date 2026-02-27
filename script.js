// ============================================
// FILE: script.js
// KHỞI TẠO ỨNG DỤNG VÀ GẮN SỰ KIỆN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // 1. Khởi tạo dữ liệu mẫu
    DataStorage.initializeData();

    // 2. Render bảng lần đầu
    renderTasks();

    // 3. Gắn sự kiện cho nút Add Task
    const addBtn = document.getElementById('addTaskBtn');
    addBtn.addEventListener('click', handleAddTask);
});