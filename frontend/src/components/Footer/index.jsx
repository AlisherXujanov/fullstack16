import Img1 from "../../assets/FooterImg/footer-img-1.png";
import Img2 from "../../assets/FooterImg/footer-img-2.png";
import Img3 from "../../assets/FooterImg/footer-img-3.png";
import "./style.scss";
import { useTranslation } from "react-i18next"; // Импортируем хук для перевода

function Footer() {
    const { t } = useTranslation(); // Используем хук

    return (
        <div>
            <div className="footer">
                <div className="description">
                    <div id="first-column">
                        <h1>{t("footer.brand")}</h1>
                        <input className="email" type="text" placeholder={t("footer.emailPlaceholder")} />
                        <button className="sign-up">{t("footer.signUp")}</button>
                        <p>
                            <span style={{ margin: "10px 0", display: 'block' }}>{t("footer.contactInfo")}</span>
                            {t("footer.address")}
                        </p>
                    </div>

                    <div id="second-column">
                        <div className="footer-section">
                            <h4>{t("footer.categories")}</h4>
                            <ul>
                                {t("footer.categoryList", { returnObjects: true }).map((category, index) => (
                                    <li key={index}><a href="#">{category}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>{t("footer.customerCare")}</h4>
                            <ul>
                                {t("footer.customerCareList", { returnObjects: true }).map((care, index) => (
                                    <li key={index}><a href="#">{care}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>{t("footer.pages")}</h4>
                            <ul>
                                {t("footer.pagesList", { returnObjects: true }).map((page, index) => (
                                    <li key={index}><a href="#">{page}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social">
                <div>
                    {t("footer.rights")}
                </div>
                <div>
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                    <img src={Img3} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
