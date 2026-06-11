import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

function Registro() {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [rol, setRol] = useState('')
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')

  const handleRegistro = async () => {
    if (!nombre || !email || !password || !ciudad || !rol) {
      setError('Por favor completá todos los campos')
      return
    }
    setCargando(true)
    setError('')

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { nombre, ciudad, rol }
      }
    })

    if (error) {
      setError(error.message)
      setCargando(false)
    } else {
      navigate('/home')
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FAF6F0',
      fontFamily: 'sans-serif',
      paddingBottom: '40px'
    }}>

      {/* HEADER */}
      <div style={{
        background: '#F2E8D5',
        padding: '16px 24px 24px',
        borderRadius: '0 0 24px 24px',
        borderBottom: '1px solid #E8D5B7'
      }}>
        <div onClick={() => navigate('/')} style={{ fontSize: '20px', color: '#7A4528', marginBottom: '10px', cursor: 'pointer' }}>←</div>
        <div style={{ fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#C4623A', marginBottom: '6px' }}>Paso 1 de 3</div>
        <div style={{ fontSize: '22px', fontWeight: '600', color: '#3D2314' }}>Creá tu cuenta</div>
        <div style={{ marginTop: '14px', height: '4px', background: '#E8D5B7', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: '33%', background: '#C4623A', borderRadius: '4px' }}></div>
        </div>
      </div>

      {/* FORMULARIO */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* NOMBRE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#7A4528', opacity: 0.7 }}>Nombre completo</div>
          <input
            type="text"
            placeholder="Ej: María González"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            style={{ background: 'white', border: '1.5px solid #E8D5B7', borderRadius: '12px', padding: '14px 16px', fontSize: '14px', color: '#3D2314', fontFamily: 'sans-serif', outline: 'none', width: '100%' }}
          />
        </div>

        {/* EMAIL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#7A4528', opacity: 0.7 }}>Email</div>
          <input
            type="email"
            placeholder="Ej: maria@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ background: 'white', border: '1.5px solid #E8D5B7', borderRadius: '12px', padding: '14px 16px', fontSize: '14px', color: '#3D2314', fontFamily: 'sans-serif', outline: 'none', width: '100%' }}
          />
        </div>

        {/* CONTRASEÑA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#7A4528', opacity: 0.7 }}>Contraseña</div>
          <input
            type="password"
            placeholder="Mínimo 6 caracteres"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ background: 'white', border: '1.5px solid #E8D5B7', borderRadius: '12px', padding: '14px 16px', fontSize: '14px', color: '#3D2314', fontFamily: 'sans-serif', outline: 'none', width: '100%' }}
          />
        </div>

        {/* ROL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#7A4528', opacity: 0.7 }}>Quiero registrarme como</div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[['🦮', 'donante', 'Tengo un perro que puede donar'], ['🆘', 'receptor', 'Necesito sangre para mi perro']].map(([icon, value, desc]) => (
              <div
                key={value}
                onClick={() => setRol(value)}
                style={{
                  flex: 1, background: rol === value ? '#F5E0D6' : 'white',
                  border: rol === value ? '1.5px solid #C4623A' : '1.5px solid #E8D5B7',
                  borderRadius: '16px', padding: '14px 10px', textAlign: 'center', cursor: 'pointer'
                }}>
                <div style={{ fontSize: '24px', marginBottom: '6px' }}>{icon}</div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#3D2314', textTransform: 'capitalize' }}>{value}</div>
                <div style={{ fontSize: '10px', color: '#7A4528', opacity: 0.6, marginTop: '3px', lineHeight: 1.3 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CIUDAD */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#7A4528', opacity: 0.7 }}>Ciudad</div>
          <input
            type="text"
            placeholder="Ej: Córdoba"
            value={ciudad}
            onChange={e => setCiudad(e.target.value)}
            style={{ background: 'white', border: '1.5px solid #E8D5B7', borderRadius: '12px', padding: '14px 16px', fontSize: '14px', color: '#3D2314', fontFamily: 'sans-serif', outline: 'none', width: '100%' }}
          />
        </div>

        {/* ERROR */}
        {error && (
          <div style={{ background: '#FDECEA', border: '1.5px solid #FACACA', borderRadius: '12px', padding: '12px 16px', fontSize: '13px', color: '#C0392B' }}>
            {error}
          </div>
        )}

        {/* BOTON */}
        <button
          onClick={handleRegistro}
          disabled={cargando}
          style={{
            width: '100%', padding: '16px',
            background: cargando ? '#E8D5B7' : '#C4623A',
            color: 'white', border: 'none', borderRadius: '16px',
            fontSize: '15px', fontWeight: '600', cursor: cargando ? 'not-allowed' : 'pointer',
            marginTop: '8px', boxShadow: cargando ? 'none' : '0 4px 20px rgba(196,98,58,0.35)'
          }}>
          {cargando ? 'Creando cuenta...' : 'Continuar →'}
        </button>

      </div>
    </div>
  )
}

export default Registro