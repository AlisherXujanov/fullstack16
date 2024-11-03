import "./style.scss"
import IMG1 from "../../../assets/TrendingItemsImg/image-1.png"
import IMG2 from"../../../assets/TrendingItemsImg/image-2.png"
import IMG3 from"../../../assets/TrendingItemsImg/image-3.png"
import IMG4 from"../../../assets/TrendingItemsImg/image-4.png"
import { useTranslation } from "react-i18next";

function TrendingItems() {
    const { t } = useTranslation();
    
    return ( 
        <>
        <h1>Trending</h1>
        </>
     );
}

export default TrendingItems;