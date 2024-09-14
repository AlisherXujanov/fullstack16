import "./style.scss"
import Heading from "../common/Heading"
import { FaHome } from "react-icons/fa";
import FeaturedProducts from "./FeaturedProducts"
import LatestProducts from "./LatestProducts"
import ShopexProducts from "./ShopexProducts"

function Home() {
    return (
        <div className="home-page-wrapper">
            <Heading title="Home" path="Home">
                <FaHome />
            </Heading>

            <FeaturedProducts />
            <LatestProducts />
            <ShopexProducts />

        </div>
    );
}

export default Home;