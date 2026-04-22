// ── SACO Mock Data ─────────────────────────────────────────────────────────

// ── Matriz canal × área (Matriz_Actualizada.xlsx — Abril 2026) ──────────────
// canal: sugerido por defecto | canales: todos los canales válidos para el tipo
const TIPOS_GESTION = {
  CIVIL: [
    // Externos
    { code: 'OFICIO',             label: 'Oficios',                          canal: 'EE_GDE',   canales: ['EE_GDE','MEMO_GDE'] },
    { code: 'CARTA_DOC',          label: 'Carta Documento',                  canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'MEDIACION',          label: 'Mediaciones / SECLOS',             canal: 'EE_GDE',   canales: ['EE_GDE','MEMO_GDE'] },
    { code: 'BENEFICIO_LITIGAR',  label: 'Beneficios de litigar sin gastos', canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'DEMANDA_CIVIL',      label: 'Demanda Civil',                    canal: 'EE_GDE',   canales: ['EE_GDE'] },
    // Internos
    { code: 'COBRO_CANON',        label: 'Cobro de Cánones',                 canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'RECLAMO_CONTRAT',    label: 'Reclamo a Contratistas',           canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'LANZAMIENTO',        label: 'Lanzamientos',                     canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'RECUPERO',           label: 'Recuperos',                        canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'EJECUCION_GAR',      label: 'Ejecución de Pólizas',             canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'DEFENSA_CIVIL',      label: 'Defensas Civiles',                 canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'PEDIDO_CAUSA_PENAL', label: 'Pedido de Causa Penal',            canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
  ],
  LABORAL: [
    // Externos
    { code: 'OFICIO',             label: 'Oficios',                          canal: 'EE_GDE',   canales: ['EE_GDE','MEMO_GDE'] },
    { code: 'CARTA_DOC',          label: 'Carta Documento',                  canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'MEDIACION',          label: 'Mediaciones / SECLOS',             canal: 'EE_GDE',   canales: ['EE_GDE','MEMO_GDE'] },
    { code: 'DEMANDA_CIVIL',      label: 'Demanda Civil',                    canal: 'EE_GDE',   canales: ['EE_GDE'] },
    { code: 'DEMANDA_LABORAL',    label: 'Demanda Laboral',                  canal: 'EE_GDE',   canales: ['EE_GDE'] },
    // Internos
    { code: 'CONSIGNACION',       label: 'Consignaciones',                   canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'DESAFUERO',          label: 'Desafueros',                       canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'PEDIDO_CAUSA_PENAL', label: 'Pedido de Causa Penal',            canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
  ],
  PENAL: [
    // Externos
    { code: 'OFICIO',             label: 'Oficios',                          canal: 'EE_GDE',   canales: ['EE_GDE','MEMO_GDE'] },
    { code: 'MEDIACION',          label: 'Mediaciones / SECLOS',             canal: 'EE_GDE',   canales: ['EE_GDE','MEMO_GDE'] },
    // Internos
    { code: 'QUERELLA',           label: 'Querellas',                        canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'DEFENSA_PENAL',      label: 'Defensas Penales',                 canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'CARTA_SUCESO',       label: 'Carta Suceso (SAE)',               canal: 'MAIL',     canales: ['MAIL'] },
    { code: 'PEDIDO_CAUSA_PENAL', label: 'Pedido de Causa Penal',            canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
    { code: 'OTROS',              label: 'Otros',                            canal: 'MEMO_GDE', canales: ['MEMO_GDE'] },
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
    canal_ingreso: 'EE_GDE',
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
    canal_ingreso: 'EE_GDE',
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
    canal_ingreso: 'EE_GDE',
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


// ── Formularios por tipo de gestión ───────────────────────────────────────────
// Cada tipo define dos etapas: mesa[] (Mesa SACO completa al crear) y abogado[]
// (el letrado completa desde el detalle del expediente).
// Tipos de campo: text | date | money | textarea | boolean | causa | linea | juzgado | select

const FORMULARIOS = {

  // ── CARTA_DOC ──────────────────────────────────────────────────────────────
  CARTA_DOC: {
    label: 'Carta Documento',
    mesa: [
      { id: 'mesa_caratula',        label: 'Carátula / Título',            type: 'text',    placeholder: 'Ej: García, Roberto c/ SOFSE — Carta Documento', required: true },
      { id: 'mesa_fecha_hecho',     label: 'Fecha del Hecho',              type: 'date' },
      { id: 'mesa_fecha_recepcion', label: 'Fecha de Recepción en SACO',   type: 'date',    defaultToday: true },
      { id: 'mesa_linea',           label: 'Línea Ferroviaria',            type: 'linea' },
      { id: 'mesa_num_siniestro',   label: 'N° de Siniestro',             type: 'text',    placeholder: 'SS-XXXX / SS SOFSE', hint: 'SS = Sin Siniestro' },
    ],
    abogado: [
      { id: 'abg_num_causa',  label: 'N° de Causa Judicial',  type: 'causa',    placeholder: 'FSM-XXXXX/2026' },
      { id: 'abg_juzgado',    label: 'Juzgado',               type: 'juzgado' },
      { id: 'abg_num_sigej',  label: 'N° SIGEJ',              type: 'text',     placeholder: 'SIGEJ-XXXX' },
      { id: 'abg_obs',        label: 'Observaciones',         type: 'textarea', full: true },
    ],
  },

  // ── CARTA_SUCESO ───────────────────────────────────────────────────────────
  CARTA_SUCESO: {
    label: 'Carta Suceso',
    mesa: [],
    abogado: [
      { id: 'abg_caratula',    label: 'Carátula',               type: 'text',     placeholder: 'N.N. s/ suceso', required: true },
      { id: 'abg_fecha_hecho', label: 'Fecha del Hecho',        type: 'date' },
      { id: 'abg_linea',       label: 'Línea Ferroviaria',      type: 'linea' },
      { id: 'abg_num_causa',   label: 'N° de Causa Judicial',   type: 'causa',    placeholder: 'IPP-XXXX / S/N' },
      { id: 'abg_num_sumario', label: 'N° de Sumario',          type: 'text',     placeholder: 'IPP-XXXX' },
      { id: 'abg_comisaria',   label: 'Comisaría',              type: 'text',     placeholder: 'Comisaría N°...' },
      { id: 'abg_tipo_hecho',  label: 'Tipo de Hecho',          type: 'text',     placeholder: 'Describe el tipo de hecho' },
      { id: 'abg_obs',         label: 'Observaciones',          type: 'textarea', full: true },
    ],
  },

  // ── COBRO_CANON ────────────────────────────────────────────────────────────
  COBRO_CANON: {
    label: 'Cobro de Canon',
    mesa: [
      { id: 'mesa_caratula',        label: 'Carátula / Título',           type: 'text',    placeholder: 'SOFSE c/ Locatario s/ cobro de canon', required: true },
      { id: 'mesa_fecha_recepcion', label: 'Fecha de Recepción en SACO',  type: 'date',    defaultToday: true },
      { id: 'mesa_linea',           label: 'Línea Ferroviaria',           type: 'linea' },
      { id: 'mesa_monto',           label: 'Monto Reclamado',             type: 'money',   placeholder: '0' },
    ],
    abogado: [
      { id: 'abg_num_causa',  label: 'N° de Causa Judicial',  type: 'causa',    placeholder: 'FSM-XXXXX/2026' },
      { id: 'abg_juzgado',    label: 'Juzgado',               type: 'juzgado' },
      { id: 'abg_num_sigej',  label: 'N° SIGEJ',              type: 'text',     placeholder: 'SIGEJ-XXXX' },
      { id: 'abg_obs',        label: 'Observaciones',         type: 'textarea', full: true },
    ],
  },

  // ── CONSIGNACION ───────────────────────────────────────────────────────────
  CONSIGNACION: {
    label: 'Consignación',
    mesa: [
      { id: 'mesa_caratula',        label: 'Carátula / Título',           type: 'text',  placeholder: 'Ej: Sindicato X c/ SOFSE s/ consignación', required: true },
      { id: 'mesa_fecha_recepcion', label: 'Fecha de Recepción en SACO',  type: 'date',  defaultToday: true },
    ],
    abogado: [
      { id: 'abg_num_causa',    label: 'N° de Causa Judicial',    type: 'causa',    placeholder: 'FSM-XXXXX/2026' },
      { id: 'abg_juzgado',      label: 'Juzgado',                 type: 'juzgado' },
      { id: 'abg_parte_actora', label: 'Parte Actora',            type: 'text',     placeholder: 'Nombre y apellido / razón social' },
      { id: 'abg_parte_dem',    label: 'Parte Demandada',         type: 'text',     placeholder: 'Ej: SOFSE / Estado Nacional' },
      { id: 'abg_fecha_hecho',  label: 'Fecha del Hecho',         type: 'date' },
      { id: 'abg_linea',        label: 'Línea Ferroviaria',       type: 'linea' },
      { id: 'abg_monto',        label: 'Monto Consignado',        type: 'money',    placeholder: '0' },
      { id: 'abg_tipo_hecho',   label: 'Tipo de Hecho',           type: 'text',     placeholder: 'Categoría laboral / motivo' },
      { id: 'abg_obs',          label: 'Observaciones',           type: 'textarea', full: true },
    ],
  },

  // ── DEFENSA_CIVIL ──────────────────────────────────────────────────────────
  DEFENSA_CIVIL: {
    label: 'Defensa Civil',
    nota: 'Se origina desde el área técnica. La Mesa SACO registra el número GDE de referencia.',
    mesa: [],
    abogado: [],
  },

  // ── DEFENSA_PENAL ──────────────────────────────────────────────────────────
  DEFENSA_PENAL: {
    label: 'Defensa Penal',
    mesa: [
      { id: 'mesa_caratula',        label: 'Carátula / Título',          type: 'text',     placeholder: 'N.N. s/ hecho — defensa empleado SOFSE', required: true },
      { id: 'mesa_fecha_hecho',     label: 'Fecha del Hecho',            type: 'date' },
      { id: 'mesa_fecha_recepcion', label: 'Fecha de Recepción en SACO', type: 'date',     defaultToday: true },
      { id: 'mesa_linea',           label: 'Línea Ferroviaria',          type: 'linea' },
      { id: 'mesa_num_sumario',     label: 'N° de Sumario',             type: 'text',     placeholder: 'IPP-XXXX' },
      { id: 'mesa_comisaria',       label: 'Comisaría',                 type: 'text',     placeholder: 'Comisaría N°...' },
      { id: 'mesa_requirente',      label: 'Requirente',                type: 'text',     placeholder: 'Nombre / organismo' },
      { id: 'mesa_mail_req',        label: 'Mail del Requirente',       type: 'text',     placeholder: 'ejemplo@organismo.gob.ar' },
      { id: 'mesa_tel_req',         label: 'Teléfono del Requirente',   type: 'text',     placeholder: '011-1234-5678' },
      { id: 'mesa_tipo_hecho',      label: 'Tipo de Hecho',             type: 'text',     placeholder: 'Describe el tipo de hecho penal' },
      { id: 'mesa_lugar_hecho',     label: 'Lugar del Hecho',           type: 'text',     placeholder: 'Km / Estación / Sector' },
      { id: 'mesa_empleado',        label: 'Empleado a Asistir',        type: 'text',     placeholder: 'Nombre, cargo, legajo', full: true },
    ],
    abogado: [],
  },

  // ── DEMANDA_CIVIL ──────────────────────────────────────────────────────────
  DEMANDA_CIVIL: {
    label: 'Demanda Civil',
    mesa: [
      { id: 'mesa_caratula',        label: 'Carátula / Título',           type: 'text',   placeholder: 'Ej: García, Roberto c/ SOFSE s/ daños', required: true },
      { id: 'mesa_parte_actora',    label: 'Parte Actora',                type: 'text',   placeholder: 'Nombre y apellido / razón social' },
      { id: 'mesa_parte_dem',       label: 'Parte Demandada',             type: 'text',   placeholder: 'SOFSE / Estado Nacional' },
      { id: 'mesa_coactores',       label: 'Coactores',                   type: 'text',   placeholder: 'Otros actores (opcional)' },
      { id: 'mesa_codemandados',    label: 'Codemandados',                type: 'text',   placeholder: 'Otros demandados (opcional)' },
      { id: 'mesa_fecha_hecho',     label: 'Fecha del Hecho',             type: 'date' },
      { id: 'mesa_fecha_recepcion', label: 'Fecha de Recepción en SACO',  type: 'date',   defaultToday: true },
      { id: 'mesa_linea',           label: 'Línea Ferroviaria',           type: 'linea' },
      { id: 'mesa_tipo_hecho',      label: 'Tipo de Hecho',               type: 'text',   placeholder: 'Ej: Accidente en paso a nivel' },
      { id: 'mesa_lugar_hecho',     label: 'Lugar del Hecho',             type: 'text',   placeholder: 'Km / Estación / Sector' },
      { id: 'mesa_num_siniestro',   label: 'N° de Siniestro',            type: 'text',   placeholder: 'SS-XXXX / SS SOFSE', hint: 'SS = Sin Siniestro' },
      { id: 'mesa_monto',           label: 'Monto de la Demanda',         type: 'money',  placeholder: '0' },
      { id: 'mesa_variante',        label: 'Variante de Ingreso',         type: 'select', options: [
          { value: '',  label: '— Seleccioná —' },
          { value: 'A', label: 'Variante A — Cédula en papel (SOFSE demandada)' },
          { value: 'B', label: 'Variante B — GDE directo (Estado Nacional demandado)' },
        ],
      },
      { id: 'mesa_ley_25344',       label: 'Ley 25.344 cumplida',        type: 'boolean' },
      { id: 'mesa_obs',             label: 'Observaciones',               type: 'textarea', full: true },
    ],
    abogado: [
      { id: 'abg_num_causa',  label: 'N° de Causa Judicial',  type: 'causa',   placeholder: 'FSM-XXXXX/2026' },
      { id: 'abg_juzgado',    label: 'Juzgado',               type: 'juzgado' },
      { id: 'abg_num_sigej',  label: 'N° SIGEJ',              type: 'text',    placeholder: 'SIGEJ-XXXX' },
    ],
  },

  // ── DEMANDA_LABORAL ────────────────────────────────────────────────────────
  DEMANDA_LABORAL: {
    label: 'Demanda Laboral',
    mesa: [
      { id: 'mesa_caratula',        label: 'Carátula / Título',           type: 'text',   placeholder: 'Ej: García, Roberto c/ SOFSE s/ diferencias salariales', required: true },
      { id: 'mesa_parte_actora',    label: 'Parte Actora',                type: 'text',   placeholder: 'Nombre y apellido / razón social' },
      { id: 'mesa_parte_dem',       label: 'Parte Demandada',             type: 'text',   placeholder: 'SOFSE / Estado Nacional' },
      { id: 'mesa_coactores',       label: 'Coactores',                   type: 'text',   placeholder: 'Otros actores (opcional)' },
      { id: 'mesa_codemandados',    label: 'Codemandados',                type: 'text',   placeholder: 'Otros demandados (opcional)' },
      { id: 'mesa_fecha_hecho',     label: 'Fecha del Hecho',             type: 'date' },
      { id: 'mesa_fecha_recepcion', label: 'Fecha de Recepción en SACO',  type: 'date',   defaultToday: true },
      { id: 'mesa_linea',           label: 'Línea Ferroviaria',           type: 'linea' },
      { id: 'mesa_tipo_hecho',      label: 'Tipo de Hecho',               type: 'text',   placeholder: 'Ej: Accidente laboral / despido' },
      { id: 'mesa_lugar_hecho',     label: 'Lugar del Hecho',             type: 'text',   placeholder: 'Km / Estación / Sector' },
      { id: 'mesa_num_siniestro',   label: 'N° de Siniestro',            type: 'text',   placeholder: 'SS-XXXX / SS SOFSE', hint: 'SS = Sin Siniestro' },
      { id: 'mesa_monto',           label: 'Monto de la Demanda',         type: 'money',  placeholder: '0' },
      { id: 'mesa_variante',        label: 'Variante de Ingreso',         type: 'select', options: [
          { value: '',  label: '— Seleccioná —' },
          { value: 'A', label: 'Variante A — Cédula en papel (SOFSE demandada)' },
          { value: 'B', label: 'Variante B — GDE directo (Estado Nacional demandado)' },
        ],
      },
      { id: 'mesa_ley_25344',       label: 'Ley 25.344 cumplida',        type: 'boolean' },
      { id: 'mesa_obs',             label: 'Observaciones',               type: 'textarea', full: true },
    ],
    abogado: [
      { id: 'abg_num_causa',  label: 'N° de Causa Judicial',  type: 'causa',   placeholder: 'FSM-XXXXX/2026' },
      { id: 'abg_juzgado',    label: 'Juzgado',               type: 'juzgado' },
      { id: 'abg_num_sigej',  label: 'N° SIGEJ',              type: 'text',    placeholder: 'SIGEJ-XXXX' },
    ],
  },

  // ── DESAFUERO ──────────────────────────────────────────────────────────────
  DESAFUERO: {
    label: 'Desafuero',
    mesa: [
      { id: 'mesa_caratula',        label: 'Carátula / Título',           type: 'text',  placeholder: 'Ej: SOFSE s/ desafuero — Empleado X', required: true },
      { id: 'mesa_fecha_recepcion', label: 'Fecha de Recepción en SACO',  type: 'date',  defaultToday: true },
      { id: 'mesa_linea',           label: 'Línea Ferroviaria',           type: 'linea' },
      { id: 'mesa_empleado',        label: 'Empleado Involucrado',        type: 'text',  placeholder: 'Nombre, cargo, legajo' },
    ],
    abogado: [
      { id: 'abg_num_causa',    label: 'N° de Causa Judicial',   type: 'causa',    placeholder: 'FSM-XXXXX/2026' },
      { id: 'abg_juzgado',      label: 'Juzgado',                type: 'juzgado' },
      { id: 'abg_parte_actora', label: 'Parte Actora',           type: 'text',     placeholder: 'Nombre y apellido' },
      { id: 'abg_sindicato',    label: 'Sindicato',              type: 'text',     placeholder: 'Nombre del sindicato' },
      { id: 'abg_fecha_hecho',  label: 'Fecha del Hecho',        type: 'date' },
      { id: 'abg_monto',        label: 'Monto Reclamado',        type: 'money',    placeholder: '0' },
      { id: 'abg_obs',          label: 'Observaciones',          type: 'textarea', full: true },
    ],
  },

  // ── EJECUCION_GAR ──────────────────────────────────────────────────────────
  EJECUCION_GAR: {
    label: 'Ejecución de Garantía',
    mesa: [
      { id: 'mesa_caratula',      label: 'Carátula / Título',           type: 'text',   placeholder: 'SOFSE c/ Empresa X s/ ejecución garantía', required: true },
      { id: 'mesa_fecha_recep',   label: 'Fecha de Recepción en SACO',  type: 'date',   defaultToday: true },
      { id: 'mesa_linea',         label: 'Línea Ferroviaria',           type: 'linea' },
      { id: 'mesa_monto',         label: 'Monto de la Garantía',        type: 'money',  placeholder: '0' },
      { id: 'mesa_tipo_garantia', label: 'Tipo de Garantía',            type: 'text',   placeholder: 'Ej: seguro de caución, fianza' },
      { id: 'mesa_contrato',      label: 'N° de Contrato / Expediente', type: 'text',   placeholder: 'EX-2025-XXXXX' },
      { id: 'mesa_parte_dem',     label: 'Empresa / Deudor',            type: 'text',   placeholder: 'Razón social' },
    ],
    abogado: [
      { id: 'abg_num_causa',    label: 'N° de Causa Judicial',      type: 'causa',    placeholder: 'FSM-XXXXX/2026' },
      { id: 'abg_juzgado',      label: 'Juzgado',                   type: 'juzgado' },
      { id: 'abg_num_sigej',    label: 'N° SIGEJ',                  type: 'text',     placeholder: 'SIGEJ-XXXX' },
      { id: 'abg_fecha_venc',   label: 'Fecha de Vencimiento',      type: 'date' },
      { id: 'abg_piso',         label: 'Piso Pactado (monto mín.)', type: 'money',    placeholder: '0' },
      { id: 'abg_parte_actora', label: 'Parte Actora',              type: 'text',     placeholder: 'SOFSE' },
      { id: 'abg_codemandados', label: 'Codemandados',              type: 'text',     placeholder: 'Otros demandados' },
      { id: 'abg_obs',          label: 'Observaciones',             type: 'textarea', full: true },
    ],
  },

  // ── LANZAMIENTO ────────────────────────────────────────────────────────────
  LANZAMIENTO: {
    label: 'Lanzamiento',
    mesa: [
      { id: 'mesa_caratula',    label: 'Carátula / Título',                  type: 'text',    placeholder: 'SOFSE c/ Ocupante s/ lanzamiento', required: true },
      { id: 'mesa_fecha_recep', label: 'Fecha de Recepción en SACO',         type: 'date',    defaultToday: true },
      { id: 'mesa_linea',       label: 'Línea Ferroviaria',                  type: 'linea' },
      { id: 'mesa_lugar_ocup',  label: 'Lugar Ocupado',                      type: 'text',    placeholder: 'Km / Estación / Sector' },
      { id: 'mesa_autorizado',  label: 'Ocupación Autorizada Originalmente', type: 'boolean' },
    ],
    abogado: [
      { id: 'abg_num_causa',  label: 'N° de Causa Judicial',  type: 'causa',    placeholder: 'FSM-XXXXX/2026' },
      { id: 'abg_obs',        label: 'Observaciones',         type: 'textarea', full: true },
    ],
  },

  // ── MEDIACION ──────────────────────────────────────────────────────────────
  MEDIACION: {
    label: 'Mediación',
    mesa: [
      { id: 'mesa_caratula',        label: 'Carátula / Título',           type: 'text',  placeholder: 'Ej: García, Roberto c/ SOFSE — mediación', required: true },
      { id: 'mesa_parte_actora',    label: 'Parte Actora',                type: 'text',  placeholder: 'Nombre y apellido / razón social' },
      { id: 'mesa_fecha_hecho',     label: 'Fecha del Hecho',             type: 'date' },
      { id: 'mesa_fecha_recepcion', label: 'Fecha de Recepción en SACO',  type: 'date',  defaultToday: true },
      { id: 'mesa_linea',           label: 'Línea Ferroviaria',           type: 'linea' },
    ],
    abogado: [
      { id: 'abg_num_causa', label: 'N° de Causa Judicial',  type: 'causa',    placeholder: 'FSM-XXXXX/2026' },
      { id: 'abg_juzgado',   label: 'Centro de Mediación',   type: 'juzgado' },
      { id: 'abg_mediador',  label: 'Mediador',              type: 'text',     placeholder: 'Nombre del mediador' },
      { id: 'abg_resultado', label: 'Resultado',             type: 'text',     placeholder: 'Acuerdo / Desacuerdo / Pendiente' },
      { id: 'abg_obs',       label: 'Observaciones',         type: 'textarea', full: true },
    ],
  },

  // ── OFICIO ─────────────────────────────────────────────────────────────────
  OFICIO: {
    label: 'Oficio',
    mesa: [
      { id: 'mesa_caratula',       label: 'Carátula / Título',            type: 'text',     placeholder: 'Ej: Oficio N°... — Juzgado X c/ SOFSE', required: true },
      { id: 'mesa_requirente',     label: 'Requirente (Organismo)',       type: 'text',     placeholder: 'Juzgado / Comisaría / Fiscalía / SOFSE' },
      { id: 'mesa_tipo_solicitud', label: 'Tipo de Solicitud',           type: 'text',     placeholder: 'Pedido de información / filmaciones / citación' },
      { id: 'mesa_fecha_hecho',    label: 'Fecha del Hecho',             type: 'date' },
      { id: 'mesa_fecha_recep',    label: 'Fecha de Recepción en SACO',  type: 'date',     defaultToday: true },
      { id: 'mesa_linea',          label: 'Línea Ferroviaria',           type: 'linea' },
      { id: 'mesa_obs',            label: 'Observaciones',               type: 'textarea', full: true },
    ],
    abogado: [
      { id: 'abg_num_causa', label: 'N° de Causa Judicial',  type: 'causa',    placeholder: 'FSM-XXXXX/2026' },
      { id: 'abg_juzgado',   label: 'Juzgado',               type: 'juzgado' },
      { id: 'abg_obs',       label: 'Observaciones',         type: 'textarea', full: true },
    ],
    variante_penal: {
      mesa: [
        { id: 'mesa_caratula',       label: 'Carátula / Título',           type: 'text',     placeholder: 'Ej: Oficio Penal N°... — Fiscalía c/ N.N.', required: true },
        { id: 'mesa_requirente',     label: 'Requirente',                  type: 'text',     placeholder: 'Juzgado / Comisaría / Fiscalía / Tribunal' },
        { id: 'mesa_mail_req',       label: 'Mail del Requirente',         type: 'text',     placeholder: 'ejemplo@organismo.gob.ar' },
        { id: 'mesa_tel_req',        label: 'Teléfono del Requirente',     type: 'text',     placeholder: '011-1234-5678' },
        { id: 'mesa_dir_req',        label: 'Dirección del Requirente',    type: 'text',     placeholder: 'Av. Siempre Viva 123' },
        { id: 'mesa_tipo_solicitud', label: 'Tipo de Solicitud',           type: 'text',     placeholder: 'Pedido de información / filmaciones / citación' },
        { id: 'mesa_lugar_hecho',    label: 'Lugar del Hecho',             type: 'text',     placeholder: 'Km / Estación / Sector' },
        { id: 'mesa_tipo_hecho',     label: 'Tipo de Hecho',               type: 'text',     placeholder: 'Describe el tipo de hecho penal' },
        { id: 'mesa_fecha_hecho',    label: 'Fecha del Hecho',             type: 'date' },
        { id: 'mesa_linea',          label: 'Línea Ferroviaria',           type: 'linea' },
      ],
      abogado: [
        { id: 'abg_num_sumario', label: 'N° de Sumario',   type: 'text',     placeholder: 'IPP-XXXX' },
        { id: 'abg_obs',         label: 'Observaciones',   type: 'textarea', full: true },
      ],
    },
  },

  // ── PEDIDO_CAUSA_PENAL ─────────────────────────────────────────────────────
  PEDIDO_CAUSA_PENAL: {
    label: 'Pedido de Causa Penal',
    mesa: [
      { id: 'mesa_caratula', label: 'Carátula / Título', type: 'text', placeholder: 'Ej: Pedido de causa penal — SOFSE c/ N.N.', required: true },
    ],
    abogado: [
      { id: 'abg_linea',          label: 'Línea Ferroviaria',      type: 'linea' },
      { id: 'abg_num_causa',      label: 'N° de Causa Judicial',   type: 'causa',    placeholder: 'IPP-XXXX / CFP-XXXX' },
      { id: 'abg_num_sumario',    label: 'N° de Sumario',          type: 'text',     placeholder: 'IPP-XXXX' },
      { id: 'abg_comisaria',      label: 'Comisaría',              type: 'text',     placeholder: 'Comisaría N°...' },
      { id: 'abg_requirente',     label: 'Requirente',             type: 'text',     placeholder: 'Área / persona que solicita' },
      { id: 'abg_tipo_solicitud', label: 'Tipo de Solicitud',      type: 'text',     placeholder: 'Pedido de información / filmaciones' },
      { id: 'abg_fecha_hecho',    label: 'Fecha del Hecho',        type: 'date' },
      { id: 'abg_obs',            label: 'Observaciones',          type: 'textarea', full: true },
    ],
  },

  // ── QUERELLA ───────────────────────────────────────────────────────────────
  QUERELLA: {
    label: 'Querella',
    mesa: [
      { id: 'mesa_caratula',    label: 'Carátula / Título',           type: 'text',     placeholder: 'SOFSE s/ querella — N.N.', required: true },
      { id: 'mesa_querellante', label: 'Querellante',                 type: 'text',     placeholder: 'SOFSE / empleado / persona' },
      { id: 'mesa_fecha_hecho', label: 'Fecha del Hecho',             type: 'date' },
      { id: 'mesa_fecha_recep', label: 'Fecha de Recepción en SACO',  type: 'date',     defaultToday: true },
      { id: 'mesa_linea',       label: 'Línea Ferroviaria',           type: 'linea' },
      { id: 'mesa_num_sumario', label: 'N° de Sumario',              type: 'text',     placeholder: 'IPP-XXXX / S/N' },
      { id: 'mesa_comisaria',   label: 'Comisaría',                  type: 'text',     placeholder: 'Comisaría N°...' },
      { id: 'mesa_tipo_delito', label: 'Tipo de Delito',             type: 'text',     placeholder: 'Ej: robo, daño, lesiones' },
      { id: 'mesa_descripcion', label: 'Descripción del Hecho',      type: 'textarea', full: true },
    ],
    abogado: [],
  },

  // ── RECLAMO_CONTRAT ────────────────────────────────────────────────────────
  RECLAMO_CONTRAT: {
    label: 'Reclamo Contractual',
    mesa: [
      { id: 'mesa_caratula',    label: 'Carátula / Título',           type: 'text',  placeholder: 'SOFSE c/ Empresa X s/ reclamo contractual', required: true },
      { id: 'mesa_fecha_recep', label: 'Fecha de Recepción en SACO',  type: 'date',  defaultToday: true },
      { id: 'mesa_linea',       label: 'Línea Ferroviaria',           type: 'linea' },
      { id: 'mesa_monto',       label: 'Monto Reclamado',             type: 'money', placeholder: '0' },
      { id: 'mesa_parte_dem',   label: 'Empresa / Contratista',       type: 'text',  placeholder: 'Razón social' },
    ],
    abogado: [
      { id: 'abg_num_causa', label: 'N° de Causa Judicial',  type: 'causa',    placeholder: 'FSM-XXXXX/2026' },
      { id: 'abg_juzgado',   label: 'Juzgado',               type: 'juzgado' },
      { id: 'abg_obs',       label: 'Observaciones',         type: 'textarea', full: true },
    ],
  },

  // ── RECUPERO ───────────────────────────────────────────────────────────────
  RECUPERO: {
    label: 'Recupero de Daño',
    mesa: [
      { id: 'mesa_caratula',    label: 'Carátula / Título',           type: 'text',  placeholder: 'SOFSE c/ Causante s/ recupero de daño', required: true },
      { id: 'mesa_fecha_hecho', label: 'Fecha del Hecho',             type: 'date' },
      { id: 'mesa_fecha_recep', label: 'Fecha de Recepción en SACO',  type: 'date',  defaultToday: true },
      { id: 'mesa_linea',       label: 'Línea Ferroviaria',           type: 'linea' },
      { id: 'mesa_monto',       label: 'Monto Estimado del Daño',     type: 'money', placeholder: '0' },
    ],
    abogado: [
      { id: 'abg_num_causa', label: 'N° de Causa Judicial',  type: 'causa',    placeholder: 'FSM-XXXXX/2026' },
      { id: 'abg_juzgado',   label: 'Juzgado',               type: 'juzgado' },
      { id: 'abg_obs',       label: 'Observaciones',         type: 'textarea', full: true },
    ],
  },

  // ── BENEFICIO_LITIGAR ──────────────────────────────────────────────────────
  BENEFICIO_LITIGAR: {
    label: 'Beneficio de Litigar sin Gastos',
    mesa: [],
    abogado: [],
  },

  // ── OTROS ──────────────────────────────────────────────────────────────────
  OTROS: {
    label: 'Otros (Penal)',
    mesa: [
      { id: 'mesa_caratula',    label: 'Carátula / Título',  type: 'text',     placeholder: 'Describe brevemente el caso', required: true },
      { id: 'mesa_descripcion', label: 'Descripción',        type: 'textarea', full: true },
    ],
    abogado: [],
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
  buscarPorNumeroCausa,
  getExpedienteById,
  abrirExpediente,
};