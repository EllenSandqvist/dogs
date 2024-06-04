import express from "express";
import path from "path";
import dogsRouter from "./routes/dogs.js";

const app = express();

app.use(express.static("public"));
app.use("/dogs", dogsRouter);
app.set("view engine", "ejs");

const __dirname = path.resolve();

const PORT = 3005;

/* Extern CSS-fil
• Minst en bild på sidan som visas, som finns lokalt
• (En extern JS-fil)
• Routing med minst två statiska HTML-filer
• Routes med GET, POST, (PUT, PATCH,) DELETE
• Extra: (Testa genom Postman att lägga till data och visa detta på
hemsidan/klienten när du uppdaterar sidan) */

app.get("/about", (req, res) => {
  res.status(200).sendFile("./public/pages/about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.status(200).sendFile("./public/pages/contact.html", { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}. http://localhost:${PORT}`);
});
