// ── SACO Mock Data ─────────────────────────────────────────────────────────

// ── Matriz canal × área (Matriz_Actualizada.xlsx — Abril 2026) ──────────────
// canal: sugerido por defecto | canales: todos los canales válidos para el tipo
const TIPOS_GESTION = {
  CIVIL: [
    { code: 'OFICIO',            label: 'Oficios',                          canal: 'EE_GDE',   canales: ['EE_GDE','MEMO_GDE'] },
    { code: 'CARTA_DOC',         label: 'Carta Documento',                  canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'MEDIACION',         label: 'Mediaciones',                      canal: 'EE_GDE',   canales: ['EE_GDE','MEMO_GDE'] },
    { code: 'BENEFICIO_LITIGAR', label: 'Beneficios de litigar sin gastos', canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'COBRO_CANON',       label: 'Cobro de Cánones',                 canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'RECLAMO_CONTRAT',   label: 'Reclamo a Contratista / Proveedor',canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'LANZAMIENTO',       label: 'Lanzamientos',                     canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'RECUPERO',          label: 'Recuperos',                        canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'EJECUCION_GAR',     label: 'Ejecución de Pólizas',             canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'DEMANDA_CIVIL',     label: 'Demanda Civil',                    canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'DEMANDA_LABORAL',   label: 'Demanda Laboral',                  canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'DEFENSA_CIVIL',      label: 'Defensas Civiles',                 canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'PEDIDO_CAUSA_PENAL', label: 'Pedido de Causa Penal',            canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'OTRAS',              label: 'Otras presentaciones / gestiones', canal: 'EE_GDE',   canales: ['EE_GDE','MEMO_GDE','MAIL'] },
  ],
  LABORAL: [
    { code: 'OFICIO',            label: 'Oficios',                          canal: 'EE_GDE',   canales: ['EE_GDE','MEMO_GDE'] },
    { code: 'CARTA_DOC',         label: 'Carta Documento',                  canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'SECLO',             label: 'SECLO',                            canal: 'EE_GDE',   canales: ['EE_GDE','MEMO_GDE'] },
    { code: 'DEMANDA_LABORAL',   label: 'Demanda Laboral',                  canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'CONSIGNACION',      label: 'Consignaciones',                   canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'DESAFUERO',          label: 'Desafueros',                       canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'PEDIDO_CAUSA_PENAL', label: 'Pedido de Causa Penal',            canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'OTRAS',              label: 'Otras presentaciones / gestiones', canal: 'EE_GDE',   canales: ['EE_GDE','MEMO_GDE','MAIL'] },
  ],
  PENAL: [
    { code: 'OFICIO',            label: 'Oficios',                          canal: 'EE_GDE',   canales: ['EE_GDE','MEMO_GDE'] },
    { code: 'MEDIACION',         label: 'Mediaciones',                      canal: 'EE_GDE',   canales: ['EE_GDE','MEMO_GDE'] },
    { code: 'QUERELLA',          label: 'Querellas',                        canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'DEFENSA_PENAL',     label: 'Defensas Penales',                 canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'CARTA_SUCESO',       label: 'Carta Suceso (SAE)',               canal: 'MAIL',     canales: ['MAIL'] },
    { code: 'PEDIDO_CAUSA_PENAL', label: 'Pedido de Causa Penal',            canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'OTRAS',              label: 'Otras presentaciones / gestiones', canal: 'EE_GDE',   canales: ['EE_GDE','MEMO_GDE','MAIL'] },
  ],
};

// ── Juzgados (catálogo — datos reales del Excel) ───────────────────────────
const JUZGADOS = [
  // Juzgados
  { code: 'JUZ_001', label: 'Juzgado Federal Civil y Comercial N°1 — CABA',              tipo: 'juzgado' },
  { code: 'JUZ_002', label: 'Juzgado Federal Civil y Comercial N°2 — CABA',              tipo: 'juzgado' },
  { code: 'JUZ_003', label: 'Juzgado Federal en lo Criminal y Correccional N°1 — CABA', tipo: 'juzgado' },
  { code: 'JUZ_004', label: 'Juzgado Nacional del Trabajo N°30 — CABA',                 tipo: 'juzgado' },
  { code: 'JUZ_005', label: 'Juzgado Federal de Córdoba',                               tipo: 'juzgado' },
  { code: 'JUZ_006', label: 'Juzgado Contencioso Administrativo Federal N°1',           tipo: 'juzgado' },
  { code: 'JUZ_007', label: 'Juzgado Federal de Mendoza',                               tipo: 'juzgado' },
  { code: 'JUZ_008', label: 'Juzgado Federal de Rosario',                               tipo: 'juzgado' },
  { code: 'JUZ_009', label: 'Juzgado Federal de Tucumán',                               tipo: 'juzgado' },
  // Fiscalías
  { code: 'FIS_001', label: 'Fiscalía General La Plata',                                tipo: 'fiscalia' },
  { code: 'FIS_002', label: 'Fiscalía de Instrucción Córdoba',                          tipo: 'fiscalia' },
  { code: 'FIS_003', label: 'Fiscalía Regional Rosario',                                tipo: 'fiscalia' },
  // UFIs
  { code: 'UFI_001', label: 'UFI N°3 Lomas de Zamora',                                  tipo: 'ufi' },
  { code: 'UFI_002', label: 'UFI N°1 Morón',                                            tipo: 'ufi' },
  { code: 'UFI_003', label: 'UFI N°2 San Isidro',                                       tipo: 'ufi' },
  // Tribunales
  { code: 'TRI_001', label: 'Cámara Federal Civil y Comercial — CABA',                  tipo: 'tribunal' },
  { code: 'TRI_002', label: 'Cámara Nacional del Trabajo — CABA',                       tipo: 'tribunal' },
  { code: 'TRI_003', label: 'Cámara Contencioso Administrativo Federal',                tipo: 'tribunal' },
  // Comisarías
  { code: 'SEG_001', label: 'Comisaría 25 de Mayo 1°',                                  tipo: 'comisaria' },
  { code: 'SEG_002', label: 'Gendarmería — Agrupación Aviación Campo de Mayo',          tipo: 'comisaria' },
  { code: 'SEG_003', label: 'Comisaría Almirante Brown 7°',                             tipo: 'comisaria' },
  { code: 'SEG_004', label: 'Comisaría 1ra La Plata',                                   tipo: 'comisaria' },
  { code: 'SEG_005', label: 'Comisaría PFA N°1',                                        tipo: 'comisaria' },
  { code: 'SEG_006', label: 'Gendarmería — Agrupación III Corrientes',                  tipo: 'comisaria' },
  { code: 'SEG_007', label: 'Comisaría Rosario Centro',                                 tipo: 'comisaria' },
];

const LINEAS_FERROVIARIAS = [
  {
    code: 'LIN_001',
    label: 'Roca',
    abogado: 'Dantiochia, Luis',
    abogados: ['Dantiochia, Luis', 'Fisicaro, Narella'],
  },
  {
    code: 'LIN_002',
    label: 'San Martín',
    abogado: 'Dantiochia, Luis',
    abogados: ['Dantiochia, Luis', 'Biondi, Walter', 'Prinotti, Maximiliano'],
  },
  {
    code: 'LIN_003',
    label: 'Sarmiento',
    abogado: 'Dantiochia, Luis',
    abogados: ['Dantiochia, Luis'],
  },
  {
    code: 'LIN_004',
    label: 'Mitre',
    abogado: 'Dantiochia, Luis',
    abogados: ['Dantiochia, Luis', 'Desideri, Gustavo'],
  },
  {
    code: 'LIN_005',
    label: 'Belgrano Sur',
    abogado: 'Dantiochia, Luis',
    abogados: ['Dantiochia, Luis', 'Biondi, Walter'],
  },
  {
    code: 'LIN_006',
    label: 'Regionales',
    abogado: 'Dantiochia, Luis',
    abogados: ['Dantiochia, Luis'],
  },
  {
    code: 'LIN_007',
    label: 'Larga Distancia',
    abogado: 'Dantiochia, Luis',
    abogados: [
      'Dantiochia, Luis',
      'Desideri, Gustavo',
      'Biondi, Walter',
      'Prinotti, Maximiliano',
      'Fisicaro, Narella',
    ],
  },
  {
    code: 'LIN_008',
    label: 'Central',
    abogado: 'Dantiochia, Luis',
    abogados: ['Dantiochia, Luis'],
  },
  {
    code: 'LIN_009',
    label: 'Tren de la Costa',
    abogado: 'Dantiochia, Luis',
    abogados: ['Dantiochia, Luis', 'Desideri, Gustavo'],
  },
];

const ABOGADOS = {
  CIVIL: [
    'Benitez, Adriana',
    'Casano, Felix',
    'Crespi, Facundo',
    'Escalante, Carolina',
    'Ferrari, Jessica',
    'Gonzalez, Araceli',
    'Juarez, Pal',
    'Perez, Fernanda',
    'Russo, Mauricio',
    'Sbarbati, Pablo',
    'Santillan, Melisa',
    'Vega, Diego',
    'Vetrano, Magdalena',
  ],
  LABORAL: [
    'Armani, Giuliana',
    'Gonzalez, Araceli',
    'Molinelli, Rodrigo',
    'Pires, Daiana',
    'Wilson, Eduardo',
  ],
  PENAL: [
    'Dantiochia, Luis',
    'Biondi, Walter',
    'Desideri, Gustavo',
    'Fisicaro, Narella',
    'Prinotti, Maximiliano',
  ],
};

const ESTADOS = [
  { code: 'EN_TRAMITE',           label: 'En Trámite',           color: 'secondary' },
  { code: 'EN_PLAZO_CONTESTAR',   label: 'En Plazo Contestar',   color: 'primary' },
  { code: 'SUSPENSION_TERMINOS',  label: 'Suspensión Términos',  color: 'tertiary' },
  { code: 'EN_PRUEBA',            label: 'En Prueba',            color: 'tertiary' },
  { code: 'PENDIENTE_GDE',        label: 'Pendiente GDE',        color: 'tertiary' },
  { code: 'CUMPLIDO',             label: 'Cumplido',             color: 'success' },
  { code: 'ARCHIVADO',            label: 'Archivado',            color: 'neutral' },
  { code: 'URGENTE',              label: 'Urgente',              color: 'error' },
];

