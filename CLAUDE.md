# CLAUDE.md — SACO Frontend
# Sistema de Gestión de Expedientes Judiciales — SOFSE / Trenes Argentinos

> **Este archivo es la fuente de verdad para Claude Code.**
> Toda decisión de arquitectura, naming, estilo y lógica de negocio está aquí.
> Antes de escribir código, leer este archivo completo.

---

## 1. Contexto del proyecto

**Cliente:** SOFSA (Operadora Ferroviaria S.E.) — Subgerencia de Asuntos Contenciosos (SACO)
**Objetivo:** Reemplazar el workflow Excel + Google Drive + GDE por una aplicación web unificada
**Empresa desarrolladora:** Taligent
**Fase actual:** Prototipo funcional frontend (solo front, sin backend)

### Stakeholders del cliente
| Nombre | Rol en el sistema |
|--------|-------------------|
| Alejandra López | Referente — acceso total de auditoría |
| Pablo Sbarbati | Coordinador Civil |
| Gustavo Desideri | Coordinador Penal |
| Rodrigo Molinelli | Coordinador Laboral |

---

## 2. Stack tecnológico

```
Frontend:  HTML5 + Tailwind CSS (CDN) + Vanilla JavaScript
Iconos:    Material Symbols Outlined (Google)
Fuentes:   Public Sans (títulos) + Inter (datos y cuerpo)
Sin:       React, Vue, Angular, jQuery, bundlers, npm
Estado:    En memoria (window.SACO) — sin localStorage, sin backend
```

### Por qué este stack
El prototipo debe poder abrirse directamente en el browser desde VSCode con Live Server, sin instalaciones ni build steps. El cliente interactúa en demos. Cuando se avance a producción, se migrará a React + Node/Python + PostgreSQL.

---

## 3. Estructura de archivos

```
saco-frontend/
├── CLAUDE.md                          ← este archivo
├── index.html                         ← redirect a dashboard.html
├── README.md
└── src/
    ├── data/
    │   └── mock.js                    ← datos mock + window.SACO (fuente de estado)
    ├── components/
    │   ├── shared.js                  ← sidebar, topbar, toast, modal, badges
    │   └── sync.js                    ← BroadcastChannel entre pestañas (window.SACO_SYNC)
    └── pages/
        ├── dashboard.html             ← Vista: Dashboard para Gerentes / Subgerentes / Coordinadores
        ├── mesa-saco.html             ← Vista: Bandeja para la Mesa SACO
        ├── alta-expediente.html       ← Vista: Formulario nuevo expediente
        ├── bandeja-abogado.html       ← Vista: Bandeja del letrado
        ├── detalle-expediente.html    ← Vista: Detalle + timeline + docs
        ├── gestion-penal.html         ← Vista: Coordinación penal
        ├── area-civil.html            ← Vista: Coordinación Civil
        ├── area-laboral.html          ← Vista: Coordinación Laboral
        └── causa-detalle.html         ← Vista: Timeline unificado por número de causa
```

### Regla de organización
- **Nunca crear carpetas nuevas** sin actualizar este CLAUDE.md
- **Nunca agregar librerías externas** sin justificación explícita aquí
- Toda nueva página sigue el mismo patrón de los archivos existentes (ver Sección 6)

---

## 4. Design System — "The Sovereign Ledger"

### Principios que nunca se violan
1. **Sin líneas 1px** para seccionar — las áreas se separan por diferencia de color de fondo
2. **Sin negro puro** (`#000000`) — el texto más oscuro es `on-surface: #2a3439`
3. **Sombras suaves**, nunca `box-shadow: 0 0 0 black` — usar las variables definidas abajo
4. **Sin borders sólidos pesados** — máximo `border border-outline-variant/15`

### Tokens de color (Tailwind config — copiar en toda página nueva)
```javascript
tailwind.config = {
  theme: { extend: {
    colors: {
      // Primarios
      "primary":                  "#3a5f94",
      "primary-dim":              "#2d5387",
      "primary-container":        "#d5e3ff",
      "on-primary":               "#f6f7ff",
      "on-primary-container":     "#2c5287",
      "on-primary-fixed":         "#153f73",
      // Secundarios
      "secondary":                "#49636f",
      "secondary-container":      "#cbe7f5",
      "on-secondary-fixed":       "#29434e",
      "secondary-dim":            "#3d5762",
      // Terciarios
      "tertiary":                 "#5d5d78",
      "tertiary-container":       "#dbdafb",
      "on-tertiary-fixed":        "#393953",
      "tertiary-dim":             "#51516c",
      // Superficies (jerarquía de fondos)
      "surface":                  "#f8f9fb",   // fondo base
      "surface-container-lowest": "#ffffff",   // cards, inputs
      "surface-container-low":    "#f0f4f7",   // secciones
      "surface-container":        "#e8eff3",   // elementos anidados
      "surface-container-high":   "#e1e9ee",   // sidebar
      "surface-container-highest":"#d9e4ea",   // hover sobre rows
      // Texto
      "background":               "#f8f9fb",
      "on-background":            "#2a3439",
      "on-surface":               "#2a3439",
      "on-surface-variant":       "#566166",
      // Bordes
      "outline":                  "#717c82",
      "outline-variant":          "#a9b4b9",
      // Error
      "error":                    "#9f403d",
      "error-container":          "#fe8983",
      "on-error-container":       "#752121",
      // Misc
      "inverse-surface":          "#0b0f10",
    },
    fontFamily: {
      "headline": ["Public Sans", "sans-serif"],
      "body":     ["Inter", "sans-serif"],
    },
    borderRadius: {
      DEFAULT: "0.125rem",
      "sm":    "0.25rem",
      "lg":    "0.5rem",
      "xl":    "0.75rem",
      "2xl":   "1rem",
      "full":  "9999px",
    },
  }}
}
```

