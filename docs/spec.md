# SPEC — Gestor de Turnos Médicos Online

## Objetivo
Aplicación web full-stack para gestionar turnos médicos online, permitiendo a los pacientes consultar profesionales por especialidad, reservar citas disponibles y cancelar turnos existentes.

## Reglas de Negocio
1. Todos los campos del turno (`paciente`, `medico`, `especialidad`, `fecha`, `hora`) son obligatorios.
2. Un médico no puede tener dos turnos activos (estado distinto de `Cancelado`) en la misma fecha y horario.
3. La cancelación de turnos se realiza mediante borrado lógico (`estado = "Cancelado"`) para conservar el historial médico y liberar el horario.

## Endpoints
- `GET /api/health` — Estado del servidor.
- `GET /api/medicos` — Lista de médicos disponibles (admite filtro `?especialidad=`).
- `GET /api/turnos` — Lista de turnos registrados.
- `POST /api/turnos` — Creación de nuevo turno (devuelve `201`, `400` o `409`).
- `PATCH /api/turnos/:id/cancelar` — Cancelación lógica de turno.
