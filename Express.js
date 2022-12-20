import express from "express";
import { v4 as uuid } from "uuid";
const port = 8000;
const app = express();
const users = [];
const posts = [];
app.get("/", (req, res) => {
  res.send({
    data: users,
    post: posts,
    request: `${req.originalUrl}`,
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
  const unique_id = uuid();
  const { username, password, email, phonenumber } = req.body;
  const user = {
    username,
    password,
    email,
    phonenumber,
    id: `${unique_id}`,
  };
  users.push(user);
  console.log(user);
  res.send({
    succes: true,
    msg: "amjilttai burtguulle",
  });
});
app.post("/create", (req, res) => {
  const { img, description, title } = req.body;
  const unique_id = uuid();
  const post = {
    img,
    description,
    title,
    id: `${unique_id}`,
  };
  posts.push(post);
  console.log(post);
  res.send({
    success: true,
    data: posts,
  });
});
app.get("/getPost", (req, res) => {
  res.send({
    post: posts,
  });
});
app.get("/getPost/:postId", (req, res) => {
  const { postId } = req.params;
  const post1 = posts.filter((el) => el.id == postId);
  res.send({
    Post: post1,
  });
});
app.get("/getUser", (req, res) => {
  res.send({
    Users: users,
  });
});
app.get("/getUser/:userId", (req, res) => {
  const { userId } = req.params;
  const user1 = users.filter((el) => el.id == userId);
  res.send({
    User: user1,
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
app.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});