### Tipografía
- **Títulos / headers:** `font-family: 'Public Sans'` → clase `font-headline`
- **Todo lo demás:** `font-family: 'Inter'` → clase `font-body` o default
- **Labels de tabla:** `text-[10px] font-black uppercase tracking-widest text-on-surface-variant`
- **Datos numéricos / códigos:** agregar `font-mono`

### Sombras
```css
.shadow-card    { box-shadow: 0 4px 20px rgba(42,52,57,0.06); }
.shadow-card-lg { box-shadow: 0 12px 40px rgba(42,52,57,0.08); }
```

### Botón primario (siempre gradiente)
```html
<button class="bg-gradient-to-br from-primary to-primary-dim text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md hover:brightness-105 active:scale-[0.98] transition-all">
```

### Badges de estado (usar `SACO_UI.estadoBadge(code, label)` de shared.js)
| Estado | Fondo | Texto |
|--------|-------|-------|
| EN_TRAMITE | `secondary-container` | `on-secondary-fixed` |
| PENDIENTE | `tertiary-container` | `on-tertiary-fixed` |
| GDE_VINCULADO | `secondary-container` | `on-secondary-fixed` |
| URGENTE | `error-container/30` | `on-error-container` |
| CUMPLIDO | `green-100` | `green-800` |
| ARCHIVADO | `surface-container-high` | `on-surface-variant` |

### Inputs y formularios
```html
<!-- Input estándar -->
<input class="w-full bg-surface-container-low border-none rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none"/>

<!-- Select estándar -->
<select class="w-full bg-surface-container-low border-none rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20"/>

<!-- Label estándar -->
<label class="block text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-2"/>
```

### Tablas
- Sin bordes de tabla — separar filas con `divide-y divide-outline-variant/5`
- Header: `bg-surface-container-low/60`
- Hover row: `hover:bg-surface-container-highest transition-colors`
- Text header: `text-[10px] font-black uppercase tracking-widest text-on-surface-variant`

---

## 5. Arquitectura de componentes compartidos (`shared.js` y `sync.js`)

El archivo `src/components/shared.js` expone el objeto global `window.SACO_UI` con:

```javascript
SACO_UI.renderSidebar(activePage)   // Retorna HTML del sidebar
SACO_UI.renderTopbar(title, breadcrumb) // Retorna HTML del topbar
SACO_UI.estadoBadge(code, label)    // Retorna HTML del badge de estado (por código)
SACO_UI.estadoBadgeCustom(label, colorClass) // Badge con texto libre (catálogo por tipo)
SACO_UI.areaBadge(area)             // Retorna HTML del badge de área
SACO_UI.showToast(msg, type)        // type: 'success'|'error'|'info'|'warn'
SACO_UI.showModal(title, content, actions) // Modal genérico
SACO_UI.closeModal()
SACO_UI.toggleNotifPanel()          // Panel de alertas
```

El archivo `src/components/sync.js` expone el objeto global `window.SACO_SYNC` con:

```javascript
SACO_SYNC.syncEmit(type, payload)  // Emite evento a otras pestañas via BroadcastChannel
SACO_SYNC.syncListen(callback)     // Escucha eventos de otras pestañas
```

Tipos de eventos definidos:
```
'EXPEDIENTE_ASIGNADO'  → payload: { id, area, abogado }
'ESTADO_CAMBIADO'      → payload: { id, estadoAnterior, estadoNuevo }
'MOVIMIENTO_AGREGADO'  → payload: { expedienteId, movimiento }
'QUEUE_ACTUALIZADA'    → payload: { queueLength }
```

**Orden de imports obligatorio en toda página:**
```html
<script src="../data/mock.js"></script>
<script src="../components/sync.js"></script>   <!-- ANTES de shared.js -->
<script src="../components/shared.js"></script>
```

### Keys del sidebar (parámetro `activePage`)
```
'dashboard'          → Dashboard Gerencial (Gerentes / Subgerentes / Coordinadores)
'mesa-saco'          → Bandeja para la Mesa SACO
'alta-expediente'    → Nuevo Expediente
'bandeja-abogado'    → Mi Bandeja
'area-civil'         → Área Civil
'area-laboral'       → Área Laboral
'gestion-penal'      → Área Penal
'detalle-expediente' → (sin active, viene de bandeja)
'reports'            → Previsión Económica (futuro)
```

### Cómo montar sidebar y topbar en una página nueva
```html
<div id="sidebar-mount"></div>
<div id="topbar-mount"></div>
<main class="ml-64 pt-16 min-h-screen">
  <!-- contenido -->
</main>

<script src="../data/mock.js"></script>
<script src="../components/shared.js"></script>
<script>
  document.getElementById('sidebar-mount').innerHTML = SACO_UI.renderSidebar('KEY_DE_PAGINA');
  document.getElementById('topbar-mount').innerHTML  = SACO_UI.renderTopbar('Título', 'Breadcrumb');
</script>
```

---

## 6. Patrón de una página nueva

