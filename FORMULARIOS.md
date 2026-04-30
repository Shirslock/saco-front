# FORMULARIOS — Campos por tipo de gestión (dos etapas)

Fuente: `src/data/mock.js → FORMULARIOS`

## Etapas

| Etapa | Quién completa | Cuándo |
|-------|---------------|--------|
| `mesa[]` | Administrativo Mesa SACO | Al crear el expediente en `alta-expediente.html` |
| `abogado[]` | Letrado asignado | Desde la sección "Campos a completar" en `detalle-expediente.html` |

## Tipos de campo

| type | Descripción |
|------|-------------|
| `text` | Input de texto libre |
| `date` | Selector de fecha (input[type=date]) |
| `money` | Input numérico con prefijo $ y formato argentino |
| `textarea` | Área de texto multilínea |
| `boolean` | Toggle switch (valor true/false oculto) |
| `causa` | Input text que dispara `onNumeroCausaChange()` (alerta duplicado) |
| `linea` | Select dinámico de `SACO.LINEAS_FERROVIARIAS` |
| `juzgado` | Select dinámico de `SACO.JUZGADOS` |
| `select` | Select con `options[]` fijos definidos en el campo |

## Propiedades de un campo

```javascript
{
  id: 'mesa_caratula',      // ID del elemento HTML (prefijo mesa_ o abg_)
  label: 'Carátula / Título',
  type: 'text',
  placeholder: '...',       // opcional
  required: true,           // opcional — solo informativo para crearExpediente()
  hint: 'SS = Sin Siniestro', // opcional — texto de ayuda debajo del input
  defaultToday: true,       // opcional — solo para type:'date', inicializa con hoy
  full: true,               // opcional — ocupa col-span-2 en el grid
  options: [...],           // requerido para type:'select'
  mono: true,               // opcional — aplica font-mono
}
```

## Helper

```javascript
SACO.getCamposFormulario(tipoGestion, etapa, area)
// → [] de campos
// Caso especial: OFICIO + area=PENAL → usa form.variante_penal[etapa]
```

## Campos por tipo

### CARTA_DOC — Carta Documento (Civil / Laboral)
| Etapa | Campos |
|-------|--------|
| mesa | caratula, fecha_hecho, fecha_recepcion, linea, num_siniestro |
| abogado | num_causa, juzgado, num_sigej, obs |

### CARTA_SUCESO — Carta Suceso SAE (Penal)
| Etapa | Campos |
|-------|--------|
| mesa | *(ninguno — se origina desde la cola de cartas)* |
| abogado | caratula, fecha_hecho, linea, num_causa, num_sumario, comisaria, tipo_hecho, obs |

### COBRO_CANON — Cobro de Cánones (Civil)
| Etapa | Campos |
|-------|--------|
| mesa | caratula, fecha_recepcion, linea, monto |
| abogado | num_causa, juzgado, num_sigej, obs |

### CONSIGNACION — Consignaciones (Laboral)
| Etapa | Campos |
|-------|--------|
| mesa | caratula, fecha_recepcion |
| abogado | num_causa, juzgado, parte_actora, parte_dem, fecha_hecho, linea, monto, tipo_hecho, obs |

### DEFENSA_CIVIL — Defensas Civiles (Civil)
| Etapa | Campos |
|-------|--------|
| mesa | abogado, num_causa, juzgado, caratula, datos_depend, tipo_hecho, fecha_hecho, lugar_hecho, linea, etapa_proc |
| abogado | *(ninguno)* |
Nota: Se eliminó la indicación anterior de "sin campos".

### DEFENSA_PENAL — Defensas Penales (Penal)
| Etapa | Campos |
|-------|--------|
| mesa | caratula, fecha_hecho, fecha_recepcion, linea, num_sumario, comisaria, requirente, mail_req, tel_req, tipo_hecho, lugar_hecho, empleado |
| abogado | *(ninguno)* |

### DEMANDA_CIVIL — Demanda Civil (Civil)
| Etapa | Campos |
|-------|--------|
| mesa | abogado, num_causa, juzgado, caratula, abogado_contr, parte_actora, parte_dem, coactores, codemandados, fecha_inicio, juicio, monto, tipo_hecho, fecha_hecho, lugar_hecho, linea, num_siniestro, etapa_proc |
| abogado | *(ninguno)* |
Nota: Se eliminaron ley_25344 y variante de ingreso.

### DEMANDA_LABORAL — Demanda Laboral (Laboral)
| Etapa | Campos |
|-------|--------|
| mesa | abogado, num_causa, juzgado, caratula, abogado_contr, parte_actora, parte_dem, coactores, codemandados, fecha_inicio, juicio, monto, tipo_hecho, fecha_hecho, lugar_hecho, linea, num_siniestro, etapa_proc |
| abogado | *(ninguno)* |
Nota: Se eliminaron ley_25344 y variante de ingreso.

