# FORMULARIOS — Campos por tipo de gestión (dos etapas)

Fuente: `src/data/mock.js → FORMULARIOS`

## Etapas

| Etapa | Quién completa | Cuándo |
|-------|---------------|--------|
| `mesa[]` | Administrativo Mesa SACO | Al crear el expediente en `alta-expediente.html` |
| `abogado[]` | Letrado asignado | Desde la sección "Campos a Completar" en `detalle-expediente.html` |

## Campos comunes (fijos para todos los tipos)

Estos campos se muestran en `alta-expediente.html` en la sección "Datos de Recepción" **para todos los tipos**, independientemente del tipo de gestión seleccionado. Se definen en `CAMPOS_COMUNES_MESA` (no en FORMULARIOS).

| Campo | Tipo | Notas |
|-------|------|-------|
| `mesa_oficio_judicial` | text | N° OJ |
| `mesa_tipo_intervencion` | select | Opciones dinámicas según área: Civil/Laboral → Parte Actora / Parte Demandada / Sin intervención; Penal → Denunciante / Sin intervención |
| `mesa_fecha_requerimiento` | date | — |
| `mesa_datos_contacto` | text (full) | Teléfono, Mail, Dirección, Contacto |
| `mesa_comentarios` | textarea (full) | — |

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
| `select` | Select con `options[]` — pueden ser strings `['A','B']` u objetos `[{value,label}]` |

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
  options: [...],           // requerido para type:'select' (strings u objetos {value,label})
  mono: true,               // opcional — aplica font-mono
  onchange: 'onSancionChange', // opcional — nombre de función JS a llamar al cambiar
  dependsOn: { field: 'abg_sancion', value: 'Suspensión' }, // opcional — campo condicional
}
```

## Helper

```javascript
SACO.getCamposFormulario(tipoGestion, etapa, area)
// → [] de campos
// Caso especial: OFICIO + area=PENAL → usa form.variante_penal[etapa]
```

## Campos por tipo

### OFICIO — Oficios Civil / Laboral
| Etapa | Campos |
|-------|--------|
| mesa | nro_doc_gde, num_causa, juzgado, tribunal, secretaria, organismo, caratula, fecha_recep_of |
| abogado | caracter (select), objeto_req, area_informante, fecha_contestacion |

### OFICIO — Oficios Penales (Penal) — `variante_penal`
| Etapa | Campos |
|-------|--------|
| mesa | num_causa, caratula, juzgado, fiscalia, comisaria, tribunal, linea, fecha_recep_of |
| abogado | datos_contacto, fecha_hecho, lugar_hecho, damnificado, imputado, tipo_hecho (select), tipo_solicitud (select) |

### CARTA_DOC — Carta Documento (Civil / Laboral)
| Etapa | Campos |
|-------|--------|
| mesa | fecha_cd, nro_ident, remitente |
| abogado | monto_reclam, objeto, requiere_resp (select Sí/No), area_informante, vinculacion, fecha_resp |

### MEDIACION — Mediación / SECLOS (Civil / Laboral)
| Etapa | Campos |
|-------|--------|
| mesa | tipo_mediacion (select), requirente, requerido, mediador, fecha_audiencia |
| abogado | objeto_reclamo, monto_reclam, resultado, fecha_cierre, req_asistencia (select Sí/No) |

### SECLO — SECLO (Laboral) ← nuevo tipo
| Etapa | Campos |
|-------|--------|
| mesa | requirente, cuil_req, requerido, objeto_reclamo |
| abogado | monto_reclam, req_asistencia (select Sí/No) |

### BENEFICIO_LITIGAR — Beneficio de litigar sin gastos (Civil)
| Etapa | Campos |
|-------|--------|
| mesa | caratula, juzgado, secretaria, exp_vinculado |
| abogado | fecha_recep, plazo_contestar |

### COBRO_CANON — Cobro de Cánones (Civil)
| Etapa | Campos |
|-------|--------|
| mesa | permisionario, ref_contrato, area_req, fecha_req |
| abogado | periodo, monto_info, monto_act, garante (select Sí/No), inicio_prescr |

### RECLAMO_CONTRAT — Reclamo a Contratistas (Civil)
| Etapa | Campos |
|-------|--------|
| mesa | contratista, objeto_exp, area_req, fecha_req |
| abogado | inicio_prescr, motivo_jur, monto_reclamar |

### LANZAMIENTO — Lanzamientos (Civil)
| Etapa | Campos |
|-------|--------|
| mesa | nro_memo, area_req (select Comercial/Líneas), fecha_req |
| abogado | linea, lugar_ocup, notificacion, documental (select Completo/Incompleto) |

### RECUPERO — Recuperos (Civil)
| Etapa | Campos |
|-------|--------|
| mesa | num_siniestro, fecha_siniestro, linea, fecha_req |
| abogado | pan, seguro, monto_reclamar, documental (select Completo/Incompleto) |

### EJECUCION_GAR — Ejecución de Pólizas (Civil)
| Etapa | Campos |
|-------|--------|
| mesa | contratista, area_req, fecha_ingreso, nro_exp |
| abogado | aseguradora, nro_polizas, tipo_polizas (select), monto_ejecutar, fecha_rescision, fecha_prescr, instruccion_danos, acuerdo |

### DEMANDA_CIVIL — Demanda Civil (Civil)
| Etapa | Campos |
|-------|--------|
| mesa | num_causa, juzgado, secretaria, caratula, abogado_contr, parte_actora, parte_dem, coactores, codemandados, fecha_inicio, juicio (select TIPO_JUICIO), monto |
| abogado | tipo_hecho (select TIPO_JUICIO), fecha_hecho, lugar_hecho, linea, num_siniestro |

### DEMANDA_LABORAL — Demanda Laboral (Laboral)
| Etapa | Campos |
|-------|--------|
| mesa | num_causa, juzgado, secretaria, caratula, abogado_contr, parte_actora, parte_dem, coactores, codemandados, fecha_inicio, juicio (select TIPO_JUICIO), monto |
| abogado | tipo_hecho (select TIPO_JUICIO), fecha_hecho, lugar_hecho, linea, num_siniestro |

### CONSIGNACION — Consignaciones (Laboral)
| Etapa | Campos |
|-------|--------|
| mesa | nombre_causante |
| abogado | fecha_deceso, herederos_leg, otros_hered, dir_hered, motivos, monto, tope_convenio (select Sí/No/Vizzoti), tope_aplicado, categoria, convenio |

### DESAFUERO — Desafueros (Laboral)
| Etapa | Campos |
|-------|--------|
| mesa | nombre_trab, fecha_ingreso |
| abogado | area_req, linea_req, motivo, tipo_hecho (select TIPO_HECHO_DESAFUERO), fecha_hecho, sancion (select, `onchange: 'onSancionChange'`), dias_suspension (condicional — visible solo si sancion = 'Suspensión'), fecha_informe, causa_penal, nro_ucit |

Nota: `abg_dias_suspension` usa `dependsOn: { field: 'abg_sancion', value: 'Suspensión' }`. En detalle-expediente.html, `onSancionCambio(valor)` muestra/oculta el campo.

### QUERELLA — Querellas (Penal)
| Etapa | Campos |
|-------|--------|
| mesa | area_req, num_causa, juzgado, fiscalia, tribunal, ufi, linea |
| abogado | caratula, tipo_hecho (select TIPO_HECHO_PENAL), fecha_hecho, lugar_hecho |

### DEFENSA_CIVIL — Defensas Civiles (Civil)
| Etapa | Campos |
|-------|--------|
| mesa | num_causa, juzgado, caratula, datos_depend |
| abogado | tipo_hecho (select TIPO_HECHO_PENAL), fecha_hecho, lugar_hecho, linea |

### DEFENSA_PENAL — Defensas Penales (Penal)
| Etapa | Campos |
|-------|--------|
| mesa | area_req, empleado, linea |
| abogado | num_causa, juzgado, fiscalia, tribunal, ufi, caratula, imputados, tipo_hecho (select TIPO_HECHO_PENAL), fecha_hecho, lugar_hecho |

### CARTA_SUCESO — Carta Suceso (SAE) (Penal)
| Etapa | Campos |
|-------|--------|
| mesa | *(ninguno — se origina desde la cola de cartas)* |
| abogado | documental, nro_suceso, jurisdiccion (select), tipo_hecho (select TIPO_HECHO_PENAL), fecha_hecho, lugar_hecho, linea, juzgado, fiscalia, num_causa, denunciante |

### PEDIDO_CAUSA_PENAL — Pedido de Causa Penal (Civil / Laboral / Penal)
| Etapa | Campos |
|-------|--------|
| mesa | *(ninguno)* |
| abogado | num_causa, juzgado, fiscalia, tribunal, ufi, caratula, tipo_hecho (select TIPO_HECHO_PENAL), fecha_hecho, lugar_hecho, linea, num_siniestro |

Nota: Sin campos en Mesa SACO. Asignación automática.

### OTROS — Otros (Civil / Laboral / Penal) ← ahora en las 3 áreas
| Etapa | Campos |
|-------|--------|
| mesa | fecha_ingreso, descripcion, remitente, tema |
| abogado | requiere_resp (select Sí/No), area_informante, vinculacion, fecha_resp |

Nota: Antes solo existía en PENAL (como `OTRAS`). Ahora el código es `OTROS` y aplica a las 3 áreas. PENAL mantiene su entrada en TIPOS_GESTION con code `OTRAS` — los dos resuelven al mismo FORMULARIOS.OTROS.

---

## Catálogos de opciones (OPCIONES)

Definidos en `src/data/mock.js → const OPCIONES`, expuestos como `window.SACO.OPCIONES`.

| Catálogo | Uso |
|----------|-----|
| `TIPO_JUICIO` | select juicio en DEMANDA_CIVIL / DEMANDA_LABORAL |
| `TIPO_HECHO_DESAFUERO` | select tipo_hecho en DESAFUERO |
| `TIPO_HECHO_PENAL` | select tipo_hecho en OFICIO penal, QUERELLA, DEFENSA_CIVIL, DEFENSA_PENAL, CARTA_SUCESO, PEDIDO_CAUSA_PENAL |
| `TIPO_SOLICITUD_PENAL` | select tipo_solicitud en OFICIO penal |
| `TIPO_INTERVENCION_CIVIL_LAB` | select mesa_tipo_intervencion (área Civil o Laboral) |
| `TIPO_INTERVENCION_PENAL` | select mesa_tipo_intervencion (área Penal) |
| `AREA_REQ_LANZAMIENTO` | select area_req en LANZAMIENTO |

---

## Reglas de implementación (para Claude Code)

1. **IDs de campos mesa**: prefijados con `mesa_` (ej: `mesa_caratula`)
2. **IDs de campos abogado**: prefijados con `abg_` (ej: `abg_num_causa`)
3. **IDs de inputs en detalle**: prefijados con `abg_inp_` (ej: `abg_inp_abg_num_causa`)
4. **Wrappers en detalle**: `id="wrap_abg_{campo.id}"` (ej: `wrap_abg_abg_dias_suspension`)
5. Los valores del abogado se guardan en `exp.campos_abogado[fieldId]`
6. El campo `linea` en etapa `mesa` dispara `onLineaChange()` que actualiza el letrado en Penal
7. El campo `causa` dispara `onNumeroCausaChange()` para la alerta de duplicado
8. `OFICIO` en área PENAL usa `form.variante_penal` en lugar de `form.mesa` / `form.abogado`
9. Campos con `dependsOn` se renderizan con clase `hidden` por defecto; se muestran via JS
10. Campos con `onchange: 'onSancionChange'` generan `onchange="onSancionCambio(this.value)"` en el select
11. `options[]` puede contener strings simples o `{value, label}` — el renderizador maneja ambos