Toda página nueva sigue esta estructura exacta. No inventar estructuras alternativas.

```html
<!DOCTYPE html>
<html lang="es" class="light">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>[Nombre Vista] | SOFSE SACO</title>
  <script src="https://cdn.tailwindcss.com?plugins=forms"></script>
  <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
  <script>
    tailwind.config = { /* COPIAR COMPLETO DE SECCIÓN 4 */ }
  </script>
  <style>
    .material-symbols-outlined { font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24; vertical-align:middle; }
    body { font-family:'Inter',sans-serif; }
    h1,h2,h3,h4 { font-family:'Public Sans',sans-serif; }
    .shadow-card    { box-shadow:0 4px 20px rgba(42,52,57,0.06); }
    .shadow-card-lg { box-shadow:0 12px 40px rgba(42,52,57,0.08); }
    /* estilos específicos de la página */
  </style>
</head>
<body class="bg-background text-on-background">

  <div id="sidebar-mount"></div>
  <div id="topbar-mount"></div>

  <main class="ml-64 pt-16 min-h-screen">
    <div class="p-8 max-w-[1600px] mx-auto">
      <!-- CONTENIDO -->
    </div>
  </main>

  <script src="../data/mock.js"></script>
  <script src="../components/shared.js"></script>
  <script>
    document.getElementById('sidebar-mount').innerHTML = SACO_UI.renderSidebar('KEY');
    document.getElementById('topbar-mount').innerHTML  = SACO_UI.renderTopbar('Título', 'Breadcrumb');
    // lógica de la página
  </script>
</body>
</html>
```

---

## 7. Datos mock (`mock.js`) y estado global

Toda la data vive en `window.SACO`. Claude Code **modifica `mock.js`** cuando necesita:
- Agregar nuevos expedientes de ejemplo
- Agregar nuevos catálogos
- Ampliar datos de prueba para una vista nueva

### Estructura del objeto `window.SACO`
```javascript
window.SACO = {
  TIPOS_GESTION,          // { CIVIL: [...], LABORAL: [...], PENAL: [...] }
  LINEAS_FERROVIARIAS,    // [{ code, label, abogado }]
  ABOGADOS,               // { CIVIL: [...], LABORAL: [...], PENAL: [...] }
  ESTADOS,                // [{ code, label, color }]
  ESTADOS_POR_TIPO,       // { DEMANDA: [...], QUERELLA: [...], OFICIO: [...], ... } — catálogo completo
  QUEUE_MESA,             // expedientes pendientes en Mesa SACO
  EXPEDIENTES_ABOGADO,    // expedientes asignados al letrado
  EXPEDIENTE_DETALLE,     // objeto único del expediente abierto (incluye vinculos:[], intervinientes:[], estadoExpediente en cada mov., estadoLabel para estado custom)
  CARTA_SUCESO_QUEUE,     // cartas SAE pendientes (penal)
  CAUSAS_PENALES,         // causas activas del área penal
  JUZGADOS,               // [{ code, label }]
  getEstadosPorTipo,      // helper: getEstadosPorTipo(tipoGestion) → string[] — fallback genérico si tipo no existe
  buscarPorNumeroCausa,   // helper: buscarPorNumeroCausa(str) → expediente[] — busca en EXPEDIENTES_ABOGADO + QUEUE_MESA
  getExpedienteById,      // helper: getExpedienteById(id) → expediente|null (busca en EXPEDIENTE_DETALLE y EXPEDIENTES_ABOGADO)
  abrirExpediente,        // helper: abrirExpediente(id) → navega a detalle-expediente.html?id=X
}
```

### Reglas de los datos
- Los tipos de gestión están en `TIPOS_GESTION` separados por área (CIVIL 12, LABORAL 8, PENAL 7 — ver sección 8.1)
- `ESTADOS_POR_TIPO` define los estados válidos para cada `tipo_gestion`; usar siempre `getEstadosPorTipo(tipo)` para obtenerlos
- `EXPEDIENTE_DETALLE` contiene los arrays `timeline[]`, `documentos[]`, `vinculos[]` e `intervinientes[]` que se modifican en runtime
- `exp.estadoLabel` guarda el estado como texto libre del catálogo (e.g. "Etapa de instrucción"); `exp.estado` conserva el código legacy para compatibilidad
- El estado se pierde al recargar la página — es intencional para el prototipo

---

## 8. Lógica de negocio — reglas que el código debe respetar

Estas reglas vienen del análisis funcional y **no son negociables**. Claude Code debe implementarlas fielmente.

### 8.1 Clasificación de expedientes
- Dos niveles: **Área** (CIVIL / LABORAL / PENAL) → **Tipo de gestión**
- El selector de tipo muestra **todos los tipos del área** — no filtra por canal
- Al seleccionar un tipo, el canal se auto-sugiere según `tipo.canal` (campo por defecto)
- Si el canal seleccionado no está en `tipo.canales[]`, se muestra toast informativo (no bloquea)
- Los tipos disponibles por área están en `SACO.TIPOS_GESTION[area]`

**Fuente:** Matriz_Actualizada.xlsx — Abril 2026. Cada tipo tiene `canal` (sugerido) y `canales[]` (todos los válidos).

