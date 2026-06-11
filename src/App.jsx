import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bienvenida from './pages/Bienvenida'
import HomeDonante from './pages/HomeDonante'
import Urgencia from './pages/Urgencia'
import Registro from './pages/Registro'
import Mapa from './pages/Mapa'
import Alertas from './pages/Alertas'
import Perfil from './pages/Perfil'
import Login from './pages/Login'
import RegistroPerro from './pages/RegistroPerro'
import PanelAdmin from './pages/PanelAdmin'
import RutaProtegida from './components/RutaProtegida'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
<Route path="/registro-perro" element={<RutaProtegida><RegistroPerro /></RutaProtegida>} />
<Route path="/admin" element={<RutaProtegida><PanelAdmin /></RutaProtegida>} />
        <Route path="/home" element={<RutaProtegida><HomeDonante /></RutaProtegida>} />
        <Route path="/urgencia" element={<RutaProtegida><Urgencia /></RutaProtegida>} />
        <Route path="/mapa" element={<RutaProtegida><Mapa /></RutaProtegida>} />
        <Route path="/alertas" element={<RutaProtegida><Alertas /></RutaProtegida>} />
        <Route path="/perfil" element={<RutaProtegida><Perfil /></RutaProtegida>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App