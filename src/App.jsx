import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bienvenida from './pages/Bienvenida'
import HomeDonante from './pages/HomeDonante'
import Urgencia from './pages/Urgencia'
import Registro from './pages/Registro'
import Mapa from './pages/Mapa'
import Alertas from './pages/Alertas'
import Perfil from './pages/Perfil'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/home" element={<HomeDonante />} />
        <Route path="/urgencia" element={<Urgencia />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/alertas" element={<Alertas />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App