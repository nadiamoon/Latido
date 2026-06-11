import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { supabase } from '../supabase'

function RutaProtegida({ children }) {
  const [verificando, setVerificando] = useState(true)
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const verificar = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUsuario(user)
      setVerificando(false)
    }
    verificar()
  }, [])

  if (verificando) return null

  if (!usuario) return <Navigate to="/login" />

  return children
}

export default RutaProtegida