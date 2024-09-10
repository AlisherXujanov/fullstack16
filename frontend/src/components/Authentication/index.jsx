import "./style.scss"
import Heading from "../common/Heading"
import { CiLogin } from "react-icons/ci";
import { useState } from 'react'
import Login from "./Login.jsx"
import Registration from "./Registration.jsx"
import Footer from '../Footer';


function Authentication(props) {
    const [isRegistered, setIsRegistered] = useState(true)

    function toggleAuth() {
        setIsRegistered(!isRegistered)
    }

    return (
        <div className="auth-wrapper-container">
            <Heading title={isRegistered ? "Login" : "Create account"} path="Authenticate">
                <CiLogin />
            </Heading>
            
            <div className="form-wrapper">
                { isRegistered ?
                    <Login /> :
                    <Registration />
                }

                <p className="auth-toggler-container">
                    { isRegistered ?
                        <span>Don't have an account? <button onClick={toggleAuth}>Create account</button></span>
                        :
                        <span>Have an account? <button onClick={toggleAuth}>Login</button></span>
                    }
                </p>
            </div>

            <Footer />
        </div>
    );
}

export default Authentication;