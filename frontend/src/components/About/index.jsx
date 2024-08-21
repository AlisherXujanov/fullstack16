import "./style.scss"
import Heading from "../common/Heading"
import { FcAbout } from "react-icons/fc";

function About() {
    return (
        <div className="about-page-wrapper">
            <Heading title="About" path="About">
                <FcAbout />
            </Heading>
        </div>
    );
}

export default About;