const express = require("express");
const app = express();
const port = 3000;
const portifolioRoutes = require("./routes/portifolioroutes");

app.set("view engine", "ejs");
app.set("view cache", false);

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", portifolioRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});