import { Outlet } from 'react-router-dom'
import Nav from "./Nav"
import Footer from '../Footer';
import "./style.scss"

function Navigation() {
    return (
        <>
            <header>
                <Nav />
            </header>

            <main id="outlet-wrapper">
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default Navigation;