// ============================================
// FILE: ui.js
// HIỂN THỊ GIAO DIỆN (RENDER BẢNG)
// ============================================

function renderTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = DataStorage.getAllTasks();

    taskList.innerHTML = '';

    if (tasks.length === 0) {
        const emptyRow = document.createElement('tr');
        emptyRow.innerHTML = '<td colspan="6" style="text-align:center; padding:30px;">Không có tiến trình nào. Hãy thêm task mới!</td>';
        taskList.appendChild(emptyRow);
        return;
    }

    tasks.forEach(task => {
        const row = document.createElement('tr');

        // Xác định class CSS cho trạng thái
        let statusClass = '';
        if (task.status === 'Running') statusClass = 'status-running';
        else if (task.status === 'Sleeping') statusClass = 'status-sleeping';
        else if (task.status === 'Overload') statusClass = 'status-overload';

        row.innerHTML = `
            <td>${task.pid}</td>
            <td><strong>${task.name}</strong></td>
            <td>${task.cpu}%</td>
            <td>${task.ram} MB</td>
            <td><span class="${statusClass}">${task.status}</span></td>
            <td><button class="btn-end" data-id="${task.id}">❌ End</button></td>
        `;

        taskList.appendChild(row);
    });

    // Gắn sự kiện cho các nút End (hàm này nằm trong functions.js)
    attachEndTaskEvents();
}

// Hàm này sẽ được gọi lại sau mỗi lần render để gắn sự kiện cho các nút End
function attachEndTaskEvents() {
    document.querySelectorAll('.btn-end').forEach(button => {
        button.addEventListener('click', function(e) {
            const taskId = parseInt(this.getAttribute('data-id'));
            handleEndTask(taskId);   // từ functions.js
        });
    });
}

window.renderTasks = renderTasks;