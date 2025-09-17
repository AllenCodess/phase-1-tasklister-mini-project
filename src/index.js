const form = document.querySelector("#create-task-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector("#new-task-description");
  const taskName = input.value;

  buildToDo(taskName);

  input.value = "";
});

function buildToDo(taskName) {
  const li = document.createElement("li");
  li.textContent = taskName;
  const taskList = document.querySelector("#tasks");
  taskList.appendChild(li);
}