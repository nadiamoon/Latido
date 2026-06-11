import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bienvenida from './pages/Bienvenida'
import HomeDonante from './pages/HomeDonante'
import Urgencia from './pages/Urgencia'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/home" element={<HomeDonante />} />
        <Route path="/urgencia" element={<Urgencia />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App