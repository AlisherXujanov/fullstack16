import "./style.scss"
import { BsInfoSquareFill } from "react-icons/bs";
import Heading from "../common/Heading";
import { useTranslation } from "react-i18next";
function Shop() {
    const { t } = useTranslation();
    return ( 
    <>
     <Heading title={t("heading.shop")} path={t("heading.path.shop")}> 
                <BsInfoSquareFill />
    </Heading>
    </> 
    );
}

export default Shop;