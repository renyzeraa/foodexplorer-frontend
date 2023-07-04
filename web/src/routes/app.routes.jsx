import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Payment } from '../pages/Payment'
import { Demand } from '../pages/Demand'
import { Plate } from '../pages/Plate'
import { EditPlate } from '../pages/EditPlate'
import { Favorites } from '../pages/Favorites'
import { CartProvider } from '../hooks/shoppingCart'

export function AppRoutes() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/demand" element={<Demand />} />
        <Route path="/plates" element={<Plate />} />
        <Route path="/plates/:id" element={<EditPlate />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </CartProvider>
  )
}
