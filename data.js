// ============================================
// FILE: data.js
// ĐỊNH NGHĨA LỚP TASK VÀ QUẢN LÝ DỮ LIỆU
// ============================================

// --- LỚP TASK ---
class Task {
    constructor(id, pid, name, cpu, ram, status) {
        this.id = id;
        this.pid = pid;
        this.name = name;
        this.cpu = cpu;
        this.ram = ram;
        if (status) {
            this.status = status;
        } else {
            this.updateStatus();
        }
    }

    // Cập nhật trạng thái dựa trên CPU và RAM
    updateStatus() {
        if (this.cpu > 70 || this.ram > 700) {
            this.status = "Overload";
        } else if (this.cpu > 10) {
            this.status = "Running";
        } else {
            this.status = "Sleeping";
        }
    }

    // Cập nhật CPU và tự động cập nhật trạng thái
    updateCpu(newCpu) {
        if (newCpu >= 0 && newCpu <= 100) {
            this.cpu = newCpu;
            this.updateStatus();
            return true;
        }
        return false;
    }

    // Cập nhật RAM và tự động cập nhật trạng thái
    updateRam(newRam) {
        if (newRam >= 0) {
            this.ram = newRam;
            this.updateStatus();
            return true;
        }
        return false;
    }

    // Sao chép task
    clone() {
        return new Task(this.id, this.pid, this.name, this.cpu, this.ram, this.status);
    }

    // Hiển thị thông tin (dùng cho console)
    displayInfo() {
        return `${this.name} (PID: ${this.pid}) - CPU: ${this.cpu}%, RAM: ${this.ram}MB, Status: ${this.status}`;
    }
}

// --- QUẢN LÝ DỮ LIỆU (DATA STORAGE) ---
let tasks = [];
let nextId = 1;
let nextPid = 1001;

// Dữ liệu mẫu ban đầu
const sampleTasks = [
    new Task(1, 1001, "System Idle Process", 5, 10, "Running"),
    new Task(2, 1002, "chrome.exe", 25, 450, "Running"),
    new Task(3, 1003, "code.exe", 15, 350, "Running"),
    new Task(4, 1004, "explorer.exe", 2, 80, "Sleeping"),
    new Task(5, 1005, "svchost.exe", 1, 50, "Sleeping"),
    new Task(6, 1006, "antivirus.exe", 85, 200, "Overload")
];

// Hàm khởi tạo dữ liệu
function initializeData() {
    tasks = sampleTasks.map(task => task.clone());
    
    if (tasks.length > 0) {
        nextId = Math.max(...tasks.map(task => task.id)) + 1;
        nextPid = Math.max(...tasks.map(task => task.pid)) + 1;
    }
    
    console.log("✅ Dữ liệu đã được khởi tạo");
    return tasks;
}

// Lấy tất cả tasks
function getAllTasks() {
    return tasks;
}

// Tìm task theo ID
function getTaskById(id) {
    return tasks.find(task => task.id === id);
}

// Thêm task mới
function addTask(name, cpu, ram, status) {
    if (!name || name.trim() === "") {
        console.error("❌ Tên task không được để trống");
        return null;
    }
    
    if (cpu < 0 || cpu > 100) {
        console.error("❌ CPU phải nằm trong khoảng 0-100");
        return null;
    }
    
    if (ram < 0) {
        console.error("❌ RAM không được âm");
        return null;
    }
    
    const newTask = new Task(nextId, nextPid, name, cpu, ram, status);
    tasks.push(newTask);
    nextId++;
    nextPid++;
    
    console.log(`✅ Đã thêm task: ${newTask.displayInfo()}`);
    return newTask;
}

// Xóa task theo ID
function removeTaskById(id) {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    
    if (tasks.length < initialLength) {
        console.log(`✅ Đã xóa task ID: ${id}`);
        return true;
    } else {
        console.log(`❌ Không tìm thấy task ID: ${id}`);
        return false;
    }
}

// Xóa tất cả task
function clearAllTasks() {
    const taskCount = tasks.length;
    tasks = [];
    nextId = 1;
    nextPid = 1001;
    
    console.log(`✅ Đã xóa tất cả ${taskCount} task`);
    return taskCount;
}

// Cập nhật task
function updateTask(id, updates) {
    const task = getTaskById(id);
    
    if (!task) {
        console.log(`❌ Không tìm thấy task ID: ${id}`);
        return false;
    }
    
    if (updates.name !== undefined) task.name = updates.name;
    if (updates.cpu !== undefined) task.updateCpu(updates.cpu);
    if (updates.ram !== undefined) task.updateRam(updates.ram);
    if (updates.status !== undefined) task.status = updates.status;
    
    console.log(`✅ Đã cập nhật task ID: ${id}`);
    return true;
}

// Xuất các đối tượng và hàm ra global để các file khác có thể dùng
window.DataStorage = {
    tasks,
    nextId,
    nextPid,
    initializeData,
    getAllTasks,
    getTaskById,
    addTask,
    removeTaskById,
    clearAllTasks,
    updateTask
};