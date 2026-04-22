document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');
  const emptyState = document.getElementById('empty-state');

  // Load from LocalStorage
  let todos = JSON.parse(localStorage.getItem('cefmart-todos')) || [];

  function saveTodos() {
    localStorage.setItem('cefmart-todos', JSON.stringify(todos));
  }

  function renderTodos() {
    todoList.innerHTML = '';
    if (todos.length === 0) {
      emptyState.style.display = 'block';
      return;
    }
    emptyState.style.display = 'none';

    todos.forEach(todo => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.innerHTML = `
        <button class="action-btn check-btn ${todo.completed ? 'completed' : ''}" data-id="${todo.id}" aria-label="Toggle completion">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
        </button>
        <span class="task-text ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">${escapeHtml(todo.text)}</span>
        <button class="action-btn delete-btn" data-id="${todo.id}" aria-label="Delete task">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg>
        </button>
      `;
      todoList.appendChild(li);
    });
  }

  // Prevent XSS
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Add Task
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (text) {
      todos.unshift({ id: Date.now().toString(), text, completed: false });
      todoInput.value = '';
      saveTodos();
      renderTodos();
    }
  });

  // Toggle & Delete (Event Delegation)
  todoList.addEventListener('click', (e) => {
    const checkBtn = e.target.closest('.check-btn');
    const deleteBtn = e.target.closest('.delete-btn');
    const taskText = e.target.closest('.task-text');
    
    let id;
    if (checkBtn) id = checkBtn.dataset.id;
    else if (deleteBtn) id = deleteBtn.dataset.id;
    else if (taskText) id = taskText.dataset.id;

    if (!id) return;

    if (checkBtn || taskText) {
      todos = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    } else if (deleteBtn) {
      todos = todos.filter(t => t.id !== id);
    }

    saveTodos();
    renderTodos();
  });

  // Initial Render
  renderTodos();
});