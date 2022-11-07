// Form
// Task list
const tasks = [
  {
    _id: "1",
    completed: true,
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit asperiores provident, accusantium nihil ratione dolores sapiente id odio exercitationem.",
    title:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, dolore.",
  },
  {
    _id: "2",
    completed: false,
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias ratione amet ullam. Nam laboriosam, alias dolore autem sapiente repudiandae?",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, velit?",
  },
];

(function (arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  // Elements UI
  const listContainer = document.querySelector(
    ".tasks-list-section .list-group",
  );

  renderAllTasks(objOfTasks);

  function renderAllTasks(tasksList) {
    if (!tasksList) {
      console.error("The task list has not been handed over!");
      return;
    }

    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach((task) => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });

    listContainer.appendChild(fragment);
  }

  function listItemTemplate({ _id, title, body }) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );

    const header = document.createElement("h6");
    header.textContent = title;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete task";
    deleteBtn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");

    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100");

    li.appendChild(header);
    li.appendChild(article);
    li.appendChild(deleteBtn);

    return li;
  }
})(tasks);
