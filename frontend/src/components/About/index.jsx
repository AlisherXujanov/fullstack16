import "./style.scss"
import Heading from "../common/Heading"
import { BsPatchQuestionFill } from "react-icons/bs";
import Test from "../Test.jsx"
import Bemiyya from "../Bemiyya.jsx"

function About(props) {
    // props = props ? props : "..."

    return (
        <div className="about-page-wrapper">
            <Heading title="About" path="About">
                <BsPatchQuestionFill />
            </Heading>

            <Bemiyya />
            {/* plus || minus || division || multiply */}
        </div>
    );
}

export default About;