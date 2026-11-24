const turnoService = require("../services/turnoService");

function getMedicos(req, res) {
  const medicos = turnoService.listarMedicos(req.query.especialidad);
  return res.status(200).json({ ok: true, medicos });
}

function getTurnos(req, res) {
  const turnos = turnoService.listarTurnos();
  return res.status(200).json({ ok: true, turnos });
}

function postTurno(req, res) {
  try {
    const turno = turnoService.crearTurno(req.body);
    return res.status(201).json({ ok: true, turno });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      error: error.message || "Error interno del servidor"
    });
  }
}

function cancelarTurno(req, res) {
  try {
    const turno = turnoService.cancelarTurno(req.params.id);
    return res.status(200).json({ ok: true, turno });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      error: error.message || "Error interno del servidor"
    });
  }
}

module.exports = { getMedicos, getTurnos, postTurno, cancelarTurno };
