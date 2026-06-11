import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

function PanelAdmin() {
  const navigate = useNavigate()
  const [perros, setPerros] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    cargarPerros()
  }, [])

  const cargarPerros = async () => {
    const { data } = await supabase
      .from('perros')
      .select('*, perfiles(nombre)')
      .order('created_at', { ascending: false })
    setPerros(data || [])
    setCargando(false)
  }

  const cambiarEstado = async (id, nuevoEstado) => {
    await supabase.from('perros').update({ estado: nuevoEstado }).eq('id', id)
    cargarPerros()
  }

  const colorEstado = (estado) => {
    if (estado === 'aprobado') return { bg: '#E8F5E9', color: '#2E7D32', texto: '✓ Aprobado' }
    if (estado === 'rechazado') return { bg: '#FDECEA', color: '#C0392B', texto: '✗ Rechazado' }
    return { bg: '#FFF8E1', color: '#F57F17', texto: '⏳ Pendiente' }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#FAF6F0', fontFamily: 'sans-serif', paddingBottom: '40px' }}>

      {/* HEADER */}
      <div style={{ background: '#3D2314', padding: '16px 24px 24px', borderRadius: '0 0 28px 28px' }}>
        <div onClick={() => navigate('/home')} style={{ fontSize: '20px', color: '#E8D5B7', marginBottom: '10px', cursor: 'pointer' }}>←</div>
        <div style={{ fontSize: '22px', fontWeight: '600', color: '#FAF6F0' }}>Panel de Admin</div>
        <div style={{ fontSize: '13px', color: '#E8D5B7', opacity: 0.6, marginTop: '4px' }}>Validación de donantes</div>
      </div>

      {/* CONTENIDO */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>

        {cargando && (
          <div style={{ textAlign: 'center', color: '#7A4528', opacity: 0.5, marginTop: '40px' }}>Cargando...</div>
        )}

        {!cargando && perros.length === 0 && (
          <div style={{ textAlign: 'center', color: '#7A4528', opacity: 0.5, marginTop: '40px' }}>No hay perros registrados todavía</div>
        )}

        {perros.map(perro => {
          const estado = colorEstado(perro.estado)
          return (
            <div key={perro.id} style={{ background: 'white', borderRadius: '20px', padding: '16px', border: '1.5px solid #F2E8D5' }}>

              {/* INFO */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#3D2314' }}>🐕 {perro.nombre}</div>
                  <div style={{ fontSize: '12px', color: '#7A4528', opacity: 0.7, marginTop: '3px' }}>{perro.raza} · {perro.peso}kg · {perro.edad} años</div>
                  <div style={{ fontSize: '12px', color: '#7A4528', opacity: 0.7, marginTop: '2px' }}>Sangre: {perro.tipo_sangre}</div>
                  <div style={{ fontSize: '11px', color: '#C4623A', marginTop: '4px' }}>
                    Dueño: {perro.perfiles?.nombre || 'Sin nombre'}
                  </div>
                </div>
                <div style={{ padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '500', background: estado.bg, color: estado.color }}>
                  {estado.texto}
                </div>
              </div>

              {/* BOTONES */}
              {perro.estado === 'pendiente' && (
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => cambiarEstado(perro.id, 'aprobado')}
                    style={{ flex: 1, padding: '10px', background: '#2E7D32', color: 'white', border: 'none', borderRadius: '12px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>
                    ✓ Aprobar
                  </button>
                  <button
                    onClick={() => cambiarEstado(perro.id, 'rechazado')}
                    style={{ flex: 1, padding: '10px', background: 'white', color: '#C0392B', border: '1.5px solid #FACACA', borderRadius: '12px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>
                    ✗ Rechazar
                  </button>
                </div>
              )}

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PanelAdmin