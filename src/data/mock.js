// ── SACO Mock Data ─────────────────────────────────────────────────────────

// ── Matriz canal × área (fuente de verdad del filtro de tipos) ─────────────
// canales: array → el tipo aparece cuando el canal activo está en ese array
const TIPOS_GESTION = {
  CIVIL: [
    { code: 'OFICIO',          label: 'Oficio',                 canales: ['EE_GDE'] },
    { code: 'CARTA_DOC',       label: 'Carta Documento',        canales: ['EE_GDE'] },
    { code: 'MEDIACION',       label: 'Mediación',              canales: ['EE_GDE', 'MEMO_GDE'] },
    { code: 'COBRO_CANON',     label: 'Cobro de Cánones',       canales: ['EE_GDE'] },
    { code: 'DEMANDA',         label: 'Demanda',                canales: ['EE_GDE'] },
    { code: 'SOLICITUD_AREAS', label: 'Solicitud de Áreas',     canales: ['MEMO_GDE'] },
    { code: 'DEFENSA_CIVIL',   label: 'Defensa Civil',          canales: ['MEMO_GDE'] },
    { code: 'RECUPERO',        label: 'Recupero de Daños',      canales: ['MEMO_GDE'] },
    { code: 'RECLAMO_CONTRAT', label: 'Reclamo a Contratistas', canales: ['MEMO_GDE'] },
    { code: 'EJECUCION_GAR',   label: 'Ejecución de Garantía',  canales: ['MEMO_GDE'] },
    { code: 'ASISTENCIA_TEC',  label: 'Asistencia Técnica',     canales: ['MEMO_GDE'] },
    { code: 'OTROS',           label: 'Otros',                  canales: ['EE_GDE', 'MEMO_GDE'] },
  ],
  LABORAL: [
    { code: 'OFICIO',          label: 'Oficio',                 canales: ['EE_GDE'] },
    { code: 'CARTA_DOC',       label: 'Carta Documento',        canales: ['EE_GDE'] },
    { code: 'MEDIACION',       label: 'Mediación',              canales: ['EE_GDE', 'MEMO_GDE'] },
    { code: 'DEMANDA',         label: 'Demanda',                canales: ['EE_GDE'] },
    { code: 'SOLICITUD_AREAS', label: 'Solicitud de Áreas',     canales: ['MEMO_GDE'] },
    { code: 'DESAFUERO',       label: 'Desafuero',              canales: ['MEMO_GDE'] },
    { code: 'CONSIGNACION',    label: 'Consignación',           canales: ['MEMO_GDE'] },
    { code: 'ASISTENCIA_TEC',  label: 'Asistencia Técnica',     canales: ['MEMO_GDE'] },
    { code: 'OTROS',           label: 'Otros',                  canales: ['EE_GDE', 'MEMO_GDE'] },
  ],
  PENAL: [
    // EE GDE
    { code: 'OFICIO',          label: 'Oficio',                 canales: ['EE_GDE'] },
    { code: 'MEDIACION',       label: 'Mediación',              canales: ['EE_GDE', 'MEMO_GDE'] },
    // MEMO GDE
    { code: 'DEFENSA_PENAL',   label: 'Defensa Penal',          canales: ['MEMO_GDE'] },
    { code: 'SOLICITUD_AREAS', label: 'Solicitud de Áreas',     canales: ['MEMO_GDE'] },
    { code: 'QUERELLA',        label: 'Querella',               canales: ['MEMO_GDE'] },
    { code: 'ASISTENCIA_TEC',  label: 'Asistencia Técnica',     canales: ['MEMO_GDE'] },
    { code: 'OTROS',           label: 'Otros',                  canales: ['EE_GDE', 'MEMO_GDE'] },
    // MAIL
    { code: 'CARTA_SUCESO',    label: 'Carta Suceso (SAE)',     canales: ['MAIL'] },
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
// Narrativa: accidente en paso a nivel Km 4.5 Línea Mitre (14/09/2023)
// Siniestro SS-2023-0441 — generó 3 procesos derivados
const EXPEDIENTES_ABOGADO = [
  {
    id: 'C-0023/2026', area: 'CIVIL', tipo: 'DEMANDA',
    caratula: 'Martínez, Juan Carlos c/ Trenes Argentinos SOFSE s/ daños y perjuicios',
    juzgado: 'Juzgado Federal Civil y Comercial N°8 — Sec. 15',
    numero_causa: 'FSM-11802/2023', numero_siniestro: 'SS-2023-0441',
    estado: 'EN_PRUEBA',
    fecha_hecho: '2023-09-14', fecha_recepcion: '2023-10-20',
    abogado: 'Dr. Alejandro Rossi', linea: 'LM', prioridad: 'ALTA',
    tiene_alerta: true, alerta_msg: 'Vence período probatorio en 12 días',
    gde: 'EX-2023-08842-APN-SACO#SOFSE',
  },
  {
    id: 'P-0089/2026', area: 'PENAL', tipo: 'CARTA_SUCESO',
    caratula: 'Descarrilamiento Est. Palermo — Formación 3408 Línea Mitre Km 4.5',
    juzgado: 'Juzgado Federal en lo Criminal y Correccional N°2',
    numero_causa: 'CFP-14233/2023', numero_siniestro: 'SS-2023-0441',
    estado: 'GDE_VINCULADO',
    fecha_hecho: '2023-09-14', fecha_recepcion: '2023-09-16',
    abogado: 'Dr. Marcos Gallo', linea: 'LM', prioridad: 'NORMAL',
    tiene_alerta: false, alerta_msg: null,
    gde: 'EX-2023-08910-APN-SACO#SOFSE',
    vinculos: [
      {
        id: 'C-0023/2026',
        area: 'CIVIL',
        tipo: 'DEMANDA',
        caratula: 'Martínez, Juan Carlos c/ Trenes Argentinos SOFSE s/ daños y perjuicios',
        estado: 'EN_PRUEBA',
        estadoLabel: 'Prueba',
        tipo_relacion: 'MISMO_SINIESTRO',
        numero_causa: 'FSM-11802/2023',
        abogado: 'Dr. Alejandro Rossi',
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
        rol_procesal: 'Denunciante',
        tipo_documento: 'DNI',
        numero_documento: '22.441.887',
        contacto_email: '',
        contacto_telefono: '011-4523-8891',
        contacto_domicilio: 'Av. Cabildo 1240 Piso 3, CABA',
        representado_por: 'Dr. Sebastián Ferreyra',
        observaciones: 'Víctima del incidente. También parte actora en causa civil C-0023/2026.',
      },
      {
        id: 'INT-002',
        nombre: 'SOFSA — Operadora Ferroviaria S.E.',
        rol_procesal: 'Imputado',
        tipo_documento: 'CUIT',
        numero_documento: '30-71034418-7',
        contacto_email: 'legal@sofse.gob.ar',
        contacto_telefono: '011-4317-4400',
        contacto_domicilio: 'Av. Ramos Mejía 1302, CABA',
        representado_por: 'Dr. Marcos Gallo',
        observaciones: '',
      },
    ],
  },
  {
    id: 'L-0012/2026', area: 'LABORAL', tipo: 'DEMANDA',
    caratula: 'Fernández, Diego Ariel c/ SOFSE s/ accidente de trabajo — Km 4.5 Línea Mitre',
    juzgado: 'Juzgado Nacional del Trabajo N°42',
    numero_causa: 'FLP-8834/2023', numero_siniestro: 'SS-2023-0441',
    estado: 'EN_PLAZO_CONTESTAR',
    fecha_hecho: '2023-09-14', fecha_recepcion: '2026-04-01',
    abogado: 'Dr. Hernán Blanco', linea: 'LM', prioridad: 'ALTA',
    tiene_alerta: true, alerta_msg: 'Plazo contestación vence 25/04/2026',
    gde: 'EX-2026-00449-APN-SACO#SOFSE',
    vinculos: [
      {
        id: 'C-0023/2026',
        area: 'CIVIL',
        tipo: 'DEMANDA',
        caratula: 'Martínez, Juan Carlos c/ Trenes Argentinos SOFSE s/ daños y perjuicios',
        estado: 'EN_PRUEBA',
        estadoLabel: 'Prueba',
        tipo_relacion: 'MISMO_SINIESTRO',
        numero_causa: 'FSM-11802/2023',
        abogado: 'Dr. Alejandro Rossi',
      },
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
    ],
    intervinientes: [
      {
        id: 'INT-001',
        nombre: 'González, Mario Héctor',
        rol_procesal: 'Actor',
        tipo_documento: 'DNI',
        numero_documento: '31.002.774',
        contacto_email: 'mhgonzalez@gmail.com',
        contacto_telefono: '011-5544-1122',
        contacto_domicilio: 'Nazca 890 PB, CABA',
        representado_por: 'Dr. Carlos Méndez (Sindicato)',
        observaciones: 'Empleado SOFSA. Lesionado en el incidente del Km 4.5.',
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
        representado_por: 'Dr. Hernán Blanco',
        observaciones: '',
      },
    ],
  },
];

// Detalle de expediente (C-0023/2026) — demanda civil siniestro Km 4.5 Línea Mitre
const EXPEDIENTE_DETALLE = {
  id: 'C-0023/2026',
  area: 'CIVIL',
  tipo: 'DEMANDA',
  caratula: 'Martínez, Juan Carlos c/ Trenes Argentinos SOFSE s/ daños y perjuicios',
  numero_causa: 'FSM-11802/2023',
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

// ── SACO Form Config ────────────────────────
//
// ── Definiciones atómicas de cada campo ───────────────────────────────────
// El render usa estas definiciones para generar el HTML correcto.
// type: 'text' | 'date' | 'select' | 'textarea' | 'select-dynamic' | 'toggle-input'
//
// select-dynamic: las options se resuelven en tiempo de render via optionsFn
// toggle-input:   switch + input condicional (caso N° de Siniestro)

const FIELD_DEFINITIONS = {

  // ── Campos universales ─────────────────────────────────────────────────
  num_causa: {
    label: 'N° de Causa Judicial',
    labelSuffix: '(opcional — puede cargarse luego desde el expediente)',
    type: 'text',
    mono: true,
    placeholder: 'FSM-XXXXX/2026 / IPP-XXXX / SS SOFSE',
    hint: 'Podés dejarlo vacío si aún no tenés el número. El abogado podrá cargarlo desde el detalle. SS = Sin Siniestro.',
    onInput: 'onNumeroCausaChange(this.value)',
  },
  caratula: {
    label: 'Carátula / Título del Caso',
    type: 'text',
    placeholder: 'Ej: García, Roberto c/ SOFSE s/ diferencias salariales',
    onInput: 'updateResumen()',
  },
  fecha_hecho: {
    label: 'Fecha del Hecho',
    type: 'date',
  },
  fecha_recepcion: {
    label: 'Fecha de Recepción en SACO',
    type: 'date',
    defaultToday: true,
  },
  dependencia: {
    label: 'Dependencia Judicial / Juzgado',
    type: 'select-dynamic',
    optionsFn: () => (window.SACO.JUZGADOS || []).map(j => ({ value: j.code, label: j.label })),
    placeholder: '— Seleccioná juzgado —',
  },
  linea_ferroviaria: {
    label: 'Línea Ferroviaria',
    type: 'select-dynamic',
    optionsFn: () => window.SACO.LINEAS_FERROVIARIAS.map(l => ({ value: l.code, label: l.label })),
    placeholder: '— Sin línea asociada —',
    onChange: 'onLineaChange()',
  },
  num_siniestro: {
    label: 'N° de Siniestro',
    type: 'toggle-input',
    mono: true,
    placeholder: 'SS-XXXX-XXXX / SS SOFSE',
    toggleLabel: 'Tiene N° de Siniestro',
  },
  observaciones: {
    label: 'Observaciones',
    labelSuffix: '(accesible en cualquier estado)',
    type: 'textarea',
    rows: 3,
    placeholder: 'Notas relevantes sobre el expediente...',
  },

  // ── Civil / Laboral ────────────────────────────────────────────────────
  parte_actora: {
    label: 'Parte Actora',
    type: 'text',
    placeholder: 'Nombre y apellido / razón social',
  },
  parte_demandada: {
    label: 'Parte Demandada',
    type: 'text',
    placeholder: 'Ej: SOFSE / Estado Nacional',
  },
  coactores: {
    label: 'Coactores',
    type: 'text',
    placeholder: 'Otros actores (opcional)',
  },
  codemandados: {
    label: 'Codemandados',
    type: 'text',
    placeholder: 'Otros demandados (opcional)',
  },
  tipo_hecho: {
    label: 'Tipo de Hecho',
    type: 'select',
    options: [
      { value: '', label: '— Seleccioná —' },
      { value: 'ACCIDENTE_PASO_NIVEL', label: 'Accidente en paso a nivel' },
      { value: 'CAIDA_ANDEN',          label: 'Caída en andén / plataforma' },
      { value: 'CHOQUE_FORMACION',     label: 'Choque de formación' },
      { value: 'ACCIDENTE_LABORAL',    label: 'Accidente laboral' },
      { value: 'DAÑO_VEHICULO',        label: 'Daño a vehículo' },
      { value: 'OTRO',                 label: 'Otro' },
    ],
  },
  lugar_hecho: {
    label: 'Lugar del Hecho',
    type: 'text',
    placeholder: 'Km / Estación / Sector',
  },
  juicio: {
    label: 'Juicio',
    type: 'select',
    options: [
      { value: '',  label: '— Seleccioná —' },
    ],
  },
  importe: {
    label: 'Importe / Monto de la Demanda',
    type: 'currency',
    placeholder: '0',
  },

  // ── DEMANDA extra (Civil / Laboral) ────────────────────────────────────
  variante_ingreso: {
    label: 'Variante de Ingreso',
    type: 'select',
    options: [
      { value: 'A', label: 'Variante A — Cédula en papel (SOFSE demandada)' },
      { value: 'B', label: 'Variante B — GDE directo (Estado Nacional demandado)' },
    ],
  },
  req_25344: {
    label: 'Requisitos Ley 25.344 cumplidos',
    type: 'checkbox',
  },

  // ── PENAL — compartidos ────────────────────────────────────────────────
  penal_requirente: {
    label: 'Datos del Requirente',
    type: 'select',
    options: [
      { value: '',                    label: '— Seleccioná —' },
      { value: 'JUZGADO',             label: 'Juzgado' },
      { value: 'PEDIDO_FILMACIONES',  label: 'Pedido de Filmaciones' },
      { value: 'COMISARIA',           label: 'Comisaría' },
      { value: 'FISCALIA',            label: 'Fiscalía' },
      { value: 'TRIBUNAL',            label: 'Tribunal' },
      { value: 'ORGANISMO',           label: 'Organismo' },
    ],
  },
  penal_mail: {
    label: 'Mail del Requirente',
    type: 'text',
    placeholder: 'ejemplo@organismo.gob.ar',
  },
  penal_telefono: {
    label: 'Teléfono del Requirente',
    type: 'text',
    placeholder: '011-1234-5678',
  },
  penal_direccion: {
    label: 'Dirección del Requirente',
    type: 'text',
    placeholder: 'Av. Siempre Viva 123',
  },
  penal_tipo_hecho: {
    label: 'Tipo de Hecho',
    type: 'text',
    placeholder: 'Describe el tipo de hecho penal',
  },
  penal_lugar_hecho: {
    label: 'Lugar del Hecho',
    type: 'text',
    placeholder: 'Km / Estación / Sector',
  },
  penal_damnificada: {
    label: 'Parte Damnificada',
    type: 'text',
    placeholder: 'Nombre y apellido',
  },
  penal_tipo_solicitud_ee: {
    label: 'Tipo de Solicitud',
    type: 'select',
    options: [
      { value: '',                    label: '— Seleccioná —' },
      { value: 'PEDIDO_INFO',         label: 'Pedido de Información' },
      { value: 'PEDIDO_FILMACIONES',  label: 'Pedido de Filmaciones' },
      { value: 'CITACION',            label: 'Citación' },
      { value: 'DESCRIPCION',         label: 'Descripción / Campo abierto' },
    ],
    onChange: 'onTipoSolicitudChange(this)',
    conditionalField: {
      triggerValue: 'DESCRIPCION',
      field: 'penal_solicitud_desc',
    },
  },
  penal_solicitud_desc: {
    label: 'Descripción de la Solicitud',
    type: 'textarea',
    rows: 2,
    placeholder: 'Detallá la solicitud...',
    hiddenByDefault: true,  // visible solo cuando el select padre = DESCRIPCION
  },

  // ── PENAL EE específicos ───────────────────────────────────────────────
  penal_imputada: {
    label: 'Parte Imputada',
    type: 'text',
    placeholder: 'Nombre y apellido / N.N.',
  },

  // ── PENAL MEMO específicos ─────────────────────────────────────────────
  penal_area_req: {
    label: 'Área Requirente (interna)',
    type: 'text',
    placeholder: 'SGSySL / GCO / GAJ...',
  },
  penal_empleado: {
    label: 'Datos del Empleado a Asistir',
    type: 'text',
    placeholder: 'Nombre, cargo, legajo',
  },
  penal_tipo_solicitud_memo: {
    label: 'Tipo de Solicitud',
    type: 'select',
    options: [
      { value: '',                       label: '— Seleccioná —' },
      { value: 'PEDIDO_INFO',            label: 'Pedido de Información' },
      { value: 'PEDIDO_FILMACIONES',     label: 'Pedido de Filmaciones' },
      { value: 'CITACION',               label: 'Citación' },
      { value: 'PEDIDO_ASISTENCIA',      label: 'Pedido de Asistencia' },
      { value: 'PEDIDO_INTERVENCION',    label: 'Pedido de Intervención' },
      { value: 'DESCRIPCION',            label: 'Descripción / Campo abierto' },
    ],
    onChange: 'onTipoSolicitudChange(this)',
    conditionalField: {
      triggerValue: 'DESCRIPCION',
      field: 'penal_solicitud_desc',
    },
  },

  // ── PENAL (todos los canales) ──────────────────────
  penal_sumario: {
    label: 'N° de Sumario',
    type: 'text',
    mono: true,
    placeholder: 'IPP-XXXX-XXXX / Sin sumario',
  },
  penal_comisaria: {
    label: 'Comisaría',
    type: 'text',
    placeholder: 'Comisaría N° / Nombre',
  },
};

// ── Configuración de formulario por área × canal ───────────────────────────

const FORM_CONFIG = {

  // ── CIVIL ──────────────────────────────────────────────────────────────
  CIVIL: {
    // Campos comunes a todos los canales civil
    common: [
      'num_causa',
      'caratula',
      'parte_actora',
      'parte_demandada',
      'coactores',
      'codemandados',
      'fecha_hecho',
      'fecha_recepcion',
      'dependencia',
      'tipo_hecho',
      'lugar_hecho',
      'linea_ferroviaria',
      'juicio',
      'importe',
      {
        group: 'Datos específicos — Demanda',
        icon: 'description',
        color: 'border-primary/30',
        visibleWhenTipo: 'DEMANDA',
        fields: ['variante_ingreso', 'req_25344'],
      },
      'num_siniestro',
      'observaciones:full',
    ],
  },

  // ── LABORAL ────────────────────────────────────────────────────────────
  LABORAL: {
    common: [
      'num_causa',
      'caratula',
      'parte_actora',
      'parte_demandada',
      'coactores',
      'codemandados',
      'fecha_hecho',
      'fecha_recepcion',
      'dependencia',
      'tipo_hecho',
      'lugar_hecho',
      'linea_ferroviaria',
      'juicio',
      'importe',
      {
        group: 'Datos específicos — Demanda',
        icon: 'description',
        color: 'border-primary/30',
        visibleWhenTipo: 'DEMANDA',
        fields: ['variante_ingreso', 'req_25344'],
      },
      'num_siniestro',
      'observaciones:full',
    ],
  },

  // ── PENAL × canal ──────────────────────────────────────────────────────
  PENAL: {

    EE_GDE: [
      'num_causa',
      'caratula',
      'fecha_hecho',
      'fecha_recepcion',
      'dependencia',
      'linea_ferroviaria',
      'penal_requirente',
      'penal_mail',
      'penal_telefono',
      'penal_direccion',
      'penal_tipo_hecho',
      'penal_lugar_hecho',
      'penal_damnificada',
      'penal_imputada',
      'penal_tipo_solicitud_ee:full',
      'penal_solicitud_desc:full',
      'penal_sumario', 'penal_comisaria',
      'num_siniestro',
      'observaciones:full',
    ],

    MEMO_GDE: [
      'num_causa',
      'caratula',
      'fecha_hecho',
      'fecha_recepcion',
      'dependencia',
      'linea_ferroviaria',
      'penal_mail',
      'penal_telefono',
      'penal_direccion',
      'penal_tipo_hecho',
      'penal_lugar_hecho',
      'penal_damnificada',
      'penal_empleado',
      'penal_tipo_solicitud_memo:full',
      'penal_solicitud_desc:full',
      'penal_sumario',
      'penal_comisaria',
      'num_siniestro',
      'observaciones:full',
    ],

    MAIL: [
      'num_causa',
      'caratula',
      'fecha_hecho',
      'fecha_recepcion',
      'dependencia',
      'linea_ferroviaria',
      'penal_requirente',
      'penal_mail',
      'penal_telefono',
      'penal_direccion',
      'penal_tipo_hecho',
      'penal_lugar_hecho',
      'penal_damnificada',
      'penal_imputada',
      'penal_tipo_solicitud_ee:full',
      'penal_solicitud_desc:full',
      'penal_sumario', 'penal_comisaria',
      'num_siniestro',
      'observaciones:full',
    ],
  },
};

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
  FIELD_DEFINITIONS,
  FORM_CONFIG,
  buscarPorNumeroCausa,
  getExpedienteById,
  abrirExpediente,
};