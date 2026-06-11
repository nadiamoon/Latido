import { useNavigate } from 'react-router-dom'

function Bienvenida() {
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh',
      background: '#3D2314',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      fontFamily: 'sans-serif'
    }}>

      <div style={{ fontSize: '64px', marginBottom: '16px' }}>🐾</div>

      <h1 style={{
        color: '#FAF6F0',
        fontSize: '48px',
        margin: '0 0 8px 0',
        letterSpacing: '-1px'
      }}>
        Latido
      </h1>

      <p style={{
        color: '#E8D5B7',
        fontSize: '16px',
        opacity: 0.7,
        textAlign: 'center',
        marginBottom: '48px',
        lineHeight: 1.6
      }}>
        Red de donación de sangre<br />para perros en Argentina
      </p>

      <button
        onClick={() => navigate('/registro')}
        style={{
          width: '100%',
          maxWidth: '320px',
          padding: '16px',
          background: '#C4623A',
          color: 'white',
          border: 'none',
          borderRadius: '16px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          marginBottom: '12px'
        }}>
        Registrarme
      </button>

      <button
        onClick={() => navigate('/login')}
        style={{
          width: '100%',
          maxWidth: '320px',
          padding: '16px',
          background: 'transparent',
          color: '#E8D5B7',
          border: '1.5px solid rgba(232,213,183,0.3)',
          borderRadius: '16px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
        Ya tengo cuenta
      </button>

    </div>
  )
}

export default Bienvenida