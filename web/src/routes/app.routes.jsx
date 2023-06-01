import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Payment } from '../pages/Payment'
import { Demand } from '../pages/Demand'
import { DemandAdmin } from '../pages/DemandAdmin'
import { Plate } from '../pages/Plate'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/demand" element={<Demand />} />
            <Route path="/demandadmin" element={<DemandAdmin />} />
            <Route path="/plates" element={<Plate />} />
            {/* <Route path="/favorites" element={<Favorites />} /> */}
        </Routes>
    )
}