// Bandeja Mesa SACO
const QUEUE_MESA = [
  {
    id: 'Q-001', tipo: 'Oficio Judicial', ref: 'EX-2026-00441-APN-SACO#SOFSE',
    origen: 'Externo', canal: 'EE_GDE', area: 'CIVIL', estado: 'ASIGNADO',
    caratula: 'Juzgado Federal N°3 s/ información vía férrea Km 4.5',
    linea: 'LM', fecha: '2026-04-12', prioridad: 'NORMAL', abogado: 'Dr. Alejandro Rossi'
  },
  {
    id: 'Q-002', tipo: 'Carta Documento', ref: 'EX-2026-00449-APN-SACO#SOFSE',
    origen: 'Externo', canal: 'EE_GDE', area: 'LABORAL', estado: 'ASIGNADO',
    caratula: 'García, Roberto c/ SOFSE s/ diferencias salariales',
    linea: null, fecha: '2026-04-12', prioridad: 'NORMAL', abogado: 'Dr. Hernán Blanco'
  },
  {
    id: 'Q-003', tipo: 'Mediación Prejudicial', ref: 'EX-2026-00452-APN-SACO#SOFSE',
    origen: 'Externo', canal: 'EE_GDE', area: 'CIVIL', estado: 'ASIGNADO',
    caratula: 'Martínez, Ana c/ SOFSE s/ daños y perjuicios paso a nivel',
    linea: null, fecha: '2026-04-11', prioridad: 'NORMAL', abogado: 'Dra. Elena Ruiz'
  },
  {
    id: 'Q-004', tipo: 'Carta Suceso SAE', ref: 'MAIL-SAE-2026-0088',
    origen: 'Interno', canal: 'MAIL', area: 'PENAL', estado: 'ASIGNADO',
    caratula: 'Descarrilamiento Línea Mitre — Estación Palermo',
    linea: 'LM', fecha: '2026-04-13', prioridad: 'URGENTE', abogado: 'Dr. Marcos Gallo'
  },
  {
    id: 'Q-005', tipo: 'Memo GDE — Recupero', ref: 'ME-2026-00118-APN-SGSSL#SOFSE',
    origen: 'Interno', canal: 'MEMO_GDE', area: 'CIVIL', estado: 'ASIGNADO',
    caratula: 'Recupero daños vehículo — Paso a nivel Manuel Acosta',
    linea: 'LSM', fecha: '2026-04-10', prioridad: 'NORMAL', abogado: 'Dr. Sergio Fontana'
  },
];

// Expedientes del abogado (bandeja) — 1 por tipo de FORMULARIOS + 3 agrupados por causa
const EXPEDIENTES_ABOGADO = [

  // ── CAUSA FSM-11802/2023 — 3 expedientes agrupados ──────────────
  {
    id: 'C-0023/2026', area: 'CIVIL', tipo: 'DEMANDA_CIVIL',
    caratula: 'Martínez, Juan Carlos c/ SOFSE s/ daños y perjuicios — paso a nivel Km 4.5',
    numero_causa: 'FSM-11802/2023', es_principal: true,
    juzgado: 'Juzgado Federal Civil y Comercial N°1 — CABA',
    estado: 'EN_PRUEBA', estadoLabel: 'Prueba',
    fecha_recepcion: '2023-10-20',
    abogado: 'Casano, Felix', linea: 'LIN_004',
    tiene_alerta: true, alerta_msg: 'Vence período probatorio en 12 días',
    prioridad: 'ALTA', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_oficio_judicial: 'OJ-2023-441', mesa_tipo_intervencion: 'Demandada', mesa_comentarios: '' },
    campos_abogado: {},
    timeline: [
      { fecha: '20/10/2023 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura de Expediente', activo: true,
        desc: 'Ingreso por cédula en papel — Mesa de Entradas.',
        doc: 'EX-2023-08842-APN-SACO#SOFSE',
        estadoExpediente: 'EN_PRUEBA', subMovimientos: [] },
    ],
    documentos: [
      { nombre: 'Demanda_Inicial.pdf', tipo: 'GDE — OJ',
        fecha: '20/10/2023', size: '2.4 MB',
        icon: 'picture_as_pdf', color: 'error' },
    ],
  },

  {
    id: 'C-0031/2026', area: 'CIVIL', tipo: 'MEDIACION',
    caratula: 'Mediación prejudicial — Rodríguez, Ana c/ SOFSE s/ daños paso a nivel',
    numero_causa: 'FSM-11802/2023', es_principal: false,
    juzgado: 'Centro de Mediación — Retiro',
    estado: 'EN_TRAMITE', estadoLabel: 'Solicitud de información',
    fecha_recepcion: '2025-11-15',
    abogado: 'Casano, Felix', linea: 'LIN_004',
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_oficio_judicial: '', mesa_tipo_intervencion: 'Demandada' },
    campos_abogado: {},
    timeline: [
      { fecha: '15/11/2025 · 11:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Mediación prejudicial', activo: true,
        desc: 'Ingreso por EE GDE.',
        doc: 'EX-2025-09921-APN-SACO#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'C-0044/2025', area: 'CIVIL', tipo: 'RECUPERO',
    caratula: 'Recupero daños — Vehículo paso a nivel Km 4.5 Línea Mitre',
    numero_causa: 'FSM-11802/2023', es_principal: false,
    juzgado: '',
    estado: 'EN_TRAMITE', estadoLabel: 'En análisis',
    fecha_recepcion: '2026-02-10',
    abogado: 'Casano, Felix', linea: 'LIN_004',
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_num_siniestro: 'SS-2023-0441', mesa_linea: 'LIN_004' },
    campos_abogado: {},
    timeline: [
      { fecha: '10/02/2026 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Recupero de Daños', activo: true,
        desc: 'Memo SGSySL recibido.',
        doc: 'ME-2026-00441-APN-SGSSL#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  // ── SUELTOS — un expediente por cada tipo restante ───────────────

  {
    id: 'C-0070/2026', area: 'CIVIL', tipo: 'OFICIO',
    caratula: 'Oficio Juzgado Federal Civil N°1 — solicitud informe gestión ferroviaria 2025',
    numero_causa: null, es_principal: false,
    juzgado: 'Juzgado Federal Civil y Comercial N°1 — CABA',
    estado: 'EN_TRAMITE', estadoLabel: 'Pedido de información',
    fecha_recepcion: '2026-04-15',
    abogado: 'Casano, Felix', linea: null,
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_oficio_judicial: 'OJ-2026-118', mesa_tipo_intervencion: 'Sin intervención', mesa_comentarios: '' },
    campos_abogado: {},
    timeline: [
      { fecha: '15/04/2026 · 10:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Oficio Civil', activo: true,
        desc: 'Oficio recibido por EE GDE.',
        doc: 'EX-2026-02201-APN-SACO#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'C-0072/2026', area: 'CIVIL', tipo: 'CARTA_DOC',
    caratula: 'Carta Documento — García Construcciones SA c/ SOFSE s/ incumplimiento contractual',
    numero_causa: 'MED-GEN-2026/001', es_principal: true,
    juzgado: '',
    estado: 'EN_TRAMITE', estadoLabel: 'Recepcionado',
    fecha_recepcion: '2026-04-10',
    abogado: 'Crespi, Facundo', linea: null,
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_fecha_cd: '2026-04-08', mesa_nro_ident: 'CD-2026-0042', mesa_remitente: 'García Construcciones SA' },
    campos_abogado: {},
    timeline: [
      { fecha: '10/04/2026 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Carta Documento', activo: true,
        desc: 'Carta Documento recibida por EE GDE.',
        doc: 'EX-2026-01892-APN-SACO#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'L-0035/2026', area: 'LABORAL', tipo: 'SECLO',
    caratula: 'SECLO — López, Mario c/ SOFSE s/ reencuadramiento convencional',
    numero_causa: null, es_principal: false,
    juzgado: '',
    estado: 'EN_TRAMITE', estadoLabel: 'En análisis',
    fecha_recepcion: '2026-03-20',
    abogado: 'Armani, Giuliana', linea: null,
    tiene_alerta: true, alerta_msg: 'Audiencia el 29/04/2026 — confirmar asistencia',
    prioridad: 'ALTA', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_requirente: 'López, Mario', mesa_cuil_req: '20-28441887-3', mesa_requerido: 'SOFSE' },
    campos_abogado: {},
    timeline: [
      { fecha: '20/03/2026 · 14:00', tipo: 'RECEPCION',
        titulo: 'Apertura — SECLO', activo: true,
        desc: 'Convocatoria de mediación SECLO recibida.',
        doc: 'EX-2026-01122-APN-SACO#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'C-0075/2026', area: 'CIVIL', tipo: 'BENEFICIO_LITIGAR',
    caratula: 'Beneficio de Litigar sin Gastos — Fernández, Carlos Eduardo',
    numero_causa: null, es_principal: false,
    juzgado: 'Juzgado Federal Civil y Comercial N°2 — CABA',
    estado: 'EN_TRAMITE', estadoLabel: 'En análisis',
    fecha_recepcion: '2026-04-01',
    abogado: 'Casano, Felix', linea: null,
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_caratula: 'Fernández c/ SOFSE s/ daños', mesa_juzgado: 'JUZ_002' },
    campos_abogado: {},
    timeline: [
      { fecha: '01/04/2026 · 10:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Beneficio LSG', activo: true,
        desc: 'Incidente de beneficio recibido.',
        doc: 'EX-2026-01441-APN-SACO#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'C-0076/2026', area: 'CIVIL', tipo: 'COBRO_CANON',
    caratula: 'Cobro de Cánones — Permisionario Comercial SA — Estación Retiro',
    numero_causa: 'MED-GEN-2026/001', es_principal: false,
    juzgado: '',
    estado: 'EN_TRAMITE', estadoLabel: 'En análisis',
    fecha_recepcion: '2026-03-15',
    abogado: 'Crespi, Facundo', linea: null,
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_permisionario: 'Comercial SA', mesa_ref_contrato: 'PPU-2021-0088', mesa_area_req: 'Comercial' },
    campos_abogado: {},
    timeline: [
      { fecha: '15/03/2026 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Cobro de Cánones', activo: true,
        desc: 'Memo interno de área Comercial recibido.',
        doc: 'ME-2026-00781-APN-SACO#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'C-0077/2026', area: 'CIVIL', tipo: 'RECLAMO_CONTRAT',
    caratula: 'Reclamo a Contratista — Constructora Norte SRL — Obra Km 12.4',
    numero_causa: null, es_principal: false,
    juzgado: '',
    estado: 'EN_TRAMITE', estadoLabel: 'En análisis',
    fecha_recepcion: '2026-03-10',
    abogado: 'Crespi, Facundo', linea: null,
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_contratista: 'Constructora Norte SRL', mesa_area_req: 'Líneas' },
    campos_abogado: {},
    timeline: [
      { fecha: '10/03/2026 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Reclamo a Contratista', activo: true,
        desc: 'Memo de GCO recibido.',
        doc: 'ME-2026-00641-APN-SACO#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'C-0078/2026', area: 'CIVIL', tipo: 'LANZAMIENTO',
    caratula: 'Lanzamiento — Ocupante irregular Estación Constitución — Local 4B',
    numero_causa: null, es_principal: false,
    juzgado: '',
    estado: 'EN_TRAMITE', estadoLabel: 'En análisis',
    fecha_recepcion: '2026-02-20',
    abogado: 'Crespi, Facundo', linea: null,
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_nro_memo: 'ME-2026-00441', mesa_area_req: 'Comercial' },
    campos_abogado: {},
    timeline: [
      { fecha: '20/02/2026 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Lanzamiento', activo: true,
        desc: 'Memo de área Comercial recibido.',
        doc: 'ME-2026-00441-APN-SACO#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'C-0079/2026', area: 'CIVIL', tipo: 'EJECUCION_GAR',
    caratula: 'Ejecución de Póliza — Constructora Sur SA — Garantía de cumplimiento',
    numero_causa: null, es_principal: false,
    juzgado: '',
    estado: 'EN_TRAMITE', estadoLabel: 'En análisis',
    fecha_recepcion: '2026-02-05',
    abogado: 'Crespi, Facundo', linea: null,
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_contratista: 'Constructora Sur SA', mesa_area_req: 'GCO' },
    campos_abogado: {},
    timeline: [
      { fecha: '05/02/2026 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Ejecución de Póliza', activo: true,
        desc: 'Disposición GCO recibida.',
        doc: 'ME-2026-00281-APN-SACO#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'L-0036/2026', area: 'LABORAL', tipo: 'DEMANDA_LABORAL',
    caratula: 'Torres, Pedro Hugo c/ SOFSE s/ despido injustificado y diferencias salariales',
    numero_causa: null, es_principal: false,
    juzgado: 'Juzgado Nacional del Trabajo N°30 — CABA',
    estado: 'EN_TRAMITE', estadoLabel: 'Inicio',
    fecha_recepcion: '2026-04-01',
    abogado: 'Armani, Giuliana', linea: null,
    tiene_alerta: true, alerta_msg: 'Plazo contestación vence 30/04/2026',
    prioridad: 'ALTA', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_juzgado: 'JUZ_004', mesa_caratula: 'Torres c/ SOFSE s/ despido', mesa_parte_actora: 'Torres, Pedro Hugo', mesa_parte_dem: 'SOFSE' },
    campos_abogado: {},
    timeline: [
      { fecha: '01/04/2026 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Demanda Laboral', activo: true,
        desc: 'Cédula recibida por Mesa de Entradas.',
        doc: 'EX-2026-01881-APN-SACO#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'L-0037/2026', area: 'LABORAL', tipo: 'CONSIGNACION',
    caratula: 'Consignación — Ramírez, José Luis (causante fallecido) — haberes adeudados',
    numero_causa: null, es_principal: false,
    juzgado: '',
    estado: 'EN_TRAMITE', estadoLabel: 'En análisis',
    fecha_recepcion: '2026-03-25',
    abogado: 'Armani, Giuliana', linea: null,
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_nombre_causante: 'Ramírez, José Luis' },
    campos_abogado: {},
    timeline: [
      { fecha: '25/03/2026 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Consignación', activo: true,
        desc: 'Memo de RRHH recibido.',
        doc: 'ME-2026-00991-APN-SACO#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'L-0038/2026', area: 'LABORAL', tipo: 'DESAFUERO',
    caratula: 'Desafuero — González, Sergio Darío — delegado gremial Línea Roca',
    numero_causa: null, es_principal: false,
    juzgado: '',
    estado: 'EN_TRAMITE', estadoLabel: 'En análisis',
    fecha_recepcion: '2026-03-18',
    abogado: 'Armani, Giuliana', linea: null,
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_nombre_trab: 'González, Sergio Darío', mesa_fecha_ingreso: '2015-03-01' },
    campos_abogado: {},
    timeline: [
      { fecha: '18/03/2026 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Desafuero', activo: true,
        desc: 'Memo de RRHH recibido.',
        doc: 'ME-2026-00881-APN-SACO#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'P-0098/2026', area: 'PENAL', tipo: 'QUERELLA',
    caratula: 'SOFSE querellante — Sustracción de equipos comunicación Línea Roca (múltiples hechos)',
    numero_causa: null, es_principal: false,
    juzgado: 'Juzgado Federal en lo Criminal y Correccional N°1 — CABA',
    estado: 'EN_TRAMITE', estadoLabel: 'Etapa de instrucción',
    fecha_recepcion: '2026-03-01',
    abogado: 'Desideri, Gustavo', linea: 'LIN_001',
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_area_req: 'Líneas', mesa_linea: 'LIN_001' },
    campos_abogado: {},
    timeline: [
      { fecha: '01/03/2026 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Querella', activo: true,
        desc: 'SOFSE se presenta como parte querellante.',
        doc: 'ME-2026-00882-APN-SACO#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'C-0080/2026', area: 'CIVIL', tipo: 'DEFENSA_CIVIL',
    caratula: 'Defensa Civil — Méndez, Laura (empleada SOFSE) — accidente en servicio',
    numero_causa: null, es_principal: false,
    juzgado: 'Juzgado Federal Civil y Comercial N°1 — CABA',
    estado: 'EN_TRAMITE', estadoLabel: 'En análisis',
    fecha_recepcion: '2026-02-15',
    abogado: 'Crespi, Facundo', linea: null,
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_juzgado: 'JUZ_001', mesa_datos_depend: 'Méndez, Laura — Legajo 44821 — Maquinista Línea Mitre' },
    campos_abogado: {},
    timeline: [
      { fecha: '15/02/2026 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Defensa Civil', activo: true,
        desc: 'Solicitud de asistencia técnica recibida.',
        doc: 'ME-2026-00541-APN-SACO#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'P-0099/2026', area: 'PENAL', tipo: 'DEFENSA_PENAL',
    caratula: 'Defensa Penal — Sánchez, Roberto (empleado SOFSE) — s/ lesiones culposas',
    numero_causa: null, es_principal: false,
    juzgado: '',
    estado: 'EN_TRAMITE', estadoLabel: 'En análisis',
    fecha_recepcion: '2026-02-10',
    abogado: 'Biondi, Walter', linea: 'LIN_002',
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_area_req: 'Líneas', mesa_empleado: 'Sánchez, Roberto — Legajo 38812 — Guarda Línea San Martín', mesa_linea: 'LIN_002' },
    campos_abogado: {},
    timeline: [
      { fecha: '10/02/2026 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Defensa Penal', activo: true,
        desc: 'Solicitud de defensa recibida.',
        doc: 'ME-2026-00481-APN-SACO#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'P-0100/2026', area: 'PENAL', tipo: 'PEDIDO_CAUSA_PENAL',
    caratula: 'Pedido de Causa Penal — Apedreo formación 3408 Línea Mitre — Estación Palermo',
    numero_causa: null, es_principal: false,
    juzgado: '',
    estado: 'EN_TRAMITE', estadoLabel: 'Solicitud enviada',
    fecha_recepcion: '2026-04-18',
    abogado: 'Desideri, Gustavo', linea: 'LIN_004',
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: {},
    campos_abogado: {},
    timeline: [
      { fecha: '18/04/2026 · 10:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Pedido Causa Penal', activo: true,
        desc: 'Pedido de causa penal generado desde Área Penal.',
        doc: null,
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'P-0101/2026', area: 'PENAL', tipo: 'CARTA_SUCESO',
    caratula: 'Carta Suceso SAE-0122 — Apedreo con daño Línea San Martín — Estación Merlo',
    numero_causa: null, es_principal: false,
    juzgado: '',
    estado: 'EN_TRAMITE', estadoLabel: 'En análisis',
    fecha_recepcion: '2026-04-20',
    abogado: 'Biondi, Walter', linea: 'LIN_002',
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: {},
    campos_abogado: {},
    timeline: [
      { fecha: '20/04/2026 · 08:30', tipo: 'RECEPCION',
        titulo: 'Apertura — Carta Suceso SAE', activo: true,
        desc: 'Carta Suceso recibida por canal Otros (mail SAE).',
        doc: null,
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'C-0081/2026', area: 'CIVIL', tipo: 'OTROS',
    caratula: 'Consulta externa — Municipalidad de Quilmes — afectación vía férrea',
    numero_causa: null, es_principal: false,
    juzgado: '',
    estado: 'EN_TRAMITE', estadoLabel: 'Recepcionado',
    fecha_recepcion: '2026-04-22',
    abogado: 'Crespi, Facundo', linea: null,
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL', vinculos: [], intervinientes: [],
    campos_mesa: { mesa_remitente: 'Municipalidad de Quilmes', mesa_descripcion: 'Consulta sobre afectación de vía férrea en obra de ampliación Av. Calchaquí' },
    campos_abogado: {},
    timeline: [
      { fecha: '22/04/2026 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Otros', activo: true,
        desc: 'Documento recibido por canal Otros.',
        doc: 'ME-2026-01201-APN-SACO#SOFSE',
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

];

// Detalle de expediente (C-0023/2026) — demanda civil siniestro Km 4.5 Línea Mitre
const EXPEDIENTE_DETALLE = {
  id: 'C-0023/2026',
  area: 'CIVIL',
  tipo: 'DEMANDA_CIVIL',
  caratula: 'Martínez, Juan Carlos c/ SOFSE s/ daños y perjuicios — paso a nivel Km 4.5',
  numero_causa: 'FSM-11802/2023',
  es_principal: true,
  numero_siniestro: 'SS-2023-0441',
  juzgado: 'Juzgado Federal Civil y Comercial N°1 — CABA',
  dependencia: 'Fuero Federal Civil y Comercial — CABA',
  estado: 'EN_PRUEBA',
  linea: 'LIN_004 — Mitre',
  lugar_hecho: 'Paso a nivel Km 4.5 — Estación Palermo',
  fecha_hecho: '14/09/2023',
  fecha_recepcion: '20/10/2023',
  abogado: 'Casano, Felix',
  campos_mesa: { mesa_oficio_judicial: 'OJ-2023-441', mesa_tipo_intervencion: 'Demandada' },
  campos_abogado: {},
  demandado: 'SOFSE',
  variante: 'A — Cédula en papel vía Mesa de Entradas',
  requisitos_25344: true,
  estado_sigej: 'EN_PRUEBA',
  numero_sigej: 'SIGEJ-2023-18842',
  monto_demanda: '$4.200.000',
  gde: 'EX-2023-08842-APN-SACO#SOFSE',
  observaciones: 'Peritaje técnico-accidentológico pendiente de homologación. La contraparte objetó el dictamen del Ing. Santoro. Audiencia fijada para el 30/04/2026. Expediente penal relacionado: P-0089/2026 (Dr. Marcos Gallo). Demanda laboral relacionada: L-0012/2026 (Dr. Hernán Blanco).',
  vinculos: [
    {
      id: 'P-0089/2026',
      area: 'PENAL',
      tipo: 'CARTA_SUCESO',
      caratula: 'Denuncia penal — Descarrilamiento Línea Mitre Km 4.5',
      estado: 'EN_TRAMITE',
      estadoLabel: 'Se formula denuncia',
      tipo_relacion: 'MISMO_SINIESTRO',
      numero_causa: 'IPP-4421/2026',
      abogado: 'Dr. Marcos Gallo',
    },
    {
      id: 'L-0012/2026',
      area: 'LABORAL',
      tipo: 'MEDIACION',
      caratula: 'González, Mario c/ SOFSE s/ accidente de trabajo — Km 4.5 LM',
      estado: 'EN_TRAMITE',
      estadoLabel: 'En análisis',
      tipo_relacion: 'MISMO_SINIESTRO',
      numero_causa: 'MED-LAB-344/2026',
      abogado: 'Dr. Hernán Blanco',
    },
  ],
  intervinientes: [
    {
      id: 'INT-001',
      nombre: 'Juan Carlos Martínez',
      rol_procesal: 'Actor',
      tipo_documento: 'DNI',
      numero_documento: '22.441.887',
      contacto_email: '',
      contacto_telefono: '011-4523-8891',
      contacto_domicilio: 'Av. Cabildo 1240 Piso 3, CABA',
      representado_por: 'Dr. Sebastián Ferreyra',
      observaciones: 'Parte actora. Sufrió lesiones en el incidente del paso a nivel.',
    },
    {
      id: 'INT-002',
      nombre: 'SOFSA — Operadora Ferroviaria S.E.',
      rol_procesal: 'Demandado',
      tipo_documento: 'CUIT',
      numero_documento: '30-71034418-7',
      contacto_email: 'legal@sofse.gob.ar',
      contacto_telefono: '011-4317-4400',
      contacto_domicilio: 'Av. Ramos Mejía 1302, CABA',
      representado_por: 'Dr. Alejandro Rossi',
      observaciones: 'Parte demandada. Representada por letrado SACO.',
    },
    {
      id: 'INT-003',
      nombre: 'Ing. Roberto Santoro',
      rol_procesal: 'Perito',
      tipo_documento: 'DNI',
      numero_documento: '18.774.002',
      contacto_email: 'rsantoro@peritos.com.ar',
      contacto_telefono: '011-4892-3310',
      contacto_domicilio: 'Reconquista 458, CABA',
      representado_por: '',
      observaciones: 'Perito accidentológico designado por el juzgado. Dictamen presentado 12/04/2026.',
    },
    {
      id: 'INT-004',
      nombre: 'Estado Nacional — Ministerio de Transporte',
      rol_procesal: 'Tercero citado',
      tipo_documento: 'CUIT',
      numero_documento: '30-54667890-2',
      contacto_email: '',
      contacto_telefono: '',
      contacto_domicilio: 'Hipólito Yrigoyen 250, CABA',
      representado_por: 'Procuración del Tesoro de la Nación',
      observaciones: 'Citado como tercero en garantía.',
    },
  ],
  timeline: [
    {
      fecha: 'Hoy · 10:45',
      tipo: 'RECEPCION',
      titulo: 'Incorporación de Dictamen Pericial',
      estadoExpediente: 'EN_PRUEBA',
      desc: 'Se adjunta peritaje accidentológico realizado por el Ing. Santoro. El informe concluye responsabilidad compartida en el siniestro.',
      doc: 'PER-2026-001.pdf',
      activo: true,
      subMovimientos: [
        {
          fecha: 'Hoy · 11:10',
          titulo: 'Objeción de la contraparte al dictamen',
          desc: 'El Dr. Pérez (patrocinante actor) presentó escrito de impugnación al dictamen del Ing. Santoro, solicitando nueva pericia.',
          doc: 'IF-2026-00512-APN-SACO#SOFSE',
        },
        {
          fecha: 'Hoy · 14:30',
          titulo: 'Traslado al juzgado de la objeción',
          desc: 'Se remitió NOTA GDE al Juzgado informando la impugnación y solicitando fecha de audiencia para resolver.',
          doc: 'NO-2026-0401-APN-SACO#SOFSE',
        },
      ],
    },
    {
      fecha: '21/03/2026 · 16:30',
      tipo: 'NOTA_RESPUESTA',
      titulo: 'Contestación de Oficio Pericial',
      estadoExpediente: 'EN_PRUEBA',
      desc: 'Se remitió NOTA GDE al Juzgado con respuesta al oficio de designación del perito de la contraparte.',
      doc: 'NO-2026-0334-APN-SACO#SOFSE',
      activo: false,
      subMovimientos: [
        {
          fecha: '22/03/2026 · 09:00',
          titulo: 'Acuse de recibo del Juzgado',
          desc: 'El Juzgado acusó recibo de la nota y designó audiencia para el 30/04/2026 a las 10:00 hs.',
          doc: null,
        },
      ],
    },
    {
      fecha: '10/02/2026 · 09:00',
      tipo: 'MOVIMIENTO',
      titulo: 'Audiencia de Prueba Documental',
      estadoExpediente: 'EN_PRUEBA',
      desc: 'Se celebró la audiencia de prueba documental. El juez admitió la totalidad de la prueba ofrecida por SOFSE.',
      doc: null,
      activo: false,
      subMovimientos: [],
    },
    {
      fecha: '20/10/2023 · 09:00',
      tipo: 'RECEPCION',
      titulo: 'Apertura de Expediente en Mesa SACO',
      estadoExpediente: 'EN_PLAZO_CONTESTAR',
      desc: 'Ingreso por variante A — cédula en papel recibida en Mesa de Entradas SOFSE (Ramos Mejía 1302). EE creado en GDE y derivado a Mesa SACO.',
      doc: 'EX-2023-08842-APN-SACO#SOFSE',
      activo: false,
      subMovimientos: [],
    },
  ],
  documentos: [
    { nombre: 'Demanda_Inicial_firmada.pdf',    tipo: 'GDE — OJ',     fecha: '20/10/2023', size: '2.4 MB',  icon: 'picture_as_pdf', color: 'error' },
    { nombre: 'Cedula_Notificacion_SOFSE.pdf',  tipo: 'GDE — OJ',     fecha: '20/10/2023', size: '340 KB',  icon: 'picture_as_pdf', color: 'error' },
    { nombre: 'Memo_Asignacion_Abogado.pdf',    tipo: 'GDE — MEMO',   fecha: '22/10/2023', size: '120 KB',  icon: 'description',    color: 'secondary' },
    { nombre: 'Contestacion_Demanda.pdf',       tipo: 'GDE — IFGRA',  fecha: '15/12/2023', size: '890 KB',  icon: 'picture_as_pdf', color: 'error' },
    { nombre: 'Prueba_Documental_Fotos.pdf',    tipo: 'Adjunto',      fecha: '10/02/2026', size: '14.8 MB', icon: 'picture_as_pdf', color: 'error' },
    { nombre: 'Dictamen_Pericial_Santoro.pdf',  tipo: 'Adjunto',      fecha: '12/04/2026', size: '3.2 MB',  icon: 'picture_as_pdf', color: 'error' },
  ],
};

// Carta Suceso queue (Penal)
const CARTA_SUCESO_QUEUE = [
  {
    id: 'SAE-0088',
    initials: 'JS', bg: 'bg-primary/10', color: 'text-primary',
    titulo: 'Descarrilamiento — Línea Mitre Km 4.5',
    from: 'sguridad.lm@tren.ar',
    preview: 'Adjunto remito Carta Suceso correspondiente al incidente en vía férrea sección 4. Formación 3408 involucrada. Solicitamos apertura de expediente interno...',
    hora: '14:22',
    adjuntos: ['Carta_Suceso_SAE-0088.pdf', 'Img_Peritaje_01.jpg'],
    match: 94,
    linea: 'LM',
    borde: 'border-primary',
    leido: false,
  },
  {
    id: 'SAE-0089',
    initials: 'PF', bg: 'bg-amber-50', color: 'text-amber-700',
    titulo: 'Policía Federal — División Ferrocarriles',
    from: 'divferroviaria@policiafederal.gob.ar',
    preview: 'Envío preventivo de Carta Suceso por actos vandálicos en formación 301 Línea Belgrano Sur. Se adjunta acta de infracción y registro fílmico...',
    hora: '09:15',
    adjuntos: ['Carta_Suceso_301_LBS.pdf'],
    match: null,
    linea: 'LBS',
    borde: '',
    leido: true,
  },
];

// Causas penales activas
const CAUSAS_PENALES = [
  {
    id: 'P-0089/2026', caratula: 'Descarrilamiento Est. Palermo — Formación 3408 Km 4.5',
    origen: 'Carta Suceso SAE-0088', abogado: 'Dr. Marcos Gallo',
    estado: 'GDE_VINCULADO', linea: 'LM', progreso: 65,
    asignacion: 'Manual', numero_siniestro: 'SS-2023-0441',
  },
];

// Usuarios demo — 9 perfiles para selección de rol en demo
const USUARIOS = [
  { id: 'ALJ',     nombre: 'Alejandra López',    iniciales: 'AL', rol: 'REFERENTE',      area: null,      cargo: 'Referente SACO' },
  { id: 'ADM',     nombre: 'Marcela Suárez',      iniciales: 'MS', rol: 'ADMINISTRATIVO', area: null,      cargo: 'Administrativo Mesa' },
  { id: 'COORD_C', nombre: 'Sbarbati, Pablo',     iniciales: 'PS', rol: 'COORDINADOR',    area: 'CIVIL',   cargo: 'Coordinador Civil' },
  { id: 'COORD_L', nombre: 'Molinelli, Rodrigo',  iniciales: 'RM', rol: 'COORDINADOR',    area: 'LABORAL', cargo: 'Coordinador Laboral' },
  { id: 'COORD_P', nombre: 'Desideri, Gustavo',   iniciales: 'GD', rol: 'COORDINADOR',    area: 'PENAL',   cargo: 'Coordinador Penal' },
  { id: 'ABOG_C1', nombre: 'Casano, Felix',       iniciales: 'FC', rol: 'ABOGADO',        area: 'CIVIL',   cargo: 'Abogado Civil' },
  { id: 'ABOG_C2', nombre: 'Crespi, Facundo',     iniciales: 'CF', rol: 'ABOGADO',        area: 'CIVIL',   cargo: 'Abogado Civil' },
  { id: 'ABOG_L1', nombre: 'Armani, Giuliana',    iniciales: 'GA', rol: 'ABOGADO',        area: 'LABORAL', cargo: 'Abogada Laboral' },
  { id: 'ABOG_P1', nombre: 'Biondi, Walter',      iniciales: 'WB', rol: 'ABOGADO',        area: 'PENAL',   cargo: 'Abogado Penal' },
];

// Accesos por rol — nav visible, permisos y página de inicio
const ROL_ACCESOS = {
  REFERENTE: {
    nav: ['dashboard','bandeja-abogado','bandeja-area','reports'],
    puedeReasignar: true, verTodaBandeja: true, inicio: 'dashboard',
  },
  ADMINISTRATIVO: {
    nav: ['mesa-saco'],
    puedeReasignar: false, verTodaBandeja: false, inicio: 'mesa-saco',
  },
  COORDINADOR: {
    CIVIL:   { nav: ['dashboard','bandeja-abogado','bandeja-area','reports'], puedeReasignar: true,  verTodaBandeja: true,  inicio: 'bandeja-area' },
    LABORAL: { nav: ['dashboard','bandeja-abogado','bandeja-area','reports'], puedeReasignar: true,  verTodaBandeja: true,  inicio: 'bandeja-area' },
    PENAL:   { nav: ['dashboard','bandeja-abogado','bandeja-area','reports'], puedeReasignar: true,  verTodaBandeja: true,  inicio: 'bandeja-area' },
  },
  ABOGADO: {
    CIVIL:   { nav: ['bandeja-abogado','bandeja-area'], puedeReasignar: false, verTodaBandeja: false, inicio: 'bandeja-abogado' },
    LABORAL: { nav: ['bandeja-abogado','bandeja-area'], puedeReasignar: false, verTodaBandeja: false, inicio: 'bandeja-abogado' },
    PENAL:   { nav: ['bandeja-abogado','bandeja-area'], puedeReasignar: false, verTodaBandeja: false, inicio: 'bandeja-abogado' },
  },
};

function getAccesos(usuario) {
  if (!usuario) return ROL_ACCESOS.REFERENTE;
  const r = ROL_ACCESOS[usuario.rol];
  if (!r) return ROL_ACCESOS.REFERENTE;
  if (usuario.area && r[usuario.area]) return r[usuario.area];
  // Fallback con puedeReasignar true para coordinadores sin area específica
  return { ...r, puedeReasignar: true, verTodaBandeja: true, inicio: 'dashboard' };
}


// ── Catálogos de opciones para selects ────────────────────────────────────────
const OPCIONES = {

  TIPO_INTERVENCION_CIVIL_LAB: [
    'Actora',
    'Demandada',
    'Sin intervención',
  ],

  TIPO_INTERVENCION_PENAL: [
    'Denunciante',
    'Sin intervención',
  ],

  CARACTER_OFICIO: [
    'Informativo',
    'Urgente',
    'Reiteratorio',
  ],

  DOCUMENTAL_ESTADO: [
    'Completo',
    'Incompleto',
  ],

  TIPO_JUICIO: [
    'Accidente - Acción Civil',
    'Amparo',
    'Beneficio de LSG',
    'Cobro de sumas de dinero',
    'Consignación',
    'Daños y perjuicios',
    'Despido',
    'Diferencias salariales',
    'Ejecución Fiscal',
    'Ejecutivo o preparación vía ejecutiva',
  ],

  SANCION: [
    'Suspensión',
    'Despidos',
    'Otras',
  ],

  TOPE_CONVENIO: [
    'SI',
    'NO',
    'VIZZOTI',
  ],

  TIPO_HECHO_DESAFUERO: [
    'Hurto - Robo',
    'Violencia',
    'Género',
    'Reorganización',
    'Otros',
  ],

  TIPO_HECHO_PENAL: [
    'Apedreo',
    'Apedreo con lesiones',
    'Apedreo con daño',
    'Apedreo con daño y lesiones',
    'Daño bienes FFCC',
    'Daño bienes FFCC (daño en barrera)',
    'Daño grafiti',
    'Robo bienes FFCC',
    'Robo de cables',
    'Ttva. Robo bienes FFCC',
    'Ttva. Robo de cables',
    'Defraudación',
    'Interrupción a los medios de transporte',
    'Descarrilo',
    'Atentado a los medios de transporte',
    'Lesiones',
    'Incumplimiento a los deberes de funcionario público',
    'Amenazas',
    'Estrago',
    'Intimidación pública',
  ],

  TIPO_SOLICITUD_PENAL: [
    'Solicitud de información',
    'Solicitud de filmaciones',
    'Solicitud de intervención',
    'Citaciones',
    'Asistencia MARC',
  ],

  TIPO_MEDIACION: [
    'Privada',
    'Defensa del consumidor',
    'Otros',
  ],

  JURISDICCION_CARTA_SUCESO: [
    'Morón',
    'San Isidro',
    'San Martín',
    'Campana',
    'CABA',
    'Mercedes',
    'Lomas de Zamora',
    'Quilmes',
    'La Plata',
    'Mar del Plata',
    'Rosario',
    'Córdoba',
    'San Nicolás',
  ],

  AREA_REQ_LANZAMIENTO: [
    'Comercial',
    'Líneas',
  ],

};

// ── Campos comunes a todos los tipos en el alta ────────────────────────────────
const CAMPOS_COMUNES_MESA = [
  { id: 'mesa_oficio_judicial',   label: 'Oficio Judicial (OJ)',  type: 'text',     placeholder: 'N° OJ' },
  { id: 'mesa_tipo_intervencion', label: 'Tipo de intervención',  type: 'select',   options: [] },
  { id: 'mesa_comentarios',       label: 'Comentarios',           type: 'textarea', full: true },
];

// ── Formularios por tipo de gestión ───────────────────────────────────────────
// Cada tipo define dos etapas: mesa[] (Mesa SACO completa al crear) y abogado[]
// (el letrado completa desde el detalle del expediente).
// Tipos de campo: text | date | money | textarea | boolean | causa | linea | juzgado | select

const FORMULARIOS = {

  // ── OFICIO ─────────────────────────────────────────────────────────────────
  OFICIO: {
    label: 'Oficio Civil / Laboral',
    mesa: [
      { id: 'mesa_num_causa',        label: 'N° de Causa',                      type: 'causa',   mono: true },
      { id: 'mesa_juzgado',          label: 'Juzgado',                          type: 'juzgado' },
      { id: 'mesa_tribunal',         label: 'Tribunal',                         type: 'juzgado' },
      { id: 'mesa_secretaria',       label: 'Secretaría',                       type: 'text' },
      { id: 'mesa_organismo',        label: 'Organismo',                        type: 'text' },
      { id: 'mesa_caratula',         label: 'Carátula',                         type: 'text',    full: true },
      { id: 'mesa_fecha_recep_of',   label: 'Fecha recepción de oficio',        type: 'date' },
    ],
    abogado: [
      { id: 'abg_caracter',          label: 'Carácter',                         type: 'select',
        options: ['Informativo','Urgente','Reiteratorio'] },
      { id: 'abg_objeto_req',        label: 'Objeto del requerimiento',         type: 'textarea', full: true },
      { id: 'abg_area_informante',   label: 'Área informante',                  type: 'text' },
      { id: 'abg_fecha_contestacion',label: 'Fecha de contestación',            type: 'date' },
    ],
    variante_penal: {
      mesa: [
        { id: 'mesa_num_causa',      label: 'N° Causa / Sumario / IPP',         type: 'causa',   mono: true },
        { id: 'mesa_caratula',       label: 'Carátula',                         type: 'text',    full: true },
        { id: 'mesa_juzgado',        label: 'Juzgado',                          type: 'juzgado' },
        { id: 'mesa_fiscalia',       label: 'Fiscalía',                         type: 'juzgado' },
        { id: 'mesa_comisaria',      label: 'Comisaría',                        type: 'juzgado' },
        { id: 'mesa_tribunal',       label: 'Tribunal',                         type: 'juzgado' },
        { id: 'mesa_linea',          label: 'Línea ferroviaria',                type: 'linea' },
        { id: 'mesa_fecha_recep_of', label: 'Fecha recepción de oficio',        type: 'date' },
      ],
      abogado: [
        { id: 'abg_datos_contacto',  label: 'Datos contacto requirente',        type: 'text',
          hint: 'Tel / Mail / Dir / Contacto', full: true },
        { id: 'abg_fecha_hecho',     label: 'Fecha del hecho',                  type: 'date' },
        { id: 'abg_lugar_hecho',     label: 'Lugar del hecho',                  type: 'text',    full: true },
        { id: 'abg_damnificado',     label: 'Parte damnificada',                type: 'text' },
        { id: 'abg_imputado',        label: 'Parte imputada',                   type: 'text' },
        { id: 'abg_tipo_hecho',      label: 'Tipo de hecho',                    type: 'select',
          options: OPCIONES.TIPO_HECHO_PENAL },
        { id: 'abg_tipo_solicitud',  label: 'Tipo de solicitud',                type: 'select',
          options: OPCIONES.TIPO_SOLICITUD_PENAL },
      ],
    },
  },

  // ── CARTA_DOC ──────────────────────────────────────────────────────────────
  CARTA_DOC: {
    label: 'Carta Documento',
    mesa: [
      { id: 'mesa_fecha_cd',         label: 'Fecha de la CD',                   type: 'date' },
      { id: 'mesa_nro_ident',        label: 'N° identificatorio',               type: 'text',     mono: true },
      { id: 'mesa_remitente',        label: 'Remitente',                        type: 'text',     full: true },
    ],
    abogado: [
      { id: 'abg_monto_reclam',      label: 'Monto reclamado',                  type: 'money' },
      { id: 'abg_objeto',            label: 'Objeto',                           type: 'textarea', full: true },
      { id: 'abg_requiere_resp',     label: 'Requiere respuesta',               type: 'select',
        options: ['Sí','No'] },
      { id: 'abg_area_informante',   label: 'Área informante',                  type: 'text' },
      { id: 'abg_vinculacion',       label: 'Vinculación con contrato o expediente', type: 'text', full: true },
      { id: 'abg_fecha_resp',        label: 'Fecha de respuesta',               type: 'date' },
    ],
  },

  // ── MEDIACION ──────────────────────────────────────────────────────────────
  MEDIACION: {
    label: 'Mediación / SECLOS',
    mesa: [
      { id: 'mesa_tipo_mediacion',   label: 'Tipo de mediación',                type: 'select',
        options: ['Privada','Defensa del consumidor','Otros'] },
      { id: 'mesa_requirente',       label: 'Requirente',                       type: 'text' },
      { id: 'mesa_requerido',        label: 'Requerido',                        type: 'text' },
      { id: 'mesa_mediador',         label: 'Mediador / Organismo',             type: 'text' },
      { id: 'mesa_fecha_audiencia',  label: 'Fecha de audiencia',               type: 'date' },
    ],
    abogado: [
      { id: 'abg_objeto_reclamo',    label: 'Objeto del reclamo',               type: 'textarea', full: true },
      { id: 'abg_monto_reclam',      label: 'Monto reclamado',                  type: 'money' },
      { id: 'abg_resultado',         label: 'Resultado audiencia',              type: 'text' },
      { id: 'abg_fecha_cierre',      label: 'Fecha de cierre',                  type: 'date' },
      { id: 'abg_req_asistencia',    label: 'Requiere asistencia',              type: 'select',
        options: ['Sí','No'] },
    ],
  },

  // ── SECLO ──────────────────────────────────────────────────────────────────
  SECLO: {
    label: 'SECLO',
    mesa: [
      { id: 'mesa_requirente',       label: 'Requirente',                       type: 'text' },
      { id: 'mesa_cuil_req',         label: 'CUIL Requirente',                  type: 'text',
        placeholder: '20-12345678-9', mono: true },
      { id: 'mesa_requerido',        label: 'Requerido',                        type: 'text' },
      { id: 'mesa_objeto_reclamo',   label: 'Objeto del reclamo',               type: 'textarea', full: true },
    ],
    abogado: [
      { id: 'abg_monto_reclam',      label: 'Monto reclamado',                  type: 'money' },
      { id: 'abg_req_asistencia',    label: 'Requiere asistencia',              type: 'select',
        options: ['Sí','No'] },
    ],
  },

  // ── BENEFICIO_LITIGAR ──────────────────────────────────────────────────────
  BENEFICIO_LITIGAR: {
    label: 'Beneficio de litigar sin gastos',
    mesa: [
      { id: 'mesa_caratula',         label: 'Carátula',                         type: 'text',    full: true },
      { id: 'mesa_juzgado',          label: 'Juzgado',                          type: 'juzgado' },
      { id: 'mesa_secretaria',       label: 'Secretaría',                       type: 'text' },
      { id: 'mesa_exp_vinculado',    label: 'Expediente principal vinculado',   type: 'text',    mono: true },
    ],
    abogado: [
      { id: 'abg_fecha_recep',       label: 'Fecha de recepción',               type: 'date' },
      { id: 'abg_plazo_contestar',   label: 'Plazo para contestar',             type: 'text' },
    ],
  },

  // ── COBRO_CANON ────────────────────────────────────────────────────────────
  COBRO_CANON: {
    label: 'Cobro de Cánones',
    mesa: [
      { id: 'mesa_permisionario',    label: 'Permisionario',                    type: 'text',    full: true },
      { id: 'mesa_ref_contrato',     label: 'Referencia contrato / N° PPU',    type: 'text',    mono: true },
      { id: 'mesa_area_req',         label: 'Área requirente',                  type: 'text' },
      { id: 'mesa_fecha_req',        label: 'Fecha del requerimiento',          type: 'date' },
    ],
    abogado: [
      { id: 'abg_periodo',           label: 'Período adeudado',                 type: 'text' },
      { id: 'abg_monto_info',        label: 'Monto informado',                  type: 'money' },
      { id: 'abg_monto_act',         label: 'Monto actualizado',                type: 'money' },
      { id: 'abg_garante',           label: 'Garante',                          type: 'select',
        options: ['Sí','No'] },
      { id: 'abg_inicio_prescr',     label: 'Inicio plazo de prescripción',     type: 'date' },
    ],
  },

  // ── RECLAMO_CONTRAT ────────────────────────────────────────────────────────
  RECLAMO_CONTRAT: {
    label: 'Reclamo a Contratistas',
    mesa: [
      { id: 'mesa_contratista',      label: 'Contratista / proveedor',          type: 'text',    full: true },
      { id: 'mesa_objeto_exp',       label: 'Objeto - Nro EE - Contratación',   type: 'text',    full: true },
      { id: 'mesa_area_req',         label: 'Área requirente',                  type: 'text' },
      { id: 'mesa_fecha_req',        label: 'Fecha del requerimiento',          type: 'date' },
    ],
    abogado: [
      { id: 'abg_inicio_prescr',     label: 'Inicio plazo de prescripción',     type: 'date' },
      { id: 'abg_motivo_jur',        label: 'Motivo jurídico / contractual',    type: 'textarea', full: true },
      { id: 'abg_monto_reclamar',    label: 'Monto a reclamar',                 type: 'money' },
    ],
  },

  // ── LANZAMIENTO ────────────────────────────────────────────────────────────
  LANZAMIENTO: {
    label: 'Lanzamientos',
    mesa: [
      { id: 'mesa_nro_memo',         label: 'N° Memo',                          type: 'text',    mono: true },
      { id: 'mesa_area_req',         label: 'Área requirente',                  type: 'select',
        options: ['Comercial','Líneas'] },
      { id: 'mesa_fecha_req',        label: 'Fecha del requerimiento',          type: 'date' },
    ],
    abogado: [
      { id: 'abg_linea',             label: 'Línea ferroviaria',                type: 'linea' },
      { id: 'abg_lugar_ocup',        label: 'Lugar - estación - km',            type: 'text',    full: true },
      { id: 'abg_notificacion',      label: 'Notificación al ocupante',         type: 'text',    full: true },
      { id: 'abg_documental',        label: 'Documental',                       type: 'select',
        options: ['Completo','Incompleto'] },
    ],
  },

  // ── RECUPERO ───────────────────────────────────────────────────────────────
  RECUPERO: {
    label: 'Recuperos',
    mesa: [
      { id: 'mesa_num_siniestro',    label: 'N° siniestro',                     type: 'text',
        hint: 'SS = Sin Siniestro', mono: true },
      { id: 'mesa_fecha_siniestro',  label: 'Fecha de siniestro',               type: 'date' },
      { id: 'mesa_linea',            label: 'Línea ferroviaria',                type: 'linea' },
      { id: 'mesa_fecha_req',        label: 'Fecha del requerimiento',          type: 'date' },
    ],
    abogado: [
      { id: 'abg_pan',               label: 'PAN',                              type: 'text' },
      { id: 'abg_seguro',            label: 'Seguro',                           type: 'text' },
      { id: 'abg_monto_reclamar',    label: 'Monto a reclamar',                 type: 'money' },
      { id: 'abg_documental',        label: 'Documental',                       type: 'select',
        options: ['Completo','Incompleto'] },
    ],
  },

  // ── EJECUCION_GAR ──────────────────────────────────────────────────────────
  EJECUCION_GAR: {
    label: 'Ejecución de Pólizas',
    mesa: [
      { id: 'mesa_contratista',      label: 'Contratista / proveedor',          type: 'text',    full: true },
      { id: 'mesa_area_req',         label: 'Área requirente',                  type: 'text' },
      { id: 'mesa_fecha_ingreso',    label: 'Fecha ingreso a SACO',             type: 'date',    defaultToday: true },
      { id: 'mesa_nro_exp',          label: 'N° Expediente Electrónico',        type: 'text',    mono: true },
    ],
    abogado: [
      { id: 'abg_aseguradora',       label: 'Aseguradora',                      type: 'text' },
      { id: 'abg_nro_polizas',       label: 'N° Póliza/s',                      type: 'text',    mono: true },
      { id: 'abg_tipo_polizas',      label: 'Tipo de póliza/s',                 type: 'select',
        options: ['Garantía de cumplimiento','Garantía de anticipo','Caución','Otra'] },
      { id: 'abg_monto_ejecutar',    label: 'Monto/s a ejecutar',               type: 'money' },
      { id: 'abg_fecha_rescision',   label: 'Fecha de rescisión',               type: 'date' },
      { id: 'abg_fecha_prescr',      label: 'Fecha de prescripción',            type: 'date' },
      { id: 'abg_instruccion_danos', label: 'Instrucción de reclamar daños',    type: 'textarea', full: true },
      { id: 'abg_acuerdo',           label: 'Acuerdo',                          type: 'textarea', full: true },
    ],
  },

  // ── DEMANDA_CIVIL ──────────────────────────────────────────────────────────
  DEMANDA_CIVIL: {
    label: 'Demanda Civil',
    mesa: [
      { id: 'mesa_num_causa',        label: 'N° de Causa',                      type: 'causa',   mono: true },
      { id: 'mesa_juzgado',          label: 'Juzgado',                          type: 'juzgado' },
      { id: 'mesa_secretaria',       label: 'Secretaría',                       type: 'text' },
      { id: 'mesa_caratula',         label: 'Carátula',                         type: 'text',    full: true },
      { id: 'mesa_abogado_contr',    label: 'Abogado de la contraria',          type: 'text' },
      { id: 'mesa_parte_actora',     label: 'Parte Actora',                     type: 'text' },
      { id: 'mesa_parte_dem',        label: 'Parte Demandada',                  type: 'text' },
      { id: 'mesa_coactores',        label: 'Coactores',                        type: 'text',    full: true },
      { id: 'mesa_codemandados',     label: 'Codemandado',                      type: 'text',    full: true },
      { id: 'mesa_fecha_inicio',     label: 'Fecha de inicio',                  type: 'date' },
      { id: 'mesa_juicio',           label: 'Tipo de Juicio',                   type: 'select',
        options: OPCIONES.TIPO_JUICIO },
      { id: 'mesa_monto',            label: 'Monto de la demanda',              type: 'money' },
    ],
    abogado: [
      { id: 'abg_tipo_hecho',        label: 'Tipo de Hecho',                    type: 'select',
        options: OPCIONES.TIPO_JUICIO },
      { id: 'abg_fecha_hecho',       label: 'Fecha del Hecho',                  type: 'date' },
      { id: 'abg_lugar_hecho',       label: 'Lugar del Hecho',                  type: 'text',    full: true },
      { id: 'abg_linea',             label: 'Línea Ferroviaria',                type: 'linea' },
      { id: 'abg_num_siniestro',     label: 'N° de Siniestro',                  type: 'text',
        hint: 'SS = Sin Siniestro', mono: true },
    ],
  },

  // ── DEMANDA_LABORAL ────────────────────────────────────────────────────────
  DEMANDA_LABORAL: {
    label: 'Demanda Laboral',
    mesa: [
      { id: 'mesa_num_causa',        label: 'N° de Causa',                      type: 'causa',   mono: true },
      { id: 'mesa_juzgado',          label: 'Juzgado',                          type: 'juzgado' },
      { id: 'mesa_secretaria',       label: 'Secretaría',                       type: 'text' },
      { id: 'mesa_caratula',         label: 'Carátula',                         type: 'text',    full: true },
      { id: 'mesa_abogado_contr',    label: 'Abogado de la contraria',          type: 'text' },
      { id: 'mesa_parte_actora',     label: 'Parte Actora',                     type: 'text' },
      { id: 'mesa_parte_dem',        label: 'Parte Demandada',                  type: 'text' },
      { id: 'mesa_coactores',        label: 'Coactores',                        type: 'text',    full: true },
      { id: 'mesa_codemandados',     label: 'Codemandado',                      type: 'text',    full: true },
      { id: 'mesa_fecha_inicio',     label: 'Fecha de inicio',                  type: 'date' },
      { id: 'mesa_juicio',           label: 'Tipo de Juicio',                   type: 'select',
        options: OPCIONES.TIPO_JUICIO },
      { id: 'mesa_monto',            label: 'Monto de la demanda',              type: 'money' },
    ],
    abogado: [
      { id: 'abg_tipo_hecho',        label: 'Tipo de Hecho',                    type: 'select',
        options: OPCIONES.TIPO_JUICIO },
      { id: 'abg_fecha_hecho',       label: 'Fecha del Hecho',                  type: 'date' },
      { id: 'abg_lugar_hecho',       label: 'Lugar del Hecho',                  type: 'text',    full: true },
      { id: 'abg_linea',             label: 'Línea Ferroviaria',                type: 'linea' },
      { id: 'abg_num_siniestro',     label: 'N° de Siniestro',                  type: 'text',
        hint: 'SS = Sin Siniestro', mono: true },
    ],
  },

  // ── CONSIGNACION ───────────────────────────────────────────────────────────
  CONSIGNACION: {
    label: 'Consignaciones',
    mesa: [
      { id: 'mesa_nombre_causante',  label: 'Nombre causante / ex trabajador',  type: 'text',    full: true },
    ],
    abogado: [
      { id: 'abg_fecha_deceso',      label: 'Fecha del deceso',                 type: 'date' },
      { id: 'abg_herederos_leg',     label: 'Herederos denunciados en el legajo', type: 'textarea', full: true },
      { id: 'abg_otros_hered',       label: 'Otros supuestos herederos',        type: 'textarea', full: true },
      { id: 'abg_dir_hered',         label: 'Dirección de los herederos',       type: 'textarea', full: true },
      { id: 'abg_motivos',           label: 'Motivos de la consignación',       type: 'textarea', full: true },
      { id: 'abg_monto',             label: 'Monto a consignar',                type: 'money' },
      { id: 'abg_tope_convenio',     label: 'Se aplicó tope de convenio',       type: 'select',
        options: ['Sí','No','Vizzoti'] },
      { id: 'abg_tope_aplicado',     label: 'Tope de convenio aplicado',        type: 'text' },
      { id: 'abg_categoria',         label: 'Categoría',                        type: 'text' },
      { id: 'abg_convenio',          label: 'Convenio colectivo aplicable',     type: 'text' },
    ],
  },

  // ── DESAFUERO ──────────────────────────────────────────────────────────────
  DESAFUERO: {
    label: 'Desafueros',
    mesa: [
      { id: 'mesa_nombre_trab',      label: 'Nombre del trabajador',            type: 'text',    full: true },
      { id: 'mesa_fecha_ingreso',    label: 'Fecha de ingreso',                 type: 'date' },
    ],
    abogado: [
      { id: 'abg_area_req',          label: 'Área requirente',                  type: 'text' },
      { id: 'abg_linea_req',         label: 'Línea requirente',                 type: 'linea' },
      { id: 'abg_motivo',            label: 'Motivo / hecho denunciado',        type: 'textarea', full: true },
      { id: 'abg_tipo_hecho',        label: 'Tipo de hecho',                    type: 'select',
        options: OPCIONES.TIPO_HECHO_DESAFUERO },
      { id: 'abg_fecha_hecho',       label: 'Fecha del hecho',                  type: 'date' },
      { id: 'abg_sancion',           label: 'Sanción que se persigue',          type: 'select',
        options: ['Suspensión','Despido','Otras'],
        onchange: 'onSancionChange' },
      { id: 'abg_dias_suspension',   label: 'Cantidad de días',                 type: 'text',
        placeholder: 'Ej: 30',
        dependsOn: { field: 'abg_sancion', value: 'Suspensión' } },
      { id: 'abg_fecha_informe',     label: 'Fecha informe sanción',            type: 'date' },
      { id: 'abg_causa_penal',       label: 'N° Causa Penal',                   type: 'text',    mono: true },
      { id: 'abg_nro_ucit',          label: 'N° Informe UCIT',                  type: 'text',    mono: true },
    ],
  },

  // ── QUERELLA ───────────────────────────────────────────────────────────────
  QUERELLA: {
    label: 'Querellas',
    mesa: [
      { id: 'mesa_area_req',         label: 'Área requirente',                  type: 'text' },
      { id: 'mesa_num_causa',        label: 'N° de Causa',                      type: 'causa',   mono: true },
      { id: 'mesa_juzgado',          label: 'Juzgado',                          type: 'juzgado' },
      { id: 'mesa_fiscalia',         label: 'Fiscalía',                         type: 'juzgado' },
      { id: 'mesa_tribunal',         label: 'Tribunal',                         type: 'juzgado' },
      { id: 'mesa_ufi',              label: 'UFI',                              type: 'juzgado' },
      { id: 'mesa_linea',            label: 'Línea ferroviaria',                type: 'linea' },
    ],
    abogado: [
      { id: 'abg_caratula',          label: 'Carátula',                         type: 'text',    full: true },
      { id: 'abg_tipo_hecho',        label: 'Tipo de Hecho',                    type: 'select',
        options: OPCIONES.TIPO_HECHO_PENAL },
      { id: 'abg_fecha_hecho',       label: 'Fecha del Hecho',                  type: 'date' },
      { id: 'abg_lugar_hecho',       label: 'Lugar del Hecho',                  type: 'text',    full: true },
    ],
  },

  // ── DEFENSA_CIVIL ──────────────────────────────────────────────────────────
  DEFENSA_CIVIL: {
    label: 'Defensas Civiles',
    mesa: [
      { id: 'mesa_num_causa',        label: 'N° de Causa',                      type: 'causa',   mono: true },
      { id: 'mesa_juzgado',          label: 'Juzgado',                          type: 'juzgado' },
      { id: 'mesa_caratula',         label: 'Carátula',                         type: 'text',    full: true },
      { id: 'mesa_datos_depend',     label: 'Datos de los dependientes',        type: 'textarea', full: true },
    ],
    abogado: [
      { id: 'abg_tipo_hecho',        label: 'Tipo de Hecho',                    type: 'select',
        options: OPCIONES.TIPO_HECHO_PENAL },
      { id: 'abg_fecha_hecho',       label: 'Fecha del Hecho',                  type: 'date' },
      { id: 'abg_lugar_hecho',       label: 'Lugar del Hecho',                  type: 'text',    full: true },
      { id: 'abg_linea',             label: 'Línea ferroviaria',                type: 'linea' },
    ],
  },

  // ── DEFENSA_PENAL ──────────────────────────────────────────────────────────
  DEFENSA_PENAL: {
    label: 'Defensas Penales',
    mesa: [
      { id: 'mesa_area_req',         label: 'Área requirente',                  type: 'text' },
      { id: 'mesa_empleado',         label: 'Datos del empleado a asistir',     type: 'textarea', full: true },
      { id: 'mesa_linea',            label: 'Línea ferroviaria',                type: 'linea' },
    ],
    abogado: [
      { id: 'abg_num_causa',         label: 'N° de Causa',                      type: 'causa',   mono: true },
      { id: 'abg_juzgado',           label: 'Juzgado',                          type: 'juzgado' },
      { id: 'abg_fiscalia',          label: 'Fiscalía',                         type: 'juzgado' },
      { id: 'abg_tribunal',          label: 'Tribunal',                         type: 'juzgado' },
      { id: 'abg_ufi',               label: 'UFI',                              type: 'juzgado' },
      { id: 'abg_caratula',          label: 'Carátula',                         type: 'text',    full: true },
      { id: 'abg_imputados',         label: 'Datos de los imputados',           type: 'textarea', full: true },
      { id: 'abg_tipo_hecho',        label: 'Tipo de Hecho',                    type: 'select',
        options: OPCIONES.TIPO_HECHO_PENAL },
      { id: 'abg_fecha_hecho',       label: 'Fecha del Hecho',                  type: 'date' },
      { id: 'abg_lugar_hecho',       label: 'Lugar del Hecho',                  type: 'text',    full: true },
    ],
  },

  // ── PEDIDO_CAUSA_PENAL ─────────────────────────────────────────────────────
  PEDIDO_CAUSA_PENAL: {
    label: 'Pedido de Causa Penal',
    mesa: [],
    nota: 'Sin campos en Mesa SACO. Asignación automática.',
    abogado: [
      { id: 'abg_num_causa',         label: 'N° de Causa',                      type: 'causa',   mono: true },
      { id: 'abg_juzgado',           label: 'Juzgado',                          type: 'juzgado' },
      { id: 'abg_fiscalia',          label: 'Fiscalía',                         type: 'juzgado' },
      { id: 'abg_tribunal',          label: 'Tribunal',                         type: 'juzgado' },
      { id: 'abg_ufi',               label: 'UFI',                              type: 'juzgado' },
      { id: 'abg_caratula',          label: 'Carátula',                         type: 'text',    full: true },
      { id: 'abg_tipo_hecho',        label: 'Tipo de Hecho',                    type: 'select',
        options: OPCIONES.TIPO_HECHO_PENAL },
      { id: 'abg_fecha_hecho',       label: 'Fecha del Hecho',                  type: 'date' },
      { id: 'abg_lugar_hecho',       label: 'Lugar del Hecho',                  type: 'text',    full: true },
      { id: 'abg_linea',             label: 'Línea ferroviaria',                type: 'linea' },
      { id: 'abg_num_siniestro',     label: 'N° de Siniestro',                  type: 'text',
        hint: 'SS = Sin Siniestro', mono: true },
    ],
  },

  // ── CARTA_SUCESO ───────────────────────────────────────────────────────────
  CARTA_SUCESO: {
    label: 'Carta Suceso (SAE)',
    mesa: [],
    abogado: [
      { id: 'abg_documental',        label: 'Documental',                       type: 'textarea', full: true },
      { id: 'abg_nro_suceso',        label: 'N° de Suceso',                     type: 'text',    mono: true },
      { id: 'abg_jurisdiccion',      label: 'Jurisdicción',                     type: 'select',
        options: ['Federal','Provincial','Ciudad de Buenos Aires'] },
      { id: 'abg_tipo_hecho',        label: 'Tipo de Hecho',                    type: 'select',
        options: OPCIONES.TIPO_HECHO_PENAL },
      { id: 'abg_fecha_hecho',       label: 'Fecha del Hecho',                  type: 'date' },
      { id: 'abg_lugar_hecho',       label: 'Lugar del Hecho',                  type: 'text',    full: true },
      { id: 'abg_linea',             label: 'Línea ferroviaria',                type: 'linea' },
      { id: 'abg_juzgado',           label: 'Juzgado',                          type: 'juzgado' },
      { id: 'abg_fiscalia',          label: 'Fiscalía',                         type: 'juzgado' },
      { id: 'abg_num_causa',         label: 'N° de Causa',                      type: 'causa',   mono: true },
      { id: 'abg_denunciante',       label: 'Denunciante',                      type: 'text',    full: true },
    ],
  },

  // ── OTROS ──────────────────────────────────────────────────────────────────
  OTROS: {
    label: 'Otros',
    mesa: [
      { id: 'mesa_fecha_ingreso',    label: 'Fecha del ingreso',                type: 'date',    defaultToday: true },
      { id: 'mesa_descripcion',      label: 'Descripción del ingreso',          type: 'textarea', full: true },
      { id: 'mesa_remitente',        label: 'Remitente',                        type: 'text',    full: true },
      { id: 'mesa_tema',             label: 'Tema / reclamo principal',         type: 'textarea', full: true },
    ],
    abogado: [
      { id: 'abg_requiere_resp',     label: 'Requiere respuesta',               type: 'select',
        options: ['Sí','No'] },
      { id: 'abg_area_informante',   label: 'Área informante',                  type: 'text' },
      { id: 'abg_vinculacion',       label: 'Vinculación con contrato o expediente', type: 'text', full: true },
      { id: 'abg_fecha_resp',        label: 'Fecha de respuesta',               type: 'date' },
    ],
  },

};

function getCamposFormulario(tipoGestion, etapa, area) {
  const form = FORMULARIOS[tipoGestion];
  if (!form) return [];
  if (tipoGestion === 'OFICIO' && area === 'PENAL') {
    return (form.variante_penal && form.variante_penal[etapa]) ? form.variante_penal[etapa] : [];
  }
  return form[etapa] || [];
}


// ── Estados por tipo de gestión ────────────────────────────────────────────
const ESTADOS_POR_TIPO = {
  OFICIO: [
    'Recepcionado',
    'Pedido de información',
    'Información recibida',
    'Respondido',
    'Finalizado',
  ],
  CARTA_DOC: [
    'Recepcionado',
    'Pedido de información',
    'Información recibida',
    'Respondido',
    'Finalizado',
  ],
  MEDIACION: [
    'Recepcionado',
    'En análisis',
    'Solicitud de información',
    'Cumplido (acuerdo)',
    'Cumplido (no acuerdo)',
    'Archivado',
  ],
  SECLO: [
    'Recepcionado',
    'En análisis',
    'Cumplido (acuerdo)',
    'Cumplido (no acuerdo)',
    'Archivado',
  ],
  DESAFUERO: [
    'Recepcionado',
    'Asignación al letrado',
    'En análisis',
    'Juicio iniciado',
    'Devuelto al sector requirente',
  ],
  COBRO_CANON: [
    'Recepcionado',
    'Asignación al letrado',
    'En análisis',
    'Juicio iniciado',
    'Devuelto al sector requirente',
  ],
  RECLAMO_CONTRAT: [
    'Recepcionado',
    'Asignación al letrado',
    'En análisis',
    'Juicio iniciado',
    'Devuelto al sector requirente',
  ],
  CONSIGNACION: [
    'Recepcionado',
    'Asignación al letrado',
    'En análisis',
    'Juicio iniciado',
    'Espacio recuperado extrajudicialmente',
    'Devuelto al sector requirente',
  ],
  RECUPERO: [
    'Recepcionado',
    'Asignación al letrado',
    'En análisis',
    'Juicio iniciado',
    'Devuelto al sector requirente',
  ],
  EJECUCION_GAR: [
    'Recepcionado',
    'Asignación al letrado',
    'En análisis',
    'Juicio iniciado',
    'Devuelto al sector requirente',
  ],
  DEMANDA: [
    'Inicio',
    'Traba de litis',
    'Prueba',
    'Alegato',
    'Sentencia 1° favorable',
    'Sentencia 1° desfavorable',
    'Apelación',
    'Sentencia 2° favorable',
    'Sentencia 2° desfavorable',
    'Recurso Extraordinario Federal',
    'Previsionado',
    'Recurso de Queja',
    'Finalizado',
  ],
  QUERELLA: [
    'Recepcionado',
    'En análisis',
    'Se presenta como parte querellante',
    'No se presenta como parte querellante',
    'Rechazado',
    'Aceptado',
    'Etapa de instrucción',
    'Etapa de juicio',
    'Conciliación',
    'Reparación integral',
    'Suspensión de juicio a prueba',
    'Procesamiento',
    'Elevación a juicio',
    'Sobreseimiento',
    'Falta de mérito',
    'Absolución',
    'Condenado',
    'Recurso de queja',
    'Recurso de casación',
    'Apelación',
    'Recurso Extraordinario Federal',
    'Recurso de revisión',
    'Recurso de reposición',
    'Recurso de inconstitucionalidad',
  ],
  DEFENSA_CIVIL: [
    'Recepcionado',
    'En análisis',
    'Asume representación',
    'No asume representación',
    'Etapa de instrucción',
    'Etapa de juicio',
    'Conciliación',
    'Reparación integral',
    'Suspensión de juicio a prueba',
    'Procesamiento',
    'Elevación a juicio',
    'Sobreseimiento',
    'Falta de mérito',
    'Absolución',
    'Condenado',
    'Recurso de queja',
    'Recurso de casación',
    'Apelación',
    'Recurso Extraordinario Federal',
    'Recurso de revisión',
    'Recurso de reposición',
    'Recurso de inconstitucionalidad',
  ],
  DEFENSA_PENAL: [
    'Recepcionado',
    'En análisis',
    'Asume defensa',
    'No asume defensa',
    'Etapa de instrucción',
    'Etapa de juicio',
    'Conciliación',
    'Reparación integral',
    'Suspensión de juicio a prueba',
    'Procesamiento',
    'Elevación a juicio',
    'Sobreseimiento',
    'Falta de mérito',
    'Absolución',
    'Condenado',
    'Recurso de queja',
    'Recurso de casación',
    'Apelación',
    'Recurso Extraordinario Federal',
    'Recurso de revisión',
    'Recurso de reposición',
    'Recurso de inconstitucionalidad',
  ],
  ASISTENCIA_TEC: [
    'Recepcionado',
    'En análisis',
    'Asume defensa',
    'No asume defensa',
    'Etapa de instrucción',
    'Etapa de juicio',
    'Conciliación',
    'Reparación integral',
    'Suspensión de juicio a prueba',
    'Procesamiento',
    'Elevación a juicio',
    'Sobreseimiento',
    'Falta de mérito',
    'Absolución',
    'Condenado',
    'Recurso de queja',
    'Recurso de casación',
    'Apelación',
    'Recurso Extraordinario Federal',
    'Recurso de revisión',
    'Recurso de reposición',
    'Recurso de inconstitucionalidad',
  ],
  BENEFICIO_LITIGAR: [
    'Recepcionado',
    'Asignación al letrado',
    'En análisis',
  ],
  LANZAMIENTO: [
    'Recepcionado',
    'Asignación al letrado',
    'En análisis',
    'Juicio iniciado',
    'Espacio recuperado extrajudicialmente',
    'Devuelto al sector requirente',
  ],
  DEMANDA_CIVIL: [
    'Inicio',
    'Traba de litis',
    'Prueba',
    'Alegato',
    'Sentencia 1° favorable',
    'Sentencia 1° desfavorable',
    'Apelación',
    'Sentencia 2° favorable',
    'Sentencia 2° desfavorable',
    'Recurso Extraordinario Federal',
    'Previsionado',
    'Recurso de Queja',
    'Finalizado',
  ],
  DEMANDA_LABORAL: [
    'Inicio',
    'Traba de litis',
    'Prueba',
    'Alegato',
    'Sentencia 1° favorable',
    'Sentencia 1° desfavorable',
    'Apelación',
    'Sentencia 2° favorable',
    'Sentencia 2° desfavorable',
    'Recurso Extraordinario Federal',
    'Previsionado',
    'Recurso de Queja',
    'Finalizado',
  ],
  PEDIDO_CAUSA_PENAL: [
    'Solicitud enviada',
    'Solicitud tramitada',
    'Solicitud pendiente',
    'Solicitud cumplida',
  ],
  CARTA_SUCESO: [
    'Recepcionado',
    'En análisis',
    'Se descarta por no corresponder',
    'Se formula denuncia',
    'Carga de datos causa',
  ],
  SOLICITUD_AREAS: [
    'Solicitud enviada',
    'Solicitud tramitada',
    'Solicitud pendiente',
    'Solicitud cumplida',
  ],
  OTROS: [
    'Recepcionado',
    'En análisis',
    'En trámite',
    'Finalizado',
    'Archivado',
  ],
};

function getEstadosPorTipo(tipoGestion) {
  return ESTADOS_POR_TIPO[tipoGestion] || [
    'Recepcionado',
    'En trámite',
    'Finalizado',
  ];
}

// ── Búsqueda por N° de causa (para alerta de reincidencia) ──────────────────
function buscarPorNumeroCausa(numeroCausa) {
  if (!numeroCausa || numeroCausa.trim() === '') return [];
  const q = numeroCausa.trim().toLowerCase();
  const todos = [
    ...(EXPEDIENTES_ABOGADO || []),
    ...(QUEUE_MESA || []),
  ].filter(e => e.numero_causa && e.numero_causa.toLowerCase() === q);
  return todos;
}

// ── Helpers de navegación entre expedientes ────────────────────────────────
function getExpedienteById(id) {
  if (EXPEDIENTE_DETALLE && EXPEDIENTE_DETALLE.id === id) return EXPEDIENTE_DETALLE;
  return (EXPEDIENTES_ABOGADO || []).find(e => e.id === id) || null;
}

function abrirExpediente(id) {
  window.location.href = 'detalle-expediente.html?id=' + id;
}

window.SACO = {
  TIPOS_GESTION,
  LINEAS_FERROVIARIAS,
  ABOGADOS,
  ESTADOS,
  QUEUE_MESA,
  EXPEDIENTES_ABOGADO,
  EXPEDIENTE_DETALLE,
  CARTA_SUCESO_QUEUE,
  CAUSAS_PENALES,
  JUZGADOS,
  USUARIOS,
  ROL_ACCESOS,
  CURRENT_USER: null,
  getAccesos,
  ESTADOS_POR_TIPO,
  getEstadosPorTipo,
  FORMULARIOS,
  getCamposFormulario,
  OPCIONES,
  CAMPOS_COMUNES_MESA,
  buscarPorNumeroCausa,
  getExpedienteById,
  abrirExpediente,
};