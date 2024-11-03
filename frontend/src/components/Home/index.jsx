import "./style.scss"
import Heading from "../common/Heading"
import { FaHome } from "react-icons/fa";
import { context } from "../../store";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import FeaturedProducts from "./FeaturedProducts"
import LatestProducts from "./LatestProducts"
import ShopexProducts from "./ShopexProducts"
import Trending from "./TrendingP";
import TrendingItems from "./TrendingItems";

function Home() {
    const { t } = useTranslation();
    const { state, setState } = useContext(context)

    return (
        <div className="home-page-wrapper">
            <Heading title={t("heading.home")} path={t("heading.path.home")}>
                <FaHome />
            </Heading>
            <FeaturedProducts />
            <LatestProducts />
            <ShopexProducts />
            <Trending />
            <TrendingItems />
        </div>
    );
}

export default Home;