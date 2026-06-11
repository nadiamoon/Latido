import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

function RegistroPerro() {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState('')
  const [raza, setRaza] = useState('')
  const [peso, setPeso] = useState('')
  const [edad, setEdad] = useState('')
  const [tipoSangre, setTipoSangre] = useState('')
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')

  const handleGuardar = async () => {
    if (!nombre || !raza || !peso || !edad || !tipoSangre) {
      setError('Por favor completá todos los campos')
      return
    }
    setCargando(true)
    setError('')

    const { data: { user } } = await supabase.auth.getUser()

    const { error } = await supabase.from('perros').insert({
      duenio_id: user.id,
      nombre,
      raza,
      peso: parseFloat(peso),
      edad: parseInt(edad),
      tipo_sangre: tipoSangre
    })

    if (error) {
      setError(error.message)
      setCargando(false)
    } else {
      navigate('/home')
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#FAF6F0', fontFamily: 'sans-serif', paddingBottom: '40px' }}>

      {/* HEADER */}
      <div style={{ background: '#F2E8D5', padding: '16px 24px 24px', borderRadius: '0 0 24px 24px', borderBottom: '1px solid #E8D5B7' }}>
        <div onClick={() => navigate(-1)} style={{ fontSize: '20px', color: '#7A4528', marginBottom: '10px', cursor: 'pointer' }}>←</div>
        <div style={{ fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#C4623A', marginBottom: '6px' }}>Paso 2 de 3</div>
        <div style={{ fontSize: '22px', fontWeight: '600', color: '#3D2314' }}>Datos de tu perro</div>
        <div style={{ marginTop: '14px', height: '4px', background: '#E8D5B7', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: '66%', background: '#C4623A', borderRadius: '4px' }}></div>
        </div>
      </div>

      {/* FORMULARIO */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* NOMBRE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#7A4528', opacity: 0.7 }}>Nombre del perro</div>
          <input type="text" placeholder="Ej: Simón" value={nombre} onChange={e => setNombre(e.target.value)}
            style={{ background: 'white', border: '1.5px solid #E8D5B7', borderRadius: '12px', padding: '14px 16px', fontSize: '14px', color: '#3D2314', fontFamily: 'sans-serif', outline: 'none', width: '100%' }} />
        </div>

        {/* RAZA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#7A4528', opacity: 0.7 }}>Raza</div>
          <input type="text" placeholder="Ej: Golden Retriever" value={raza} onChange={e => setRaza(e.target.value)}
            style={{ background: 'white', border: '1.5px solid #E8D5B7', borderRadius: '12px', padding: '14px 16px', fontSize: '14px', color: '#3D2314', fontFamily: 'sans-serif', outline: 'none', width: '100%' }} />
        </div>

        {/* PESO Y EDAD */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#7A4528', opacity: 0.7 }}>Peso (kg)</div>
            <input type="number" placeholder="Ej: 32" value={peso} onChange={e => setPeso(e.target.value)}
              style={{ background: 'white', border: '1.5px solid #E8D5B7', borderRadius: '12px', padding: '14px 16px', fontSize: '14px', color: '#3D2314', fontFamily: 'sans-serif', outline: 'none', width: '100%' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#7A4528', opacity: 0.7 }}>Edad (años)</div>
            <input type="number" placeholder="Ej: 4" value={edad} onChange={e => setEdad(e.target.value)}
              style={{ background: 'white', border: '1.5px solid #E8D5B7', borderRadius: '12px', padding: '14px 16px', fontSize: '14px', color: '#3D2314', fontFamily: 'sans-serif', outline: 'none', width: '100%' }} />
          </div>
        </div>

        {/* TIPO DE SANGRE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#7A4528', opacity: 0.7 }}>Tipo de sangre</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['DEA 1.1+', 'DEA 1.1-', 'DEA 1.2+', 'DEA 1.2-', 'No sé'].map(tipo => (
              <div key={tipo} onClick={() => setTipoSangre(tipo)}
                style={{
                  padding: '10px 16px', borderRadius: '20px', fontSize: '13px', cursor: 'pointer', fontWeight: '500',
                  background: tipoSangre === tipo ? '#F5E0D6' : 'white',
                  border: tipoSangre === tipo ? '1.5px solid #C4623A' : '1.5px solid #E8D5B7',
                  color: tipoSangre === tipo ? '#C4623A' : '#7A4528'
                }}>
                {tipo}
              </div>
            ))}
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <div style={{ background: '#FDECEA', border: '1.5px solid #FACACA', borderRadius: '12px', padding: '12px 16px', fontSize: '13px', color: '#C0392B' }}>
            {error}
          </div>
        )}

        {/* BOTON */}
        <button onClick={handleGuardar} disabled={cargando}
          style={{
            width: '100%', padding: '16px',
            background: cargando ? '#E8D5B7' : '#C4623A',
            color: 'white', border: 'none', borderRadius: '16px',
            fontSize: '15px', fontWeight: '600', cursor: cargando ? 'not-allowed' : 'pointer',
            marginTop: '8px', boxShadow: cargando ? 'none' : '0 4px 20px rgba(196,98,58,0.35)'
          }}>
          {cargando ? 'Guardando...' : 'Continuar →'}
        </button>

      </div>
    </div>
  )
}

export default RegistroPerro