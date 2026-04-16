// ── Shared Components — SACO Sovereign Ledger ─────────────────────────────

// Badge de estado
function estadoBadge(code, label) {
  const map = {
    EN_TRAMITE:          'bg-secondary-container text-on-secondary-fixed',
    EN_PLAZO_CONTESTAR:  'bg-primary-container text-on-primary-container',
    SUSPENSION_TERMINOS: 'bg-tertiary-container text-on-tertiary-fixed',
    EN_PRUEBA:           'bg-tertiary-container text-on-tertiary-fixed',
    PENDIENTE_GDE:       'bg-tertiary-container text-on-tertiary-fixed',
    GDE_VINCULADO:       'bg-secondary-container text-on-secondary-fixed',
    PENDIENTE:           'bg-tertiary-container text-on-tertiary-fixed',
    CUMPLIDO:            'bg-green-100 text-green-800',
    ARCHIVADO:           'bg-surface-container-high text-on-surface-variant',
    URGENTE:             'bg-error-container/30 text-on-error-container',
  };
  const cls = map[code] || 'bg-surface-container text-on-surface-variant';
  const dot = code === 'URGENTE' ? 'bg-error' : code === 'CUMPLIDO' ? 'bg-green-500' : code === 'GDE_VINCULADO' || code === 'EN_TRAMITE' ? 'bg-secondary' : 'bg-tertiary';
  return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${cls}">
    <span class="w-1.5 h-1.5 ${dot} rounded-full"></span>${label}
  </span>`;
}

function areaBadge(area) {
  const map = {
    CIVIL:   'bg-primary-container/60 text-on-primary-container',
    LABORAL: 'bg-secondary-container text-on-secondary-fixed',
    PENAL:   'bg-tertiary-container text-on-tertiary-fixed',
  };
  return `<span class="text-[10px] font-bold px-2 py-0.5 rounded ${map[area]||''}">${area}</span>`;
}

// ── Avatar color por rol ────────────────────────────────────────────────────
function _avatarCls(rol) {
  const map = {
    REFERENTE:      'bg-primary text-white',
    ADMINISTRATIVO: 'bg-secondary text-white',
    COORDINADOR:    'bg-tertiary-container text-on-tertiary-fixed',
    ABOGADO:        'bg-surface-container-high text-on-surface',
  };
  return map[rol] || 'bg-surface-container text-on-surface-variant';
}

// ── Sidebar ────────────────────────────────────────────────────────────────
function renderSidebar(activePage) {
  window._sacoPageKey = activePage;

  const allNav = [
    { key: 'dashboard',          icon: 'dashboard',         label: 'Dashboard',        href: 'dashboard.html' },
    { key: 'mesa-saco',          icon: 'view_list',         label: 'Mesa SACO',        href: 'mesa-saco.html' },
    { key: 'bandeja-abogado',    icon: 'inbox',             label: 'Mi Bandeja',       href: 'bandeja-abogado.html' },
    { key: 'area-civil',         icon: 'gavel',             label: 'Área Civil',       href: 'area-civil.html' },
    { key: 'area-laboral',       icon: 'work',              label: 'Área Laboral',     href: 'area-laboral.html' },
    { key: 'gestion-penal',      icon: 'policy',            label: 'Área Penal',       href: 'gestion-penal.html' },
    { key: 'alta-expediente',    icon: 'create_new_folder', label: 'Nuevo Expediente', href: 'alta-expediente.html' },
    { key: 'reports',            icon: 'analytics',         label: 'Previsión',        href: '#' },
  ];

  const u = window.SACO_SYNC ? window.SACO_SYNC.getCurrentUser() : null;
  const accesos = (u && window.SACO) ? window.SACO.getAccesos(u) : null;
  const allowedKeys = accesos ? accesos.nav : null;

  // detalle-expediente is always accessible (it's opened from within the app)
  const nav = allowedKeys
    ? allNav.filter(n => allowedKeys.includes(n.key) || n.key === 'detalle-expediente')
    : allNav;

  const items = nav.map(n => {
    const active = activePage === n.key;
    const cls = active
      ? 'flex items-center gap-3 px-4 py-3 text-primary bg-surface-container-lowest rounded-l-full border-l-4 border-primary font-bold text-sm shadow-sm'
      : 'flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-all cursor-pointer rounded-l-full text-sm font-medium';
    const fill = active ? "font-variation-settings: 'FILL' 1;" : '';
    return `<a class="${cls}" href="${n.href}">
      <span class="material-symbols-outlined" style="${fill}">${n.icon}</span>
      <span>${n.label}</span>
    </a>`;
  }).join('');

  const iniciales  = u ? u.iniciales : '?';
  const nombre     = u ? u.nombre.replace(/^Dr\. |^Dra\. /, '') : 'Sin sesión';
  const cargo      = u ? u.cargo : 'Seleccionar usuario';
  const avatarCls  = u ? _avatarCls(u.rol) : 'bg-surface-container text-on-surface-variant';

  return `
  <aside id="sidebar" class="h-screen w-64 fixed left-0 top-0 bg-surface-container-high flex flex-col py-6 z-50">
    <div class="px-6 mb-8 flex items-center gap-3">
      <div class="w-10 h-10 bg-primary flex items-center justify-center rounded-xl shadow-sm">
        <span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">account_balance</span>
      </div>
      <div>
        <h2 class="font-headline font-black text-on-surface text-lg leading-tight">SOFSE</h2>
        <p class="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mt-0.5">SACO · Contencioso</p>
      </div>
    </div>
    <nav class="flex-1 space-y-1 px-3">${items}</nav>
    <div class="px-4 mt-6 space-y-3">
      <a href="alta-expediente.html" class="w-full py-3 bg-gradient-to-br from-primary to-primary-dim text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg hover:brightness-105 active:scale-95 flex items-center justify-center gap-2 transition-all">
        <span class="material-symbols-outlined text-sm">add_circle</span>
        Nuevo Expediente
      </a>
      <div class="px-2 py-4 border-t border-outline-variant/20 flex items-center gap-3">
        <div id="sidebar-user-avatar" class="w-8 h-8 rounded-full ${avatarCls} flex items-center justify-center font-bold text-xs flex-shrink-0">${iniciales}</div>
        <div class="min-w-0">
          <p id="sidebar-user-name" class="text-xs font-bold text-on-surface truncate">${nombre}</p>
          <p id="sidebar-user-cargo" class="text-[10px] text-on-surface-variant truncate">${cargo}</p>
        </div>
      </div>
    </div>
  </aside>`;
}

// ── Topbar ─────────────────────────────────────────────────────────────────
function renderTopbar(title, breadcrumb) {
  const bc = breadcrumb
    ? `<nav class="hidden md:flex items-center gap-2 text-xs text-on-surface-variant">
        <span>SACO</span>
        <span class="material-symbols-outlined text-[12px]">chevron_right</span>
        <span class="text-primary font-semibold">${breadcrumb}</span>
       </nav>`
    : '';

  const u           = window.SACO_SYNC ? window.SACO_SYNC.getCurrentUser() : null;
  const iniciales   = u ? u.iniciales : '?';
  const nombreCorto = u ? u.nombre.replace(/^Dr\. |^Dra\. /, '') : 'Seleccionar';
  const avatarCls   = u ? _avatarCls(u.rol) : 'bg-surface-container text-on-surface-variant';

  return `
  <header class="fixed top-0 left-64 right-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10 flex justify-between items-center px-8 py-3 shadow-sm">
    <div class="flex items-center gap-6">
      ${bc}
      <h1 class="text-base font-headline font-extrabold tracking-tight text-on-surface">${title}</h1>
    </div>
    <div class="flex items-center gap-3">
      <div class="relative">
        <input class="bg-surface-container-low border-none rounded-full pl-9 pr-4 py-2 text-sm w-72 focus:ring-2 focus:ring-primary/20 focus:outline-none" placeholder="Buscar por carátula, N° causa, GDE..." />
        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
      </div>
      <button onclick="toggleNotifPanel()" class="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors relative">
        <span class="material-symbols-outlined">notifications</span>
        <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
      </button>
      <button class="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
        <span class="material-symbols-outlined">settings</span>
      </button>
      <button id="user-pill" onclick="SACO_UI.toggleUserDropdown()" class="flex items-center gap-2 pl-2 pr-3 py-1.5 bg-surface-container-low hover:bg-surface-container rounded-full transition-colors border border-outline-variant/20">
        <div id="user-avatar" class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${avatarCls}">${iniciales}</div>
        <span id="user-name" class="text-xs font-semibold text-on-surface hidden md:block">${nombreCorto}</span>
        <span class="material-symbols-outlined text-[14px] text-on-surface-variant">expand_more</span>
      </button>
    </div>
  </header>`;
}

// ── Selector de usuario (demo) ──────────────────────────────────────────────
function toggleUserDropdown() {
  const existing = document.getElementById('user-dropdown');
  if (existing) { existing.remove(); return; }

  const pill = document.getElementById('user-pill');
  if (!pill) return;
  const rect = pill.getBoundingClientRect();

  const dropdown = document.createElement('div');
  dropdown.id = 'user-dropdown';
  dropdown.className = 'fixed z-[200] bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/15 py-2 w-64 overflow-hidden';
  dropdown.style.top   = (rect.bottom + 8) + 'px';
  dropdown.style.right = (window.innerWidth - rect.right) + 'px';

  const currentUser = window.SACO_SYNC ? window.SACO_SYNC.getCurrentUser() : null;

  dropdown.innerHTML = `
    <div class="px-4 py-2.5 border-b border-outline-variant/10 mb-1">
      <p class="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Demo — Cambiar usuario</p>
    </div>
    ${(window.SACO ? window.SACO.USUARIOS : []).map(u => `
      <button onclick="SACO_UI.selectUser('${u.id}')" class="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-surface-container-low transition-colors text-left ${currentUser && currentUser.id === u.id ? 'bg-primary-container/20' : ''}">
        <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${_avatarCls(u.rol)}">${u.iniciales}</div>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-on-surface truncate">${u.nombre}</p>
          <p class="text-[10px] text-on-surface-variant">${u.cargo}</p>
        </div>
        ${currentUser && currentUser.id === u.id ? '<span class="material-symbols-outlined text-primary text-[16px] ml-auto flex-shrink-0">check</span>' : ''}
      </button>`).join('')}`;

  document.body.appendChild(dropdown);
  setTimeout(() => document.addEventListener('click', function h(e) {
    if (!dropdown.contains(e.target) && !pill.contains(e.target)) {
      dropdown.remove();
      document.removeEventListener('click', h);
    }
  }), 100);
}

function selectUser(userId) {
  const u = window.SACO ? window.SACO.USUARIOS.find(x => x.id === userId) : null;
  if (!u) return;
  window.SACO.CURRENT_USER = u;
  if (window.SACO_SYNC) window.SACO_SYNC.setCurrentUser(u);

  // Re-render sidebar on this tab
  const pageKey = window._sacoPageKey || 'dashboard';
  document.getElementById('sidebar-mount').innerHTML = renderSidebar(pageKey);
  _updateUserPill(u);

  // Redirect if current page is not in this user's nav
  const accesos = window.SACO.getAccesos(u);
  const mainNavKeys = ['dashboard', 'mesa-saco','bandeja-abogado','area-civil','area-laboral','gestion-penal','alta-expediente','reports'];
  if (mainNavKeys.includes(pageKey) && !accesos.nav.includes(pageKey)) {
    window.location.href = accesos.inicio + '.html';
    return;
  }

  document.getElementById('user-dropdown')?.remove();
  showToast(`Sesión: ${u.nombre} — ${u.cargo}`, 'success');
}

function _updateUserPill(u) {
  const avatarEl      = document.getElementById('user-avatar');
  const nameEl        = document.getElementById('user-name');
  const sidebarAvatar = document.getElementById('sidebar-user-avatar');
  const sidebarName   = document.getElementById('sidebar-user-name');
  const sidebarCargo  = document.getElementById('sidebar-user-cargo');
  const cls = _avatarCls(u.rol);
  const nombre = u.nombre.replace(/^Dr\. |^Dra\. /, '');
  if (avatarEl) {
    avatarEl.className   = `w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${cls}`;
    avatarEl.textContent = u.iniciales;
  }
  if (nameEl)        nameEl.textContent        = nombre;
  if (sidebarAvatar) {
    sidebarAvatar.className   = `w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${cls}`;
    sidebarAvatar.textContent = u.iniciales;
  }
  if (sidebarName)  sidebarName.textContent  = nombre;
  if (sidebarCargo) sidebarCargo.textContent = u.cargo;
}

function puedeReasignar() {
  const u = window.SACO_SYNC ? window.SACO_SYNC.getCurrentUser() : null;
  if (!u || !window.SACO) return true; // sin usuario seleccionado: visible en demo
  return window.SACO.getAccesos(u).puedeReasignar;
}

// ── Toast ──────────────────────────────────────────────────────────────────
function showToast(msg, type='success') {
  const colors = {
    success: 'bg-surface-container-lowest border-l-4 border-green-500 text-on-surface',
    error:   'bg-surface-container-lowest border-l-4 border-error text-on-surface',
    info:    'bg-surface-container-lowest border-l-4 border-primary text-on-surface',
    warn:    'bg-surface-container-lowest border-l-4 border-amber-500 text-on-surface',
  };
  const icons = { success:'check_circle', error:'error', info:'info', warn:'warning' };
  const iconColors = { success:'text-green-600', error:'text-error', info:'text-primary', warn:'text-amber-500' };

  const t = document.createElement('div');
  t.className = `fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg ${colors[type]} animate-in slide-in-from-right transition-all max-w-sm`;
  t.innerHTML = `
    <span class="material-symbols-outlined ${iconColors[type]}" style="font-variation-settings:'FILL' 1;">${icons[type]}</span>
    <p class="text-sm font-semibold">${msg}</p>
    <button onclick="this.parentElement.remove()" class="ml-auto text-on-surface-variant hover:text-on-surface">
      <span class="material-symbols-outlined text-[16px]">close</span>
    </button>`;
  document.body.appendChild(t);
  setTimeout(() => t.style.opacity = '0', 3500);
  setTimeout(() => t.remove(), 4000);
}

// ── Panel notificaciones ───────────────────────────────────────────────────
function toggleNotifPanel() {
  let panel = document.getElementById('notif-panel');
  if (panel) { panel.remove(); return; }
  panel = document.createElement('div');
  panel.id = 'notif-panel';
  panel.className = 'fixed top-16 right-4 w-80 bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant/15 z-50 overflow-hidden';
  panel.innerHTML = `
    <div class="px-5 py-4 border-b border-outline-variant/10 flex justify-between items-center">
      <h3 class="font-headline font-bold text-on-surface text-sm">Alertas y Vencimientos</h3>
      <span class="text-[10px] font-bold bg-error text-white px-2 py-0.5 rounded-full">3</span>
    </div>
    <div class="divide-y divide-outline-variant/5 max-h-80 overflow-y-auto">
      ${[
        { icon:'schedule', color:'text-error', msg:'C-0023/2026 — Vence período probatorio en 12 días', time:'Hoy' },
        { icon:'gavel', color:'text-amber-600', msg:'L-0012/2026 — Plazo contestación demanda: 25/04/2026', time:'Hoy' },
        { icon:'cloud_sync', color:'text-primary', msg:'Nuevo EE en GDE pendiente de asignación: Q-005', time:'Hace 2h' },
      ].map(n => `
        <div class="px-5 py-4 hover:bg-surface-container-low transition-colors cursor-pointer">
          <div class="flex items-start gap-3">
            <span class="material-symbols-outlined ${n.color} text-[18px] mt-0.5" style="font-variation-settings:'FILL' 1;">${n.icon}</span>
            <div>
              <p class="text-xs font-semibold text-on-surface leading-snug">${n.msg}</p>
              <p class="text-[10px] text-on-surface-variant mt-1">${n.time}</p>
            </div>
          </div>
        </div>`).join('')}
    </div>
    <div class="px-5 py-3 border-t border-outline-variant/10">
      <button class="text-xs font-bold text-primary hover:underline">Ver todas las alertas</button>
    </div>`;
  document.body.appendChild(panel);
  setTimeout(() => document.addEventListener('click', function h(e) {
    if (!panel.contains(e.target)) { panel.remove(); document.removeEventListener('click', h); }
  }), 100);
}

// ── Modal genérico ─────────────────────────────────────────────────────────
function showModal(title, content, actions='') {
  closeModal();
  const m = document.createElement('div');
  m.id = 'modal-overlay';
  m.className = 'fixed inset-0 bg-inverse-surface/30 backdrop-blur-sm z-[100] flex items-center justify-center p-4';
  m.innerHTML = `
    <div class="bg-surface-container-lowest rounded-xl shadow-xl w-full max-w-lg overflow-hidden">
      <div class="px-6 py-4 border-b border-outline-variant/10 flex justify-between items-center">
        <h3 class="font-headline font-bold text-on-surface">${title}</h3>
        <button onclick="closeModal()" class="p-1 hover:bg-surface-container rounded-full transition-colors">
          <span class="material-symbols-outlined text-on-surface-variant">close</span>
        </button>
      </div>
      <div class="p-6">${content}</div>
      ${actions ? `<div class="px-6 py-4 border-t border-outline-variant/10 flex justify-end gap-3">${actions}</div>` : ''}
    </div>`;
  m.addEventListener('click', e => { if (e.target === m) closeModal(); });
  document.body.appendChild(m);
}

function closeModal() {
  document.getElementById('modal-overlay')?.remove();
}

// ── Badge con texto libre (catálogo de estados por tipo de gestión) ─────────
function estadoBadgeCustom(label, colorClass) {
  const cls = colorClass || 'bg-secondary-container text-on-secondary-fixed';
  return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${cls}">
    <span class="w-1.5 h-1.5 bg-secondary rounded-full"></span>${label}
  </span>`;
}

window.SACO_UI = {
  renderSidebar, renderTopbar, estadoBadge, areaBadge, estadoBadgeCustom,
  showToast, showModal, closeModal, toggleNotifPanel,
  toggleUserDropdown, selectUser, puedeReasignar, updateUserPill: _updateUserPill,
};
