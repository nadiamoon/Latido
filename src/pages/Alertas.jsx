import { useNavigate } from 'react-router-dom'

function Alertas() {
  const navigate = useNavigate()
  return (
    <div style={{ minHeight: '100vh', background: '#FAF6F0', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#3D2314', padding: '16px 24px 24px', borderRadius: '0 0 28px 28px' }}>
        <div style={{ fontSize: '22px', color: '#FAF6F0', fontWeight: '600', marginTop: '8px' }}>Alertas</div>
        <div style={{ fontSize: '12px', color: '#E8D5B7', opacity: 0.6, marginTop: '4px' }}>Notificaciones recientes</div>
      </div>
      <div style={{ flex: 1, margin: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[
          { icon: '🚨', title: 'Urgencia en Nueva Córdoba', desc: 'Necesitan sangre tipo A · hace 2 horas', color: '#FDECEA', border: '#FACACA' },
          { icon: '✅', title: 'Tu perro fue aprobado', desc: 'Simón ya aparece en el mapa · hace 1 día', color: '#E8F5E9', border: '#C8E6C9' },
          { icon: '🔔', title: 'Nueva urgencia cerca', desc: 'A 3.5 km de vos · hace 2 días', color: '#FFF8E1', border: '#FFE082' },
        ].map((item) => (
          <div key={item.title} style={{ background: item.color, border: `1.5px solid ${item.border}`, borderRadius: '16px', padding: '14px 16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ fontSize: '24px' }}>{item.icon}</div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#3D2314' }}>{item.title}</div>
              <div style={{ fontSize: '11px', color: '#7A4528', opacity: 0.7, marginTop: '2px' }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: '64px', background: 'white', borderTop: '1px solid #F2E8D5', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        {[['🏠', 'Inicio', '/home', false], ['🗺️', 'Mapa', '/mapa', false], ['🔔', 'Alertas', '/alertas', true], ['👤', 'Perfil', '/perfil', false]].map(([icon, label, path, active]) => (
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

export default Alertas