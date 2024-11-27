const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const toggleThemeBtn = document.getElementById('toggleTheme');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';

    const span = document.createElement('span');
    span.textContent = taskText;

    const timer = document.createElement('span');
    timer.className = 'timer';
    let timeLeft = 60;
    timer.textContent = `Time Left: ${timeLeft}s`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    checkbox.onchange = function () {
        if (checkbox.checked) {
            span.classList.add('completed');
            clearInterval(timerInterval);
        } else {
            span.classList.remove('completed');
            startTimer();
        }
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(timer);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';

    function startTimer() {
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                timer.textContent = `Time Left: ${timeLeft}s`;
            } else {
                clearInterval(timerInterval);
                li.style.backgroundColor = 'red';
            }
        }, 1000);
    }

    startTimer();
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
toggleThemeBtn.addEventListener('click', toggleTheme);

function createFloatingBalls() {
    for (let i = 0; i < 20; i++) {
        const ball = document.createElement('div');
        ball.className = 'floating-ball';
        ball.style.left = `${Math.random() * 100}%`;
        ball.style.animationDuration = `${Math.random() * 10 + 5}s`;
        document.getElementById('background').appendChild(ball);
    }
}

createFloatingBalls();
