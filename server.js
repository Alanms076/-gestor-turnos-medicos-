const express = require("express");
const path = require("path");
const turnoController = require("./src/controllers/turnoController");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Endpoints API REST
app.get("/api/health", (req, res) => res.status(200).json({ status: "ok" }));
app.get("/api/medicos", turnoController.getMedicos);
app.get("/api/turnos", turnoController.getTurnos);
app.post("/api/turnos", turnoController.postTurno);
app.patch("/api/turnos/:id/cancelar", turnoController.cancelarTurno);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
