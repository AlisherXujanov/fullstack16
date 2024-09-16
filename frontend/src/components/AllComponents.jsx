import { Routes, Route, useLocation } from 'react-router-dom'
import Home from "./Home"
import About from './About'
import Navigation from './Navigation'
import PageNotFound from './PageNotFound'
import Authentication from './Authentication'
import Products from './Products'
import ProductDetails from './Products/ProductDetails.jsx'


function AllComponents() {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />}>
                {/* http://localhost:5173/ */}
                <Route index element={<Home />} />

                {/* http://localhost:5173/about */}
                <Route path="about" element={<About />} />

                {/* http://localhost:5173/login */}
                <Route path="login" element={<Authentication />} />

                {/* http://localhost:5173/products */}
                <Route path="products" element={<Products />} />

                {/* http://localhost:5173/products/22 */}
                <Route path="products/:id" element={<ProductDetails />} />

                {/* http://localhost:5173/contact */}
                {/* <Route path="contacts" element={<Contacts />} /> */}

                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default AllComponents;