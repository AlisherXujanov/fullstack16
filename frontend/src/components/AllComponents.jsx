import { Routes, Route, useLocation } from 'react-router-dom'
import Home from "./Home"
import About from './About'
import Navigation from './Navigation'
import PageNotFound from './PageNotFound'
import Authentication from './Authentication'
import Products from './Products'
import Blog from './Blog'
import Wishlist from './Wishlist'
import Cart from './Cart'
import Contact from './Contact'
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

                {/* http://localhost:5173/about */}
                <Route path="blog" element={<Blog />} />

                {/* http://localhost:5173/login */}
                <Route path="login" element={<Authentication />} />

                {/* http://localhost:5173/products */}
                <Route path="products" element={<Products />} />

                {/* http://localhost:5173/wishlist */}
                <Route path="wishlist" element={<Wishlist />} />

                {/* http://localhost:5173/products/22 */}
                <Route path="products/:id" element={<ProductDetails />} />

                {/* http://localhost:5173/cart */}
                <Route path="cart" element={<Cart />} />

                {/* http://localhost:5173/contact */}
                <Route path="contact" element={<Contact />} />

                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default AllComponents;