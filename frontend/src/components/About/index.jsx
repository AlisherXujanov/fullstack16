import "./style.scss"
import Heading from "../common/Heading"
import { BsPatchQuestionFill } from "react-icons/bs";
import Test from "../Test.jsx"

function About() {
    return (
        <div className="about-page-wrapper">
            <Heading title="About" path="About">
                <BsPatchQuestionFill />
            </Heading>

            <Test bemiyya={5+5} >
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque dignissimos rem, nulla cumque vitae voluptas tempore saepe ipsam possimus asperiores repellendus voluptate reprehenderit harum dolore atque non maiores ab voluptatem.</p>
            </Test>
        </div>
    );
}

export default About;