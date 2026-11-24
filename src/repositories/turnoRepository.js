const medicos = [
  { id: 1, nombre: "Dra. Laura Gómez", especialidad: "Clínica Médica" },
  { id: 2, nombre: "Dr. Martín Silva", especialidad: "Cardiología" },
  { id: 3, nombre: "Dra. Sofía Ruiz", especialidad: "Pediatría" }
];

const turnos = [
  {
    id: 1,
    paciente: "Juan Pérez",
    medico: "Dra. Laura Gómez",
    especialidad: "Clínica Médica",
    fecha: "2026-12-01",
    hora: "10:00",
    estado: "Confirmado"
  }
];

function obtenerMedicos() {
  return medicos;
}

function obtenerTodos() {
  return turnos;
}

function buscarTurnoActivo(medico, fecha, hora) {
  return turnos.find(
    (t) =>
      t.medico === medico &&
      t.fecha === fecha &&
      t.hora === hora &&
      t.estado !== "Cancelado"
  );
}

function buscarPorId(id) {
  return turnos.find((t) => t.id === Number(id));
}

function guardar(nuevoTurno) {
  const turnoConId = { id: turnos.length + 1, ...nuevoTurno };
  turnos.push(turnoConId);
  return turnoConId;
}

function actualizarEstado(id, nuevoEstado) {
  const turno = buscarPorId(id);
  if (!turno) return null;
  turno.estado = nuevoEstado;
  return turno;
}

module.exports = {
  obtenerMedicos,
  obtenerTodos,
  buscarTurnoActivo,
  buscarPorId,
  guardar,
  actualizarEstado
};