### DESAFUERO — Desafueros (Laboral)
| Etapa | Campos |
|-------|--------|
| mesa | caratula, fecha_recepcion, linea, empleado |
| abogado | num_causa, juzgado, parte_actora, sindicato, fecha_hecho, monto, obs |

### EJECUCION_GAR — Ejecución de Pólizas (Civil)
| Etapa | Campos |
|-------|--------|
| mesa | abogado, contratista, area_req, nro_exp, causa_vinculada, cuantif_danos, fecha_ingreso, es_extrajudicial (boolean), abogado_extraj (condicional — visible solo si es_extrajudicial = Sí) |
| abogado | aseguradora, nro_polizas, tipo_polizas, monto_ejecutar, fecha_prescr, fecha_rescision, acuerdo |
Nota: fecha_rescision se movió a etapa Abogado. causa_vinculada y cuantif_danos se agregaron a etapa Mesa SACO. abogado_extraj es condicional — aparece solo si es_extrajudicial = Sí.

### LANZAMIENTO — Lanzamientos (Civil)
| Etapa | Campos |
|-------|--------|
| mesa | caratula, fecha_recep, linea, lugar_ocup, autorizado (boolean) |
| abogado | num_causa, obs |

### MEDIACION — Mediaciones / SECLOS (Civil / Laboral)
| Etapa | Campos |
|-------|--------|
| mesa | caratula, parte_actora, fecha_hecho, fecha_recepcion, linea |
| abogado | num_causa, juzgado, mediador, resultado, obs |

### OFICIO — Oficios (Civil / Laboral)
| Etapa | Campos |
|-------|--------|
| mesa | caratula, requirente, tipo_solicitud, fecha_hecho, fecha_recep, linea, obs |
| abogado | num_causa, juzgado, obs |

### OFICIO — Oficios Penales (Penal) — `variante_penal`
| Etapa | Campos |
|-------|--------|
| mesa | caratula, requirente, mail_req, tel_req, dir_req, tipo_solicitud, lugar_hecho, tipo_hecho, fecha_hecho, linea |
| abogado | num_sumario, obs |

### PEDIDO_CAUSA_PENAL — Pedido de Causa Penal (Civil / Laboral / Penal)
| Etapa | Campos |
|-------|--------|
| mesa | *(ninguno)* |
| abogado | linea, num_causa, num_sumario, comisaria, requirente, tipo_solicitud, fecha_hecho, obs |
Nota: Sin campos en Mesa SACO. Asignación automática: Civil/Laboral por FIFO, Penal por línea ferroviaria.

### QUERELLA — Querellas (Penal)
| Etapa | Campos |
|-------|--------|
| mesa | caratula, querellante, fecha_hecho, fecha_recep, linea, num_sumario, comisaria, tipo_delito, descripcion |
| abogado | *(ninguno)* |

### RECLAMO_CONTRAT — Reclamo a Contratistas (Civil)
| Etapa | Campos |
|-------|--------|
| mesa | caratula, fecha_recep, linea, monto, parte_dem |
| abogado | num_causa, juzgado, obs |

### RECUPERO — Recuperos (Civil)
| Etapa | Campos |
|-------|--------|
| mesa | caratula, fecha_hecho, fecha_recep, linea, monto |
| abogado | num_causa, juzgado, obs |

### BENEFICIO_LITIGAR — Beneficio de litigar sin gastos (Civil)
| Etapa | Campos |
|-------|--------|
| mesa | caratula, juzgado, exp_vinculado, abogado |
| abogado | estado_proc, plazo_interv, resultado |

### OTROS — Otros (Penal)
| Etapa | Campos |
|-------|--------|
| mesa | caratula, descripcion |
| abogado | *(ninguno)* |

---

## Reglas de implementación (para Claude Code)

1. **IDs de campos mesa**: prefijados con `mesa_` (ej: `mesa_caratula`)
2. **IDs de campos abogado**: prefijados con `abg_` (ej: `abg_num_causa`)
3. **IDs de inputs en detalle**: prefijados con `abg_inp_` (ej: `abg_inp_abg_num_causa`)
4. Los valores del abogado se guardan en `exp.campos_abogado[fieldId]`
5. El campo `linea` en etapa `mesa` dispara `onLineaChange()` que actualiza el letrado en Penal
6. El campo `causa` dispara `onNumeroCausaChange()` para la alerta de duplicado
7. `OFICIO` en área PENAL usa `form.variante_penal` en lugar de `form.mesa` / `form.abogado`
