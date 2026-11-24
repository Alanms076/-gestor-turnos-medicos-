# Instrucciones para Agentes de IA — Proyecto Turnos Médicos

## Arquitectura
- Respetar estrictamente la separación en capas: `Controller` (HTTP), `Service` (reglas de negocio) y `Repository` (acceso a datos).
- No mezclar lógica de negocio ni consultas en los controllers.

## Reglas de Desarrollo
- Antes de implementar cambios grandes, presentar un plan y esperar aprobación.
- No exponer credenciales ni subir archivos `.env` al repositorio.
- Toda nueva regla de negocio debe incluir su test unitario correspondiente en `tests/`.
