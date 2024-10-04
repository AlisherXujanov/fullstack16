import "./style.scss";
import Heading from "../common/Heading";
import { GrContact } from "react-icons/gr";
import { useState, useContext } from "react";
import { context } from "../../store";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Image from "../../assets/ContactsAssets/GroupWork.png"; // Импорт картинки

function Contact() {
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
            .send('', '', form, {
                publicKey: '-',
            })
            .then(
                (response) => {
                    dispatch({ type: "SET_LOADED", payload: true });
                    toast.success("Message sent successfully!");
                },
                (err) => {
                    console.log(err);
                    dispatch({ type: "SET_LOADED", payload: true });
                    toast.error("Failed to send the message");
                }
            );
    }

    function handleFormInfo(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    return (
        <>
            <Heading title="Contact Us" path="Contact Us">
                <GrContact />
            </Heading>

            <div className="contact-page-wrapper">
                <div className="info-contact-section">
                    <div className="info-about">
                        <h2>Information About Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mattis neque ultrices tristique amet erat vitae eget dolor.
                            Fusce lobortis, accumsan bibendum quam.
                        </p>

                        <div className="ball-container">
                            <div className="ball violet-ball"></div>
                            <div className="ball pink-ball"></div>
                            <div className="ball blue-ball"></div>
                        </div>
                    </div>

                    <div className="contact-way">
                        <h2>Contact Way</h2>
                        <div className="contact-items">
                            <div className="contact-item phone">
                                <div className="circle">📞</div>
                                <p>Tel: 877-67-88-99 <br />
                                E-mail: shop@store.com</p>
                            </div>

                            <div className="contact-item email">
                                <div className="circle">📧</div>
                                <p>Support Forum <br />
                                For over 24h</p>
                            </div>

                            <div className="contact-item address">
                                <div className="circle">🍫</div>
                                <p>20 Margaret St, London <br />
                                Great Britian, 3NM98-LK</p>
                            </div>

                            <div className="contact-item support">
                                <div className="circle">🛠️</div>
                                <p>Free Standart shiping <br />
                                on all orders</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-and-image">
                    <div className="form-wrapper">
                        <h2>Get In Touch</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                        <form onSubmit={submit}>
                            <div className="form-control row">
                                <input type="text" placeholder="Your name*" onChange={handleFormInfo} name="client_name" required />
                                <input type="email" placeholder="Your E-mail" onChange={handleFormInfo} name="client_email" required />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Subject*" onChange={handleFormInfo} name="message_subject" required />
                            </div>
                            <div className="form-control">
                                <textarea rows={8} name="message" onChange={handleFormInfo} placeholder="Type your message*"></textarea>
                            </div>
                            <div className="form-control">
                                <button type="submit" disabled={!state.loaded}>Send Mail</button>
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
