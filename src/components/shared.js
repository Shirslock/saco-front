// ── Shared Components — SACO Sovereign Ledger ─────────────────────────────

// Badge de estado
function estadoBadge(code, label) {
  const map = {
    EN_TRAMITE:          'bg-[#c5e0ea] text-[#1b3a5c]',
    EN_PLAZO_CONTESTAR:  'bg-[#dbeafe] text-[#1e40af]',
    SUSPENSION_TERMINOS: 'bg-[#e0e7ef] text-[#4f6080]',
    EN_PRUEBA:           'bg-[#e0e7ef] text-[#4f6080]',
    PENDIENTE_GDE:       'bg-[#fef9c3] text-[#854d0e]',
    GDE_VINCULADO:       'bg-[#c5e0ea] text-[#1b3a5c]',
    PENDIENTE:           'bg-[#fef9c3] text-[#854d0e]',
    CUMPLIDO:            'bg-[#dcfce7] text-[#166534]',
    ARCHIVADO:           'bg-[#f1f5f9] text-[#64748b]',
    URGENTE:             'bg-[#fee2e2] text-[#991b1b]',
  };
  const dotMap = {
    EN_TRAMITE: 'bg-[#7dbad2]', EN_PLAZO_CONTESTAR: 'bg-[#3a70a9]',
    CUMPLIDO: 'bg-[#166534]', URGENTE: 'bg-[#cd5055]',
    GDE_VINCULADO: 'bg-[#256386]',
  };
  const cls = map[code] || 'bg-[#f1f5f9] text-[#64748b]';
  const dot = dotMap[code] || 'bg-[#6d8eb0]';
  return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide ${cls}">
    <span class="w-1.5 h-1.5 ${dot} rounded-full"></span>${label}
  </span>`;
}

function areaBadge(area) {
  const map = {
    CIVIL:   'bg-[#dbeafe] text-[#1e40af]',
    LABORAL: 'bg-[#c5e0ea] text-[#1b3a5c]',
    PENAL:   'bg-[#e0e7ef] text-[#4f6080]',
  };
  return `<span class="text-[10px] font-bold px-2 py-0.5 rounded-md ${map[area]||'bg-[#f1f5f9] text-[#64748b]'}">${area}</span>`;
}

function _avatarCls(rol) {
  const map = {
    REFERENTE:      'bg-[#256386] text-white',
    ADMINISTRATIVO: 'bg-[#3a70a9] text-white',
    COORDINADOR:    'bg-[#6d8eb0] text-white',
    ABOGADO:        'bg-[#242D4F] text-white',
  };
  return map[rol] || 'bg-[#bcc0c9] text-[#1b3a5c]';
}

// ── Sidebar collapse state ─────────────────────────────────────────────────
function _isSidebarCollapsed() {
  try { return localStorage.getItem('saco_sidebar_collapsed') === '1'; } catch(e) { return false; }
}
function _setSidebarCollapsed(v) {
  try { localStorage.setItem('saco_sidebar_collapsed', v ? '1' : '0'); } catch(e) {}
}

function toggleSidebar() {
  const collapsed = !_isSidebarCollapsed();
  _setSidebarCollapsed(collapsed);

  const sidebar = document.getElementById('sidebar');
  const main    = document.getElementById('main-content');
  const topbar  = document.getElementById('topbar-content');

  if (sidebar) {
    sidebar.classList.toggle('w-64',  !collapsed);
    sidebar.classList.toggle('w-[52px]', collapsed);
    sidebar.querySelectorAll('.sidebar-label').forEach(el => el.classList.toggle('hidden', collapsed));
    sidebar.querySelectorAll('.sidebar-logo-text').forEach(el => el.classList.toggle('hidden', collapsed));
    const userSection = sidebar.querySelector('.sidebar-user-section');
    if (userSection) userSection.classList.toggle('hidden', collapsed);
    const collapseIcon = document.getElementById('sidebar-collapse-icon');
    if (collapseIcon) collapseIcon.style.transform = collapsed ? 'rotate(180deg)' : '';
  }
  const ml = collapsed ? '52px' : '256px';
  if (main)   main.style.marginLeft   = ml;
  if (topbar) topbar.style.left       = ml;
}

// ── Sidebar ────────────────────────────────────────────────────────────────
function renderSidebar(activePage) {
  window._sacoPageKey = activePage;

  const allNav = [
    { key: 'dashboard',       svg: '<svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>', label: 'Dashboard',    href: 'dashboard.html' },
    { key: 'mesa-saco',       svg: '<svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>', label: 'Mesa SACO',   href: 'mesa-saco.html' },
    { key: 'bandeja-abogado', svg: '<svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg>', label: 'Mi Bandeja',  href: 'bandeja-abogado.html' },
    { key: 'area-civil',      svg: '<svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>', label: 'Civil',       href: 'area-civil.html' },
    { key: 'area-laboral',    svg: '<svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>', label: 'Laboral',     href: 'area-laboral.html' },
    { key: 'gestion-penal',   svg: '<svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>', label: 'Penal',       href: 'gestion-penal.html' },
    { key: 'reports',         svg: '<svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>', label: 'Previsión',   href: '#' },
  ];

  const u = window.SACO_SYNC ? window.SACO_SYNC.getCurrentUser() : null;
  const accesos = (u && window.SACO) ? window.SACO.getAccesos(u) : null;
  const allowedKeys = accesos ? accesos.nav : null;

  const nav = allowedKeys
    ? allNav.filter(n => allowedKeys.includes(n.key) || n.key === 'detalle-expediente')
    : allNav;

  const items = nav.map(n => {
    const active = activePage === n.key;
    if (active) {
      return `<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#256386] text-white font-semibold text-sm" href="${n.href}">
        ${n.svg}<span>${n.label}</span>
      </a>`;
    }
    return `<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#4f6080] hover:bg-[#f0f7f8] hover:text-[#256386] transition-all text-sm font-medium" href="${n.href}">
      ${n.svg}<span>${n.label}</span>
    </a>`;
  }).join('');

  const iniciales  = u ? u.iniciales : '?';
  const nombre     = u ? u.nombre.replace(/^Dr\. |^Dra\. /, '') : 'Sin sesión';
  const cargo      = u ? u.cargo : 'Seleccionar usuario';
  const avatarCls  = u ? _avatarCls(u.rol) : 'bg-[#bcc0c9] text-[#1b3a5c]';
  const collapsed  = _isSidebarCollapsed();
  const wCls       = collapsed ? 'w-[52px]' : 'w-64';

  const navItems = nav.map(n => {
    const active = activePage === n.key;
    if (active) {
      return `<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#256386] text-white font-semibold text-sm overflow-hidden" href="${n.href}" title="${n.label}">
        <span class="flex-shrink-0">${n.svg}</span><span class="sidebar-label whitespace-nowrap${collapsed ? ' hidden' : ''}">${n.label}</span>
      </a>`;
    }
    return `<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#4f6080] hover:bg-[#f0f7f8] hover:text-[#256386] transition-all text-sm font-medium overflow-hidden" href="${n.href}" title="${n.label}">
      <span class="flex-shrink-0">${n.svg}</span><span class="sidebar-label whitespace-nowrap${collapsed ? ' hidden' : ''}">${n.label}</span>
    </a>`;
  }).join('');

  return `
  <aside id="sidebar" class="h-screen ${wCls} fixed left-0 top-0 bg-white border-r border-[#e5e7eb] flex flex-col z-50 transition-all duration-200 overflow-hidden">
    <div class="bg-[#242D4F] px-3 flex items-center gap-3 flex-shrink-0" style="height:64px;min-width:0">
      <div class="border-l-[3px] border-white pl-2.5 sidebar-logo-text${collapsed ? ' hidden' : ''}">
        <p class="text-white font-black text-[13px] leading-tight tracking-tight" style="font-family:'Public Sans',sans-serif;">TRENES</p>
        <p class="text-white font-black text-[13px] leading-tight tracking-tight" style="font-family:'Public Sans',sans-serif;">ARGENTINOS</p>
      </div>
      <button onclick="SACO_UI.toggleSidebar()" class="${collapsed ? '' : 'ml-auto'} p-1.5 rounded-md hover:bg-white/15 transition-colors flex-shrink-0 flex items-center justify-center" title="${collapsed ? 'Expandir menú' : 'Colapsar menú'}">
        <svg id="sidebar-collapse-icon" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white/70 transition-transform duration-200" style="${collapsed ? 'transform:rotate(180deg)' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
    </div>

    <div class="flex-1 overflow-y-auto px-1.5 py-4 space-y-0.5">${navItems}</div>

    <div class="px-1.5 pb-3 pt-2 border-t border-[#e5e7eb] sidebar-user-section${collapsed ? ' hidden' : ''}">
      <button onclick="SACO_UI.toggleUserDropdown()" class="w-full flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-[#f0f7f8] transition-colors text-left">
        <div id="sidebar-user-avatar" class="w-8 h-8 rounded-full ${avatarCls} flex items-center justify-center font-bold text-xs flex-shrink-0">${iniciales}</div>
        <div class="min-w-0 flex-1">
          <p id="sidebar-user-name" class="text-xs font-bold text-[#1b3a5c] truncate">${nombre}</p>
          <p id="sidebar-user-cargo" class="text-[10px] text-[#6c6c6e] truncate">${cargo}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#6c6c6e] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg>
      </button>
    </div>
  </aside>`;
}

// ── Topbar ─────────────────────────────────────────────────────────────────
function renderTopbar(title, breadcrumb) {
  const collapsed   = _isSidebarCollapsed();
  const leftOffset  = collapsed ? '52px' : '256px';
  const bc = breadcrumb
    ? `<nav class="hidden md:flex items-center gap-1.5 text-xs text-white/70">
        <span class="font-medium">SACO</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path d="M9 5l7 7-7 7"/></svg>
        <span class="font-semibold text-white">${breadcrumb}</span>
       </nav>`
    : '';

  const u           = window.SACO_SYNC ? window.SACO_SYNC.getCurrentUser() : null;
  const iniciales   = u ? u.iniciales : '?';
  const nombreCorto = u ? u.nombre.replace(/^Dr\. |^Dra\. /, '') : 'Seleccionar';
  const avatarCls   = u ? _avatarCls(u.rol) : 'bg-[#bcc0c9] text-[#1b3a5c]';

  return `
  <header id="topbar-content" class="fixed top-0 right-0 z-40 bg-[#63B2DA] flex justify-between items-center px-6 shadow-md transition-all duration-200" style="height:64px;left:${leftOffset}">
    <div class="flex items-center gap-5">
      ${bc}
      ${!breadcrumb ? `<h1 class="text-sm font-bold tracking-tight text-white" style="font-family:'Public Sans',sans-serif;">${title}</h1>` : ''}
    </div>
    <div class="flex items-center gap-2">
      <div class="relative">
        <input class="bg-white/15 border border-white/20 rounded-lg pl-8 pr-4 py-2 text-sm w-60 focus:outline-none focus:bg-white/25 text-white placeholder-white/50" placeholder="Buscar causa, GDE..." />
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white/50 absolute left-2.5 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      </div>
      <button onclick="toggleNotifPanel()" class="p-2 text-white/80 hover:bg-white/15 rounded-lg transition-colors relative">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
        <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-[#fdc84a] rounded-full border-2 border-[#63B2DA]"></span>
      </button>
      <button id="user-pill" onclick="SACO_UI.toggleUserDropdown()" class="flex items-center gap-2 px-2.5 py-1.5 bg-white/15 hover:bg-white/25 rounded-lg transition-colors border border-white/20">
        <div id="user-avatar" class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${avatarCls}">${iniciales}</div>
        <span id="user-name" class="text-xs font-semibold text-white hidden md:block">${nombreCorto}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg>
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
  dropdown.className = 'fixed z-[200] bg-white rounded-xl shadow-xl border border-[#e5e7eb] py-2 w-64 overflow-hidden';
  dropdown.style.top   = (rect.bottom + 8) + 'px';
  dropdown.style.right = (window.innerWidth - rect.right) + 'px';

  const currentUser = window.SACO_SYNC ? window.SACO_SYNC.getCurrentUser() : null;

  dropdown.innerHTML = `
    <div class="px-4 py-2.5 border-b border-[#e5e7eb] mb-1 bg-[#f0f7f8]">
      <p class="text-[10px] font-black uppercase tracking-widest text-[#6c6c6e]">Demo — Cambiar usuario</p>
    </div>
    ${(window.SACO ? window.SACO.USUARIOS : []).map(u => `
      <button onclick="SACO_UI.selectUser('${u.id}')" class="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#f0f7f8] transition-colors text-left ${currentUser && currentUser.id === u.id ? 'bg-[#c5e0ea]/30' : ''}">
        <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${_avatarCls(u.rol)}">${u.iniciales}</div>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-[#1b3a5c] truncate">${u.nombre}</p>
          <p class="text-[10px] text-[#6c6c6e]">${u.cargo}</p>
        </div>
        ${currentUser && currentUser.id === u.id ? '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#256386] ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>' : ''}
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

  const pageKey = window._sacoPageKey || 'dashboard';
  document.getElementById('sidebar-mount').innerHTML = renderSidebar(pageKey);
  _updateUserPill(u);

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
  if (!u || !window.SACO) return true;
  return window.SACO.getAccesos(u).puedeReasignar;
}

// ── Toast ──────────────────────────────────────────────────────────────────
function showToast(msg, type='success') {
  const colors = {
    success: 'bg-white border-l-4 border-[#166534] text-[#1b3a5c]',
    error:   'bg-white border-l-4 border-[#cd5055] text-[#1b3a5c]',
    info:    'bg-white border-l-4 border-[#256386] text-[#1b3a5c]',
    warn:    'bg-white border-l-4 border-[#fdc84a] text-[#1b3a5c]',
  };
  const icons = {
    success: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#166534] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>`,
    error:   `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#cd5055] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    info:    `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#256386] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
    warn:    `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#b45309] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>`,
  };
  const t = document.createElement('div');
  t.className = `fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-4 py-3.5 rounded-xl shadow-lg ${colors[type]} max-w-sm`;
  t.innerHTML = `
    ${icons[type]}
    <p class="text-sm font-medium flex-1">${msg}</p>
    <button onclick="this.parentElement.remove()" class="ml-2 text-[#6c6c6e] hover:text-[#1b3a5c]">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
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
  panel.className = 'fixed top-16 right-4 w-80 bg-white rounded-xl shadow-xl border border-[#e5e7eb] z-50 overflow-hidden';
  panel.innerHTML = `
    <div class="px-5 py-3.5 border-b border-[#e5e7eb] flex justify-between items-center bg-[#f0f7f8]">
      <h3 class="font-bold text-[#1b3a5c] text-sm" style="font-family:'Public Sans',sans-serif;">Alertas y Vencimientos</h3>
      <span class="text-[10px] font-bold bg-[#cd5055] text-white px-2 py-0.5 rounded-full">3</span>
    </div>
    <div class="divide-y divide-[#e5e7eb] max-h-80 overflow-y-auto">
      ${[
        { svg:'<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-0.5 flex-shrink-0 text-[#cd5055]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>', msg:'C-0023/2026 — Vence período probatorio en 12 días', time:'Hoy' },
        { svg:'<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-0.5 flex-shrink-0 text-[#b45309]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>', msg:'L-0012/2026 — Plazo contestación: 25/04/2026', time:'Hoy' },
        { svg:'<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-0.5 flex-shrink-0 text-[#256386]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/></svg>', msg:'Nuevo EE pendiente de asignación: Q-005', time:'Hace 2h' },
      ].map(n => `
        <div class="px-4 py-3.5 hover:bg-[#f0f7f8] transition-colors cursor-pointer">
          <div class="flex items-start gap-3">${n.svg}<div><p class="text-xs font-semibold text-[#1b3a5c] leading-snug">${n.msg}</p><p class="text-[10px] text-[#6c6c6e] mt-1">${n.time}</p></div></div>
        </div>`).join('')}
    </div>
    <div class="px-5 py-3 border-t border-[#e5e7eb]">
      <button class="text-xs font-bold text-[#256386] hover:underline">Ver todas las alertas</button>
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
  m.className = 'fixed inset-0 bg-[#1b3a5c]/40 backdrop-blur-sm z-[100] overflow-y-auto';
  m.innerHTML = `
    <div class="flex min-h-full items-start justify-center p-4 py-8">
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-lg border border-[#e5e7eb]">
        <div class="px-6 py-4 border-b border-[#e5e7eb] flex justify-between items-center bg-[#f0f7f8] sticky top-0 rounded-t-xl z-10">
          <h3 class="font-bold text-[#1b3a5c] text-sm" style="font-family:'Public Sans',sans-serif;">${title}</h3>
          <button onclick="closeModal()" class="p-1 hover:bg-[#e5e7eb] rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#6c6c6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="p-6">${content}</div>
        ${actions ? `<div class="px-6 py-4 border-t border-[#e5e7eb] flex justify-end gap-3 bg-[#f9fafb] rounded-b-xl sticky bottom-0">${actions}</div>` : ''}
      </div>
    </div>`;
  m.addEventListener('click', e => { if (e.target === m) closeModal(); });
  document.body.appendChild(m);
}

function closeModal() {
  document.getElementById('modal-overlay')?.remove();
}

function estadoBadgeCustom(label, colorClass) {
  const cls = colorClass || 'bg-[#c5e0ea] text-[#1b3a5c]';
  return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide ${cls}">
    <span class="w-1.5 h-1.5 bg-[#7dbad2] rounded-full"></span>${label}
  </span>`;
}

window.SACO_UI = {
  renderSidebar, renderTopbar, estadoBadge, areaBadge, estadoBadgeCustom,
  showToast, showModal, closeModal, toggleNotifPanel,
  toggleUserDropdown, selectUser, puedeReasignar, updateUserPill: _updateUserPill,
  toggleSidebar,
};