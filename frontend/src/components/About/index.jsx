import "./style.scss"
import Heading from "../common/Heading"
import { BsInfoSquareFill } from "react-icons/bs";
import Footer from '../Footer';

function About(props) {
    // props = props ? props : "..."

    return (
        <div className="about-page-wrapper">
            <Heading title="About" path="About">
                <BsInfoSquareFill />
            </Heading>
            {/* plus || minus || division || multiply */}

        </div>
    );
}

export default About;