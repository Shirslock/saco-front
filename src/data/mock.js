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
  vinculos: [],
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
    nav: ['dashboard-mesa','bandeja-abogado','area-civil','area-laboral','gestion-penal','alta-expediente','reports'],
    puedeReasignar: true, verTodaBandeja: true, inicio: 'dashboard-mesa',
  },
  ADMINISTRATIVO: {
    nav: ['dashboard-mesa','alta-expediente','bandeja-abogado'],
    puedeReasignar: false, verTodaBandeja: false, inicio: 'dashboard-mesa',
  },
  COORDINADOR: {
    CIVIL:   { nav: ['dashboard-mesa','bandeja-abogado','area-civil','alta-expediente','reports'],    puedeReasignar: true,  verTodaBandeja: true,  inicio: 'area-civil'    },
    LABORAL: { nav: ['dashboard-mesa','bandeja-abogado','area-laboral','alta-expediente','reports'],  puedeReasignar: true,  verTodaBandeja: true,  inicio: 'area-laboral'  },
    PENAL:   { nav: ['dashboard-mesa','bandeja-abogado','gestion-penal','alta-expediente','reports'], puedeReasignar: true,  verTodaBandeja: true,  inicio: 'gestion-penal' },
  },
  ABOGADO: {
    CIVIL:   { nav: ['bandeja-abogado','area-civil','alta-expediente'],    puedeReasignar: false, verTodaBandeja: false, inicio: 'bandeja-abogado' },
    LABORAL: { nav: ['bandeja-abogado','area-laboral','alta-expediente'],  puedeReasignar: false, verTodaBandeja: false, inicio: 'bandeja-abogado' },
    PENAL:   { nav: ['bandeja-abogado','gestion-penal','alta-expediente'], puedeReasignar: false, verTodaBandeja: false, inicio: 'bandeja-abogado' },
  },
};

function getAccesos(usuario) {
  if (!usuario) return ROL_ACCESOS.REFERENTE;
  const r = ROL_ACCESOS[usuario.rol];
  if (!r) return ROL_ACCESOS.REFERENTE;
  if (usuario.area && r[usuario.area]) return r[usuario.area];
  return r;
}

window.SACO = {
  TIPOS_GESTION, LINEAS_FERROVIARIAS, ABOGADOS, ESTADOS,
  QUEUE_MESA, EXPEDIENTES_ABOGADO, EXPEDIENTE_DETALLE,
  CARTA_SUCESO_QUEUE, CAUSAS_PENALES,
  USUARIOS, ROL_ACCESOS, CURRENT_USER: null, getAccesos,
};
