const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

let tasks = [];

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

app.get("/", (req, res) => {
  // Escape HTML when rendering tasks
  const escapedTasks = tasks.map((task) => escapeHtml(task));
  res.render("index", { title: "My To-Do List", tasks: escapedTasks });
});

app.post("/add-task", (req, res) => {
  const newTask = req.body.task;
  if (newTask) {
    // Escape HTML before adding new task
    tasks.push(escapeHtml(newTask));
  }
  res.redirect("/");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

module.exports = app;
