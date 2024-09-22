import "./style.scss"
import Heading from "../common/Heading"
import { BsInfoSquareFill } from "react-icons/bs";
import Contact from './Contact';
import ShopexProducts from "../Home/ShopexProducts";
import Reviews from "./Reviews";
function About(props) {
    // props = props ? props : "..."

    return (
        <div className="about-page-wrapper">
            <Heading title="About" path="About">
                <BsInfoSquareFill />
            </Heading>
            <Contact />
            <ShopexProducts />
            <Reviews />
        </div>
    );
}

export default About;