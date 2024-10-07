import "./style.scss";
import IMG from "../../../assets/TrendingImg/trending.png";
import { useTranslation } from "react-i18next";

function Trending() {
    const { t } = useTranslation(); // Инициализация перевода

    return (
        <>
            <div className="trending-product-wrapper">
                <div className="trending-product-img">
                    <img src={IMG} alt="" />
                </div>

                <div className="trending-product-info">
                    <h1>
                        {t('trending.title')}
                    </h1>

                    <div className="trending-product-ul">
                        <ul>
                            {t('trending.features', { returnObjects: true }).map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="trending-product-btn-wrapper">
                        <button className="trending-product-btn">
                            {t('trending.button')}
                        </button>
                        <div className="trending-product-name-price">
                            <span className="trending-product-name">{t('trending.product.name')}</span> <br />
                            <span className="trending-product-price">{t('trending.product.price')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Trending;
