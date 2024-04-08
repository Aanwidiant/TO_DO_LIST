document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("taskInput");
  const todoList = document.getElementById("taskList");
  const addButton = document.querySelector(".btn");
  const deleteButtons = document.querySelectorAll(".delete-task");

  //   Membuat second task
  addButton.addEventListener("click", addTodo);

  function addTodo() {
    const todoText = inputField.value.trim();
    if (todoText !== "") {
      const listItem = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const todoContent = document.createElement("p");
      todoContent.textContent = todoText;
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-task";
      deleteButton.textContent = "X";
      deleteButton.addEventListener("click", deleteTask);

      listItem.appendChild(checkbox);
      listItem.appendChild(todoContent);
      listItem.appendChild(deleteButton);

      todoList.appendChild(listItem);
      inputField.value = "";
    }
  }

  // Menghapus second task
  deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteTask);
  });

  function deleteTask(event) {
    const listItem = event.target.closest("li");
    if (listItem) {
      listItem.remove();
    }
  }
});
