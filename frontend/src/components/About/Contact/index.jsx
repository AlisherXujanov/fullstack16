import "./style.scss"
import Img from "../../../assets/AboutImg/contact-img.png"

function Contact() {
    return (
        <div className="contact-section-wrapper">
            <div className="photo"><img src={Img} alt="" /></div>

            <div className="contact-info">
                <h1>Know About Our Ecomerce <br /> Business, History </h1>

                <p>Feel free to get in touch with us via phone
                    email or simply send us message.
                    We would love to hear from you !
                    Feel free to get in touch with us via phone,
                    We would love to hear from you dear client!
                    We are here to help you.</p>

                <button className="contact-btn">Contact Us</button>
            </div>
        </div>
    );
}

export default Contact;