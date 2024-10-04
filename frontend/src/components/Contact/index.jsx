import "./style.scss"
import Heading from "../common/Heading"
import { GrContact } from "react-icons/gr"
import { useState } from "react"

function Contact() {
    const [form, setForm] = useState({
        client_name: "",
        client_email: "",
        message_subject: "",
        message: ""
    })

    function submit(e) {
        e.preventDefault()
        console.log("Form submitted")
    }

    return (
        <div className="contact-page-wrapper">
            <Heading title="Contact Us" path="Contact Us">
                <GrContact />
            </Heading>

            <div className="form-wrapper">
                <form onSubmit={submit}>
                    <div className="form-control row">
                        <input type="text" placeholder="Your name*" required/>
                        <input type="email" placeholder="Your E-mail" required/>
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Subject*" required />
                    </div>
                    <div className="form-control">
                        <textarea rows={8} name="message" 
                            placeholder="Type your message*"></textarea>
                    </div>
                    <div className="form-control">
                        <button>Send Mail</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact