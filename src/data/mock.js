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
    { code: 'OTROS',              label: 'Otros',                            canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
  ],
  LABORAL: [
    { code: 'OFICIO',            label: 'Oficios',                          canal: 'EE_GDE',   canales: ['EE_GDE','MEMO_GDE'] },
    { code: 'CARTA_DOC',         label: 'Carta Documento',                  canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'SECLO',             label: 'SECLO',                            canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'DEMANDA_LABORAL',   label: 'Demanda Laboral',                  canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'CONSIGNACION',      label: 'Consignaciones',                   canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'DESAFUERO',          label: 'Desafueros',                       canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'PEDIDO_CAUSA_PENAL', label: 'Pedido de Causa Penal',            canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'OTROS',              label: 'Otros',                            canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
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

// ── Juzgados (catálogo — completar con los datos del Excel del negocio) ────
const JUZGADOS = [
  // ── Fuero Federal Civil y Comercial — CABA ──────────────────────────────
  { code: 'FFCC_01', label: 'Juzgado Federal Civil y Comercial N°1 — CABA' },
  { code: 'FFCC_02', label: 'Juzgado Federal Civil y Comercial N°2 — CABA' },
  { code: 'FFCC_03', label: 'Juzgado Federal Civil y Comercial N°3 — CABA' },
  { code: 'FFCC_04', label: 'Juzgado Federal Civil y Comercial N°4 — CABA' },
  { code: 'FFCC_05', label: 'Juzgado Federal Civil y Comercial N°5 — CABA' },
  { code: 'FFCC_06', label: 'Juzgado Federal Civil y Comercial N°6 — CABA' },
  { code: 'FFCC_07', label: 'Juzgado Federal Civil y Comercial N°7 — CABA' },
  { code: 'FFCC_08', label: 'Juzgado Federal Civil y Comercial N°8 — CABA' },
  { code: 'FFCC_09', label: 'Juzgado Federal Civil y Comercial N°9 — CABA' },
  { code: 'FFCC_10', label: 'Juzgado Federal Civil y Comercial N°10 — CABA' },
  { code: 'FFCC_11', label: 'Juzgado Federal Civil y Comercial N°11 — CABA' },
  { code: 'FFCC_12', label: 'Juzgado Federal Civil y Comercial N°12 — CABA' },
  // ── Fuero Nacional del Trabajo — CABA ───────────────────────────────────
  { code: 'JNT_30',  label: 'Juzgado Nacional del Trabajo N°30 — CABA' },
  { code: 'JNT_38',  label: 'Juzgado Nacional del Trabajo N°38 — CABA' },
  { code: 'JNT_40',  label: 'Juzgado Nacional del Trabajo N°40 — CABA' },
  { code: 'JNT_42',  label: 'Juzgado Nacional del Trabajo N°42 — CABA' },
  { code: 'JNT_45',  label: 'Juzgado Nacional del Trabajo N°45 — CABA' },
  { code: 'JNT_55',  label: 'Juzgado Nacional del Trabajo N°55 — CABA' },
  { code: 'JNT_60',  label: 'Juzgado Nacional del Trabajo N°60 — CABA' },
  { code: 'JNT_74',  label: 'Juzgado Nacional del Trabajo N°74 — CABA' },
  { code: 'JNT_80',  label: 'Juzgado Nacional del Trabajo N°80 — CABA' },
  // ── Fuero Federal en lo Criminal y Correccional — CABA ──────────────────
  { code: 'JFCC_01', label: 'Juzgado Federal en lo Criminal y Correccional N°1 — CABA' },
  { code: 'JFCC_02', label: 'Juzgado Federal en lo Criminal y Correccional N°2 — CABA' },
  { code: 'JFCC_03', label: 'Juzgado Federal en lo Criminal y Correccional N°3 — CABA' },
  { code: 'JFCC_04', label: 'Juzgado Federal en lo Criminal y Correccional N°4 — CABA' },
  { code: 'JFCC_05', label: 'Juzgado Federal en lo Criminal y Correccional N°5 — CABA' },
  { code: 'JFCC_06', label: 'Juzgado Federal en lo Criminal y Correccional N°6 — CABA' },
  { code: 'JFCC_07', label: 'Juzgado Federal en lo Criminal y Correccional N°7 — CABA' },
  { code: 'JFCC_08', label: 'Juzgado Federal en lo Criminal y Correccional N°8 — CABA' },
  { code: 'JFCC_09', label: 'Juzgado Federal en lo Criminal y Correccional N°9 — CABA' },
  { code: 'JFCC_10', label: 'Juzgado Federal en lo Criminal y Correccional N°10 — CABA' },
  { code: 'JFCC_11', label: 'Juzgado Federal en lo Criminal y Correccional N°11 — CABA' },
  { code: 'JFCC_12', label: 'Juzgado Federal en lo Criminal y Correccional N°12 — CABA' },
  // ── Fuero Federal — Interior ─────────────────────────────────────────────
  { code: 'JFR_MZA', label: 'Juzgado Federal de Mendoza' },
  { code: 'JFR_TUC', label: 'Juzgado Federal de Tucumán' },
  { code: 'JFR_CBA', label: 'Juzgado Federal de Córdoba' },
  { code: 'JFR_ROS', label: 'Juzgado Federal de Rosario' },
  // ── Fuero Contencioso Administrativo Federal ─────────────────────────────
  { code: 'JCAF_01', label: 'Juzgado Contencioso Administrativo Federal N°1' },
  { code: 'JCAF_02', label: 'Juzgado Contencioso Administrativo Federal N°2' },
  { code: 'JCAF_03', label: 'Juzgado Contencioso Administrativo Federal N°3' },
  { code: 'JCAF_04', label: 'Juzgado Contencioso Administrativo Federal N°4' },
  { code: 'JCAF_05', label: 'Juzgado Contencioso Administrativo Federal N°5' },
  { code: 'JCAF_06', label: 'Juzgado Contencioso Administrativo Federal N°6' },
  // ── Cámara ───────────────────────────────────────────────────────────────
  { code: 'CAM_CCIV', label: 'Cámara Federal Civil y Comercial — CABA' },
  { code: 'CAM_TRAB', label: 'Cámara Nacional del Trabajo — CABA' },
  { code: 'CAM_CRIM', label: 'Cámara Federal Criminal y Correccional — CABA' },
  { code: 'CAM_CAF',  label: 'Cámara Contencioso Administrativo Federal' },
  // ── Mediación ────────────────────────────────────────────────────────────
  { code: 'MED_CABA', label: 'Centro de Mediación Prejudicial — CABA' },
  // ── Sin juzgado / pendiente ──────────────────────────────────────────────
  { code: 'SIN_JDO',  label: 'Sin juzgado asignado aún' },
];

const LINEAS_FERROVIARIAS = [
  { code: 'LM',          label: 'Línea Mitre',         abogado: 'Dr. Marcos Gallo' },
  { code: 'LSM',         label: 'Línea San Martín',    abogado: 'Dra. Carla Ibáñez' },
  { code: 'LGR',         label: 'Línea General Roca',  abogado: 'Dr. Ramón Pereyra' },
  { code: 'LBS',         label: 'Línea Belgrano Sur',  abogado: 'Dra. Sofía Mena' },
  { code: 'LS',          label: 'Línea Sarmiento',     abogado: 'Dr. Pablo Torres' },
  { code: 'TDC',         label: 'Tren de la Costa',    abogado: 'Dra. Carla Ibáñez' },
  { code: 'CENTRAL',     label: 'Central',             abogado: 'Dra. Carla Ibáñez' },
  { code: 'REGIONALES',  label: 'Regionales',          abogado: 'Dra. Carla Ibáñez' },
  { code: 'GENERAL',     label: 'General',             abogado: 'Dr. Marcos Gallo' },
];

const ABOGADOS = {
  CIVIL:   ['Dr. Alejandro Rossi', 'Dra. Elena Ruiz', 'Dr. Sergio Fontana', 'Dra. Laura Vidal'],
  LABORAL: ['Dr. Hernán Blanco', 'Dra. Cecilia Mora', 'Dr. Julián Pinto'],
  PENAL:   ['Dr. Marcos Gallo', 'Dra. Carla Ibáñez', 'Dr. Ramón Pereyra', 'Dra. Sofía Mena', 'Dr. Pablo Torres'],
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

// Expedientes del abogado (bandeja)
const EXPEDIENTES_ABOGADO = [

  // ── CAUSA FSM-11802/2023 — 3 expedientes ──────────────────────────
  {
    id: 'C-0023/2026', area: 'CIVIL', tipo: 'DEMANDA_CIVIL',
    caratula: 'Martínez, Juan Carlos c/ SOFSE s/ daños y perjuicios',
    numero_causa: 'FSM-11802/2023',
    juzgado: 'Juzgado Federal Civil y Comercial N°8 — Sec. 15',
    estado: 'EN_PRUEBA', estadoLabel: 'Prueba',
    fecha_recepcion: '2023-10-20',
    abogado: 'Dr. Alejandro Rossi', linea: 'LM',
    tiene_alerta: true,
    alerta_msg: 'Vence período probatorio en 12 días',
    prioridad: 'ALTA',
    es_principal: true,
    vinculos: [], intervinientes: [],
    campos_mesa: {}, campos_abogado: {},
    timeline: [
      { fecha: 'Hoy · 10:45', tipo: 'RECEPCION',
        titulo: 'Incorporación de Dictamen Pericial',
        desc: 'Peritaje accidentológico adjunto.',
        doc: 'PER-2026-001.pdf', activo: true,
        estadoExpediente: 'EN_PRUEBA', subMovimientos: [] },
      { fecha: '20/10/2023 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura de Expediente',
        desc: 'Ingreso por cédula en papel — Mesa de Entradas.',
        doc: 'EX-2023-08842-APN-SACO#SOFSE', activo: false,
        estadoExpediente: 'EN_PLAZO_CONTESTAR', subMovimientos: [] },
    ],
    documentos: [
      { nombre: 'Demanda_Inicial.pdf', tipo: 'GDE — OJ',
        fecha: '20/10/2023', size: '2.4 MB',
        icon: 'picture_as_pdf', color: 'error' },
      { nombre: 'Dictamen_Pericial.pdf', tipo: 'Adjunto',
        fecha: '12/04/2026', size: '3.2 MB',
        icon: 'picture_as_pdf', color: 'error' },
    ],
  },

  {
    id: 'C-0031/2026', area: 'CIVIL', tipo: 'MEDIACION',
    caratula: 'Mediación prejudicial — Rodríguez, Ana c/ SOFSE s/ daños paso a nivel',
    numero_causa: 'FSM-11802/2023',
    juzgado: 'Centro de Mediación — Retiro',
    estado: 'EN_TRAMITE', estadoLabel: 'Solicitud de información',
    fecha_recepcion: '2025-11-15',
    abogado: 'Dr. Alejandro Rossi', linea: 'LM',
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL',
    es_principal: false,
    vinculos: [], intervinientes: [],
    campos_mesa: {}, campos_abogado: {},
    timeline: [
      { fecha: '15/11/2025 · 11:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Mediación prejudicial',
        desc: 'Ingreso por EE GDE. Audiencia fijada.',
        doc: 'EX-2025-09921-APN-SACO#SOFSE', activo: true,
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'C-0044/2025', area: 'CIVIL', tipo: 'RECUPERO',
    caratula: 'Recupero daños — Vehículo paso a nivel Km 4.5 Línea Mitre',
    numero_causa: 'FSM-11802/2023',
    juzgado: 'Mediación extrajudicial',
    estado: 'EN_TRAMITE', estadoLabel: 'En análisis',
    fecha_recepcion: '2026-02-10',
    abogado: 'Dr. Alejandro Rossi', linea: 'LM',
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL',
    es_principal: false,
    vinculos: [], intervinientes: [],
    campos_mesa: {}, campos_abogado: {},
    timeline: [
      { fecha: '10/02/2026 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Recupero de Daños',
        desc: 'Memo SGSySL recibido.',
        doc: 'ME-2026-00441-APN-SGSSL#SOFSE', activo: true,
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  // ── CAUSA MED-GEN-2026/001 — 2 expedientes ────────────────────────
  {
    id: 'L-0035/2026', area: 'LABORAL', tipo: 'MEDIACION',
    caratula: 'Mediación prejudicial — Federación de Trabajadores del Transporte c/ SOFSE s/ reencuadramiento',
    numero_causa: 'MED-GEN-2026/001',
    juzgado: 'Centro de Mediación Laboral — San Nicolás',
    estado: 'EN_TRAMITE', estadoLabel: 'En análisis',
    fecha_recepcion: '2026-03-20',
    abogado: 'Alejandra López', linea: null,
    tiene_alerta: true,
    alerta_msg: 'Audiencia el 29/04/2026 — confirmar asistencia',
    prioridad: 'ALTA',
    es_principal: true,
    vinculos: [], intervinientes: [],
    campos_mesa: {}, campos_abogado: {},
    timeline: [
      { fecha: '20/03/2026 · 14:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Mediación Laboral',
        desc: 'Convocatoria de mediación prejudicial recibida.',
        doc: 'EX-2026-01122-APN-SACO#SOFSE', activo: true,
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  {
    id: 'P-0098/2026', area: 'PENAL', tipo: 'QUERELLA',
    caratula: 'SOFSE querellante — Sustracción de equipos Línea General Roca',
    numero_causa: 'MED-GEN-2026/001',
    juzgado: 'Juzgado Federal Penal N°4',
    estado: 'EN_TRAMITE', estadoLabel: 'Etapa de instrucción',
    fecha_recepcion: '2026-03-01',
    abogado: 'Alejandra López', linea: 'LGR',
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL',
    es_principal: false,
    vinculos: [], intervinientes: [],
    campos_mesa: {}, campos_abogado: {},
    timeline: [
      { fecha: '01/03/2026 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Querella SOFSE',
        desc: 'SOFSE se presenta como parte querellante.',
        doc: 'ME-2026-00882-APN-SACO#SOFSE', activo: true,
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  // ── SUELTO — sin causa asignada ───────────────────────────────────
  {
    id: 'C-0070/2026', area: 'CIVIL', tipo: 'OFICIO',
    caratula: 'Oficio Juzgado Federal Civil N°1 — solicitud informe institucional s/ gestión ferroviaria 2025',
    numero_causa: null,
    juzgado: 'Juzgado Federal Civil N°1',
    estado: 'EN_TRAMITE', estadoLabel: 'Pedido de información',
    fecha_recepcion: '2026-04-15',
    abogado: 'Alejandra López', linea: null,
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL',
    es_principal: false,
    vinculos: [], intervinientes: [],
    campos_mesa: {}, campos_abogado: {},
    timeline: [
      { fecha: '15/04/2026 · 10:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Oficio Civil',
        desc: 'Oficio recibido por EE GDE.',
        doc: 'EX-2026-02201-APN-SACO#SOFSE', activo: true,
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

  // ── SUELTO — Dr. Alejandro Rossi ─────────────────────────────────
  {
    id: 'C-0071/2026', area: 'CIVIL', tipo: 'OFICIO',
    caratula: 'Oficio Juzgado Nacional Civil N°5 — solicitud antecedentes siniestro ferroviario',
    numero_causa: null,
    juzgado: 'Juzgado Nacional Civil N°5',
    estado: 'EN_TRAMITE', estadoLabel: 'Pedido de información',
    fecha_recepcion: '2026-04-20',
    abogado: 'Dr. Alejandro Rossi', linea: null,
    tiene_alerta: false, alerta_msg: null,
    prioridad: 'NORMAL',
    es_principal: false,
    vinculos: [], intervinientes: [],
    campos_mesa: {}, campos_abogado: {},
    timeline: [
      { fecha: '20/04/2026 · 09:00', tipo: 'RECEPCION',
        titulo: 'Apertura — Oficio Civil',
        desc: 'Oficio recibido por EE GDE. Solicitud de antecedentes del siniestro.',
        doc: 'EX-2026-02801-APN-SACO#SOFSE', activo: true,
        estadoExpediente: 'EN_TRAMITE', subMovimientos: [] },
    ],
    documentos: [],
  },

];

// Detalle de expediente (C-0023/2026) — demanda civil siniestro Km 4.5 Línea Mitre
const EXPEDIENTE_DETALLE = {
  id: 'C-0023/2026',
  area: 'CIVIL',
  tipo: 'DEMANDA',
  caratula: 'Martínez, Juan Carlos c/ Trenes Argentinos SOFSE s/ daños y perjuicios',
  numero_causa: 'FSM-11802/2023',
  es_principal: true,
  numero_siniestro: 'SS-2023-0441',
  juzgado: 'Juzgado Federal Civil y Comercial N°8 — Secretaría 15',
  dependencia: 'Fuero Federal Civil y Comercial — CABA',
  estado: 'EN_PRUEBA',
  linea: 'LM — Línea Mitre',
  lugar_hecho: 'Paso a nivel Km 4.5 — Estación Palermo',
  fecha_hecho: '14/09/2023',
  fecha_recepcion: '20/10/2023',
  abogado: 'Dr. Alejandro Rossi',
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

// Usuarios demo — 8 perfiles para selección de rol en demo
const USUARIOS = [
  { id: 'ALJ',     nombre: 'Alejandra López',      iniciales: 'AL', rol: 'REFERENTE',     area: null,      cargo: 'Referente SACO' },
  { id: 'ADM',     nombre: 'Marcela Suárez',        iniciales: 'MS', rol: 'ADMINISTRATIVO', area: null,     cargo: 'Administrativo Mesa' },
  { id: 'COORD_C', nombre: 'Pablo Sbarbati',         iniciales: 'PS', rol: 'COORDINADOR',   area: 'CIVIL',   cargo: 'Coordinador Civil' },
  { id: 'COORD_L', nombre: 'Rodrigo Molinelli',      iniciales: 'RM', rol: 'COORDINADOR',   area: 'LABORAL', cargo: 'Coordinador Laboral' },
  { id: 'COORD_P', nombre: 'Gustavo Desideri',       iniciales: 'GD', rol: 'COORDINADOR',   area: 'PENAL',   cargo: 'Coordinador Penal' },
  { id: 'ABOG_C',  nombre: 'Dr. Alejandro Rossi',    iniciales: 'AR', rol: 'ABOGADO',       area: 'CIVIL',   cargo: 'Abogado Civil' },
  { id: 'ABOG_L',  nombre: 'Dr. Hernán Blanco',      iniciales: 'HB', rol: 'ABOGADO',       area: 'LABORAL', cargo: 'Abogado Laboral' },
  { id: 'ABOG_P',  nombre: 'Dr. Marcos Gallo',       iniciales: 'MG', rol: 'ABOGADO',       area: 'PENAL',   cargo: 'Abogado Penal' },
];

// Accesos por rol — nav visible, permisos y página de inicio
const ROL_ACCESOS = {
  REFERENTE: {
    nav: ['dashboard','bandeja-abogado','area-civil','area-laboral','gestion-penal','reports'],
    puedeReasignar: true, verTodaBandeja: true, inicio: 'dashboard',
  },
  ADMINISTRATIVO: {
    nav: ['mesa-saco'],
    puedeReasignar: false, verTodaBandeja: false, inicio: 'mesa-saco',
  },
  COORDINADOR: {
    CIVIL:   { nav: ['dashboard','bandeja-abogado','area-civil','reports'],    puedeReasignar: true,  verTodaBandeja: true,  inicio: 'area-civil'    },
    LABORAL: { nav: ['dashboard','bandeja-abogado','area-laboral','reports'],  puedeReasignar: true,  verTodaBandeja: true,  inicio: 'area-laboral'  },
    PENAL:   { nav: ['dashboard','bandeja-abogado','gestion-penal','reports'], puedeReasignar: true,  verTodaBandeja: true,  inicio: 'gestion-penal' },
  },
  ABOGADO: {
    CIVIL:   { nav: ['bandeja-abogado','area-civil'],    puedeReasignar: false, verTodaBandeja: false, inicio: 'bandeja-abogado' },
    LABORAL: { nav: ['bandeja-abogado','area-laboral'],  puedeReasignar: false, verTodaBandeja: false, inicio: 'bandeja-abogado' },
    PENAL:   { nav: ['bandeja-abogado','gestion-penal'], puedeReasignar: false, verTodaBandeja: false, inicio: 'bandeja-abogado' },
  },
};

function getAccesos(usuario) {
  if (!usuario) return ROL_ACCESOS.REFERENTE;
  const r = ROL_ACCESOS[usuario.rol];
  if (!r) return ROL_ACCESOS.REFERENTE;
  if (usuario.area && r[usuario.area]) return r[usuario.area];
  return r;
}


// ── Catálogos de opciones para selects ────────────────────────────────────────
const OPCIONES = {

  CARACTER_OFICIO: [
    { value: 'Informativo',  label: 'Informativo' },
    { value: 'Urgente',      label: 'Urgente' },
    { value: 'Reiteratorio', label: 'Reiteratorio' },
  ],

  TIPO_JUICIO: [
    'Accidente',
    'Acción Civil',
    'Amparo',
    'Beneficio de LSG',
    'Cobro de sumas de dinero',
    'Consignación',
    'Daños y perjuicios',
    'Despido',
    'Diferencias salariales',
    'Ejecución Fiscal',
    'Ejecutivo o preparación vía ejecutiva',
    'Extensión de responsabilidad',
    'Juicios sumarísimos',
    'Lanzamiento',
    'Prescripción adquisitiva',
    'Desafuero',
  ],

  SANCION: [
    { value: 'Suspensión', label: 'Suspensión', habilita: 'abg_dias_suspension' },
    { value: 'Despido',    label: 'Despido' },
    { value: 'Otras',      label: 'Otras' },
  ],

  TIPO_HECHO_DESAFUERO: [
    'Hurto',
    'Robo',
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

  TIPO_INTERVENCION_CIVIL_LAB: [
    'Parte Actora',
    'Parte Demandada',
    'Sin intervención',
  ],

  TIPO_INTERVENCION_PENAL: [
    'Denunciante',
    'Sin intervención',
  ],

  AREA_REQ_LANZAMIENTO: [
    'Comercial',
    'Líneas',
  ],
};

// ── Campos comunes a todos los tipos en el alta ────────────────────────────────
const CAMPOS_COMUNES_MESA = [
  { id: 'mesa_oficio_judicial',     label: 'Oficio Judicial (OJ)',                 type: 'text',     placeholder: 'N° OJ' },
  { id: 'mesa_tipo_intervencion',   label: 'Tipo de intervención',                 type: 'select',   options: [] },
  { id: 'mesa_fecha_requerimiento', label: 'Fecha de requerimiento',               type: 'date' },
  { id: 'mesa_datos_contacto',      label: 'Datos de contacto del requirente',     type: 'text',     hint: 'Teléfono, Mail, Dirección, Contacto', full: true },
  { id: 'mesa_comentarios',         label: 'Comentarios',                          type: 'textarea', full: true },
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
      { id: 'mesa_nro_doc_gde',      label: 'N° Documento GDE (OJ)',            type: 'text',    mono: true },
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