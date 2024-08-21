import "./style.scss"
import Heading from "../common/Heading"
import { BsPatchQuestionFill } from "react-icons/bs";

function About() {
    return (
        <div className="about-page-wrapper">
            <Heading title="About" path="About">
                <BsPatchQuestionFill />
            </Heading>
        </div>
    );
}

export default About;