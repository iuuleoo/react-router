import { Routes, Route } from "react-router"

import { Home } from "../pages/Home"
import { Products } from "../pages/Product"
export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/products" index element={<Products />} />
        </Routes>
    )
}