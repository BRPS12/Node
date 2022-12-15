import express from "express";
const port = 8000;
const app = express();
const users = [];
const posts = [];
app.get("/", (req, res) => {
  res.send({
    data: users,
    post: posts,
  });
});
app.use(express.json());
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  users.map((users) => {
    if (users.username === username && users.password === password) {
      res.send({
        success: true,
        msg: "Amjilttai",
      });
    }
  });
  res.send({
    success: false,
    msg: "Amjiltgui",
  });
});
app.post("/signup", (req, res) => {
  const { username, password, email, phonenumber } = req.body;
  const user = {
    username,
    password,
    email,
    phonenumber,
  };
  users.push(user);
  res.send({
    succes: true,
    msg: "amjilttai burtguulle",
  });
});
app.post("/create", (req, res) => {
  const { img, description, title } = req.body;
  const post = {
    img,
    description,
    title,
  };
  posts.push(post);
  console.log(post);
  res.send({
    success: true,
    data: posts,
  });
});
app.put("/", (req, res) => {
  res.send("Put");
});
app.patch("/", (req, res) => {
  res.send("Patch");
});
app.delete("/", (req, res) => {
  res.send("Delete");
});
app.get("/api", (req, res) => {
  res.send({
    success: true,
    data: `Hello ${req.originalUrl}`,
  });
});

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});
