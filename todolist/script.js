let input = document.querySelector(".entered-list");
let addbtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");

if (localStorage.getItem("tasks")) {
  tasks.innerHTML = localStorage.getItem("tasks");
}

function saveTasks() {
  localStorage.setItem("tasks", tasks.innerHTML);
}

function darkmode() {
  document.querySelector("body").classList.toggle("dark");
  document.querySelector(".todo-list").classList.toggle("dark");
  document.querySelector(".entered-list").classList.toggle("dark");
  document.querySelector(".add-list").classList.toggle("dark");
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.classList.toggle("dark");
  });
}

input.addEventListener("keyup", () => {
  if (input.value.trim() != 0) {
    addbtn.classList.add("active");
  } else {
    addbtn.classList.remove("active");
  }
});

addbtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    if (document.getElementById("darkmode").checked) {
      newItem.classList.add(
        "item",
        "animate__headShake",
        "animate__animated",
        "animate__faster",
        "dark"
      );
    } else {
      newItem.classList.add(
        "item",
        "animate__headShake",
        "animate__animated",
        "animate__faster"
      );
    }
    newItem.innerHTML = `<p>${input.value}</p><div class="item-btn"><i class="fa-sharp fa-solid fa-pen-to-square"></i><i class="fa-solid fa-square-check"></i><i class="fa-solid fa-trash-can"></i></div>`;
    tasks.appendChild(newItem);
    input.value = "";
    saveTasks();
  } else {
    alert("نمیشه خالی باشه");
  }
});

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    const parentElement = e.target.parentElement.parentElement;
    parentElement.classList.add(
      "animate__flipOutX",
      "animate__animated",
      "animate__faster"
    );
    setTimeout(() => {
      parentElement.remove();
      saveTasks();
    }, 550); 
  }
});

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-square-check")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
    // Save tasks to localStorage
    saveTasks();
  }
});

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    let promptbox = prompt("عنوان جدید را وارد کنید");
    if (promptbox) {
      e.target.parentElement.parentElement.querySelector(
        "p"
      ).innerHTML = promptbox;
      // Save tasks to localStorage
      saveTasks();
    }
  }
});