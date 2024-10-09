import "./style.scss"
import Heading from "../common/Heading"
import { MdFavoriteBorder } from "react-icons/md";
import { context } from "../../store"
import { useContext } from 'react'
import FProductsJSON from "../../db/featured_products.json"
import Item from "../Home/FeaturedProducts/Item.jsx"
import Img from "../../assets/FeaturesImg/image2.png"
import { useTranslation } from "react-i18next";

function Wishlist() {
    const { t } = useTranslation();
    const { state, dispatch } = useContext(context)

    // state.selectedProducts = [1, 2, 3, 4 ....]
    // FProductsJSON  =  [{id:1, ...}, {id:2, ...}, {id:3, ...}, ...]

    return (
        <>
            <Heading title={t("heading.wishlist")} path={t("heading.path.wishlist")}>
                <MdFavoriteBorder />
            </Heading>
            <div className="wishlist-page-wrapper">

                <div className="products-content">
                    {
                        FProductsJSON.filter(p => 
                            state.selectedProducts.includes(p.id)
                        ).map((product, index) => {
                            return (
                                <div key={index}>
                                    <Item
                                        id={product.id}
                                        img={Img}
                                        title={product.title}
                                        code={product.code}
                                        price={product.price}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Wishlist;