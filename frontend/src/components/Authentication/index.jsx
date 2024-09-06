import "./style.scss"
import Heading from "../common/Heading"
import { CiLogin } from "react-icons/ci";

function Authentication(props) {
    return (
        <div className="auth-wrapper-container">
            <Heading title="Login" path="Authenticate">
                <CiLogin />
            </Heading>
            
            
        </div>
    );
}

export default Authentication;