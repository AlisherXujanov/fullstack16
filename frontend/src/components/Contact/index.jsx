import "./style.scss"
import Heading from "../common/Heading"
import { GrContact } from "react-icons/gr"
import { useState, useContext } from "react"
import { context } from "../../store"
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

function Contact() {
    const { state, dispatch } = useContext(context)

    const [form, setForm] = useState({
        client_name: "",
        client_email: "",
        message_subject: "",
        message: ""
    })

    function submit(e) {
        e.preventDefault()
        dispatch({ type: "SET_LOADED", payload: false })

        emailjs
            .send('', '', form, {
                publicKey: '-',
            })
            .then(
                (response) => {
                    dispatch({ type: "SET_LOADED", payload: true })
                    toast.success('Successfully sent the message!')
                },
                (err) => {
                    console.log(err)
                    dispatch({ type: "SET_LOADED", payload: true })
                    toast.error('FAILED to send message')
                },
            )
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
                            <button type="submit" disabled={!state.loaded}>Send Mail</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact