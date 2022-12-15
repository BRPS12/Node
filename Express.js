import express, { response } from "express";
const port = 8000;
const app = express();
app.get("/", (request, response) => {
  response.send("Hello Express Server");
});
app.get("/boocko", (req, res) => {
  res.send("bocko");
});
app.post("/zurag", (req, res) => {
  res.send("ZURADGGGG");
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
