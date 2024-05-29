const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  it("should render the index page", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("My To-Do List");
  });
});

describe("POST /add-task", () => {
  it("should add a new task and redirect to /", async () => {
    const response = await request(app)
      .post("/add-task")
      .send("task=New Task")
      .expect("Location", "/");
    expect(response.status).toBe(302);

    // After adding a new task, check if it appears on the home page
    const responseAfterPost = await request(app).get("/");
    expect(responseAfterPost.text).toContain("New Task");
  });

  it("should not add an empty task", async () => {
    const response = await request(app)
      .post("/add-task")
      .send("task=")
      .expect("Location", "/");
    expect(response.status).toBe(302);

    // Check if the task count remains the same
    const responseAfterPost = await request(app).get("/");
    expect(responseAfterPost.text).not.toContain("<li></li>");
  });

  it("should prevent XSS attacks", async () => {
    const xssTask = '<script>alert("XSS")</script>';
    await request(app).post("/add-task").send(`task=${xssTask}`).expect(302);

    const responseAfterPost = await request(app).get("/");
    expect(responseAfterPost.text).not.toContain(
      '<script>alert("XSS")</script>'
    );
    expect(responseAfterPost.text).toContain("New Task");
  });
});
