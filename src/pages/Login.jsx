import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Por favor completá todos los campos')
      return
    }
    setCargando(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('Email o contraseña incorrectos')
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
        background: '#3D2314',
        padding: '16px 24px 32px',
        borderRadius: '0 0 28px 28px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        <div onClick={() => navigate('/')} style={{ alignSelf: 'flex-start', fontSize: '20px', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', marginBottom: '8px' }}>←</div>
        <div style={{ fontSize: '40px' }}>🐾</div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#FAF6F0', letterSpacing: '-0.5px' }}>Latido</div>
        <div style={{ fontSize: '13px', color: '#E8D5B7', opacity: 0.6 }}>Ingresá a tu cuenta</div>
      </div>

      {/* FORMULARIO */}
      <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#7A4528', opacity: 0.7 }}>Contraseña</div>
          <input
            type="password"
            placeholder="Tu contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ background: 'white', border: '1.5px solid #E8D5B7', borderRadius: '12px', padding: '14px 16px', fontSize: '14px', color: '#3D2314', fontFamily: 'sans-serif', outline: 'none', width: '100%' }}
          />
        </div>

        {error && (
          <div style={{ background: '#FDECEA', border: '1.5px solid #FACACA', borderRadius: '12px', padding: '12px 16px', fontSize: '13px', color: '#C0392B' }}>
            {error}
          </div>
        )}

        <button
          onClick={handleLogin}
          disabled={cargando}
          style={{
            width: '100%', padding: '16px',
            background: cargando ? '#E8D5B7' : '#C4623A',
            color: 'white', border: 'none', borderRadius: '16px',
            fontSize: '15px', fontWeight: '600',
            cursor: cargando ? 'not-allowed' : 'pointer',
            marginTop: '8px',
            boxShadow: cargando ? 'none' : '0 4px 20px rgba(196,98,58,0.35)'
          }}>
          {cargando ? 'Ingresando...' : 'Ingresar'}
        </button>

        <div
          onClick={() => navigate('/registro')}
          style={{ textAlign: 'center', fontSize: '13px', color: '#7A4528', opacity: 0.7, cursor: 'pointer', marginTop: '8px' }}>
          ¿No tenés cuenta? <span style={{ color: '#C4623A', fontWeight: '600' }}>Registrate</span>
        </div>

      </div>
    </div>
  )
}

export default Login