| Área | Cantidad | Códigos |
|------|----------|---------|
| CIVIL | 12 tipos | OFICIO, CARTA_DOC, MEDIACION, BENEFICIO_LITIGAR, DEMANDA_CIVIL, COBRO_CANON, RECLAMO_CONTRAT, LANZAMIENTO, RECUPERO, EJECUCION_GAR, DEFENSA_CIVIL, PEDIDO_CAUSA_PENAL |
| LABORAL | 8 tipos | OFICIO, CARTA_DOC, MEDIACION, DEMANDA_CIVIL, DEMANDA_LABORAL, CONSIGNACION, DESAFUERO, PEDIDO_CAUSA_PENAL |
| PENAL | 7 tipos | OFICIO, MEDIACION, QUERELLA, DEFENSA_PENAL, CARTA_SUCESO, PEDIDO_CAUSA_PENAL, OTROS |

- `OTROS` solo aplica al área PENAL
- `DEMANDA_CIVIL` y `DEMANDA_LABORAL` reemplazan el código genérico `DEMANDA`; en los datos históricos puede aparecer `DEMANDA` como código legacy

### 8.2 Numeración automática
```
CIVIL   → C-0001/2026  (secuencia propia)
LABORAL → L-0001/2026  (secuencia propia)
PENAL   → P-0001/2026  (secuencia propia)
```
- El año es el año calendario actual (`new Date().getFullYear()`)
- En el prototipo los contadores viven en `state.numerosActivos = {CIVIL, LABORAL, PENAL}`

### 8.3 Asignación de letrados
| Área | Regla |
|------|-------|
| Civil | Orden secuencial de llegada (FIFO) — se muestra el "siguiente en rotación" |
| Laboral | Ídem Civil — FIFO |
| Penal | Por línea ferroviaria — cada línea tiene un letrado asignado en `LINEAS_FERROVIARIAS` |

- **Reincidencia:** si el N° Causa ingresado ya existe en el sistema, mostrar alerta y sugerir el mismo letrado del expediente anterior
- **Reasignación:** disponible para Coordinadores — botón visible en detalle de expediente

### 8.4 Canal de ingreso
| Canal | Cuándo |
|-------|--------|
| EE_GDE | Ingreso externo (Mesa de Entradas → GDE → Mesa SACO) |
| MEMO_GDE | Ingreso interno (otra área SOFSA → Memo GDE → Mesa SACO) |
| MAIL | Carta Suceso SAE (seguridad de línea → mail directo a Mesa SACO) |

- El canal sugerido para cada tipo de gestión está en `TIPOS_GESTION[area][i].canal`
- Si el canal elegido difiere del sugerido, mostrar toast informativo (no bloquear)

### 8.5 Variantes de demanda
- **Variante A:** SOFSA como parte demandada — cédula física en papel llega por Mesa de Entradas → EE en GDE → Mesa SACO. Campo `demandado = SOFSA`.
- **Variante B:** Estado Nacional como demandado — notificación llega directamente por GDE a Mesa SACO. Campo `demandado = ESTADO_NACIONAL`.
- Solo aplica al tipo `DEMANDA`. El formulario muestra el campo `variante` condicionalmente.

### 8.6 Campo Observaciones
- **Siempre visible y editable** en la vista de detalle, sin importar el estado del expediente
- Aparece en el panel izquierdo del detalle, debajo de los metadatos
- El botón "Guardar" actualiza `SACO.EXPEDIENTE_DETALLE.observaciones` en runtime

### 8.7 SS = Sin Siniestro
- Cuando no hay número de siniestro asociado, el campo muestra el texto literal `SS SOFSE`
- Es un valor válido, no un error — no marcar como inválido

### 8.8 Carta Suceso (Penal)
Flujo: Mail SAE → Cola en Área Penal → Evaluación → Convertir en expediente
1. La carta aparece en `CARTA_SUCESO_QUEUE`
2. El abogado evalúa si el hecho tipifica como delito
3. Si tipifica → "Convertir en Expediente" → modal con tipo y letrado por línea
4. Si deriva a Siniestros → marcar `derivado_siniestros = true` y archivar
5. Si no tipifica → ignorar/archivar

### 8.9 Estados de expediente (flujo básico)
```
EN_TRAMITE → EN_PLAZO_CONTESTAR → SUSPENSION_TERMINOS → EN_PRUEBA → CUMPLIDO → ARCHIVADO
```
- Para Penal también: `PENDIENTE_GDE`, `GDE_VINCULADO`
- El estado `URGENTE` no es un estado procesal — es una bandera de prioridad (`prioridad = 'URGENTE'`)

### 8.10 Movimientos
- Cada acción sobre el expediente genera un registro en `timeline[]`
- Los tipos válidos de movimiento vienen del catálogo: `DERIVACION | MEMO_ENVIADO | NOTA_RESPUESTA | PRORROGA | RECEPCION | CIERRE | OTRO`
- Al agregar un movimiento, siempre va al inicio del array (`unshift`)
- El movimiento más reciente se muestra con `border-l-4 border-primary` y punto azul sólido

### 8.11 Juzgado (desplegable)

- El campo `juzgado` no es de texto libre
- Debe ser un **select (desplegable)** basado en catálogo
- El catálogo se carga desde `SACO.JUZGADOS`

### 8.12 Área Penal — Campos adicionales

Para expedientes del área PENAL:

- Se deben habilitar los campos:
  - `numero_sumario` (texto libre)
  - `comisaria` (texto libre)
- Estos campos son opcionales pero visibles solo si `area = PENAL`

---

