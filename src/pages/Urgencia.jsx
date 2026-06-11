import { useNavigate } from 'react-router-dom'
function Urgencia() {
  const navigate = useNavigate()
  return (
    <div style={{
      minHeight: '100vh',
      background: '#FAF6F0',
      fontFamily: 'sans-serif',
      paddingBottom: '80px'
    }}>

      {/* HEADER */}
      <div style={{
        background: '#C0392B',
        padding: '16px 24px 28px',
        borderRadius: '0 0 28px 28px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', width: '160px', height: '160px',
          borderRadius: '50%', background: 'rgba(255,255,255,0.06)',
          top: '-40px', right: '-30px'
        }}></div>

        <div
  onClick={() => navigate(-1)}
  style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', marginBottom: '12px', cursor: 'pointer' }}>←</div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '10px', height: '10px',
            background: '#F4956A', borderRadius: '50%',
            animation: 'pulse 1.2s ease-in-out infinite',
            flexShrink: 0
          }}></div>
          <div>
            <div style={{ fontSize: '22px', fontWeight: '700', color: 'white' }}>Urgencia activa</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', marginTop: '3px' }}>Buscando donantes cerca tuyo</div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* MAPA PLACEHOLDER */}
        <div style={{
          background: '#F2E8D5',
          borderRadius: '20px',
          height: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(122,69,40,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(122,69,40,0.07) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
          <div style={{ fontSize: '32px', position: 'relative', zIndex: 1 }}>📍</div>
          <div style={{
            position: 'absolute', fontSize: '13px', fontWeight: '500',
            color: '#7A4528', opacity: 0.5, bottom: '14px'
          }}>Mapa de donantes cercanos</div>
        </div>

        {/* DONANTES */}
        <div style={{ fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#7A4528', opacity: 0.6 }}>
          Donantes disponibles cerca
        </div>

        {[
          { nombre: 'Simón', raza: 'Golden · Tipo A · 4 años', km: '2.3 km', bg: '#FEF0E8' },
          { nombre: 'Luna', raza: 'Labrador · Tipo A · 3 años', km: '4.1 km', bg: '#F0E6F6' },
        ].map((perro) => (
          <div key={perro.nombre} style={{
            background: 'white', borderRadius: '16px',
            padding: '12px 14px', display: 'flex',
            alignItems: 'center', gap: '12px',
            boxShadow: '0 2px 12px rgba(61,35,20,0.06)'
          }}>
            <div style={{
              width: '42px', height: '42px', borderRadius: '50%',
              background: perro.bg, display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: '20px'
            }}>🐕</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#3D2314' }}>{perro.nombre}</div>
              <div style={{ fontSize: '11px', color: '#7A4528', opacity: 0.6, marginTop: '1px' }}>{perro.raza}</div>
            </div>
            <div style={{
              fontSize: '11px', fontWeight: '500',
              color: '#C4623A', background: '#F5E0D6',
              padding: '4px 10px', borderRadius: '20px'
            }}>{perro.km}</div>
          </div>
        ))}

        {/* BOTON ALERTAR */}
        <button style={{
          width: '100%', padding: '16px',
          background: '#C0392B', color: 'white',
          border: 'none', borderRadius: '16px',
          fontSize: '15px', fontWeight: '600',
          cursor: 'pointer', marginTop: '8px',
          boxShadow: '0 4px 20px rgba(192,57,43,0.35)'
        }}>
          Alertar a todos los donantes
        </button>

      </div>

    </div>
  )
}

export default Urgencia