const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];



function renderElements(objetos) {
  console.log(objetos);  // Adiciona um log para verificar se as tarefas estão corretas

  const theList = document.querySelector("ul");
  for (let i = 0; i < objetos.length; i++) {
    const selectedTask = objetos[i];
    createTaskItem(selectedTask);
  }
}

function createTaskItem(task) {
  const theList = document.querySelector(".tasks__list");
  const newLi = document.createElement("li");
  const newDiv = document.createElement("div");
  const newSpan = document.createElement("span");
  const newP = document.createElement("p");
  const newButton = document.createElement("button");

  newP.textContent = task.title;
  newLi.classList.add("task__item");
  newDiv.classList.add("task-info__container");
  newButton.classList.add("task__button--remove-task");
  newSpan.classList.add("task-type");

  const lowerCaseType = task.type.toLowerCase(); // Convertendo para minúsculas

  if (lowerCaseType === "urgente") {
    newSpan.classList.add("span-urgent");
  } else if (lowerCaseType === "importante") {
    newSpan.classList.add("span-important");
  } else {
    newSpan.classList.add("span-normal");
  }

  newLi.appendChild(newDiv);
  newDiv.appendChild(newSpan);
  newDiv.appendChild(newP);
  newLi.appendChild(newButton);

  theList.appendChild(newLi);

  newButton.addEventListener("click", function () {
    const TheListItems = theList.children;
    const arrayItems = Array.from(TheListItems);

    const index = arrayItems.indexOf(newLi);

    if (index !== -1) {
      tasks.splice(index, 1);
      theList.removeChild(newLi);
    }
  });
}

renderElements(tasks);

const addTask = document.querySelector(".form__button--add-task");

addTask.addEventListener("click", function(event){
  event.preventDefault();

  const inputTask = document.querySelector("#input_title").value;
  const inputType = document.querySelector(".form__input--priority").value;

  if (inputTask !== "" && inputType !== "") {
    createTaskItem({ title: inputTask, type: inputType });
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});