## 9. Páginas existentes — qué hace cada una

### `dashboard.html` — Dashboard Gerencial

**Rol:** Gerente / Subgerente / Coordinador

**Funcionalidades:**
- Vista agregada de expedientes por área (Civil / Laboral / Penal)
- Indicadores clave:
  - Cantidad de expedientes activos
  - Distribución por estado
  - Carga por letrado
- Acceso a vistas consolidadas (no operativas)
- No permite acciones operativas (solo lectura / análisis)

### `mesa-saco.html` — Mesa SACO Bandeja

**Rol:** Administrativo de Mesa SACO

**Funcionalidades:**

- Botón principal: **"Nuevo Expediente"** (redirige a `alta-expediente.html`)
  
- Bandeja principal:
  - Lista de expedientes **ya asignados**
  - Fuente de datos: `SACO.EXPEDIENTES_ABOGADO` (vista global)

- Grilla de expedientes:
  - Tipo de Gestión
  - Referencia GDE (N° de MEMO / EE)
  - Origen (canal de ingreso)
  - Estado → siempre `ASIGNADO`
  - Abogado (letrado asignado)
  - Fecha (fecha de recepción o asignación)

- Acciones:
  - Botón **visualizar expediente** (ícono de ojo)
  - Navega a `detalle-expediente.html`
  - No hay edición ni asignación desde esta vista

- Filtros:
  - Tipo de Gestión
  - Referencia GDE
  - Origen
  - Abogado
  - Fecha
  - ❌ No incluye filtro por estado (ya que todos están en `ASIGNADO`)

- Comportamiento:
  - Vista **solo lectura**
  - No modifica estado ni asignaciones
  - Permite trazabilidad y consulta de expedientes cargados

**Estado que modifica:** ninguno (solo lectura)
> ⚠️ Nota:
> La Mesa SACO deja de ser una cola de asignación y pasa a ser una bandeja de consulta de expedientes ya asignados.
> La asignación se realiza únicamente en el flujo de alta de expediente.

### `alta-expediente.html` — Nuevo Expediente
**Rol:** Administrativo de Mesa SACO
**Funcionalidades:**
- Sección 1: Canal (EE_GDE / MEMO_GDE / MAIL) + N° de referencia + Área + Tipo de gestión
- Sección 2: Carátula, N° Causa **(opcional)**, Juzgado (desplegable), Fecha hecho, Fecha recepción, Línea ferroviaria
- Campos condicionales:
  - DEMANDA: variante A/B, monto, Ley 25.344
  - PENAL: N° de Sumario y Comisaría
- Sección 3: Asignación de letrado (regla según área)
- Sección 4: Upload de documentos (drag & drop decorativo)
- Sidebar derecho: flujo de proceso + resumen en tiempo real (se actualiza con cada cambio)
- Alerta de duplicado cuando N° Causa ya existe (usa `buscarPorNumeroCausa`): permite vincular el nuevo con el existente (bidireccional, tipo MISMA_CAUSA)
- N° Causa es **opcional** — el abogado puede cargarlo luego desde el detalle
- Validación antes de crear: área, tipo, carátula y línea (si Penal) son obligatorios

**Estado que modifica:** incrementa `state.numerosActivos[area]`; redirige a bandeja tras crear

### `bandeja-abogado.html` — Bandeja del Letrado
**Rol:** Abogado (cualquier área)
**Funcionalidades:**
- Tabs: **Activos** / **Urgentes** (filtros sobre `SACO.EXPEDIENTES_ABOGADO` — tab Cumplidos eliminado)
- **Barra de filtros horizontal:** búsqueda libre, tipo de gestión, estado, rango de fechas, toggle alerta; chips de filtros activos con botón X por chip
- Tabla agrupada por causa: expedientes con `numero_causa` igual se agrupan bajo una fila "causa" expandible; expedientes sin causa son filas sueltas
- Filas con alerta (`tiene_alerta = true`) muestran ícono de warning en rojo
- Click en fila de causa → expande/colapsa hijos; click en fila de expediente → navega a `detalle-expediente.html`
- **"Ver todo" en causa** → navega a `causa-detalle.html?causa=<numeroCausa>`
- **"Agrupar a causa"** en sueltos → modal `abrirModalAgrupar(expId)` → `confirmarAgrupar()` — asigna `numero_causa` en runtime
- **"Desagrupar"** en hijos → modal `desagrupar(expId)` → `confirmarDesagrupar()` — pone `numero_causa = null` en runtime
- `construirItemsBandeja()` agrupa los datos; `expandedCausas` Set controla filas abiertas; `SHOW_ABOGADO` flag (false en bandeja propia)
- `poblarFiltroTipo()` y `poblarFiltroEstado()` cargan selects dinámicamente; `renderChipsFiltros()` gestiona chips activos

**Estado que modifica:** `exp.numero_causa` (agrupar/desagrupar — en runtime)

### `causa-detalle.html` — Detalle de Causa
**Rol:** Abogado (cualquier área)
**Acceso:** desde bandeja-abogado.html → "Ver todo" en fila de causa
**Query param:** `?causa=<numeroCausa>` (ej. `?causa=FSM-11802/2023`)
**Funcionalidades:**
- Header con N° causa y breadcrumb; botón "Volver" (`history.back()`)
- Grilla de tarjetas por expediente — cada card muestra área (pill color), estado, N° interno, carátula, tipo, fecha, abogado y alerta si `tiene_alerta`; click en card → `window.SACO.abrirExpediente(id)`
- **Timeline unificado:** todas las entradas `timeline[]` de los expedientes agrupados, etiquetadas con `_expId`, `_expArea`, `_expCaratula`, ordenadas (activos primero, luego por fecha desc)
- Select `#filtro-exp` para filtrar el timeline por expediente individual
- Estado vacío si la causa no existe o no tiene expedientes asociados
- Sidebar key: `'bandeja-abogado'`

