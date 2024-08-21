import { Routes, Route, useLocation } from 'react-router-dom'
import Home from "./Home"
import About from './About'
import Navigation from './Navigation'

function AllComponents(props) {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />

                {/* http://localhost:5173/about */}
                <Route path="about" element={<About />} />

                {/* http://localhost:5173/contact */}
                {/* <Route path="contacts" element={<Contacts />} /> */}
            </Route>
        </Routes>
    )
}

export default AllComponents;