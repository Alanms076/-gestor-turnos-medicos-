const turnoRepository = require("../repositories/turnoRepository");

function listarMedicos(especialidad) {
  const medicos = turnoRepository.obtenerMedicos();
  if (!especialidad) return medicos;
  return medicos.filter((m) =>
    m.especialidad.toLowerCase().includes(especialidad.toLowerCase())
  );
}

function listarTurnos() {
  return turnoRepository.obtenerTodos();
}

function crearTurno({ paciente, medico, especialidad, fecha, hora }) {
  const campos = [paciente, medico, especialidad, fecha, hora];
  const faltanDatos = campos.some((c) => typeof c !== "string" || c.trim() === "");

  if (faltanDatos) {
    throw { status: 400, message: "Todos los campos son obligatorios." };
  }

  const conflicto = turnoRepository.buscarTurnoActivo(
    medico.trim(),
    fecha.trim(),
    hora.trim()
  );

  if (conflicto) {
    throw { status: 409, message: "El médico ya tiene un turno asignado en ese horario." };
  }

  return turnoRepository.guardar({
    paciente: paciente.trim(),
    medico: medico.trim(),
    especialidad: especialidad.trim(),
    fecha: fecha.trim(),
    hora: hora.trim(),
    estado: "Pendiente"
  });
}

function cancelarTurno(id) {
  const turno = turnoRepository.buscarPorId(id);
  if (!turno) {
    throw { status: 404, message: "Turno no encontrado." };
  }
  return turnoRepository.actualizarEstado(id, "Cancelado");
}

module.exports = { listarMedicos, listarTurnos, crearTurno, cancelarTurno };
