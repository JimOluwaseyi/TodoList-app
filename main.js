const btn = document.querySelector("#btn");
const input = document.querySelector("#search");
const listItem = document.querySelector(".list-items");
let tasks = [];

const showTask = () => {
  listItem.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    li.innerText = tasks[i];
    listItem.append(li);
    listItem.style.display = "block";
  }
};

if (localStorage.getItem("keyTask")) {
  tasks = JSON.parse(localStorage.getItem("keyTask"));
  showTask();
}

const todoTask = () => {
  const task = input.value;
  if (task !== "") {
    tasks.push(task);
    input.value = "";
    showTask();
    localStorage.setItem("keyTask", JSON.stringify(tasks));
  }
};

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    todoTask();
  }
});
btn.addEventListener("click", todoTask);

listItem.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("check");
  }
});
