import IMG1 from "../../../assets/TrendingItemsImg/image-1.png";
import IMG2 from "../../../assets/TrendingItemsImg/image-2.png";
import IMG3 from "../../../assets/TrendingItemsImg/image-3.png";
import IMG4 from "../../../assets/TrendingItemsImg/image-4.png";
import IMG5 from "../../../assets/TrendingItemsImg/image-5.png";
import IMG6 from "../../../assets/TrendingItemsImg/image-6.png";
import TProductsJSON from "../../../db/trending_items.json";
import { useTranslation } from "react-i18next";
import "./style.scss";

function TrendingItems() {
    const { t } = useTranslation();
    let imgs = [IMG1, IMG2, IMG3, IMG4];

    return (
        <section className="featured-products-wrapper">
            <h1>{t('trending.title')}</h1>

            <div className="products-content">
                {
                    TProductsJSON.map((product, index) => (
                        <div key={product.id} className="product-item">
                            <div className="img-wrapper">
                                <img 
                                    src={imgs[product.id % imgs.length]} 
                                    alt={product.title} 
                                    onClick={(e) => e.target.requestFullscreen()}
                                />
                            </div>
                            <h4>{product.title}</h4>
                            <div className="price-wrapper">
                                <span className="price">
                                    ${(product.price - (product.price * (product.discount / 100))).toFixed(2)}
                                </span>
                                {product.discount > 0 && (
                                    <del className="discount">
                                        ${product.price}
                                    </del>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="promotion-section">
                <div className="promo-banner" id="prom-2">
                    <h3>23% off in all products</h3>
                    <a href="#">Shop Now</a>
                    <img src={IMG6} alt="Promo Item" />
                </div>
                <div className="promo-banner">
                    <h3>23% off in all products</h3>
                    <a href="#">View Collection</a>
                    <img src={IMG5} alt="Promo Item" />
                </div>
                <div className="side-products">
                    {TProductsJSON.slice(0, 3).map((product, index) => (
                        <div key={index} className="side-product-item">
                            <img src={imgs[index % imgs.length]} alt={product.title} />
                            <div className="product-info">
                                <span>{product.title}</span>
                                <span className="price">${product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TrendingItems;
