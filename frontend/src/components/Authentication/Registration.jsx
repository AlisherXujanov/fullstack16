import { useState } from 'react'
import { toast } from 'react-toastify'
import { BASE_URL } from "../../store"
import axios from 'axios'


function Registration(props) {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    })

    async function submit(e) {
        e.preventDefault()

        let response = await axios.post(BASE_URL + 'user', form)

        toast.success("Account created successfully", { theme: "dark" })
    }

    function handleFormInformation(e) {
        const { value, name } = e.target
        setForm({ ...form, [name]: value })
    }

    return (
        <form onSubmit={submit}>
            <header>
                <h2>Create account</h2>
                <p>Please, enter your account details below</p>
            </header>

            <div className="form-control">
                <input type="text" placeholder="Username" name='username'
                    onChange={handleFormInformation}
                />
            </div>
            <div className="form-control">
                <input type="text" placeholder="Email Address" name='email'
                    onChange={handleFormInformation}
                />
            </div>
            <div className="form-control">
                <input type="password" placeholder="Password" name='password'
                    onChange={handleFormInformation}
                />
            </div>
            <div className="form-control">
                <input type="password" placeholder="Password confirmation" name='password2'
                    onChange={handleFormInformation}
                />
            </div>
            <div className="form-control">
                <button type="submit">Sign up</button>
            </div>
        </form>
    )
}

export default Registration;