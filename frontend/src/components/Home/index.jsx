import "./style.scss"
import Heading from "../common/Heading"
import { FaHome } from "react-icons/fa";
import FeaturedProducts from "./FeaturedProducts"


function Home() {
    return (
        <div className="home-page-wrapper">
            <Heading title="Home" path="Home">
                <FaHome />
            </Heading>

            <FeaturedProducts />
        </div>
    );
}

export default Home;