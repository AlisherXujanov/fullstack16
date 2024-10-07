import React from 'react';
import { useTranslation } from 'react-i18next';
import Img1 from "../../../assets/ShopexImg/img-1.png";
import Img2 from "../../../assets/ShopexImg/img-2.png";
import Img3 from "../../../assets/ShopexImg/img-3.png";
import Img4 from "../../../assets/ShopexImg/img-4.png";
import "./style.scss";

function ShopexProducts() {
    const { t } = useTranslation(); 
    let imgs = [Img1, Img2, Img3, Img4];

    return (
        <div className="shopex-offers-wrapper">
            <h1>{t('shopex.1.title')}</h1> 

            <div className="offers-container">
                {Array.from({ length: 4 }).map((_, index) => ( 
                    <div key={index} className="offer">
                        <img src={imgs[index % imgs.length]} alt={`Offer ${index + 1}`} />
                        <h2>{t(`shopex.${index + 1}.title`)}</h2>
                        <p>{t(`shopex.${index + 1}.text`)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopexProducts;
