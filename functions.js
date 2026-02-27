// ============================================
// FILE: functions.js
// XỬ LÝ CÁC CHỨC NĂNG CHÍNH (THÊM, XÓA)
// ============================================

// Hàm tạo số ngẫu nhiên
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Hàm tạo tên ngẫu nhiên
function randomTaskName() {
    const prefixes = ['chrome', 'firefox', 'code', 'explorer', 'svchost', 'system', 'antivirus', 'spotify', 'discord', 'telegram'];
    const suffix = randomInt(1, 100);
    return `${prefixes[randomInt(0, prefixes.length-1)]} (${suffix})`;
}

// Xử lý thêm task mới (ngẫu nhiên)
function handleAddTask() {
    const name = randomTaskName();
    const cpu = randomInt(0, 100);
    const ram = randomInt(10, 1200);

    const newTask = DataStorage.addTask(name, cpu, ram);
    if (newTask) {
        renderTasks();
    } else {
        alert('Thêm task thất bại! Hãy kiểm tra console.');
    }
}

// Xử lý kết thúc (xóa) task
function handleEndTask(taskId) {
    if (confirm('Bạn có chắc muốn kết thúc tiến trình này?')) {
        const success = DataStorage.removeTaskById(taskId);
        if (success) {
            renderTasks();
        } else {
            alert('Xóa task thất bại!');
        }
    }
}

// Xuất các hàm ra global
window.handleAddTask = handleAddTask;
window.handleEndTask = handleEndTask;