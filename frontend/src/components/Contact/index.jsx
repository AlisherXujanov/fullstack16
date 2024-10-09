import "./style.scss";
import Heading from "../common/Heading";
import { GrContact } from "react-icons/gr";
import { useState, useContext } from "react";
import { context } from "../../store";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Image from "../../assets/ContactsAssets/GroupWork.png";
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();
    const { state, dispatch } = useContext(context);
    const [form, setForm] = useState({
        client_name: "",
        client_email: "",
        message_subject: "",
        message: ""
    });

    function submit(e) {
        e.preventDefault();
        dispatch({ type: "SET_LOADED", payload: false });

        emailjs
            .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            .then(
                (response) => {
                    dispatch({ type: "SET_LOADED", payload: true });
                    toast.success(t("contact.messageSent"));
                },
                (err) => {
                    console.log(err);
                    dispatch({ type: "SET_LOADED", payload: true });
                    toast.error(t("contact.messageFailed"));
                }
            );
    }

    function handleFormInfo(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    return (
        <>
            <Heading title={t("heading.contact")} path={t("heading.path.contact")}>
                <GrContact />
            </Heading>

            <div className="contact-page-wrapper">
                <div className="info-contact-section">
                    <div className="info-about">
                        <h2>{t("contact.infoTitle")}</h2>
                        <p>
                            {t("contact.infoDescription")}
                        </p>

                        <div className="ball-container">
                            <div className="ball violet-ball"></div>
                            <div className="ball pink-ball"></div>
                            <div className="ball blue-ball"></div>
                        </div>
                    </div>

                    <div className="contact-way">
                        <h2>{t("contact.contactTitle")}</h2>
                        <div className="contact-items">
                            <div className="contact-item phone">
                                <div className="circle">📞</div>
                                <p>
                                    {t("contact.phone")} <br />
                                    {t("contact.email")}
                                </p>
                            </div>

                            <div className="contact-item email">
                                <div className="circle">🛠️</div>
                                <p>{t("contact.supportTitle")} <br />
                                    {t("contact.supportTime")}</p>
                            </div>

                            <div className="contact-item address">
                                <div className="circle">🍫</div>
                                <p>{t("contact.addressTitle")} <br />
                                    {t("contact.addressDetails")}</p>
                            </div>

                            <div className="contact-item support">
                                <div className="circle">📧</div>
                                <p>{t("contact.shippingTitle")} <br />
                                    {t("contact.shippingDetails")}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-and-image">
                    <div className="form-wrapper">
                        <h2>{t("contact.formTitle")}</h2>
                        <p>
                            {t("contact.formDescription")}
                        </p>
                        <form onSubmit={submit}>
                            <div className="form-control row">
                                <input type="text" placeholder={t("contact.placeholderName")} onChange={handleFormInfo} name="client_name" required />
                                <input type="email" placeholder={t("contact.placeholderEmail")} onChange={handleFormInfo} name="client_email" required />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder={t("contact.placeholderSubject")} onChange={handleFormInfo} name="message_subject" required />
                            </div>
                            <div className="form-control">
                                <textarea rows={8} name="message" onChange={handleFormInfo} placeholder={t("contact.placeholderMessage")} required></textarea>
                            </div>
                            <div className="form-control">
                                <button type="submit" disabled={!state.loaded}>{t("contact.sendButton")}</button>
                            </div>
                        </form>
                    </div>
                    <div className="image-section">
                        <img src={Image} alt="Group Work" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
