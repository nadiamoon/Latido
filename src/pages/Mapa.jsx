import { useNavigate } from 'react-router-dom'

function Mapa() {
  const navigate = useNavigate()
  return (
    <div style={{ minHeight: '100vh', background: '#FAF6F0', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#3D2314', padding: '16px 24px 24px', borderRadius: '0 0 28px 28px' }}>
        <div style={{ fontSize: '22px', color: '#FAF6F0', fontWeight: '600', marginTop: '8px' }}>Mapa de donantes</div>
        <div style={{ fontSize: '12px', color: '#E8D5B7', opacity: 0.6, marginTop: '4px' }}>Córdoba · 12 donantes activos</div>
      </div>
      <div style={{ flex: 1, margin: '20px', background: '#F2E8D5', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px' }}>
        <div style={{ fontSize: '48px' }}>🗺️</div>
        <div style={{ fontSize: '14px', color: '#7A4528', opacity: 0.6 }}>Mapa próximamente</div>
      </div>
      <div style={{ height: '64px', background: 'white', borderTop: '1px solid #F2E8D5', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        {[['🏠', 'Inicio', '/home', false], ['🗺️', 'Mapa', '/mapa', true], ['🔔', 'Alertas', '/alertas', false], ['👤', 'Perfil', '/perfil', false]].map(([icon, label, path, active]) => (
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

export default Mapa