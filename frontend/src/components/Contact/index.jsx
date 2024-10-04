import "./style.scss"
import Heading from "../common/Heading"
import { GrContact } from "react-icons/gr"
import { useState } from "react"
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

function Contact() {
    const [form, setForm] = useState({
        client_name: "",
        client_email: "",
        message_subject: "",
        message: ""
    })

    function submit(e) {
        e.preventDefault()

        emailjs
            .send('service_8aytxhp', 'template_dbx4qji', form, {
                publicKey: 'mbcCG18ZiPltCRfB-',
            })
            .then(
                (response) => {
                    toast.success('Successfully sent the message!')
                },
                (err) => {
                    console.log(err)
                    toast.fail('FAILED to send message')
                },
            );
    }

    function handleFormInfo(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    return (
        <>
            <Heading title="Contact Us" path="Contact Us">
                <GrContact />
            </Heading>
            <div className="contact-page-wrapper">
                <div className="form-wrapper">
                    <form onSubmit={submit}>
                        <div className="form-control row">
                            <input type="text" placeholder="Your name*" onChange={handleFormInfo} name="client_name" required />
                            <input type="email" placeholder="Your E-mail" onChange={handleFormInfo} name="client_email" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject*" onChange={handleFormInfo} name="message_subject" required />
                        </div>
                        <div className="form-control">
                            <textarea rows={8} name="message" onChange={handleFormInfo}
                                placeholder="Type your message*"></textarea>
                        </div>
                        <div className="form-control">
                            <button>Send Mail</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact