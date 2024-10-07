import "./style.scss";
import Img from "../../../assets/AboutImg/contact-img.png";
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation(); 

    return (
        <div className="contact-section-wrapper">
            <div className="photo"><img src={Img} alt="Contact" /></div>

            <div className="contact-info">
                <h1>{t('about.about')}</h1>

                <p>{t('about.description')}</p>

                <button className="contact-btn">{t('about.button')}</button>
            </div>
        </div>
    );
}

export default Contact;
