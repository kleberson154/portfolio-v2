import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SmartStockProject from '../pages/SmartStockProject'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/projects/smartstock"
        element={<SmartStockProject />}
      />
    </Routes>
  )
}
