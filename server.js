const server = require("express");
const path = require("path");
const app = server();
const discos = require("./discos.json");
const puerto = 3003;
const expHbs = require("express-handlebars");

app.engine(
  "handlebars",
  expHbs({ 
    defaultLayout: "main-layout",
    layoutsDir: "views/layouts",
 })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(server.static(path.join(__dirname, "cliente")));

app.get("/", (req, res) => {
  res.render("home", {
    titulo: "Busqueda de discos",
  });
});

app.get("/busqueda", (req, res) => {
  const resultado = discos.discos.filter((discografia) =>
    discografia.artista.toLowerCase().includes(req.query.artista.toLowerCase()) 
    || discografia.titulo.toLowerCase().includes(req.query.artista.toLowerCase()) 
    || discografia.lanzamiento==req.query.artista);

  const textoResultados = `Hay ${resultado.length} resultado${resultado.length === 1 ? "" : "s"} en tu busqueda`;

  res.render("resultados", {
    discos: resultado,
    tituloResultados: textoResultados,
    titulo: "Busqueda discografia",
  });
});

app.get("/detalleDiscografia", (req, res) => {
  const discografia = discos.discos.find((discografia) => discografia.artista === req.query.artista);

  res.render("detalleDiscografia", {
    discografia,
    titulo: `detalle de ${discografia.artista}`,
  });
});

app.listen(puerto, () => {
  console.log("Servidor iniciado en puerto numero", puerto);
});
