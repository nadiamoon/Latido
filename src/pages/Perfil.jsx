import { useNavigate } from 'react-router-dom'

function Perfil() {
  const navigate = useNavigate()
  return (
    <div style={{ minHeight: '100vh', background: '#FAF6F0', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#3D2314', padding: '16px 24px 32px', borderRadius: '0 0 28px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '72px', height: '72px', background: '#C4623A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', marginTop: '8px' }}>🐕</div>
        <div style={{ fontSize: '20px', color: '#FAF6F0', fontWeight: '600' }}>María González</div>
        <div style={{ fontSize: '12px', color: '#E8D5B7', opacity: 0.6 }}>maria@email.com · Córdoba</div>
        <div style={{ fontSize: '11px', fontWeight: '500', padding: '4px 14px', background: '#C4623A', color: 'white', borderRadius: '20px' }}>Donante Premium</div>
      </div>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          { icon: '🦮', label: 'Mi perro — Simón' },
          { icon: '📄', label: 'Mis documentos' },
          { icon: '🔔', label: 'Notificaciones' },
          { icon: '💳', label: 'Suscripción' },
          { icon: '⚙️', label: 'Configuración' },
        ].map((item) => (
          <div key={item.label} style={{ background: 'white', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 2px 8px rgba(61,35,20,0.05)', cursor: 'pointer' }}>
            <span style={{ fontSize: '20px' }}>{item.icon}</span>
            <span style={{ fontSize: '14px', color: '#3D2314', fontWeight: '500' }}>{item.label}</span>
            <span style={{ marginLeft: 'auto', color: '#C4623A', opacity: 0.5 }}>›</span>
          </div>
        ))}
        <div style={{ background: '#FDECEA', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', marginTop: '8px' }} onClick={() => navigate('/')}>
          <span style={{ fontSize: '20px' }}>🚪</span>
          <span style={{ fontSize: '14px', color: '#C0392B', fontWeight: '500' }}>Cerrar sesión</span>
        </div>
      </div>
      <div style={{ height: '64px', background: 'white', borderTop: '1px solid #F2E8D5', display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: 'auto' }}>
        {[['🏠', 'Inicio', '/home', false], ['🗺️', 'Mapa', '/mapa', false], ['🔔', 'Alertas', '/alertas', false], ['👤', 'Perfil', '/perfil', true]].map(([icon, label, path, active]) => (
          <div key={label} onClick={() => navigate(path)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', opacity: active ? 1 : 0.3, cursor: 'pointer', flex: 1 }}>
            <span style={{ fontSize: '18px' }}>{icon}</span>
            <span style={{ fontSize: '9px', fontWeight: '500', color: active ? '#C4623A' : '#7A4528', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</span>
            {active && <div style={{ width: '4px', height: '4px', background: '#C4623A', borderRadius: '50%' }}></div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Perfil