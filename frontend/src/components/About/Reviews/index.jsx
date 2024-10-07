import "./style.scss";
import Img1 from "../../../assets/ReviewrsImg/First.png";
import Img2 from "../../../assets/ReviewrsImg/Second.png";
import Img3 from "../../../assets/ReviewrsImg/Third.png";
import { useTranslation } from 'react-i18next';

function Reviews() {
    const { t } = useTranslation(); 

    return (
        <div className="reviews-wrapper">
            <h1>{t('reviews.title')}</h1>

            <div className="reviews-container">
                <div className="photos">
                    <img src={Img2} alt="Reviewer 1" />
                    <img src={Img1} alt="Reviewer 2" />
                    <img src={Img3} alt="Reviewer 3" />
                </div>

                <div className="reviews">
                    <h2>{t('reviews.reviewerName')}</h2>
                    <h5>{t('reviews.reviewerPosition')}</h5>
                    <p>{t('reviews.reviewText')}</p>
                    <div className="pagination">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