**Estado que modifica:** ninguno (solo lectura)

### `detalle-expediente.html` — Detalle del Expediente
**Rol:** Abogado / Coordinador
**Funcionalidades:**
- Header: N° interno, badges de estado y área, carátula, juzgado
- Botones header: "Nueva Actividad" (modal), "Subir Documento" (file input), "Vincular" (modal vincular), "Cambiar Estado" (modal), "Reasignar" (condicional por rol)
- **Panel izquierdo (4 cols): sistema de 3 tabs** — función `setTabIzq(tab)`:
  - **Tab "Datos"** (activa por default): metadata completa en `<dl id="metadata-list">`
  - **Tab "Vínculos"**: botón "Vincular Expediente" + `<div id="vinculos-list">` — lista de vínculos en `exp.vinculos[]`; estado vacío si no hay vínculos
  - **Tab "Estados"**: select `#filtro-estado-timeline` (filtra el timeline por estado procesal) + `<div id="estado-log">` (historial de estados)
- Panel derecho (8 cols): tabs Timeline / Repositorio de Documentos / Previsión Económica — función `setTabDet(tab)`
- **Timeline agrupado por estado procesal:** cada grupo muestra un header pill con el nombre del estado (activo = azul, históricos = gris); dentro de cada grupo, línea vertical + movimientos individuales. Función `renderMovimiento(t, idx, esActivo)` extrae el HTML de un movimiento individual.
- Campo `estadoExpediente` en cada movimiento del timeline indica en qué estado procesal fue registrado
- Variable `estadoActual` sincroniza el estado del expediente con los nuevos movimientos
- `poblarFiltroEstado()` rellena el select de filtro con los estados únicos presentes en `exp.timeline`
- **Sistema de vínculos:** `abrirModalVincular()` → buscar en `EXPEDIENTES_ABOGADO` → `seleccionarParaVincular(id)` → `confirmarVinculo()` → push a `exp.vinculos[]` → `renderVinculos()` → activa tab "Vínculos"
- Tipos de relación: `MISMA_CAUSA`, `MISMO_SINIESTRO`, `DERIVACION`, `CONEXO`
- **Modal nuevo movimiento:** tipo (catálogo), fecha, descripción, N° GDE opcional → agrega a `timeline[]` con `estadoExpediente: estadoActual`
- Botones header: "Nueva Actividad" (modal), "Subir Documento" (file input), "Vincular" (modal vincular), "Cambiar Estado" (modal), "Reasignar" (condicional por rol)
- **Panel izquierdo (4 cols): sistema de 3 tabs** — función `setTabIzq(tab)`:
  - **Tab "Datos"** (activa por default): metadata completa en `<dl id="metadata-list">`
  - **Tab "Vínculos"**: botón "Vincular Expediente" + `<div id="vinculos-list">` — lista de vínculos en `exp.vinculos[]`; estado vacío si no hay vínculos
  - **Tab "Estados"**: select `#filtro-estado-timeline` (filtra el timeline por estado procesal) + `<div id="estado-log">` (historial de estados)
- Panel derecho (8 cols): tabs Timeline / Repositorio de Documentos / Previsión Económica — función `setTabDet(tab)`
- **Timeline agrupado por estado procesal:** cada grupo muestra un header pill con el nombre del estado (activo = azul, históricos = gris); dentro de cada grupo, línea vertical + movimientos individuales. Función `renderMovimiento(t, idx, esActivo)` extrae el HTML de un movimiento individual.
- Campo `estadoExpediente` en cada movimiento del timeline indica en qué estado procesal fue registrado
- Variable `estadoActual` sincroniza el estado del expediente con los nuevos movimientos
- `poblarFiltroEstado()` rellena el select de filtro con los estados únicos presentes en `exp.timeline`
- **Sistema de vínculos:** `abrirModalVincular()` → buscar en `EXPEDIENTES_ABOGADO` → `seleccionarParaVincular(id)` → `confirmarVinculo()` → push a `exp.vinculos[]` → `renderVinculos()` → activa tab "Vínculos"
- Tipos de relación: `MISMA_CAUSA`, `MISMO_SINIESTRO`, `DERIVACION`, `CONEXO`
- **Modal nuevo movimiento:** tipo (catálogo), fecha, descripción, N° GDE opcional → agrega a `timeline[]` con `estadoExpediente: estadoActual`
- **Repositorio:** tabla de `documentos[]` con nombre, tipo GDE, fecha, tamaño, botón descarga
- **Previsión:** cards de monto original/actualizado/pronóstico + tabla histórica por año
- Subir documento agrega al array `documentos[]` en runtime

