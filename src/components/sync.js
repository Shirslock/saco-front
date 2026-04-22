// ── SACO Sync — Canal de sincronización entre pestañas ─────────────────────
// Tipos de eventos: EXPEDIENTE_ASIGNADO | ESTADO_CAMBIADO |
//                  MOVIMIENTO_AGREGADO  | QUEUE_ACTUALIZADA | USUARIO_CAMBIADO

const sacoChannel = new BroadcastChannel('saco_sync');

function syncEmit(type, payload) {
  sacoChannel.postMessage({ type, payload, ts: Date.now() });
}

function syncListen(callback) {
  sacoChannel.onmessage = (e) => callback(e.data);
}

// ── Persistencia de usuario (única excepción a la regla sessionStorage) ─────
function setCurrentUser(usuario) {
  sessionStorage.setItem('saco_current_user', usuario ? JSON.stringify(usuario) : '');
  syncEmit('USUARIO_CAMBIADO', { usuario });
}

function getCurrentUser() {
  try {
    const raw = sessionStorage.getItem('saco_current_user');
    return raw ? JSON.parse(raw) : null;
  } catch(e) { return null; }
}

window.SACO_SYNC = { syncEmit, syncListen, setCurrentUser, getCurrentUser };