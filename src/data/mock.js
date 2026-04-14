// ── SACO Mock Data ─────────────────────────────────────────────────────────
// Terminología y datos alineados al CLAUDE.md

const TIPOS_GESTION = {
  CIVIL: [
    { code: 'OFICIO',          label: 'Oficio',                    canal: 'EE_GDE' },
    { code: 'CARTA_DOC',       label: 'Carta Documento',           canal: 'EE_GDE' },
    { code: 'MEDIACION',       label: 'Mediación',                 canal: 'EE_GDE' },
    { code: 'SOLICITUD_AREAS', label: 'Solicitud de Áreas',        canal: 'MEMO_GDE' },
    { code: 'DEFENSA_CIVIL',   label: 'Defensa Civil',             canal: 'MEMO_GDE' },
    { code: 'RECUPERO',        label: 'Recupero de Daños',         canal: 'MEMO_GDE' },
    { code: 'COBRO_CANON',     label: 'Cobro de Cánones',          canal: 'EE_GDE' },
    { code: 'RECLAMO_CONTRAT', label: 'Reclamo a Contratistas',    canal: 'MEMO_GDE' },
    { code: 'DEMANDA',         label: 'Demanda',                   canal: 'EE_GDE' },
    { code: 'EJECUCION_GAR',   label: 'Ejecución de Garantía',     canal: 'MEMO_GDE' },
    { code: 'ASISTENCIA_TEC',  label: 'Asistencia Técnica',        canal: 'MEMO_GDE' },
  ],
  LABORAL: [
    { code: 'OFICIO',          label: 'Oficio',                    canal: 'EE_GDE' },
    { code: 'CARTA_DOC',       label: 'Carta Documento',           canal: 'EE_GDE' },
    { code: 'MEDIACION',       label: 'Mediación',                 canal: 'EE_GDE' },
    { code: 'SOLICITUD_AREAS', label: 'Solicitud de Áreas',        canal: 'MEMO_GDE' },
    { code: 'DESAFUERO',       label: 'Desafuero',                 canal: 'MEMO_GDE' },
    { code: 'CONSIGNACION',    label: 'Consignación',              canal: 'MEMO_GDE' },
    { code: 'DEMANDA',         label: 'Demanda',                   canal: 'EE_GDE' },
    { code: 'ASISTENCIA_TEC',  label: 'Asistencia Técnica',        canal: 'MEMO_GDE' },
    
  ],
  PENAL: [
    { code: 'OFICIO',          label: 'Oficio',                    canal: 'EE_GDE' },
    { code: 'MEDIACION',       label: 'Mediación',                 canal: 'EE_GDE' },
    { code: 'DEFENSA_PENAL',   label: 'Defensa Penal',             canal: 'MEMO_GDE' },
    { code: 'SOLICITUD_AREAS', label: 'Solicitud de Áreas',        canal: 'MEMO_GDE' },
    { code: 'CARTA_SUCESO',    label: 'Carta Suceso (SAE)',        canal: 'MAIL' },
    { code: 'ASISTENCIA_TEC',  label: 'Asistencia Técnica',        canal: 'MEMO_GDE' },
    { code: 'OTROS',           label: 'Otros',                     canal: 'MEMO_GDE' },
  ],
};