- **Tab "Intervinientes":** tabla de participantes de la causa (Actor, Demandado, Imputado, Perito, etc.) con roles procesales, documentos y contactos. Permite agregar/eliminar intervinientes. `renderIntervinientes()` + `abrirModalAgregarInterviniente()` + `guardarInterviniente()` + `eliminarInterviniente(i)`.
- **Navegación bidireccional:** `window.SACO.abrirExpediente(id)` navega a `detalle-expediente.html?id=X`; al cargar, `cargarExpedienteActivo()` lee el query param y actualiza `SACO.EXPEDIENTE_DETALLE` antes de que `const exp` lo tome.
- **Vínculos:** cada card de vínculo muestra badge "Mismo siniestro" si `tipo_relacion === 'MISMO_SINIESTRO'`; el onclick navega al expediente vinculado.
- **N° Causa editable inline:** el campo N° Causa NO está en `metaFields`; se muestra en `#causa-editable-wrap` debajo de `dl#metadata-list`. Botón "editar" → `activarEdicionCausa()` → input + alerta duplicado con `onCausaDetalleChange()` → `guardarNumeroCausa()` actualiza `exp.numero_causa` y aplica vinculación bidireccional si `causaVincularId` está seteado.

**Estado que modifica:** `SACO.EXPEDIENTE_DETALLE.timeline`, `.documentos`, `.vinculos`, `.intervinientes`, `.numero_causa`

**Nota:** El campo `observaciones` (textarea) persiste en sub-panel Información (sub-tab del panel derecho).

### `gestion-penal.html` — Área Penal
**Rol:** Coordinador Penal / Abogado Penal
**Funcionalidades:**
- Cola de Cartas Suceso: lista de `SACO.CARTA_SUCESO_QUEUE` con acción "Convertir" o "Ignorar"
- "Convertir" → modal con tipo de gestión + letrado por línea → elimina de la cola
- "Ignorar" → elimina de la cola
- Tabla causas activas: `SACO.CAUSAS_PENALES` con barra de progreso, letrado, línea, estado
- Sidebar: letrados por línea (de `LINEAS_FERROVIARIAS`), panel evaluación GAJ (decorativo), quick links
- Botón "Nueva Causa Penal" → `alta-expediente.html?area=PENAL`

**Estado que modifica:** `SACO.CARTA_SUCESO_QUEUE` (splice al convertir/ignorar)

---

## 10. Páginas pendientes de implementar

Las siguientes páginas están diseñadas funcionalmente pero no codificadas aún. Claude Code las implementa en este orden de prioridad:

### P1 — `previsión-economica.html` (Alta prioridad)
**Rol:** Coordinador / Referente
**Basado en:** Excel de Previsión de Juicios (~1.800 causas)
**Funcionalidades a implementar:**
- Filtros: año, área (Civil/Laboral), abogado, estado procesal, pronóstico (Favorable/Desfavorable)
- Tabla principal: carátula, fuero, N° causa PJN, monto original, monto actualizado (dic.), estado procesal, pronóstico, abogado
- Cards de resumen: total causas activas, monto total previsionado, % favorables
- Ordenamiento por columna (click en header)
- Fila expandible: muestra historial por año (2021 → actual)
- Botón "Vincular expediente SACO" en cada fila (modal de búsqueda)
- Datos mock en `mock.js` bajo `SACO.PREVISION_JUICIOS`

### P2 — `reasignacion.html` o modal de reasignación (Alta prioridad)
**Rol:** Coordinador de área
**Funcionalidades:**
- Modal accesible desde el detalle del expediente (botón "Reasignar")
- Muestra: letrado actual, área, carga de trabajo por letrado
- Selector de nuevo letrado + campo de justificación obligatorio
- Al confirmar: actualiza `abogado` en el expediente y agrega movimiento tipo `DERIVACION`

---

## 11. Cómo modificar páginas existentes

### Reglas generales
1. **Nunca reescribir una página completa** a menos que se indique explícitamente. Hacer edits quirúrgicos.
2. **Siempre preservar** los `id` de elementos que el JS referencia.
3. **Siempre preservar** el bloque `tailwind.config` — es idéntico en todas las páginas.
4. Al agregar una sección nueva, respetar el sistema de grids existente (`grid-cols-12`).

### Agregar un campo al formulario de alta
- Identificar la sección correspondiente (1: Origen y Tipo, 2: Detalles, 3: Asignación, 4: Docs)
- Agregar dentro del `<div class="grid ...">` correcto
- Si el campo es condicional: usar `id` + `classList.toggle('hidden', condicion)`
- Agregar el campo al resumen lateral actualizando `updateResumen()`

### Agregar una columna a una tabla
- Agregar `<th>` en el `<thead>` con la clase estándar de headers
- Agregar `<td>` en la función de render (dentro del template literal del `map`)
- No agregar borders verticales

### Agregar un tipo de movimiento
- Agregar el valor al array `tiposMov` en `detalle-expediente.html`
- Agregar el ícono correspondiente al objeto `tipoIcons`

### Modificar los datos mock
- Editar `src/data/mock.js` directamente
- El objeto es `window.SACO` — todas las páginas lo leen al cargar
- Agregar datos coherentes con los tipos, estados y áreas documentados en Sección 8

---

## 12. Terminología del dominio (usar siempre estos términos en el código)

