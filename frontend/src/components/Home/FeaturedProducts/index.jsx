import "./style.scss"
import Item from "./Item.jsx"
import FProductsJSON from "../../../db/featured_products.json"
import Img1 from "../../../assets/FeaturesImg/image1.png"
import Img2 from "../../../assets/FeaturesImg/image2.png"
import Img3 from "../../../assets/FeaturesImg/image3.png"
import Img4 from "../../../assets/FeaturesImg/image4.png"
import { useTranslation } from 'react-i18next';

function FeaturedProducts() {
    let imgs = [Img1, Img2, Img3, Img4];
    const { t } = useTranslation();
    return (
        <section className="featured-products-wrapper">
              <h1>{t('featured.title')}</h1>

            <div className="products-content">
                {
                    FProductsJSON.map((product, index) => {
                        return (
                            <div key={index}>
                                <Item 
                                    id={product.id}
                                    img={imgs[product.id % imgs.length]} 
                                    title={product.title}
                                    code={product.code}
                                    price={product.price}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default FeaturedProducts;