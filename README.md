# SACO Frontend — SOFSE / Trenes Argentinos
## Sistema de Gestión de Expedientes Judiciales

### Stack
- HTML puro + Tailwind CSS (CDN)
- Vanilla JavaScript (sin frameworks ni bundler)
- Material Symbols (Google Icons)
- Public Sans + Inter (Google Fonts)

### Design System
**The Sovereign Ledger** — ver DESIGN.md

### Cómo abrir
1. Abrí la carpeta `saco-frontend/` en VSCode
2. Instalá la extensión **Live Server** (ritwickdey)
3. Click derecho en `index.html` → "Open with Live Server"
4. El browser abre en `dashboard-mesa.html`

### Páginas

| Archivo | Descripción | Roles |
|---------|-------------|-------|
| `dashboard-mesa.html` | Dashboard de Mesa SACO — cola de ingreso, métricas, asignación | Administrativo |
| `alta-expediente.html` | Formulario de nuevo expediente — 4 secciones, lógica de negocio completa | Administrativo |
| `bandeja-abogado.html` | Bandeja del abogado — filtros, tabs, listado de causas | Abogado |
| `detalle-expediente.html` | Detalle del expediente — timeline, docs, previsión, observaciones | Abogado / Coordinador |
| `gestion-penal.html` | Gestión penal — cola Cartas Suceso, causas activas, letrados por línea | Coordinador Penal |

### Flujo de navegación

```
dashboard-mesa ──► alta-expediente
                └─► (asignar expediente → modal)

bandeja-abogado ──► detalle-expediente
                └─► (filtros, tabs, paginación)

gestion-penal ──► alta-expediente (nueva causa)
              └─► (convertir Carta Suceso → modal)
              └─► detalle-expediente
```

### Reglas de negocio implementadas
- Numeración automática por área y año (P-XXXX/2026, C-XXXX/2026, L-XXXX/2026)
- Asignación FIFO Civil/Laboral — por línea ferroviaria en Penal
- Filtro de subtipos de gestión por área (los 15 tipos del CLAUDE.md)
- Canal de ingreso sugerido según tipo de gestión
- Alerta de reincidencia (mismo N° Causa)
- SS = Sin Siniestro en campo N° Causa
- Variante A/B para demandas
- Campo Observaciones siempre accesible
- Checklist de movimientos (tipo del catálogo)
- Modal de evaluación GAJ (asistencia técnica)
- Conversión Carta Suceso → expediente penal

### Datos mock
Todos los datos viven en `src/data/mock.js` y son modificables en tiempo de ejecución.
El estado se mantiene en memoria durante la sesión.
