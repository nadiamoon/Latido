import { useNavigate } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix para los íconos de Leaflet con Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// Donantes ficticios por ahora
const donantes = [
  { id: 1, nombre: 'Simón', raza: 'Golden', tipo: 'DEA 1.1+', lat: -31.4135, lng: -64.1811, duenio: 'María' },
  { id: 2, nombre: 'Luna', raza: 'Labrador', tipo: 'DEA 1.1-', lat: -31.4200, lng: -64.1900, duenio: 'Carlos' },
  { id: 3, nombre: 'Thor', raza: 'Pastor Alemán', tipo: 'DEA 1.2+', lat: -31.4050, lng: -64.1750, duenio: 'Laura' },
]

function Mapa() {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: '100vh', background: '#FAF6F0', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column' }}>

      {/* HEADER */}
      <div style={{ background: '#3D2314', padding: '16px 24px 24px', borderRadius: '0 0 28px 28px' }}>
        <div style={{ fontSize: '22px', color: '#FAF6F0', fontWeight: '600', marginTop: '8px' }}>Mapa de donantes</div>
        <div style={{ fontSize: '12px', color: '#E8D5B7', opacity: 0.6, marginTop: '4px' }}>Córdoba · {donantes.length} donantes activos</div>
      </div>

      {/* MAPA */}
      <div style={{ flex: 1, margin: '20px', borderRadius: '20px', overflow: 'hidden' }}>
        <MapContainer
          center={[-31.4135, -64.1811]}
          zoom={13}
          style={{ height: '100%', minHeight: '400px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap'
          />
          {donantes.map(d => (
            <Marker key={d.id} position={[d.lat, d.lng]}>
              <Popup>
                <div style={{ fontFamily: 'sans-serif', fontSize: '13px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '4px' }}>🐕 {d.nombre}</div>
                  <div>{d.raza}</div>
                  <div>Sangre: {d.tipo}</div>
                  <div style={{ color: '#C4623A', marginTop: '4px' }}>Dueño: {d.duenio}</div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* BOTTOM NAV */}
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