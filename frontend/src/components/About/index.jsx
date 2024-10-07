// About.js
import "./style.scss";
import Heading from "../common/Heading";
import { BsInfoSquareFill } from "react-icons/bs";
import Contact from './Contact';
import ShopexProducts from "../Home/ShopexProducts";
import Reviews from "./Reviews";
import { useContext } from "react";
import { context } from "../../store";
import { useTranslation } from "react-i18next";

function About(props) {
    const { t } = useTranslation();
    const { state, setState } = useContext(context);

    return (
        <div className="about-page-wrapper">
            <Heading title={t("heading.about")} path={t("heading.path.about")}> 
                <BsInfoSquareFill />
            </Heading>
            <Contact />
            <ShopexProducts />
            <Reviews />
        </div>
    );
}

export default About;
