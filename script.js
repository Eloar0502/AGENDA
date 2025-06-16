function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Botão de excluir
  const btnExcluir = document.createElement("button");
  btnExcluir.textContent = "X";
  btnExcluir.style.marginLeft = "10px";
  btnExcluir.style.background = "#ef4444";
  btnExcluir.style.border = "none";
  btnExcluir.style.color = "white";
  btnExcluir.style.borderRadius = "4px";
  btnExcluir.style.cursor = "pointer";

  btnExcluir.onclick = function () {
    li.remove();
  };

  li.appendChild(btnExcluir);

  const taskList = document.getElementById("taskList");
  taskList.appendChild(li);

  taskInput.value = "";
}
