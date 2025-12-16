import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Payment } from '../pages/Payment'
import { Demand } from '../pages/Demand'
import { Plate } from '../pages/Plate'
import { EditPlate } from '../pages/EditPlate'
import { Favorites } from '../pages/Favorites'
import { CartProvider } from '../hooks/shoppingCart'

/**
 * Componente de roteamento principal da aplicação.
 *
 * O componente `AppRoutes` define as rotas da aplicação usando o pacote de roteamento `react-router-dom`.
 * Ele mapeia URLs para os componentes correspondentes que devem ser renderizados.
 * Também envolve os componentes que precisam de acesso ao carrinho de compras usando o contexto `CartProvider`.
 *
 * @returns {JSX.Element} Um elemento JSX que contém as rotas da aplicação.
 */
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
