import { Outlet } from 'react-router-dom'
import Nav from "./Nav"
import Footer from '../Footer';
import Spinner from "../common/Spinner"
import { context } from '../../store';
import { useContext } from 'react';
import "./style.scss"


function Navigation() {
    const { state, dispatch } = useContext(context)

    return (
        <>
            {!state.loaded && <Spinner />}

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