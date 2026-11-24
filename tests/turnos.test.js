const test = require("node:test");
const assert = require("node:assert/strict");
const turnoService = require("../src/services/turnoService");

test("Debe reservar un turno válido cuando el horario está disponible", () => {
  const nuevo = turnoService.crearTurno({
    paciente: "Ana López",
    medico: "Dra. Laura Gómez",
    especialidad: "Clínica Médica",
    fecha: "2026-12-01",
    hora: "11:00"
  });
  assert.equal(nuevo.paciente, "Ana López");
  assert.equal(nuevo.estado, "Pendiente");
});

test("Debe rechazar la reserva si faltan datos obligatorios", () => {
  assert.throws(
    () =>
      turnoService.crearTurno({
        paciente: "",
        medico: "Dra. Laura Gómez",
        especialidad: "Clínica Médica",
        fecha: "2026-12-01",
        hora: "12:00"
      }),
    (err) => err.status === 400
  );
});

test("No debe permitir reservar dos turnos en el mismo horario para un mismo médico", () => {
  assert.throws(
    () =>
      turnoService.crearTurno({
        paciente: "Carlos Ruiz",
        medico: "Dra. Laura Gómez",
        especialidad: "Clínica Médica",
        fecha: "2026-12-01",
        hora: "10:00"
      }),
    (err) => err.status === 409
  );
});