| Término en el UI | Variable/código | Significado |
|-----------------|-----------------|-------------|
| Expediente | `expediente` | Caso/registro judicial en SACO |
| N° Interno | `numero_interno` | P-0001/2026 — autogenerado |
| N° EE | `expediente_electronico_gde` | Código GDE del expediente electrónico |
| N° Causa | `numero_causa` | Número judicial (FSM, IPP, CFP...) |
| Carátula | `caratula` | Título del expediente |
| Mesa SACO | — | Área administrativa que recibe y asigna |
| Letrado / Abogado | `abogado` | Profesional asignado al caso |
| Área | `area` | CIVIL / LABORAL / PENAL |
| Tipo de Gestión | `tipo_gestion` | 27 subtipos en total (CIVIL 12, LABORAL 8, PENAL 7) |
| Canal | `canal_ingreso` | EE_GDE / MEMO_GDE / MAIL |
| GDE | — | Gestión Documental Electrónica (plataforma Estado) |
| IFGRA | — | Informe Gráfico (tipo doc GDE con firma digital) |
| MEMO | — | Memorándum GDE |
| NOTA | — | Nota GDE (respuesta) |
| OJ | — | Oficio Judicial (tipo doc GDE) |
| EE | — | Expediente Electrónico GDE |
| SIGEJ | `numero_sigej` | Sistema PTN de gestión de juicios |
| PJN | — | Portal Judicial de la Nación |
| SS | `numero_siniestro` | Sin Siniestro (valor: "SS SOFSE") |
| Reincidencia | `expediente_relacionado` | Misma causa → mismo letrado |
| Variante A | `variante = 'A'` | Demanda por cédula física |
| Variante B | `variante = 'B'` | Demanda por GDE directo (Estado Nacional) |
| Carta Suceso | `CARTA_SUCESO` | Mail SAE de seguridad → denuncia penal |
| GAJ | — | Gerencia de Asuntos Jurídicos (evalúa admisibilidad) |
| SGSySL | — | Subgerencia de Siniestros y Servicios a las Líneas |
| GCO | — | Gerencia de Contrataciones y Obras |

**Nunca usar en el UI:** "case", "file", "record", "intake", "assignment" ni ningún término en inglés visible al usuario.

---

## 13. Prohibiciones explícitas (cosas que Claude Code no debe hacer)

```
✗ No usar localStorage ni sessionStorage
✗ No agregar React, Vue, Angular, ni ningún framework JS
✗ No agregar npm/node_modules — todo es CDN
✗ No usar fetch() ni llamadas a APIs reales
✗ No usar colores hex que no estén en el design system
✗ No crear borders 1px solid con colores oscuros para seccionar
✗ No usar text-black ni bg-black
✗ No escribir texto en inglés visible al usuario
✗ No crear archivos CSS externos — los estilos van en <style> de cada página
✗ No mover la lógica de negocio a archivos separados (todo en el <script> de la página)
✗ No eliminar el bloque tailwind.config de ninguna página
✗ No eliminar los div#sidebar-mount y div#topbar-mount
✗ No cambiar los paths relativos de los scripts (../data/mock.js, ../components/shared.js)
```

---

## 14. Convenciones de código

### JavaScript
```javascript
// IDs de elementos: kebab-case
document.getElementById('modal-area')

// Variables: camelCase
let currentQueueItem = null;

// Funciones que renderizan HTML: nombre empieza con render
function renderQueue(data) { ... }

// Funciones que abren modales: nombre empieza con abrir/modal/open
function abrirModalAsignar(id) { ... }
function modalMovimiento() { ... }

// Funciones de eventos: nombre descriptivo de la acción
function confirmarAsignacion() { ... }
function onAreaChange() { ... }

// Templates de HTML en JS: siempre template literals
tbody.innerHTML = data.map(item => `<tr>...</tr>`).join('');

// Estado de UI: togglear 'hidden' de Tailwind
el.classList.toggle('hidden', condicion);
el.classList.add('hidden');
el.classList.remove('hidden');
```

### HTML
```html
<!-- Secciones de código: siempre comentadas -->
<!-- ── Nombre de la sección ─────────────────── -->

<!-- IDs en elementos interactivos: siempre presentes, kebab-case -->
<input id="num-causa" .../>
<select id="area-select" .../>
<div id="queue-tbody" .../>

<!-- Onclick inline: aceptable para el prototipo -->
<button onclick="confirmarAsignacion()">...</button>
```

---

## 15. Checklist antes de entregar cualquier cambio

Claude Code verifica estos puntos antes de considerar una tarea completada:

- [ ] La página abre sin errores de consola
- [ ] El sidebar y topbar se montan correctamente
- [ ] Los colores usan solo los tokens del design system
- [ ] No hay texto en inglés visible al usuario
- [ ] Los datos mock tienen sentido con el dominio SACO
- [ ] Las reglas de negocio de la Sección 8 se respetan
- [ ] Los `id` de elementos referenciados por JS existen en el HTML
- [ ] Los paths de scripts son correctos (`../data/mock.js`, `../components/shared.js`)
- [ ] El bloque `tailwind.config` está completo y sin modificar
- [ ] No se crearon dependencias externas nuevas sin documentarlas aquí

---

## 16. Historial de implementación

| v1.6 | Abr 2026 | mock.js: EXPEDIENTES_ABOGADO reemplazado por 6 expedientes demo (2 causas + 1 suelto); bandeja-abogado: filtros horizontales + chips, tabs Activos/Urgentes, agrupar/desagrupar causa en runtime, "Ver todo" navega a causa-detalle; causa-detalle.html: nueva página timeline unificado por causa; CLAUDE.md actualizado |

---

*Mantenido por: Gil Cristian-Feinsilber Naiara — actualizar con cada sprint.*