const LINEAS_FERROVIARIAS = [
  { code: 'LM',  label: 'Línea Mitre',         abogado: 'Dr. Marcos Gallo' },
  { code: 'LSM', label: 'Línea San Martín',    abogado: 'Dra. Carla Ibáñez' },
  { code: 'LGR', label: 'Línea General Roca',  abogado: 'Dr. Ramón Pereyra' },
  { code: 'LBS', label: 'Línea Belgrano Sur',  abogado: 'Dra. Sofía Mena' },
  { code: 'LS',  label: 'Línea Sarmiento',     abogado: 'Dr. Pablo Torres' },
  { code: 'TDC', label: 'Tren de la Costa',    abogado: 'Dra. Carla Ibáñez' },
  { code: 'AMBA',label: 'AMBA / General',      abogado: 'Dr. Marcos Gallo' },
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

// Queue de Mesa SACO — expedientes pendientes de asignación
const QUEUE_MESA = [
  {
    id: 'Q-001', tipo: 'Oficio Judicial', ref: 'EX-2026-00441-APN-SACO#SOFSE',
    origen: 'Externo', canal: 'EE_GDE', area: null, estado: 'PENDIENTE',
    caratula: 'Juzgado Federal N°3 s/ información vía férrea Km 4.5',
    linea: 'LM', fecha: '2026-04-12', prioridad: 'NORMAL',
  },
  {
    id: 'Q-002', tipo: 'Carta Documento', ref: 'EX-2026-00449-APN-SACO#SOFSE',
    origen: 'Externo', canal: 'EE_GDE', area: 'LABORAL', estado: 'GDE_VINCULADO',
    caratula: 'García, Roberto c/ SOFSE s/ diferencias salariales',
    linea: null, fecha: '2026-04-12', prioridad: 'NORMAL',
  },
  {
    id: 'Q-003', tipo: 'Mediación Prejudicial', ref: 'EX-2026-00452-APN-SACO#SOFSE',
    origen: 'Externo', canal: 'EE_GDE', area: 'CIVIL', estado: 'PENDIENTE',
    caratula: 'Martínez, Ana c/ SOFSE s/ daños y perjuicios paso a nivel',
    linea: null, fecha: '2026-04-11', prioridad: 'NORMAL',
  },
  {
    id: 'Q-004', tipo: 'Carta Suceso SAE', ref: 'MAIL-SAE-2026-0088',
    origen: 'Interno', canal: 'MAIL', area: 'PENAL', estado: 'URGENTE',
    caratula: 'Descarrilamiento Línea Mitre — Estación Palermo',
    linea: 'LM', fecha: '2026-04-13', prioridad: 'URGENTE',
  },
  {
    id: 'Q-005', tipo: 'Memo GDE — Recupero', ref: 'ME-2026-00118-APN-SGSSL#SOFSE',
    origen: 'Interno', canal: 'MEMO_GDE', area: 'CIVIL', estado: 'PENDIENTE',
    caratula: 'Recupero daños vehículo — Paso a nivel Manuel Acosta',
    linea: 'LSM', fecha: '2026-04-10', prioridad: 'NORMAL',
  },
];

// Expedientes del abogado (bandeja)
const EXPEDIENTES_ABOGADO = [
  {
    id: 'C-0023/2026', area: 'CIVIL', tipo: 'DEMANDA',
    caratula: 'Martínez, Juan Carlos c/ Trenes Argentinos SOFSE s/ daños y perjuicios',
    juzgado: 'Juzgado Federal Civil y Comercial N°8 — Sec. 15',
    numero_causa: 'FSM-11802/2023', estado: 'EN_PRUEBA',
    fecha_hecho: '2023-09-14', fecha_recepcion: '2023-10-20',
    abogado: 'Dr. Alejandro Rossi', linea: 'LSM', prioridad: 'ALTA',
    tiene_alerta: true, alerta_msg: 'Vence período probatorio en 12 días',
    gde: 'EX-2023-08842-APN-SACO#SOFSE',
  },
  {
    id: 'C-0031/2026', area: 'CIVIL', tipo: 'MEDIACION',
    caratula: 'López, María Estela c/ SOFSE s/ daños paso a nivel Km 4.5',
    juzgado: 'Centro de Mediación — Retiro',
    numero_causa: 'MED-992-2026', estado: 'EN_TRAMITE',
    fecha_hecho: '2025-11-02', fecha_recepcion: '2026-01-15',
    abogado: 'Dr. Alejandro Rossi', linea: 'LM', prioridad: 'NORMAL',
    tiene_alerta: false, alerta_msg: null,
    gde: 'EX-2026-00992-APN-SACO#SOFSE',
  },
  {
    id: 'C-0041/2026', area: 'CIVIL', tipo: 'RECUPERO',
    caratula: 'Recupero daños — Vehículo particular paso a nivel Quilmes',
    juzgado: 'Mediación extrajudicial',
    numero_causa: 'SS SOFSE', estado: 'EN_TRAMITE',
    fecha_hecho: '2026-02-28', fecha_recepcion: '2026-03-10',
    abogado: 'Dr. Alejandro Rossi', linea: 'LGR', prioridad: 'NORMAL',
    tiene_alerta: false, alerta_msg: null,
    gde: 'ME-2026-00441-APN-SGSSL#SOFSE',
  },
  {
    id: 'L-0012/2026', area: 'LABORAL', tipo: 'DEMANDA',
    caratula: 'García, Roberto c/ SOFSE s/ despido injustificado y diferencias salariales',
    juzgado: 'Juzgado Nacional del Trabajo N°42',
    numero_causa: 'FLP-8834/2025', estado: 'EN_PLAZO_CONTESTAR',
    fecha_hecho: null, fecha_recepcion: '2026-04-01',
    abogado: 'Dr. Alejandro Rossi', linea: null, prioridad: 'ALTA',
    tiene_alerta: true, alerta_msg: 'Plazo contestación vence 25/04/2026',
    gde: 'EX-2026-00449-APN-SACO#SOFSE',
  },
  {
    id: 'L-0018/2026', area: 'LABORAL', tipo: 'MEDIACION',
    caratula: 'Sánchez, Pedro Hugo c/ SOFSE s/ horas extras y ART',
    juzgado: 'Centro de Mediación Laboral — San Nicolás',
    numero_causa: 'MED-LAB-344-2026', estado: 'EN_TRAMITE',
    fecha_hecho: null, fecha_recepcion: '2026-03-20',
    abogado: 'Dr. Alejandro Rossi', linea: null, prioridad: 'NORMAL',
    tiene_alerta: false, alerta_msg: null,
    gde: 'EX-2026-00888-APN-SACO#SOFSE',
  },
];

// Detalle de expediente (C-0023/2026)
const EXPEDIENTE_DETALLE = {
  id: 'C-0023/2026',
  area: 'CIVIL',
  tipo: 'DEMANDA',
  caratula: 'Martínez, Juan Carlos c/ Trenes Argentinos SOFSE s/ daños y perjuicios',
  numero_causa: 'FSM-11802/2023',
  juzgado: 'Juzgado Federal Civil y Comercial N°8 — Secretaría 15',
  dependencia: 'Fuero Federal Civil y Comercial — CABA',
  estado: 'EN_PRUEBA',
  linea: 'LSM — Línea San Martín',
  lugar_hecho: 'Paso a nivel Km 4.5 — Estación Palermo',
  fecha_hecho: '23/09/2023',
  fecha_recepcion: '20/10/2023',
  abogado: 'Dr. Alejandro Rossi',
  demandado: 'SOFSE',
  variante: 'A — Cédula en papel vía Mesa de Entradas',
  requisitos_25344: true,
  estado_sigej: 'EN_PRUEBA',
  numero_sigej: 'SIGEJ-2023-18842',
  monto_demanda: '$4.200.000',
  gde: 'EX-2023-08842-APN-SACO#SOFSE',
  observaciones: 'Peritaje técnico-accidentológico pendiente de homologación. La contraparte objetó el dictamen del Ing. Santoro. Audiencia fijada para el 30/04/2026.',
  timeline: [
    {
      fecha: 'Hoy · 10:45',
      tipo: 'RECEPCION',
      titulo: 'Incorporación de Dictamen Pericial',
      desc: 'Se adjunta peritaje accidentológico realizado por el Ing. Santoro. El informe concluye responsabilidad compartida en el siniestro.',
      doc: 'PER-2026-001.pdf',
      activo: true,
    },
    {
      fecha: '21/03/2026 · 16:30',
      tipo: 'NOTA_RESPUESTA',
      titulo: 'Contestación de Oficio Pericial',
      desc: 'Se remitió NOTA GDE al Juzgado con respuesta al oficio de designación del perito de la contraparte.',
      doc: 'NO-2026-0334-APN-SACO#SOFSE',
      activo: false,
    },
    {
      fecha: '10/02/2026 · 09:00',
      tipo: 'MOVIMIENTO',
      titulo: 'Audiencia de Prueba Documental',
      desc: 'Se celebró la audiencia de prueba documental. El juez admitió la totalidad de la prueba ofrecida por SOFSE.',
      doc: null,
      activo: false,
    },
    {
      fecha: '20/10/2023 · 09:00',
      tipo: 'RECEPCION',
      titulo: 'Apertura de Expediente en Mesa SACO',
      desc: 'Ingreso por variante A — cédula en papel recibida en Mesa de Entradas SOFSE (Ramos Mejía 1302). EE creado en GDE y derivado a Mesa SACO.',
      doc: 'EX-2023-08842-APN-SACO#SOFSE',
      activo: false,
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
    id: 'P-0089/2026', caratula: 'Descarrilamiento Est. Palermo — Formación 3408',
    origen: 'Carta Suceso SAE-0088', abogado: 'Dr. Marcos Gallo',
    estado: 'GDE_VINCULADO', linea: 'LM', progreso: 65,
    asignacion: 'Manual',
  },
  {
    id: 'P-0094/2026', caratula: 'Robo Material Rodante — Talleres Junín',
    origen: 'Carta Suceso SAE-0071', abogado: 'Dra. Carla Ibáñez',
    estado: 'PENDIENTE_GDE', linea: 'LSM', progreso: 25,
    asignacion: 'Smart',
  },
  {
    id: 'P-0078/2026', caratula: 'Vandalismo formación 301 — Línea Belgrano Sur',
    origen: 'Denuncia Policial #12-C', abogado: 'Dra. Sofía Mena',
    estado: 'EN_TRAMITE', linea: 'LBS', progreso: 40,
    asignacion: 'Smart',
  },
];

window.SACO = {
  TIPOS_GESTION, LINEAS_FERROVIARIAS, ABOGADOS, ESTADOS,
  QUEUE_MESA, EXPEDIENTES_ABOGADO, EXPEDIENTE_DETALLE,
  CARTA_SUCESO_QUEUE, CAUSAS_PENALES,
};
