import { useNavigate } from 'react-router-dom'
function HomeDonante() {
    const navigate = useNavigate()
  return (
    <div style={{
      minHeight: '100vh',
      background: '#FAF6F0',
      fontFamily: 'sans-serif'
    }}>

      {/* HEADER */}
      <div style={{
        background: '#3D2314',
        padding: '16px 24px 28px',
        borderRadius: '0 0 28px 28px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <div>
            <div style={{ fontSize: '12px', color: '#E8D5B7', opacity: 0.6 }}>Hola de nuevo,</div>
            <div style={{ fontSize: '20px', color: '#FAF6F0', fontWeight: '600' }}>María</div>
          </div>
          <div style={{
            width: '40px', height: '40px',
            background: '#C4623A', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px'
          }}>🐕</div>
        </div>

        {/* TARJETA PERRO */}
        <div style={{
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '16px', padding: '14px 16px',
          display: 'flex', alignItems: 'center', gap: '12px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{
            width: '44px', height: '44px',
            background: '#F5E0D6', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '22px'
          }}>🦮</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '15px', color: '#FAF6F0', fontWeight: '600' }}>Simón</div>
            <div style={{ fontSize: '11px', color: '#E8D5B7', opacity: 0.6, marginTop: '2px' }}>Golden · 4 años · 32kg · Tipo A</div>
          </div>
          <div style={{
            fontSize: '10px', fontWeight: '500',
            padding: '4px 10px', background: '#8FAF8A',
            color: 'white', borderRadius: '20px'
          }}>✓ Apto</div>
        </div>
      </div>

      {/* BODY */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* URGENCIA */}
        <div>
          <div style={{ fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#7A4528', opacity: 0.6, marginBottom: '8px' }}>
            Urgencia cercana
          </div>
          <div style={{
            background: '#FDECEA', border: '1.5px solid #FACACA',
            borderRadius: '20px', padding: '16px'
          }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{
                width: '40px', height: '40px', background: '#C0392B',
                borderRadius: '12px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '18px', flexShrink: 0
              }}>🚨</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#C0392B' }}>Necesitan sangre tipo A</div>
                <div style={{ fontSize: '11px', color: '#7A2020', marginTop: '2px', lineHeight: 1.4 }}>Perro de 5 años · Nueva Córdoba</div>
                <div style={{ fontSize: '10px', color: '#C0392B', marginTop: '6px' }}>📍 2.3 km de vos</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
             <button
  onClick={() => navigate('/urgencia')}
  style={{
    flex: 1, padding: '10px', background: '#C0392B',
    color: 'white', border: 'none', borderRadius: '12px',
    fontSize: '12px', fontWeight: '500', cursor: 'pointer'
  }}>Puedo ayudar</button>
              <button style={{
                padding: '10px 14px', background: 'transparent',
                color: '#C0392B', border: '1.5px solid #FACACA',
                borderRadius: '12px', fontSize: '12px', cursor: 'pointer'
              }}>Ver más</button>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div>
          <div style={{ fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#7A4528', opacity: 0.6, marginBottom: '8px' }}>
            Tu impacto
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[['3', 'donaciones realizadas'], ['3', 'vidas ayudadas'], ['🏅', 'donante premium']].map(([num, label]) => (
              <div key={label} style={{
                flex: 1, background: '#F2E8D5', borderRadius: '16px',
                padding: '14px 10px', textAlign: 'center'
              }}>
                <div style={{ fontSize: '24px', fontWeight: '700', color: '#C4623A' }}>{num}</div>
                <div style={{ fontSize: '10px', color: '#7A4528', opacity: 0.7, marginTop: '4px', lineHeight: 1.3 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM NAV */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        height: '64px', background: 'white',
        borderTop: '1px solid #F2E8D5',
        display: 'flex', alignItems: 'center', justifyContent: 'space-around'
      }}>
        {[['🏠', 'Inicio', true], ['🗺️', 'Mapa', false], ['🔔', 'Alertas', false], ['👤', 'Perfil', false]].map(([icon, label, active]) => (
          <div key={label} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '2px', opacity: active ? 1 : 0.3, cursor: 'pointer', flex: 1
          }}>
            <span style={{ fontSize: '18px' }}>{icon}</span>
            <span style={{ fontSize: '9px', fontWeight: '500', color: active ? '#C4623A' : '#7A4528', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</span>
            {active && <div style={{ width: '4px', height: '4px', background: '#C4623A', borderRadius: '50%' }}></div>}
          </div>
        ))}
      </div>

    </div>
  )
}

export default HomeDonante